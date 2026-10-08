;(()=>{var e=PluginApi.React;var je=PluginApi.ReactDOM;var lt="VajaxBetterScenes";async function Ee(a,t={}){let s=`
    mutation RunVajaxOp($args: Map) {
      runPluginOperation(plugin_id: "${lt}", args: $args)
    }
  `,r=await fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:{args:{operation:a,...t}}})});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();if(n.errors)throw new Error(n.errors.map(c=>c.message).join(", "));let l=n.data?.runPluginOperation;if(!l)return null;try{let c=JSON.parse(l);return c.output!==void 0?c.output:c}catch{return l}}async function ae(a,t={}){let r=await(await fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:t})})).json();if(r.errors)throw new Error(r.errors.map(n=>n.message).join(", "));return r.data}function O({children:a,viewBox:t="0 0 24 24",fill:s="none",stroke:r="currentColor",strokeWidth:n=2,size:l="1em"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:t,fill:s,stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",style:{display:"inline-block",verticalAlign:"middle",flexShrink:0},"aria-hidden":"true"},a)}var _={Play:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"6 3 20 12 6 21"})),Pause:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),e.createElement("rect",{x:"14",y:"4",width:"4",height:"16"})),SkipPrev:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"19 20 9 12 19 4"}),e.createElement("rect",{x:"5",y:"4",width:"2",height:"16"})),SkipNext:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"5 4 15 12 5 20"}),e.createElement("rect",{x:"17",y:"4",width:"2",height:"16"})),Volume2:a=>e.createElement(O,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),e.createElement("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})),Volume1:a=>e.createElement(O,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"})),VolumeX:a=>e.createElement(O,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),e.createElement("line",{x1:"17",y1:"9",x2:"23",y2:"15"})),Maximize:a=>e.createElement(O,{...a},e.createElement("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),e.createElement("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),e.createElement("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),e.createElement("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})),Minimize:a=>e.createElement(O,{...a},e.createElement("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),e.createElement("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),e.createElement("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),e.createElement("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})),Gear:a=>e.createElement(O,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"3"}),e.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})),Heart:a=>e.createElement(O,{...a,viewBox:"0 0 36 36",fill:"currentColor",stroke:"none"},e.createElement("path",{d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"})),PlayCount:a=>e.createElement(O,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"9"}),e.createElement("polygon",{points:"10 8 16 12 10 16",fill:"currentColor",stroke:"none"})),Check:a=>e.createElement(O,{...a},e.createElement("polyline",{points:"20 6 9 17 4 12"})),Pencil:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("path",{d:"M12.854 1.5a.5.5 0 0 1 0 .708L3.207 11.854 2 14l2.146-1.207L13.793 3.146a.5.5 0 0 1 .708 0l.353.353a.5.5 0 0 1 0 .708L5.207 13.854 3 15l1.146-2.207L14.793 3.146a.5.5 0 0 1 .708 0z",transform:"translate(2 2) scale(0.85)"}),e.createElement("path",{d:"M16.5 2.5a2.121 2.121 0 1 1 3 3L7 18l-4 1 1-4L16.5 2.5z"})),Info:a=>e.createElement(O,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})),List:a=>e.createElement(O,{...a},e.createElement("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.createElement("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.createElement("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.createElement("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.createElement("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.createElement("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})),Clock:a=>e.createElement(O,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12 6 12 12 16 14"})),Bookmark:a=>e.createElement(O,{...a},e.createElement("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})),Film:a=>e.createElement(O,{...a},e.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18"}),e.createElement("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),e.createElement("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),e.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.createElement("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),e.createElement("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),e.createElement("line",{x1:"17",y1:"7",x2:"22",y2:"7"}),e.createElement("line",{x1:"17",y1:"17",x2:"22",y2:"17"})),Shuffle:a=>e.createElement(O,{...a},e.createElement("polyline",{points:"16 3 21 3 21 8"}),e.createElement("line",{x1:"4",y1:"20",x2:"21",y2:"3"}),e.createElement("polyline",{points:"21 16 21 21 16 21"}),e.createElement("line",{x1:"15",y1:"15",x2:"21",y2:"21"}),e.createElement("line",{x1:"4",y1:"4",x2:"9",y2:"9"})),Plus:a=>e.createElement(O,{...a},e.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})),Trash:a=>e.createElement(O,{...a},e.createElement("polyline",{points:"3 6 5 6 21 6"}),e.createElement("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),e.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"})),Close:a=>e.createElement(O,{...a},e.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Repeat:a=>e.createElement(O,{...a},e.createElement("polyline",{points:"17 1 21 5 17 9"}),e.createElement("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.createElement("polyline",{points:"7 23 3 19 7 15"}),e.createElement("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})),Loop:a=>e.createElement(O,{...a},e.createElement("path",{d:"M17 2l4 4-4 4"}),e.createElement("path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}),e.createElement("path",{d:"M7 22l-4-4 4-4"}),e.createElement("path",{d:"M21 13v1a4 4 0 0 1-4 4H3"})),Lock:a=>e.createElement(O,{...a},e.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),e.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})),Image:a=>e.createElement(O,{...a},e.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.createElement("polyline",{points:"21 15 16 10 5 21"})),Search:a=>e.createElement(O,{...a},e.createElement("circle",{cx:"11",cy:"11",r:"8"}),e.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),Url:a=>e.createElement(O,{...a},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})),ChevronRight:a=>e.createElement(O,{...a},e.createElement("polyline",{points:"9 18 15 12 9 6"})),Star:a=>e.createElement(O,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))},ye={async getForScene(a){try{let t=await Ee("load_scene",{sceneId:String(a)});return Array.isArray(t)?t:[]}catch(t){return console.warn(t),[]}},async addOTimestamp(a,t,s="unified"){try{let r=await Ee("record_o",{sceneId:String(a),seconds:t,source:s});return Array.isArray(r)?r:null}catch(r){return console.warn(r),null}},async updateTimestamp(a,t,s){try{let r=await Ee("update_o",{sceneId:String(a),index:t,seconds:s});return Array.isArray(r)?r:null}catch(r){return console.warn(r),null}},async removeOTimestamp(a,t){try{let s=await Ee("remove_o",{sceneId:String(a),index:t});return Array.isArray(s)?s:null}catch(s){return console.warn(s),null}},async resetScene(a){try{return await Ee("reset_scene",{sceneId:String(a)}),!0}catch(t){return console.warn(t),!1}}},Xe=new Map;function dt(a){let t=[],s=a.split(/\n\n+/),r=/(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/,n=/#xywh=(\d+),(\d+),(\d+),(\d+)/;for(let l of s){let c=l.split(`
`).map(x=>x.trim()).filter(Boolean),d=null,o=null;for(let x of c)!d&&r.test(x)?d=x:!o&&n.test(x)&&(o=x);if(!d||!o)continue;let u=d.match(r);if(!u)continue;let p=+u[1]*3600+ +u[2]*60+ +u[3]+ +u[4]/1e3,m=+u[5]*3600+ +u[6]*60+ +u[7]+ +u[8]/1e3,f=o.match(n);f&&t.push({start:p,end:m,x:+f[1],y:+f[2],w:+f[3],h:+f[4]})}return t}function ct(a){if(!a?.id)return Promise.resolve(null);if(Xe.has(a.id))return Xe.get(a.id);let t=(async()=>{let s=a.paths?.vtt,r=a.paths?.sprite;if(!s||!r)return null;try{let n=await fetch(s);if(!n.ok)return null;let l=await n.text(),c=dt(l);return c.length===0?null:{spriteUrl:r,cues:c}}catch(n){return console.warn("[Vajax BS] vtt load failed",n),null}})();return Xe.set(a.id,t),t}function qa(a){let[t,s]=e.useState(null);return e.useEffect(()=>{let r=!1;return s(null),ct(a).then(n=>{r||s(n)}),()=>{r=!0}},[a?.id]),t}function $a(a,t){if(!a||t==null)return null;for(let n of a.cues)if(t>=n.start&&t<n.end)return n;let s=null,r=1/0;for(let n of a.cues){let l=Math.abs(n.start-t);l<r&&(r=l,s=n)}return r<5?s:null}var ut=`
  query($id: ID!) {
    findScene(id: $id) {
      id title details date rating100 organized
      code director
      o_counter o_history play_count play_duration play_history
      created_at updated_at
      urls
      stash_ids { endpoint stash_id }
      custom_fields
      paths { screenshot preview vtt sprite stream }
      studio { id name image_path }
      performers {
        id name image_path gender birthdate disambiguation favorite
        country ethnicity hair_color eye_color
        height_cm weight measurements
        tattoos piercings career_length alias_list
      }
      tags { id name }
      galleries { id title }
      groups { group { id name } scene_index }
      scene_markers { id seconds end_seconds title primary_tag { id name } }
      sceneStreams { url mime_type label }
      files {
        path size duration mod_time
        video_codec audio_codec width height frame_rate bit_rate
        fingerprints { type value }
      }
    }
  }
`;async function ja(a){return(await ae(ut,{id:String(a)})).findScene}async function Pa(a){await ae("mutation($id: ID!) { sceneIncrementO(id: $id) }",{id:String(a)})}async function pt(a){await ae("mutation($id: ID!) { sceneDecrementO(id: $id) }",{id:String(a)})}async function Ve(a,t){return(await ae("mutation($input: SceneUpdateInput!) { sceneUpdate(input: $input) { id } }",{input:{id:String(a),...t}})).sceneUpdate}async function bt(a){try{await ae("mutation($id: ID!) { sceneIncrementPlayCount(id: $id) }",{id:String(a)})}catch(t){console.warn("[Vajax BS] increment play count failed",t)}}async function ya(a,t){if(!(!t||t<=0))try{await ae(`mutation($id: ID!, $playDuration: Float) {
        sceneSaveActivity(id: $id, playDuration: $playDuration)
      }`,{id:String(a),playDuration:t})}catch(s){console.warn("[Vajax BS] save activity failed",s)}}function ea({scene:a,onNavigate:t,badge:s}){let[r,n]=e.useState(null),[l,c]=e.useState(!1),d=e.useRef(null),[o,u]=e.useState(()=>_a(a?.id)),[p,m]=e.useState(()=>wa(a?.id));if(e.useEffect(()=>{if(!a?.id)return;let b=()=>{u(_a(a.id)),m(wa(a.id))};b(),window.addEventListener("vajax-queue-changed",b);let C=setInterval(b,1500);return()=>{window.removeEventListener("vajax-queue-changed",b),clearInterval(C)}},[a?.id]),e.useEffect(()=>()=>{d.current&&clearTimeout(d.current)},[]),!a)return null;let f=a.files?.[0]?.duration,x=ke(a),w=(a.performers||[]).map(b=>b.name).join(", ")||a.studio?.name||"",N=a.o_counter||0,E=a.paths?.preview,h=b=>{b.button===0&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&!b.altKey&&(b.preventDefault(),t(a.id))},y=b=>{b.preventDefault(),b.stopPropagation(),n({x:b.clientX,y:b.clientY})},j=()=>{d.current&&clearTimeout(d.current),d.current=setTimeout(()=>c(!0),400)},g=()=>{d.current&&clearTimeout(d.current),c(!1)};return e.createElement(e.Fragment,null,e.createElement("a",{className:"vajax-bs-card",href:`/scenes/${a.id}`,onClick:h,onContextMenu:y,onMouseEnter:j,onMouseLeave:g},e.createElement("div",{className:"vajax-bs-card__thumb"},a.paths?.screenshot?e.createElement("img",{src:a.paths.screenshot,alt:"",loading:"lazy"}):e.createElement("div",{className:"vajax-bs-card__thumb-empty"}),l&&E&&e.createElement("video",{className:"vajax-bs-card__preview",src:E,autoPlay:!0,muted:!0,loop:!0,playsInline:!0}),f?e.createElement("span",{className:"vajax-bs-card__duration"},W(f)):null,N>0?e.createElement("span",{className:"vajax-bs-card__badge"},e.createElement(_.Heart,null)," ",N):s?e.createElement("span",{className:"vajax-bs-card__badge"},s):null),e.createElement("div",{className:"vajax-bs-card__title"},x),w?e.createElement("div",{className:"vajax-bs-card__sub"},w):null),r&&e.createElement(He,{x:r.x,y:r.y,onClose:()=>n(null),items:(()=>{let b=[{label:"Open in New Tab",icon:e.createElement(_.Url,null),onClick:()=>window.open(`/scenes/${a.id}`,"_blank","noopener")},{separator:!0},{label:"Add Next to Queue",icon:e.createElement(_.SkipNext,null),onClick:()=>Da(a.id)},{label:"Add Last to Queue",icon:e.createElement(_.Plus,null),onClick:()=>Va(a.id)}];return o&&(b.push({separator:!0}),b.push({label:"Remove from Session Queue",icon:e.createElement(_.Trash,null),danger:!0,onClick:()=>na(a.id)})),p&&(o||b.push({separator:!0}),b.push({label:"Remove from Stash Queue",icon:e.createElement(_.Trash,null),danger:!0,onClick:()=>Ba(a.id)})),b})()}))}function vt({scene:a,onNavigate:t}){let s=La(),[r,n]=e.useState([]),l=s.indexOf(String(a?.id)),c=l>=0?s.slice(l+1,l+21):s.slice(0,20);return e.useEffect(()=>{if(c.length===0){n([]);return}let d=!1;return(async()=>{try{let o=await ae(`query($ids: [Int!]!) {
            findScenes(scene_ids: $ids) {
              scenes {
                id title o_counter
                paths { screenshot preview }
                performers { id name }
                studio { id name }
                files { path duration }
              }
            }
          }`,{ids:c.map(Number)});if(d)return;let u={};for(let p of o.findScenes?.scenes||[])u[p.id]=p;n(c.map(p=>u[p]).filter(Boolean))}catch(o){console.warn(o)}})(),()=>{d=!0}},[c.join(",")]),s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No active queue"):r.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No further scenes in queue"):e.createElement("div",{className:"vajax-bs-carousel"},r.map(d=>e.createElement(ea,{key:d.id,scene:d,onNavigate:t})))}function xt({scene:a,onNavigate:t}){let[s,r]=e.useState([]),[n,l]=e.useState(!0);return e.useEffect(()=>{let c=!1;return(async()=>{l(!0);try{let d=(a.performers||[]).map(b=>String(b.id)),o=(a.tags||[]).map(b=>String(b.id)),u=a.studio?.id?String(a.studio.id):null,m={q:"",page:1,per_page:40,sort:`random_${Math.floor(Math.random()*1e9)}`,direction:"DESC"},f=`
          query($filter: FindFilterType, $scene_filter: SceneFilterType) {
            findScenes(filter: $filter, scene_filter: $scene_filter) {
              scenes {
                id title rating100 o_counter
                paths { screenshot preview }
                performers { id name }
                tags { id name }
                studio { id name }
                files { path duration }
              }
            }
          }
        `,x=[];d.length>0&&x.push(ae(f,{filter:m,scene_filter:{performers:{value:d,modifier:"INCLUDES"}}})),o.length>0&&x.push(ae(f,{filter:m,scene_filter:{tags:{value:o.slice(0,15),modifier:"INCLUDES"}}})),u&&x.push(ae(f,{filter:m,scene_filter:{studios:{value:[u],modifier:"INCLUDES"}}})),x.push(ae(`query($filter: FindFilterType) {
            findScenes(filter: $filter) {
              scenes {
                id title rating100 o_counter
                paths { screenshot preview }
                performers { id name }
                tags { id name }
                studio { id name }
                files { path duration }
              }
            }
          }`,{filter:{q:"",page:1,per_page:40,sort:"o_counter",direction:"DESC"}}));let w=await Promise.all(x);if(c)return;let N=new Set(d),E=new Set(o),h=new Map;for(let b of w)for(let C of b.findScenes?.scenes||[]){if(String(C.id)===String(a.id))continue;let q=0;for(let z of C.performers||[])N.has(String(z.id))&&(q+=5);for(let z of C.tags||[])E.has(String(z.id))&&(q+=1);u&&C.studio?.id&&String(C.studio.id)===u&&(q+=3),q+=(C.rating100||0)/50,q+=Math.min(C.o_counter||0,5)*.8;let V=h.get(C.id);(!V||q>V.score)&&h.set(C.id,{scene:C,score:q})}let y=Array.from(h.values()).sort((b,C)=>C.score-b.score).map(b=>b.scene),j=y.slice(0,8),g=y.slice(8,60);for(let b=g.length-1;b>0;b--){let C=Math.floor(Math.random()*(b+1));[g[b],g[C]]=[g[C],g[b]]}r([...j,...g.slice(0,12)])}catch(d){console.warn("[Vajax BS] recommendations failed",d)}finally{c||l(!1)}})(),()=>{c=!0}},[a.id]),n?e.createElement("div",{className:"vajax-bs-below__empty"},"Loading recommendations\u2026"):s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No recommendations"):e.createElement("div",{className:"vajax-bs-carousel"},s.map(c=>e.createElement(ea,{key:c.id,scene:c,onNavigate:t})))}function mt({scene:a,onNavigate:t}){let s=a.performers||[],[r,n]=e.useState([]),[l,c]=e.useState(!0);return e.useEffect(()=>{if(s.length===0){c(!1),n([]);return}let d=!1;return(async()=>{c(!0);try{let o=await Promise.all(s.map(u=>ae(`query($filter: FindFilterType, $scene_filter: SceneFilterType) {
                findScenes(filter: $filter, scene_filter: $scene_filter) {
                  scenes {
                    id title o_counter
                    paths { screenshot preview }
                    performers { id name }
                    studio { id name }
                    files { path duration }
                  }
                }
              }`,{filter:{q:"",page:1,per_page:20,sort:`random_${Math.floor(Math.random()*1e9)}`,direction:"DESC"},scene_filter:{performers:{value:[String(u.id)],modifier:"INCLUDES"}}}).then(p=>({performer:u,items:(p.findScenes?.scenes||[]).filter(m=>String(m.id)!==String(a.id)).slice(0,20)}))));if(d)return;n(o)}catch(o){console.warn("[Vajax BS] this-performer failed",o)}finally{d||c(!1)}})(),()=>{d=!0}},[a.id]),s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No performers in this scene"):l?e.createElement("div",{className:"vajax-bs-below__empty"},"Loading scenes\u2026"):e.createElement("div",{className:"vajax-bs-performer-rows"},r.map(({performer:d,items:o})=>e.createElement("div",{key:d.id,className:"vajax-bs-performer-row"},e.createElement("div",{className:"vajax-bs-performer-row__header"},e.createElement("a",{href:`/performers/${d.id}`,className:"vajax-bs-performer-row__name"},d.image_path&&e.createElement("img",{src:d.image_path,alt:"",className:"vajax-bs-performer-row__thumb",onError:u=>{u.currentTarget.style.display="none"}}),e.createElement("span",null,d.name)),e.createElement("span",{className:"vajax-bs-performer-row__count"},o.length," scene",o.length===1?"":"s")),o.length===0?e.createElement("div",{className:"vajax-bs-below__empty",style:{padding:12}},"No other scenes with ",d.name):e.createElement("div",{className:"vajax-bs-carousel"},o.map(u=>e.createElement(ea,{key:u.id,scene:u,onNavigate:t}))))))}function ft({scene:a,marks:t,onSeek:s}){let r=a.files?.[0]?.duration||0,n=qa(a),[l,c]=e.useState(null),d=e.useMemo(()=>{let p=(t||[]).map((x,w)=>({seconds:x.seconds,createdAt:x.createdAt,kind:"real",key:`r-${w}`})),m=a.o_counter||0,f=Math.max(0,m-(t?.length||0));if(f>0&&r>0){let x=(a.o_history||[]).slice(),w=new Set;for(let E of t){if(!E.createdAt)continue;let h=new Date(E.createdAt).getTime(),y=-1,j=3e4;for(let g=0;g<x.length;g++){if(w.has(g))continue;let b=new Date(x[g]).getTime(),C=Math.abs(b-h);C<j&&(j=C,y=g)}y>=0&&w.add(y)}let N=0;x.forEach((E,h)=>{w.has(h)||N>=f||(N++,p.push({seconds:null,createdAt:E,kind:"ph",key:`ph-${h}`}))})}return p},[t,a.id]);if(!r)return e.createElement("div",{className:"vajax-bs-below__empty"},"No duration available");let o=l!=null?d[l]:null,u=o&&o.seconds!=null?$a(n,o.seconds):null;return e.createElement("div",{className:"vajax-bs-omap-wrap"},e.createElement("div",{className:"vajax-bs-omap"},e.createElement("div",{className:"vajax-bs-omap__track"},d.map((p,m)=>{if(p.seconds==null)return null;let f=p.seconds/r*100,x=l===m;return e.createElement("div",{key:p.key,className:"vajax-bs-omap__marker"+(x?" vajax-bs-omap__marker--hover":""),style:{left:`${f}%`},onMouseEnter:()=>c(m),onMouseLeave:()=>c(null),onClick:()=>s(p.seconds),title:W(p.seconds)})}))),e.createElement("div",{className:"vajax-bs-omap__footer"},e.createElement("span",null,d.filter(p=>p.seconds!=null).length," O-marks"),e.createElement("span",null,"\xB7"),e.createElement("span",null,W(r)," total")),o&&o.seconds!=null&&e.createElement("div",{className:"vajax-bs-omap__popup",style:{left:`${o.seconds/r*100}%`}},u?e.createElement("div",{className:"vajax-bs-omap__popup-thumb",style:{width:u.w,height:u.h,backgroundImage:`url(${n.spriteUrl})`,backgroundPosition:`-${u.x}px -${u.y}px`}}):e.createElement("div",{className:"vajax-bs-omap__popup-thumb vajax-bs-omap__popup-thumb--empty"}),e.createElement("div",{className:"vajax-bs-omap__popup-time"},W(o.seconds))))}function gt({scene:a,marks:t,onNavigate:s,onSeek:r}){let[n,l]=e.useState(()=>ta("vajax-bs-below-view","next_queue")),c=o=>{l(o),sa("vajax-bs-below-view",o)};return e.createElement("div",{className:"vajax-bs-below"},e.createElement("div",{className:"vajax-bs-below__tabs",role:"tablist"},[{id:"next_queue",label:"Next On Queue"},{id:"recommendations",label:"Recommendations"},{id:"this_performer",label:"This Performer"},{id:"o_map",label:"O Count Map"}].map(o=>e.createElement("button",{key:o.id,type:"button",role:"tab","aria-selected":n===o.id,className:"vajax-bs-below__tab"+(n===o.id?" vajax-bs-below__tab--active":""),onClick:()=>c(o.id)},o.label))),e.createElement("div",{className:"vajax-bs-below__body"},n==="next_queue"&&e.createElement(vt,{scene:a,onNavigate:s}),n==="recommendations"&&e.createElement(xt,{scene:a,onNavigate:s}),n==="this_performer"&&e.createElement(mt,{scene:a,onNavigate:s}),n==="o_map"&&e.createElement(ft,{scene:a,marks:t,onSeek:r})))}function ht(a){if(!a)return null;let t=a.replace(/\(/g,"{").replace(/\)/g,"}");try{return JSON.parse(t)}catch(s){return console.warn("[Vajax BS] failed to parse criterion",a,s),null}}function jt(a){if(!a||!a.type)return null;let{type:t,modifier:s,value:r}=a,n={};return s&&(n.modifier=s),r==null?{[t]:n}:(Array.isArray(r)?n.value=r.map(l=>typeof l=="object"&&l.id!=null?String(l.id):String(l)):typeof r=="object"?(Array.isArray(r.items)?n.value=r.items.map(l=>String(l.id??l)):r.value!==void 0&&(n.value=r.value),r.value2!==void 0&&(n.value2=r.value2),typeof r.depth=="number"&&(n.depth=r.depth),Array.isArray(r.excluded)&&r.excluded.length>0&&(n.excluded=r.excluded.map(String))):n.value=r,{[t]:n})}function yt(){let t=new URLSearchParams(window.location.search).getAll("qfc");if(t.length===0)return null;let s={};for(let r of t){let n=ht(r),l=jt(n);l&&Object.assign(s,l)}return Object.keys(s).length>0?s:null}var _t=8,me=new Map;async function Ma(a,t){let s=`${a}|${t}|${window.location.search}`;if(me.has(s))return me.get(s);let r=yt();try{let n={filter:{q:"",page:1,per_page:2e3,sort:a,direction:t}};r&&(n.scene_filter=r);let c=((await ae(`query($filter: FindFilterType, $scene_filter: SceneFilterType) {
        findScenes(filter: $filter, scene_filter: $scene_filter) {
          count
          scenes { id }
        }
      }`,n)).findScenes?.scenes||[]).map(d=>String(d.id));return console.log(`[Vajax BS] Queue loaded: ${c.length} scenes (sort=${a}, filter=${r?JSON.stringify(r):"none"})`),me.size>=_t&&me.delete(me.keys().next().value),me.set(s,c),c}catch(n){return console.warn("[Vajax BS] queue fetch failed",n),[]}}function aa(){let a=new URLSearchParams(window.location.search),t=a.get("qsort"),s=(a.get("qsortd")||"desc").toUpperCase();return{qsort:t,direction:s}}function Be(){let[a,t]=e.useState({session:[],stash:[],merged:[],sessionMergedIdx:[],stashMergedIdx:[]});return e.useEffect(()=>{let s=!1,r=async()=>{let{qsort:l,direction:c}=aa(),d=[];if(l)d=await Ma(l,c);else try{let h=localStorage.getItem("queue");if(h){let y=JSON.parse(h);Array.isArray(y)&&(d=y.map(j=>String(j?.id??j)).filter(Boolean))}}catch{}let o=Se(),u=new Set($e()),p=[],m=new Array(d.length).fill(-1);for(let h=0;h<d.length;h++)u.has(d[h])||(m[h]=p.length,p.push(d[h]));let f=Nt(),x=f?d.indexOf(f):-1,w=[],N=new Array(o.length),E=new Array(p.length);if(x>=0){for(let h=0;h<=x;h++){let y=m[h];y<0||(E[y]=w.length,w.push(d[h]))}for(let h=0;h<o.length;h++)N[h]=w.length,w.push(o[h]);for(let h=x+1;h<d.length;h++){let y=m[h];y<0||(E[y]=w.length,w.push(d[h]))}}else{for(let h=0;h<o.length;h++)N[h]=w.length,w.push(o[h]);for(let h=0;h<d.length;h++){let y=m[h];y<0||(E[y]=w.length,w.push(d[h]))}}s||t({session:o,stash:p,merged:w,sessionMergedIdx:N,stashMergedIdx:E})};r(),window.addEventListener("vajax-queue-changed",r),window.addEventListener("popstate",r);let n=setInterval(r,1500);return()=>{s=!0,window.removeEventListener("vajax-queue-changed",r),window.removeEventListener("popstate",r),clearInterval(n)}},[]),a}function La(){let{merged:a}=Be();return a}function Fa(){me.clear(),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}function _a(a){return a?Se().includes(String(a)):!1}function wa(a){if(!a)return!1;let t=String(a);if($e().includes(t))return!1;let{qsort:s,direction:r}=aa();if(!s)return!1;let n=`${s}|${r}|${window.location.search}`,l=me.get(n);return l?l.includes(t):!1}function ta(a,t){try{let s=localStorage.getItem(a);return s?JSON.parse(s):t}catch{return t}}function sa(a,t){try{localStorage.setItem(a,JSON.stringify(t))}catch(s){console.warn("[Vajax BS] lsSet failed",s)}}var Ia="vajax-bs-queue-settings-v2",wt={autoContinue:!1,repeatOnEnd:!1,shuffleAfterNext:!1,shuffleAfterRepeat:!1,queueAutoplay:!1},za="vajax-bs-session-queue-v1",Aa="vajax-bs-session-removed-v1";function Se(){try{let a=sessionStorage.getItem(za),t=a?JSON.parse(a):[];return Array.isArray(t)?t.map(String):[]}catch{return[]}}function Ue(a){try{sessionStorage.setItem(za,JSON.stringify(a.map(String))),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}catch(t){console.warn("[Vajax BS] setSessionQueue failed",t)}}function $e(){try{let a=sessionStorage.getItem(Aa),t=a?JSON.parse(a):[];return Array.isArray(t)?t.map(String):[]}catch{return[]}}function ra(a){try{sessionStorage.setItem(Aa,JSON.stringify(a.map(String))),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}catch(t){console.warn("[Vajax BS] setRemovedFromQueue failed",t)}}function Da(a){let t=String(a),s=ia(),r=Se(),n=0;if(s){let d=r.indexOf(s);d>=0&&(n=d+1)}let l=[...r.slice(0,n),t,...r.slice(n)];Ue(l);let c=$e();c.includes(t)&&ra(c.filter(d=>d!==t)),Y("Added next in queue")}function Va(a){let t=String(a),s=Se();Ue([...s,t]);let r=$e();r.includes(t)&&ra(r.filter(n=>n!==t)),Y("Added to end of queue")}function na(a){let t=String(a),s=Se(),r=s.indexOf(t);if(r<0)return;let n=[...s.slice(0,r),...s.slice(r+1)];Ue(n),Y("Removed from session queue")}function Ba(a){let t=String(a),s=$e();s.includes(t)||ra([...s,t]),Y("Removed from Stash queue")}function kt(){Ue([]),Y("Session queue cleared")}function St(){let a=new URLSearchParams(window.location.search);a.delete("qsort"),a.delete("qsortd"),a.delete("qfp");let t=window.location.pathname+(a.toString()?"?"+a.toString():"");window.history.replaceState({},"",t),Fa(),Y("Stash queue cleared")}var Oa="vajax-bs-resume-stash-id";function Nt(){try{return sessionStorage.getItem(Oa)}catch{return null}}function Ct(a){try{a&&sessionStorage.setItem(Oa,String(a))}catch{}}var Je="vajax-bs-queue-cursor-v1";function Qe(){try{let a=sessionStorage.getItem(Je);return a?parseInt(a,10):-1}catch{return-1}}function ze(a){try{a>=0?sessionStorage.setItem(Je,String(a)):sessionStorage.removeItem(Je),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}catch{}}function Et(a,t){let s=Qe();return s>=0&&a[s]===t?s:a.indexOf(t)}var Ua="vajax-bs-player-settings-v1",Tt={autoplay:!1};function Qa(){return{...Tt,...ta(Ua,{})}}function qt(a){sa(Ua,a)}function Ze(){let a={...wt,...ta(Ia,{})};return a.shuffleAfterNext&&(a.repeatOnEnd=!0),a}function $t(a){sa(Ia,a)}var oa=!1;function Pt(){oa=!0}function ka(){return oa}function Mt(){oa=!1}function ia(){let a=window.location.pathname.match(/^\/scenes\/(\d+)/);return a?a[1]:null}function W(a){(!isFinite(a)||a<0)&&(a=0);let t=Math.floor(a/3600),s=Math.floor(a%3600/60),r=Math.floor(a%60);return t>0?`${t}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${s}:${String(r).padStart(2,"0")}`}function Sa(a){(!isFinite(a)||a<0)&&(a=0);let t=Math.floor(a/3600),s=Math.floor(a%3600/60),n=(a%60).toFixed(2).padStart(5,"0");return t>0?`${t}:${String(s).padStart(2,"0")}:${n}`:`${s}:${n}`}function Le(a){if(!isFinite(a)||a<=0)return"0:00:00";let t=Math.floor(a/3600),s=Math.floor(a%3600/60),r=Math.floor(a%60);return`${t}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Lt(a){let t=new Date,s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=Math.round((s-a)/864e5);return r===0?"Today":r===1?"Yesterday":a.toLocaleDateString(void 0,{weekday:"short",year:"numeric",month:"short",day:"numeric"})}function Ft(a){if(a==null||(a=String(a).trim(),!a))return null;if(/^\d+(\.\d+)?$/.test(a))return parseFloat(a);let t=a.match(/^(\d+):(\d+(?:\.\d+)?)$/);return t?parseInt(t[1],10)*60+parseFloat(t[2]):(t=a.match(/^(\d+):(\d+):(\d+(?:\.\d+)?)$/),t?parseInt(t[1],10)*3600+parseInt(t[2],10)*60+parseFloat(t[3]):null)}function It(a){if(!a)return"";let t=new Date(a).getTime();if(isNaN(t))return"";let s=Math.floor((Date.now()-t)/1e3);if(s<60)return`${s}s ago`;let r=Math.floor(s/60);if(r<60)return`${r}m ago`;let n=Math.floor(r/60);if(n<24)return`${n}h ago`;let l=Math.floor(n/24);if(l<30)return`${l}d ago`;let c=Math.floor(l/30);return c<12?`${c}mo ago`:`${Math.floor(c/12)}y ago`}function Re(a){if(!a)return"";try{return new Date(a).toLocaleString()}catch{return String(a)}}function Ha(a){if(!a||!isFinite(a))return"\u2014";let t=["B","KiB","MiB","GiB","TiB"],s=0,r=a;for(;r>=1024&&s<t.length-1;)r/=1024,s++;return`${r.toFixed(r>=100?0:r>=10?1:2)} ${t[s]}`}function Ga(a){if(!a)return null;let t=String(a).split(/[/\\]/);return t[t.length-1]||null}function ke(a){return a?a.title?a.title:Ga(a.files?.[0]?.path)||`Scene ${a.id}`:"Untitled"}function zt(){if(document.getElementById("vajax-bs-styles"))return;let a=document.createElement("style");a.id="vajax-bs-styles",a.textContent=`
  :root {
    /* ============================================================
       Vajax Better Scenes \u2014 theme variables
       Override any of these in your theme plugin's :root block.
       ============================================================ */

    /* ---- Brand / accent ---- */
    --vajax-bs-accent:              #7eb3ff;
    --vajax-bs-accent-bright:       #a8cbff;
    --vajax-bs-accent-rgb:          126, 179, 255;

    /* ---- O-count highlight ---- */
    --vajax-bs-o-color:             #e94560;
    --vajax-bs-o-color-bright:      #ff6b8a;
    --vajax-bs-o-color-rgb:         233, 69, 96;
    --vajax-bs-o-color-soft:        #ffd1dc;
    --vajax-bs-o-color-dim:         #ff8ba3;

    /* ---- Semantic ---- */
    --vajax-bs-success:             #4caf50;
    --vajax-bs-success-rgb:         76, 175, 80;
    --vajax-bs-success-text:        #b8e6bb;
    --vajax-bs-star:                #ffc93c;
    --vajax-bs-error:               #ff8ba3;
    --vajax-bs-error-soft:          #ffb8c4;
    --vajax-bs-error-border:        rgba(255, 120, 120, 0.8);

    /* ---- Base surfaces ---- */
    --vajax-bs-bg:                  #0f1218;
    --vajax-bs-bg-elevated:         #1a1d23;
    --vajax-bs-bg-elevated-2:       #262a33;
    --vajax-bs-panel-bg:            rgba(23, 27, 34, 0.90);
    --vajax-bs-panel-bg-solid:      #171b22;
    --vajax-bs-panel-bg-opaque:     rgba(23, 27, 34, 0.97);
    --vajax-bs-panel-bg-max:        rgba(23, 27, 34, 0.98);
    --vajax-bs-overlay-bg:          rgba(0, 0, 0, 0.92);
    --vajax-bs-overlay-bg-soft:     rgba(0, 0, 0, 0.50);
    --vajax-bs-overlay-bg-faint:    rgba(0, 0, 0, 0.20);

    /* ---- Text ---- */
    --vajax-bs-text:                #e6e6e6;
    --vajax-bs-text-bright:         #ffffff;
    --vajax-bs-text-medium:         rgba(255, 255, 255, 0.75);
    --vajax-bs-text-dim:            rgba(255, 255, 255, 0.55);
    --vajax-bs-text-faint:          rgba(255, 255, 255, 0.40);
    --vajax-bs-text-ghost:          rgba(255, 255, 255, 0.25);

    /* ---- Borders ---- */
    --vajax-bs-border:              rgba(255, 255, 255, 0.08);
    --vajax-bs-border-soft:         rgba(255, 255, 255, 0.10);
    --vajax-bs-border-bright:       rgba(255, 255, 255, 0.15);
    --vajax-bs-border-faint:        rgba(255, 255, 255, 0.06);
    --vajax-bs-border-ghost:        rgba(255, 255, 255, 0.05);

    /* ---- Translucent surfaces ---- */
    --vajax-bs-surface-1:           rgba(255, 255, 255, 0.03);
    --vajax-bs-surface-2:           rgba(255, 255, 255, 0.05);
    --vajax-bs-surface-3:           rgba(255, 255, 255, 0.08);
    --vajax-bs-surface-accent:      rgba(var(--vajax-bs-accent-rgb), 0.12);
    --vajax-bs-surface-accent-md:   rgba(var(--vajax-bs-accent-rgb), 0.18);
    --vajax-bs-surface-accent-hi:   rgba(var(--vajax-bs-accent-rgb), 0.28);
    --vajax-bs-surface-o:           rgba(var(--vajax-bs-o-color-rgb), 0.12);
    --vajax-bs-surface-o-md:        rgba(var(--vajax-bs-o-color-rgb), 0.18);
    --vajax-bs-surface-o-hi:        rgba(var(--vajax-bs-o-color-rgb), 0.32);
    --vajax-bs-surface-success:     rgba(var(--vajax-bs-success-rgb), 0.18);

    /* ---- Inputs ---- */
    --vajax-bs-input-bg:            rgba(0, 0, 0, 0.40);
    --vajax-bs-input-bg-heavy:      rgba(0, 0, 0, 0.50);
    --vajax-bs-input-border:        rgba(255, 255, 255, 0.18);
    --vajax-bs-input-border-focus:  rgba(var(--vajax-bs-accent-rgb), 0.60);

    /* ---- Icon chrome ---- */
    --vajax-bs-icon-color:          rgba(255, 255, 255, 0.78);
    --vajax-bs-icon-color-hover:    #ffffff;
    --vajax-bs-icon-bg-hover:       rgba(255, 255, 255, 0.10);
    --vajax-bs-icon-bg-active:      rgba(var(--vajax-bs-accent-rgb), 0.22);
    --vajax-bs-icon-radius:         7px;
    --vajax-bs-icon-size:           32px;

    /* ---- Player bar / progress ---- */
    --vajax-bs-bar-height:          48px;
    --vajax-bs-track-height:        6px;
    --vajax-bs-track-height-hover:  10px;
    --vajax-bs-track-bg:            rgba(255, 255, 255, 0.14);
    --vajax-bs-track-radius:        999px;
    --vajax-bs-buffer-bg:           rgba(255, 255, 255, 0.22);
    --vajax-bs-progress-start:      #e94560;
    --vajax-bs-progress-end:        #7eb3ff;
    --vajax-bs-scrim-1:             rgba(0, 0, 0, 0.92);
    --vajax-bs-scrim-2:             rgba(0, 0, 0, 0.55);
    --vajax-bs-scrim-3:             rgba(0, 0, 0, 0.00);
    --vajax-bs-player-bg:           #000000;
    --vajax-bs-thumb-bg:            linear-gradient(135deg, var(--vajax-bs-bg-elevated), var(--vajax-bs-bg-elevated-2));

    /* ---- Panel & modal chrome ---- */
    --vajax-bs-panel-radius:        12px;
    --vajax-bs-modal-radius:        10px;
    --vajax-bs-panel-blur:          8px;
    --vajax-bs-modal-blur:          14px;

    /* ---- Shadows ---- */
    --vajax-bs-shadow-panel:        0 8px 24px rgba(0, 0, 0, 0.35);
    --vajax-bs-shadow-player:       0 12px 40px rgba(0, 0, 0, 0.50);
    --vajax-bs-shadow-modal:        0 20px 60px rgba(0, 0, 0, 0.75);
    --vajax-bs-shadow-popup:        0 12px 32px rgba(0, 0, 0, 0.60);
    --vajax-bs-shadow-card:         0 8px 24px rgba(0, 0, 0, 0.70);
    --vajax-bs-shadow-toast:        0 12px 40px rgba(0, 0, 0, 0.70);
    --vajax-bs-shadow-icon-ring:    0 0 0 3px rgba(var(--vajax-bs-o-color-rgb), 0.25);
    --vajax-bs-shadow-o-glow:       0 0 6px rgba(var(--vajax-bs-o-color-rgb), 0.90);

    /* ---- Typography ---- */
    --vajax-bs-font:                -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --vajax-bs-font-mono:           ui-monospace, SFMono-Regular, Menlo, monospace;

    /* ---- Motion ---- */
    --vajax-bs-transition-fast:     0.13s ease;
    --vajax-bs-transition:          0.22s cubic-bezier(0.16, 1, 0.3, 1);
  }

  #vajax-bs-scene-root a,
  #vajax-bs-scene-root a:hover,
  #vajax-bs-scene-root a:focus,
  #vajax-bs-scene-root a:active {
    text-decoration: none !important;
  }

  #vajax-bs-scene-root {
    display: block;
    min-height: calc(100vh - 56px);
    background: var(--vajax-bs-bg);
    color: var(--vajax-bs-text);
    font-family: var(--vajax-bs-font);
    padding: 16px;
    box-sizing: border-box;
  }

  .vajax-bs-layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 1600px;
    margin: 0 auto;
  }
  .vajax-bs-player-col {
    display: flex;
    flex-direction: column;
    gap: 14px;
    min-width: 0;
  }

  @media (min-width: 1200px) {
    .vajax-bs-layout {
      grid-template-columns: minmax(0, 1fr) 380px;
      align-items: start;
    }
    .vajax-bs-player-col { grid-column: 1; }
    .vajax-bs-sidepanel { grid-column: 2; }
  }

  .vajax-bs-loading, .vajax-bs-error {
    display: flex; align-items: center; justify-content: center;
    min-height: 60vh; color: var(--vajax-bs-text-dim); font-size: 1rem;
  }
  .vajax-bs-error { color: var(--vajax-bs-o-color-dim); }

  /* -------- Player -------- */
  .vajax-bs-player-wrap {
    background: #000; border-radius: 12px; overflow: hidden;
    position: relative; box-shadow: 0 12px 40px var(--vajax-bs-input-bg-heavy);
  }
  .vajax-bs-player {
    position: relative; width: 100%; background: #000;
    aspect-ratio: 16 / 9; display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }
  .vajax-bs-player video {
    width: 100%; height: 100%; object-fit: contain; background: #000; display: block;
  }
  .vajax-bs-player:fullscreen { aspect-ratio: auto; width: 100vw; height: 100vh; border-radius: 0; }

  .vajax-bs-bigplay {
    position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
    background: linear-gradient(180deg, rgba(0,0,0,0.2), var(--vajax-bs-input-bg-heavy));
    cursor: pointer; z-index: 3;
  }
  .vajax-bs-bigplay__btn {
    width: 76px; height: 76px; border-radius: 50%;
    border: 2px solid rgba(var(--vajax-bs-accent-rgb), 0.55);
    background: rgba(var(--vajax-bs-accent-rgb), 0.18);
    color: #fff; display: flex; align-items: center; justify-content: center;
    cursor: pointer; backdrop-filter: blur(8px);
    transition: all var(--vajax-bs-transition);
    box-shadow: 0 12px 40px rgba(0,0,0,0.6);
    font-size: 32px;
  }
  .vajax-bs-bigplay__btn svg { width: 34px; height: 34px; margin-left: 4px; }
  .vajax-bs-bigplay__btn:hover {
    background: rgba(var(--vajax-bs-accent-rgb), 0.4);
    border-color: var(--vajax-bs-accent);
    transform: scale(1.05);
  }

  /* -------- Controls -------- */
  .vajax-bs-controls {
    position: absolute; left: 0; right: 0; bottom: 0; z-index: 4;
    display: flex; flex-direction: column;
    background: linear-gradient(to top, var(--vajax-bs-overlay-bg) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%);
    padding: 8px 10px 6px;
    transition: opacity var(--vajax-bs-transition);
  }
  .vajax-bs-player--idle .vajax-bs-controls {
    opacity: 0;
    pointer-events: none;
  }

  .vajax-bs-progress {
    position: relative; height: 14px; cursor: pointer;
    display: flex; align-items: center; margin-bottom: 4px;
  }
  .vajax-bs-progress__track {
    position: relative; width: 100%; height: var(--vajax-bs-track-height);
    border-radius: var(--vajax-bs-track-radius); background: var(--vajax-bs-track-bg);
    transition: height var(--vajax-bs-transition); overflow: visible;
  }
  .vajax-bs-progress:hover .vajax-bs-progress__track { height: var(--vajax-bs-track-height-hover); }
  .vajax-bs-progress__buffer {
    position: absolute; inset: 0 auto 0 0; height: 100%;
    background: var(--vajax-bs-buffer-bg); border-radius: var(--vajax-bs-track-radius);
    pointer-events: none;
  }
  .vajax-bs-progress__fill {
    position: absolute; inset: 0 auto 0 0; height: 100%;
    background: linear-gradient(90deg, var(--vajax-bs-progress-start) 0%, var(--vajax-bs-progress-end) 100%);
    border-radius: var(--vajax-bs-track-radius); pointer-events: none;
  }
  .vajax-bs-progress__thumb {
    position: absolute; top: 50%; width: 14px; height: 14px;
    border-radius: 50%; background: #fff;
    border: 2px solid var(--vajax-bs-progress-start);
    box-shadow: 0 0 0 3px rgba(var(--vajax-bs-o-color-rgb), 0.25);
    transform: translate(-50%, -50%) scale(0);
    transition: transform var(--vajax-bs-transition-fast);
    pointer-events: none;
  }
  .vajax-bs-progress:hover .vajax-bs-progress__thumb { transform: translate(-50%, -50%) scale(1); }
  .vajax-bs-progress__marker {
    position: absolute; top: 50%; width: 10px; height: 10px;
    margin-left: -5px; margin-top: -5px; border-radius: 50%;
    background: #e94560; border: 2px solid #fff;
    box-shadow: 0 0 6px rgba(233,69,96,0.9);
    cursor: pointer; transition: transform 0.12s ease; pointer-events: auto;
  }
  .vajax-bs-progress__marker:hover { transform: scale(1.4); }
  .vajax-bs-progress__loop {
    position: absolute; top: 0; bottom: 0;
    background: rgba(var(--vajax-bs-accent-rgb), 0.28);
    border-left: 2px solid var(--vajax-bs-accent);
    border-right: 2px solid var(--vajax-bs-accent);
    pointer-events: none;
  }

  .vajax-bs-ctrl-row {
    display: flex; align-items: center; gap: 4px;
    color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-btn {
    box-sizing: border-box;
    width: var(--vajax-bs-icon-size); min-width: var(--vajax-bs-icon-size);
    height: var(--vajax-bs-icon-size);
    padding: 0; margin: 0;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 1rem; line-height: 1;
    border-radius: var(--vajax-bs-icon-radius);
    color: var(--vajax-bs-icon-color); background: transparent; border: none;
    cursor: pointer;
    transition: background var(--vajax-bs-transition-fast), color var(--vajax-bs-transition-fast), transform var(--vajax-bs-transition-fast);
    font-family: inherit;
  }
  .vajax-bs-btn svg { width: 1.15em; height: 1.15em; }
  .vajax-bs-btn:hover { background: var(--vajax-bs-icon-bg-hover); color: var(--vajax-bs-icon-color-hover); }
  .vajax-bs-btn:active { transform: scale(0.94); }
  .vajax-bs-btn:disabled { opacity: 0.35; cursor: default; }
  .vajax-bs-btn:disabled:hover { background: transparent; color: var(--vajax-bs-icon-color); }
  .vajax-bs-btn--active {
    background: var(--vajax-bs-icon-bg-active) !important;
    color: var(--vajax-bs-accent-bright) !important;
  }
  .vajax-bs-btn--o {
    width: auto; min-width: auto; padding: 0 10px; gap: 6px;
    font-weight: 700; font-size: 0.85rem; color: #fff;
    background: var(--vajax-bs-surface-o-md);
    border: 1px solid rgba(233,69,96,0.5);
  }
  .vajax-bs-btn--o:hover { background: var(--vajax-bs-surface-o-hi); color: #fff; }
  .vajax-bs-btn--o .vajax-bs-btn__badge {
    display: inline-block; padding: 0 6px; background: #e94560; color: #fff;
    border-radius: 8px; font-size: 0.72rem; line-height: 1.5;
    min-width: 18px; text-align: center;
  }
  .vajax-bs-btn__label { font-family: ui-monospace, monospace; font-size: 0.78rem; }

  .vajax-bs-time {
    font-family: var(--vajax-bs-font-mono);
    font-size: 0.78rem; color: var(--vajax-bs-text-medium);
    padding: 0 6px; font-variant-numeric: tabular-nums; white-space: nowrap;
  }
  .vajax-bs-time__dim { color: var(--vajax-bs-text-faint); }

  .vajax-bs-spacer { flex: 1; }

  .vajax-bs-volume { position: relative; display: flex; align-items: center; gap: 6px; }
  .vajax-bs-volume__slider {
    width: 0; opacity: 0;
    transition: width 0.18s ease, opacity 0.18s ease;
    display: flex; align-items: center;
  }
  .vajax-bs-volume:hover .vajax-bs-volume__slider { width: 80px; opacity: 1; }
  .vajax-bs-volume__input {
    -webkit-appearance: none; width: 100%; height: 4px;
    border-radius: 2px; background: rgba(255,255,255,0.2); outline: none;
  }
  .vajax-bs-volume__input::-webkit-slider-thumb {
    -webkit-appearance: none; width: 12px; height: 12px;
    border-radius: 50%; background: var(--vajax-bs-accent); cursor: pointer;
  }
  .vajax-bs-volume__input::-moz-range-thumb {
    width: 12px; height: 12px; border-radius: 50%;
    background: var(--vajax-bs-accent); cursor: pointer; border: none;
  }

  .vajax-bs-dropdown { position: relative; }
  .vajax-bs-dropdown__menu {
    position: absolute; bottom: calc(100% + 8px); right: 0;
    background: var(--vajax-bs-panel-bg-solid);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 8px; padding: 4px; min-width: 150px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.6); z-index: 20;
    display: flex; flex-direction: column; gap: 2px;
  }
  .vajax-bs-dropdown__item {
    padding: 7px 10px; border-radius: 5px;
    background: transparent; border: none; color: var(--vajax-bs-text);
    font: inherit; font-size: 0.82rem; text-align: left; cursor: pointer;
    white-space: nowrap;
    display: flex; align-items: center; gap: 8px;
  }
  .vajax-bs-dropdown__item:hover { background: rgba(var(--vajax-bs-accent-rgb), 0.18); }
  .vajax-bs-dropdown__item--selected {
    background: rgba(var(--vajax-bs-accent-rgb), 0.28); color: #fff;
  }
  .vajax-bs-dropdown__label {
    font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--vajax-bs-text-dim); padding: 6px 10px 2px; font-weight: 600;
  }
  .vajax-bs-dropdown__row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 6px 10px; gap: 10px; font-size: 0.82rem;
  }
  .vajax-bs-dropdown__row input[type="time"],
  .vajax-bs-dropdown__row input[type="text"] {
    background: var(--vajax-bs-input-bg); border: 1px solid var(--vajax-bs-input-border);
    border-radius: 4px; color: #fff; padding: 3px 6px;
    font-family: ui-monospace, monospace; font-size: 0.75rem;
    width: 70px; text-align: center;
  }

  /* -------- Sidepanel -------- */
  .vajax-bs-sidepanel {
    display: flex; flex-direction: column; gap: 14px;
    background: var(--vajax-bs-panel-bg);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 12px; padding: 14px; box-sizing: border-box;
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    backdrop-filter: blur(8px);
  }

  .vajax-bs-toolbar { display: flex; flex-wrap: wrap; gap: 4px; }
  .vajax-bs-toolbar__btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 10px; border-radius: 6px;
    background: rgba(255,255,255,0.04); border: 1px solid var(--vajax-bs-border-soft);
    color: var(--vajax-bs-icon-color); font: inherit; font-size: 0.75rem; font-weight: 500;
    cursor: pointer;
    transition: background 0.13s ease, border-color 0.13s ease, color 0.13s ease;
    white-space: nowrap;
  }
  .vajax-bs-toolbar__btn svg { width: 14px; height: 14px; }
  .vajax-bs-toolbar__btn:hover {
    background: var(--vajax-bs-surface-accent);
    border-color: rgba(126,179,255,0.45);
    color: #fff;
  }

  .vajax-bs-header { display: flex; flex-direction: column; gap: 6px; }
  .vajax-bs-header__title {
    font-size: 1.25rem; font-weight: 700; line-height: 1.3;
    margin: 0; color: #fff; letter-spacing: -0.01em; word-break: break-word;
  }
  .vajax-bs-header__sub {
    display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
    font-size: 0.78rem; color: var(--vajax-bs-text-dim);
  }
  .vajax-bs-header__sub a { color: var(--vajax-bs-accent); }
  .vajax-bs-header__sep { opacity: 0.4; }
  .vajax-bs-header__id {
    font-family: ui-monospace, monospace; font-size: 0.72rem;
    padding: 1px 6px; border-radius: 4px;
    background: var(--vajax-bs-border-faint); border: 1px solid var(--vajax-bs-border-soft);
  }

  .vajax-bs-scene-toolbar {
    display: flex; flex-wrap: wrap; align-items: center; gap: 5px;
    padding: 6px 8px;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 10px;
  }

  .vajax-bs-chip {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 3px 8px;
    background: var(--vajax-bs-surface-2); border: 1px solid var(--vajax-bs-border-soft);
    border-radius: 7px; font-size: 0.74rem; color: var(--vajax-bs-text-bright);
    transition: background 0.13s ease, border-color 0.13s ease, color 0.13s ease;
    white-space: nowrap; cursor: pointer; font-family: inherit;
  }
  .vajax-bs-chip svg { width: 13px; height: 13px; }
  .vajax-bs-chip:hover {
    background: var(--vajax-bs-surface-accent);
    border-color: rgba(126,179,255,0.4);
    color: #fff;
  }
  .vajax-bs-chip--static { cursor: default; }
  .vajax-bs-chip--static:hover {
    background: var(--vajax-bs-surface-2);
    border-color: var(--vajax-bs-border-soft);
    color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-chip--organized {
    background: var(--vajax-bs-surface-success);
    border-color: rgba(76,175,80,0.55);
    color: var(--vajax-bs-success-text);
  }
  .vajax-bs-chip--o svg { color: #fff; }
  .vajax-bs-chip__value {
    font-weight: 600; min-width: 20px; text-align: center;
    font-variant-numeric: tabular-nums;
  }

  .vajax-bs-rating {
    display: inline-flex; align-items: center; gap: 1px;
    padding: 3px 6px;
  }
  .vajax-bs-rating__star {
    background: transparent; border: none; color: rgba(255,255,255,0.25);
    font-size: 0.9rem; line-height: 1; cursor: pointer; padding: 1px;
    transition: color 0.1s ease, transform 0.1s ease;
    display: inline-flex; align-items: center;
  }
  .vajax-bs-rating__star svg { width: 14px; height: 14px; }
  .vajax-bs-rating__star:hover { color: var(--vajax-bs-star); transform: scale(1.15); }
  .vajax-bs-rating__star--on { color: var(--vajax-bs-star); }
  .vajax-bs-rating__clear {
    background: transparent; border: none; color: var(--vajax-bs-text-faint);
    cursor: pointer; padding: 0 2px; font-size: 0.75rem;
    display: inline-flex; align-items: center;
  }
  .vajax-bs-rating__clear svg { width: 11px; height: 11px; }
  .vajax-bs-rating__clear:hover { color: #fff; }

  .vajax-bs-details { display: flex; flex-direction: column; gap: 14px; }
  .vajax-bs-details__section-title {
    font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--vajax-bs-text-dim); font-weight: 600; margin: 0 0 8px 0;
  }

  .vajax-bs-performers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 8px;
  }
  .vajax-bs-performer {
    border-radius: 10px; overflow: hidden;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
    transition: border-color 0.13s ease, transform 0.13s ease;
    color: inherit; display: block;
  }
  .vajax-bs-performer:hover {
    border-color: rgba(126,179,255,0.5);
    transform: translateY(-1px);
  }
  .vajax-bs-performer__img {
    width: 100%; aspect-ratio: 3 / 4; object-fit: cover; display: block;
    background: linear-gradient(135deg, var(--vajax-bs-thumb-bg));
  }
  .vajax-bs-performer__name {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .vajax-bs-performer__name-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
  .vajax-bs-performer__fav {
    display: inline-flex;
    color: var(--vajax-bs-star);
    flex-shrink: 0;
  }
  .vajax-bs-performer__fav svg {
    width: 12px;
    height: 12px;
  }
  .vajax-bs-performer__disambig {
    font-size: 0.72rem;
    color: var(--vajax-bs-text-medium);
    margin: 0 0 4px 0;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vajax-bs-performer__detail {
    font-size: 0.7rem;
    color: var(--vajax-bs-text-dim);
    margin: 0 0 2px 0;
    line-height: 1.35;
  }
  .vajax-bs-performer__detail:last-child { margin-bottom: 0; }

  /* -------- Compact performer layout (>4 performers) -------- */
  .vajax-bs-performers--compact {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px !important;
  }
  @media (max-width: 900px) {
    .vajax-bs-performers--compact {
      grid-template-columns: minmax(0, 1fr) !important;
    }
  }

  .vajax-bs-performer--compact {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    padding: 6px;
    overflow: visible;
    transition: box-shadow 0.15s ease, border-color 0.15s ease;
    position: relative;
  }
  .vajax-bs-performer--compact:hover {
    border-color: rgba(126,179,255,0.5);
    box-shadow: 0 6px 18px rgba(0,0,0,0.5);
  }
  .vajax-bs-performer--compact .vajax-bs-performer__img {
    width: 52px;
    height: 52px;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .vajax-bs-performer--compact .vajax-bs-performer__info {
    padding: 0;
    flex: 1;
    min-width: 0;
  }
  .vajax-bs-performer--compact .vajax-bs-performer__name {
    font-size: 0.82rem;
    margin: 0 0 2px 0;
  }
  .vajax-bs-performer--compact .vajax-bs-performer__details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.28s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.2s ease;
    opacity: 0;
  }
  .vajax-bs-performer--compact:hover .vajax-bs-performer__details {
    max-height: 400px;
    opacity: 1;
    margin-top: 4px;
  }

  /* -------- This Performer rows -------- */
  .vajax-bs-performer-rows {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .vajax-bs-performer-row {
    display: flex;
    flex-direction: column;
  }
  .vajax-bs-performer-row__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 8px;
  }
  .vajax-bs-performer-row__name {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--vajax-bs-text-bright);
    min-width: 0;
  }
  .vajax-bs-performer-row__name span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .vajax-bs-performer-row__thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    background: var(--vajax-bs-thumb-bg);
  }
  .vajax-bs-performer-row__count {
    font-size: 0.72rem;
    color: var(--vajax-bs-text-faint);
    flex-shrink: 0;
    white-space: nowrap;
  }
  .vajax-bs-performer__info { padding: 8px 10px; }
  .vajax-bs-performer__name {
    font-size: 0.85rem; font-weight: 600; color: #fff;
    margin: 0 0 4px 0;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  .vajax-bs-tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .vajax-bs-tag {
    display: inline-flex; align-items: center;
    padding: 3px 9px;
    background: rgba(126,179,255,0.1);
    border: 1px solid rgba(126,179,255,0.3);
    border-radius: 999px; font-size: 0.72rem; color: #cfe1ff;
    transition: background 0.13s ease, border-color 0.13s ease;
  }
  .vajax-bs-tag:hover {
    background: var(--vajax-bs-surface-accent-hi);
    border-color: rgba(126,179,255,0.6);
    color: #fff;
  }

  .vajax-bs-meta {
    display: grid; grid-template-columns: max-content 1fr;
    gap: 6px 12px; font-size: 0.78rem; color: var(--vajax-bs-text-dim);
  }
  .vajax-bs-meta dt { white-space: nowrap; }
  .vajax-bs-meta dd {
    margin: 0; color: var(--vajax-bs-text-medium);
    overflow: hidden; text-overflow: ellipsis;
  }
  .vajax-bs-meta dd a { color: var(--vajax-bs-accent); }

  /* -------- O Timeline -------- */
  .vajax-bs-otimeline { margin-top: 4px; }
  .vajax-bs-otimeline__actions { display: flex; gap: 8px; margin-bottom: 10px; }
  .vajax-bs-otimeline__btn {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 5px 12px; border-radius: 6px;
    background: var(--vajax-bs-surface-o); border: 1px solid rgba(233,69,96,0.5);
    color: var(--vajax-bs-o-color-soft); font: inherit; font-size: 0.82rem; font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .vajax-bs-otimeline__btn svg { width: 14px; height: 14px; }
  .vajax-bs-otimeline__btn:hover:not(:disabled) {
    background: var(--vajax-bs-surface-o-hi); color: #fff;
  }
  .vajax-bs-otimeline__btn:disabled { opacity: 0.5; cursor: default; }
  .vajax-bs-otimeline__empty {
    color: var(--vajax-bs-text-dim); font-style: italic;
    padding: 10px 4px; font-size: 0.84rem; line-height: 1.5;
  }
  .vajax-bs-otimeline__list {
    list-style: none; padding: 0; margin: 0;
    display: flex; flex-direction: column; gap: 4px;
  }
  .vajax-bs-otimeline__item {
    display: grid; grid-template-columns: auto 1fr auto;
    align-items: center; gap: 10px; padding: 7px 10px;
    border-radius: 6px; background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border-faint);
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .vajax-bs-otimeline__item:hover {
    background: rgba(233,69,96,0.08); border-color: rgba(233,69,96,0.35);
  }
  .vajax-bs-otimeline__item--ph {
    background: rgba(255,255,255,0.015); border-style: dashed;
    border-color: var(--vajax-bs-border-soft);
  }
  .vajax-bs-otimeline__time {
    font: 700 0.86rem/1 ui-monospace, monospace;
    color: var(--vajax-bs-o-color-dim); cursor: pointer; padding: 5px 9px;
    border-radius: 5px; background: var(--vajax-bs-surface-o);
    border: 1px solid rgba(233,69,96,0.3);
    transition: background 0.15s ease, color 0.15s ease;
    min-width: 56px; text-align: center; font-family: inherit;
  }
  .vajax-bs-otimeline__time:hover { background: var(--vajax-bs-surface-o-hi); color: #fff; }
  .vajax-bs-otimeline__noTime {
    font: 600 0.8rem/1 ui-monospace, monospace;
    color: var(--vajax-bs-text-faint); padding: 5px 9px;
    border-radius: 5px; background: rgba(0,0,0,0.25);
    border: 1px dashed rgba(255,255,255,0.2);
    cursor: pointer; min-width: 56px; text-align: center; font-family: inherit;
  }
  .vajax-bs-otimeline__noTime:hover { color: #cfe1ff; border-color: rgba(126,179,255,0.5); }
  .vajax-bs-otimeline__meta {
    display: flex; flex-direction: column; gap: 2px;
    min-width: 0; overflow: hidden;
  }
  .vajax-bs-otimeline__ago {
    font-size: 0.8rem; color: var(--vajax-bs-text-medium);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .vajax-bs-otimeline__date {
    font-size: 0.68rem; color: var(--vajax-bs-text-faint);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .vajax-bs-otimeline__chip {
    display: inline-block; font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.05em; text-transform: uppercase;
    padding: 2px 6px; border-radius: 4px; margin-right: 6px;
    vertical-align: middle; white-space: nowrap;
    background: var(--vajax-bs-border-soft); color: var(--vajax-bs-text-medium);
    border: 1px solid var(--vajax-bs-buffer-bg);
  }
  .vajax-bs-otimeline__edit {
    font: 700 0.86rem/1 ui-monospace, monospace;
    color: #fff; padding: 5px 9px; border-radius: 5px;
    background: var(--vajax-bs-input-bg-heavy); border: 1px solid rgba(233,69,96,0.7);
    outline: none; min-width: 70px; text-align: center; font-family: inherit;
  }
  .vajax-bs-otimeline__edit:focus {
    border-color: #e94560; box-shadow: 0 0 0 2px var(--vajax-bs-surface-o-hi);
  }
  .vajax-bs-otimeline__remove {
    background: transparent; border: none;
    color: var(--vajax-bs-text-faint); cursor: pointer;
    padding: 4px 6px; border-radius: 4px; font-size: 0.9rem; line-height: 1;
    transition: background 0.15s ease, color 0.15s ease;
    display: inline-flex; align-items: center;
  }
  .vajax-bs-otimeline__remove svg { width: 13px; height: 13px; }
  .vajax-bs-otimeline__remove:hover:not(:disabled) {
    background: var(--vajax-bs-surface-o-hi); color: var(--vajax-bs-o-color-dim);
  }
  .vajax-bs-otimeline__remove:disabled { opacity: 0.4; cursor: default; }

  /* -------- Toast -------- */
  .vajax-bs-toast {
    position: fixed; left: 50%; bottom: 90px; transform: translateX(-50%);
    z-index: 2147483000; background: rgba(23,27,34,0.97);
    border: 1px solid rgba(233,69,96,0.6); color: var(--vajax-bs-o-color-soft);
    padding: 10px 18px; border-radius: 10px;
    font: 600 0.86rem/1.3 var(--vajax-bs-font);
    box-shadow: 0 12px 40px rgba(0,0,0,0.7);
    animation: vajax-bs-toast-in 0.2s ease; pointer-events: none;
  }
  @keyframes vajax-bs-toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(8px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  /* -------- Modals -------- */
  .vajax-bs-modal {
    position: fixed; top: 80px; left: 20px;
    width: 420px; min-width: 280px; min-height: 180px;
    max-width: 90vw; max-height: 85vh;
    display: flex; flex-direction: column;
    z-index: 2147482000;
    background: rgba(23,27,34,0.97);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 10px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.75);
    color: var(--vajax-bs-text);
    font: 0.82rem/1.4 var(--vajax-bs-font);
    resize: both; overflow: hidden;
  }
  .vajax-bs-modal--wide { width: 520px; }
  .vajax-bs-modal__header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 14px;
    border-bottom: 1px solid var(--vajax-bs-border);
    font-weight: 700; font-size: 0.78rem;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: rgba(126,179,255,0.9);
    cursor: move; user-select: none; flex: 0 0 auto;
  }
  .vajax-bs-modal__close {
    background: transparent; border: none;
    color: var(--vajax-bs-text-dim); cursor: pointer;
    padding: 2px 6px; border-radius: 4px;
    display: inline-flex; align-items: center;
  }
  .vajax-bs-modal__close svg { width: 14px; height: 14px; }
  .vajax-bs-modal__close:hover { color: #fff; background: var(--vajax-bs-border-soft); }
  .vajax-bs-modal__body {
    flex: 1 1 auto; min-height: 0; overflow-y: auto;
    padding: 14px; display: flex; flex-direction: column; gap: 14px;
  }

  .vajax-bs-section { display: flex; flex-direction: column; gap: 6px; }
  .vajax-bs-section__label {
    font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--vajax-bs-text-dim); font-weight: 600;
  }
  .vajax-bs-select, .vajax-bs-input {
    width: 100%; padding: 7px 10px;
    background: var(--vajax-bs-input-bg);
    border: 1px solid var(--vajax-bs-input-border);
    border-radius: 6px; color: #fff; font: inherit; font-size: 0.85rem;
    outline: none; box-sizing: border-box;
  }
  .vajax-bs-select:focus, .vajax-bs-input:focus { border-color: rgba(126,179,255,0.6); }
  textarea.vajax-bs-input {
    resize: vertical; min-height: 80px;
    font-family: inherit;
  }

  .vajax-bs-row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 10px; padding: 5px 0; font-size: 0.84rem;
  }
  .vajax-bs-row__label { color: var(--vajax-bs-text-medium); }

  .vajax-bs-mini {
    padding: 5px 10px;
    background: var(--vajax-bs-surface-2);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 5px; color: var(--vajax-bs-text);
    font: inherit; font-size: 0.78rem; cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    display: inline-flex; align-items: center; gap: 6px;
  }
  .vajax-bs-mini svg { width: 13px; height: 13px; }
  .vajax-bs-mini:hover {
    background: var(--vajax-bs-surface-accent-md);
    border-color: rgba(126,179,255,0.45);
    color: #fff;
  }
  .vajax-bs-mini--active {
    background: var(--vajax-bs-surface-o-hi);
    border-color: rgba(233,69,96,0.7);
    color: var(--vajax-bs-o-color-dim);
  }
  .vajax-bs-mini--primary {
    background: rgba(126,179,255,0.25);
    border-color: rgba(126,179,255,0.6);
    color: #cfe1ff;
  }

  .vajax-bs-toolbtn {
    display: flex; align-items: center; gap: 10px;
    width: 100%; padding: 10px 12px;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border-soft);
    border-radius: 6px; color: var(--vajax-bs-text);
    font: inherit; font-size: 0.84rem; font-weight: 500;
    cursor: pointer; text-align: left;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }
  .vajax-bs-toolbtn svg { width: 16px; height: 16px; }
  .vajax-bs-toolbtn:hover {
    background: var(--vajax-bs-surface-accent);
    border-color: rgba(126,179,255,0.45);
    color: #fff;
  }

  .vajax-bs-kv {
    display: flex; flex-direction: column; gap: 2px;
    font-family: var(--vajax-bs-font-mono);
  }
  .vajax-bs-kv__row {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 10px; padding: 3px 0; font-size: 0.76rem;
  }
  .vajax-bs-kv__label { color: var(--vajax-bs-text-dim); flex-shrink: 0; }
  .vajax-bs-kv__value {
    color: #cfe1ff; text-align: right;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    max-width: 220px;
  }

  .vajax-bs-help__title {
    font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: rgba(126,179,255,0.75); font-weight: 700; margin-bottom: 6px;
  }
  .vajax-bs-help__row {
    display: flex; align-items: center; gap: 10px;
    padding: 4px 0; font-size: 0.82rem;
  }
  .vajax-bs-help__keys { display: flex; gap: 3px; flex-shrink: 0; }
  .vajax-bs-help__keys kbd {
    display: inline-block;
    font-family: var(--vajax-bs-font-mono);
    font-size: 0.72rem; padding: 2px 7px; min-width: 20px;
    text-align: center;
    background: var(--vajax-bs-surface-3);
    border: 1px solid var(--vajax-bs-buffer-bg);
    border-bottom-width: 2px;
    border-radius: 4px; color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-help__desc { color: var(--vajax-bs-text-medium); }

  .vajax-bs-fileinfo {
    display: grid; grid-template-columns: max-content 1fr;
    gap: 6px 14px; margin: 0; font-size: 0.8rem;
    font-family: var(--vajax-bs-font-mono);
  }
  .vajax-bs-fileinfo dt {
    color: var(--vajax-bs-text-dim); font-weight: 500; white-space: nowrap;
  }
  .vajax-bs-fileinfo dd {
    margin: 0; color: #cfe1ff;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .vajax-bs-fileinfo dd a { color: var(--vajax-bs-accent); }

  /* -------- Queue -------- */
  .vajax-bs-queue { display: flex; flex-direction: column; gap: 12px; }
  .vajax-bs-queue__controls {
    display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
  }
  .vajax-bs-queue__ctrl {
    width: 34px; height: 30px; padding: 0; border-radius: 7px;
    background: var(--vajax-bs-surface-2);
    border: 1px solid var(--vajax-bs-border-soft);
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    transition: background 0.13s ease, color 0.13s ease;
    display: inline-flex; align-items: center; justify-content: center;
  }
  .vajax-bs-queue__ctrl svg { width: 14px; height: 14px; }
  .vajax-bs-queue__ctrl:hover { background: var(--vajax-bs-surface-accent-md); color: #fff; }

  .vajax-bs-queue__settings {
    display: flex; flex-direction: column; gap: 4px;
    padding: 10px 12px;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 8px;
  }
  .vajax-bs-queue__settings-title {
    font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--vajax-bs-text-dim); font-weight: 600; margin-bottom: 4px;
  }
  .vajax-bs-queue__setting {
    display: flex; align-items: center; justify-content: space-between;
    gap: 10px; padding: 5px 4px; cursor: pointer;
    border-radius: 5px; transition: background 0.13s ease;
  }
  .vajax-bs-queue__setting:hover { background: var(--vajax-bs-surface-1); }
  .vajax-bs-queue__setting-label {
    font-size: 0.82rem; color: var(--vajax-bs-text-bright);
  }

  .vajax-bs-toggle {
    position: relative; width: 34px; height: 18px; flex-shrink: 0;
    border-radius: 999px; background: var(--vajax-bs-border-soft);
    border: 1px solid var(--vajax-bs-border-bright);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease;
    padding: 0;
  }
  .vajax-bs-toggle::after {
    content: ""; position: absolute; top: 1px; left: 1px;
    width: 14px; height: 14px; border-radius: 50%; background: #fff;
    transition: transform 0.15s ease;
  }
  .vajax-bs-toggle--on {
    background: rgba(126,179,255,0.6);
    border-color: rgba(126,179,255,0.8);
  }
  .vajax-bs-toggle--on::after { transform: translateX(16px); }

  .vajax-bs-queue__items {
    display: flex; flex-direction: column; gap: 3px; overflow-y: auto;
  }
  .vajax-bs-queue__item {
    display: flex; align-items: center; gap: 10px;
    padding: 6px 8px; border-radius: 7px;
    background: transparent; border: 1px solid transparent;
    color: inherit; font: inherit; text-align: left;
    cursor: pointer;
    transition: background 0.13s ease, border-color 0.13s ease;
    width: 100%;
  }
  .vajax-bs-queue__item:hover {
    background: var(--vajax-bs-surface-2);
    border-color: var(--vajax-bs-border-soft);
  }
  .vajax-bs-queue__item--current {
    background: var(--vajax-bs-surface-o);
    border-color: rgba(233,69,96,0.45);
  }
  .vajax-bs-queue__thumb {
    width: 68px; height: 42px; flex-shrink: 0;
    border-radius: 5px; object-fit: cover; background: var(--vajax-bs-overlay-bg-faint);
  }
  .vajax-bs-queue__meta { flex: 1; min-width: 0; }
  .vajax-bs-queue__title {
    font-size: 0.82rem; font-weight: 500; color: #fff;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .vajax-bs-queue__sub {
    font-size: 0.7rem; color: var(--vajax-bs-text-dim);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .vajax-bs-queue__now {
    flex-shrink: 0; font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.08em; padding: 2px 6px; border-radius: 4px;
    background: #e94560; color: #fff;
  }
  .vajax-bs-queue__empty {
    text-align: center; padding: 24px 10px;
    color: var(--vajax-bs-text-dim); font-style: italic; font-size: 0.82rem;
  }

  .vajax-bs-queue__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }
  .vajax-bs-queue__chip {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 1px 6px;
    font-size: 0.65rem;
    color: var(--vajax-bs-text-dim);
    background: var(--vajax-bs-surface-2);
    border: 1px solid var(--vajax-bs-border-soft);
    border-radius: 4px;
    font-variant-numeric: tabular-nums;
    font-family: var(--vajax-bs-font-mono);
    line-height: 1.6;
  }
  .vajax-bs-queue__chip svg {
    width: 10px;
    height: 10px;
  }
  .vajax-bs-queue__chip--o {
    color: var(--vajax-bs-o-color-dim);
    border-color: var(--vajax-bs-surface-o-hi);
    background: rgba(233,69,96,0.1);
  }
  .vajax-bs-queue__chip--o svg {
    color: #fff;
  }

  /* -------- Markers / History list rows -------- */
  .vajax-bs-marker-row {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 10px;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 7px;
    cursor: pointer;
  }
  .vajax-bs-marker-row:hover {
    background: rgba(126,179,255,0.08);
    border-color: rgba(126,179,255,0.4);
  }
  .vajax-bs-marker-row--static { cursor: default; }
  .vajax-bs-marker-row--static:hover {
    background: var(--vajax-bs-surface-1);
    border-color: var(--vajax-bs-border);
  }
  .vajax-bs-marker-row__time {
    font-family: ui-monospace, monospace; font-size: 0.82rem;
    color: var(--vajax-bs-o-color-dim); padding: 3px 8px;
    background: var(--vajax-bs-surface-o);
    border: 1px solid rgba(233,69,96,0.3);
    border-radius: 5px; min-width: 60px; text-align: center;
  }
  .vajax-bs-marker-row__title {
    flex: 1; min-width: 0;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .vajax-bs-marker-row__tag { font-size: 0.7rem; color: var(--vajax-bs-text-dim); }

  /* -------- Pickers (studio/performer/tag) -------- */
  .vajax-bs-picker {
    position: relative;
    display: flex; flex-direction: column; gap: 6px;
  }
  .vajax-bs-picker__input {
    width: 100%; padding: 7px 10px;
    background: var(--vajax-bs-input-bg);
    border: 1px solid var(--vajax-bs-input-border);
    border-radius: 6px; color: #fff; font: inherit; font-size: 0.85rem;
    outline: none; box-sizing: border-box;
  }
  .vajax-bs-picker__input:focus { border-color: rgba(126,179,255,0.6); }
  .vajax-bs-picker__menu {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0;
    background: var(--vajax-bs-panel-bg-solid);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 6px; max-height: 200px; overflow-y: auto;
    z-index: 30; box-shadow: 0 12px 32px rgba(0,0,0,0.6);
  }
  .vajax-bs-picker__item {
    display: block; width: 100%; text-align: left;
    padding: 6px 10px; background: transparent; border: none;
    color: var(--vajax-bs-text); font: inherit; font-size: 0.82rem;
    cursor: pointer;
  }
  .vajax-bs-picker__item:hover { background: rgba(var(--vajax-bs-accent-rgb), 0.18); }
  .vajax-bs-picker__chips {
    display: flex; flex-wrap: wrap; gap: 5px;
  }
  .vajax-bs-picker__chip {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 3px 8px;
    background: var(--vajax-bs-surface-accent);
    border: 1px solid rgba(126,179,255,0.35);
    border-radius: 999px; font-size: 0.75rem;
  }
  .vajax-bs-picker__chip button {
    background: transparent; border: none;
    color: var(--vajax-bs-text-dim); cursor: pointer;
    padding: 0; font-size: 0.85rem; line-height: 1;
    display: inline-flex; align-items: center;
  }
  .vajax-bs-picker__chip button:hover { color: var(--vajax-bs-o-color-dim); }
  .vajax-bs-picker__chip button svg { width: 11px; height: 11px; }

  /* -------- URL list -------- */
  .vajax-bs-url-row {
    display: flex; gap: 6px; align-items: center;
  }
  .vajax-bs-url-row .vajax-bs-input { flex: 1; }

  .vajax-bs-hovercard {
    width: 240px;
    background: rgba(23, 27, 34, 0.98);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 10px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.8);
    overflow: hidden;
    animation: vajax-bs-pane-in 0.14s ease;
    pointer-events: auto;
  }
  .vajax-bs-hovercard__img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    background: linear-gradient(135deg, var(--vajax-bs-thumb-bg));
  }
  .vajax-bs-hovercard__img--empty {
    height: 60px;
  }
  .vajax-bs-hovercard__body {
    padding: 10px 12px;
  }
  .vajax-bs-hovercard__name {
    font-size: 0.86rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 4px;
    word-break: break-word;
  }
  .vajax-bs-hovercard__meta {
    font-size: 0.74rem;
    color: var(--vajax-bs-text-dim);
    line-height: 1.4;
  }

  /* ============================================================
     Context menu
     ============================================================ */
  .vajax-bs-context {
    min-width: 200px;
    background: rgba(23,27,34,0.98);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 8px;
    padding: 4px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.85);
    color: var(--vajax-bs-text);
    font: 0.82rem/1.4 var(--vajax-bs-font);
    animation: vajax-bs-pane-in 0.12s ease;
  }
  .vajax-bs-context__item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    background: transparent;
    border: none;
    color: inherit;
    font: inherit;
    font-size: 0.82rem;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.12s ease;
  }
  .vajax-bs-context__item:hover:not(:disabled) {
    background: rgba(var(--vajax-bs-accent-rgb), 0.18);
  }
  .vajax-bs-context__item:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .vajax-bs-context__icon {
    display: inline-flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    color: var(--vajax-bs-text-medium);
  }
  .vajax-bs-context__icon svg { width: 14px; height: 14px; }
  .vajax-bs-context__label { flex: 1; min-width: 0; }
  .vajax-bs-context__hint {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.35);
    padding: 1px 5px;
    background: var(--vajax-bs-surface-2);
    border-radius: 3px;
  }
  .vajax-bs-context__sep {
    height: 1px;
    background: var(--vajax-bs-surface-3);
    margin: 4px 0;
  }
  .vajax-bs-context__wrapper {
    position: relative;
  }
  .vajax-bs-context__item--has-sub {
    cursor: default;
  }
  .vajax-bs-context__arrow {
    margin-left: auto;
    color: var(--vajax-bs-text-faint);
    display: inline-flex;
    align-items: center;
  }
  .vajax-bs-context__arrow svg {
    width: 12px;
    height: 12px;
  }
  .vajax-bs-context__submenu {
    position: absolute;
    top: -4px;
    left: calc(100% + 2px);
    min-width: 200px;
    max-height: 70vh;
    overflow-y: auto;
    background: var(--vajax-bs-panel-bg-solid);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 8px;
    padding: 4px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.85);
    display: flex;
    flex-direction: column;
    gap: 2px;
    z-index: 1;
  }
  .vajax-bs-context__submenu--left {
    left: auto;
    right: calc(100% + 2px);
  }
  .vajax-bs-context__item--danger {
    color: var(--vajax-bs-error-soft, #ffb8c4);
  }
  .vajax-bs-context__item--danger:hover:not(:disabled) {
    background: var(--vajax-bs-surface-o-md);
  }
  .vajax-bs-context__item:disabled .vajax-bs-context__label,
  .vajax-bs-context__item:disabled .vajax-bs-context__icon {
    opacity: 0.5;
  }

  /* ============================================================
     Nerd graphs
     ============================================================ */
  .vajax-bs-graphs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 14px;
  }
  .vajax-bs-graphs__block {
    background: var(--vajax-bs-overlay-bg-faint);
    border: 1px solid var(--vajax-bs-surface-3);
    border-radius: 8px;
    padding: 8px 10px;
  }
  .vajax-bs-graphs__title {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--vajax-bs-text-dim);
    font-weight: 600;
    margin-bottom: 6px;
  }
  .vajax-bs-graph {
    display: block;
    width: 100%;
    height: 90px;
    border-radius: 4px;
    background: var(--vajax-bs-input-bg);
  }

  /* ============================================================
     Timeline hover preview
     ============================================================ */
  .vajax-bs-tlpreview {
    position: absolute;
    bottom: calc(100% + 8px);
    transform: translateX(-50%);
    background: var(--vajax-bs-overlay-bg);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 6px;
    padding: 3px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.7);
    pointer-events: none;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
  }
  .vajax-bs-tlpreview__thumb {
    border-radius: 4px;
    background-repeat: no-repeat;
    display: block;
  }
  .vajax-bs-tlpreview__thumb--empty {
    width: 120px;
    height: 68px;
    background: var(--vajax-bs-border-faint);
  }
  .vajax-bs-tlpreview__time {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #fff;
    padding: 0 4px;
  }

  /* ============================================================
     Below-player section
     ============================================================ */
  .vajax-bs-below {
    background: var(--vajax-bs-panel-bg);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 12px;
    padding: 10px 12px 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
  }
  .vajax-bs-below__tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--vajax-bs-border);
    padding-bottom: 6px;
  }
  .vajax-bs-below__tab {
    padding: 6px 12px;
    border-radius: 6px;
    background: transparent;
    border: 1px solid transparent;
    color: var(--vajax-bs-text-dim);
    font: inherit;
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.13s ease, color 0.13s ease, border-color 0.13s ease;
    white-space: nowrap;
  }
  .vajax-bs-below__tab:hover {
    background: var(--vajax-bs-surface-2);
    color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-below__tab--active {
    background: var(--vajax-bs-surface-accent-md);
    border-color: rgba(var(--vajax-bs-accent-rgb), 0.45);
    color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-below__select:focus {
    border-color: rgba(126,179,255,0.6);
  }
  .vajax-bs-below__body {
    min-height: 130px;
  }
  .vajax-bs-below__empty {
    text-align: center;
    color: var(--vajax-bs-text-faint);
    font-style: italic;
    font-size: 0.82rem;
    padding: 30px 10px;
  }

  .vajax-bs-carousel {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    padding-bottom: 6px;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.2) transparent;
  }
  .vajax-bs-carousel::-webkit-scrollbar { height: 6px; }
  .vajax-bs-carousel::-webkit-scrollbar-thumb {
    background: var(--vajax-bs-border-bright);
    border-radius: 3px;
  }
  .vajax-bs-carousel::-webkit-scrollbar-track {
    background: transparent;
  }

  .vajax-bs-card {
    flex: 0 0 180px;
    scroll-snap-align: start;
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.13s ease, transform 0.13s ease;
  }
  .vajax-bs-card:hover {
    border-color: rgba(126,179,255,0.5);
    transform: translateY(-2px);
  }
  .vajax-bs-card__thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    background: #000;
    overflow: hidden;
  }
  .vajax-bs-card__thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .vajax-bs-card__preview {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background: #000;
    z-index: 1;
    pointer-events: none;
    animation: vajax-bs-fade-in 0.2s ease;
  }
  @keyframes vajax-bs-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .vajax-bs-card__thumb-empty {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--vajax-bs-thumb-bg));
  }
  .vajax-bs-card__duration {
    position: absolute;
    bottom: 4px;
    right: 4px;
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    padding: 1px 5px;
    background: var(--vajax-bs-overlay-bg);
    color: #fff;
    border-radius: 3px;
  }
  .vajax-bs-card__badge {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    font-size: 0.62rem;
    font-weight: 700;
    padding: 1px 5px;
    background: #e94560;
    color: #fff;
    border-radius: 3px;
    letter-spacing: 0.04em;
  }
  .vajax-bs-card__badge svg {
    width: 10px;
    height: 10px;
  }
  .vajax-bs-card__title {
    padding: 6px 8px 0;
    font-size: 0.76rem;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vajax-bs-card__sub {
    padding: 2px 8px 8px;
    font-size: 0.68rem;
    color: var(--vajax-bs-text-dim);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ============================================================
     O Count Map view
     ============================================================ */
  .vajax-bs-omap-wrap {
    position: relative;
    padding: 12px 6px 6px;
  }
  .vajax-bs-omap {
    background: rgba(0,0,0,0.35);
    border-radius: 6px;
    padding: 14px 8px;
    border: 1px solid var(--vajax-bs-surface-3);
  }
  .vajax-bs-omap__track {
    position: relative;
    height: 8px;
    background: var(--vajax-bs-surface-3);
    border-radius: 999px;
  }
  .vajax-bs-omap__marker {
    position: absolute;
    top: 50%;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    margin-top: -7px;
    border-radius: 50%;
    background: #e94560;
    border: 2px solid #fff;
    box-shadow: 0 0 6px rgba(233,69,96,0.9);
    cursor: pointer;
    transition: transform 0.12s ease;
  }
  .vajax-bs-omap__marker--hover {
    transform: scale(1.4);
  }
  .vajax-bs-omap__footer {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 8px;
    font-size: 0.72rem;
    color: var(--vajax-bs-text-faint);
    font-family: ui-monospace, monospace;
  }
  .vajax-bs-omap__popup {
    position: absolute;
    top: 0;
    transform: translate(-50%, -100%);
    background: var(--vajax-bs-overlay-bg);
    border: 1px solid var(--vajax-bs-border-bright);
    border-radius: 6px;
    padding: 3px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.7);
    pointer-events: none;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    margin-top: -10px;
  }
  .vajax-bs-omap__popup-thumb {
    border-radius: 4px;
    background-repeat: no-repeat;
    display: block;
  }
  .vajax-bs-omap__popup-thumb--empty {
    width: 120px;
    height: 68px;
    background: var(--vajax-bs-border-faint);
  }
  .vajax-bs-omap__popup-time {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    color: #fff;
  }

  .vajax-bs-queue__setting-lock {
    display: inline-flex;
    vertical-align: middle;
    margin-left: 5px;
    color: var(--vajax-bs-text-faint);
  }
  .vajax-bs-queue__setting-lock svg {
    width: 11px;
    height: 11px;
  }
  .vajax-bs-toggle:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
  .vajax-bs-toggle:disabled::after {
    background: rgba(255, 255, 255, 0.7);
  }
  .vajax-bs-queue__section {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 12px;
    border-radius: 10px;
  }
  .vajax-bs-queue__section--session {
    background: linear-gradient(
      135deg,
      rgba(var(--vajax-bs-accent-rgb), 0.10),
      rgba(var(--vajax-bs-accent-rgb), 0.03)
    );
    border: 1px solid rgba(var(--vajax-bs-accent-rgb), 0.25);
  }
  .vajax-bs-queue__section--stash {
    background: var(--vajax-bs-surface-1);
    border: 1px solid var(--vajax-bs-border);
  }
  .vajax-bs-queue__section--session .vajax-bs-queue__section-title {
    color: var(--vajax-bs-accent-bright);
  }
  .vajax-bs-queue__section--session .vajax-bs-queue__section-count {
    background: rgba(var(--vajax-bs-accent-rgb), 0.20);
    border-color: rgba(var(--vajax-bs-accent-rgb), 0.40);
    color: var(--vajax-bs-accent-bright);
  }
  .vajax-bs-queue__section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 4px 8px;
    border-bottom: 1px solid var(--vajax-bs-border);
    margin-bottom: 4px;
  }
  .vajax-bs-queue__section-title {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vajax-bs-text-medium);
    font-weight: 700;
  }
  .vajax-bs-queue__section-title svg {
    width: 13px;
    height: 13px;
  }
  .vajax-bs-queue__section-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 18px;
    padding: 0 6px;
    border-radius: 9px;
    background: var(--vajax-bs-surface-2);
    border: 1px solid var(--vajax-bs-border-soft);
    color: var(--vajax-bs-text-bright);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0;
  }
  .vajax-bs-queue__section-hint {
    flex: 1;
    font-size: 0.68rem;
    color: var(--vajax-bs-text-faint);
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .vajax-bs-queue__section-clear {
    background: transparent;
    border: 1px solid var(--vajax-bs-border-soft);
    border-radius: 5px;
    color: var(--vajax-bs-text-dim);
    cursor: pointer;
    padding: 3px 7px;
    display: inline-flex;
    align-items: center;
    transition: background 0.13s ease, color 0.13s ease, border-color 0.13s ease;
  }
  .vajax-bs-queue__section-clear svg {
    width: 13px;
    height: 13px;
  }
  .vajax-bs-queue__section-clear:hover {
    background: var(--vajax-bs-surface-o-md);
    border-color: rgba(233,69,96,0.6);
    color: var(--vajax-bs-o-color-dim);
  }
  /* -------- History (grouped by day) -------- */
  .vajax-bs-history-days {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .vajax-bs-history-day {
    border: 1px solid var(--vajax-bs-border);
    border-radius: 6px;
    background: var(--vajax-bs-surface-1);
    overflow: hidden;
  }
  .vajax-bs-history-day__header {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    background: transparent;
    border: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    text-align: left;
    transition: background 0.13s ease;
  }
  .vajax-bs-history-day__header:hover {
    background: var(--vajax-bs-surface-2);
  }
  .vajax-bs-history-day__chevron {
    display: inline-flex;
    color: var(--vajax-bs-text-faint);
    transition: transform 0.15s ease;
  }
  .vajax-bs-history-day__chevron svg {
    width: 12px;
    height: 12px;
  }
  .vajax-bs-history-day__header--open .vajax-bs-history-day__chevron {
    transform: rotate(90deg);
    color: var(--vajax-bs-accent);
  }
  .vajax-bs-history-day__date {
    flex: 1;
    font-weight: 600;
    font-size: 0.82rem;
    color: var(--vajax-bs-text-bright);
  }
  .vajax-bs-history-day__stats {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-family: var(--vajax-bs-font-mono);
    font-size: 0.74rem;
  }
  .vajax-bs-history-day__count {
    color: var(--vajax-bs-accent);
    font-weight: 600;
  }
  .vajax-bs-history-day__dot {
    opacity: 0.4;
    color: var(--vajax-bs-text-dim);
  }
  .vajax-bs-history-day__duration {
    color: var(--vajax-bs-text-medium);
  }
  .vajax-bs-history-day__times {
    padding: 8px 10px 10px 30px;
    border-top: 1px solid var(--vajax-bs-border-faint);
    font-family: var(--vajax-bs-font-mono);
    font-size: 0.72rem;
    color: var(--vajax-bs-text-medium);
    line-height: 1.5;
    word-break: break-word;
  }
  .vajax-bs-history-live {
    display: inline-block;
    margin-left: 6px;
    padding: 1px 5px;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    border-radius: 3px;
    background: rgba(233,69,96,0.20);
    border: 1px solid rgba(233,69,96,0.5);
    color: var(--vajax-bs-o-color-dim);
    vertical-align: middle;
    animation: vajax-bs-pulse 1.4s ease-in-out infinite;
  }
  @keyframes vajax-bs-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.55; }
  }
  /* -------- This Session panel -------- */
  .vajax-bs-session-panel {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px 12px 12px;
    margin-bottom: 12px;
    border-radius: 8px;
    background: linear-gradient(
      135deg,
      rgba(var(--vajax-bs-o-color-rgb), 0.10),
      rgba(var(--vajax-bs-o-color-rgb), 0.03)
    );
    border: 1px solid rgba(var(--vajax-bs-o-color-rgb), 0.30);
  }
  .vajax-bs-session-panel__header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vajax-bs-o-color-dim);
    font-weight: 700;
    margin-bottom: 2px;
  }
  .vajax-bs-session-panel__dot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--vajax-bs-o-color);
    box-shadow: 0 0 6px rgba(var(--vajax-bs-o-color-rgb), 0.8);
    animation: vajax-bs-pulse 1.4s ease-in-out infinite;
  }
  .vajax-bs-session-panel__row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    font-size: 0.78rem;
  }
  .vajax-bs-session-panel__label {
    color: var(--vajax-bs-text-dim);
  }
  .vajax-bs-session-panel__value {
    font-family: var(--vajax-bs-font-mono);
    color: var(--vajax-bs-text-bright);
    font-weight: 600;
  }
  .vajax-bs-session-panel__bar-wrap {
    position: relative;
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    overflow: hidden;
    margin-top: 4px;
  }
  .vajax-bs-session-panel__bar {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      var(--vajax-bs-o-color),
      var(--vajax-bs-accent)
    );
    transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 8px rgba(var(--vajax-bs-o-color-rgb), 0.5);
  }
  .vajax-bs-session-panel__bar--done {
    background: linear-gradient(90deg, #4caf50, #66d97a);
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.6);
  }
  .vajax-bs-session-panel__pct {
    text-align: right;
    font-family: var(--vajax-bs-font-mono);
    font-size: 0.7rem;
    color: var(--vajax-bs-text-faint);
  }
  `,document.head.appendChild(a)}function Y(a,t=!1){let s=document.createElement("div");s.className="vajax-bs-toast",t&&(s.style.borderColor="rgba(255,120,120,0.8)",s.style.color="var(--vajax-bs-error-soft)"),s.textContent=a,document.body.appendChild(s),setTimeout(()=>s.remove(),1800)}function Na(a){try{let t=document.createElement("textarea");t.value=a,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.left="-1000px",t.style.opacity="0",document.body.appendChild(t);let s=document.activeElement;t.select(),t.setSelectionRange(0,t.value.length);let r=document.execCommand("copy");if(document.body.removeChild(t),s&&typeof s.focus=="function"&&s.focus(),r)return Y("Copied to clipboard"),!0}catch(t){console.warn("[Vajax BS] fallbackCopy failed",t)}return Y("Copy failed",!0),!1}function _e(a){let t=String(a??"");if(!t){Y("Nothing to copy",!0);return}if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(()=>Y("Copied to clipboard"),()=>Na(t));return}Na(t)}function At(a){e.useEffect(()=>{let t=a.current;if(!t)return;let s=t.querySelector(".vajax-bs-modal__header");if(!s)return;let r=null,n=d=>{if(d.target.closest(".vajax-bs-modal__close")||d.button!==0)return;let o=t.getBoundingClientRect();t.style.left=`${o.left}px`,t.style.top=`${o.top}px`,t.style.right="auto",t.style.bottom="auto",r={startX:d.clientX,startY:d.clientY,startLeft:o.left,startTop:o.top},document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),d.preventDefault()},l=d=>{r&&(t.style.left=`${r.startLeft+(d.clientX-r.startX)}px`,t.style.top=`${r.startTop+(d.clientY-r.startY)}px`)},c=()=>{r=null,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)};return s.addEventListener("mousedown",n),()=>{s.removeEventListener("mousedown",n),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}},[a])}var Ca=new WeakMap;function Dt(a){if(!a)return null;let t=Ca.get(a);if(t)return t.ctx.state==="suspended"&&t.ctx.resume().catch(()=>{}),t;try{let s=new(window.AudioContext||window.webkitAudioContext),r=s.createMediaElementSource(a),n=s.createChannelSplitter(2),l=s.createAnalyser(),c=s.createAnalyser();l.fftSize=512,c.fftSize=512,l.smoothingTimeConstant=.75,c.smoothingTimeConstant=.75,r.connect(n),n.connect(l,0),n.connect(c,1),r.connect(s.destination);let d={ctx:s,left:l,right:c};return Ca.set(a,d),s.state==="suspended"&&s.resume().catch(()=>{}),d}catch(s){return console.warn("[Vajax BS] audio analyser failed",s),null}}function la(a,t=[]){let[s,r]=e.useState({w:0,h:0});return e.useEffect(()=>{let n=a.current;if(!n)return;let l=()=>{let d=n.clientWidth,o=n.clientHeight;if(d===0||o===0)return;let u=window.devicePixelRatio||1;n.width=d*u,n.height=o*u,n.getContext("2d").setTransform(u,0,0,u,0,0),r({w:d,h:o})};l();let c=new ResizeObserver(l);return c.observe(n),()=>c.disconnect()},t),s}function Ya(){let[a,t]=e.useState(()=>document.fullscreenElement||document.body);return e.useEffect(()=>{let s=()=>t(document.fullscreenElement||document.body);return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[]),a}function fe({title:a,onClose:t,children:s,wide:r=!1}){let n=e.useRef(null);At(n);let l=Ya();return e.useEffect(()=>{let c=n.current;if(!c||!window.matchMedia("(max-width: 768px)").matches)return;requestAnimationFrame(()=>{if(!c.isConnected)return;let u=window.innerWidth,p=window.innerHeight,m=8,f=u-m*2,x=p-m*2;c.style.left=`${m}px`,c.style.top=`${m}px`,c.style.right="auto",c.style.bottom="auto",c.style.width=`${f}px`,c.style.maxWidth=`${f}px`,c.style.height=`${x}px`,c.style.maxHeight=`${x}px`,c.style.minWidth="0",c.style.minHeight="0",c.style.resize="none"})},[]),je.createPortal(e.createElement("div",{ref:n,className:"vajax-bs-modal"+(r?" vajax-bs-modal--wide":""),onClick:c=>c.stopPropagation()},e.createElement("div",{className:"vajax-bs-modal__header"},e.createElement("span",null,a),e.createElement("button",{type:"button",className:"vajax-bs-modal__close",onClick:t,"aria-label":"Close"},e.createElement(_.Close,null))),e.createElement("div",{className:"vajax-bs-modal__body"},s)),l)}var Oe=class extends e.Component{constructor(t){super(t),this.state={error:null,info:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,s){console.error("[Vajax BS] React render error:",t,s),this.setState({info:s})}render(){if(this.state.error){let t=this.state.error,s=t?.stack||String(t);return e.createElement("div",{style:{padding:20,color:"#ff8ba3",fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",whiteSpace:"pre-wrap",background:"#0f1218",minHeight:"60vh"}},e.createElement("h2",{style:{marginTop:0}},"Vajax Better Scenes \u2014 render error"),e.createElement("pre",{style:{whiteSpace:"pre-wrap"}},s),this.state.info?.componentStack&&e.createElement(e.Fragment,null,e.createElement("h3",null,"Component stack"),e.createElement("pre",{style:{whiteSpace:"pre-wrap"}},this.state.info.componentStack)))}return this.props.children}},qe=null;function Ea(){let a=document.querySelector("#VideoJsPlayer_html5_api");if(a)try{a.paused||a.pause(),a.muted||(a.muted=!0)}catch{}let t=document.querySelector("#VideoJsPlayer");if(t&&t.player&&typeof t.player.pause=="function"){try{t.player.pause()}catch{}try{t.player.muted(!0)}catch{}}}function Vt(){Ea(),!qe&&(qe=setInterval(Ea,500))}function Bt(){qe&&(clearInterval(qe),qe=null)}function Ot({scene:a,marks:t,loopSettings:s,onUpdateLoop:r,onRecordO:n,onOpenModal:l,onNavigateScene:c,onRequestPageContextMenu:d,onRefresh:o,onLiveSession:u,videoRef:p}){let[m,f]=e.useState(null),x=qa(a),w=e.useRef(null),[N,E]=e.useState(!1),[h,y]=e.useState(0),[j,g]=e.useState(0),[b,C]=e.useState(0),[q,V]=e.useState(1),[z,te]=e.useState(!1),[Z,$]=e.useState(1),[B,M]=e.useState(!1),[L,U]=e.useState(0),[A,S]=e.useState(!0),[k,P]=e.useState(!1),[D,X]=e.useState(!1),[G,Q]=e.useState(!1),[T,F]=e.useState(!1),[ie,ua]=e.useState(null),Ge=e.useRef(null),Ka=e.useRef({accumulated:0,unsynced:0,counted:!1,lastCurrentTime:0,lastUiUpdate:0,isSeeking:!1}),Ye=e.useRef(!1),Ke=a?.sceneStreams||[],pa=Ke[L]?.url||"",ve=La(),Wa=String(a?.id||""),Ne=Et(ve,Wa),ge=Ne>0?Ne-1:-1,he=Ne>=0&&Ne<ve.length-1?Ne+1:-1,xs=ge>=0?ve[ge]:null,ms=he>=0?ve[he]:null;e.useEffect(()=>{U(0),E(!1),y(0),g(0),C(0)},[a?.id]),e.useEffect(()=>{let i=p.current;if(!i)return;let v=Qa(),I=Ze(),H=new URLSearchParams(window.location.search).get("vajax_autoplay")==="1",K=ka(),de=I.queueAutoplay&&(H||K),ee=v.autoplay||de;if(console.log("[Vajax BS] autoplay check:","player.autoplay=",v.autoplay,"queueAutoplay=",I.queueAutoplay,"urlAutoplay=",H,"pendingAutoplay=",K,"\u2192 shouldAutoplay=",ee),!ee){i.autoplay=!1;return}if(Mt(),H){let re=new URL(window.location.href);re.searchParams.delete("vajax_autoplay"),window.history.replaceState({},"",re.toString())}i.autoplay=!0;let se=()=>{console.log("[Vajax BS] autoplay tryPlay called"),i.play().catch(re=>console.warn("[Vajax BS] autoplay blocked",re))},ne=()=>{i.autoplay=!1,i.removeEventListener("play",ne)};return i.readyState>=2?se():i.addEventListener("loadeddata",se,{once:!0}),i.addEventListener("play",ne),()=>{i.removeEventListener("loadeddata",se),i.removeEventListener("play",ne)}},[a?.id]),e.useEffect(()=>{let i=p.current;if(!i||!a?.id)return;let v=Ka.current;v.accumulated=0,v.unsynced=0,v.counted=!1,v.lastCurrentTime=i.currentTime,v.lastUiUpdate=0,v.isSeeking=!1;let I=()=>{typeof u=="function"&&u({accumulated:v.accumulated,counted:v.counted})};I();let R=0,H=!1,K=()=>{if(v.counted)return;let J=i.duration;if(!isFinite(J)||J<=0)return;let oe=J*.25;v.accumulated<oe||(v.counted=!0,console.log(`[Vajax BS] threshold reached: ${v.accumulated.toFixed(1)}s >= ${oe.toFixed(1)}s \u2014 incrementing play count`),bt(a.id).then(()=>{typeof o=="function"&&o()}),I())},de=()=>{let J=v.unsynced;v.unsynced=0,J>.1&&ya(a.id,J)},ee=J=>{let oe=i.duration;if(console.log(`[Vajax BS] end session (${J}): acc=${v.accumulated.toFixed(2)}s, unsynced=${v.unsynced.toFixed(2)}s, counted=${v.counted}, dur=${oe}`),K(),de(),v.accumulated=0,v.counted=!1,v.lastCurrentTime=i.currentTime,I(),typeof o=="function"){let pe=String(a?.id||"");setTimeout(()=>{let be=ia();if(be!==pe){console.log("[Vajax BS] endSession refresh skipped: scene changed",pe,"\u2192",be);return}o()},250)}},se=()=>{let J=i.duration;if(!isFinite(J)||J<=0)return!1;let oe=i.currentTime,pe=v.lastCurrentTime;return oe-pe<-.5&&pe>J-3&&oe<3?(v.lastCurrentTime=oe,ee("loop"),!0):!1},ne=()=>{R=requestAnimationFrame(ne);let J=i.duration;if(!isFinite(J)||J<=0||v.isSeeking||se())return;if(i.paused){v.lastCurrentTime=i.currentTime;return}let oe=i.currentTime,pe=v.lastCurrentTime,be=oe-pe;if(be<-.5){v.lastCurrentTime=oe;return}if(be>1){v.lastCurrentTime=oe;return}if(v.lastCurrentTime=oe,be>0&&(v.accumulated+=be,v.unsynced+=be),K(),v.unsynced>=10&&!H){H=!0;let it=v.unsynced;v.unsynced=0,ya(a.id,it).finally(()=>{H=!1})}let ha=performance.now();ha-v.lastUiUpdate>1e3&&(v.lastUiUpdate=ha,I())};ne();let re=()=>{if(!i.loop)return!1;let J=i.duration;if(!isFinite(J)||J<=0)return!1;let oe=v.lastCurrentTime>J-3,pe=i.currentTime<3;return oe&&pe},we=()=>{if(re()){v.lastCurrentTime=i.currentTime,ee("loop");return}v.isSeeking=!0},Me=()=>{if(re()){v.lastCurrentTime=i.currentTime,v.accumulated>0&&ee("loop");return}v.isSeeking=!1,v.lastCurrentTime=i.currentTime},Ce=()=>{de(),K()},ce=()=>ee("ended"),le=()=>{v.lastCurrentTime=i.currentTime,I()},fa=()=>ee("ab-loop"),ga=()=>{if(!v.isSeeking){if(re()){v.lastCurrentTime=i.currentTime,ee("loop");return}se()}};return i.addEventListener("seeking",we),i.addEventListener("seeked",Me),i.addEventListener("pause",Ce),i.addEventListener("ended",ce),i.addEventListener("play",le),i.addEventListener("timeupdate",ga),i.addEventListener("vajax-ab-loop",fa),()=>{cancelAnimationFrame(R),i.removeEventListener("seeking",we),i.removeEventListener("seeked",Me),i.removeEventListener("pause",Ce),i.removeEventListener("ended",ce),i.removeEventListener("play",le),i.removeEventListener("timeupdate",ga),i.removeEventListener("vajax-ab-loop",fa),ee("unmount")}},[p,a?.id]),e.useEffect(()=>{if(!Ye.current)return;let i=w.current,v=p.current;if(!i||!v)return;let I=()=>{if(document.fullscreenElement||document.webkitFullscreenElement||!Ye.current)return;let H=i.requestFullscreen||i.webkitRequestFullscreen;H&&Promise.resolve(H.call(i)).catch(K=>console.warn("[Vajax BS] re-enter fullscreen failed",K))},R=setTimeout(I,150);return v.addEventListener("loadeddata",I,{once:!0}),()=>{clearTimeout(R),v.removeEventListener("loadeddata",I)}},[a?.id]);let ba=e.useRef([]);e.useEffect(()=>{ba.current=ve},[ve]),e.useEffect(()=>{let i=p.current;if(!i)return;let v=!1,I=()=>{v=!1},R=()=>{if(console.log("[Vajax BS] video ended event fired"),v){console.log("[Vajax BS] already handled");return}v=!0;let H=Ze(),K=ba.current,de=String(a?.id),ee=Qe(),se=ee>=0&&K[ee]===de?ee:K.indexOf(de);if(console.log("[Vajax BS] ended \u2014 autoContinue:",H.autoContinue,"curIdx:",se,"of",K.length),se<0)return;let ne=se===K.length-1,re=-1;if(ne&&H.repeatOnEnd&&K.length>0){if(re=0,H.shuffleAfterRepeat&&K.length>1){let ce=[];for(let le=0;le<K.length;le++)le!==se&&ce.push(le);re=ce[Math.floor(Math.random()*ce.length)]}}else if(!ne&&H.autoContinue&&(re=se+1,H.shuffleAfterNext)){let ce=[];for(let le=se+1;le<K.length;le++)ce.push(le);re=ce[Math.floor(Math.random()*ce.length)]}if(re<0)return;ze(re);let we=new URLSearchParams(window.location.search);H.queueAutoplay&&(we.set("vajax_autoplay","1"),Pt());let Me=we.toString()?"?"+we.toString():"",Ce=`/scenes/${K[re]}${Me}`;console.log("[Vajax BS] advancing \u2192",Ce,"queueAutoplay:",H.queueAutoplay,"pendingFlag:",ka()),window.history.pushState({},"",Ce)};return i.addEventListener("ended",R),i.addEventListener("play",I),console.log("[Vajax BS] ended/play listeners attached"),()=>{i.removeEventListener("ended",R),i.removeEventListener("play",I)}},[a?.id,p]),e.useEffect(()=>{let i=p.current;if(!i)return;let v=()=>E(!0),I=()=>E(!1),R=()=>y(i.currentTime),H=()=>g(i.duration||0),K=()=>{V(i.volume),te(i.muted)},de=()=>$(i.playbackRate),ee=()=>{if(i.buffered.length>0){let se=0;for(let ne=0;ne<i.buffered.length;ne++)if(i.currentTime>=i.buffered.start(ne)&&i.currentTime<=i.buffered.end(ne)){se=i.buffered.end(ne);break}C(se)}};return i.addEventListener("play",v),i.addEventListener("pause",I),i.addEventListener("timeupdate",R),i.addEventListener("durationchange",H),i.addEventListener("loadedmetadata",H),i.addEventListener("volumechange",K),i.addEventListener("ratechange",de),i.addEventListener("progress",ee),()=>{i.removeEventListener("play",v),i.removeEventListener("pause",I),i.removeEventListener("timeupdate",R),i.removeEventListener("durationchange",H),i.removeEventListener("loadedmetadata",H),i.removeEventListener("volumechange",K),i.removeEventListener("ratechange",de),i.removeEventListener("progress",ee)}},[p]),e.useEffect(()=>{let i=p.current;i&&(i.loop=!!s.whole)},[s.whole,p]),e.useEffect(()=>{let i=p.current;if(!i)return;let v=()=>{let{enabled:I,start:R,end:H}=s.ab;I&&H>R&&i.currentTime>=H&&(i.currentTime=R,i.dispatchEvent(new CustomEvent("vajax-ab-loop")))};return i.addEventListener("timeupdate",v),()=>i.removeEventListener("timeupdate",v)},[s.ab,p]),e.useEffect(()=>{let i=()=>{let v=!!document.fullscreenElement||!!document.webkitFullscreenElement;M(v)};return document.addEventListener("fullscreenchange",i),document.addEventListener("webkitfullscreenchange",i),()=>{document.removeEventListener("fullscreenchange",i),document.removeEventListener("webkitfullscreenchange",i)}},[]),e.useEffect(()=>{let i=()=>{P(!1),X(!1),Q(!1),F(!1)};if(k||D||G||T)return document.addEventListener("click",i),()=>document.removeEventListener("click",i)},[k,D,G,T]);let va=()=>{S(!0),Ge.current&&clearTimeout(Ge.current),Ge.current=setTimeout(()=>{S(!1)},1e3)};e.useEffect(()=>{let i=w.current;if(!i)return;let v=["mousemove","mousedown","touchstart","wheel"];return v.forEach(I=>i.addEventListener(I,va,{passive:!0})),()=>{v.forEach(I=>i.removeEventListener(I,va))}},[]);let Pe=()=>{let i=p.current;i&&(i.paused?i.play().catch(()=>{}):i.pause())},Xa=i=>{let v=p.current;v&&(v.currentTime=Math.max(0,Math.min(v.duration||0,i)),y(v.currentTime))},fs=i=>{let v=p.current;v&&(v.currentTime=Math.max(0,Math.min(v.duration||0,v.currentTime+i)))},Ja=i=>{let v=p.current;if(!v||!j)return;let I=i.currentTarget.getBoundingClientRect(),R=(i.clientX-I.left)/I.width;v.currentTime=Math.max(0,Math.min(j,R*j))},Za=i=>{if(!j)return;let v=i.currentTarget.getBoundingClientRect(),I=Math.max(0,Math.min(1,(i.clientX-v.left)/v.width));f(I*j)},Ra=()=>f(null),et=()=>{let i=p.current;i&&(i.muted=!i.muted)},at=i=>{let v=p.current;v&&(v.volume=i,v.muted=i===0)},tt=i=>{let v=p.current;v&&(v.playbackRate=i,P(!1))},We=()=>{let i=w.current,v=p.current;if(!i||!v)return;let I=document.fullscreenElement||document.webkitFullscreenElement;if(Ye.current=!I,I){document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitExitFullscreen();return}if((/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&typeof v.webkitEnterFullscreen=="function")try{v.webkitEnterFullscreen();return}catch{}let H=i.requestFullscreen||i.webkitRequestFullscreen;if(H){Promise.resolve(H.call(i)).catch(()=>{if(typeof v.webkitEnterFullscreen=="function")try{v.webkitEnterFullscreen()}catch{}});return}if(typeof v.webkitEnterFullscreen=="function")try{v.webkitEnterFullscreen()}catch{}},st=i=>{i.preventDefault(),i.stopPropagation();let v=p.current;if((!v||v.paused)&&d){d(i);return}ua({x:i.clientX,y:i.clientY})},rt=[.25,.5,.75,1,1.25,1.5,1.75,2],xa=j>0?h/j*100:0,nt=j>0?b/j*100:0,ma=(()=>{let{enabled:i,start:v,end:I}=s.ab;return!i||!j||!(I>v)?null:{left:`${v/j*100}%`,width:`${(I-v)/j*100}%`}})(),ot=z||q===0?e.createElement(_.VolumeX,null):q<.5?e.createElement(_.Volume1,null):e.createElement(_.Volume2,null);return e.createElement("div",{ref:w,className:"vajax-bs-player"+(A?"":" vajax-bs-player--idle"),onContextMenu:st},e.createElement("video",{id:"vajax-bs-video",ref:p,src:pa,playsInline:!0,onClick:Pe,onDoubleClick:We}),!N&&e.createElement("div",{className:"vajax-bs-bigplay",onClick:Pe},e.createElement("button",{type:"button",className:"vajax-bs-bigplay__btn","aria-label":"Play"},e.createElement(_.Play,{size:"34"}))),e.createElement("div",{className:"vajax-bs-controls"},e.createElement("div",{className:"vajax-bs-progress",onClick:Ja,onMouseMove:Za,onMouseLeave:Ra},e.createElement("div",{className:"vajax-bs-progress__track"},ma&&e.createElement("div",{className:"vajax-bs-progress__loop",style:ma}),e.createElement("div",{className:"vajax-bs-progress__buffer",style:{width:`${nt}%`}}),e.createElement("div",{className:"vajax-bs-progress__fill",style:{width:`${xa}%`}}),t.map((i,v)=>i.seconds==null?null:e.createElement("div",{key:v,className:"vajax-bs-progress__marker",style:{left:`${i.seconds/(j||1)*100}%`},title:`O @ ${W(i.seconds)}`,onClick:I=>{I.stopPropagation(),Xa(i.seconds)}})),e.createElement("div",{className:"vajax-bs-progress__thumb",style:{left:`${xa}%`}}))),m!=null&&j>0&&(()=>{let i=$a(x,m),v=m/j*100;return e.createElement("div",{className:"vajax-bs-tlpreview",style:{left:`${v}%`}},i?e.createElement("div",{className:"vajax-bs-tlpreview__thumb",style:{width:i.w,height:i.h,backgroundImage:`url(${x.spriteUrl})`,backgroundPosition:`-${i.x}px -${i.y}px`}}):e.createElement("div",{className:"vajax-bs-tlpreview__thumb vajax-bs-tlpreview__thumb--empty"}),e.createElement("div",{className:"vajax-bs-tlpreview__time"},W(m)))})(),e.createElement("div",{className:"vajax-bs-ctrl-row"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>{ge<0||(ze(ge),c(ve[ge]))},disabled:!ge,title:ge?"Previous scene in queue":"No previous scene"},e.createElement(_.SkipPrev,null)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:Pe,title:N?"Pause (Space)":"Play (Space)"},N?e.createElement(_.Pause,null):e.createElement(_.Play,null)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>{he<0||(ze(he),c(ve[he]))},disabled:!he,title:he?"Next scene in queue":"No next scene"},e.createElement(_.SkipNext,null)),e.createElement("div",{className:"vajax-bs-volume"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:et,title:"Mute (m)"},ot),e.createElement("div",{className:"vajax-bs-volume__slider"},e.createElement("input",{type:"range",min:0,max:1,step:.01,value:z?0:q,onChange:i=>at(parseFloat(i.target.value)),className:"vajax-bs-volume__input"}))),e.createElement("div",{className:"vajax-bs-time"},W(h)," ",e.createElement("span",{className:"vajax-bs-time__dim"},"/ ",W(j))),e.createElement("div",{className:"vajax-bs-spacer"}),e.createElement("button",{type:"button",className:"vajax-bs-btn vajax-bs-btn--o",onClick:n,title:"Record O at current time (o)"},e.createElement(_.Heart,null),e.createElement("span",{className:"vajax-bs-btn__badge"},a?.o_counter||0)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>l("queue"),title:"Queue"},e.createElement(_.List,null)),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn"+(T||s.whole||s.ab.enabled?" vajax-bs-btn--active":""),onClick:i=>{i.stopPropagation(),F(v=>!v),P(!1),X(!1),Q(!1)},title:"Loop settings"},e.createElement(_.Loop,null)),T&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:i=>i.stopPropagation(),style:{minWidth:220}},e.createElement("div",{className:"vajax-bs-dropdown__label"},"Loop whole video"),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Enabled"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.whole?" vajax-bs-toggle--on":""),onClick:()=>r({...s,whole:!s.whole}),role:"switch","aria-checked":String(!!s.whole)})),e.createElement("div",{className:"vajax-bs-dropdown__label"},"A/B loop"),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Enabled"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.ab.enabled?" vajax-bs-toggle--on":""),onClick:()=>r({...s,ab:{...s.ab,enabled:!s.ab.enabled}}),role:"switch","aria-checked":String(!!s.ab.enabled)})),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Start"),e.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.75rem",color:"#cfe1ff"}},W(s.ab.start)),e.createElement("button",{type:"button",className:"vajax-bs-mini",style:{padding:"2px 6px",fontSize:"0.7rem"},onClick:()=>r({...s,ab:{...s.ab,start:h}})},"set"))),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"End"),e.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.75rem",color:"#cfe1ff"}},W(s.ab.end)),e.createElement("button",{type:"button",className:"vajax-bs-mini",style:{padding:"2px 6px",fontSize:"0.7rem"},onClick:()=>r({...s,ab:{...s.ab,end:h}})},"set"))))),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:i=>{i.stopPropagation(),P(v=>!v),X(!1),Q(!1),F(!1)},title:"Playback speed"},e.createElement("span",{className:"vajax-bs-btn__label"},Z,"\xD7")),k&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:i=>i.stopPropagation()},rt.map(i=>e.createElement("button",{key:i,type:"button",className:"vajax-bs-dropdown__item"+(Math.abs(i-Z)<.01?" vajax-bs-dropdown__item--selected":""),onClick:()=>tt(i)},i,"\xD7")))),Ke.length>1&&e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:i=>{i.stopPropagation(),X(v=>!v),P(!1),Q(!1),F(!1)},title:"Video source"},e.createElement(_.Film,null)),D&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:i=>i.stopPropagation()},Ke.map((i,v)=>e.createElement("button",{key:v,type:"button",className:"vajax-bs-dropdown__item"+(v===L?" vajax-bs-dropdown__item--selected":""),onClick:()=>{U(v),X(!1)}},i.label||i.mime_type||`Stream ${v+1}`)))),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn"+(G?" vajax-bs-btn--active":""),onClick:i=>{i.stopPropagation(),Q(v=>!v),P(!1),X(!1),F(!1)},title:"Settings"},e.createElement(_.Gear,null)),G&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:i=>i.stopPropagation()},e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{Q(!1),l("settings")}},e.createElement(_.Gear,null)," Player settings"),e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{Q(!1),l("debug")}},e.createElement(_.Info,null)," For Nerds"),e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{Q(!1),l("help")}},e.createElement(_.Bookmark,null)," Help & Shortcuts"))),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:We,title:"Fullscreen (f)"},B?e.createElement(_.Minimize,null):e.createElement(_.Maximize,null)))),ie&&e.createElement(He,{x:ie.x,y:ie.y,onClose:()=>ua(null),items:[{label:N?"Pause":"Play",icon:N?e.createElement(_.Pause,null):e.createElement(_.Play,null),hint:"Space",onClick:Pe},{label:"Record O",icon:e.createElement(_.Heart,null),hint:"O",onClick:n},{separator:!0},{label:"Queue",icon:e.createElement(_.List,null),onClick:()=>l("queue")},{label:"Settings",icon:e.createElement(_.Gear,null),onClick:()=>l("settings")},{label:"For Nerds",icon:e.createElement(_.Info,null),onClick:()=>l("debug")},{label:"Help & Shortcuts",icon:e.createElement(_.Bookmark,null),onClick:()=>l("help")},{separator:!0},{label:"Copy current time",icon:e.createElement(_.Clock,null),onClick:()=>_e(W(h))},{label:"Copy stream URL",icon:e.createElement(_.Url,null),onClick:()=>_e(pa)},{label:"Copy scene ID",icon:e.createElement(_.List,null),onClick:()=>_e(a?.id||"")},{separator:!0},{label:B?"Exit fullscreen":"Fullscreen",icon:B?e.createElement(_.Minimize,null):e.createElement(_.Maximize,null),hint:"F",onClick:We}]}))}function Ut(a,t,s){let r=Math.max(0,(s||0)-(a||[]).length);if(r===0)return[];let n=(t||[]).slice(),l=new Array(n.length).fill(!1),c=3e4;for(let o of a){if(!o.createdAt)continue;let u=new Date(o.createdAt).getTime();if(isNaN(u))continue;let p=-1,m=c;for(let f=0;f<n.length;f++){if(l[f])continue;let x=new Date(n[f]).getTime();if(isNaN(x))continue;let w=Math.abs(x-u);w<m&&(m=w,p=f)}p>=0&&(l[p]=!0)}let d=[];for(let o=0;o<n.length;o++)l[o]||d.push(n[o]);return d.sort((o,u)=>new Date(u)-new Date(o)),d.slice(0,r)}function Qt({scene:a,marks:t,onRefresh:s,onSeek:r,busy:n,setBusy:l}){let[c,d]=e.useState(null),[o,u]=e.useState(""),p=async()=>{if(!n){l(!0);try{let g=document.getElementById("vajax-bs-video"),b=g?g.currentTime:null;await Pa(a.id),await ye.addOTimestamp(a.id,b,"unified"),await s(),Y(`Recorded O @ ${W(b||0)}`)}catch(g){console.warn(g),Y("Failed to record",!0)}finally{l(!1)}}},m=async g=>{if(!n){l(!0);try{await pt(a.id),g._kind==="real"&&await ye.removeOTimestamp(a.id,g._idx),await s()}catch(b){console.warn(b),Y("Failed to remove",!0)}finally{l(!1)}}},f=g=>{g!=null&&typeof r=="function"&&r(g)},x=g=>{d(g._key),u(g.seconds!=null?W(g.seconds):"")},w=()=>{d(null),u("")},N=async g=>{let b=Ft(o);if(b==null){Y("Invalid time (try 1:23 or 83)",!0),w();return}l(!0);try{g._kind==="real"?await ye.updateTimestamp(a.id,g._idx,b):await ye.addOTimestamp(a.id,b,"preexisting"),await s(),Y(`Saved @ ${W(b)}`)}catch(C){console.warn(C)}finally{l(!1),w()}},E=t.map((g,b)=>({...g,_kind:"real",_idx:b,_key:`r-${b}`})),y=Ut(t,a.o_history||[],a.o_counter||0).map((g,b)=>({_kind:"ph",_key:`ph-${b}`,seconds:null,createdAt:g,source:"preexisting"})),j=[...E,...y];return e.createElement("div",{className:"vajax-bs-otimeline"},e.createElement("div",{className:"vajax-bs-otimeline__actions"},e.createElement("button",{type:"button",className:"vajax-bs-otimeline__btn",onClick:p,disabled:n},e.createElement(_.Plus,null)," Record current time")),j.length===0?e.createElement("div",{className:"vajax-bs-otimeline__empty"},"No O timestamps recorded yet."):e.createElement("ul",{className:"vajax-bs-otimeline__list"},j.map(g=>{let b=c===g._key,C=g.seconds!=null,q=g._kind==="ph";return e.createElement("li",{key:g._key,className:"vajax-bs-otimeline__item"+(q?" vajax-bs-otimeline__item--ph":"")},b?e.createElement("input",{autoFocus:!0,type:"text",className:"vajax-bs-otimeline__edit",value:o,onChange:V=>u(V.target.value),onKeyDown:V=>{V.key==="Enter"&&N(g),V.key==="Escape"&&w()},onBlur:()=>N(g),placeholder:"0:00"}):C?e.createElement("button",{type:"button",className:"vajax-bs-otimeline__time",onClick:()=>f(g.seconds),onDoubleClick:V=>{V.preventDefault(),x(g)},title:"Click: seek \xB7 Double-click: edit"},W(g.seconds)):e.createElement("button",{type:"button",className:"vajax-bs-otimeline__noTime",onClick:()=>x(g),title:"Set a timestamp for this O"},"set time"),e.createElement("div",{className:"vajax-bs-otimeline__meta"},e.createElement("div",{className:"vajax-bs-otimeline__ago"},q&&e.createElement("span",{className:"vajax-bs-otimeline__chip"},"Pre Plugin"),g.createdAt?It(g.createdAt):"\u2014"),e.createElement("div",{className:"vajax-bs-otimeline__date"},g.createdAt?Re(g.createdAt):"No date recorded")),e.createElement("button",{type:"button",className:"vajax-bs-otimeline__remove",onClick:()=>m(g),title:"Remove this O",disabled:n},e.createElement(_.Close,null)))})))}function Ht({performer:a,compact:t=!1}){let s=null;if(a.birthdate){let p=new Date(a.birthdate),m=new Date;s=m.getFullYear()-p.getFullYear();let f=m.getMonth()-p.getMonth();(f<0||f===0&&m.getDate()<p.getDate())&&s--,(s<0||s>150)&&(s=null)}let r=[];s!=null&&r.push(`${s} y/o`),a.country&&r.push(a.country),a.ethnicity&&r.push(a.ethnicity);let n=[];a.height_cm&&n.push(`${a.height_cm} cm`),a.weight&&n.push(`${a.weight} kg`),a.measurements&&n.push(a.measurements);let l=[];a.hair_color&&l.push(`Hair: ${a.hair_color}`),a.eye_color&&l.push(`Eyes: ${a.eye_color}`);let c=[];a.tattoos&&c.push(`Tattoos: ${a.tattoos}`),a.piercings&&c.push(`Piercings: ${a.piercings}`);let d=a.career_length?`Career: ${a.career_length}`:null,o=Array.isArray(a.alias_list)&&a.alias_list.length>0?`Also known as: ${a.alias_list.join(", ")}`:null,u=e.createElement(e.Fragment,null,a.disambiguation&&e.createElement("p",{className:"vajax-bs-performer__disambig"},a.disambiguation),r.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},r.join(" \xB7 ")),n.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},n.join(" \xB7 ")),l.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},l.join(" \xB7 ")),c.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},c.join(" \xB7 ")),d&&e.createElement("p",{className:"vajax-bs-performer__detail"},d),o&&e.createElement("p",{className:"vajax-bs-performer__detail"},o));return e.createElement("a",{className:"vajax-bs-performer"+(t?" vajax-bs-performer--compact":""),href:`/performers/${a.id}`},e.createElement("img",{className:"vajax-bs-performer__img",src:a.image_path||"",alt:a.name,loading:"lazy",onError:p=>{p.currentTarget.style.visibility="hidden"}}),e.createElement("div",{className:"vajax-bs-performer__info"},e.createElement("h4",{className:"vajax-bs-performer__name"},e.createElement("span",{className:"vajax-bs-performer__name-text"},a.name),a.favorite&&e.createElement("span",{className:"vajax-bs-performer__fav",title:"Favorite"},e.createElement(da,{filled:!0}))),t?e.createElement("div",{className:"vajax-bs-performer__details"},u):u))}function da({filled:a}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:a?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{display:"block"}},e.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}function Gt({scene:a,onUpdateScene:t,onOpenModal:s}){let[r,n]=e.useState(!1),l=a.rating100?Math.round(a.rating100/20):0,c=async o=>{if(!r){n(!0);try{let u=o===l?null:o*20;await Ve(a.id,{rating100:u}),await t()}catch(u){console.warn(u),Y("Failed to update rating",!0)}finally{n(!1)}}},d=async()=>{if(!r){n(!0);try{await Ve(a.id,{organized:!a.organized}),await t()}catch(o){console.warn(o),Y("Failed to update organized",!0)}finally{n(!1)}}};return e.createElement("div",{className:"vajax-bs-scene-toolbar"},e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static vajax-bs-rating"},[1,2,3,4,5].map(o=>e.createElement("button",{key:o,type:"button",className:"vajax-bs-rating__star"+(o<=l?" vajax-bs-rating__star--on":""),onClick:()=>c(o),disabled:r,title:`Set rating to ${o}`},e.createElement(da,{filled:o<=l}))),l>0&&e.createElement("button",{type:"button",className:"vajax-bs-rating__clear",onClick:()=>c(l),title:"Clear rating",disabled:r},e.createElement(_.Close,null))),e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static"},e.createElement(_.PlayCount,null),e.createElement("span",{className:"vajax-bs-chip__value"},a.play_count||0)),e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static vajax-bs-chip--o"},e.createElement(_.Heart,null),e.createElement("span",{className:"vajax-bs-chip__value"},a.o_counter||0)),e.createElement("button",{type:"button",className:"vajax-bs-chip"+(a.organized?" vajax-bs-chip--organized":""),onClick:d,disabled:r,title:"Toggle organized"},e.createElement(_.Check,null),e.createElement("span",null,a.organized?"Organized":"Not organized")),e.createElement("div",{className:"vajax-bs-spacer"}),e.createElement("button",{type:"button",className:"vajax-bs-chip",onClick:()=>s("edit"),title:"Edit scene"},e.createElement(_.Pencil,null)," Edit"))}function Yt({scene:a,marks:t,busy:s,setBusy:r,onRefresh:n,onSeek:l,onOpenModal:c}){let d=a.studio,o=a.performers||[],u=a.tags||[],p=(a.groups||[]).map(E=>E.group).filter(Boolean),m=[];a.date&&m.push(a.date),d&&m.push(d.name),p.length>0&&m.push(`${p.length} group${p.length>1?"s":""}`);let f=a.files?.[0],x=f?.duration,w=f?.width&&f?.height?`${f.width}\xD7${f.height}`:null,N=f?.frame_rate;return e.createElement("div",{className:"vajax-bs-sidepanel"},e.createElement("div",{className:"vajax-bs-toolbar"},e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>c("fileinfo")},e.createElement(_.Info,null)," File Info"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>c("markers")},e.createElement(_.Bookmark,null)," Markers"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>c("queue")},e.createElement(_.List,null)," Queue"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>c("history")},e.createElement(_.Clock,null)," History")),e.createElement("div",{className:"vajax-bs-header"},e.createElement("h1",{className:"vajax-bs-header__title"},ke(a)),e.createElement("div",{className:"vajax-bs-header__sub"},e.createElement("span",{className:"vajax-bs-header__id"},"ID: ",a.id),m.map((E,h)=>e.createElement(e.Fragment,{key:h},e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,E))),x&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,W(x))),w&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,w)),N&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,N," fps")))),e.createElement(Gt,{scene:a,onUpdateScene:n,onOpenModal:c}),e.createElement("div",{className:"vajax-bs-details"},o.length>0&&e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Performers"),e.createElement("div",{className:"vajax-bs-performers"+(o.length>4?" vajax-bs-performers--compact":"")},o.map(E=>e.createElement(Ht,{key:E.id,performer:E,compact:o.length>4})))),u.length>0&&e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Tags"),e.createElement("div",{className:"vajax-bs-tags"},u.map(E=>e.createElement("a",{key:E.id,className:"vajax-bs-tag",href:`/tags/${E.id}`},E.name)))),e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"O Timeline"),e.createElement(Qt,{scene:a,marks:t,onRefresh:n,onSeek:l,busy:s,setBusy:r})),e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Details"),e.createElement("dl",{className:"vajax-bs-meta"},d&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Studio"),e.createElement("dd",null,e.createElement("a",{href:`/studios/${d.id}`},d.name))),a.date&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Date"),e.createElement("dd",null,a.date)),a.details&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Description"),e.createElement("dd",{title:a.details},a.details)),a.created_at&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Created"),e.createElement("dd",null,Re(a.created_at))),a.updated_at&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Updated"),e.createElement("dd",null,Re(a.updated_at)))))))}function Te({label:a,endpoint:t,getLabel:s,value:r,onChange:n,multi:l=!0,placeholder:c}){let[d,o]=e.useState(""),[u,p]=e.useState([]),[m,f]=e.useState(!1),[x,w]=e.useState(null),[N,E]=e.useState({top:0,left:0}),h=e.useRef(null),y=e.useRef(null),j=e.useRef(null);e.useEffect(()=>{if(!m)return;let $=d.trim();if($.length<1){p([]);return}let B=!1,M=setTimeout(async()=>{try{let L=await ae(t.query,{q:$,limit:12});if(B)return;let U=t.extract(L)||[];p(U)}catch(L){console.warn(L),p([])}},200);return()=>{B=!0,clearTimeout(M)}},[d,m,t]);let g=l?r||[]:r?[r]:[],b=$=>{l?g.find(B=>B.id===$.id)||n([...g,$]):(n($),f(!1)),o(""),p([]),w(null)},C=$=>{n(l?g.filter(B=>B.id!==$):null)},q=e.useCallback($=>{let U=window.innerWidth,A=window.innerHeight,S=$.right+12;S+240>U-8&&(S=Math.max(8,$.left-240-12));let k=$.top;return k+240>A-8&&(k=Math.max(8,A-240-8)),{top:k,left:S}},[]),V=$=>{y.current&&clearTimeout(y.current),j.current&&clearTimeout(j.current),y.current=setTimeout(()=>{let B=h.current;if(!B)return;let M=B.getBoundingClientRect();E(q(M)),w($)},120)},z=()=>{j.current&&clearTimeout(j.current)},te=()=>{j.current&&clearTimeout(j.current),j.current=setTimeout(()=>w(null),120)};e.useEffect(()=>{if(!x)return;let $=()=>{let M=h.current;M&&E(q(M.getBoundingClientRect()))};window.addEventListener("scroll",$,!0),window.addEventListener("resize",$);let B=setInterval($,200);return()=>{window.removeEventListener("scroll",$,!0),window.removeEventListener("resize",$),clearInterval(B)}},[x,q]);let Z=$=>{if(!$)return null;let B=$.image_path||$.paths?.cover||$.front_image_path||null,M=s($),L=[];if($.birthdate){let U=new Date($.birthdate),A=new Date,S=A.getFullYear()-U.getFullYear(),k=A.getMonth()-U.getMonth();(k<0||k===0&&A.getDate()<U.getDate())&&S--,S>0&&S<150&&L.push(`${S} years old`)}if($.gender){let U={MALE:"Male",FEMALE:"Female",TRANSGENDER_MALE:"Trans male",TRANSGENDER_FEMALE:"Trans female",INTERSEX:"Intersex",NON_BINARY:"Non-binary"};L.push(U[$.gender]||$.gender)}return $.disambiguation&&L.push($.disambiguation),$.description&&L.push($.description),je.createPortal(e.createElement("div",{className:"vajax-bs-hovercard",style:{position:"fixed",top:N.top,left:N.left,zIndex:2147483647},onMouseEnter:z,onMouseLeave:te},B?e.createElement("img",{src:B,alt:M,className:"vajax-bs-hovercard__img",onError:U=>{U.currentTarget.style.display="none"}}):e.createElement("div",{className:"vajax-bs-hovercard__img vajax-bs-hovercard__img--empty"}),e.createElement("div",{className:"vajax-bs-hovercard__body"},e.createElement("div",{className:"vajax-bs-hovercard__name"},M),L.length>0&&e.createElement("div",{className:"vajax-bs-hovercard__meta"},L.filter(Boolean).join(" \xB7 ")))),document.body)};return e.createElement("div",{className:"vajax-bs-picker"},l&&g.length>0&&e.createElement("div",{className:"vajax-bs-picker__chips"},g.map($=>e.createElement("span",{key:$.id,className:"vajax-bs-picker__chip"},s($),e.createElement("button",{type:"button",onClick:()=>C($.id),title:"Remove"},e.createElement(_.Close,null))))),!l&&g.length>0&&!m&&e.createElement("div",{className:"vajax-bs-picker__chips"},e.createElement("span",{className:"vajax-bs-picker__chip"},s(g[0]),e.createElement("button",{type:"button",onClick:()=>C(g[0].id),title:"Remove"},e.createElement(_.Close,null)))),e.createElement("input",{ref:h,type:"text",className:"vajax-bs-picker__input",placeholder:c||`Search ${a}...`,value:d,onChange:$=>{o($.target.value),f(!0)},onFocus:()=>f(!0),onBlur:()=>setTimeout(()=>{f(!1),w(null)},200)}),m&&u.length>0&&e.createElement("div",{className:"vajax-bs-picker__menu"},u.map($=>e.createElement("button",{key:$.id,type:"button",className:"vajax-bs-picker__item",onMouseDown:B=>B.preventDefault(),onMouseEnter:()=>V($),onMouseLeave:te,onClick:()=>b($)},s($)))),x&&Z(x))}function Kt({scene:a,videoRef:t,loopSettings:s,onUpdateLoop:r,onClose:n,onOpenModal:l}){let[c,d]=e.useState(1),[o,u]=e.useState(1),[p,m]=e.useState(!1),[f,x]=e.useState(0),[w,N]=e.useState(!1),[E,h]=e.useState(0),[y,j]=e.useState(()=>Qa());e.useEffect(()=>{let b=t.current;if(!b)return;let C=()=>{d(b.playbackRate),u(b.volume),m(b.muted),N(!b.paused),h(b.currentTime)};C();let q=setInterval(C,300);return()=>clearInterval(q)},[t]);let g=a?.sceneStreams||[];return e.createElement(fe,{title:"Player settings",onClose:n},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Video source"),e.createElement("select",{className:"vajax-bs-select",value:f,onChange:b=>{let C=Number(b.target.value);x(C);let q=t.current;if(q){let V=g[C]?.url;V&&(q.src=V,q.load())}}},g.length===0&&e.createElement("option",{value:0},"Loading\u2026"),g.map((b,C)=>e.createElement("option",{key:C,value:C},b.label||b.mime_type||`Stream ${C+1}`)))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Playback"),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Autoplay on open"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(y.autoplay?" vajax-bs-toggle--on":""),onClick:()=>{let b={...y,autoplay:!y.autoplay};j(b),qt(b)},role:"switch","aria-checked":String(!!y.autoplay)})),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Play state"),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>{let b=t.current;b&&(b.paused?b.play().catch(()=>{}):b.pause())}},w?e.createElement(e.Fragment,null,e.createElement(_.Pause,null)," Pause"):e.createElement(e.Fragment,null,e.createElement(_.Play,null)," Play"))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Speed"),e.createElement("select",{className:"vajax-bs-select",style:{width:"auto"},value:c,onChange:b=>{let C=t.current;C&&(C.playbackRate=parseFloat(b.target.value))}},[.25,.5,.75,1,1.25,1.5,1.75,2].map(b=>e.createElement("option",{key:b,value:b},b,"\xD7")))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Volume"),e.createElement("input",{type:"range",min:0,max:1,step:.01,value:p?0:o,onChange:b=>{let C=t.current;if(!C)return;let q=parseFloat(b.target.value);C.volume=q,C.muted=q===0},style:{width:120}}))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Loop"),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Loop whole video"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.whole?" vajax-bs-toggle--on":""),onClick:()=>r({...s,whole:!s.whole}),role:"switch","aria-checked":String(!!s.whole)})),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"A/B loop"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.ab.enabled?" vajax-bs-toggle--on":""),onClick:()=>r({...s,ab:{...s.ab,enabled:!s.ab.enabled}}),role:"switch","aria-checked":String(!!s.ab.enabled)})),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"A (start)"),e.createElement("div",{style:{display:"flex",gap:6,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",color:"#cfe1ff"}},W(s.ab.start)),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>r({...s,ab:{...s.ab,start:E}})},"Set current"))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"B (end)"),e.createElement("div",{style:{display:"flex",gap:6,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",color:"#cfe1ff"}},W(s.ab.end)),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>r({...s,ab:{...s.ab,end:E}})},"Set current")))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Tools"),e.createElement("button",{type:"button",className:"vajax-bs-toolbtn",onClick:()=>l("debug")},e.createElement(_.Info,null)," For Nerds"),e.createElement("button",{type:"button",className:"vajax-bs-toolbtn",onClick:()=>l("help")},e.createElement(_.Bookmark,null)," Help & Shortcuts")))}function Wt({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=la(t),n=e.useRef([]),l=e.useRef({bytes:0,time:0});return e.useEffect(()=>{let c=a.current,d=t.current;if(!c||!d||!s||!r)return;let o=d.getContext("2d"),u=0,p=0,m=()=>{p=requestAnimationFrame(m);let f=performance.now();if(f-u>=250){u=f;let y=c.webkitVideoDecodedByteCount||c.mozDecodedFrames||0,j=l.current;if(j.time>0&&y>=j.bytes){let g=(f-j.time)/1e3,b=y-j.bytes,C=g>0?b*8/g/1e3:0;C>=0&&C<1e6&&(n.current.push(C),n.current.length>160&&n.current.shift())}l.current={bytes:y,time:f}}let x=n.current;o.clearRect(0,0,s,r),o.strokeStyle="rgba(255, 255, 255, 0.05)",o.lineWidth=1;for(let y=1;y<4;y++){let j=r/4*y;o.beginPath(),o.moveTo(0,j),o.lineTo(s,j),o.stroke()}if(x.length<2){o.fillStyle="rgba(255,255,255,0.35)",o.font="11px ui-monospace, monospace",o.fillText("Waiting for playback data\u2026",8,r/2+4);return}let w=Math.max(...x,2e3),N=s/(x.length-1);o.beginPath(),x.forEach((y,j)=>{let g=j*N,b=r-y/w*r;j===0?o.moveTo(g,b):o.lineTo(g,b)}),o.strokeStyle="#7eb3ff",o.lineWidth=1.5,o.stroke(),o.lineTo(s,r),o.lineTo(0,r),o.closePath();let E=o.createLinearGradient(0,0,0,r);E.addColorStop(0,"rgba(126,179,255,0.35)"),E.addColorStop(1,"rgba(126,179,255,0.02)"),o.fillStyle=E,o.fill();let h=x[x.length-1];o.fillStyle="rgba(207,225,255,0.85)",o.font="10px ui-monospace, monospace",o.fillText(`${h.toFixed(0)} kbps`,8,14),o.fillStyle="rgba(255, 255, 255, 0.4)",o.fillText(`peak ${w.toFixed(0)}`,8,26)};return m(),()=>cancelAnimationFrame(p)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph"})}function Xt({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=la(t);return e.useEffect(()=>{let n=a.current,l=t.current;if(!n||!l||!s||!r)return;let c=Dt(n);if(!c){let j=l.getContext("2d");j.fillStyle="rgba(255,255,255,0.35)",j.font="11px ui-monospace, monospace",j.fillText("Spectrum unavailable (audio context blocked)",8,r/2);return}let{left:d,right:o}=c,u=l.getContext("2d"),p=d.frequencyBinCount,m=new Uint8Array(p),f=new Uint8Array(p),x=new Uint8Array(d.fftSize),w=new Uint8Array(o.fftSize),N=0,E=j=>{let g=0;for(let C=0;C<j.length;C++){let q=(j[C]-128)/128;g+=q*q}let b=Math.sqrt(g/j.length);return b<=0?-1/0:20*Math.log10(b)},h=(j,g,b,C)=>{let q=Math.min(p,96),V=s/q;for(let z=0;z<q;z++){let te=Math.floor(Math.pow(z/q,1.6)*p),Z=j[te]/255,$=Z*b*.95,B=190+z/q*130+C,M=22+Z*45;u.fillStyle=`hsl(${B}, 78%, ${M}%)`,u.fillRect(z*V+.5,g+b-$,Math.max(1,V-1),$)}},y=()=>{N=requestAnimationFrame(y),d.getByteFrequencyData(m),o.getByteFrequencyData(f),d.getByteTimeDomainData(x),o.getByteTimeDomainData(w),u.clearRect(0,0,s,r),u.strokeStyle="rgba(255, 255, 255, 0.05)";for(let q=1;q<4;q++){let V=r/4*q;u.beginPath(),u.moveTo(0,V),u.lineTo(s,V),u.stroke()}let j=(r-20)/2;h(m,18,j,0),h(f,18+j,j,15);let g=E(x),b=E(w),C=q=>isFinite(q)?`${q.toFixed(1)} dB`:"-\u221E dB";u.font="10px ui-monospace, monospace",u.fillStyle="rgba(207,225,255,0.85)",u.fillText(`L  ${C(g)}`,6,12),u.fillStyle="rgba(255,138,163,0.85)",u.fillText(`R  ${C(b)}`,s-70,12)};return y(),()=>cancelAnimationFrame(N)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph",style:{height:110}})}function Jt({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=la(t),n=e.useRef([]),l=e.useRef({frames:0,dropped:0,time:0});return e.useEffect(()=>{let c=a.current,d=t.current;if(!c||!d||!s||!r)return;let o=d.getContext("2d"),u=0,p=0,m=()=>{p=requestAnimationFrame(m);let f=performance.now();if(f-u>=500){u=f;let h=c.getVideoPlaybackQuality?.();if(h){let y=l.current,j=y.time>0?(f-y.time)/1e3:0;if(j>0){let g=h.totalVideoFrames-y.frames,b=h.droppedVideoFrames-y.dropped,C=g/j,q=g>0?b/g*100:0;n.current.push({fps:C,dropPct:q}),n.current.length>120&&n.current.shift()}l.current={frames:h.totalVideoFrames,dropped:h.droppedVideoFrames,time:f}}}let x=n.current;o.clearRect(0,0,s,r),o.strokeStyle="rgba(255, 255, 255, 0.05)";for(let h=1;h<4;h++){let y=r/4*h;o.beginPath(),o.moveTo(0,y),o.lineTo(s,y),o.stroke()}if(x.length<2)return;let w=Math.max(60,...x.map(h=>h.fps)),N=s/(x.length-1);o.beginPath(),x.forEach((h,y)=>{let j=y*N,g=r-h.fps/w*r;y===0?o.moveTo(j,g):o.lineTo(j,g)}),o.strokeStyle="#7eb3ff",o.lineWidth=1.5,o.stroke(),o.beginPath(),x.forEach((h,y)=>{let j=y*N,g=r-h.dropPct/100*r;y===0?o.moveTo(j,g):o.lineTo(j,g)}),o.strokeStyle="rgba(233,69,96,0.85)",o.lineWidth=1.2,o.stroke();let E=x[x.length-1];o.fillStyle="rgba(207,225,255,0.85)",o.font="10px ui-monospace, monospace",o.fillText(`${E.fps.toFixed(1)} fps`,8,14),o.fillStyle="rgba(255,138,163,0.9)",o.fillText(`${E.dropPct.toFixed(2)}% dropped`,8,26)};return m(),()=>cancelAnimationFrame(p)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph"})}function Zt({scene:a,videoRef:t,onClose:s}){let[,r]=e.useState(0);e.useEffect(()=>{let N=setInterval(()=>r(E=>E+1),500);return()=>clearInterval(N)},[]);let n=t.current,l=a?.files?.[0]||{},c=n?.currentTime||0,d=n?.duration||0,o=d>0?c/d*100:0,u=0;if(n?.buffered&&n.buffered.length>0){for(let N=0;N<n.buffered.length;N++)if(c>=n.buffered.start(N)&&c<=n.buffered.end(N)){u=n.buffered.end(N)-c;break}}let p={0:"EMPTY",1:"IDLE",2:"LOADING",3:"NO_SOURCE"},m={0:"NOTHING",1:"METADATA",2:"CURRENT",3:"FUTURE",4:"ENOUGH"},f=n?.getVideoPlaybackQuality?.(),x=f&&f.totalVideoFrames>0?(f.droppedVideoFrames/f.totalVideoFrames*100).toFixed(2):"0.00",w=[["Time",`${Sa(c)} / ${Sa(d)}`],["Progress",`${o.toFixed(2)} %`],["Resolution",n?`${n.videoWidth} \xD7 ${n.videoHeight}`:"\u2014"],["Playback rate",n?`${n.playbackRate.toFixed(2)}\xD7`:"\u2014"],["Volume",n?`${Math.round(n.volume*100)} %${n.muted?" (muted)":""}`:"\u2014"],["Buffered ahead",`${u.toFixed(2)} s`],["Network state",n?p[n.networkState]||String(n.networkState):"\u2014"],["Ready state",n?m[n.readyState]||String(n.readyState):"\u2014"],["Total frames",f?f.totalVideoFrames.toLocaleString():"\u2014"],["Dropped frames",f?`${f.droppedVideoFrames.toLocaleString()} (${x} %)`:"\u2014"],["Video codec",l.video_codec||"\u2014"],["Audio codec",l.audio_codec||"\u2014"],["Bit rate",l.bit_rate?`${(l.bit_rate/1e6).toFixed(2)} mbps`:"\u2014"],["Frame rate",l.frame_rate?`${l.frame_rate} fps`:"\u2014"],["Dimensions",l.width&&l.height?`${l.width} \xD7 ${l.height}`:"\u2014"],["File size",l.size?Ha(l.size):"\u2014"],["Path",l.path||"\u2014"]];return e.createElement(fe,{title:"For Nerds",onClose:s,wide:!0},e.createElement("div",{className:"vajax-bs-graphs"},e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Bitrate (decoded bytes / s)"),e.createElement(Wt,{videoRef:t})),e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Audio spectrum"),e.createElement(Xt,{videoRef:t})),e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Frame rate & dropped frames"),e.createElement(Jt,{videoRef:t}))),e.createElement("div",{className:"vajax-bs-kv"},w.map(([N,E])=>e.createElement("div",{key:N,className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},N),e.createElement("span",{className:"vajax-bs-kv__value",title:String(E)},E)))))}var Rt=[{keys:["Space"],desc:"Play / pause"},{keys:["\u2190"],desc:"Seek back 10s"},{keys:["\u2192"],desc:"Seek forward 10s"},{keys:["Shift","\u2190"],desc:"Seek back 5s"},{keys:["Shift","\u2192"],desc:"Seek forward 5s"},{keys:["Ctrl","\u2190"],desc:"Seek back 1 min"},{keys:["Ctrl","\u2192"],desc:"Seek forward 1 min"},{keys:["1-9"],desc:"Seek to 10-90% duration"},{keys:["["],desc:"Scrub back 10%"},{keys:["]"],desc:"Scrub forward 10%"},{keys:["\u2191"],desc:"Volume up 10%"},{keys:["\u2193"],desc:"Volume down 10%"},{keys:["m"],desc:"Toggle mute"},{keys:["f"],desc:"Toggle fullscreen"},{keys:["o"],desc:"Record O at current time"}];function es({onClose:a}){return e.createElement(fe,{title:"Help & Shortcuts",onClose:a},e.createElement("div",null,e.createElement("div",{className:"vajax-bs-help__title"},"Keyboard shortcuts"),Rt.map((t,s)=>e.createElement("div",{key:s,className:"vajax-bs-help__row"},e.createElement("span",{className:"vajax-bs-help__keys"},t.keys.map((r,n)=>e.createElement("kbd",{key:n},r))),e.createElement("span",{className:"vajax-bs-help__desc"},t.desc)))))}function as({scene:a,videoRef:t,onClose:s}){let r=a?.files?.[0]||{},n=t.current?.src||a?.sceneStreams?.[0]?.url||"\u2014",l=r.fingerprints||[],c=l.find(u=>u.type==="oshash")?.value,d=l.find(u=>u.type==="phash")?.value,o=[["Stream",n,!0],["oshash",c||"\u2014"],["PHash",d||"\u2014"],["Path",r.path||"\u2014",!0],["File size",r.size?Ha(r.size):"\u2014"],["Modification time",r.mod_time?new Date(r.mod_time).toLocaleString():"\u2014"],["Duration",r.duration?W(r.duration):"\u2014"],["Dimensions",r.width&&r.height?`${r.width} \xD7 ${r.height}`:"\u2014"],["Frame rate",r.frame_rate?`${r.frame_rate} fps`:"\u2014"],["Bit rate",r.bit_rate?`${(r.bit_rate/1e6).toFixed(2)} mbps`:"\u2014"],["Video codec",r.video_codec||"\u2014"],["Audio codec",r.audio_codec||"\u2014"]];return e.createElement(fe,{title:"File Info",onClose:s},e.createElement("dl",{className:"vajax-bs-fileinfo"},o.map(([u,p,m])=>e.createElement(e.Fragment,{key:u},e.createElement("dt",null,u),e.createElement("dd",{title:String(p||"")},m&&p&&p!=="\u2014"?e.createElement("a",{href:p,target:"_blank",rel:"noopener noreferrer"},p):p)))))}function ts({scene:a,onSeek:t,onClose:s}){let r=a?.scene_markers||[];return e.createElement(fe,{title:"Markers",onClose:s},r.length===0?e.createElement("div",{style:{color:"var(--vajax-bs-text-dim)",fontStyle:"italic",textAlign:"center",padding:24}},"No markers for this scene"):e.createElement("div",{className:"vajax-bs-markers"},r.map(n=>e.createElement("div",{key:n.id,className:"vajax-bs-marker-row",onClick:()=>t(n.seconds),title:"Click to seek"},e.createElement("span",{className:"vajax-bs-marker-row__time"},W(n.seconds)),e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("div",{className:"vajax-bs-marker-row__title"},n.title||"Untitled"),n.primary_tag&&e.createElement("div",{className:"vajax-bs-marker-row__tag"},n.primary_tag.name))))))}var xe=50;function ss({scene:a,onNavigate:t,onClose:s}){let{session:r,stash:n,merged:l,sessionMergedIdx:c,stashMergedIdx:d}=Be(),[o,u]=e.useState(()=>Ze()),[p,m]=e.useState({}),[f,x]=e.useState(!1),[w,N]=e.useState(xe),[E,h]=e.useState(xe),[y,j]=e.useState(null),g=String(a?.id||""),b=Qe(),C=b>=0&&l[b]===g?b:l.indexOf(g),q=C,V=r.slice(0,w),z=n.slice(0,E);e.useEffect(()=>{let M=Array.from(new Set([...V,...z]));if(M.length===0)return;let L=!1;return(async()=>{x(!0);try{let U=p,A=M.filter(k=>!U[k]);if(A.length===0){x(!1);return}let S=await ae(`query($ids: [Int!]!) {
            findScenes(scene_ids: $ids) {
              scenes {
                id
                title
                o_counter
                files { path duration }
                paths { screenshot preview }
                studio { id name }
                performers { id name }
              }
            }
          }`,{ids:A.map(Number)});if(L)return;m(k=>{let P={...k};for(let D of S.findScenes?.scenes||[])P[D.id]=D;return P})}catch(U){console.warn("[Vajax BS] queue fetch failed",U)}finally{L||x(!1)}})(),()=>{L=!0}},[V.join(","),z.join(",")]),e.useEffect(()=>{N(xe)},[r.join(",")]),e.useEffect(()=>{h(xe)},[n.join(",")]);let te=M=>{let L={...o,[M]:!o[M]};u(L),$t(L)},Z=()=>Fa(),$=l.length===0?"No queue active":q>=0?`Position ${q+1} of ${l.length}`:"Current scene not in queue",B=(M,L,U)=>{let A=p[M],k=(L==="session"?c[U]:d[U])===C&&C>=0,P=A?.files?.[0]?.duration,D=r.includes(M),X=n.includes(M),G=Q=>{Q.preventDefault(),Q.stopPropagation(),j({x:Q.clientX,y:Q.clientY,id:M,inSession:D,inStash:X,source:L})};return e.createElement("div",{key:`${L}-${U}-${M}`,className:"vajax-bs-queue__item"+(k?" vajax-bs-queue__item--current":""),onClick:()=>t(M),onContextMenu:G,role:"button",tabIndex:0},A?.paths?.screenshot?e.createElement("img",{className:"vajax-bs-queue__thumb",src:A.paths.screenshot,alt:"",loading:"lazy"}):e.createElement("div",{className:"vajax-bs-queue__thumb"}),e.createElement("div",{className:"vajax-bs-queue__meta"},e.createElement("div",{className:"vajax-bs-queue__title"},A?ke(A):`Scene ${M}`),(A?.performers?.length>0||A?.studio?.name)&&e.createElement("div",{className:"vajax-bs-queue__sub"},A?.performers?.map(Q=>Q.name).join(", "),A?.performers?.length>0&&A?.studio?.name?" \xB7 ":"",A?.studio?.name||""),e.createElement("div",{className:"vajax-bs-queue__chips"},e.createElement("span",{className:"vajax-bs-queue__chip",title:"Scene ID"},"#",M),(A?.o_counter||0)>0&&e.createElement("span",{className:"vajax-bs-queue__chip vajax-bs-queue__chip--o",title:`O Count: ${A.o_counter}`},e.createElement(_.Heart,null),e.createElement("span",null,A.o_counter)),P?e.createElement("span",{className:"vajax-bs-queue__chip",title:`Duration: ${W(P)}`},e.createElement(_.Clock,null),e.createElement("span",null,W(P))):null)),k&&e.createElement("span",{className:"vajax-bs-queue__now"},"NOW"))};return e.createElement(fe,{title:"Queue",onClose:s,wide:!0},e.createElement("div",{className:"vajax-bs-queue"},e.createElement("div",{className:"vajax-bs-queue__controls"},e.createElement("span",{style:{fontSize:"0.78rem",color:"var(--vajax-bs-text-dim)",cursor:"help"},title:l.length>0&&q>=0?`Current scene is position ${q+1} of ${l.length} in the merged queue`:"Session queue plays first, then Stash queue"},$),e.createElement("span",{style:{marginLeft:"auto",display:"flex",gap:6}},e.createElement("button",{type:"button",className:"vajax-bs-queue__ctrl",onClick:Z,title:"Reload Stash queue"},e.createElement(_.Repeat,null)))),e.createElement("div",{className:"vajax-bs-queue__settings"},e.createElement("div",{className:"vajax-bs-queue__settings-title"},"Queue Behavior"),[{key:"autoContinue",label:"Auto Continue",hint:"Automatically advance to the next scene when the video ends."},{key:"queueAutoplay",label:"Autoplay on Queue",hint:"Start playing automatically when the scene advances via queue."},{key:"shuffleAfterNext",label:"Shuffle Next",hint:"Pick a random scene from the queue for the next play."},{key:"repeatOnEnd",label:"Repeat on End",hint:"After the last scene, restart the queue from the beginning. Locked on while Shuffle Next is enabled.",lockedBy:"shuffleAfterNext"},{key:"shuffleAfterRepeat",label:"Shuffle after Repeat",hint:"When repeating, shuffle the entire queue before restarting."}].map(M=>{let L=M.lockedBy&&o[M.lockedBy],U=L?!0:o[M.key];return e.createElement("label",{key:M.key,className:"vajax-bs-queue__setting",title:M.hint},e.createElement("span",{className:"vajax-bs-queue__setting-label"},M.label,L&&e.createElement("span",{className:"vajax-bs-queue__setting-lock",title:"Locked by Shuffle Next"},e.createElement(_.Lock,null))),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(U?" vajax-bs-toggle--on":""),onClick:()=>{L||te(M.key)},disabled:L,role:"switch","aria-checked":String(!!U)}))})),e.createElement("div",{className:"vajax-bs-queue__section vajax-bs-queue__section--session"},e.createElement("div",{className:"vajax-bs-queue__section-header"},e.createElement("span",{className:"vajax-bs-queue__section-title"},e.createElement(_.List,null),"Session Queue",e.createElement("span",{className:"vajax-bs-queue__section-count"},r.length)),e.createElement("span",{className:"vajax-bs-queue__section-hint"},"Plays after current scene \xB7 cleared on browser close"),r.length>0&&e.createElement("button",{type:"button",className:"vajax-bs-queue__section-clear",onClick:kt,title:"Clear session queue"},e.createElement(_.Trash,null))),r.length===0?e.createElement("div",{className:"vajax-bs-queue__empty",style:{padding:"12px 10px"}},"No session queue items. Add some via right-click on a scene card."):e.createElement(e.Fragment,null,V.map((M,L)=>e.createElement(e.Fragment,{key:`s-${L}-${M}`},B(M,"session",L))),w<r.length&&e.createElement("button",{type:"button",className:"vajax-bs-queue__ctrl",style:{width:"100%",height:32,marginTop:6},onClick:()=>N(M=>M+xe)},"Load ",Math.min(xe,r.length-w)," more (",w," / ",r.length,")"))),e.createElement("div",{className:"vajax-bs-queue__section vajax-bs-queue__section--stash"},e.createElement("div",{className:"vajax-bs-queue__section-header"},e.createElement("span",{className:"vajax-bs-queue__section-title"},e.createElement(_.Shuffle,null),"Stash Queue",e.createElement("span",{className:"vajax-bs-queue__section-count"},n.length)),e.createElement("span",{className:"vajax-bs-queue__section-hint"},"From Play Random / filtered list"),n.length>0&&e.createElement("button",{type:"button",className:"vajax-bs-queue__section-clear",onClick:St,title:"Clear Stash queue"},e.createElement(_.Trash,null))),n.length===0?e.createElement("div",{className:"vajax-bs-queue__empty",style:{padding:"12px 10px"}},"No Stash queue active. Start one from the scenes list."):e.createElement(e.Fragment,null,z.map((M,L)=>e.createElement(e.Fragment,{key:`q-${L}-${M}`},B(M,"stash",L))),E<n.length&&e.createElement("button",{type:"button",className:"vajax-bs-queue__ctrl",style:{width:"100%",height:32,marginTop:6},onClick:()=>h(M=>M+xe)},"Load ",Math.min(xe,n.length-E)," more (",E," / ",n.length,")"))),f&&e.createElement("div",{className:"vajax-bs-queue__empty",style:{padding:8}},"Loading details\u2026"),y&&e.createElement(He,{x:y.x,y:y.y,onClose:()=>j(null),items:(()=>{let M=[{label:"Open in New Tab",icon:e.createElement(_.Url,null),onClick:()=>window.open(`/scenes/${y.id}`,"_blank","noopener")},{label:"Go to Scene",icon:e.createElement(_.Play,null),onClick:()=>t(y.id)},{separator:!0},{label:"Add Next to Queue",icon:e.createElement(_.SkipNext,null),onClick:()=>Da(y.id)},{label:"Add Last to Queue",icon:e.createElement(_.Plus,null),onClick:()=>Va(y.id)}];return y.inSession&&(M.push({separator:!0}),M.push({label:"Remove from Session Queue",icon:e.createElement(_.Trash,null),danger:!0,onClick:()=>na(y.id)})),y.inStash&&(y.inSession||M.push({separator:!0}),M.push({label:"Remove from Stash Queue",icon:e.createElement(_.Trash,null),danger:!0,onClick:()=>Ba(y.id)})),M})()})))}function rs({scene:a,liveSession:t={accumulated:0,counted:!1},onClose:s}){let r=a?.play_history||[],l=(a?.play_duration||0)+t.accumulated,c=a?.play_count||0,d=a?.files?.[0]?.duration||0,o=d>0?d*.25:0,u=o>0?Math.min(1,t.accumulated/o):0,p=t.accumulated>.5,m=e.useMemo(()=>{let N=c>0?l/c:0,E=new Map;for(let y of r){let j=new Date(y);if(isNaN(j.getTime()))continue;let g=j.getFullYear(),b=String(j.getMonth()+1).padStart(2,"0"),C=String(j.getDate()).padStart(2,"0"),q=`${g}-${b}-${C}`;E.has(q)||E.set(q,{key:q,date:new Date(g,j.getMonth(),j.getDate()),count:0,timestamps:[]});let V=E.get(q);V.count++,V.timestamps.push(y)}let h=Array.from(E.values()).sort((y,j)=>j.date-y.date);for(let y of h)y.estimatedDuration=y.count*N,y.timestamps.sort((j,g)=>new Date(g)-new Date(j));return h},[r,c,l]),[f,x]=e.useState(()=>{let N=new Set;return m[0]&&N.add(m[0].key),N}),w=N=>{x(E=>{let h=new Set(E);return h.has(N)?h.delete(N):h.add(N),h})};return e.createElement(fe,{title:"History",onClose:s},p&&e.createElement("div",{className:"vajax-bs-session-panel"},e.createElement("div",{className:"vajax-bs-session-panel__header"},e.createElement("span",{className:"vajax-bs-session-panel__dot"}),"This Session"),e.createElement("div",{className:"vajax-bs-session-panel__row"},e.createElement("span",{className:"vajax-bs-session-panel__label"},"Duration"),e.createElement("span",{className:"vajax-bs-session-panel__value"},Le(t.accumulated))),e.createElement("div",{className:"vajax-bs-session-panel__row"},e.createElement("span",{className:"vajax-bs-session-panel__label"},"Play count threshold"),e.createElement("span",{className:"vajax-bs-session-panel__value"},t.counted?"Reached \u2713":o>0?`${Le(o)} needed`:"\u2014")),e.createElement("div",{className:"vajax-bs-session-panel__bar-wrap"},e.createElement("div",{className:"vajax-bs-session-panel__bar"+(t.counted?" vajax-bs-session-panel__bar--done":""),style:{width:`${u*100}%`}})),e.createElement("div",{className:"vajax-bs-session-panel__pct"},(u*100).toFixed(0),"%")),e.createElement("div",{className:"vajax-bs-kv",style:{marginBottom:12,paddingBottom:10,borderBottom:"1px solid var(--vajax-bs-surface-3)"}},e.createElement("div",{className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},"Total play count"),e.createElement("span",{className:"vajax-bs-kv__value"},c)),e.createElement("div",{className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},"Total play duration"),e.createElement("span",{className:"vajax-bs-kv__value"},Le(l),t.accumulated>.5&&e.createElement("span",{className:"vajax-bs-history-live"},"LIVE"))),e.createElement("div",{className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},"Active days"),e.createElement("span",{className:"vajax-bs-kv__value"},m.length))),m.length===0?e.createElement("div",{style:{color:"var(--vajax-bs-text-dim)",fontStyle:"italic",textAlign:"center",padding:24}},"No play history"):e.createElement("div",{className:"vajax-bs-history-days"},m.map(N=>{let E=f.has(N.key);return e.createElement("div",{key:N.key,className:"vajax-bs-history-day"},e.createElement("button",{type:"button",className:"vajax-bs-history-day__header"+(E?" vajax-bs-history-day__header--open":""),onClick:()=>w(N.key)},e.createElement("span",{className:"vajax-bs-history-day__chevron"},e.createElement(_.ChevronRight,null)),e.createElement("span",{className:"vajax-bs-history-day__date"},Lt(N.date)),e.createElement("span",{className:"vajax-bs-history-day__stats"},e.createElement("span",{className:"vajax-bs-history-day__count"},N.count," ",N.count===1?"play":"plays"),N.estimatedDuration>0&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-history-day__dot"},"\xB7"),e.createElement("span",{className:"vajax-bs-history-day__duration",title:"Estimated from average play length"},"~",Le(N.estimatedDuration))))),E&&e.createElement("div",{className:"vajax-bs-history-day__times"},N.timestamps.map(h=>new Date(h).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})).join(" \u2013 ")))})))}var ns={query:`query($q: String!, $limit: Int) {
    findStudios(filter: { q: $q, per_page: $limit }) {
      studios { id name image_path }
    }
  }`,extract:a=>a.findStudios?.studios||[]},os={query:`query($q: String!, $limit: Int) {
    findPerformers(filter: { q: $q, per_page: $limit }) {
      performers { id name image_path birthdate gender disambiguation }
    }
  }`,extract:a=>a.findPerformers?.performers||[]},is={query:`query($q: String!, $limit: Int) {
    findTags(filter: { q: $q, per_page: $limit }) {
      tags { id name description }
    }
  }`,extract:a=>a.findTags?.tags||[]},ls={query:`query($q: String!, $limit: Int) {
    findGalleries(filter: { q: $q, per_page: $limit }) {
      galleries { id title paths { cover } }
    }
  }`,extract:a=>a.findGalleries?.galleries||[]},ds={query:`query($q: String!, $limit: Int) {
    findGroups(filter: { q: $q, per_page: $limit }) {
      groups { id name front_image_path }
    }
  }`,extract:a=>a.findGroups?.groups||[]};function cs({label:a,value:t,onChange:s,keyPlaceholder:r="key",valuePlaceholder:n="value"}){let l=Object.entries(t||{}),[c,d]=e.useState(""),[o,u]=e.useState(""),p=()=>{let x=c.trim();x&&(s({...t||{},[x]:o}),d(""),u(""))},m=x=>{let w={...t||{}};delete w[x],s(w)},f=(x,w)=>s({...t||{},[x]:w});return e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},a),l.map(([x,w])=>e.createElement("div",{key:x,className:"vajax-bs-url-row"},e.createElement("span",{style:{minWidth:80,fontFamily:"ui-monospace, monospace",fontSize:"0.78rem"}},x),e.createElement("input",{type:"text",className:"vajax-bs-input",value:typeof w=="string"?w:JSON.stringify(w),onChange:N=>f(x,N.target.value)}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>m(x),title:"Remove"},e.createElement(_.Trash,null)))),e.createElement("div",{className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",style:{maxWidth:120},value:c,onChange:x=>d(x.target.value),placeholder:r}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:o,onChange:x=>u(x.target.value),placeholder:n}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:p,title:"Add"},e.createElement(_.Plus,null))))}function us({value:a,onChange:t}){let s=a||[],[r,n]=e.useState(""),[l,c]=e.useState(""),d=()=>{let u=r.trim(),p=l.trim();!u||!p||(t([...s,{endpoint:u,stash_id:p}]),n(""),c(""))},o=u=>t(s.filter((p,m)=>m!==u));return e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Stash IDs"),s.map((u,p)=>e.createElement("div",{key:p,className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:u.endpoint,onChange:m=>{let f=[...s];f[p]={...f[p],endpoint:m.target.value},t(f)},placeholder:"endpoint"}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:u.stash_id,onChange:m=>{let f=[...s];f[p]={...f[p],stash_id:m.target.value},t(f)},placeholder:"stash id"}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>o(p),title:"Remove"},e.createElement(_.Trash,null)))),e.createElement("div",{className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:r,onChange:u=>n(u.target.value),placeholder:"endpoint"}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:l,onChange:u=>c(u.target.value),placeholder:"stash id"}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:d,title:"Add"},e.createElement(_.Plus,null))))}function ps({scene:a,onRefresh:t,onClose:s}){let[r,n]=e.useState(a.title||""),[l,c]=e.useState(a.details||""),[d,o]=e.useState(a.date||""),[u,p]=e.useState(a.code||""),[m,f]=e.useState(a.director||""),[x,w]=e.useState(a.rating100?Math.round(a.rating100/20):0),[N,E]=e.useState(!!a.organized),[h,y]=e.useState(a.studio||null),[j,g]=e.useState(a.performers||[]),[b,C]=e.useState(a.tags||[]),[q,V]=e.useState(a.galleries||[]),[z,te]=e.useState((a.groups||[]).map(T=>({group:T.group,scene_index:T.scene_index??0}))),[Z,$]=e.useState(Array.isArray(a.urls)?[...a.urls]:a.urls?[a.urls]:[]),[B,M]=e.useState(Array.isArray(a.stash_ids)?[...a.stash_ids]:[]),[L,U]=e.useState(()=>{if(!a.custom_fields)return{};if(typeof a.custom_fields=="string")try{return JSON.parse(a.custom_fields)}catch{return{}}return{...a.custom_fields}}),[A,S]=e.useState(!1),k=async()=>{S(!0);try{let T={id:a.id,title:r.trim()||null,details:l.trim()||null,date:d.trim()||null,code:u.trim()||null,director:m.trim()||null,rating100:x>0?x*20:null,organized:N,studio_id:h?.id||null,performer_ids:j.map(F=>F.id),tag_ids:b.map(F=>F.id),gallery_ids:q.map(F=>F.id),groups:z.map(F=>({group_id:F.group.id,scene_index:F.scene_index??0})),urls:Z.filter(F=>F&&F.trim()),stash_ids:B.map(F=>({endpoint:F.endpoint?.trim(),stash_id:F.stash_id?.trim()})).filter(F=>F.endpoint&&F.stash_id)};Object.keys(L).length>0&&(T.custom_fields=JSON.stringify(L)),await Ve(a.id,T),await t(),Y("Saved"),s()}catch(T){console.warn(T),Y("Save failed: "+(T.message||""),!0)}finally{S(!1)}},P=()=>$([...Z,""]),D=(T,F)=>{let ie=[...Z];ie[T]=F,$(ie)},X=T=>$(Z.filter((F,ie)=>ie!==T)),G=T=>{z.find(F=>F.group.id===T.id)||te([...z,{group:T,scene_index:0}])},Q=T=>te(z.filter(F=>F.group.id!==T));return e.createElement(fe,{title:"Edit Scene",onClose:s},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Title"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:r,onChange:T=>n(T.target.value),placeholder:Ga(a.files?.[0]?.path)||""})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Date"),e.createElement("input",{type:"date",className:"vajax-bs-input",value:d,onChange:T=>o(T.target.value)})),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Studio Code"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:u,onChange:T=>p(T.target.value),placeholder:"e.g. ABP-123"})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Director"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:m,onChange:T=>f(T.target.value)}))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Rating"),e.createElement("div",{className:"vajax-bs-rating",style:{padding:0}},[1,2,3,4,5].map(T=>e.createElement("button",{key:T,type:"button",className:"vajax-bs-rating__star"+(T<=x?" vajax-bs-rating__star--on":""),onClick:()=>w(T===x?0:T),title:`${T} stars`},e.createElement(da,{filled:T<=x}))))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Organized"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(N?" vajax-bs-toggle--on":""),onClick:()=>E(T=>!T),role:"switch","aria-checked":String(N)})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Studio"),e.createElement(Te,{label:"studios",endpoint:ns,getLabel:T=>T.name,value:h,onChange:y,multi:!1,placeholder:"Search studio..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Performers"),e.createElement(Te,{label:"performers",endpoint:os,getLabel:T=>T.name,value:j,onChange:g,multi:!0,placeholder:"Search performers..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Tags"),e.createElement(Te,{label:"tags",endpoint:is,getLabel:T=>T.name,value:b,onChange:C,multi:!0,placeholder:"Search tags..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Galleries"),e.createElement(Te,{label:"galleries",endpoint:ls,getLabel:T=>T.title||`Gallery ${T.id}`,value:q,onChange:V,multi:!0,placeholder:"Search galleries..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Groups"),z.length>0&&e.createElement("div",{className:"vajax-bs-picker__chips"},z.map(T=>e.createElement("span",{key:T.group.id,className:"vajax-bs-picker__chip"},T.group.name,e.createElement("button",{type:"button",onClick:()=>Q(T.group.id),title:"Remove"},e.createElement(_.Close,null))))),e.createElement(Te,{label:"groups",endpoint:ds,getLabel:T=>T.name,value:[],onChange:T=>{let F=T[T.length-1];F&&G(F)},multi:!0,placeholder:"Search groups to add..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"URLs"),Z.map((T,F)=>e.createElement("div",{key:F,className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:T,onChange:ie=>D(F,ie.target.value),placeholder:"https://..."}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>X(F),title:"Remove URL"},e.createElement(_.Trash,null)))),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:P,style:{alignSelf:"flex-start"}},e.createElement(_.Plus,null)," Add URL")),e.createElement(us,{value:B,onChange:M}),e.createElement(cs,{label:"Custom Fields",value:L,onChange:U,keyPlaceholder:"field name",valuePlaceholder:"value"}),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Details"),e.createElement("textarea",{className:"vajax-bs-input",rows:6,value:l,onChange:T=>c(T.target.value)})),e.createElement("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"}},e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:s,disabled:A},"Cancel"),e.createElement("button",{type:"button",className:"vajax-bs-mini vajax-bs-mini--primary",onClick:k,disabled:A},A?"Saving\u2026":"Save")))}function He({x:a,y:t,items:s,onClose:r}){let n=e.useRef(null),l=Ya(),[c,d]=e.useState(null),[o,u]=e.useState("right");e.useEffect(()=>{let m=x=>{n.current&&!n.current.contains(x.target)&&r()},f=x=>{x.key==="Escape"&&r()};return document.addEventListener("mousedown",m),window.addEventListener("keydown",f),()=>{document.removeEventListener("mousedown",m),window.removeEventListener("keydown",f)}},[r]),e.useEffect(()=>{let m=n.current;if(!m)return;let f=m.getBoundingClientRect(),x=window.innerWidth,w=window.innerHeight;f.right>x-4&&(m.style.left=`${Math.max(4,x-f.width-4)}px`),f.bottom>w-4&&(m.style.top=`${Math.max(4,w-f.height-4)}px`)},[a,t]);let p=(m,f,x)=>{if(!f.submenu){d(null);return}let w=x.currentTarget.getBoundingClientRect();u(w.right+200>window.innerWidth-8?"left":"right"),d(m)};return je.createPortal(e.createElement("div",{ref:n,className:"vajax-bs-context",style:{position:"fixed",top:t,left:a,zIndex:2147483647},onContextMenu:m=>m.preventDefault()},s.map((m,f)=>m.separator?e.createElement("div",{key:f,className:"vajax-bs-context__sep"}):e.createElement("div",{key:f,className:"vajax-bs-context__wrapper",onMouseEnter:x=>p(f,m,x),onMouseLeave:()=>d(null)},e.createElement("button",{type:"button",className:"vajax-bs-context__item"+(m.danger?" vajax-bs-context__item--danger":"")+(m.submenu?" vajax-bs-context__item--has-sub":""),onClick:x=>{if(m.submenu){x.preventDefault();return}r(),m.onClick?.()},disabled:m.disabled},m.icon&&e.createElement("span",{className:"vajax-bs-context__icon"},m.icon),e.createElement("span",{className:"vajax-bs-context__label"},m.label),m.hint&&e.createElement("span",{className:"vajax-bs-context__hint"},m.hint),m.submenu&&e.createElement("span",{className:"vajax-bs-context__arrow"},e.createElement(_.ChevronRight,null))),m.submenu&&c===f&&e.createElement("div",{className:"vajax-bs-context__submenu"+(o==="left"?" vajax-bs-context__submenu--left":"")},m.submenu.map((x,w)=>x.separator?e.createElement("div",{key:w,className:"vajax-bs-context__sep"}):e.createElement("button",{key:w,type:"button",className:"vajax-bs-context__item"+(x.danger?" vajax-bs-context__item--danger":""),onClick:()=>{r(),x.onClick?.()},disabled:x.disabled},x.icon&&e.createElement("span",{className:"vajax-bs-context__icon"},x.icon),e.createElement("span",{className:"vajax-bs-context__label"},x.label))))))),l)}function Ta({sceneId:a}){let[t,s]=e.useState(null),[r,n]=e.useState([]),[l,c]=e.useState(!0),[d,o]=e.useState(null),[u,p]=e.useState(null),[m,f]=e.useState(!1),[x,w]=e.useState({accumulated:0,counted:!1}),[N,E]=e.useState(null),[h,y]=e.useState(()=>({whole:!1,ab:{enabled:!1,start:0,end:0}})),j=e.useRef(!0),g=e.useRef(null),b=e.useRef(null),C=e.useRef(null),{merged:q}=Be(),{merged:V}=Be();e.useEffect(()=>{let S=String(a),k=g.current;if(w({accumulated:0,counted:!1}),k&&k!==S&&Se().includes(k)){let X=q.indexOf(S);q.indexOf(k,X)<0&&na(k)}g.current=S;let P=Qe();if(q.length>0&&(P<0||q[P]!==S)){let D=q.indexOf(S);ze(D)}(async()=>{let{qsort:D,direction:X}=aa();if(D)try{(await Ma(D,X)).includes(S)&&Ct(S),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}catch{}})()},[a,q.join(",")]),e.useEffect(()=>{let S=!1;return(async()=>{j.current&&c(!0);try{let[k,P]=await Promise.all([ja(a),ye.getForScene(a)]);if(S)return;if(s(k),n(P),k){let D=ke(k);document.title=D?`${D} \xB7 Stash`:"Stash"}o(null)}catch(k){if(S)return;j.current&&o(k.message)}finally{S||(j.current=!1,c(!1))}})(),()=>{S=!0}},[a]);let z=e.useCallback(async()=>{try{let[S,k]=await Promise.all([ja(a),ye.getForScene(a)]);if(S){s(S);let P=ke(S);document.title=P?`${P} \xB7 Stash`:"Stash"}Array.isArray(k)&&n(k)}catch(S){console.warn("[Vajax BS] refresh failed",S)}},[a]),te=e.useCallback(async()=>{if(!(!t?.id||m)){f(!0);try{let S=b.current,k=S?S.currentTime:null;await Pa(t.id),await ye.addOTimestamp(t.id,k,"unified"),await z(),Y(`Recorded O @ ${W(k||0)}`)}catch(S){console.warn(S),Y("Failed to record O",!0)}finally{f(!1)}}},[t,m,z]),Z=e.useCallback(()=>{let S=b.current;S&&(S.paused?S.play().catch(()=>{}):S.pause())},[]),$=e.useCallback(S=>{let k=b.current;k&&(k.currentTime=Math.max(0,Math.min(k.duration||0,S)))},[]);e.useEffect(()=>{C.current=$},[$]),e.useEffect(()=>{p(null),E(null),f(!1),y({whole:!1,ab:{enabled:!1,start:0,end:0}})},[a]),e.useEffect(()=>{let S=k=>{if(k.target.matches("input, textarea, select, [contenteditable]"))return;let P=b.current;if(!P)return;let D=()=>{k.preventDefault(),k.stopImmediatePropagation()};if(k.key===" "||k.key==="Enter"){D(),P.paused?P.play().catch(()=>{}):P.pause();return}if(k.key==="ArrowLeft"){D(),k.ctrlKey?P.currentTime-=60:k.shiftKey?P.currentTime-=5:P.currentTime-=10;return}if(k.key==="ArrowRight"){D(),k.ctrlKey?P.currentTime+=60:k.shiftKey?P.currentTime+=5:P.currentTime+=10;return}if(k.key==="ArrowUp"){D(),P.volume=Math.min(1,P.volume+.1),P.muted=!1;return}if(k.key==="ArrowDown"){D(),P.volume=Math.max(0,P.volume-.1);return}if(k.key==="m"||k.key==="M"){D(),P.muted=!P.muted;return}if(k.key==="f"||k.key==="F"){D();let X=b.current?.closest(".vajax-bs-player"),G=b.current;if(!X||!G)return;if(document.fullscreenElement||document.webkitFullscreenElement){document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitExitFullscreen();return}if((/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&typeof G.webkitEnterFullscreen=="function")try{G.webkitEnterFullscreen();return}catch{}let F=X.requestFullscreen||X.webkitRequestFullscreen;if(F)Promise.resolve(F.call(X)).catch(()=>{if(typeof G.webkitEnterFullscreen=="function")try{G.webkitEnterFullscreen()}catch{}});else if(typeof G.webkitEnterFullscreen=="function")try{G.webkitEnterFullscreen()}catch{}return}if(k.key==="o"||k.key==="O"){D(),te();return}if(/^[1-9]$/.test(k.key)&&P.duration){D(),P.currentTime=parseInt(k.key,10)/10*P.duration;return}if(k.key==="["){D(),P.currentTime=Math.max(0,P.currentTime-P.duration*.1);return}if(k.key==="]"){D(),P.currentTime=Math.min(P.duration,P.currentTime+P.duration*.1);return}};return window.addEventListener("keydown",S,!0),()=>window.removeEventListener("keydown",S,!0)},[te]),e.useEffect(()=>{let S=k=>{k.key==="Escape"&&p(null)};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[]);let B=e.useCallback(async(S,k)=>{try{await ae(`mutation($input: PerformerUpdateInput!) {
          performerUpdate(input: $input) { id favorite }
        }`,{input:{id:String(S),favorite:k}}),Y(k?"Favorited":"Unfavorited"),await z()}catch(P){console.warn("[Vajax BS] performer favorite failed",P),Y("Failed to update favorite",!0)}},[z]),M=e.useCallback(async S=>{if(t?.performers?.length)try{await Promise.all(t.performers.map(k=>ae(`mutation($input: PerformerUpdateInput!) {
              performerUpdate(input: $input) { id favorite }
            }`,{input:{id:String(k.id),favorite:S}}))),Y(S?"Favorited all":"Unfavorited all"),await z()}catch(k){console.warn("[Vajax BS] bulk favorite failed",k),Y("Failed to update favorites",!0)}},[t,z]),L=S=>{let k=S.target;k.closest("input, textarea, select, [contenteditable]")||k.closest(".vajax-bs-player")||(S.preventDefault(),E({x:S.clientX,y:S.clientY}))},U=()=>{if(!t)return[];let S=t.performers||[],k=t.files?.[0]?.path,P=t.paths?.screenshot,D=b.current,X=!D||D.paused,G=[{label:X?"Play":"Pause",icon:X?e.createElement(_.Play,null):e.createElement(_.Pause,null),hint:"Space",onClick:Z},{label:"Record O",icon:e.createElement(_.Heart,null),hint:"O",onClick:te},{separator:!0},{label:"Copy scene URL",icon:e.createElement(_.Url,null),onClick:()=>_e(window.location.href)},{label:"Copy scene ID",icon:e.createElement(_.List,null),onClick:()=>_e(t.id)},{label:"Copy title",icon:e.createElement(_.Pencil,null),onClick:()=>_e(ke(t))},{label:"Copy file path",icon:e.createElement(_.Film,null),disabled:!k,onClick:()=>_e(k||"")},{separator:!0}];if(S.length===1){let Q=S[0];G.push({label:Q.favorite?"Unfavorite Performer":"Favorite Performer",icon:e.createElement(_.Star,null),onClick:()=>B(Q.id,!Q.favorite)})}else if(S.length>1){let Q=S.map(T=>({label:`${T.favorite?"\u2605 ":"\u2606 "}${T.name}`,onClick:()=>B(T.id,!T.favorite)}));Q.push({separator:!0}),Q.push({label:"Favorite all",icon:e.createElement(_.Star,null),onClick:()=>M(!0)}),Q.push({label:"Unfavorite all",icon:e.createElement(_.Close,null),onClick:()=>M(!1)}),G.push({label:"Favorite Performer",icon:e.createElement(_.Star,null),submenu:Q})}return G.push({separator:!0}),G.push({label:"Edit scene",icon:e.createElement(_.Pencil,null),onClick:()=>p("edit")}),G.push({label:t.organized?"Mark as unorganized":"Mark as organized",icon:e.createElement(_.Check,null),onClick:async()=>{try{await Ve(t.id,{organized:!t.organized}),await z()}catch(Q){console.warn(Q),Y("Failed to update",!0)}}}),G.push({label:"Open screenshot",icon:e.createElement(_.Image,null),disabled:!P,onClick:()=>{P&&window.open(P,"_blank","noopener")}}),G},A=S=>{let k=new URLSearchParams(window.location.search),P=`/scenes/${S}${k.toString()?"?"+k.toString():""}`;history.pushState({},"",P)};return l?e.createElement("div",{className:"vajax-bs-loading"},"Loading scene\u2026"):d&&!t?e.createElement("div",{className:"vajax-bs-error"},"Error: ",d):t?e.createElement("div",{className:"vajax-bs-layout",onContextMenu:L},e.createElement("div",{className:"vajax-bs-player-col"},e.createElement("div",{className:"vajax-bs-player-wrap"},e.createElement(Ot,{scene:t,marks:r,loopSettings:h,onUpdateLoop:y,onLiveSession:w,onRecordO:te,onOpenModal:p,onNavigateScene:A,onRequestPageContextMenu:S=>E({x:S.clientX,y:S.clientY}),onRefresh:z,videoRef:b})),e.createElement(gt,{scene:t,marks:r,onNavigate:A,onSeek:S=>C.current?.(S)})),e.createElement(Yt,{scene:t,marks:r,busy:m,setBusy:f,onRefresh:z,onSeek:S=>C.current?.(S),onOpenModal:p}),u==="settings"&&e.createElement(Kt,{scene:t,videoRef:b,loopSettings:h,onUpdateLoop:y,onClose:()=>p(null),onOpenModal:p}),u==="debug"&&e.createElement(Zt,{scene:t,videoRef:b,onClose:()=>p(null)}),u==="help"&&e.createElement(es,{onClose:()=>p(null)}),u==="fileinfo"&&e.createElement(as,{scene:t,videoRef:b,onClose:()=>p(null)}),u==="markers"&&e.createElement(ts,{scene:t,onSeek:S=>C.current?.(S),onClose:()=>p(null)}),u==="queue"&&e.createElement(ss,{scene:t,queue:V,onNavigate:A,onClose:()=>p(null)}),u==="history"&&e.createElement(rs,{scene:t,liveSession:x,onClose:()=>p(null)}),u==="edit"&&e.createElement(ps,{scene:t,onRefresh:z,onClose:()=>p(null)}),N&&e.createElement(He,{x:N.x,y:N.y,onClose:()=>E(null),items:U()})):e.createElement("div",{className:"vajax-bs-error"},"Scene not found")}var ue=null,Ae=null,De=null;function bs(a){let t=String(a);if(ue){if(De===t)return;De=t,je.render(e.createElement(Oe,null,e.createElement(Ta,{sceneId:t})),ue);return}let s=document.querySelector(".main");if(!s){console.warn("[Vajax BS] .main not found \u2014 cannot mount");return}Ae=s,s.style.display="none",ue=document.createElement("div"),ue.id="vajax-bs-scene-root",s.parentNode.insertBefore(ue,s),De=t,Vt(),je.render(e.createElement(Oe,null,e.createElement(Ta,{sceneId:t})),ue),console.log("[Vajax BS] ScenePage mounted for",t)}function vs(){if(ue){try{je.unmountComponentAtNode(ue)}catch(a){console.warn(a)}ue.remove(),ue=null,De=null,Bt(),Ae&&(Ae.style.removeProperty("display"),Ae=null),document.title="Stash",console.log("[Vajax BS] ScenePage unmounted")}}var Fe=null;function Ie(){let a=ia();a&&a!==Fe?(Fe=a,zt(),document.body.classList.add("vajax-bs-scene-active"),setTimeout(()=>bs(a),120)):a||Fe!==null&&(vs(),document.body.classList.remove("vajax-bs-scene-active"),Fe=null)}function ca(){console.log("[Vajax BS] main() called");let a=t=>function(){let s=t.apply(this,arguments);return setTimeout(Ie,50),s};history.pushState=a(history.pushState),history.replaceState=a(history.replaceState),window.addEventListener("popstate",Ie),setInterval(Ie,500),Ie()}ca();})()