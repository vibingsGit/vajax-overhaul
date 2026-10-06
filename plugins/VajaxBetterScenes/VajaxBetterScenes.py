#!/usr/bin/env python3
"""
Vajax Better Scenes - O-Count timestamp backend (v2).

Uusi v2:
- record_o hyväksyy source-kentän: "custom" | "stash" | "manual"
- update_o: muokkaa olemassa olevan entryn seconds-arvoa
- seconds voi olla null (manual/preexisting entries)
"""
import copy
import json
import os
import sys
from datetime import datetime, timezone

DATA_FILE = os.path.join(os.path.dirname(__file__), "vajax-better-scenes-data.json")

DEFAULT_DATA = {"version": 2, "scenes": {}}

VALID_SOURCES = {"custom", "stash", "manual", "preexisting"}


def load_data():
    if not os.path.exists(DATA_FILE):
        return copy.deepcopy(DEFAULT_DATA)
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        if not isinstance(data, dict):
            return copy.deepcopy(DEFAULT_DATA)
        data.setdefault("version", 2)
        data.setdefault("scenes", {})
        # Migrate v1 entries (no source) → "custom"
        for scene_entries in data["scenes"].values():
            for entry in scene_entries:
                if "source" not in entry:
                    entry["source"] = "custom"
        return data
    except (json.JSONDecodeError, OSError) as e:
        print(f"Vajax Better Scenes: load failed: {e}", file=sys.stderr)
        return copy.deepcopy(DEFAULT_DATA)


def save_data(data):
    tmp = DATA_FILE + ".tmp"
    try:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        os.replace(tmp, DATA_FILE)
        return True
    except OSError as e:
        print(f"Vajax Better Scenes: save failed: {e}", file=sys.stderr)
        if os.path.exists(tmp):
            try: os.remove(tmp)
            except OSError: pass
        return False


def _sort_entries(entries):
    # Entries with seconds first (sorted), null-seconds at end.
    entries.sort(key=lambda x: (x.get("seconds") is None, x.get("seconds") or 0))


# ---------------------------------------------------------------- Operations

def op_load():
    return load_data()


def op_load_scene(scene_id):
    data = load_data()
    return data.get("scenes", {}).get(str(scene_id), [])


def op_record_o(scene_id, seconds, source="custom"):
    scene_id = str(scene_id)
    if source not in VALID_SOURCES:
        source = "custom"

    seconds_val = None
    if seconds is not None:
        try:
            seconds_val = float(seconds)
        except (TypeError, ValueError):
            return {"error": "invalid seconds"}

    data = load_data()
    scenes = data.setdefault("scenes", {})
    entries = scenes.setdefault(scene_id, [])
    entries.append({
        "seconds": seconds_val,
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "source": source,
    })
    _sort_entries(entries)
    save_data(data)
    return entries


def op_update_o(scene_id, index, seconds=None):
    scene_id = str(scene_id)
    data = load_data()
    entries = data.get("scenes", {}).get(scene_id, [])
    try:
        idx = int(index)
    except (TypeError, ValueError):
        return {"error": "invalid index"}
    if not (0 <= idx < len(entries)):
        return {"error": "index out of range"}
    if seconds is not None:
        try:
            entries[idx]["seconds"] = float(seconds)
        except (TypeError, ValueError):
            return {"error": "invalid seconds"}
    _sort_entries(entries)
    save_data(data)
    return entries


def op_remove_o(scene_id, index=None, seconds=None):
    scene_id = str(scene_id)
    data = load_data()
    entries = data.get("scenes", {}).get(scene_id, [])

    if index is not None:
        try:
            idx = int(index)
        except (TypeError, ValueError):
            return {"error": "invalid index"}
        if 0 <= idx < len(entries):
            entries.pop(idx)
    elif seconds is not None:
        try:
            target = float(seconds)
        except (TypeError, ValueError):
            return {"error": "invalid seconds"}
        if entries:
            closest = min(range(len(entries)), key=lambda i: abs((entries[i].get("seconds") or 0) - target))
            if abs((entries[closest].get("seconds") or 0) - target) < 1.0:
                entries.pop(closest)

    save_data(data)
    return entries


def op_reset_scene(scene_id):
    scene_id = str(scene_id)
    data = load_data()
    data.setdefault("scenes", {})[scene_id] = []
    save_data(data)
    return []


def op_reset_all():
    save_data(copy.deepcopy(DEFAULT_DATA))
    return True


def main():
    raw = sys.stdin.read()
    try:
        payload = json.loads(raw) if raw.strip() else {}
    except json.JSONDecodeError:
        payload = {}

    args = payload.get("args", {}) or {}
    operation = args.get("operation")

    if operation == "load":
        output = op_load()
    elif operation == "load_scene":
        output = op_load_scene(args.get("sceneId"))
    elif operation == "record_o":
        output = op_record_o(args.get("sceneId"), args.get("seconds"), args.get("source", "custom"))
    elif operation == "update_o":
        output = op_update_o(args.get("sceneId"), args.get("index"), args.get("seconds"))
    elif operation == "remove_o":
        output = op_remove_o(args.get("sceneId"), index=args.get("index"), seconds=args.get("seconds"))
    elif operation == "reset_scene":
        output = op_reset_scene(args.get("sceneId"))
    elif operation == "reset_all":
        output = op_reset_all()
    else:
        output = op_load()

    print(json.dumps({"output": output}, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Vajax Better Scenes: unexpected error: {e}", file=sys.stderr)
        sys.exit(1)
