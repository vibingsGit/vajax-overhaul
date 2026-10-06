;(()=>{var e=PluginApi.React;var ue=PluginApi.ReactDOM;var _a="VajaxBetterScenes";async function me(a,t={}){let s=`
    mutation RunVajaxOp($args: Map) {
      runPluginOperation(plugin_id: "${_a}", args: $args)
    }
  `,r=await fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s,variables:{args:{operation:a,...t}}})});if(!r.ok)throw new Error(`HTTP ${r.status}`);let n=await r.json();if(n.errors)throw new Error(n.errors.map(l=>l.message).join(", "));let i=n.data?.runPluginOperation;if(!i)return null;try{let l=JSON.parse(i);return l.output!==void 0?l.output:l}catch{return i}}async function Q(a,t={}){let r=await(await fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:t})})).json();if(r.errors)throw new Error(r.errors.map(n=>n.message).join(", "));return r.data}function q({children:a,viewBox:t="0 0 24 24",fill:s="none",stroke:r="currentColor",strokeWidth:n=2,size:i="1em"}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:t,fill:s,stroke:r,strokeWidth:n,strokeLinecap:"round",strokeLinejoin:"round",style:{display:"inline-block",verticalAlign:"middle",flexShrink:0},"aria-hidden":"true"},a)}var j={Play:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"6 3 20 12 6 21"})),Pause:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("rect",{x:"6",y:"4",width:"4",height:"16"}),e.createElement("rect",{x:"14",y:"4",width:"4",height:"16"})),SkipPrev:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"19 20 9 12 19 4"}),e.createElement("rect",{x:"5",y:"4",width:"2",height:"16"})),SkipNext:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"5 4 15 12 5 20"}),e.createElement("rect",{x:"17",y:"4",width:"2",height:"16"})),Volume2:a=>e.createElement(q,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"}),e.createElement("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})),Volume1:a=>e.createElement(q,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07"})),VolumeX:a=>e.createElement(q,{...a},e.createElement("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19",fill:"currentColor",stroke:"none"}),e.createElement("line",{x1:"23",y1:"9",x2:"17",y2:"15"}),e.createElement("line",{x1:"17",y1:"9",x2:"23",y2:"15"})),Maximize:a=>e.createElement(q,{...a},e.createElement("path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}),e.createElement("path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}),e.createElement("path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}),e.createElement("path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"})),Minimize:a=>e.createElement(q,{...a},e.createElement("path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}),e.createElement("path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}),e.createElement("path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}),e.createElement("path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"})),Gear:a=>e.createElement(q,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"3"}),e.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"})),Heart:a=>e.createElement(q,{...a,viewBox:"0 0 36 36",fill:"currentColor",stroke:"none"},e.createElement("path",{d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"})),PlayCount:a=>e.createElement(q,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"9"}),e.createElement("polygon",{points:"10 8 16 12 10 16",fill:"currentColor",stroke:"none"})),Check:a=>e.createElement(q,{...a},e.createElement("polyline",{points:"20 6 9 17 4 12"})),Pencil:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("path",{d:"M12.854 1.5a.5.5 0 0 1 0 .708L3.207 11.854 2 14l2.146-1.207L13.793 3.146a.5.5 0 0 1 .708 0l.353.353a.5.5 0 0 1 0 .708L5.207 13.854 3 15l1.146-2.207L14.793 3.146a.5.5 0 0 1 .708 0z",transform:"translate(2 2) scale(0.85)"}),e.createElement("path",{d:"M16.5 2.5a2.121 2.121 0 1 1 3 3L7 18l-4 1 1-4L16.5 2.5z"})),Info:a=>e.createElement(q,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),e.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})),List:a=>e.createElement(q,{...a},e.createElement("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),e.createElement("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),e.createElement("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),e.createElement("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),e.createElement("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),e.createElement("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})),Clock:a=>e.createElement(q,{...a},e.createElement("circle",{cx:"12",cy:"12",r:"10"}),e.createElement("polyline",{points:"12 6 12 12 16 14"})),Bookmark:a=>e.createElement(q,{...a},e.createElement("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})),Film:a=>e.createElement(q,{...a},e.createElement("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18"}),e.createElement("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),e.createElement("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),e.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),e.createElement("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),e.createElement("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),e.createElement("line",{x1:"17",y1:"7",x2:"22",y2:"7"}),e.createElement("line",{x1:"17",y1:"17",x2:"22",y2:"17"})),Shuffle:a=>e.createElement(q,{...a},e.createElement("polyline",{points:"16 3 21 3 21 8"}),e.createElement("line",{x1:"4",y1:"20",x2:"21",y2:"3"}),e.createElement("polyline",{points:"21 16 21 21 16 21"}),e.createElement("line",{x1:"15",y1:"15",x2:"21",y2:"21"}),e.createElement("line",{x1:"4",y1:"4",x2:"9",y2:"9"})),Plus:a=>e.createElement(q,{...a},e.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})),Trash:a=>e.createElement(q,{...a},e.createElement("polyline",{points:"3 6 5 6 21 6"}),e.createElement("path",{d:"M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"}),e.createElement("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.createElement("line",{x1:"14",y1:"11",x2:"14",y2:"17"})),Close:a=>e.createElement(q,{...a},e.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),Repeat:a=>e.createElement(q,{...a},e.createElement("polyline",{points:"17 1 21 5 17 9"}),e.createElement("path",{d:"M3 11V9a4 4 0 0 1 4-4h14"}),e.createElement("polyline",{points:"7 23 3 19 7 15"}),e.createElement("path",{d:"M21 13v2a4 4 0 0 1-4 4H3"})),Loop:a=>e.createElement(q,{...a},e.createElement("path",{d:"M17 2l4 4-4 4"}),e.createElement("path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}),e.createElement("path",{d:"M7 22l-4-4 4-4"}),e.createElement("path",{d:"M21 13v1a4 4 0 0 1-4 4H3"})),Lock:a=>e.createElement(q,{...a},e.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),e.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})),Image:a=>e.createElement(q,{...a},e.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),e.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),e.createElement("polyline",{points:"21 15 16 10 5 21"})),Search:a=>e.createElement(q,{...a},e.createElement("circle",{cx:"11",cy:"11",r:"8"}),e.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),Url:a=>e.createElement(q,{...a},e.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),e.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"})),ChevronRight:a=>e.createElement(q,{...a},e.createElement("polyline",{points:"9 18 15 12 9 6"})),Star:a=>e.createElement(q,{...a,fill:"currentColor",stroke:"none"},e.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))},ie={async getForScene(a){try{let t=await me("load_scene",{sceneId:String(a)});return Array.isArray(t)?t:[]}catch(t){return console.warn(t),[]}},async addOTimestamp(a,t,s="unified"){try{let r=await me("record_o",{sceneId:String(a),seconds:t,source:s});return Array.isArray(r)?r:null}catch(r){return console.warn(r),null}},async updateTimestamp(a,t,s){try{let r=await me("update_o",{sceneId:String(a),index:t,seconds:s});return Array.isArray(r)?r:null}catch(r){return console.warn(r),null}},async removeOTimestamp(a,t){try{let s=await me("remove_o",{sceneId:String(a),index:t});return Array.isArray(s)?s:null}catch(s){return console.warn(s),null}},async resetScene(a){try{return await me("reset_scene",{sceneId:String(a)}),!0}catch(t){return console.warn(t),!1}}},Me=new Map;function ya(a){let t=[],s=a.split(/\n\n+/),r=/(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2})\.(\d{3})/,n=/#xywh=(\d+),(\d+),(\d+),(\d+)/;for(let i of s){let l=i.split(`
`).map(p=>p.trim()).filter(Boolean),b=null,o=null;for(let p of l)!b&&r.test(p)?b=p:!o&&n.test(p)&&(o=p);if(!b||!o)continue;let d=b.match(r);if(!d)continue;let v=+d[1]*3600+ +d[2]*60+ +d[3]+ +d[4]/1e3,f=+d[5]*3600+ +d[6]*60+ +d[7]+ +d[8]/1e3,m=o.match(n);m&&t.push({start:v,end:f,x:+m[1],y:+m[2],w:+m[3],h:+m[4]})}return t}function wa(a){if(!a?.id)return Promise.resolve(null);if(Me.has(a.id))return Me.get(a.id);let t=(async()=>{let s=a.paths?.vtt,r=a.paths?.sprite;if(!s||!r)return null;try{let n=await fetch(s);if(!n.ok)return null;let i=await n.text(),l=ya(i);return l.length===0?null:{spriteUrl:r,cues:l}}catch(n){return console.warn("[Vajax BS] vtt load failed",n),null}})();return Me.set(a.id,t),t}function Ye(a){let[t,s]=e.useState(null);return e.useEffect(()=>{let r=!1;return s(null),wa(a).then(n=>{r||s(n)}),()=>{r=!0}},[a?.id]),t}function Je(a,t){if(!a||t==null)return null;for(let n of a.cues)if(t>=n.start&&t<n.end)return n;let s=null,r=1/0;for(let n of a.cues){let i=Math.abs(n.start-t);i<r&&(r=i,s=n)}return r<5?s:null}var ka=`
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
`;async function Ge(a){return(await Q(ka,{id:String(a)})).findScene}async function Ze(a){await Q("mutation($id: ID!) { sceneIncrementO(id: $id) }",{id:String(a)})}async function Sa(a){await Q("mutation($id: ID!) { sceneDecrementO(id: $id) }",{id:String(a)})}async function Ne(a,t){return(await Q("mutation($input: SceneUpdateInput!) { sceneUpdate(input: $input) { id } }",{input:{id:String(a),...t}})).sceneUpdate}function ze({scene:a,onNavigate:t,badge:s}){if(!a)return null;let r=a.files?.[0]?.duration,n=Ee(a),i=(a.performers||[]).map(b=>b.name).join(", ")||a.studio?.name||"",l=a.o_counter||0;return e.createElement("div",{className:"vajax-bs-card",onClick:()=>t(a.id),role:"button",tabIndex:0},e.createElement("div",{className:"vajax-bs-card__thumb"},a.paths?.screenshot?e.createElement("img",{src:a.paths.screenshot,alt:"",loading:"lazy"}):e.createElement("div",{className:"vajax-bs-card__thumb-empty"}),r?e.createElement("span",{className:"vajax-bs-card__duration"},V(r)):null,l>0?e.createElement("span",{className:"vajax-bs-card__badge",title:`O Count: ${l}`},e.createElement(j.Heart,null)," ",l):s?e.createElement("span",{className:"vajax-bs-card__badge"},s):null),e.createElement("div",{className:"vajax-bs-card__title",title:n},n),i?e.createElement("div",{className:"vajax-bs-card__sub",title:i},i):null)}function Na({scene:a,onNavigate:t}){let s=Le(),[r,n]=e.useState([]),i=s.indexOf(String(a?.id)),l=i>=0?s.slice(i+1,i+21):s.slice(0,20);return e.useEffect(()=>{if(l.length===0){n([]);return}let b=!1;return(async()=>{try{let o=await Q(`query($ids: [Int!]!) {
            findScenes(scene_ids: $ids) {
              scenes {
                id title o_counter
                paths { screenshot }
                performers { id name }
                studio { id name }
                files { path duration }
              }
            }
          }`,{ids:l.map(Number)});if(b)return;let d={};for(let v of o.findScenes?.scenes||[])d[v.id]=v;n(l.map(v=>d[v]).filter(Boolean))}catch(o){console.warn(o)}})(),()=>{b=!0}},[l.join(",")]),s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No active queue"):r.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No further scenes in queue"):e.createElement("div",{className:"vajax-bs-carousel"},r.map(b=>e.createElement(ze,{key:b.id,scene:b,onNavigate:t})))}function Ca({scene:a,onNavigate:t}){let[s,r]=e.useState([]),[n,i]=e.useState(!0);return e.useEffect(()=>{let l=!1;return(async()=>{i(!0);try{let b=(a.performers||[]).map(g=>String(g.id)),o=(a.tags||[]).map(g=>String(g.id)),d=a.studio?.id?String(a.studio.id):null,f={q:"",page:1,per_page:40,sort:`random_${Math.floor(Math.random()*1e9)}`,direction:"DESC"},m=`
          query($filter: FindFilterType, $scene_filter: SceneFilterType) {
            findScenes(filter: $filter, scene_filter: $scene_filter) {
              scenes {
                id title rating100 o_counter
                paths { screenshot }
                performers { id name }
                tags { id name }
                studio { id name }
                files { path duration }
              }
            }
          }
        `,p=[];b.length>0&&p.push(Q(m,{filter:f,scene_filter:{performers:{value:b,modifier:"INCLUDES"}}})),o.length>0&&p.push(Q(m,{filter:f,scene_filter:{tags:{value:o.slice(0,15),modifier:"INCLUDES"}}})),d&&p.push(Q(m,{filter:f,scene_filter:{studios:{value:[d],modifier:"INCLUDES"}}})),p.push(Q(`query($filter: FindFilterType) {
            findScenes(filter: $filter) {
              scenes {
                id title rating100 o_counter
                paths { screenshot }
                performers { id name }
                tags { id name }
                studio { id name }
                files { path duration }
              }
            }
          }`,{filter:{q:"",page:1,per_page:40,sort:"o_counter",direction:"DESC"}}));let w=await Promise.all(p);if(l)return;let T=new Set(b),M=new Set(o),_=new Map;for(let g of w)for(let C of g.findScenes?.scenes||[]){if(String(C.id)===String(a.id))continue;let P=0;for(let A of C.performers||[])T.has(String(A.id))&&(P+=5);for(let A of C.tags||[])M.has(String(A.id))&&(P+=1);d&&C.studio?.id&&String(C.studio.id)===d&&(P+=3),P+=(C.rating100||0)/50,P+=Math.min(C.o_counter||0,5)*.8;let I=_.get(C.id);(!I||P>I.score)&&_.set(C.id,{scene:C,score:P})}let $=Array.from(_.values()).sort((g,C)=>C.score-g.score).map(g=>g.scene),x=$.slice(0,8),c=$.slice(8,60);for(let g=c.length-1;g>0;g--){let C=Math.floor(Math.random()*(g+1));[c[g],c[C]]=[c[C],c[g]]}r([...x,...c.slice(0,12)])}catch(b){console.warn("[Vajax BS] recommendations failed",b)}finally{l||i(!1)}})(),()=>{l=!0}},[a.id]),n?e.createElement("div",{className:"vajax-bs-below__empty"},"Loading recommendations\u2026"):s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No recommendations"):e.createElement("div",{className:"vajax-bs-carousel"},s.map(l=>e.createElement(ze,{key:l.id,scene:l,onNavigate:t})))}function Ea({scene:a,onNavigate:t}){let s=a.performers||[],[r,n]=e.useState([]),[i,l]=e.useState(!0);return e.useEffect(()=>{if(s.length===0){l(!1),n([]);return}let b=!1;return(async()=>{l(!0);try{let o=await Promise.all(s.map(d=>Q(`query($filter: FindFilterType, $scene_filter: SceneFilterType) {
                findScenes(filter: $filter, scene_filter: $scene_filter) {
                  scenes {
                    id title o_counter
                    paths { screenshot }
                    performers { id name }
                    studio { id name }
                    files { path duration }
                  }
                }
              }`,{filter:{q:"",page:1,per_page:20,sort:`random_${Math.floor(Math.random()*1e9)}`,direction:"DESC"},scene_filter:{performers:{value:[String(d.id)],modifier:"INCLUDES"}}}).then(v=>({performer:d,items:(v.findScenes?.scenes||[]).filter(f=>String(f.id)!==String(a.id)).slice(0,20)}))));if(b)return;n(o)}catch(o){console.warn("[Vajax BS] this-performer failed",o)}finally{b||l(!1)}})(),()=>{b=!0}},[a.id]),s.length===0?e.createElement("div",{className:"vajax-bs-below__empty"},"No performers in this scene"):i?e.createElement("div",{className:"vajax-bs-below__empty"},"Loading scenes\u2026"):e.createElement("div",{className:"vajax-bs-performer-rows"},r.map(({performer:b,items:o})=>e.createElement("div",{key:b.id,className:"vajax-bs-performer-row"},e.createElement("div",{className:"vajax-bs-performer-row__header"},e.createElement("a",{href:`/performers/${b.id}`,className:"vajax-bs-performer-row__name"},b.image_path&&e.createElement("img",{src:b.image_path,alt:"",className:"vajax-bs-performer-row__thumb",onError:d=>{d.currentTarget.style.display="none"}}),e.createElement("span",null,b.name)),e.createElement("span",{className:"vajax-bs-performer-row__count"},o.length," scene",o.length===1?"":"s")),o.length===0?e.createElement("div",{className:"vajax-bs-below__empty",style:{padding:12}},"No other scenes with ",b.name):e.createElement("div",{className:"vajax-bs-carousel"},o.map(d=>e.createElement(ze,{key:d.id,scene:d,onNavigate:t}))))))}function Ta({scene:a,marks:t,onSeek:s}){let r=a.files?.[0]?.duration||0,n=Ye(a),[i,l]=e.useState(null),b=e.useMemo(()=>{let v=(t||[]).map((p,w)=>({seconds:p.seconds,createdAt:p.createdAt,kind:"real",key:`r-${w}`})),f=a.o_counter||0,m=Math.max(0,f-(t?.length||0));if(m>0&&r>0){let p=(a.o_history||[]).slice(),w=new Set;for(let M of t){if(!M.createdAt)continue;let _=new Date(M.createdAt).getTime(),$=-1,x=3e4;for(let c=0;c<p.length;c++){if(w.has(c))continue;let g=new Date(p[c]).getTime(),C=Math.abs(g-_);C<x&&(x=C,$=c)}$>=0&&w.add($)}let T=0;p.forEach((M,_)=>{w.has(_)||T>=m||(T++,v.push({seconds:null,createdAt:M,kind:"ph",key:`ph-${_}`}))})}return v},[t,a.id]);if(!r)return e.createElement("div",{className:"vajax-bs-below__empty"},"No duration available");let o=i!=null?b[i]:null,d=o&&o.seconds!=null?Je(n,o.seconds):null;return e.createElement("div",{className:"vajax-bs-omap-wrap"},e.createElement("div",{className:"vajax-bs-omap"},e.createElement("div",{className:"vajax-bs-omap__track"},b.map((v,f)=>{if(v.seconds==null)return null;let m=v.seconds/r*100,p=i===f;return e.createElement("div",{key:v.key,className:"vajax-bs-omap__marker"+(p?" vajax-bs-omap__marker--hover":""),style:{left:`${m}%`},onMouseEnter:()=>l(f),onMouseLeave:()=>l(null),onClick:()=>s(v.seconds),title:V(v.seconds)})}))),e.createElement("div",{className:"vajax-bs-omap__footer"},e.createElement("span",null,b.filter(v=>v.seconds!=null).length," O-marks"),e.createElement("span",null,"\xB7"),e.createElement("span",null,V(r)," total")),o&&o.seconds!=null&&e.createElement("div",{className:"vajax-bs-omap__popup",style:{left:`${o.seconds/r*100}%`}},d?e.createElement("div",{className:"vajax-bs-omap__popup-thumb",style:{width:d.w,height:d.h,backgroundImage:`url(${n.spriteUrl})`,backgroundPosition:`-${d.x}px -${d.y}px`}}):e.createElement("div",{className:"vajax-bs-omap__popup-thumb vajax-bs-omap__popup-thumb--empty"}),e.createElement("div",{className:"vajax-bs-omap__popup-time"},V(o.seconds))))}function $a({scene:a,marks:t,onNavigate:s,onSeek:r}){let[n,i]=e.useState(()=>Re("vajax-bs-below-view","next_queue")),l=o=>{i(o),ea("vajax-bs-below-view",o)};return e.createElement("div",{className:"vajax-bs-below"},e.createElement("div",{className:"vajax-bs-below__tabs",role:"tablist"},[{id:"next_queue",label:"Next On Queue"},{id:"recommendations",label:"Recommendations"},{id:"this_performer",label:"This Performer"},{id:"o_map",label:"O Count Map"}].map(o=>e.createElement("button",{key:o.id,type:"button",role:"tab","aria-selected":n===o.id,className:"vajax-bs-below__tab"+(n===o.id?" vajax-bs-below__tab--active":""),onClick:()=>l(o.id)},o.label))),e.createElement("div",{className:"vajax-bs-below__body"},n==="next_queue"&&e.createElement(Na,{scene:a,onNavigate:s}),n==="recommendations"&&e.createElement(Ca,{scene:a,onNavigate:s}),n==="this_performer"&&e.createElement(Ea,{scene:a,onNavigate:s}),n==="o_map"&&e.createElement(Ta,{scene:a,marks:t,onSeek:r})))}function Ma(a){if(!a)return null;let t=a.replace(/\(/g,"{").replace(/\)/g,"}");try{return JSON.parse(t)}catch(s){return console.warn("[Vajax BS] failed to parse criterion",a,s),null}}function Pa(a){if(!a||!a.type)return null;let{type:t,modifier:s,value:r}=a,n={};return s&&(n.modifier=s),r==null?{[t]:n}:(Array.isArray(r)?n.value=r.map(i=>typeof i=="object"&&i.id!=null?String(i.id):String(i)):typeof r=="object"?(Array.isArray(r.items)?n.value=r.items.map(i=>String(i.id??i)):r.value!==void 0&&(n.value=r.value),r.value2!==void 0&&(n.value2=r.value2),typeof r.depth=="number"&&(n.depth=r.depth),Array.isArray(r.excluded)&&r.excluded.length>0&&(n.excluded=r.excluded.map(String))):n.value=r,{[t]:n})}function Fa(){let t=new URLSearchParams(window.location.search).getAll("qfc");if(t.length===0)return null;let s={};for(let r of t){let n=Ma(r),i=Pa(n);i&&Object.assign(s,i)}return Object.keys(s).length>0?s:null}var za=8,oe=new Map;async function La(a,t){let s=`${a}|${t}|${window.location.search}`;if(oe.has(s))return oe.get(s);let r=Fa();try{let n={filter:{q:"",page:1,per_page:2e3,sort:a,direction:t}};r&&(n.scene_filter=r);let l=((await Q(`query($filter: FindFilterType, $scene_filter: SceneFilterType) {
        findScenes(filter: $filter, scene_filter: $scene_filter) {
          count
          scenes { id }
        }
      }`,n)).findScenes?.scenes||[]).map(b=>String(b.id));return console.log(`[Vajax BS] Queue loaded: ${l.length} scenes (sort=${a}, filter=${r?JSON.stringify(r):"none"})`),oe.size>=za&&oe.delete(oe.keys().next().value),oe.set(s,l),l}catch(n){return console.warn("[Vajax BS] queue fetch failed",n),[]}}function qa(){let a=new URLSearchParams(window.location.search),t=a.get("qsort"),s=(a.get("qsortd")||"desc").toUpperCase();return{qsort:t,direction:s}}function Le(){let[a,t]=e.useState([]);return e.useEffect(()=>{let s=!1,r=async()=>{let{qsort:i,direction:l}=qa();if(i){let b=await La(i,l);s||t(b)}else{try{let b=localStorage.getItem("queue");if(b){let o=JSON.parse(b);if(Array.isArray(o)){let d=o.map(v=>String(v?.id??v)).filter(Boolean);s||t(d);return}}}catch{}s||t([])}};r(),window.addEventListener("vajax-queue-changed",r),window.addEventListener("popstate",r);let n=setInterval(r,1500);return()=>{s=!0,window.removeEventListener("vajax-queue-changed",r),window.removeEventListener("popstate",r),clearInterval(n)}},[]),a}function Ia(){oe.clear(),window.dispatchEvent(new CustomEvent("vajax-queue-changed"))}function Re(a,t){try{let s=localStorage.getItem(a);return s?JSON.parse(s):t}catch{return t}}function ea(a,t){try{localStorage.setItem(a,JSON.stringify(t))}catch(s){console.warn("[Vajax BS] lsSet failed",s)}}var aa="vajax-bs-queue-settings-v2",Aa={autoContinue:!1,repeatOnEnd:!1,shuffleAfterNext:!1,shuffleAfterRepeat:!1};function ta(){let a={...Aa,...Re(aa,{})};return a.shuffleAfterNext&&(a.repeatOnEnd=!0),a}function Da(a){ea(aa,a)}function Va(){let a=window.location.pathname.match(/^\/scenes\/(\d+)/);return a?a[1]:null}function V(a){(!isFinite(a)||a<0)&&(a=0);let t=Math.floor(a/3600),s=Math.floor(a%3600/60),r=Math.floor(a%60);return t>0?`${t}:${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}`:`${s}:${String(r).padStart(2,"0")}`}function We(a){(!isFinite(a)||a<0)&&(a=0);let t=Math.floor(a/3600),s=Math.floor(a%3600/60),n=(a%60).toFixed(2).padStart(5,"0");return t>0?`${t}:${String(s).padStart(2,"0")}:${n}`:`${s}:${n}`}function Ba(a){if(!isFinite(a)||a<=0)return"0s";let t=Math.floor(a/3600),s=Math.floor(a%3600/60),r=Math.floor(a%60),n=[];return t>0&&n.push(`${t}h`),s>0&&n.push(`${s}m`),n.push(`${r}s`),n.join(" ")}function Oa(a){if(a==null||(a=String(a).trim(),!a))return null;if(/^\d+(\.\d+)?$/.test(a))return parseFloat(a);let t=a.match(/^(\d+):(\d+(?:\.\d+)?)$/);return t?parseInt(t[1],10)*60+parseFloat(t[2]):(t=a.match(/^(\d+):(\d+):(\d+(?:\.\d+)?)$/),t?parseInt(t[1],10)*3600+parseInt(t[2],10)*60+parseFloat(t[3]):null)}function sa(a){if(!a)return"";let t=new Date(a).getTime();if(isNaN(t))return"";let s=Math.floor((Date.now()-t)/1e3);if(s<60)return`${s}s ago`;let r=Math.floor(s/60);if(r<60)return`${r}m ago`;let n=Math.floor(r/60);if(n<24)return`${n}h ago`;let i=Math.floor(n/24);if(i<30)return`${i}d ago`;let l=Math.floor(i/30);return l<12?`${l}mo ago`:`${Math.floor(l/12)}y ago`}function Ce(a){if(!a)return"";try{return new Date(a).toLocaleString()}catch{return String(a)}}function ra(a){if(!a||!isFinite(a))return"\u2014";let t=["B","KiB","MiB","GiB","TiB"],s=0,r=a;for(;r>=1024&&s<t.length-1;)r/=1024,s++;return`${r.toFixed(r>=100?0:r>=10?1:2)} ${t[s]}`}function na(a){if(!a)return null;let t=String(a).split(/[/\\]/);return t[t.length-1]||null}function Ee(a){return a?a.title?a.title:na(a.files?.[0]?.path)||`Scene ${a.id}`:"Untitled"}function Ua(){if(document.getElementById("vajax-bs-styles"))return;let a=document.createElement("style");a.id="vajax-bs-styles",a.textContent=`
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
  .vajax-bs-player--idle .vajax-bs-controls { opacity: 0; pointer-events: none; }
  .vajax-bs-player:hover .vajax-bs-controls { opacity: 1 !important; pointer-events: auto !important; }

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
  `,document.head.appendChild(a)}function O(a,t=!1){let s=document.createElement("div");s.className="vajax-bs-toast",t&&(s.style.borderColor="rgba(255,120,120,0.8)",s.style.color="var(--vajax-bs-error-soft)"),s.textContent=a,document.body.appendChild(s),setTimeout(()=>s.remove(),1800)}function Qe(a){try{let t=document.createElement("textarea");t.value=a,t.setAttribute("readonly",""),t.style.position="fixed",t.style.top="-1000px",t.style.left="-1000px",t.style.opacity="0",document.body.appendChild(t);let s=document.activeElement;t.select(),t.setSelectionRange(0,t.value.length);let r=document.execCommand("copy");if(document.body.removeChild(t),s&&typeof s.focus=="function"&&s.focus(),r)return O("Copied to clipboard"),!0}catch(t){console.warn("[Vajax BS] fallbackCopy failed",t)}return O("Copy failed",!0),!1}function le(a){let t=String(a??"");if(!t){O("Nothing to copy",!0);return}if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(()=>O("Copied to clipboard"),()=>Qe(t));return}Qe(t)}function Ha(a){e.useEffect(()=>{let t=a.current;if(!t)return;let s=t.querySelector(".vajax-bs-modal__header");if(!s)return;let r=null,n=b=>{if(b.target.closest(".vajax-bs-modal__close")||b.button!==0)return;let o=t.getBoundingClientRect();t.style.left=`${o.left}px`,t.style.top=`${o.top}px`,t.style.right="auto",t.style.bottom="auto",r={startX:b.clientX,startY:b.clientY,startLeft:o.left,startTop:o.top},document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),b.preventDefault()},i=b=>{r&&(t.style.left=`${r.startLeft+(b.clientX-r.startX)}px`,t.style.top=`${r.startTop+(b.clientY-r.startY)}px`)},l=()=>{r=null,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)};return s.addEventListener("mousedown",n),()=>{s.removeEventListener("mousedown",n),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)}},[a])}var Ke=new WeakMap;function Ga(a){if(!a)return null;let t=Ke.get(a);if(t)return t.ctx.state==="suspended"&&t.ctx.resume().catch(()=>{}),t;try{let s=new(window.AudioContext||window.webkitAudioContext),r=s.createMediaElementSource(a),n=s.createChannelSplitter(2),i=s.createAnalyser(),l=s.createAnalyser();i.fftSize=512,l.fftSize=512,i.smoothingTimeConstant=.75,l.smoothingTimeConstant=.75,r.connect(n),n.connect(i,0),n.connect(l,1),r.connect(s.destination);let b={ctx:s,left:i,right:l};return Ke.set(a,b),s.state==="suspended"&&s.resume().catch(()=>{}),b}catch(s){return console.warn("[Vajax BS] audio analyser failed",s),null}}function qe(a,t=[]){let[s,r]=e.useState({w:0,h:0});return e.useEffect(()=>{let n=a.current;if(!n)return;let i=()=>{let b=n.clientWidth,o=n.clientHeight;if(b===0||o===0)return;let d=window.devicePixelRatio||1;n.width=b*d,n.height=o*d,n.getContext("2d").setTransform(d,0,0,d,0,0),r({w:b,h:o})};i();let l=new ResizeObserver(i);return l.observe(n),()=>l.disconnect()},t),s}function oa(){let[a,t]=e.useState(()=>document.fullscreenElement||document.body);return e.useEffect(()=>{let s=()=>t(document.fullscreenElement||document.body);return document.addEventListener("fullscreenchange",s),()=>document.removeEventListener("fullscreenchange",s)},[]),a}function se({title:a,onClose:t,children:s,wide:r=!1}){let n=e.useRef(null);Ha(n);let i=oa();return e.useEffect(()=>{let l=n.current;if(!l||!window.matchMedia("(max-width: 768px)").matches)return;requestAnimationFrame(()=>{if(!l.isConnected)return;let d=window.innerWidth,v=window.innerHeight,f=8,m=d-f*2,p=v-f*2;l.style.left=`${f}px`,l.style.top=`${f}px`,l.style.right="auto",l.style.bottom="auto",l.style.width=`${m}px`,l.style.maxWidth=`${m}px`,l.style.height=`${p}px`,l.style.maxHeight=`${p}px`,l.style.minWidth="0",l.style.minHeight="0",l.style.resize="none"})},[]),ue.createPortal(e.createElement("div",{ref:n,className:"vajax-bs-modal"+(r?" vajax-bs-modal--wide":""),onClick:l=>l.stopPropagation()},e.createElement("div",{className:"vajax-bs-modal__header"},e.createElement("span",null,a),e.createElement("button",{type:"button",className:"vajax-bs-modal__close",onClick:t,"aria-label":"Close"},e.createElement(j.Close,null))),e.createElement("div",{className:"vajax-bs-modal__body"},s)),i)}var Pe=class extends e.Component{constructor(t){super(t),this.state={error:null,info:null}}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,s){console.error("[Vajax BS] React render error:",t,s),this.setState({info:s})}render(){if(this.state.error){let t=this.state.error,s=t?.stack||String(t);return e.createElement("div",{style:{padding:20,color:"#ff8ba3",fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",whiteSpace:"pre-wrap",background:"#0f1218",minHeight:"60vh"}},e.createElement("h2",{style:{marginTop:0}},"Vajax Better Scenes \u2014 render error"),e.createElement("pre",{style:{whiteSpace:"pre-wrap"}},s),this.state.info?.componentStack&&e.createElement(e.Fragment,null,e.createElement("h3",null,"Component stack"),e.createElement("pre",{style:{whiteSpace:"pre-wrap"}},this.state.info.componentStack)))}return this.props.children}},ge=null;function Xe(){let a=document.querySelector("#VideoJsPlayer_html5_api");if(a)try{a.paused||a.pause(),a.muted||(a.muted=!0)}catch{}let t=document.querySelector("#VideoJsPlayer");if(t&&t.player&&typeof t.player.pause=="function"){try{t.player.pause()}catch{}try{t.player.muted(!0)}catch{}}}function Wa(){Xe(),!ge&&(ge=setInterval(Xe,500))}function Qa(){ge&&(clearInterval(ge),ge=null)}function Ka({scene:a,marks:t,loopSettings:s,onUpdateLoop:r,onRecordO:n,onOpenModal:i,onNavigateScene:l,onRequestPageContextMenu:b,videoRef:o}){let[d,v]=e.useState(null),f=Ye(a),m=e.useRef(null),[p,w]=e.useState(!1),[T,M]=e.useState(0),[_,$]=e.useState(0),[x,c]=e.useState(0),[g,C]=e.useState(1),[P,I]=e.useState(!1),[A,Y]=e.useState(1),[G,N]=e.useState(!1),[h,y]=e.useState(0),[E,L]=e.useState(!0),[B,F]=e.useState(!1),[D,K]=e.useState(!1),[ee,X]=e.useState(!1),[de,re]=e.useState(!1),[S,z]=e.useState(null),Z=e.useRef(null),Te=a?.sceneStreams||[],De=Te[h]?.url||"",ce=Le(),pe=a?ce.indexOf(String(a.id)):-1,he=pe>0?ce[pe-1]:null,je=pe>=0&&pe<ce.length-1?ce[pe+1]:null,Ve=e.useRef([]);e.useEffect(()=>{Ve.current=ce},[ce]),e.useEffect(()=>{let u=o.current;if(!u)return;let k=!1,U=()=>{k=!1},J=()=>{if(console.log("[Vajax BS] video ended event fired"),k){console.log("[Vajax BS] already handled");return}k=!0;let H=ta(),W=Ve.current;if(console.log("[Vajax BS] ended \u2014 autoContinue:",H.autoContinue,"repeatOnEnd:",H.repeatOnEnd,"queue.length:",W.length),W.length===0){console.warn("[Vajax BS] no queue, cannot advance");return}let be=String(a?.id),ae=W.indexOf(be);if(console.log("[Vajax BS] current idx in queue:",ae),ae<0)return;let ve=ae===W.length-1,te=new URLSearchParams(window.location.search),He=te.toString()?"?"+te.toString():"";if(ve&&H.repeatOnEnd){let ne=W[0];if(H.shuffleAfterRepeat&&W.length>1){let xe=W.filter(ja=>ja!==be);ne=xe[Math.floor(Math.random()*xe.length)]}console.log("[Vajax BS] repeat on end \u2192 next:",ne),window.location.href=`/scenes/${ne}${He}`;return}if(!ve&&H.autoContinue){let ne=W[ae+1];if(H.shuffleAfterNext){let xe=W.slice(ae+1);ne=xe[Math.floor(Math.random()*xe.length)]}console.log("[Vajax BS] auto continue \u2192 next:",ne),window.location.href=`/scenes/${ne}${He}`}};return u.addEventListener("ended",J),u.addEventListener("play",U),console.log("[Vajax BS] ended/play listeners attached"),()=>{u.removeEventListener("ended",J),u.removeEventListener("play",U)}},[a?.id,o]),e.useEffect(()=>{let u=o.current;if(!u)return;let k=()=>w(!0),U=()=>w(!1),J=()=>M(u.currentTime),H=()=>$(u.duration||0),W=()=>{C(u.volume),I(u.muted)},be=()=>Y(u.playbackRate),ae=()=>{if(u.buffered.length>0){let ve=0;for(let te=0;te<u.buffered.length;te++)if(u.currentTime>=u.buffered.start(te)&&u.currentTime<=u.buffered.end(te)){ve=u.buffered.end(te);break}c(ve)}};return u.addEventListener("play",k),u.addEventListener("pause",U),u.addEventListener("timeupdate",J),u.addEventListener("durationchange",H),u.addEventListener("loadedmetadata",H),u.addEventListener("volumechange",W),u.addEventListener("ratechange",be),u.addEventListener("progress",ae),()=>{u.removeEventListener("play",k),u.removeEventListener("pause",U),u.removeEventListener("timeupdate",J),u.removeEventListener("durationchange",H),u.removeEventListener("loadedmetadata",H),u.removeEventListener("volumechange",W),u.removeEventListener("ratechange",be),u.removeEventListener("progress",ae)}},[o]),e.useEffect(()=>{let u=o.current;u&&(u.loop=!!s.whole)},[s.whole,o]),e.useEffect(()=>{let u=o.current;if(!u)return;let k=()=>{let{enabled:U,start:J,end:H}=s.ab;U&&H>J&&u.currentTime>=H&&(u.currentTime=J)};return u.addEventListener("timeupdate",k),()=>u.removeEventListener("timeupdate",k)},[s.ab,o]),e.useEffect(()=>{let u=()=>N(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",u),()=>document.removeEventListener("fullscreenchange",u)},[]),e.useEffect(()=>{let u=()=>{F(!1),K(!1),X(!1),re(!1)};if(B||D||ee||de)return document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[B,D,ee,de]);let Be=()=>{L(!0),Z.current&&clearTimeout(Z.current),Z.current=setTimeout(()=>{o.current?.paused||L(!1)},2500)};e.useEffect(()=>{let u=m.current;if(u)return u.addEventListener("mousemove",Be),()=>u.removeEventListener("mousemove",Be)},[]);let _e=()=>{let u=o.current;u&&(u.paused?u.play().catch(()=>{}):u.pause())},da=u=>{let k=o.current;k&&(k.currentTime=Math.max(0,Math.min(k.duration||0,u)),M(k.currentTime))},_t=u=>{let k=o.current;k&&(k.currentTime=Math.max(0,Math.min(k.duration||0,k.currentTime+u)))},ca=u=>{let k=o.current;if(!k||!_)return;let U=u.currentTarget.getBoundingClientRect(),J=(u.clientX-U.left)/U.width;k.currentTime=Math.max(0,Math.min(_,J*_))},ua=u=>{if(!_)return;let k=u.currentTarget.getBoundingClientRect(),U=Math.max(0,Math.min(1,(u.clientX-k.left)/k.width));v(U*_)},pa=()=>v(null),ba=()=>{let u=o.current;u&&(u.muted=!u.muted)},va=u=>{let k=o.current;k&&(k.volume=u,k.muted=u===0)},xa=u=>{let k=o.current;k&&(k.playbackRate=u,F(!1))},$e=()=>{let u=m.current,k=o.current;if(!u||!k)return;if(document.fullscreenElement||document.webkitFullscreenElement){document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitExitFullscreen();return}if((/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&typeof k.webkitEnterFullscreen=="function")try{k.webkitEnterFullscreen();return}catch{}let H=u.requestFullscreen||u.webkitRequestFullscreen;if(H){Promise.resolve(H.call(u)).catch(()=>{if(typeof k.webkitEnterFullscreen=="function")try{k.webkitEnterFullscreen()}catch{}});return}if(typeof k.webkitEnterFullscreen=="function")try{k.webkitEnterFullscreen()}catch{}},ma=u=>{u.preventDefault(),u.stopPropagation();let k=o.current;if((!k||k.paused)&&b){b(u);return}z({x:u.clientX,y:u.clientY})},fa=[.25,.5,.75,1,1.25,1.5,1.75,2],Oe=_>0?T/_*100:0,ga=_>0?x/_*100:0,Ue=(()=>{let{enabled:u,start:k,end:U}=s.ab;return!u||!_||!(U>k)?null:{left:`${k/_*100}%`,width:`${(U-k)/_*100}%`}})(),ha=P||g===0?e.createElement(j.VolumeX,null):g<.5?e.createElement(j.Volume1,null):e.createElement(j.Volume2,null);return e.createElement("div",{ref:m,className:"vajax-bs-player"+(E?"":" vajax-bs-player--idle"),onContextMenu:ma},e.createElement("video",{id:"vajax-bs-video",ref:o,src:De,playsInline:!0,onClick:_e,onDoubleClick:$e}),!p&&e.createElement("div",{className:"vajax-bs-bigplay",onClick:_e},e.createElement("button",{type:"button",className:"vajax-bs-bigplay__btn","aria-label":"Play"},e.createElement(j.Play,{size:"34"}))),e.createElement("div",{className:"vajax-bs-controls"},e.createElement("div",{className:"vajax-bs-progress",onClick:ca,onMouseMove:ua,onMouseLeave:pa},e.createElement("div",{className:"vajax-bs-progress__track"},Ue&&e.createElement("div",{className:"vajax-bs-progress__loop",style:Ue}),e.createElement("div",{className:"vajax-bs-progress__buffer",style:{width:`${ga}%`}}),e.createElement("div",{className:"vajax-bs-progress__fill",style:{width:`${Oe}%`}}),t.map((u,k)=>u.seconds==null?null:e.createElement("div",{key:k,className:"vajax-bs-progress__marker",style:{left:`${u.seconds/(_||1)*100}%`},title:`O @ ${V(u.seconds)}`,onClick:U=>{U.stopPropagation(),da(u.seconds)}})),e.createElement("div",{className:"vajax-bs-progress__thumb",style:{left:`${Oe}%`}}))),d!=null&&_>0&&(()=>{let u=Je(f,d),k=d/_*100;return e.createElement("div",{className:"vajax-bs-tlpreview",style:{left:`${k}%`}},u?e.createElement("div",{className:"vajax-bs-tlpreview__thumb",style:{width:u.w,height:u.h,backgroundImage:`url(${f.spriteUrl})`,backgroundPosition:`-${u.x}px -${u.y}px`}}):e.createElement("div",{className:"vajax-bs-tlpreview__thumb vajax-bs-tlpreview__thumb--empty"}),e.createElement("div",{className:"vajax-bs-tlpreview__time"},V(d)))})(),e.createElement("div",{className:"vajax-bs-ctrl-row"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>he&&l(he),disabled:!he,title:he?"Previous scene in queue":"No previous scene"},e.createElement(j.SkipPrev,null)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:_e,title:p?"Pause (Space)":"Play (Space)"},p?e.createElement(j.Pause,null):e.createElement(j.Play,null)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>je&&l(je),disabled:!je,title:je?"Next scene in queue":"No next scene"},e.createElement(j.SkipNext,null)),e.createElement("div",{className:"vajax-bs-volume"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:ba,title:"Mute (m)"},ha),e.createElement("div",{className:"vajax-bs-volume__slider"},e.createElement("input",{type:"range",min:0,max:1,step:.01,value:P?0:g,onChange:u=>va(parseFloat(u.target.value)),className:"vajax-bs-volume__input"}))),e.createElement("div",{className:"vajax-bs-time"},V(T)," ",e.createElement("span",{className:"vajax-bs-time__dim"},"/ ",V(_))),e.createElement("div",{className:"vajax-bs-spacer"}),e.createElement("button",{type:"button",className:"vajax-bs-btn vajax-bs-btn--o",onClick:n,title:"Record O at current time (o)"},e.createElement(j.Heart,null),e.createElement("span",{className:"vajax-bs-btn__badge"},a?.o_counter||0)),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:()=>i("queue"),title:"Queue"},e.createElement(j.List,null)),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn"+(de||s.whole||s.ab.enabled?" vajax-bs-btn--active":""),onClick:u=>{u.stopPropagation(),re(k=>!k),F(!1),K(!1),X(!1)},title:"Loop settings"},e.createElement(j.Loop,null)),de&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:u=>u.stopPropagation(),style:{minWidth:220}},e.createElement("div",{className:"vajax-bs-dropdown__label"},"Loop whole video"),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Enabled"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.whole?" vajax-bs-toggle--on":""),onClick:()=>r({...s,whole:!s.whole}),role:"switch","aria-checked":String(!!s.whole)})),e.createElement("div",{className:"vajax-bs-dropdown__label"},"A/B loop"),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Enabled"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.ab.enabled?" vajax-bs-toggle--on":""),onClick:()=>r({...s,ab:{...s.ab,enabled:!s.ab.enabled}}),role:"switch","aria-checked":String(!!s.ab.enabled)})),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"Start"),e.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.75rem",color:"#cfe1ff"}},V(s.ab.start)),e.createElement("button",{type:"button",className:"vajax-bs-mini",style:{padding:"2px 6px",fontSize:"0.7rem"},onClick:()=>r({...s,ab:{...s.ab,start:T}})},"set"))),e.createElement("div",{className:"vajax-bs-dropdown__row"},e.createElement("span",null,"End"),e.createElement("div",{style:{display:"flex",gap:4,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.75rem",color:"#cfe1ff"}},V(s.ab.end)),e.createElement("button",{type:"button",className:"vajax-bs-mini",style:{padding:"2px 6px",fontSize:"0.7rem"},onClick:()=>r({...s,ab:{...s.ab,end:T}})},"set"))))),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:u=>{u.stopPropagation(),F(k=>!k),K(!1),X(!1),re(!1)},title:"Playback speed"},e.createElement("span",{className:"vajax-bs-btn__label"},A,"\xD7")),B&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:u=>u.stopPropagation()},fa.map(u=>e.createElement("button",{key:u,type:"button",className:"vajax-bs-dropdown__item"+(Math.abs(u-A)<.01?" vajax-bs-dropdown__item--selected":""),onClick:()=>xa(u)},u,"\xD7")))),Te.length>1&&e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:u=>{u.stopPropagation(),K(k=>!k),F(!1),X(!1),re(!1)},title:"Video source"},e.createElement(j.Film,null)),D&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:u=>u.stopPropagation()},Te.map((u,k)=>e.createElement("button",{key:k,type:"button",className:"vajax-bs-dropdown__item"+(k===h?" vajax-bs-dropdown__item--selected":""),onClick:()=>{y(k),K(!1)}},u.label||u.mime_type||`Stream ${k+1}`)))),e.createElement("div",{className:"vajax-bs-dropdown"},e.createElement("button",{type:"button",className:"vajax-bs-btn"+(ee?" vajax-bs-btn--active":""),onClick:u=>{u.stopPropagation(),X(k=>!k),F(!1),K(!1),re(!1)},title:"Settings"},e.createElement(j.Gear,null)),ee&&e.createElement("div",{className:"vajax-bs-dropdown__menu",onClick:u=>u.stopPropagation()},e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{X(!1),i("settings")}},e.createElement(j.Gear,null)," Player settings"),e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{X(!1),i("debug")}},e.createElement(j.Info,null)," For Nerds"),e.createElement("button",{type:"button",className:"vajax-bs-dropdown__item",onClick:()=>{X(!1),i("help")}},e.createElement(j.Bookmark,null)," Help & Shortcuts"))),e.createElement("button",{type:"button",className:"vajax-bs-btn",onClick:$e,title:"Fullscreen (f)"},G?e.createElement(j.Minimize,null):e.createElement(j.Maximize,null)))),S&&e.createElement(ia,{x:S.x,y:S.y,onClose:()=>z(null),items:[{label:p?"Pause":"Play",icon:p?e.createElement(j.Pause,null):e.createElement(j.Play,null),hint:"Space",onClick:_e},{label:"Record O",icon:e.createElement(j.Heart,null),hint:"O",onClick:n},{separator:!0},{label:"Queue",icon:e.createElement(j.List,null),onClick:()=>i("queue")},{label:"Settings",icon:e.createElement(j.Gear,null),onClick:()=>i("settings")},{label:"For Nerds",icon:e.createElement(j.Info,null),onClick:()=>i("debug")},{label:"Help & Shortcuts",icon:e.createElement(j.Bookmark,null),onClick:()=>i("help")},{separator:!0},{label:"Copy current time",icon:e.createElement(j.Clock,null),onClick:()=>le(V(T))},{label:"Copy stream URL",icon:e.createElement(j.Url,null),onClick:()=>le(De)},{label:"Copy scene ID",icon:e.createElement(j.List,null),onClick:()=>le(a?.id||"")},{separator:!0},{label:G?"Exit fullscreen":"Fullscreen",icon:G?e.createElement(j.Minimize,null):e.createElement(j.Maximize,null),hint:"F",onClick:$e}]}))}function Xa(a,t,s){let r=Math.max(0,(s||0)-(a||[]).length);if(r===0)return[];let n=(t||[]).slice(),i=new Array(n.length).fill(!1),l=3e4;for(let o of a){if(!o.createdAt)continue;let d=new Date(o.createdAt).getTime();if(isNaN(d))continue;let v=-1,f=l;for(let m=0;m<n.length;m++){if(i[m])continue;let p=new Date(n[m]).getTime();if(isNaN(p))continue;let w=Math.abs(p-d);w<f&&(f=w,v=m)}v>=0&&(i[v]=!0)}let b=[];for(let o=0;o<n.length;o++)i[o]||b.push(n[o]);return b.sort((o,d)=>new Date(d)-new Date(o)),b.slice(0,r)}function Ya({scene:a,marks:t,onRefresh:s,onSeek:r,busy:n,setBusy:i}){let[l,b]=e.useState(null),[o,d]=e.useState(""),v=async()=>{if(!n){i(!0);try{let c=document.getElementById("vajax-bs-video"),g=c?c.currentTime:null;await Ze(a.id),await ie.addOTimestamp(a.id,g,"unified"),await s(),O(`Recorded O @ ${V(g||0)}`)}catch(c){console.warn(c),O("Failed to record",!0)}finally{i(!1)}}},f=async c=>{if(!n){i(!0);try{await Sa(a.id),c._kind==="real"&&await ie.removeOTimestamp(a.id,c._idx),await s()}catch(g){console.warn(g),O("Failed to remove",!0)}finally{i(!1)}}},m=c=>{c!=null&&typeof r=="function"&&r(c)},p=c=>{b(c._key),d(c.seconds!=null?V(c.seconds):"")},w=()=>{b(null),d("")},T=async c=>{let g=Oa(o);if(g==null){O("Invalid time (try 1:23 or 83)",!0),w();return}i(!0);try{c._kind==="real"?await ie.updateTimestamp(a.id,c._idx,g):await ie.addOTimestamp(a.id,g,"preexisting"),await s(),O(`Saved @ ${V(g)}`)}catch(C){console.warn(C)}finally{i(!1),w()}},M=t.map((c,g)=>({...c,_kind:"real",_idx:g,_key:`r-${g}`})),$=Xa(t,a.o_history||[],a.o_counter||0).map((c,g)=>({_kind:"ph",_key:`ph-${g}`,seconds:null,createdAt:c,source:"preexisting"})),x=[...M,...$];return e.createElement("div",{className:"vajax-bs-otimeline"},e.createElement("div",{className:"vajax-bs-otimeline__actions"},e.createElement("button",{type:"button",className:"vajax-bs-otimeline__btn",onClick:v,disabled:n},e.createElement(j.Plus,null)," Record current time")),x.length===0?e.createElement("div",{className:"vajax-bs-otimeline__empty"},"No O timestamps recorded yet."):e.createElement("ul",{className:"vajax-bs-otimeline__list"},x.map(c=>{let g=l===c._key,C=c.seconds!=null,P=c._kind==="ph";return e.createElement("li",{key:c._key,className:"vajax-bs-otimeline__item"+(P?" vajax-bs-otimeline__item--ph":"")},g?e.createElement("input",{autoFocus:!0,type:"text",className:"vajax-bs-otimeline__edit",value:o,onChange:I=>d(I.target.value),onKeyDown:I=>{I.key==="Enter"&&T(c),I.key==="Escape"&&w()},onBlur:()=>T(c),placeholder:"0:00"}):C?e.createElement("button",{type:"button",className:"vajax-bs-otimeline__time",onClick:()=>m(c.seconds),onDoubleClick:I=>{I.preventDefault(),p(c)},title:"Click: seek \xB7 Double-click: edit"},V(c.seconds)):e.createElement("button",{type:"button",className:"vajax-bs-otimeline__noTime",onClick:()=>p(c),title:"Set a timestamp for this O"},"set time"),e.createElement("div",{className:"vajax-bs-otimeline__meta"},e.createElement("div",{className:"vajax-bs-otimeline__ago"},P&&e.createElement("span",{className:"vajax-bs-otimeline__chip"},"Pre Plugin"),c.createdAt?sa(c.createdAt):"\u2014"),e.createElement("div",{className:"vajax-bs-otimeline__date"},c.createdAt?Ce(c.createdAt):"No date recorded")),e.createElement("button",{type:"button",className:"vajax-bs-otimeline__remove",onClick:()=>f(c),title:"Remove this O",disabled:n},e.createElement(j.Close,null)))})))}function Ja({performer:a,compact:t=!1}){let s=null;if(a.birthdate){let v=new Date(a.birthdate),f=new Date;s=f.getFullYear()-v.getFullYear();let m=f.getMonth()-v.getMonth();(m<0||m===0&&f.getDate()<v.getDate())&&s--,(s<0||s>150)&&(s=null)}let r=[];s!=null&&r.push(`${s} y/o`),a.country&&r.push(a.country),a.ethnicity&&r.push(a.ethnicity);let n=[];a.height_cm&&n.push(`${a.height_cm} cm`),a.weight&&n.push(`${a.weight} kg`),a.measurements&&n.push(a.measurements);let i=[];a.hair_color&&i.push(`Hair: ${a.hair_color}`),a.eye_color&&i.push(`Eyes: ${a.eye_color}`);let l=[];a.tattoos&&l.push(`Tattoos: ${a.tattoos}`),a.piercings&&l.push(`Piercings: ${a.piercings}`);let b=a.career_length?`Career: ${a.career_length}`:null,o=Array.isArray(a.alias_list)&&a.alias_list.length>0?`Also known as: ${a.alias_list.join(", ")}`:null,d=e.createElement(e.Fragment,null,a.disambiguation&&e.createElement("p",{className:"vajax-bs-performer__disambig"},a.disambiguation),r.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},r.join(" \xB7 ")),n.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},n.join(" \xB7 ")),i.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},i.join(" \xB7 ")),l.length>0&&e.createElement("p",{className:"vajax-bs-performer__detail"},l.join(" \xB7 ")),b&&e.createElement("p",{className:"vajax-bs-performer__detail"},b),o&&e.createElement("p",{className:"vajax-bs-performer__detail"},o));return e.createElement("a",{className:"vajax-bs-performer"+(t?" vajax-bs-performer--compact":""),href:`/performers/${a.id}`},e.createElement("img",{className:"vajax-bs-performer__img",src:a.image_path||"",alt:a.name,loading:"lazy",onError:v=>{v.currentTarget.style.visibility="hidden"}}),e.createElement("div",{className:"vajax-bs-performer__info"},e.createElement("h4",{className:"vajax-bs-performer__name"},e.createElement("span",{className:"vajax-bs-performer__name-text"},a.name),a.favorite&&e.createElement("span",{className:"vajax-bs-performer__fav",title:"Favorite"},e.createElement(Ie,{filled:!0}))),t?e.createElement("div",{className:"vajax-bs-performer__details"},d):d))}function Ie({filled:a}){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:a?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{display:"block"}},e.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}))}function Za({scene:a,onUpdateScene:t,onOpenModal:s}){let[r,n]=e.useState(!1),i=a.rating100?Math.round(a.rating100/20):0,l=async o=>{if(!r){n(!0);try{let d=o===i?null:o*20;await Ne(a.id,{rating100:d}),await t()}catch(d){console.warn(d),O("Failed to update rating",!0)}finally{n(!1)}}},b=async()=>{if(!r){n(!0);try{await Ne(a.id,{organized:!a.organized}),await t()}catch(o){console.warn(o),O("Failed to update organized",!0)}finally{n(!1)}}};return e.createElement("div",{className:"vajax-bs-scene-toolbar"},e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static vajax-bs-rating"},[1,2,3,4,5].map(o=>e.createElement("button",{key:o,type:"button",className:"vajax-bs-rating__star"+(o<=i?" vajax-bs-rating__star--on":""),onClick:()=>l(o),disabled:r,title:`Set rating to ${o}`},e.createElement(Ie,{filled:o<=i}))),i>0&&e.createElement("button",{type:"button",className:"vajax-bs-rating__clear",onClick:()=>l(i),title:"Clear rating",disabled:r},e.createElement(j.Close,null))),e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static"},e.createElement(j.PlayCount,null),e.createElement("span",{className:"vajax-bs-chip__value"},a.play_count||0)),e.createElement("div",{className:"vajax-bs-chip vajax-bs-chip--static vajax-bs-chip--o"},e.createElement(j.Heart,null),e.createElement("span",{className:"vajax-bs-chip__value"},a.o_counter||0)),e.createElement("button",{type:"button",className:"vajax-bs-chip"+(a.organized?" vajax-bs-chip--organized":""),onClick:b,disabled:r,title:"Toggle organized"},e.createElement(j.Check,null),e.createElement("span",null,a.organized?"Organized":"Not organized")),e.createElement("div",{className:"vajax-bs-spacer"}),e.createElement("button",{type:"button",className:"vajax-bs-chip",onClick:()=>s("edit"),title:"Edit scene"},e.createElement(j.Pencil,null)," Edit"))}function Ra({scene:a,marks:t,busy:s,setBusy:r,onRefresh:n,onSeek:i,onOpenModal:l}){let b=a.studio,o=a.performers||[],d=a.tags||[],v=(a.groups||[]).map(M=>M.group).filter(Boolean),f=[];a.date&&f.push(a.date),b&&f.push(b.name),v.length>0&&f.push(`${v.length} group${v.length>1?"s":""}`);let m=a.files?.[0],p=m?.duration,w=m?.width&&m?.height?`${m.width}\xD7${m.height}`:null,T=m?.frame_rate;return e.createElement("div",{className:"vajax-bs-sidepanel"},e.createElement("div",{className:"vajax-bs-toolbar"},e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>l("fileinfo")},e.createElement(j.Info,null)," File Info"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>l("markers")},e.createElement(j.Bookmark,null)," Markers"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>l("queue")},e.createElement(j.List,null)," Queue"),e.createElement("button",{type:"button",className:"vajax-bs-toolbar__btn",onClick:()=>l("history")},e.createElement(j.Clock,null)," History")),e.createElement("div",{className:"vajax-bs-header"},e.createElement("h1",{className:"vajax-bs-header__title"},Ee(a)),e.createElement("div",{className:"vajax-bs-header__sub"},e.createElement("span",{className:"vajax-bs-header__id"},"ID: ",a.id),f.map((M,_)=>e.createElement(e.Fragment,{key:_},e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,M))),p&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,V(p))),w&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,w)),T&&e.createElement(e.Fragment,null,e.createElement("span",{className:"vajax-bs-header__sep"},"\xB7"),e.createElement("span",null,T," fps")))),e.createElement(Za,{scene:a,onUpdateScene:n,onOpenModal:l}),e.createElement("div",{className:"vajax-bs-details"},o.length>0&&e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Performers"),e.createElement("div",{className:"vajax-bs-performers"+(o.length>4?" vajax-bs-performers--compact":"")},o.map(M=>e.createElement(Ja,{key:M.id,performer:M,compact:o.length>4})))),d.length>0&&e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Tags"),e.createElement("div",{className:"vajax-bs-tags"},d.map(M=>e.createElement("a",{key:M.id,className:"vajax-bs-tag",href:`/tags/${M.id}`},M.name)))),e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"O Timeline"),e.createElement(Ya,{scene:a,marks:t,onRefresh:n,onSeek:i,busy:s,setBusy:r})),e.createElement("div",null,e.createElement("h3",{className:"vajax-bs-details__section-title"},"Details"),e.createElement("dl",{className:"vajax-bs-meta"},b&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Studio"),e.createElement("dd",null,e.createElement("a",{href:`/studios/${b.id}`},b.name))),a.date&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Date"),e.createElement("dd",null,a.date)),a.details&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Description"),e.createElement("dd",{title:a.details},a.details)),a.created_at&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Created"),e.createElement("dd",null,Ce(a.created_at))),a.updated_at&&e.createElement(e.Fragment,null,e.createElement("dt",null,"Updated"),e.createElement("dd",null,Ce(a.updated_at)))))))}function fe({label:a,endpoint:t,getLabel:s,value:r,onChange:n,multi:i=!0,placeholder:l}){let[b,o]=e.useState(""),[d,v]=e.useState([]),[f,m]=e.useState(!1),[p,w]=e.useState(null),[T,M]=e.useState({top:0,left:0}),_=e.useRef(null),$=e.useRef(null),x=e.useRef(null);e.useEffect(()=>{if(!f)return;let N=b.trim();if(N.length<1){v([]);return}let h=!1,y=setTimeout(async()=>{try{let E=await Q(t.query,{q:N,limit:12});if(h)return;let L=t.extract(E)||[];v(L)}catch(E){console.warn(E),v([])}},200);return()=>{h=!0,clearTimeout(y)}},[b,f,t]);let c=i?r||[]:r?[r]:[],g=N=>{i?c.find(h=>h.id===N.id)||n([...c,N]):(n(N),m(!1)),o(""),v([]),w(null)},C=N=>{n(i?c.filter(h=>h.id!==N):null)},P=e.useCallback(N=>{let L=window.innerWidth,B=window.innerHeight,F=N.right+12;F+240>L-8&&(F=Math.max(8,N.left-240-12));let D=N.top;return D+240>B-8&&(D=Math.max(8,B-240-8)),{top:D,left:F}},[]),I=N=>{$.current&&clearTimeout($.current),x.current&&clearTimeout(x.current),$.current=setTimeout(()=>{let h=_.current;if(!h)return;let y=h.getBoundingClientRect();M(P(y)),w(N)},120)},A=()=>{x.current&&clearTimeout(x.current)},Y=()=>{x.current&&clearTimeout(x.current),x.current=setTimeout(()=>w(null),120)};e.useEffect(()=>{if(!p)return;let N=()=>{let y=_.current;y&&M(P(y.getBoundingClientRect()))};window.addEventListener("scroll",N,!0),window.addEventListener("resize",N);let h=setInterval(N,200);return()=>{window.removeEventListener("scroll",N,!0),window.removeEventListener("resize",N),clearInterval(h)}},[p,P]);let G=N=>{if(!N)return null;let h=N.image_path||N.paths?.cover||N.front_image_path||null,y=s(N),E=[];if(N.birthdate){let L=new Date(N.birthdate),B=new Date,F=B.getFullYear()-L.getFullYear(),D=B.getMonth()-L.getMonth();(D<0||D===0&&B.getDate()<L.getDate())&&F--,F>0&&F<150&&E.push(`${F} years old`)}if(N.gender){let L={MALE:"Male",FEMALE:"Female",TRANSGENDER_MALE:"Trans male",TRANSGENDER_FEMALE:"Trans female",INTERSEX:"Intersex",NON_BINARY:"Non-binary"};E.push(L[N.gender]||N.gender)}return N.disambiguation&&E.push(N.disambiguation),N.description&&E.push(N.description),ue.createPortal(e.createElement("div",{className:"vajax-bs-hovercard",style:{position:"fixed",top:T.top,left:T.left,zIndex:2147483647},onMouseEnter:A,onMouseLeave:Y},h?e.createElement("img",{src:h,alt:y,className:"vajax-bs-hovercard__img",onError:L=>{L.currentTarget.style.display="none"}}):e.createElement("div",{className:"vajax-bs-hovercard__img vajax-bs-hovercard__img--empty"}),e.createElement("div",{className:"vajax-bs-hovercard__body"},e.createElement("div",{className:"vajax-bs-hovercard__name"},y),E.length>0&&e.createElement("div",{className:"vajax-bs-hovercard__meta"},E.filter(Boolean).join(" \xB7 ")))),document.body)};return e.createElement("div",{className:"vajax-bs-picker"},i&&c.length>0&&e.createElement("div",{className:"vajax-bs-picker__chips"},c.map(N=>e.createElement("span",{key:N.id,className:"vajax-bs-picker__chip"},s(N),e.createElement("button",{type:"button",onClick:()=>C(N.id),title:"Remove"},e.createElement(j.Close,null))))),!i&&c.length>0&&!f&&e.createElement("div",{className:"vajax-bs-picker__chips"},e.createElement("span",{className:"vajax-bs-picker__chip"},s(c[0]),e.createElement("button",{type:"button",onClick:()=>C(c[0].id),title:"Remove"},e.createElement(j.Close,null)))),e.createElement("input",{ref:_,type:"text",className:"vajax-bs-picker__input",placeholder:l||`Search ${a}...`,value:b,onChange:N=>{o(N.target.value),m(!0)},onFocus:()=>m(!0),onBlur:()=>setTimeout(()=>{m(!1),w(null)},200)}),f&&d.length>0&&e.createElement("div",{className:"vajax-bs-picker__menu"},d.map(N=>e.createElement("button",{key:N.id,type:"button",className:"vajax-bs-picker__item",onMouseDown:h=>h.preventDefault(),onMouseEnter:()=>I(N),onMouseLeave:Y,onClick:()=>g(N)},s(N)))),p&&G(p))}function et({scene:a,videoRef:t,loopSettings:s,onUpdateLoop:r,onClose:n,onOpenModal:i}){let[l,b]=e.useState(1),[o,d]=e.useState(1),[v,f]=e.useState(!1),[m,p]=e.useState(0),[w,T]=e.useState(!1),[M,_]=e.useState(0);e.useEffect(()=>{let x=t.current;if(!x)return;let c=()=>{b(x.playbackRate),d(x.volume),f(x.muted),T(!x.paused),_(x.currentTime)};c();let g=setInterval(c,300);return()=>clearInterval(g)},[t]);let $=a?.sceneStreams||[];return e.createElement(se,{title:"Player settings",onClose:n},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Video source"),e.createElement("select",{className:"vajax-bs-select",value:m,onChange:x=>{let c=Number(x.target.value);p(c);let g=t.current;if(g){let C=$[c]?.url;C&&(g.src=C,g.load())}}},$.length===0&&e.createElement("option",{value:0},"Loading\u2026"),$.map((x,c)=>e.createElement("option",{key:c,value:c},x.label||x.mime_type||`Stream ${c+1}`)))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Playback"),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Play state"),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>{let x=t.current;x&&(x.paused?x.play().catch(()=>{}):x.pause())}},w?e.createElement(e.Fragment,null,e.createElement(j.Pause,null)," Pause"):e.createElement(e.Fragment,null,e.createElement(j.Play,null)," Play"))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Speed"),e.createElement("select",{className:"vajax-bs-select",style:{width:"auto"},value:l,onChange:x=>{let c=t.current;c&&(c.playbackRate=parseFloat(x.target.value))}},[.25,.5,.75,1,1.25,1.5,1.75,2].map(x=>e.createElement("option",{key:x,value:x},x,"\xD7")))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Volume"),e.createElement("input",{type:"range",min:0,max:1,step:.01,value:v?0:o,onChange:x=>{let c=t.current;if(!c)return;let g=parseFloat(x.target.value);c.volume=g,c.muted=g===0},style:{width:120}}))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Loop"),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"Loop whole video"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.whole?" vajax-bs-toggle--on":""),onClick:()=>r({...s,whole:!s.whole}),role:"switch","aria-checked":String(!!s.whole)})),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"A/B loop"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(s.ab.enabled?" vajax-bs-toggle--on":""),onClick:()=>r({...s,ab:{...s.ab,enabled:!s.ab.enabled}}),role:"switch","aria-checked":String(!!s.ab.enabled)})),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"A (start)"),e.createElement("div",{style:{display:"flex",gap:6,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",color:"#cfe1ff"}},V(s.ab.start)),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>r({...s,ab:{...s.ab,start:M}})},"Set current"))),e.createElement("div",{className:"vajax-bs-row"},e.createElement("span",{className:"vajax-bs-row__label"},"B (end)"),e.createElement("div",{style:{display:"flex",gap:6,alignItems:"center"}},e.createElement("span",{style:{fontFamily:"ui-monospace, monospace",fontSize:"0.8rem",color:"#cfe1ff"}},V(s.ab.end)),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>r({...s,ab:{...s.ab,end:M}})},"Set current")))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Tools"),e.createElement("button",{type:"button",className:"vajax-bs-toolbtn",onClick:()=>i("debug")},e.createElement(j.Info,null)," For Nerds"),e.createElement("button",{type:"button",className:"vajax-bs-toolbtn",onClick:()=>i("help")},e.createElement(j.Bookmark,null)," Help & Shortcuts")))}function at({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=qe(t),n=e.useRef([]),i=e.useRef({bytes:0,time:0});return e.useEffect(()=>{let l=a.current,b=t.current;if(!l||!b||!s||!r)return;let o=b.getContext("2d"),d=0,v=0,f=()=>{v=requestAnimationFrame(f);let m=performance.now();if(m-d>=250){d=m;let $=l.webkitVideoDecodedByteCount||l.mozDecodedFrames||0,x=i.current;if(x.time>0&&$>=x.bytes){let c=(m-x.time)/1e3,g=$-x.bytes,C=c>0?g*8/c/1e3:0;C>=0&&C<1e6&&(n.current.push(C),n.current.length>160&&n.current.shift())}i.current={bytes:$,time:m}}let p=n.current;o.clearRect(0,0,s,r),o.strokeStyle="rgba(255, 255, 255, 0.05)",o.lineWidth=1;for(let $=1;$<4;$++){let x=r/4*$;o.beginPath(),o.moveTo(0,x),o.lineTo(s,x),o.stroke()}if(p.length<2){o.fillStyle="rgba(255,255,255,0.35)",o.font="11px ui-monospace, monospace",o.fillText("Waiting for playback data\u2026",8,r/2+4);return}let w=Math.max(...p,2e3),T=s/(p.length-1);o.beginPath(),p.forEach(($,x)=>{let c=x*T,g=r-$/w*r;x===0?o.moveTo(c,g):o.lineTo(c,g)}),o.strokeStyle="#7eb3ff",o.lineWidth=1.5,o.stroke(),o.lineTo(s,r),o.lineTo(0,r),o.closePath();let M=o.createLinearGradient(0,0,0,r);M.addColorStop(0,"rgba(126,179,255,0.35)"),M.addColorStop(1,"rgba(126,179,255,0.02)"),o.fillStyle=M,o.fill();let _=p[p.length-1];o.fillStyle="rgba(207,225,255,0.85)",o.font="10px ui-monospace, monospace",o.fillText(`${_.toFixed(0)} kbps`,8,14),o.fillStyle="rgba(255, 255, 255, 0.4)",o.fillText(`peak ${w.toFixed(0)}`,8,26)};return f(),()=>cancelAnimationFrame(v)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph"})}function tt({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=qe(t);return e.useEffect(()=>{let n=a.current,i=t.current;if(!n||!i||!s||!r)return;let l=Ga(n);if(!l){let x=i.getContext("2d");x.fillStyle="rgba(255,255,255,0.35)",x.font="11px ui-monospace, monospace",x.fillText("Spectrum unavailable (audio context blocked)",8,r/2);return}let{left:b,right:o}=l,d=i.getContext("2d"),v=b.frequencyBinCount,f=new Uint8Array(v),m=new Uint8Array(v),p=new Uint8Array(b.fftSize),w=new Uint8Array(o.fftSize),T=0,M=x=>{let c=0;for(let C=0;C<x.length;C++){let P=(x[C]-128)/128;c+=P*P}let g=Math.sqrt(c/x.length);return g<=0?-1/0:20*Math.log10(g)},_=(x,c,g,C)=>{let P=Math.min(v,96),I=s/P;for(let A=0;A<P;A++){let Y=Math.floor(Math.pow(A/P,1.6)*v),G=x[Y]/255,N=G*g*.95,h=190+A/P*130+C,y=22+G*45;d.fillStyle=`hsl(${h}, 78%, ${y}%)`,d.fillRect(A*I+.5,c+g-N,Math.max(1,I-1),N)}},$=()=>{T=requestAnimationFrame($),b.getByteFrequencyData(f),o.getByteFrequencyData(m),b.getByteTimeDomainData(p),o.getByteTimeDomainData(w),d.clearRect(0,0,s,r),d.strokeStyle="rgba(255, 255, 255, 0.05)";for(let P=1;P<4;P++){let I=r/4*P;d.beginPath(),d.moveTo(0,I),d.lineTo(s,I),d.stroke()}let x=(r-20)/2;_(f,18,x,0),_(m,18+x,x,15);let c=M(p),g=M(w),C=P=>isFinite(P)?`${P.toFixed(1)} dB`:"-\u221E dB";d.font="10px ui-monospace, monospace",d.fillStyle="rgba(207,225,255,0.85)",d.fillText(`L  ${C(c)}`,6,12),d.fillStyle="rgba(255,138,163,0.85)",d.fillText(`R  ${C(g)}`,s-70,12)};return $(),()=>cancelAnimationFrame(T)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph",style:{height:110}})}function st({videoRef:a}){let t=e.useRef(null),{w:s,h:r}=qe(t),n=e.useRef([]),i=e.useRef({frames:0,dropped:0,time:0});return e.useEffect(()=>{let l=a.current,b=t.current;if(!l||!b||!s||!r)return;let o=b.getContext("2d"),d=0,v=0,f=()=>{v=requestAnimationFrame(f);let m=performance.now();if(m-d>=500){d=m;let _=l.getVideoPlaybackQuality?.();if(_){let $=i.current,x=$.time>0?(m-$.time)/1e3:0;if(x>0){let c=_.totalVideoFrames-$.frames,g=_.droppedVideoFrames-$.dropped,C=c/x,P=c>0?g/c*100:0;n.current.push({fps:C,dropPct:P}),n.current.length>120&&n.current.shift()}i.current={frames:_.totalVideoFrames,dropped:_.droppedVideoFrames,time:m}}}let p=n.current;o.clearRect(0,0,s,r),o.strokeStyle="rgba(255, 255, 255, 0.05)";for(let _=1;_<4;_++){let $=r/4*_;o.beginPath(),o.moveTo(0,$),o.lineTo(s,$),o.stroke()}if(p.length<2)return;let w=Math.max(60,...p.map(_=>_.fps)),T=s/(p.length-1);o.beginPath(),p.forEach((_,$)=>{let x=$*T,c=r-_.fps/w*r;$===0?o.moveTo(x,c):o.lineTo(x,c)}),o.strokeStyle="#7eb3ff",o.lineWidth=1.5,o.stroke(),o.beginPath(),p.forEach((_,$)=>{let x=$*T,c=r-_.dropPct/100*r;$===0?o.moveTo(x,c):o.lineTo(x,c)}),o.strokeStyle="rgba(233,69,96,0.85)",o.lineWidth=1.2,o.stroke();let M=p[p.length-1];o.fillStyle="rgba(207,225,255,0.85)",o.font="10px ui-monospace, monospace",o.fillText(`${M.fps.toFixed(1)} fps`,8,14),o.fillStyle="rgba(255,138,163,0.9)",o.fillText(`${M.dropPct.toFixed(2)}% dropped`,8,26)};return f(),()=>cancelAnimationFrame(v)},[a,s,r]),e.createElement("canvas",{ref:t,className:"vajax-bs-graph"})}function rt({scene:a,videoRef:t,onClose:s}){let[,r]=e.useState(0);e.useEffect(()=>{let T=setInterval(()=>r(M=>M+1),500);return()=>clearInterval(T)},[]);let n=t.current,i=a?.files?.[0]||{},l=n?.currentTime||0,b=n?.duration||0,o=b>0?l/b*100:0,d=0;if(n?.buffered&&n.buffered.length>0){for(let T=0;T<n.buffered.length;T++)if(l>=n.buffered.start(T)&&l<=n.buffered.end(T)){d=n.buffered.end(T)-l;break}}let v={0:"EMPTY",1:"IDLE",2:"LOADING",3:"NO_SOURCE"},f={0:"NOTHING",1:"METADATA",2:"CURRENT",3:"FUTURE",4:"ENOUGH"},m=n?.getVideoPlaybackQuality?.(),p=m&&m.totalVideoFrames>0?(m.droppedVideoFrames/m.totalVideoFrames*100).toFixed(2):"0.00",w=[["Time",`${We(l)} / ${We(b)}`],["Progress",`${o.toFixed(2)} %`],["Resolution",n?`${n.videoWidth} \xD7 ${n.videoHeight}`:"\u2014"],["Playback rate",n?`${n.playbackRate.toFixed(2)}\xD7`:"\u2014"],["Volume",n?`${Math.round(n.volume*100)} %${n.muted?" (muted)":""}`:"\u2014"],["Buffered ahead",`${d.toFixed(2)} s`],["Network state",n?v[n.networkState]||String(n.networkState):"\u2014"],["Ready state",n?f[n.readyState]||String(n.readyState):"\u2014"],["Total frames",m?m.totalVideoFrames.toLocaleString():"\u2014"],["Dropped frames",m?`${m.droppedVideoFrames.toLocaleString()} (${p} %)`:"\u2014"],["Video codec",i.video_codec||"\u2014"],["Audio codec",i.audio_codec||"\u2014"],["Bit rate",i.bit_rate?`${(i.bit_rate/1e6).toFixed(2)} mbps`:"\u2014"],["Frame rate",i.frame_rate?`${i.frame_rate} fps`:"\u2014"],["Dimensions",i.width&&i.height?`${i.width} \xD7 ${i.height}`:"\u2014"],["File size",i.size?ra(i.size):"\u2014"],["Path",i.path||"\u2014"]];return e.createElement(se,{title:"For Nerds",onClose:s,wide:!0},e.createElement("div",{className:"vajax-bs-graphs"},e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Bitrate (decoded bytes / s)"),e.createElement(at,{videoRef:t})),e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Audio spectrum"),e.createElement(tt,{videoRef:t})),e.createElement("div",{className:"vajax-bs-graphs__block"},e.createElement("div",{className:"vajax-bs-graphs__title"},"Frame rate & dropped frames"),e.createElement(st,{videoRef:t}))),e.createElement("div",{className:"vajax-bs-kv"},w.map(([T,M])=>e.createElement("div",{key:T,className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},T),e.createElement("span",{className:"vajax-bs-kv__value",title:String(M)},M)))))}var nt=[{keys:["Space"],desc:"Play / pause"},{keys:["\u2190"],desc:"Seek back 10s"},{keys:["\u2192"],desc:"Seek forward 10s"},{keys:["Shift","\u2190"],desc:"Seek back 5s"},{keys:["Shift","\u2192"],desc:"Seek forward 5s"},{keys:["Ctrl","\u2190"],desc:"Seek back 1 min"},{keys:["Ctrl","\u2192"],desc:"Seek forward 1 min"},{keys:["1-9"],desc:"Seek to 10-90% duration"},{keys:["["],desc:"Scrub back 10%"},{keys:["]"],desc:"Scrub forward 10%"},{keys:["\u2191"],desc:"Volume up 10%"},{keys:["\u2193"],desc:"Volume down 10%"},{keys:["m"],desc:"Toggle mute"},{keys:["f"],desc:"Toggle fullscreen"},{keys:["o"],desc:"Record O at current time"}];function ot({onClose:a}){return e.createElement(se,{title:"Help & Shortcuts",onClose:a},e.createElement("div",null,e.createElement("div",{className:"vajax-bs-help__title"},"Keyboard shortcuts"),nt.map((t,s)=>e.createElement("div",{key:s,className:"vajax-bs-help__row"},e.createElement("span",{className:"vajax-bs-help__keys"},t.keys.map((r,n)=>e.createElement("kbd",{key:n},r))),e.createElement("span",{className:"vajax-bs-help__desc"},t.desc)))))}function it({scene:a,videoRef:t,onClose:s}){let r=a?.files?.[0]||{},n=t.current?.src||a?.sceneStreams?.[0]?.url||"\u2014",i=r.fingerprints||[],l=i.find(d=>d.type==="oshash")?.value,b=i.find(d=>d.type==="phash")?.value,o=[["Stream",n,!0],["oshash",l||"\u2014"],["PHash",b||"\u2014"],["Path",r.path||"\u2014",!0],["File size",r.size?ra(r.size):"\u2014"],["Modification time",r.mod_time?new Date(r.mod_time).toLocaleString():"\u2014"],["Duration",r.duration?V(r.duration):"\u2014"],["Dimensions",r.width&&r.height?`${r.width} \xD7 ${r.height}`:"\u2014"],["Frame rate",r.frame_rate?`${r.frame_rate} fps`:"\u2014"],["Bit rate",r.bit_rate?`${(r.bit_rate/1e6).toFixed(2)} mbps`:"\u2014"],["Video codec",r.video_codec||"\u2014"],["Audio codec",r.audio_codec||"\u2014"]];return e.createElement(se,{title:"File Info",onClose:s},e.createElement("dl",{className:"vajax-bs-fileinfo"},o.map(([d,v,f])=>e.createElement(e.Fragment,{key:d},e.createElement("dt",null,d),e.createElement("dd",{title:String(v||"")},f&&v&&v!=="\u2014"?e.createElement("a",{href:v,target:"_blank",rel:"noopener noreferrer"},v):v)))))}function lt({scene:a,onSeek:t,onClose:s}){let r=a?.scene_markers||[];return e.createElement(se,{title:"Markers",onClose:s},r.length===0?e.createElement("div",{style:{color:"var(--vajax-bs-text-dim)",fontStyle:"italic",textAlign:"center",padding:24}},"No markers for this scene"):e.createElement("div",{className:"vajax-bs-markers"},r.map(n=>e.createElement("div",{key:n.id,className:"vajax-bs-marker-row",onClick:()=>t(n.seconds),title:"Click to seek"},e.createElement("span",{className:"vajax-bs-marker-row__time"},V(n.seconds)),e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("div",{className:"vajax-bs-marker-row__title"},n.title||"Untitled"),n.primary_tag&&e.createElement("div",{className:"vajax-bs-marker-row__tag"},n.primary_tag.name))))))}var ye=50;function dt({scene:a,queue:t,onNavigate:s,onClose:r}){let[n,i]=e.useState(()=>ta()),[l,b]=e.useState({}),[o,d]=e.useState(!1),[v,f]=e.useState(ye),m=String(a?.id||""),p=t.indexOf(m),w=e.useMemo(()=>{if(t.length===0)return[];if(p<0)return t;let x=t.slice(p),c=t.slice(0,p);return[...x,...c]},[t,p]),T=e.useMemo(()=>w.slice(0,v),[w,v]);e.useEffect(()=>{if(T.length===0)return;let x=T.filter(g=>!l[g]);if(x.length===0)return;let c=!1;return(async()=>{d(!0);try{let g=await Q(`query($ids: [Int!]!) {
            findScenes(scene_ids: $ids) {
              scenes {
                id
                title
                o_counter
                files { path duration }
                paths { screenshot }
                studio { id name }
                performers { id name }
              }
            }
          }`,{ids:x.map(Number)});if(c)return;let C={...l};for(let P of g.findScenes?.scenes||[])C[P.id]=P;b(C)}catch(g){console.warn("[Vajax BS] queue fetch failed",g)}finally{c||d(!1)}})(),()=>{c=!0}},[T.join(",")]),e.useEffect(()=>{f(ye)},[t.length,t[0]]);let M=x=>{let c={...n,[x]:!n[x]};i(c),Da(c)},_=()=>{Ia()},$=p>=0?`${p+1} / ${t.length}`:"not in queue";return e.createElement(se,{title:"Queue",onClose:r,wide:!0},e.createElement("div",{className:"vajax-bs-queue"},e.createElement("div",{className:"vajax-bs-queue__controls"},e.createElement("span",{style:{fontSize:"0.78rem",color:"var(--vajax-bs-text-dim)",cursor:"help"},title:t.length>0?`Current scene is position ${p+1} of ${t.length} in the active queue`:"No queue is active \u2014 start one from the scenes list"},t.length>0?`Position ${p+1} of ${t.length}`:"No queue active"),e.createElement("span",{style:{marginLeft:"auto",display:"flex",gap:6}},e.createElement("button",{type:"button",className:"vajax-bs-queue__ctrl",onClick:_,title:"Reload queue"},e.createElement(j.Repeat,null)))),e.createElement("div",{className:"vajax-bs-queue__settings"},e.createElement("div",{className:"vajax-bs-queue__settings-title"},"Queue Behavior"),[{key:"autoContinue",label:"Auto Continue",hint:"Automatically advance to the next scene when the video ends."},{key:"shuffleAfterNext",label:"Shuffle Next",hint:"Pick a random scene from the queue for the next play instead of the following item."},{key:"repeatOnEnd",label:"Repeat on End",hint:"After the last scene, restart the queue from the beginning. Locked on while Shuffle Next is enabled.",lockedBy:"shuffleAfterNext"},{key:"shuffleAfterRepeat",label:"Shuffle after Repeat",hint:"When repeating, shuffle the entire queue before restarting."}].map(x=>{let c=x.lockedBy&&n[x.lockedBy],g=c?!0:n[x.key];return e.createElement("label",{key:x.key,className:"vajax-bs-queue__setting",title:x.hint},e.createElement("span",{className:"vajax-bs-queue__setting-label"},x.label,c&&e.createElement("span",{className:"vajax-bs-queue__setting-lock",title:"Locked by Shuffle Next"},e.createElement(j.Lock,null))),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(g?" vajax-bs-toggle--on":""),onClick:()=>{c||M(x.key)},disabled:c,role:"switch","aria-checked":String(!!g)}))})),e.createElement("div",{className:"vajax-bs-queue__items"},t.length===0&&e.createElement("div",{className:"vajax-bs-queue__empty"},'No queue active. Start a queue from the scenes list (e.g. "Play Random").'),T.map((x,c)=>{let g=l[x],C=c===0,I=g?.files?.[0]?.duration;return e.createElement("div",{key:x,className:"vajax-bs-queue__item"+(C?" vajax-bs-queue__item--current":""),onClick:()=>s(x),role:"button",tabIndex:0},g?.paths?.screenshot?e.createElement("img",{className:"vajax-bs-queue__thumb",src:g.paths.screenshot,alt:"",loading:"lazy"}):e.createElement("div",{className:"vajax-bs-queue__thumb"}),e.createElement("div",{className:"vajax-bs-queue__meta"},e.createElement("div",{className:"vajax-bs-queue__title"},g?Ee(g):`Scene ${x}`),(g?.performers?.length>0||g?.studio?.name)&&e.createElement("div",{className:"vajax-bs-queue__sub"},g?.performers?.map(A=>A.name).join(", "),g?.performers?.length>0&&g?.studio?.name?" \xB7 ":"",g?.studio?.name||""),e.createElement("div",{className:"vajax-bs-queue__chips"},e.createElement("span",{className:"vajax-bs-queue__chip",title:"Scene ID"},"#",x),(g?.o_counter||0)>0&&e.createElement("span",{className:"vajax-bs-queue__chip vajax-bs-queue__chip--o",title:`O Count: ${g.o_counter}`},e.createElement(j.Heart,null),e.createElement("span",null,g.o_counter)),I?e.createElement("span",{className:"vajax-bs-queue__chip",title:`Duration: ${V(I)}`},e.createElement(j.Clock,null),e.createElement("span",null,V(I))):null)),C&&e.createElement("span",{className:"vajax-bs-queue__now"},"NOW"))}),v<w.length&&e.createElement("button",{type:"button",className:"vajax-bs-queue__ctrl",style:{width:"100%",height:32,marginTop:6},onClick:()=>f(x=>x+ye)},"Load ",Math.min(ye,w.length-v)," more (",v," / ",w.length,")"),o&&e.createElement("div",{className:"vajax-bs-queue__empty",style:{padding:8}},"Loading details\u2026"))))}function ct({scene:a,onClose:t}){let s=a?.play_history||[],r=a?.play_duration||0;return e.createElement(se,{title:"History",onClose:t},e.createElement("div",{className:"vajax-bs-kv",style:{marginBottom:12,paddingBottom:10,borderBottom:"1px solid var(--vajax-bs-surface-3)"}},e.createElement("div",{className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},"Total play count"),e.createElement("span",{className:"vajax-bs-kv__value"},a?.play_count||0)),e.createElement("div",{className:"vajax-bs-kv__row"},e.createElement("span",{className:"vajax-bs-kv__label"},"Total play duration"),e.createElement("span",{className:"vajax-bs-kv__value"},Ba(r)))),s.length===0?e.createElement("div",{style:{color:"var(--vajax-bs-text-dim)",fontStyle:"italic",textAlign:"center",padding:24}},"No play history"):e.createElement("div",{className:"vajax-bs-markers"},s.map((n,i)=>e.createElement("div",{key:i,className:"vajax-bs-marker-row vajax-bs-marker-row--static"},e.createElement("span",{className:"vajax-bs-marker-row__time"},i+1),e.createElement("div",{style:{flex:1,minWidth:0}},e.createElement("div",{className:"vajax-bs-marker-row__title"},sa(n)),e.createElement("div",{className:"vajax-bs-marker-row__tag"},Ce(n)))))))}var ut={query:`query($q: String!, $limit: Int) {
    findStudios(filter: { q: $q, per_page: $limit }) {
      studios { id name image_path }
    }
  }`,extract:a=>a.findStudios?.studios||[]},pt={query:`query($q: String!, $limit: Int) {
    findPerformers(filter: { q: $q, per_page: $limit }) {
      performers { id name image_path birthdate gender disambiguation }
    }
  }`,extract:a=>a.findPerformers?.performers||[]},bt={query:`query($q: String!, $limit: Int) {
    findTags(filter: { q: $q, per_page: $limit }) {
      tags { id name description }
    }
  }`,extract:a=>a.findTags?.tags||[]},vt={query:`query($q: String!, $limit: Int) {
    findGalleries(filter: { q: $q, per_page: $limit }) {
      galleries { id title paths { cover } }
    }
  }`,extract:a=>a.findGalleries?.galleries||[]},xt={query:`query($q: String!, $limit: Int) {
    findGroups(filter: { q: $q, per_page: $limit }) {
      groups { id name front_image_path }
    }
  }`,extract:a=>a.findGroups?.groups||[]};function mt({label:a,value:t,onChange:s,keyPlaceholder:r="key",valuePlaceholder:n="value"}){let i=Object.entries(t||{}),[l,b]=e.useState(""),[o,d]=e.useState(""),v=()=>{let p=l.trim();p&&(s({...t||{},[p]:o}),b(""),d(""))},f=p=>{let w={...t||{}};delete w[p],s(w)},m=(p,w)=>s({...t||{},[p]:w});return e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},a),i.map(([p,w])=>e.createElement("div",{key:p,className:"vajax-bs-url-row"},e.createElement("span",{style:{minWidth:80,fontFamily:"ui-monospace, monospace",fontSize:"0.78rem"}},p),e.createElement("input",{type:"text",className:"vajax-bs-input",value:typeof w=="string"?w:JSON.stringify(w),onChange:T=>m(p,T.target.value)}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>f(p),title:"Remove"},e.createElement(j.Trash,null)))),e.createElement("div",{className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",style:{maxWidth:120},value:l,onChange:p=>b(p.target.value),placeholder:r}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:o,onChange:p=>d(p.target.value),placeholder:n}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:v,title:"Add"},e.createElement(j.Plus,null))))}function ft({value:a,onChange:t}){let s=a||[],[r,n]=e.useState(""),[i,l]=e.useState(""),b=()=>{let d=r.trim(),v=i.trim();!d||!v||(t([...s,{endpoint:d,stash_id:v}]),n(""),l(""))},o=d=>t(s.filter((v,f)=>f!==d));return e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Stash IDs"),s.map((d,v)=>e.createElement("div",{key:v,className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:d.endpoint,onChange:f=>{let m=[...s];m[v]={...m[v],endpoint:f.target.value},t(m)},placeholder:"endpoint"}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:d.stash_id,onChange:f=>{let m=[...s];m[v]={...m[v],stash_id:f.target.value},t(m)},placeholder:"stash id"}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>o(v),title:"Remove"},e.createElement(j.Trash,null)))),e.createElement("div",{className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:r,onChange:d=>n(d.target.value),placeholder:"endpoint"}),e.createElement("input",{type:"text",className:"vajax-bs-input",value:i,onChange:d=>l(d.target.value),placeholder:"stash id"}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:b,title:"Add"},e.createElement(j.Plus,null))))}function gt({scene:a,onRefresh:t,onClose:s}){let[r,n]=e.useState(a.title||""),[i,l]=e.useState(a.details||""),[b,o]=e.useState(a.date||""),[d,v]=e.useState(a.code||""),[f,m]=e.useState(a.director||""),[p,w]=e.useState(a.rating100?Math.round(a.rating100/20):0),[T,M]=e.useState(!!a.organized),[_,$]=e.useState(a.studio||null),[x,c]=e.useState(a.performers||[]),[g,C]=e.useState(a.tags||[]),[P,I]=e.useState(a.galleries||[]),[A,Y]=e.useState((a.groups||[]).map(S=>({group:S.group,scene_index:S.scene_index??0}))),[G,N]=e.useState(Array.isArray(a.urls)?[...a.urls]:a.urls?[a.urls]:[]),[h,y]=e.useState(Array.isArray(a.stash_ids)?[...a.stash_ids]:[]),[E,L]=e.useState(()=>{if(!a.custom_fields)return{};if(typeof a.custom_fields=="string")try{return JSON.parse(a.custom_fields)}catch{return{}}return{...a.custom_fields}}),[B,F]=e.useState(!1),D=async()=>{F(!0);try{let S={id:a.id,title:r.trim()||null,details:i.trim()||null,date:b.trim()||null,code:d.trim()||null,director:f.trim()||null,rating100:p>0?p*20:null,organized:T,studio_id:_?.id||null,performer_ids:x.map(z=>z.id),tag_ids:g.map(z=>z.id),gallery_ids:P.map(z=>z.id),groups:A.map(z=>({group_id:z.group.id,scene_index:z.scene_index??0})),urls:G.filter(z=>z&&z.trim()),stash_ids:h.map(z=>({endpoint:z.endpoint?.trim(),stash_id:z.stash_id?.trim()})).filter(z=>z.endpoint&&z.stash_id)};Object.keys(E).length>0&&(S.custom_fields=JSON.stringify(E)),await Ne(a.id,S),await t(),O("Saved"),s()}catch(S){console.warn(S),O("Save failed: "+(S.message||""),!0)}finally{F(!1)}},K=()=>N([...G,""]),ee=(S,z)=>{let Z=[...G];Z[S]=z,N(Z)},X=S=>N(G.filter((z,Z)=>Z!==S)),de=S=>{A.find(z=>z.group.id===S.id)||Y([...A,{group:S,scene_index:0}])},re=S=>Y(A.filter(z=>z.group.id!==S));return e.createElement(se,{title:"Edit Scene",onClose:s},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Title"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:r,onChange:S=>n(S.target.value),placeholder:na(a.files?.[0]?.path)||""})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Date"),e.createElement("input",{type:"date",className:"vajax-bs-input",value:b,onChange:S=>o(S.target.value)})),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}},e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Studio Code"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:d,onChange:S=>v(S.target.value),placeholder:"e.g. ABP-123"})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Director"),e.createElement("input",{type:"text",className:"vajax-bs-input",value:f,onChange:S=>m(S.target.value)}))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Rating"),e.createElement("div",{className:"vajax-bs-rating",style:{padding:0}},[1,2,3,4,5].map(S=>e.createElement("button",{key:S,type:"button",className:"vajax-bs-rating__star"+(S<=p?" vajax-bs-rating__star--on":""),onClick:()=>w(S===p?0:S),title:`${S} stars`},e.createElement(Ie,{filled:S<=p}))))),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Organized"),e.createElement("button",{type:"button",className:"vajax-bs-toggle"+(T?" vajax-bs-toggle--on":""),onClick:()=>M(S=>!S),role:"switch","aria-checked":String(T)})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Studio"),e.createElement(fe,{label:"studios",endpoint:ut,getLabel:S=>S.name,value:_,onChange:$,multi:!1,placeholder:"Search studio..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Performers"),e.createElement(fe,{label:"performers",endpoint:pt,getLabel:S=>S.name,value:x,onChange:c,multi:!0,placeholder:"Search performers..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Tags"),e.createElement(fe,{label:"tags",endpoint:bt,getLabel:S=>S.name,value:g,onChange:C,multi:!0,placeholder:"Search tags..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Galleries"),e.createElement(fe,{label:"galleries",endpoint:vt,getLabel:S=>S.title||`Gallery ${S.id}`,value:P,onChange:I,multi:!0,placeholder:"Search galleries..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Groups"),A.length>0&&e.createElement("div",{className:"vajax-bs-picker__chips"},A.map(S=>e.createElement("span",{key:S.group.id,className:"vajax-bs-picker__chip"},S.group.name,e.createElement("button",{type:"button",onClick:()=>re(S.group.id),title:"Remove"},e.createElement(j.Close,null))))),e.createElement(fe,{label:"groups",endpoint:xt,getLabel:S=>S.name,value:[],onChange:S=>{let z=S[S.length-1];z&&de(z)},multi:!0,placeholder:"Search groups to add..."})),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"URLs"),G.map((S,z)=>e.createElement("div",{key:z,className:"vajax-bs-url-row"},e.createElement("input",{type:"text",className:"vajax-bs-input",value:S,onChange:Z=>ee(z,Z.target.value),placeholder:"https://..."}),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:()=>X(z),title:"Remove URL"},e.createElement(j.Trash,null)))),e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:K,style:{alignSelf:"flex-start"}},e.createElement(j.Plus,null)," Add URL")),e.createElement(ft,{value:h,onChange:y}),e.createElement(mt,{label:"Custom Fields",value:E,onChange:L,keyPlaceholder:"field name",valuePlaceholder:"value"}),e.createElement("div",{className:"vajax-bs-section"},e.createElement("div",{className:"vajax-bs-section__label"},"Details"),e.createElement("textarea",{className:"vajax-bs-input",rows:6,value:i,onChange:S=>l(S.target.value)})),e.createElement("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"}},e.createElement("button",{type:"button",className:"vajax-bs-mini",onClick:s,disabled:B},"Cancel"),e.createElement("button",{type:"button",className:"vajax-bs-mini vajax-bs-mini--primary",onClick:D,disabled:B},B?"Saving\u2026":"Save")))}function ia({x:a,y:t,items:s,onClose:r}){let n=e.useRef(null),i=oa(),[l,b]=e.useState(null),[o,d]=e.useState("right");e.useEffect(()=>{let f=p=>{n.current&&!n.current.contains(p.target)&&r()},m=p=>{p.key==="Escape"&&r()};return document.addEventListener("mousedown",f),window.addEventListener("keydown",m),()=>{document.removeEventListener("mousedown",f),window.removeEventListener("keydown",m)}},[r]),e.useEffect(()=>{let f=n.current;if(!f)return;let m=f.getBoundingClientRect(),p=window.innerWidth,w=window.innerHeight;m.right>p-4&&(f.style.left=`${Math.max(4,p-m.width-4)}px`),m.bottom>w-4&&(f.style.top=`${Math.max(4,w-m.height-4)}px`)},[a,t]);let v=(f,m,p)=>{if(!m.submenu){b(null);return}let w=p.currentTarget.getBoundingClientRect();d(w.right+200>window.innerWidth-8?"left":"right"),b(f)};return ue.createPortal(e.createElement("div",{ref:n,className:"vajax-bs-context",style:{position:"fixed",top:t,left:a,zIndex:2147483647},onContextMenu:f=>f.preventDefault()},s.map((f,m)=>f.separator?e.createElement("div",{key:m,className:"vajax-bs-context__sep"}):e.createElement("div",{key:m,className:"vajax-bs-context__wrapper",onMouseEnter:p=>v(m,f,p),onMouseLeave:()=>b(null)},e.createElement("button",{type:"button",className:"vajax-bs-context__item"+(f.danger?" vajax-bs-context__item--danger":"")+(f.submenu?" vajax-bs-context__item--has-sub":""),onClick:p=>{if(f.submenu){p.preventDefault();return}r(),f.onClick?.()},disabled:f.disabled},f.icon&&e.createElement("span",{className:"vajax-bs-context__icon"},f.icon),e.createElement("span",{className:"vajax-bs-context__label"},f.label),f.hint&&e.createElement("span",{className:"vajax-bs-context__hint"},f.hint),f.submenu&&e.createElement("span",{className:"vajax-bs-context__arrow"},e.createElement(j.ChevronRight,null))),f.submenu&&l===m&&e.createElement("div",{className:"vajax-bs-context__submenu"+(o==="left"?" vajax-bs-context__submenu--left":"")},f.submenu.map((p,w)=>p.separator?e.createElement("div",{key:w,className:"vajax-bs-context__sep"}):e.createElement("button",{key:w,type:"button",className:"vajax-bs-context__item"+(p.danger?" vajax-bs-context__item--danger":""),onClick:()=>{r(),p.onClick?.()},disabled:p.disabled},p.icon&&e.createElement("span",{className:"vajax-bs-context__icon"},p.icon),e.createElement("span",{className:"vajax-bs-context__label"},p.label))))))),i)}function ht({sceneId:a}){let[t,s]=e.useState(null),[r,n]=e.useState([]),[i,l]=e.useState(!0),[b,o]=e.useState(null),[d,v]=e.useState(null),[f,m]=e.useState(!1),[p,w]=e.useState(null),[T,M]=e.useState(()=>({whole:!1,ab:{enabled:!1,start:0,end:0}})),_=e.useRef(null),$=e.useRef(null),x=Le(),c=e.useCallback(async()=>{try{let[h,y]=await Promise.all([Ge(a),ie.getForScene(a)]);s(h),n(y),o(null)}catch(h){console.warn("[Vajax BS] refresh failed",h),o(h.message)}},[a]);e.useEffect(()=>{let h=!1;return(async()=>{l(!0);try{let[y,E]=await Promise.all([Ge(a),ie.getForScene(a)]);if(h)return;s(y),n(E),l(!1)}catch(y){if(h)return;o(y.message),l(!1)}})(),()=>{h=!0}},[a]);let g=e.useCallback(async()=>{if(!(!t?.id||f)){m(!0);try{let h=_.current,y=h?h.currentTime:null;await Ze(t.id),await ie.addOTimestamp(t.id,y,"unified"),await c(),O(`Recorded O @ ${V(y||0)}`)}catch(h){console.warn(h),O("Failed to record O",!0)}finally{m(!1)}}},[t,f,c]),C=e.useCallback(()=>{let h=_.current;h&&(h.paused?h.play().catch(()=>{}):h.pause())},[]),P=e.useCallback(h=>{let y=_.current;y&&(y.currentTime=Math.max(0,Math.min(y.duration||0,h)))},[]);e.useEffect(()=>{$.current=P},[P]),e.useEffect(()=>{let h=y=>{if(y.target.matches("input, textarea, select, [contenteditable]"))return;let E=_.current;if(!E)return;let L=()=>{y.preventDefault(),y.stopImmediatePropagation()};if(y.key===" "||y.key==="Enter"){L(),E.paused?E.play().catch(()=>{}):E.pause();return}if(y.key==="ArrowLeft"){L(),y.ctrlKey?E.currentTime-=60:y.shiftKey?E.currentTime-=5:E.currentTime-=10;return}if(y.key==="ArrowRight"){L(),y.ctrlKey?E.currentTime+=60:y.shiftKey?E.currentTime+=5:E.currentTime+=10;return}if(y.key==="ArrowUp"){L(),E.volume=Math.min(1,E.volume+.1),E.muted=!1;return}if(y.key==="ArrowDown"){L(),E.volume=Math.max(0,E.volume-.1);return}if(y.key==="m"||y.key==="M"){L(),E.muted=!E.muted;return}if(y.key==="f"||y.key==="F"){L();let B=_.current?.closest(".vajax-bs-player"),F=_.current;if(!B||!F)return;if(document.fullscreenElement||document.webkitFullscreenElement){document.exitFullscreen?document.exitFullscreen().catch(()=>{}):document.webkitExitFullscreen&&document.webkitExitFullscreen();return}if((/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&typeof F.webkitEnterFullscreen=="function")try{F.webkitEnterFullscreen();return}catch{}let ee=B.requestFullscreen||B.webkitRequestFullscreen;if(ee)Promise.resolve(ee.call(B)).catch(()=>{if(typeof F.webkitEnterFullscreen=="function")try{F.webkitEnterFullscreen()}catch{}});else if(typeof F.webkitEnterFullscreen=="function")try{F.webkitEnterFullscreen()}catch{}return}if(y.key==="o"||y.key==="O"){L(),g();return}if(/^[1-9]$/.test(y.key)&&E.duration){L(),E.currentTime=parseInt(y.key,10)/10*E.duration;return}if(y.key==="["){L(),E.currentTime=Math.max(0,E.currentTime-E.duration*.1);return}if(y.key==="]"){L(),E.currentTime=Math.min(E.duration,E.currentTime+E.duration*.1);return}};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[g]),e.useEffect(()=>{let h=y=>{y.key==="Escape"&&v(null)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[]);let I=e.useCallback(async(h,y)=>{try{await Q(`mutation($input: PerformerUpdateInput!) {
          performerUpdate(input: $input) { id favorite }
        }`,{input:{id:String(h),favorite:y}}),O(y?"Favorited":"Unfavorited"),await c()}catch(E){console.warn("[Vajax BS] performer favorite failed",E),O("Failed to update favorite",!0)}},[c]),A=e.useCallback(async h=>{if(t?.performers?.length)try{await Promise.all(t.performers.map(y=>Q(`mutation($input: PerformerUpdateInput!) {
              performerUpdate(input: $input) { id favorite }
            }`,{input:{id:String(y.id),favorite:h}}))),O(h?"Favorited all":"Unfavorited all"),await c()}catch(y){console.warn("[Vajax BS] bulk favorite failed",y),O("Failed to update favorites",!0)}},[t,c]),Y=h=>{let y=h.target;y.closest("input, textarea, select, [contenteditable]")||y.closest(".vajax-bs-player")||(h.preventDefault(),w({x:h.clientX,y:h.clientY}))},G=()=>{if(!t)return[];let h=t.performers||[],y=t.files?.[0]?.path,E=t.paths?.screenshot,L=_.current,B=!L||L.paused,F=[{label:B?"Play":"Pause",icon:B?e.createElement(j.Play,null):e.createElement(j.Pause,null),hint:"Space",onClick:C},{label:"Record O",icon:e.createElement(j.Heart,null),hint:"O",onClick:g},{separator:!0},{label:"Copy scene URL",icon:e.createElement(j.Url,null),onClick:()=>le(window.location.href)},{label:"Copy scene ID",icon:e.createElement(j.List,null),onClick:()=>le(t.id)},{label:"Copy title",icon:e.createElement(j.Pencil,null),onClick:()=>le(Ee(t))},{label:"Copy file path",icon:e.createElement(j.Film,null),disabled:!y,onClick:()=>le(y||"")},{separator:!0}];if(h.length===1){let D=h[0];F.push({label:D.favorite?"Unfavorite Performer":"Favorite Performer",icon:e.createElement(j.Star,null),onClick:()=>I(D.id,!D.favorite)})}else if(h.length>1){let D=h.map(K=>({label:`${K.favorite?"\u2605 ":"\u2606 "}${K.name}`,onClick:()=>I(K.id,!K.favorite)}));D.push({separator:!0}),D.push({label:"Favorite all",icon:e.createElement(j.Star,null),onClick:()=>A(!0)}),D.push({label:"Unfavorite all",icon:e.createElement(j.Close,null),onClick:()=>A(!1)}),F.push({label:"Favorite Performer",icon:e.createElement(j.Star,null),submenu:D})}return F.push({separator:!0}),F.push({label:"Edit scene",icon:e.createElement(j.Pencil,null),onClick:()=>v("edit")}),F.push({label:t.organized?"Mark as unorganized":"Mark as organized",icon:e.createElement(j.Check,null),onClick:async()=>{try{await Ne(t.id,{organized:!t.organized}),await c()}catch(D){console.warn(D),O("Failed to update",!0)}}}),F.push({label:"Open screenshot",icon:e.createElement(j.Image,null),disabled:!E,onClick:()=>{E&&window.open(E,"_blank","noopener")}}),F},N=h=>{let y=new URLSearchParams(window.location.search),E=`/scenes/${h}${y.toString()?"?"+y.toString():""}`;history.pushState({},"",E)};return i?e.createElement("div",{className:"vajax-bs-loading"},"Loading scene\u2026"):b?e.createElement("div",{className:"vajax-bs-error"},"Error: ",b):t?e.createElement("div",{className:"vajax-bs-layout",onContextMenu:Y},e.createElement("div",{className:"vajax-bs-player-col"},e.createElement("div",{className:"vajax-bs-player-wrap"},e.createElement(Ka,{scene:t,marks:r,loopSettings:T,onUpdateLoop:M,onRecordO:g,onOpenModal:v,onNavigateScene:N,onRequestPageContextMenu:h=>w({x:h.clientX,y:h.clientY}),videoRef:_})),e.createElement($a,{scene:t,marks:r,onNavigate:N,onSeek:h=>$.current?.(h)})),e.createElement(Ra,{scene:t,marks:r,busy:f,setBusy:m,onRefresh:c,onSeek:h=>$.current?.(h),onOpenModal:v}),d==="settings"&&e.createElement(et,{scene:t,videoRef:_,loopSettings:T,onUpdateLoop:M,onClose:()=>v(null),onOpenModal:v}),d==="debug"&&e.createElement(rt,{scene:t,videoRef:_,onClose:()=>v(null)}),d==="help"&&e.createElement(ot,{onClose:()=>v(null)}),d==="fileinfo"&&e.createElement(it,{scene:t,videoRef:_,onClose:()=>v(null)}),d==="markers"&&e.createElement(lt,{scene:t,onSeek:h=>$.current?.(h),onClose:()=>v(null)}),d==="queue"&&e.createElement(dt,{scene:t,queue:x,onNavigate:N,onClose:()=>v(null)}),d==="history"&&e.createElement(ct,{scene:t,onClose:()=>v(null)}),d==="edit"&&e.createElement(gt,{scene:t,onRefresh:c,onClose:()=>v(null)}),p&&e.createElement(ia,{x:p.x,y:p.y,onClose:()=>w(null),items:G()})):e.createElement("div",{className:"vajax-bs-error"},"Scene not found")}var R=null,Se=null,Fe=null;function jt(a){let t=String(a);if(R&&Fe===t)return;R&&la();let s=document.querySelector(".main");if(!s){console.warn("[Vajax BS] .main not found \u2014 cannot mount");return}Se=s,s.style.display="none",R=document.createElement("div"),R.id="vajax-bs-scene-root",s.parentNode.insertBefore(R,s),Fe=t,Wa(),ue.render(e.createElement(Pe,null,e.createElement(ht,{sceneId:t,key:t})),R),console.log("[Vajax BS] ScenePage mounted for",t)}function la(){if(R){try{ue.unmountComponentAtNode(R)}catch(a){console.warn(a)}R.remove(),R=null,Fe=null,Qa(),Se&&(Se.style.removeProperty("display"),Se=null),console.log("[Vajax BS] ScenePage unmounted")}}var we=null;function ke(){let a=Va();a&&a!==we?(we=a,Ua(),document.body.classList.add("vajax-bs-scene-active"),setTimeout(()=>jt(a),120)):a||we!==null&&(la(),document.body.classList.remove("vajax-bs-scene-active"),we=null)}function Ae(){console.log("[Vajax BS] main() called");let a=t=>function(){let s=t.apply(this,arguments);return setTimeout(ke,50),s};history.pushState=a(history.pushState),history.replaceState=a(history.replaceState),window.addEventListener("popstate",ke),setInterval(ke,500),ke()}Ae();})()