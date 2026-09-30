#!/usr/bin/env python3
"""
Vajax Battles - Statistics Backend
Tallentaa pluginin tilastot JSON-tiedostoon Stash-palvelimella.
Stash kutsuu tätä skriptiä plugin-tehtävänä, ja kommunikoi stdin/stdoutin kautta.
"""
import copy
import json
import os
import sys

STATS_FILE = os.path.join(os.path.dirname(__file__), "..", "vajax-battles-stats.json")
STATS_FILE = os.path.normpath(STATS_FILE)

DEFAULT_STATS = {
    "version": 3,
    "totals": {
        "totalBattles": 0,
        "pointsAwarded": 0,
        "pointsDeducted": 0,
        "lastBattle": None,
        "categoryBattles": {},
        "highestWinStreak": 0,
        "highestWinStreakItem": None,
        "highestLossStreak": 0,
        "highestLossStreakItem": None,
    },
    "categoryStreaks": {},
    "items": {},
    "daily": {},
}


def load_stats():
    if not os.path.exists(STATS_FILE):
        return copy.deepcopy(DEFAULT_STATS)
    try:
        with open(STATS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError) as e:
        print(f"Vajax Battles: Failed to load stats: {e}", file=sys.stderr)
        return copy.deepcopy(DEFAULT_STATS)


def save_stats(data):
    tmp = STATS_FILE + ".tmp"
    try:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        os.replace(tmp, STATS_FILE)
        return True
    except OSError as e:
        print(f"Vajax Battles: Failed to save stats: {e}", file=sys.stderr)
        if os.path.exists(tmp):
            os.remove(tmp)
        return False


def apply_battle(stats, battle):
    """Soveltaa yhden taistelun tuloksen stats-objektiin."""
    category_id = battle["categoryId"]
    winner = battle["winner"]
    loser = battle["loser"]
    now = battle["timestamp"]

    winner_points = battle["winnerPoints"]
    loser_points = battle["loserPoints"]
    winner_new_streak = battle["winnerNewStreak"]
    loser_new_loss_streak = battle["loserNewLossStreak"]

    if not stats.get("items"):
        stats["items"] = {}
    if category_id not in stats["items"]:
        stats["items"][category_id] = {}

    cat_items = stats["items"][category_id]

    def get_item(item_data):
        iid = str(item_data["id"])
        if iid not in cat_items:
            cat_items[iid] = {
                "id": iid,
                "name": item_data.get("name", ""),
                "score": 50,
                "wins": 0, "losses": 0, "battles": 0,
                "currentStreak": 0, "bestStreak": 0, "worstStreak": 0,
                "pointsAwardedTotal": 0, "pointsDeductedTotal": 0,
                "lastBattled": None,
                "performers": item_data.get("performers"),
                "o_counter": item_data.get("o_counter"),
            }
        return cat_items[iid]

    w = get_item(winner)
    l = get_item(loser)

    if (w.get("score") or 0) == 0: w["score"] = 50
    if (l.get("score") or 0) == 0: l["score"] = 50

    algo = battle.get("algorithm", {})
    max_pts = algo.get("maxPoints", 15)
    min_pts = algo.get("minPoints", -15)

    w["score"] = min(max(w["score"] + winner_points, 1), 100)
    l["score"] = min(max(l["score"] - loser_points, 1), 100)

    w["wins"] = (w.get("wins") or 0) + 1
    l["losses"] = (l.get("losses") or 0) + 1
    w["battles"] = (w.get("battles") or 0) + 1
    l["battles"] = (l.get("battles") or 0) + 1
    w["currentStreak"] = winner_new_streak
    l["currentStreak"] = -loser_new_loss_streak
    if winner_new_streak > (w.get("bestStreak") or 0): w["bestStreak"] = winner_new_streak
    if loser_new_loss_streak > (l.get("worstStreak") or 0): l["worstStreak"] = loser_new_loss_streak
    w["pointsAwardedTotal"] = (w.get("pointsAwardedTotal") or 0) + winner_points
    l["pointsDeductedTotal"] = (l.get("pointsDeductedTotal") or 0) + loser_points
    w["lastBattled"] = now
    l["lastBattled"] = now

    if not stats.get("categoryStreaks"):
        stats["categoryStreaks"] = {}
    if category_id not in stats["categoryStreaks"]:
        stats["categoryStreaks"][category_id] = {
            "highestWinStreak": 0, "highestWinStreakItem": None,
            "highestLossStreak": 0, "highestLossStreakItem": None,
        }
    cs = stats["categoryStreaks"][category_id]
    if winner_new_streak > cs["highestWinStreak"]:
        cs["highestWinStreak"] = winner_new_streak
        cs["highestWinStreakItem"] = {"id": w["id"], "name": w["name"]}
    if loser_new_loss_streak > cs["highestLossStreak"]:
        cs["highestLossStreak"] = loser_new_loss_streak
        cs["highestLossStreakItem"] = {"id": l["id"], "name": l["name"]}

    t = stats.setdefault("totals", {})
    if winner_new_streak > t.get("highestWinStreak", 0):
        t["highestWinStreak"] = winner_new_streak
        t["highestWinStreakItem"] = {"id": w["id"], "name": w["name"], "categoryId": category_id}
    if loser_new_loss_streak > t.get("highestLossStreak", 0):
        t["highestLossStreak"] = loser_new_loss_streak
        t["highestLossStreakItem"] = {"id": l["id"], "name": l["name"], "categoryId": category_id}

    t["totalBattles"] = t.get("totalBattles", 0) + 1
    t["pointsAwarded"] = t.get("pointsAwarded", 0) + winner_points
    t["pointsDeducted"] = t.get("pointsDeducted", 0) + loser_points
    t["lastBattle"] = now
    t.setdefault("categoryBattles", {})
    t["categoryBattles"][category_id] = t["categoryBattles"].get(category_id, 0) + 1

    daily_key = now[:10]
    stats.setdefault("daily", {})
    if daily_key not in stats["daily"]:
        stats["daily"][daily_key] = {"battles": 0, "categories": {}, "awarded": 0, "deducted": 0}
    stats["daily"][daily_key]["battles"] += 1
    stats["daily"][daily_key]["categories"][category_id] = (
        stats["daily"][daily_key]["categories"].get(category_id, 0) + 1
    )
    stats["daily"][daily_key]["awarded"] += winner_points
    stats["daily"][daily_key]["deducted"] += loser_points

    return stats


def main():
    raw = sys.stdin.read()
    try:
        payload = json.loads(raw) if raw.strip() else {}
    except json.JSONDecodeError:
        payload = {}

    args = payload.get("args", {})
    operation = args.get("operation")

    if operation == "load":
        print(json.dumps({"output": load_stats()}, ensure_ascii=False))

    elif operation == "record_battle":
        battle_raw = args.get("battle", "{}")
        try:
            battle = json.loads(battle_raw) if isinstance(battle_raw, str) else battle_raw
        except json.JSONDecodeError:
            print(json.dumps({"output": {"error": "invalid battle json"}}))
            return
        stats = load_stats()
        apply_battle(stats, battle)
        ok = save_stats(stats)
        print(json.dumps({"output": {"ok": ok}}, ensure_ascii=False))

    elif operation == "reset_stats":
        ok = save_stats(copy.deepcopy(DEFAULT_STATS))
        print(json.dumps({"output": {"ok": ok}}, ensure_ascii=False))

    elif operation == "clear_category_scores":
        category_id = args.get("categoryId")
        stats = load_stats()
        if category_id and stats.get("items", {}).get(category_id):
            for item in stats["items"][category_id].values():
                item["score"] = 0
        ok = save_stats(stats)
        print(json.dumps({"output": {"ok": ok}}, ensure_ascii=False))

    else:
        print(json.dumps({"output": load_stats()}, ensure_ascii=False))

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Vajax Battles: Unexpected error: {e}", file=sys.stderr)
        sys.exit(1)
