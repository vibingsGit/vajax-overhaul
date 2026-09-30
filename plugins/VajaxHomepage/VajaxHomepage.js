;(()=>{var a=PluginApi.React;var Y=PluginApi.ReactDOM;var{useState:f,useEffect:w,useRef:M,useMemo:X}=a;var J="vajax-homepage-layout-v2",Z="vajax-homepage-theme-v1",P={columns:2,panelPadding:22,columnGap:24,cardGap:12,heroHeight:480,heroBlur:12,heroBrightness:.75,heroTitle:"Stash",heroTitleSize:3.4,greeterEnabled:!0,greeterSpeed:.7,greeterAnimation:"typewriter",greeterCustom:""},ua=[{key:"heroHeight",label:"Hero height",min:180,max:700,step:10,unit:"px"},{key:"panelPadding",label:"Panel padding",min:0,max:48,step:1,unit:"px"},{key:"columnGap",label:"Column gap",min:0,max:60,step:1,unit:"px"},{key:"cardGap",label:"Card gap",min:0,max:32,step:1,unit:"px"},{key:"heroBlur",label:"Hero blur",min:0,max:40,step:1,unit:"px"},{key:"heroBrightness",label:"Hero brightness",min:.3,max:1.2,step:.05,unit:""},{key:"heroTitleSize",label:"Hero title size",min:1,max:6,step:.1,unit:"rem"}];function ma(){try{let e=localStorage.getItem(Z);if(e)return{...P,...JSON.parse(e)}}catch(e){console.warn("[Vajax Homepage] loadTheme failed:",e)}return{...P}}function fa(e){try{localStorage.setItem(Z,JSON.stringify(e))}catch(r){console.warn("[Vajax Homepage] saveTheme failed:",r)}}function R({size:e=12,className:r=""}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 36 36",fill:"currentColor",className:r,"aria-hidden":"true",focusable:"false",preserveAspectRatio:"xMidYMid meet",style:{display:"inline-block",verticalAlign:"-0.08em"}},a.createElement("path",{d:"M22.855.758L7.875 7.024l12.537 9.733c2.633 2.224 6.377 2.937 9.77 1.518c4.826-2.018 7.096-7.576 5.072-12.413C33.232 1.024 27.68-1.261 22.855.758zm-9.962 17.924L2.05 10.284L.137 23.529a7.993 7.993 0 0 0 2.958 7.803a8.001 8.001 0 0 0 9.798-12.65zm15.339 7.015l-8.156-4.69l-.033 9.223c-.088 2 .904 3.98 2.75 5.041a5.462 5.462 0 0 0 7.479-2.051c1.499-2.644.589-6.013-2.04-7.523z"}))}function ha({size:e=16}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},a.createElement("circle",{cx:"11",cy:"11",r:"7"}),a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}function ba({size:e=14}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("polyline",{points:"18 15 12 9 6 15"}))}function ja({size:e=14}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("polyline",{points:"6 9 12 15 18 9"}))}function _a({size:e=14}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}function Q({size:e=14}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("circle",{cx:"12",cy:"12",r:"3"}),a.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"}))}function ya({size:e=14}){return a.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},a.createElement("circle",{cx:"9",cy:"6",r:"1.5"}),a.createElement("circle",{cx:"15",cy:"6",r:"1.5"}),a.createElement("circle",{cx:"9",cy:"12",r:"1.5"}),a.createElement("circle",{cx:"15",cy:"12",r:"1.5"}),a.createElement("circle",{cx:"9",cy:"18",r:"1.5"}),a.createElement("circle",{cx:"15",cy:"18",r:"1.5"}))}function aa({mode:e,size:r=12}){let t={display:"block"};switch(e){case"scenes":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.createElement("line",{x1:"9",y1:"3",x2:"9",y2:"21"}),a.createElement("line",{x1:"15",y1:"3",x2:"15",y2:"21"}));case"images":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),a.createElement("circle",{cx:"9",cy:"9",r:"2"}),a.createElement("path",{d:"M21 15l-5-5L5 21"}));case"performers":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),a.createElement("circle",{cx:"12",cy:"7",r:"4"}));case"studios":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("path",{d:"M3 21h18"}),a.createElement("path",{d:"M5 21V7l8-4v18"}),a.createElement("path",{d:"M19 21V11l-6-4"}));case"tags":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}),a.createElement("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"}));case"groups":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),a.createElement("polyline",{points:"2 17 12 22 22 17"}),a.createElement("polyline",{points:"2 12 12 17 22 12"}));case"galleries":return a.createElement("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:t},a.createElement("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),a.createElement("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),a.createElement("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),a.createElement("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}));default:return null}}var wa=()=>window.csLib;async function j(e,r={}){let t=await wa().callGQL({query:e,variables:r});if(t==null)throw new Error("GraphQL returned null");return t}async function y(e,r=null){try{return await e}catch(t){return console.warn("[Vajax Homepage] Query failed:",t),r}}var L=e=>e==null?"\u2014":Number(e).toLocaleString();function ea(e){if(!e||e<=0)return"0m";let r=Math.floor(e/3600),t=Math.floor(e%3600/60);return r>0?`${r}h ${t}m`:`${t}m`}function ra(e){return e?e.title?e.title:e.files?.[0]?.basename?e.files[0].basename:`#${e.id}`:"\u2014"}var ka=e=>e?e.title||`#${e.id}`:"";function O(e){return e?.files?.length&&e.files[0].duration||0}function Na(){let e=new Date().getHours();return e<5?"Good night":e<12?"Good morning":e<18?"Good afternoon":"Good evening"}function Sa(e){let r=[...e];for(let t=r.length-1;t>0;t--){let o=Math.floor(Math.random()*(t+1));[r[t],r[o]]=[r[o],r[t]]}return r}function $a(e){let r=5381;for(let t=0;t<e.length;t++)r=(r<<5)+r+e.charCodeAt(t)|0;return Math.abs(r)}function Ta(e,r={}){let{typingMs:t=65,deletingMs:o=32,holdMs:i=1900,betweenMs:l=380}=r,n=M(e);w(()=>{n.current=e},[e]);let[d,s]=f(""),[v,x]=f(0),[g,u]=f(0),[k,S]=f(!1);w(()=>{let _=n.current||[];if(_.length===0)return;let N=_[v%_.length]||"",D=k?o:t;!k&&g===N.length&&(D=i),k&&g===0&&(D=l);let I=setTimeout(()=>{k?g>0?u(g-1):(S(!1),x(H=>(H+1)%_.length)):g<N.length?u(g+1):S(!0)},D);return()=>clearTimeout(I)},[g,k,v,t,o,i,l]);let E=n.current||[];return(E[v%(E.length||1)]||"").slice(0,g)}function Ea({children:e,delay:r=0,full:t=!1,className:o=""}){let i=M(null),[l,n]=f(!1);return w(()=>{if(!i.current)return;if(typeof IntersectionObserver>"u"){n(!0);return}let d=new IntersectionObserver(([s])=>{s.isIntersecting&&(n(!0),d.disconnect())},{threshold:.05,rootMargin:"0px 0px -30px 0px"});return d.observe(i.current),()=>d.disconnect()},[]),a.createElement("div",{ref:i,className:"vajax-reveal"+(l?" vajax-reveal--in":"")+(t?" vajax-reveal--full":"")+(o?` ${o}`:""),style:{transitionDelay:`${r}ms`}},e)}var B=`
  id title created_at play_count play_duration o_counter rating100 last_played_at
  paths { screenshot preview }
  files { basename duration }
  studio { id name }
  performers { id name }
`;async function Ca(){let e=["query { configuration { general { username } } }","query { configuration { username } }"];for(let r of e)try{let t=await j(r),o=t?.configuration?.general?.username||t?.configuration?.username;if(o&&String(o).trim())return String(o).trim()}catch{}return null}async function Fa(){return(await j(`query ($f: FindFilterType) {
    findScenes(filter: $f) { scenes { id title o_counter paths { screenshot preview } } }
  }`,{f:{sort:"o_counter",direction:"DESC",per_page:20}})).findScenes.scenes.filter(t=>(t.o_counter||0)>0&&(t.paths?.screenshot||t.paths?.preview)).map(t=>({id:t.id,title:t.title,o_counter:t.o_counter,preview:t.paths?.preview||null,screenshot:t.paths?.screenshot||null}))}async function Da(){let r=await j(`query ($fPlayed: FindFilterType, $sfPlayed: SceneFilterType, $fAdded: FindFilterType) {
    recentlyPlayed: findScenes(scene_filter: $sfPlayed, filter: $fPlayed) {
      scenes { id last_played_at play_history o_history }
    }
    recentlyAdded: findScenes(filter: $fAdded) { scenes { id created_at } }
  }`,{fPlayed:{sort:"last_played_at",direction:"DESC",per_page:500},sfPlayed:{play_count:{value:0,modifier:"GREATER_THAN"}},fAdded:{sort:"created_at",direction:"DESC",per_page:500}}),t=Date.now()-7*24*60*60*1e3,o=s=>{if(!s)return!1;let v=new Date(s).getTime();return!isNaN(v)&&v>=t},i=0,l=0,n=new Set;for(let s of r.recentlyPlayed.scenes){let v=!1;for(let x of s.play_history||[])o(x)&&(i++,v=!0);for(let x of s.o_history||[])o(x)&&(l++,v=!0);v&&n.add(s.id)}let d=r.recentlyAdded.scenes.filter(s=>o(s.created_at)).length;return{plays:i,os:l,scenesWatched:n.size,added:d}}async function za(){let r=await j(`query ($f: FindFilterType, $sf: SceneFilterType) {
    findScenes(filter: $f, scene_filter: $sf) { scenes { id play_history } }
  }`,{f:{sort:"last_played_at",direction:"DESC",per_page:500},sf:{play_count:{value:0,modifier:"GREATER_THAN"}}}),t=new Set;for(let x of r.findScenes.scenes)for(let g of x.play_history||[]){let u=new Date(g);isNaN(u.getTime())||t.add(u.toISOString().slice(0,10))}if(t.size===0)return{current:0,longest:0,total:0};let o=[...t].sort(),i=new Date;i.setHours(0,0,0,0);let l=i.toISOString().slice(0,10),n=new Date(i.getTime()-864e5).toISOString().slice(0,10),d=0;if(t.has(l)||t.has(n)){let x=t.has(l)?i:new Date(i.getTime()-864e5);for(;t.has(x.toISOString().slice(0,10));)d++,x=new Date(x.getTime()-864e5)}let s=1,v=1;for(let x=1;x<o.length;x++)Math.round((new Date(o[x])-new Date(o[x-1]))/864e5)===1?(v++,v>s&&(s=v)):v=1;return{current:d,longest:s,total:t.size}}async function La(){let e=`query ($f: FindFilterType, $sf: SceneFilterType) {
    findScenes(filter: $f, scene_filter: $sf) { scenes { id play_history } }
  }`,r=new Date(Date.now()-316224e5).toISOString().slice(0,10),t=await j(e,{f:{sort:"last_played_at",direction:"DESC",per_page:5e3},sf:{last_played_at:{value:r,modifier:"GREATER_THAN"}}}),o={};for(let n of t.findScenes.scenes)for(let d of n.play_history||[]){let s=new Date(d);if(isNaN(s.getTime()))continue;let v=s.toISOString().slice(0,10);o[v]=(o[v]||0)+1}let i=[],l=new Date;l.setHours(0,0,0,0);for(let n=364;n>=0;n--){let s=new Date(l.getTime()-n*864e5).toISOString().slice(0,10);i.push({date:s,count:o[s]||0})}return i}async function Aa(){let e=`query ($f: FindFilterType, $sf: SceneFilterType) {
    findScenes(filter: $f, scene_filter: $sf) { scenes { ${B} } }
  }`;return(await j(e,{f:{sort:"last_played_at",direction:"DESC",per_page:40},sf:{play_count:{value:0,modifier:"GREATER_THAN"}}})).findScenes.scenes.filter(t=>{let o=O(t),i=t.play_duration||0;return o>0&&i>0&&i<o*.9}).slice(0,12)}var Ma=async()=>{let e=`query ($f: FindFilterType) { findScenes(filter: $f) { scenes { ${B} } } }`;return(await j(e,{f:{sort:"created_at",direction:"DESC",per_page:12}})).findScenes.scenes};async function Ia(){let e=`query ($f: FindFilterType, $sf: SceneFilterType) {
    findScenes(filter: $f, scene_filter: $sf) { scenes { ${B} } }
  }`,t=(await j(e,{f:{sort:"rating",direction:"DESC",per_page:60},sf:{rating100:{value:70,modifier:"GREATER_THAN"}}})).findScenes.scenes;if(t.length===0)return null;let o=new Date().toISOString().slice(0,10);return t[$a(o)%t.length]}async function Ha(){let t=(await j(`query ($f: FindFilterType, $pf: PerformerFilterType) {
    findPerformers(filter: $f, performer_filter: $pf) {
      performers {
        id name image_path scene_count image_count o_counter rating100
        favorite birthdate ethnicity country gender height_cm
      }
    }
  }`,{f:{sort:"random",per_page:8},pf:{scene_count:{value:0,modifier:"GREATER_THAN"}}})).findPerformers.performers;return t.find(o=>o.image_path)||t[0]||null}async function Ga(){let r=await j(`query ($fp: FindFilterType, $fpf: PerformerFilterType, $fs: FindFilterType, $fsf: StudioFilterType, $ft: FindFilterType, $ftf: TagFilterType) {
    performers: findPerformers(filter: $fp, performer_filter: $fpf) { performers { id name image_path } }
    studios: findStudios(filter: $fs, studio_filter: $fsf) { studios { id name image_path } }
    tags: findTags(filter: $ft, tag_filter: $ftf) { tags { id name } }
  }`,{fp:{sort:"random",per_page:12},fpf:{filter_favorites:!0},fs:{sort:"random",per_page:12},fsf:{favorite:!0},ft:{sort:"random",per_page:16},ftf:{favorite:!0}});return{performers:r.performers.performers||[],studios:r.studios.studios||[],tags:r.tags.tags||[]}}async function qa(){let r=await j(`query {
    scenes:      findSavedFilters(mode: SCENES) { id name }
    performers:  findSavedFilters(mode: PERFORMERS) { id name }
    studios:     findSavedFilters(mode: STUDIOS) { id name }
    galleries:   findSavedFilters(mode: GALLERIES) { id name }
    images:      findSavedFilters(mode: IMAGES) { id name }
    groups:      findSavedFilters(mode: GROUPS) { id name }
  }`),t={scenes:"/scenes",performers:"/performers",studios:"/studios",galleries:"/galleries",images:"/images",groups:"/groups"},o=[];for(let[i,l]of Object.entries(t))for(let n of r[i]||[])o.push({key:`${i}-${n.id}`,id:n.id,mode:i,name:n.name,path:`${l}?filterId=${n.id}`});return o}var Pa=async()=>(await j(`query ($f: FindFilterType) {
    findImages(filter: $f) {
      images { id title rating100 visual_files { ... on ImageFile { basename width height } } }
    }
  }`,{f:{sort:"created_at",direction:"DESC",per_page:12}})).findImages.images,Oa=async()=>(await j(`query ($f: FindFilterType) {
    findStudios(filter: $f) { studios { id name image_path scene_count } }
  }`,{f:{sort:"created_at",direction:"DESC",per_page:12}})).findStudios.studios,Ba=async()=>(await j(`query ($f: FindFilterType) {
    findGalleries(filter: $f) { galleries { id title image_count paths { cover } } }
  }`,{f:{sort:"created_at",direction:"DESC",per_page:12}})).findGalleries.galleries,Va=async()=>(await j(`query ($f: FindFilterType) {
    findGroups(filter: $f) { groups { id name scene_count front_image_path } }
  }`,{f:{sort:"created_at",direction:"DESC",per_page:12}})).findGroups.groups;async function T(e={}){let o=(await j(`query ($f: FindFilterType, $sf: SceneFilterType) {
    findScenes(filter: $f, scene_filter: $sf) { scenes { id } }
  }`,{f:{sort:"random",per_page:1},sf:e})).findScenes.scenes?.[0];return o?`/scenes/${o.id}`:null}async function A(e={}){let o=(await j(`query ($f: FindFilterType, $sf: ImageFilterType) {
    findImages(filter: $f, image_filter: $sf) { images { id } }
  }`,{f:{sort:"random",per_page:1},sf:e})).findImages.images?.[0];return o?`/images/${o.id}`:null}var Wa=[{id:"quick",label:"Quick",type:"scene",run:()=>T({duration:{value:1200,modifier:"LESS_THAN"}})},{id:"long",label:"Long",type:"scene",run:()=>T({duration:{value:1800,modifier:"GREATER_THAN"}})},{id:"rated_scene",label:"Highly Rated",type:"scene",run:()=>T({rating100:{value:80,modifier:"GREATER_THAN"}})},{id:"rated_image",label:"Highly Rated",type:"image",run:()=>A({rating100:{value:80,modifier:"GREATER_THAN"}})},{id:"unwatched",label:"Unwatched",type:"scene",run:()=>T({play_count:{value:0,modifier:"EQUALS"}})},{id:"no_o_scene",label:"No O's",type:"scene",run:()=>T({o_counter:{value:0,modifier:"EQUALS"}})},{id:"no_o_image",label:"No O's",type:"image",run:()=>A({o_counter:{value:0,modifier:"EQUALS"}})},{id:"rand_scene",label:"Random",type:"scene",run:()=>T({})},{id:"rand_image",label:"Random",type:"image",run:()=>A({})},{id:"rand_all",label:"Random",type:"any",run:async()=>Math.random()<.5?T({}):A({})}],Ua=["gooner","collector","curator","archivist","connoisseur","enjoyer","explorer","wanderer","keeper","legend","hero","devotee","enthusiast","aficionado","virtuoso","maestro","night owl","stargazer","dreamer","seeker","adventurer","historian","purist","freak","beautiful","friend","stranger"];function Ya({scenes:e}){let[r,t]=f(0),[o,i]=f(!1);w(()=>{if(!e||e.length===0)return;let d=setInterval(()=>t(s=>(s+1)%e.length),8e3);return()=>clearInterval(d)},[e]),w(()=>{i(!1)},[r,e]);let l=e?.[r];if(!l)return null;let n=!!l.preview&&!o;return a.createElement(a.Fragment,null,a.createElement("div",{className:"vajax-hero-bg","aria-hidden":"true"},l.screenshot&&a.createElement("img",{src:l.screenshot,className:"vajax-hero-bg__img",alt:"",onError:d=>{d.currentTarget.style.display="none"}}),n&&a.createElement("video",{key:l.id,src:l.preview,className:"vajax-hero-bg__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",onError:()=>i(!0)})),a.createElement("div",{className:"vajax-hero__badge"},(l.o_counter||0)>0&&a.createElement("span",{className:"vajax-hero__badge-o"},a.createElement(R,{size:11}),a.createElement("span",null,l.o_counter)),a.createElement("span",{className:"vajax-hero__badge-title"},ka(l))))}function Qa({username:e,theme:r}){let[t]=f(()=>Na()),o=X(()=>{let i=[e,e,e,...Ua].filter(Boolean);return Sa(i).map(l=>`${t}, ${l}`)},[t,e]);if(!r.greeterEnabled){let i=(r.greeterCustom||"").trim();return i?a.createElement("span",{className:"vajax-hero__greeting vajax-hero__greeting--custom"},i):null}return r.greeterAnimation==="static"?a.createElement("span",{className:"vajax-hero__greeting vajax-hero__greeting--static"},o[0]||""):r.greeterAnimation==="fade"?a.createElement(Xa,{phrases:o,speed:r.greeterSpeed}):a.createElement(Ka,{phrases:o,speed:r.greeterSpeed})}function Ka({phrases:e,speed:r=1}){let t=X(()=>({typingMs:Math.max(8,Math.round(65/r)),deletingMs:Math.max(4,Math.round(32/r)),holdMs:Math.max(300,Math.round(1900/r)),betweenMs:Math.max(60,Math.round(380/r))}),[r]),o=Ta(e,t);return a.createElement("span",{className:"vajax-hero__greeting"},o,a.createElement("span",{className:"vajax-hero__cursor","aria-hidden":"true"}))}function Xa({phrases:e,speed:r=1}){let[t,o]=f(0),[i,l]=f(!0);return w(()=>{if(!e||e.length===0)return;l(!0),o(0);let n,d=0,s=!0,v=Math.max(400,Math.round(2200/r)),x=Math.max(120,Math.round(400/r)),g=()=>{s&&(l(!1),n=setTimeout(()=>{s&&(d=(d+1)%e.length,o(d),l(!0),n=setTimeout(g,v))},x))};return n=setTimeout(g,v),()=>{s=!1,clearTimeout(n)}},[e,r]),a.createElement("span",{className:`vajax-hero__greeting vajax-hero__greeting--fade${i?" vajax-hero__greeting--fade-in":""}`},e[t]||"")}function Ja({inputRef:e}){let[r,t]=f("");return a.createElement("form",{className:"vajax-search",onSubmit:i=>{i.preventDefault();let l=r.trim();l&&(window.location.href=`/scenes?q=${encodeURIComponent(l)}`)}},a.createElement("span",{className:"vajax-search__icon"},a.createElement(ha,{size:16})),a.createElement("input",{ref:e,type:"text",className:"vajax-search__input",placeholder:"Search scenes\u2026",value:r,onChange:i=>t(i.target.value),autoComplete:"off",spellCheck:"false"}),a.createElement("kbd",{className:"vajax-search__hint"},"/"))}var Za=()=>a.createElement("div",{className:"vajax-shortcuts"},a.createElement("span",{className:"vajax-shortcuts__item"},a.createElement("kbd",null,"/")," Search"),a.createElement("span",{className:"vajax-shortcuts__item"},a.createElement("kbd",null,"R")," Random scene"),a.createElement("span",{className:"vajax-shortcuts__item"},a.createElement("kbd",null,"Esc")," Clear search"));function Ra({scene:e}){if(!e)return null;let r=ra(e),t=e.performers||[],o=t.length>0?t.slice(0,3).map(l=>l.name).join(", ")+(t.length>3?` +${t.length-3}`:""):"",i=O(e);return a.createElement("a",{href:`/scenes/${e.id}`,className:"vajax-daily-pick"},a.createElement("div",{className:"vajax-daily-pick__bg"},e.paths?.screenshot&&a.createElement("img",{src:e.paths.screenshot,alt:""})),a.createElement("div",{className:"vajax-daily-pick__overlay"}),a.createElement("div",{className:"vajax-daily-pick__content"},a.createElement("span",{className:"vajax-daily-pick__badge"},"\u2605 Today's Pick"),a.createElement("h3",{className:"vajax-daily-pick__title"},r),o&&a.createElement("div",{className:"vajax-daily-pick__performers"},o),a.createElement("div",{className:"vajax-daily-pick__meta"},e.studio?.name&&a.createElement("span",null,e.studio.name),i>0&&a.createElement("span",null,ea(i)),e.rating100&&a.createElement("span",null,e.rating100,"/100"))))}function ae(){let[e,r]=f(null),t=async o=>{if(!e){r(o.id);try{let i=await o.run();i?window.location.href=i:console.warn("[Vajax Homepage] No result for mood:",o.id)}catch(i){console.warn("[Vajax Homepage] Mood failed:",o.id,i)}finally{r(null)}}};return a.createElement("div",{className:"vajax-mood-chips"},Wa.map(o=>a.createElement("button",{key:o.id,type:"button",className:`vajax-mood-chip vajax-mood-chip--${o.type}${e===o.id?" vajax-mood-chip--busy":""}`,onClick:()=>t(o),disabled:e!==null},a.createElement("span",{className:"vajax-mood-chip__icon"},a.createElement(aa,{mode:o.type==="image"?"images":"scenes",size:11})),a.createElement("span",{className:"vajax-mood-chip__label"},o.label),a.createElement("span",{className:"vajax-mood-chip__hint"},o.type))))}function ee({filters:e}){return!e||e.length===0?null:a.createElement("div",{className:"vajax-filter-chips"},e.map(r=>a.createElement("a",{key:r.key,href:r.path,className:`vajax-filter-chip vajax-filter-chip--${r.mode}`},a.createElement("span",{className:"vajax-filter-chip__icon"},a.createElement(aa,{mode:r.mode,size:12})),a.createElement("span",{className:"vajax-filter-chip__name"},r.name),a.createElement("span",{className:"vajax-filter-chip__mode"},r.mode))))}function re({stats:e,streak:r}){if(!e)return null;let t=[{value:e.plays,label:"Plays"},{value:e.os,label:"O Count"},{value:r?.current??0,label:"Day Streak",accent:!0,title:r?.longest?`Longest: ${r.longest} days`:void 0},{value:e.added,label:"New"}];return a.createElement("div",{className:"vajax-week-grid"},t.map(o=>a.createElement("div",{key:o.label,className:`vajax-week-card${o.accent?" vajax-week-card--accent":""}`,title:o.title},a.createElement("div",{className:"vajax-week-card__value"},L(o.value)),a.createElement("div",{className:"vajax-week-card__label"},o.label))))}function te({days:e}){if(!e||e.length===0)return null;let r=new Date(e[0].date),t=[];for(let s=0;s<r.getDay();s++)t.push(null);t.push(...e);let o=[];for(let s=0;s<t.length;s+=7)o.push(t.slice(s,s+7));let i=Math.max(1,...e.map(s=>s.count)),l=s=>s===0?0:s>=i*.75?4:s>=i*.5?3:s>=i*.25?2:1,n=e.reduce((s,v)=>s+v.count,0),d=e.filter(s=>s.count>0).length;return a.createElement("div",{className:"vajax-heatmap-wrap"},a.createElement("div",{className:"vajax-heatmap__meta"},a.createElement("span",null,L(n)," plays"),a.createElement("span",null,"\xB7"),a.createElement("span",null,d," active days"),a.createElement("div",{className:"vajax-heatmap__legend"},[0,1,2,3,4].map(s=>a.createElement("span",{key:s,className:`vajax-heatmap__day vajax-heatmap__day--l${s}`})))),a.createElement("div",{className:"vajax-heatmap"},o.map((s,v)=>a.createElement("div",{key:v,className:"vajax-heatmap__week"},s.map((x,g)=>x?a.createElement("div",{key:g,className:`vajax-heatmap__day vajax-heatmap__day--l${l(x.count)}`,title:`${x.date}: ${x.count} play${x.count===1?"":"s"}`}):a.createElement("div",{key:g,className:"vajax-heatmap__day vajax-heatmap__day--empty"}))))))}function oe({performer:e}){if(!e)return null;let r=(()=>{if(!e.birthdate)return null;let o=new Date(e.birthdate);if(isNaN(o.getTime()))return null;let i=Math.floor((Date.now()-o.getTime())/(365.25*24*3600*1e3));return i>0&&i<120?i:null})(),t=[r!=null?`${r} y/o`:null,e.height_cm?`${e.height_cm} cm`:null,e.country||null,e.ethnicity||null].filter(Boolean);return a.createElement("a",{href:`/performers/${e.id}`,className:"vajax-spotlight"},a.createElement("div",{className:"vajax-spotlight__image"},e.image_path?a.createElement("img",{src:e.image_path,alt:"",loading:"lazy"}):a.createElement("div",{className:"vajax-spotlight__placeholder"},a.createElement("span",null,e.name?.[0]||"?")),e.favorite&&a.createElement("span",{className:"vajax-spotlight__fav-badge"},"\u2605")),a.createElement("div",{className:"vajax-spotlight__body"},a.createElement("h3",{className:"vajax-spotlight__name"},e.name),t.length>0&&a.createElement("div",{className:"vajax-spotlight__details"},t.join(" \xB7 ")),a.createElement("div",{className:"vajax-spotlight__stats"},a.createElement("div",{className:"vajax-spotlight__stat"},a.createElement("div",{className:"vajax-spotlight__stat-value"},L(e.scene_count)),a.createElement("div",{className:"vajax-spotlight__stat-label"},"Scenes")),a.createElement("div",{className:"vajax-spotlight__stat"},a.createElement("div",{className:"vajax-spotlight__stat-value"},L(e.image_count)),a.createElement("div",{className:"vajax-spotlight__stat-label"},"Images")),a.createElement("div",{className:"vajax-spotlight__stat"},a.createElement("div",{className:"vajax-spotlight__stat-value"},L(e.o_counter)),a.createElement("div",{className:"vajax-spotlight__stat-label"},"O")),e.rating100?a.createElement("div",{className:"vajax-spotlight__stat"},a.createElement("div",{className:"vajax-spotlight__stat-value"},e.rating100),a.createElement("div",{className:"vajax-spotlight__stat-label"},"Rating")):null),a.createElement("div",{className:"vajax-spotlight__cta"},"View profile \u2192")))}function ie({performers:e,studios:r,tags:t}){let o=e?.length>0,i=r?.length>0,l=t?.length>0;if(!o&&!i&&!l)return null;let n=(d,s)=>a.createElement("div",{className:"vajax-fav-row"},d.map(v=>a.createElement("a",{key:v.id,href:`${s}/${v.id}`,className:"vajax-fav-avatar"},v.image_path?a.createElement("img",{src:v.image_path,alt:""}):a.createElement("div",{className:"vajax-fav-avatar__placeholder"},v.name?.[0]||"?"),a.createElement("span",{className:"vajax-fav-avatar__name"},v.name))));return a.createElement("div",{className:"vajax-favorites"},o&&a.createElement("div",{className:"vajax-fav-group"},a.createElement("div",{className:"vajax-fav-group__label"},"Performers"),n(e,"/performers")),i&&a.createElement("div",{className:"vajax-fav-group"},a.createElement("div",{className:"vajax-fav-group__label"},"Studios"),n(r,"/studios")),l&&a.createElement("div",{className:"vajax-fav-group"},a.createElement("div",{className:"vajax-fav-group__label"},"Tags"),a.createElement("div",{className:"vajax-fav-tags"},t.map(d=>a.createElement("a",{key:d.id,href:`/tags/${d.id}`,className:"vajax-fav-tag"},d.name)))))}function V({href:e,image:r,title:t,subtitle:o,badge:i,fallbackChar:l}){return a.createElement("a",{href:e,className:"vajax-entry-card"},a.createElement("div",{className:"vajax-entry-card__thumb"},r?a.createElement("img",{src:r,alt:"",loading:"lazy",onError:n=>{n.currentTarget.style.display="none"}}):a.createElement("div",{className:"vajax-entry-card__placeholder"},l||t?.[0]||"?"),i&&a.createElement("span",{className:"vajax-entry-card__badge"},i)),a.createElement("div",{className:"vajax-entry-card__body"},a.createElement("div",{className:"vajax-entry-card__title"},t),o&&a.createElement("div",{className:"vajax-entry-card__sub"},o)))}function ne({images:e}){return!e||e.length===0?a.createElement("div",{className:"vajax-empty"},"No images yet."):a.createElement("div",{className:"vajax-image-masonry"},e.map(r=>{let t=r.visual_files?.[0],o=t?.width||1,i=t?.height||1;return a.createElement("a",{key:r.id,href:`/images/${r.id}`,className:"vajax-image-tile"},a.createElement("img",{src:`/image/${r.id}/thumbnail`,alt:"",loading:"lazy",style:{aspectRatio:`${o} / ${i}`}}))}))}var se=({studios:e})=>e?.length?a.createElement("div",{className:"vajax-entry-grid"},e.map(r=>a.createElement(V,{key:r.id,href:`/studios/${r.id}`,image:r.image_path,title:r.name,subtitle:`${r.scene_count||0} scenes`}))):a.createElement("div",{className:"vajax-empty"},"No studios yet."),le=({galleries:e})=>e?.length?a.createElement("div",{className:"vajax-entry-grid"},e.map(r=>a.createElement(V,{key:r.id,href:`/galleries/${r.id}`,image:r.paths?.cover||`/gallery/${r.id}/cover`,title:r.title||`#${r.id}`,subtitle:`${r.image_count||0} images`}))):a.createElement("div",{className:"vajax-empty"},"No galleries yet."),de=({groups:e})=>e?.length?a.createElement("div",{className:"vajax-entry-grid"},e.map(r=>a.createElement(V,{key:r.id,href:`/groups/${r.id}`,image:r.front_image_path,title:r.name,subtitle:`${r.scene_count||0} scenes`}))):a.createElement("div",{className:"vajax-empty"},"No groups yet.");function ce({scene:e}){let[r,t]=f(!1),[o,i]=f(!1),[l,n]=f(!1),d=M(null),s=ra(e),v=O(e),x=e.paths?.screenshot,g=e.paths?.preview,u=e.play_duration||0,k=v>0?Math.min(100,u/v*100):0,S=e.performers||[],E=(()=>{if(S.length===0)return"";let _=S.slice(0,2).map(N=>N.name).join(", ");return S.length>2?`${_} +${S.length-2}`:_})();w(()=>{n(!1),i(!1)},[e.id]),w(()=>{if(!r||!g||l){i(!1);return}let _=d.current;if(!_)return;try{_.currentTime=0}catch{}let N=_.play();N&&typeof N.catch=="function"&&N.catch(()=>n(!0))},[r,g,l]);let $=r&&!!g&&!l;return a.createElement("a",{href:`/scenes/${e.id}`,className:"vajax-scene-card",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1)},a.createElement("div",{className:"vajax-scene-card__thumb"},x?a.createElement("img",{src:x,alt:"",loading:"lazy",className:"vajax-scene-card__img",onError:_=>{_.currentTarget.style.display="none"}}):a.createElement("div",{className:"vajax-scene-card__placeholder"}),$replace1&a.createElement("video",{ref:d,src:g,className:`vajax-scene-card__video${o?" vajax-scene-card__video--visible":""}`,muted:!0,loop:!0,playsInline:!0,preload:"auto",onPlaying:()=>i(!0),onError:()=>n(!0)}),v>0&&a.createElement("span",{className:"vajax-scene-card__duration"},ea(v)),(e.o_counter||0)>0&&a.createElement("span",{className:"vajax-scene-card__o"},a.createElement(R,{size:10}),a.createElement("span",null,e.o_counter)),k>0&&k<95&&a.createElement("div",{className:"vajax-scene-card__progress"},a.createElement("div",{style:{width:`${k}%`}}))),a.createElement("div",{className:"vajax-scene-card__body"},a.createElement("div",{className:"vajax-scene-card__title"},s),E&&a.createElement("div",{className:"vajax-scene-card__sub vajax-scene-card__sub--performers"},E),a.createElement("div",{className:"vajax-scene-card__meta"},e.studio?.name&&a.createElement("span",{className:"vajax-scene-card__meta-item vajax-scene-card__meta-item--studio"},e.studio.name),(e.play_count||0)>0&&a.createElement("span",{className:"vajax-scene-card__meta-item vajax-scene-card__meta-item--plays"},"\u25B6 ",e.play_count))))}var K=({scenes:e})=>!e||e.length===0?a.createElement("div",{className:"vajax-empty"},"Nothing here yet."):a.createElement("div",{className:"vajax-scene-row"},e.map(r=>a.createElement(ce,{key:r.id,scene:r}))),F={daily:{label:"Today's Pick",title:"Today's Pick",full:!0,render:e=>e.data.daily?a.createElement(Ra,{scene:e.data.daily}):null},mood:{label:"Mood",title:"Mood",render:()=>a.createElement(ae,null)},saved:{label:"Saved Filters",title:"Saved Filters",render:e=>e.data.saved?.length?a.createElement(ee,{filters:e.data.saved}):null},week:{label:"This Week",title:"This Week",render:e=>e.data.week?a.createElement(re,{stats:e.data.week,streak:e.data.streak}):null},continue:{label:"Continue Watching",title:"Continue Watching",render:e=>a.createElement(K,{scenes:e.data.cont})},recent:{label:"Recently Added",title:"Recently Added",render:e=>a.createElement(K,{scenes:e.data.recent})},spotlight:{label:"Performer Spotlight",title:"Performer Spotlight",render:e=>e.data.spotlight?a.createElement(oe,{performer:e.data.spotlight}):null},favorites:{label:"Favorites",title:"Favorites",render:e=>{let r=e.data.favorites;return!r||r.performers.length+r.studios.length+r.tags.length===0?null:a.createElement(ie,{performers:r.performers,studios:r.studios,tags:r.tags})}},heatmap:{label:"Activity",title:"Activity",render:e=>e.data.heatmap?.length?a.createElement(te,{days:e.data.heatmap}):null},images:{label:"Images",title:"Recently Added Images",render:e=>e.data.recentImages?.length?a.createElement(ne,{images:e.data.recentImages}):null},studios:{label:"Studios",title:"Recently Added Studios",render:e=>e.data.recentStudios?.length?a.createElement(se,{studios:e.data.recentStudios}):null},galleries:{label:"Galleries",title:"Recently Added Galleries",render:e=>e.data.recentGalleries?.length?a.createElement(le,{galleries:e.data.recentGalleries}):null},groups:{label:"Groups",title:"Recently Added Groups",render:e=>e.data.recentGroups?.length?a.createElement(de,{groups:e.data.recentGroups}):null}},ta=[{id:"daily",full:!0},{id:"mood"},{id:"saved"},{id:"week"},{id:"continue"},{id:"recent"},{id:"spotlight"},{id:"favorites"},{id:"heatmap"},{id:"images"},{id:"studios"},{id:"galleries"},{id:"groups"}];function ve(){try{let e=localStorage.getItem(J);if(e){let r=JSON.parse(e);if(Array.isArray(r)){let t=r.filter(o=>o&&F[o.id]);if(t.length>0)return t}}}catch(e){console.warn("[Vajax Homepage] loadLayout failed:",e)}return ta.map(e=>({...e}))}function pe(e){try{localStorage.setItem(J,JSON.stringify(e))}catch(r){console.warn("[Vajax Homepage] saveLayout failed:",r)}}function xe({onUp:e,onDown:r,onRemove:t,canUp:o,canDown:i}){return a.createElement("div",{className:"vajax-panel__controls",onClick:l=>l.stopPropagation()},a.createElement("span",{className:"vajax-panel__drag-hint",title:"Drag to reorder"},a.createElement(ya,{size:14})),a.createElement("button",{type:"button",className:"vajax-panel__ctrl",onClick:e,disabled:!o,title:"Move up"},a.createElement(ba,null)),a.createElement("button",{type:"button",className:"vajax-panel__ctrl",onClick:r,disabled:!i,title:"Move down"},a.createElement(ja,null)),a.createElement("button",{type:"button",className:"vajax-panel__ctrl vajax-panel__ctrl--danger",onClick:t,title:"Remove"},a.createElement(_a,null)))}function ge({layout:e,setLayout:r,editMode:t,setEditMode:o,onReset:i}){let l=Object.keys(F).filter(d=>!e.find(s=>s.id===d)),n=d=>{let s=F[d];console.log("[Vajax Homepage] Adding panel:",d),r([...e,{id:d,full:s?.full||!1}])};return t?a.createElement(a.Fragment,null,a.createElement("button",{type:"button",className:"vajax-edit-fab vajax-edit-fab--active",onClick:()=>o(!1),title:"Done"},a.createElement(Q,{size:16})),a.createElement("div",{className:"vajax-edit-bar"},a.createElement("div",{className:"vajax-edit-bar__title"},"Edit layout \xB7 drag panels to reorder"),a.createElement("div",{className:"vajax-edit-bar__row"},l.length>0?a.createElement("div",{className:"vajax-edit-bar__add"},a.createElement("span",{className:"vajax-edit-bar__add-label"},"Add panel:"),l.map(d=>a.createElement("button",{key:d,type:"button",className:"vajax-edit-bar__add-btn",onClick:()=>n(d)},"+ ",F[d].label))):a.createElement("span",{className:"vajax-edit-bar__hint"},"All panels are in use"),a.createElement("div",{className:"vajax-edit-bar__spacer"}),a.createElement("button",{type:"button",className:"vajax-edit-bar__reset",onClick:i},"Reset"),a.createElement("button",{type:"button",className:"vajax-edit-bar__done",onClick:()=>o(!1)},"Done")))):a.createElement("button",{type:"button",className:"vajax-edit-fab",onClick:()=>o(!0),title:"Edit layout"},a.createElement(Q,{size:16}))}function ue({theme:e,setTheme:r,onReset:t}){let[o,i]=f(!1),l=(n,d)=>r({...e,[n]:d});return a.createElement("div",{className:`vajax-theme-editor${o?" vajax-theme-editor--open":""}`},a.createElement("button",{type:"button",className:"vajax-theme-editor__toggle",onClick:()=>i(n=>!n),title:o?"Close theme editor":"Open theme editor"},o?"\xD7":"\u2699"," Theme"),o&&a.createElement("div",{className:"vajax-theme-editor__body"},a.createElement("div",{className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},"Hero title"),a.createElement("input",{type:"text",className:"vajax-theme-editor__input",value:e.heroTitle,onChange:n=>l("heroTitle",n.target.value),maxLength:40})),a.createElement("div",{className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},"Columns"),a.createElement("div",{className:"vajax-theme-editor__segmented"},[1,2,3].map(n=>a.createElement("button",{key:n,type:"button",className:`vajax-theme-editor__seg${e.columns===n?" vajax-theme-editor__seg--active":""}`,onClick:()=>l("columns",n)},n)))),ua.map(n=>a.createElement("div",{key:n.key,className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},n.label),a.createElement("div",{className:"vajax-theme-editor__slider-wrap"},a.createElement("input",{type:"range",min:n.min,max:n.max,step:n.step,value:e[n.key],onChange:d=>l(n.key,Number(d.target.value)),className:"vajax-theme-editor__slider"}),a.createElement("span",{className:"vajax-theme-editor__value"},e[n.key],n.unit)))),a.createElement("div",{className:"vajax-theme-editor__divider"}),a.createElement("label",{className:"vajax-theme-editor__label vajax-theme-editor__label--checkbox"},a.createElement("input",{type:"checkbox",checked:e.greeterEnabled,onChange:n=>l("greeterEnabled",n.target.checked)}),a.createElement("span",null,"Greeter enabled")),e.greeterEnabled?a.createElement(a.Fragment,null,a.createElement("div",{className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},"Greeter animation"),a.createElement("div",{className:"vajax-theme-editor__segmented"},[{id:"typewriter",label:"Type"},{id:"fade",label:"Fade"},{id:"static",label:"Static"}].map(n=>a.createElement("button",{key:n.id,type:"button",className:`vajax-theme-editor__seg${e.greeterAnimation===n.id?" vajax-theme-editor__seg--active":""}`,onClick:()=>l("greeterAnimation",n.id)},n.label)))),a.createElement("div",{className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},"Greeter speed"),a.createElement("div",{className:"vajax-theme-editor__slider-wrap"},a.createElement("input",{type:"range",min:.3,max:3,step:.1,value:e.greeterSpeed,onChange:n=>l("greeterSpeed",Number(n.target.value)),className:"vajax-theme-editor__slider"}),a.createElement("span",{className:"vajax-theme-editor__value"},Number(e.greeterSpeed).toFixed(1),"\xD7")))):a.createElement("div",{className:"vajax-theme-editor__row"},a.createElement("label",{className:"vajax-theme-editor__label"},"Custom greeter text"),a.createElement("input",{type:"text",className:"vajax-theme-editor__input",placeholder:"e.g. Welcome back",value:e.greeterCustom,onChange:n=>l("greeterCustom",n.target.value),maxLength:80})),a.createElement("button",{type:"button",className:"vajax-theme-editor__reset",onClick:t},"Reset theme")))}function me(){let[e,r]=f(null),[t,o]=f(!0),[i,l]=f(!1),[n,d]=f(()=>ve()),[s,v]=f(null),[x,g]=f(null),[u,k]=f(()=>ma()),[S,E]=f(u.columns),$=M(null);w(()=>{let p=()=>{let m=window.innerWidth;return m<1e3?1:m<1400&&u.columns===3?2:u.columns},c=()=>E(p());return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[u.columns]),w(()=>{fa(u)},[u]),w(()=>{fe();let p=!1;return(async()=>{console.log("[Vajax Homepage] Loading data\u2026");let[c,m,b,h,z,G,q,C,la,da,ca,va,pa,xa,ga]=await Promise.all([y(Fa(),[]),y(Da(),null),y(Aa(),[]),y(Ma(),[]),y(Ca(),null),y(za(),{current:0,longest:0,total:0}),y(La(),[]),y(Ia(),null),y(Ha(),null),y(Ga(),{performers:[],studios:[],tags:[]}),y(qa(),[]),y(Pa(),[]),y(Oa(),[]),y(Ba(),[]),y(Va(),[])]);p||(r({hero:c,week:m,cont:b,recent:h,streak:G,heatmap:q,daily:C,spotlight:la,favorites:da,saved:ca,username:z,recentImages:va,recentStudios:pa,recentGalleries:xa,recentGroups:ga}),o(!1),console.log("[Vajax Homepage] Data loaded."))})(),()=>{p=!0}},[]),w(()=>{pe(n)},[n]),w(()=>{let p=async c=>{let m=(c.target?.tagName||"").toLowerCase(),b=m==="input"||m==="textarea"||c.target?.isContentEditable;if(c.key==="/"&&!b)c.preventDefault(),$.current?.focus();else if((c.key==="r"||c.key==="R")&&!b&&!c.metaKey&&!c.ctrlKey&&!c.altKey){c.preventDefault();try{let h=await T({});h&&(window.location.href=h)}catch(h){console.warn("[Vajax Homepage] Random failed:",h)}}else c.key==="Escape"&&document.activeElement===$.current&&($.current.value="",$.current.blur())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]);let _=(p,c)=>{d(m=>{let b=[...m],h=p+c;return h<0||h>=b.length?m:([b[p],b[h]]=[b[h],b[p]],b)})},N=p=>{let c=n[p]?.id;console.log("[Vajax Homepage] Removing panel:",c),d(m=>m.filter((b,h)=>h!==p))},D=()=>{console.log("[Vajax Homepage] Resetting layout."),d(ta.map(p=>({...p})))},I=(p,c)=>{v(c);try{p.dataTransfer.effectAllowed="move",p.dataTransfer.setData("text/plain",String(c))}catch{}},H=(p,c)=>{s!=null&&(p.preventDefault(),p.dataTransfer.dropEffect="move",x!==c&&g(c))},oa=(p,c)=>{p.preventDefault();let m=s;if(m==null){let b=p.dataTransfer.getData("text/plain");m=b?Number(b):null}v(null),g(null),!(m==null||isNaN(m)||m===c)&&d(b=>{let h=[...b],[z]=h.splice(m,1);return h.splice(c,0,z),h})},ia=()=>{v(null),g(null)};if(t)return a.createElement("div",{className:"vajax-homepage"},a.createElement("div",{className:"vajax-loading"},"Loading\u2026"));if(!e)return null;let na={data:e},U=n.filter(p=>F[p.id]),sa={"--vajax-panel-padding-y":`${u.panelPadding}px`,"--vajax-panel-padding-x":`${u.panelPadding}px`,"--vajax-panel-padding-b":`${u.panelPadding+2}px`,"--vajax-gap-lg":`${u.columnGap}px`,"--vajax-gap":`${u.cardGap}px`,"--vajax-blur-hero":`${u.heroBlur}px`,"--vajax-hero-brightness":u.heroBrightness};return a.createElement("div",{className:"vajax-homepage",style:sa},a.createElement("div",{className:"vajax-hero",style:{minHeight:`${u.heroHeight}px`}},a.createElement(Ya,{scenes:e.hero}),a.createElement("div",{className:"vajax-hero__overlay"}),a.createElement("div",{className:"vajax-hero__content"},a.createElement("h1",{className:"vajax-hero__title",style:{fontSize:`${u.heroTitleSize}rem`}},u.heroTitle||"Stash"),a.createElement("p",{className:"vajax-hero__subtitle"},a.createElement(Qa,{username:e.username,theme:u})),a.createElement(Ja,{inputRef:$}))),a.createElement(Za,null),a.createElement("div",{className:`vajax-homepage__content${i?" vajax-homepage__content--edit":""}`,style:{columnCount:S}},U.map((p,c)=>{let m=F[p.id],b=p.full??m.full??!1,h=m.render(na);if(h==null)return null;let z=s===c,G=x===c&&s!==c&&s!=null,q=["vajax-panel",i?"vajax-panel--editing":"",z?"vajax-panel--dragging":"",G?"vajax-panel--drop-target":""].filter(Boolean).join(" ");return a.createElement(Ea,{key:p.id,full:b},a.createElement("div",{className:q,draggable:i,onDragStart:i?C=>I(C,c):void 0,onDragOver:i?C=>H(C,c):void 0,onDrop:i?C=>oa(C,c):void 0,onDragEnd:i?ia:void 0},i&&a.createElement(xe,{canUp:c>0,canDown:c<U.length-1,onUp:()=>_(c,-1),onDown:()=>_(c,1),onRemove:()=>N(c)}),m.title&&a.createElement("h2",{className:"vajax-section__title"},m.title),h))})),a.createElement(ge,{layout:n,setLayout:d,editMode:i,setEditMode:l,onReset:D}),i&&a.createElement(ue,{theme:u,setTheme:k,onReset:()=>k({...P})}))}function fe(){if(document.getElementById("vajax-homepage-styles"))return;let e=document.createElement("style");e.id="vajax-homepage-styles",e.textContent=`
    .vajax-homepage {
      /* Base surfaces */
      --vajax-bg-panel:            #171b22;
      --vajax-bg-panel-2:          #1c222b;
      --vajax-bg-panel-accent:     rgba(126,179,255,0.10);
      --vajax-bg-panel-accent-2:   rgba(126,179,255,0.02);
      --vajax-bg-input:            rgba(0,0,0,0.5);
      --vajax-bg-input-focus:      rgba(0,0,0,0.62);
      --vajax-bg-control:          rgba(0,0,0,0.78);
      --vajax-bg-fab:              rgba(23,27,34,0.92);
      --vajax-bg-fab-hover:        rgba(40,48,60,0.96);
      --vajax-bg-editbar:          rgba(23,27,34,0.96);
      --vajax-bg-chip:             rgba(255,255,255,0.035);
      --vajax-bg-chip-hover:       rgba(255,255,255,0.075);
      --vajax-bg-pill:             rgba(255,255,255,0.07);
      --vajax-bg-tag:              rgba(255,255,255,0.05);
      --vajax-bg-scene-card:       #1c222b;
      --vajax-bg-scene-thumb:      #0d0f13;
      --vajax-bg-hero:             #0f0f12;
      --vajax-bg-skeleton-a:       #1a1d23;
      --vajax-bg-skeleton-b:       #262a33;

      /* Text */
      --vajax-text:                #e6e6e6;
      --vajax-text-strong:         #ffffff;
      --vajax-text-body:           #eeeeee;
      --vajax-text-muted:          rgba(255,255,255,0.55);
      --vajax-text-dim:            rgba(255,255,255,0.5);
      --vajax-text-faint:          rgba(255,255,255,0.38);
      --vajax-text-placeholder:    rgba(255,255,255,0.42);

      /* Borders */
      --vajax-border:              rgba(255,255,255,0.07);
      --vajax-border-soft:         rgba(255,255,255,0.06);
      --vajax-border-strong:       rgba(255,255,255,0.15);
      --vajax-border-input:        rgba(255,255,255,0.15);
      --vajax-border-card:         rgba(255,255,255,0.06);
      --vajax-border-card-hover:   rgba(255,255,255,0.16);

      /* Accent */
      --vajax-accent:              #7eb3ff;
      --vajax-accent-rgb:          126,179,255;
      --vajax-accent-soft:         rgba(126,179,255,0.14);
      --vajax-accent-border:       rgba(126,179,255,0.40);
      --vajax-accent-border-soft:  rgba(126,179,255,0.18);
      --vajax-accent-text:         #cfe1ff;
      --vajax-accent-on:           #0f1419;

      /* O-count */
      --vajax-o-color:             #e94560;
      --vajax-o-color-rgb:         233,69,96;
      --vajax-o-bg:                rgba(233, 69, 96, 0.92);

      /* Streak */
      --vajax-streak-color:        rgb(255,180,120);
      --vajax-streak-border:       rgba(255,140,60,0.4);
      --vajax-streak-bg-a:         rgba(255,140,60,0.18);
      --vajax-streak-bg-b:         rgba(255,80,40,0.10);

      /* Danger */
      --vajax-danger:              #e94560;
      --vajax-danger-soft:         rgba(233, 69, 96, 0.25);
      --vajax-danger-text:         #ff8ba3;

      /* Radius */
      --vajax-radius-lg:           16px;
      --vajax-radius-md:           12px;
      --vajax-radius-sm:           8px;
      --vajax-radius-xs:           6px;
      --vajax-radius-pill:         999px;

      /* Spacing */
      --vajax-panel-padding-y:     22px;
      --vajax-panel-padding-x:     22px;
      --vajax-panel-padding-b:     24px;
      --vajax-gap-sm:              8px;
      --vajax-gap:                 12px;
      --vajax-gap-lg:              24px;

      /* Typography */
      --vajax-font:                -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      --vajax-font-mono:           ui-monospace, SFMono-Regular, Menlo, monospace;
      --vajax-letter-spacing:      -0.005em;
      --vajax-title-tracking:      -0.035em;
      --vajax-label-tracking:      0.14em;

      /* Shadows */
      --vajax-shadow-sm:           0 2px 10px rgba(0,0,0,0.25);
      --vajax-shadow-lg:           0 12px 40px rgba(0,0,0,0.65);
      --vajax-shadow-fab:          0 4px 14px rgba(0,0,0,0.5);
      --vajax-shadow-card-hover:   0 12px 28px rgba(0,0,0,0.5);
      --vajax-shadow-focus-accent: 0 0 0 1px rgba(var(--vajax-accent-rgb),0.35), 0 4px 18px rgba(0,0,0,0.4);

      /* Effects */
      --vajax-blur-hero:           12px;
      --vajax-blur-control:        8px;
      --vajax-blur-input:          14px;
      --vajax-hero-saturation:     1.5;
      --vajax-hero-brightness:     0.75;

      /* Transitions */
      --vajax-transition-fast:     0.15s ease;
      --vajax-transition:          0.2s ease;
      --vajax-transition-slow:     0.6s cubic-bezier(0.16, 1, 0.3, 1);

      width: 100%;
      color: var(--vajax-text);
      font-family: var(--vajax-font);
      padding-bottom: 100px;
      letter-spacing: var(--vajax-letter-spacing);
    }

    .vajax-homepage a, .vajax-homepage a *,
    .vajax-homepage a:hover, .vajax-homepage a:hover *,
    .vajax-homepage a:focus, .vajax-homepage a:focus *,
    .vajax-homepage a:active { text-decoration: none !important; }

    .vajax-hide-native > *:not(#vajax-homepage-root) { display: none !important; }

    /* Hero */
    .vajax-hero {
      position: relative; min-height: 380px;
      border-radius: 20px; overflow: hidden; margin-bottom: 0;
      background: var(--vajax-bg-hero);
      display: flex; align-items: center; justify-content: center;
      isolation: isolate;
    }
    .vajax-hero-bg { position: absolute; inset: 0; z-index: 0; }
    .vajax-hero-bg__img, .vajax-hero-bg__video {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover;
      filter: blur(var(--vajax-blur-hero)) saturate(var(--vajax-hero-saturation)) brightness(var(--vajax-hero-brightness));
      transform: scale(1.1); opacity: 0;
      animation: vajax-fadein 1.4s ease forwards;
    }
    .vajax-hero-bg__video { z-index: 1; }
    @keyframes vajax-fadein { to { opacity: 1; } }

    .vajax-hero__overlay {
      position: absolute; inset: 0; z-index: 1;
      background:
        radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.55) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%);
      pointer-events: none;
    }
    .vajax-hero__content {
      position: relative; z-index: 2; text-align: center;
      padding: 60px 24px; width: 100%; max-width: 720px;
    }
    .vajax-hero__title {
      font-size: 3.4rem; margin: 0 0 6px 0; color: var(--vajax-text-strong);
      font-weight: 800; letter-spacing: var(--vajax-title-tracking); line-height: 1;
      text-shadow: 0 4px 28px rgba(0,0,0,0.85), 0 1px 2px rgba(0,0,0,0.9);
    }
    .vajax-hero__subtitle {
      color: rgba(255,255,255,0.9); margin: 0 0 22px 0;
      font-size: 1.15rem; font-weight: 400; letter-spacing: 0.01em;
      text-shadow: 0 2px 12px rgba(0,0,0,0.85); min-height: 1.5em;
    }
    .vajax-hero__greeting { display: inline; }
    .vajax-hero__cursor {
      display: inline-block; width: 2px; height: 1em;
      margin-left: 3px; background: currentColor;
      vertical-align: text-bottom;
      animation: vajax-blink 1s steps(2, start) infinite;
      opacity: 0.85;
    }
    @keyframes vajax-blink { 50% { opacity: 0; } }
    .vajax-hero__greeting--fade {
      display: inline-block; opacity: 0; transform: translateY(6px);
      transition: opacity 0.4s ease, transform 0.4s ease;
    }
    .vajax-hero__greeting--fade-in { opacity: 1; transform: none; }

    .vajax-hero__badge {
      position: absolute; left: 20px; bottom: 18px; z-index: 2;
      display: flex; align-items: center; gap: 10px;
      max-width: calc(100% - 40px); pointer-events: none;
    }
    .vajax-hero__badge-o {
      display: inline-flex; align-items: center; gap: 5px;
      background: var(--vajax-o-bg); color: var(--vajax-text-strong);
      font-size: 0.76rem; font-weight: 700; line-height: 1;
      padding: 4px 10px; border-radius: var(--vajax-radius-xs);
      backdrop-filter: blur(var(--vajax-blur-control));
      -webkit-backdrop-filter: blur(var(--vajax-blur-control));
      flex-shrink: 0;
    }
    .vajax-hero__badge-o svg { display: block; }
    .vajax-hero__badge-title {
      color: var(--vajax-text-strong); font-size: 0.86rem; font-weight: 500;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      text-shadow: 0 2px 10px rgba(0,0,0,0.95);
      background: rgba(0,0,0,0.35);
      backdrop-filter: blur(var(--vajax-blur-control));
      -webkit-backdrop-filter: blur(var(--vajax-blur-control));
      padding: 4px 10px; border-radius: var(--vajax-radius-xs); max-width: 100%;
    }

    /* Search */
    .vajax-search {
      display: flex; align-items: center;
      background: var(--vajax-bg-input);
      backdrop-filter: blur(var(--vajax-blur-input));
      -webkit-backdrop-filter: blur(var(--vajax-blur-input));
      border: 1px solid var(--vajax-border-input);
      border-radius: var(--vajax-radius-md); padding: 0 14px;
      max-width: 520px; margin: 0 auto;
      transition: border-color var(--vajax-transition), background var(--vajax-transition);
    }
    .vajax-search:focus-within {
      border-color: var(--vajax-accent-border);
      background: var(--vajax-bg-input-focus);
    }
    .vajax-search__icon { color: var(--vajax-text-dim); margin-right: 10px; display: inline-flex; align-items: center; }
    .vajax-search__input {
      flex: 1; background: transparent; border: none; outline: none;
      color: var(--vajax-text-strong); font-family: inherit; font-size: 0.98rem;
      padding: 13px 0; min-width: 0;
    }
    .vajax-search__input::placeholder { color: var(--vajax-text-placeholder); }
    .vajax-search__hint {
      display: inline-block;
      font-family: var(--vajax-font-mono); font-size: 0.72rem;
      color: var(--vajax-text-placeholder);
      background: var(--vajax-bg-pill); border: 1px solid var(--vajax-border-strong);
      border-radius: 4px; padding: 1px 6px; margin-left: 8px; flex-shrink: 0;
    }

    /* Shortcuts bar */
    .vajax-shortcuts {
      display: flex; justify-content: center; flex-wrap: wrap;
      gap: 22px; padding: 14px 20px 24px 20px; margin-top: -6px;
      font-size: 0.78rem; color: var(--vajax-text-dim);
    }
    .vajax-shortcuts__item { display: inline-flex; align-items: center; gap: 6px; }
    .vajax-shortcuts kbd {
      display: inline-block;
      font-family: var(--vajax-font-mono); font-size: 0.72rem;
      padding: 2px 7px;
      background: var(--vajax-bg-pill); border: 1px solid var(--vajax-border-strong);
      border-radius: 4px; color: rgba(255,255,255,0.78);
      box-shadow: 0 1px 0 rgba(0,0,0,0.35);
      min-width: 18px; text-align: center;
    }

    /* Masonry layout */
    .vajax-homepage__content {
      column-gap: var(--vajax-gap-lg);
      display: block;
    }
    .vajax-reveal {
      break-inside: avoid; page-break-inside: avoid; -webkit-column-break-inside: avoid;
      display: block; width: 100%;
      margin-bottom: var(--vajax-gap-lg);
      opacity: 0; transform: translateY(16px);
      transition: opacity var(--vajax-transition-slow), transform var(--vajax-transition-slow);
      will-change: opacity, transform;
    }
    .vajax-reveal--in { opacity: 1; transform: none; }
    .vajax-reveal--full { column-span: all; -webkit-column-span: all; }

    /* Panel */
    .vajax-panel {
      position: relative;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 60%),
        var(--vajax-bg-panel);
      border: 1px solid var(--vajax-border);
      border-radius: var(--vajax-radius-lg);
      padding: var(--vajax-panel-padding-y) var(--vajax-panel-padding-x) var(--vajax-panel-padding-b);
      box-shadow: var(--vajax-shadow-sm);
      transition: border-color var(--vajax-transition), box-shadow var(--vajax-transition),
                  opacity var(--vajax-transition), transform var(--vajax-transition);
    }
    .vajax-panel--editing {
      border-color: var(--vajax-accent-border);
      box-shadow: var(--vajax-shadow-focus-accent);
      cursor: grab;
    }
    .vajax-panel--editing:active { cursor: grabbing; }
    .vajax-panel--editing a,
    .vajax-panel--editing button:not(.vajax-panel__ctrl) { pointer-events: none; }
    .vajax-panel--dragging { opacity: 0.4; transform: scale(0.98); }
    .vajax-panel--drop-target {
      border-color: var(--vajax-accent) !important;
      box-shadow: 0 0 0 2px rgba(var(--vajax-accent-rgb),0.6), 0 6px 24px rgba(0,0,0,0.55) !important;
    }

    .vajax-panel__controls {
      position: absolute; top: 8px; right: 8px; z-index: 10;
      display: flex; align-items: center; gap: 2px;
      background: var(--vajax-bg-control);
      backdrop-filter: blur(var(--vajax-blur-control));
      -webkit-backdrop-filter: blur(var(--vajax-blur-control));
      border-radius: var(--vajax-radius-sm);
      padding: 3px 4px 3px 6px;
      border: 1px solid var(--vajax-border-strong);
      pointer-events: auto; cursor: default;
    }
    .vajax-panel__drag-hint {
      display: inline-flex; align-items: center; justify-content: center;
      color: rgba(var(--vajax-accent-rgb),0.7);
      margin-right: 2px; cursor: grab;
    }
    .vajax-panel__ctrl {
      display: flex; align-items: center; justify-content: center;
      width: 24px; height: 24px;
      border-radius: var(--vajax-radius-xs);
      background: transparent; border: none; color: #ddd; cursor: pointer;
      transition: background var(--vajax-transition-fast), color var(--vajax-transition-fast);
    }
    .vajax-panel__ctrl:hover:not(:disabled) { background: rgba(255,255,255,0.1); color: var(--vajax-text-strong); }
    .vajax-panel__ctrl:disabled { opacity: 0.3; cursor: default; }
    .vajax-panel__ctrl--danger:hover:not(:disabled) { background: var(--vajax-danger-soft); color: var(--vajax-danger-text); }

    /* Edit FAB */
    .vajax-edit-fab {
      position: fixed; top: 78px; right: 24px; z-index: 50;
      width: 40px; height: 40px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: var(--vajax-bg-fab);
      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--vajax-border-strong);
      color: #ccc; cursor: pointer;
      transition: all var(--vajax-transition);
      box-shadow: var(--vajax-shadow-fab);
    }
    .vajax-edit-fab:hover {
      background: var(--vajax-bg-fab-hover);
      border-color: var(--vajax-accent-border);
      color: var(--vajax-text-strong); transform: scale(1.05);
    }
    .vajax-edit-fab--active,
    .vajax-edit-fab--active:hover {
      background: var(--vajax-accent); color: var(--vajax-accent-on);
      border-color: var(--vajax-accent);
    }

    /* Edit bar */
    .vajax-edit-bar {
      position: fixed; left: 50%; bottom: 20px; transform: translateX(-50%);
      z-index: 60;
      background: var(--vajax-bg-editbar);
      backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
      border: 1px solid var(--vajax-accent-border);
      border-radius: 14px; padding: 14px 18px;
      box-shadow: var(--vajax-shadow-lg);
      max-width: calc(100vw - 48px); min-width: 480px;
      animation: vajax-slideup 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes vajax-slideup {
      from { opacity: 0; transform: translateX(-50%) translateY(12px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @media (max-width: 600px) { .vajax-edit-bar { min-width: 0; width: calc(100vw - 32px); } }
    .vajax-edit-bar__title {
      font-size: 0.72rem; text-transform: uppercase;
      letter-spacing: var(--vajax-label-tracking);
      color: rgba(var(--vajax-accent-rgb),0.9);
      font-weight: 700; margin-bottom: 10px;
    }
    .vajax-edit-bar__row { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; }
    .vajax-edit-bar__add { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
    .vajax-edit-bar__add-label { font-size: 0.78rem; color: var(--vajax-text-dim); margin-right: 4px; }
    .vajax-edit-bar__add-btn {
      font-family: inherit; font-size: 0.78rem; padding: 5px 10px;
      border-radius: var(--vajax-radius-xs);
      background: rgba(var(--vajax-accent-rgb),0.1);
      border: 1px solid rgba(var(--vajax-accent-rgb),0.3);
      color: var(--vajax-accent-text); cursor: pointer;
      transition: background var(--vajax-transition-fast), border-color var(--vajax-transition-fast);
    }
    .vajax-edit-bar__add-btn:hover {
      background: rgba(var(--vajax-accent-rgb),0.2);
      border-color: var(--vajax-accent-border);
      color: var(--vajax-text-strong);
    }
    .vajax-edit-bar__spacer { flex: 1; }
    .vajax-edit-bar__reset, .vajax-edit-bar__done {
      font-family: inherit; font-size: 0.8rem; padding: 6px 14px;
      border-radius: 7px; cursor: pointer; transition: all var(--vajax-transition-fast);
    }
    .vajax-edit-bar__reset {
      background: transparent; border: 1px solid var(--vajax-border-strong);
      color: var(--vajax-text-dim);
    }
    .vajax-edit-bar__reset:hover { background: rgba(255,255,255,0.06); color: var(--vajax-text-strong); }
    .vajax-edit-bar__done {
      background: var(--vajax-accent); border: 1px solid var(--vajax-accent);
      color: var(--vajax-accent-on); font-weight: 600;
    }
    .vajax-edit-bar__hint { font-size: 0.78rem; color: rgba(255,255,255,0.4); font-style: italic; }

    /* Theme editor */
    .vajax-theme-editor {
      position: fixed; top: 128px; right: 24px; z-index: 55;
      display: flex; flex-direction: column; align-items: flex-end; gap: 8px;
    }
    .vajax-theme-editor__toggle {
      font-family: inherit; font-size: 0.78rem; padding: 8px 14px;
      border-radius: var(--vajax-radius-sm);
      background: var(--vajax-bg-fab);
      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--vajax-border-strong);
      color: #ddd; cursor: pointer;
      transition: all var(--vajax-transition);
      box-shadow: var(--vajax-shadow-fab);
    }
    .vajax-theme-editor__toggle:hover { border-color: var(--vajax-accent-border); color: var(--vajax-text-strong); }
    .vajax-theme-editor--open .vajax-theme-editor__toggle {
      background: var(--vajax-accent); color: var(--vajax-accent-on);
      border-color: var(--vajax-accent);
    }
    .vajax-theme-editor__body {
      width: 300px;
      background: var(--vajax-bg-editbar);
      backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
      border: 1px solid var(--vajax-accent-border);
      border-radius: var(--vajax-radius-md);
      padding: 14px 16px; box-shadow: var(--vajax-shadow-lg);
      display: flex; flex-direction: column; gap: 12px;
      max-height: calc(100vh - 200px); overflow-y: auto;
    }
    .vajax-theme-editor__row { display: flex; flex-direction: column; gap: 6px; }
    .vajax-theme-editor__label {
      font-size: 0.72rem; text-transform: uppercase;
      letter-spacing: 0.1em; color: var(--vajax-text-dim); font-weight: 500;
    }
    .vajax-theme-editor__input {
      font-family: inherit; font-size: 0.88rem; padding: 7px 10px;
      background: rgba(0,0,0,0.35);
      border: 1px solid var(--vajax-border-strong);
      border-radius: var(--vajax-radius-xs);
      color: var(--vajax-text-strong); outline: none;
      transition: border-color var(--vajax-transition-fast);
    }
    .vajax-theme-editor__input:focus { border-color: var(--vajax-accent-border); }
    .vajax-theme-editor__segmented {
      display: flex; gap: 4px;
      background: rgba(0,0,0,0.35);
      border: 1px solid var(--vajax-border-strong);
      border-radius: var(--vajax-radius-xs); padding: 3px;
    }
    .vajax-theme-editor__seg {
      flex: 1; font-family: var(--vajax-font-mono); font-size: 0.82rem;
      padding: 5px 0; border-radius: 4px;
      background: transparent; border: none;
      color: var(--vajax-text-dim); cursor: pointer;
      transition: all var(--vajax-transition-fast);
    }
    .vajax-theme-editor__seg:hover { color: var(--vajax-text-strong); background: rgba(255,255,255,0.06); }
    .vajax-theme-editor__seg--active,
    .vajax-theme-editor__seg--active:hover {
      background: var(--vajax-accent); color: var(--vajax-accent-on); font-weight: 600;
    }
    .vajax-theme-editor__slider-wrap { display: flex; align-items: center; gap: 10px; }
    .vajax-theme-editor__slider { flex: 1; accent-color: var(--vajax-accent); height: 4px; cursor: pointer; }
    .vajax-theme-editor__value {
      font-family: var(--vajax-font-mono); font-size: 0.72rem;
      color: var(--vajax-accent-text); min-width: 46px; text-align: right;
    }
    .vajax-theme-editor__reset {
      margin-top: 4px;
      font-family: inherit; font-size: 0.78rem; padding: 6px 12px;
      border-radius: var(--vajax-radius-xs);
      background: transparent; border: 1px solid var(--vajax-border-strong);
      color: var(--vajax-text-dim); cursor: pointer;
      transition: all var(--vajax-transition-fast);
    }
    .vajax-theme-editor__reset:hover { background: rgba(255,255,255,0.06); color: var(--vajax-text-strong); }
    .vajax-theme-editor__divider { height: 1px; background: var(--vajax-border); margin: 4px 0; }
    .vajax-theme-editor__label--checkbox {
      display: flex; align-items: center; gap: 8px; cursor: pointer;
      text-transform: none; letter-spacing: 0;
      font-size: 0.82rem; color: var(--vajax-text); font-weight: 500;
    }
    .vajax-theme-editor__label--checkbox input[type="checkbox"] {
      accent-color: var(--vajax-accent); cursor: pointer; margin: 0; flex-shrink: 0;
    }

    /* Section titles */
    .vajax-section__title {
      font-size: 0.78rem; text-transform: uppercase;
      letter-spacing: var(--vajax-label-tracking);
      color: var(--vajax-text-muted);
      margin: 0 0 16px 0; font-weight: 600;
    }
    .vajax-panel__controls ~ .vajax-section__title { margin-right: 120px; }

    /* Week activity */
    .vajax-week-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .vajax-week-card {
      background:
        linear-gradient(160deg, var(--vajax-bg-panel-accent) 0%, var(--vajax-bg-panel-accent-2) 60%),
        var(--vajax-bg-panel-2);
      border: 1px solid var(--vajax-accent-border-soft);
      border-radius: var(--vajax-radius-md);
      padding: 14px 12px; text-align: center;
      transition: border-color var(--vajax-transition), transform var(--vajax-transition);
    }
    .vajax-week-card:hover { border-color: var(--vajax-accent-border); transform: translateY(-2px); }
    .vajax-week-card__value {
      font-size: 1.5rem; font-weight: 800; color: var(--vajax-text-strong);
      line-height: 1; letter-spacing: -0.02em;
    }
    .vajax-week-card__label {
      font-size: 0.68rem; color: var(--vajax-text-dim);
      text-transform: uppercase; letter-spacing: 0.12em;
      margin-top: 6px; font-weight: 500;
    }
    .vajax-week-card--accent {
      background:
        linear-gradient(160deg, var(--vajax-streak-bg-a) 0%, var(--vajax-streak-bg-b) 60%),
        var(--vajax-bg-panel-2);
      border-color: var(--vajax-streak-border);
    }
    .vajax-week-card--accent:hover { border-color: var(--vajax-streak-color); }
    .vajax-week-card--accent .vajax-week-card__value { color: var(--vajax-streak-color); }
    .vajax-week-card--accent .vajax-week-card__label { color: rgba(255,180,120,0.75); }

    /* Daily pick */
    .vajax-daily-pick {
      position: relative; display: block;
      border-radius: var(--vajax-radius-lg); overflow: hidden;
      min-height: 220px; text-decoration: none; color: inherit; background: #111;
    }
    .vajax-daily-pick__bg { position: absolute; inset: 0; }
    .vajax-daily-pick__bg img {
      width: 100%; height: 100%; object-fit: cover;
      filter: brightness(0.65) saturate(1.1);
    }
    .vajax-daily-pick__overlay {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.35) 100%);
    }
    .vajax-daily-pick__content {
      position: relative; z-index: 1;
      padding: 24px 28px;
      display: flex; flex-direction: column; gap: 6px;
      min-height: 220px; justify-content: flex-end;
    }
    .vajax-daily-pick__badge {
      align-self: flex-start;
      font-size: 0.7rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: var(--vajax-label-tracking);
      background: var(--vajax-o-bg); color: var(--vajax-text-strong);
      padding: 4px 10px; border-radius: 4px;
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
    }
    .vajax-daily-pick__title {
      font-size: 1.6rem; font-weight: 700; color: var(--vajax-text-strong);
      margin: 0; line-height: 1.2; letter-spacing: -0.02em;
      text-shadow: 0 2px 20px rgba(0,0,0,0.7);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .vajax-daily-pick__performers {
      font-size: 0.92rem; color: rgba(255,255,255,0.85);
      text-shadow: 0 1px 8px rgba(0,0,0,0.7);
    }
    .vajax-daily-pick__meta {
      display: flex; gap: 16px; flex-wrap: wrap;
      font-size: 0.8rem; color: rgba(255,255,255,0.65);
      text-shadow: 0 1px 6px rgba(0,0,0,0.7);
    }

    /* Mood chips */
    .vajax-mood-chips, .vajax-filter-chips { display: flex; flex-wrap: wrap; gap: var(--vajax-gap-sm); }
    .vajax-mood-chip {
      background: var(--vajax-bg-chip);
      border: 1px solid var(--vajax-border);
      color: #ddd; border-radius: var(--vajax-radius-pill);
      padding: 8px 16px; font-family: inherit; font-size: 0.85rem;
      cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
      transition: background var(--vajax-transition-fast), border-color var(--vajax-transition-fast),
                  transform var(--vajax-transition-fast), color var(--vajax-transition-fast);
      line-height: 1.2; white-space: nowrap;
    }
    .vajax-mood-chip:disabled { cursor: default; opacity: 0.55; }
    .vajax-mood-chip__label { font-weight: 500; }
    .vajax-mood-chip__hint { color: var(--vajax-text-placeholder); font-size: 0.74rem; }
    .vajax-mood-chip__icon { display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; }

    .vajax-mood-chip--scene { --vajax-mood-rgb: 126,179,255; }
    .vajax-mood-chip--image { --vajax-mood-rgb: 6,182,212; }
    .vajax-mood-chip--any   { --vajax-mood-rgb: 168,85,247; }
    .vajax-mood-chip--scene,
    .vajax-mood-chip--image,
    .vajax-mood-chip--any {
      background: rgba(var(--vajax-mood-rgb), 0.06);
      border-color: rgba(var(--vajax-mood-rgb), 0.22);
    }
    .vajax-mood-chip--scene:hover:not(:disabled),
    .vajax-mood-chip--image:hover:not(:disabled),
    .vajax-mood-chip--any:hover:not(:disabled) {
      background: rgba(var(--vajax-mood-rgb), 0.14);
      border-color: rgba(var(--vajax-mood-rgb), 0.6);
      color: var(--vajax-text-strong);
    }
    .vajax-mood-chip--scene .vajax-mood-chip__icon,
    .vajax-mood-chip--image .vajax-mood-chip__icon,
    .vajax-mood-chip--any .vajax-mood-chip__icon { color: rgb(var(--vajax-mood-rgb)); opacity: 0.9; }
    .vajax-mood-chip--scene .vajax-mood-chip__hint,
    .vajax-mood-chip--image .vajax-mood-chip__hint,
    .vajax-mood-chip--any .vajax-mood-chip__hint { color: rgba(var(--vajax-mood-rgb), 0.7); }
    .vajax-mood-chip--busy {
      border-color: rgb(var(--vajax-mood-rgb)) !important;
      color: var(--vajax-text-strong) !important;
    }

    /* Saved filter chips */
    .vajax-filter-chip {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(var(--vajax-accent-rgb),0.06);
      border: 1px solid rgba(var(--vajax-accent-rgb),0.18);
      color: var(--vajax-accent-text); border-radius: var(--vajax-radius-sm);
      padding: 7px 12px; font-size: 0.82rem;
      text-decoration: none;
      transition: background var(--vajax-transition-fast), border-color var(--vajax-transition-fast);
    }
    .vajax-filter-chip:hover {
      background: rgba(var(--vajax-accent-rgb),0.13);
      border-color: var(--vajax-accent-border);
      color: var(--vajax-text-strong);
    }
    .vajax-filter-chip__icon { display: inline-flex; align-items: center; justify-content: center; opacity: 0.85; flex-shrink: 0; }
    .vajax-filter-chip__name { font-weight: 500; }
    .vajax-filter-chip__mode {
      font-size: 0.66rem; text-transform: uppercase;
      letter-spacing: 0.08em; color: rgba(255,255,255,0.4);
      background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px;
    }
    .vajax-filter-chip--performers { --vajax-chip-rgb: 236, 72, 153; }
    .vajax-filter-chip--studios    { --vajax-chip-rgb: 168, 85, 247; }
    .vajax-filter-chip--tags       { --vajax-chip-rgb: 34, 197, 94; }
    .vajax-filter-chip--groups     { --vajax-chip-rgb: 249, 115, 22; }
    .vajax-filter-chip--galleries  { --vajax-chip-rgb: 234, 179, 8; }
    .vajax-filter-chip--images     { --vajax-chip-rgb: 6, 182, 212; }
    .vajax-filter-chip--performers, .vajax-filter-chip--studios,
    .vajax-filter-chip--tags, .vajax-filter-chip--groups,
    .vajax-filter-chip--galleries, .vajax-filter-chip--images {
      background: rgba(var(--vajax-chip-rgb), 0.08);
      border-color: rgba(var(--vajax-chip-rgb), 0.22);
      color: rgb(var(--vajax-chip-rgb));
    }
    .vajax-filter-chip--performers:hover, .vajax-filter-chip--studios:hover,
    .vajax-filter-chip--tags:hover, .vajax-filter-chip--groups:hover,
    .vajax-filter-chip--galleries:hover, .vajax-filter-chip--images:hover {
      background: rgba(var(--vajax-chip-rgb), 0.18);
      border-color: rgba(var(--vajax-chip-rgb), 0.55);
      color: rgb(var(--vajax-chip-rgb));
    }
    .vajax-filter-chip--performers .vajax-filter-chip__mode,
    .vajax-filter-chip--studios .vajax-filter-chip__mode,
    .vajax-filter-chip--tags .vajax-filter-chip__mode,
    .vajax-filter-chip--groups .vajax-filter-chip__mode,
    .vajax-filter-chip--galleries .vajax-filter-chip__mode,
    .vajax-filter-chip--images .vajax-filter-chip__mode {
      background: rgba(var(--vajax-chip-rgb), 0.18);
      color: rgba(var(--vajax-chip-rgb), 0.9);
    }

    /* Heatmap */
    .vajax-heatmap-wrap { display: flex; flex-direction: column; gap: 8px; }
    .vajax-heatmap__meta {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.72rem; color: var(--vajax-text-dim); flex-wrap: wrap;
    }
    .vajax-heatmap__legend { display: inline-flex; align-items: center; gap: 3px; margin-left: auto; }
    .vajax-heatmap__legend .vajax-heatmap__day { width: 7px; height: 7px; }
    .vajax-heatmap { display: flex; gap: 1px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: thin; }
    .vajax-heatmap__week { display: flex; flex-direction: column; gap: 1px; }
    .vajax-heatmap__day {
      width: 7px; height: 7px; border-radius: 1.5px;
      background: rgba(255,255,255,0.05); flex-shrink: 0;
    }
    .vajax-heatmap__day--empty { background: transparent; }
    .vajax-heatmap__day--l0 { background: rgba(255,255,255,0.06); }
    .vajax-heatmap__day--l1 { background: rgba(var(--vajax-accent-rgb),0.32); }
    .vajax-heatmap__day--l2 { background: rgba(var(--vajax-accent-rgb),0.55); }
    .vajax-heatmap__day--l3 { background: rgba(var(--vajax-accent-rgb),0.78); }
    .vajax-heatmap__day--l4 { background: var(--vajax-accent); }

    /* Performer spotlight */
    .vajax-spotlight {
      display: block; text-decoration: none; color: inherit;
      transition: transform var(--vajax-transition);
    }
    .vajax-spotlight:hover { transform: translateY(-2px); }
    .vajax-spotlight__image {
      position: relative;
      border-radius: var(--vajax-radius-md); overflow: hidden;
      background: var(--vajax-bg-scene-thumb); line-height: 0;
    }
    .vajax-spotlight__image img { width: 100%; height: auto; display: block; }
    .vajax-spotlight__placeholder {
      width: 100%; aspect-ratio: 3 / 4;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--vajax-bg-skeleton-a), var(--vajax-bg-skeleton-b));
      color: rgba(255,255,255,0.35); font-size: 3rem; font-weight: 700;
    }
    .vajax-spotlight__fav-badge {
      position: absolute; top: 8px; right: 8px;
      background: rgba(245,166,35,0.95); color: #1a1200;
      font-size: 0.78rem; line-height: 1; padding: 5px 8px;
      border-radius: 6px; font-weight: 700;
      backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    }
    .vajax-spotlight__body { padding: 14px 4px 0 4px; display: flex; flex-direction: column; gap: 8px; }
    .vajax-spotlight__name {
      font-size: 1.15rem; font-weight: 700; color: var(--vajax-text-strong);
      margin: 0; letter-spacing: -0.02em; text-align: center;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .vajax-spotlight__details {
      font-size: 0.74rem; color: var(--vajax-text-dim);
      text-align: center; line-height: 1.4;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .vajax-spotlight__stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(50px, 1fr)); gap: 6px; }
    .vajax-spotlight__stat { text-align: center; }
    .vajax-spotlight__stat-value { font-size: 1rem; font-weight: 700; color: var(--vajax-text-strong); line-height: 1.1; }
    .vajax-spotlight__stat-label {
      font-size: 0.62rem; color: var(--vajax-text-placeholder);
      text-transform: uppercase; letter-spacing: 0.1em; margin-top: 3px;
    }
    .vajax-spotlight__cta { text-align: center; color: var(--vajax-accent); font-size: 0.8rem; font-weight: 500; }

    /* Favorites */
    .vajax-favorites { display: flex; flex-direction: column; gap: 14px; }
    .vajax-fav-group { display: flex; flex-direction: column; gap: 8px; }
    .vajax-fav-group__label {
      font-size: 0.68rem; text-transform: uppercase;
      letter-spacing: 0.12em; color: rgba(255,255,255,0.4); font-weight: 500;
    }
    .vajax-fav-row { display: flex; gap: 12px; overflow-x: auto; padding: 2px 2px 6px 2px; scrollbar-width: thin; }
    .vajax-fav-avatar {
      display: flex; flex-direction: column; align-items: center;
      gap: 6px; text-decoration: none; color: inherit;
      flex-shrink: 0; width: 76px;
    }
    .vajax-fav-avatar img, .vajax-fav-avatar__placeholder {
      width: 68px; height: 68px; border-radius: 50%;
      object-fit: cover; display: block;
      border: 2px solid var(--vajax-border-soft);
      transition: border-color var(--vajax-transition), transform var(--vajax-transition);
      background: linear-gradient(135deg, var(--vajax-bg-skeleton-a), var(--vajax-bg-skeleton-b));
    }
    .vajax-fav-avatar:hover img,
    .vajax-fav-avatar:hover .vajax-fav-avatar__placeholder {
      border-color: rgba(var(--vajax-accent-rgb),0.55); transform: scale(1.04);
    }
    .vajax-fav-avatar__placeholder {
      display: flex; align-items: center; justify-content: center;
      color: var(--vajax-text-dim); font-size: 1.4rem; font-weight: 700;
    }
    .vajax-fav-avatar__name {
      font-size: 0.72rem; color: rgba(255,255,255,0.7);
      text-align: center; max-width: 76px;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .vajax-fav-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .vajax-fav-tag {
      display: inline-block;
      background: var(--vajax-bg-tag); border: 1px solid var(--vajax-border);
      color: #ddd; font-size: 0.78rem;
      padding: 4px 11px; border-radius: var(--vajax-radius-pill);
      text-decoration: none;
      transition: background var(--vajax-transition-fast), border-color var(--vajax-transition-fast),
                  color var(--vajax-transition-fast);
    }
    .vajax-fav-tag:hover {
      background: var(--vajax-accent-soft);
      border-color: var(--vajax-accent-border);
      color: var(--vajax-text-strong);
    }

    /* Scene cards */
    .vajax-scene-row {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: var(--vajax-gap);
    }
    .vajax-scene-card {
      display: block; background: var(--vajax-bg-scene-card);
      border-radius: var(--vajax-radius-md);
      overflow: hidden; text-decoration: none; color: inherit;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
      border: 1px solid var(--vajax-border-card);
    }
    .vajax-scene-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--vajax-shadow-card-hover);
      border-color: var(--vajax-border-card-hover);
    }
    .vajax-scene-card__thumb {
      position: relative; aspect-ratio: 16 / 9;
      background: var(--vajax-bg-scene-thumb); overflow: hidden;
    }
    .vajax-scene-card__img, .vajax-scene-card__video {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; display: block;
    }
    .vajax-scene-card__img { z-index: 1; }
    .vajax-scene-card__video {
      z-index: 2; opacity: 0;
      transition: opacity 0.25s ease; pointer-events: none;
    }
    .vajax-scene-card__video--visible { opacity: 1; }
    .vajax-scene-card__placeholder {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, var(--vajax-bg-skeleton-a), var(--vajax-bg-skeleton-b));
    }
    .vajax-scene-card__duration {
      position: absolute; bottom: 6px; right: 6px; z-index: 3;
      background: rgba(0,0,0,0.72);
      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
      color: var(--vajax-text-strong); font-size: 0.66rem;
      padding: 2px 6px; border-radius: 4px; font-weight: 500;
    }
    .vajax-scene-card__o {
      position: absolute; top: 6px; right: 6px; z-index: 3;
      display: inline-flex; align-items: center; gap: 3px;
      background: var(--vajax-o-bg); color: var(--vajax-text-strong);
      font-size: 0.66rem; padding: 2px 7px; border-radius: 4px;
      font-weight: 600; line-height: 1;
      backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    }
    .vajax-scene-card__o svg { display: block; }
    .vajax-scene-card__progress {
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 3;
      height: 2px; background: rgba(0,0,0,0.55);
    }
    .vajax-scene-card__progress > div {
      height: 100%;
      background: linear-gradient(90deg, var(--vajax-o-color), #ff6b8a);
    }
    .vajax-scene-card__body { padding: 10px 11px 12px 11px; }
    .vajax-scene-card__title {
      font-size: 0.82rem; color: var(--vajax-text-body); font-weight: 500;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      line-height: 1.35;
    }
    .vajax-scene-card__sub {
      margin-top: 2px; font-size: 0.7rem;
      color: var(--vajax-text-dim);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .vajax-scene-card__sub--performers { color: rgba(var(--vajax-accent-rgb),0.85); }
    .vajax-scene-card__meta {
      margin-top: 5px; display: flex;
      align-items: center; justify-content: space-between; gap: 6px;
      font-size: 0.68rem; color: var(--vajax-text-faint);
    }
    .vajax-scene-card__meta-item { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .vajax-scene-card__meta-item--studio { max-width: 70%; }
    .vajax-scene-card__meta-item--plays { color: var(--vajax-text-muted); font-weight: 500; flex-shrink: 0; }

    /* Entry cards (studios / galleries / groups) */
    .vajax-entry-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: var(--vajax-gap);
    }
    .vajax-entry-card {
      display: block;
      background: var(--vajax-bg-scene-card);
      border: 1px solid var(--vajax-border-card);
      border-radius: var(--vajax-radius-md);
      overflow: hidden; text-decoration: none; color: inherit;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
    }
    .vajax-entry-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--vajax-shadow-card-hover);
      border-color: var(--vajax-border-card-hover);
    }
    .vajax-entry-card__thumb {
      position: relative; aspect-ratio: 1 / 1;
      background: var(--vajax-bg-scene-thumb); overflow: hidden;
    }
    .vajax-entry-card__thumb img {
      width: 100%; height: 100%; object-fit: cover; display: block;
      transition: transform 0.35s ease;
    }
    .vajax-entry-card:hover .vajax-entry-card__thumb img { transform: scale(1.04); }
    .vajax-entry-card__placeholder {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--vajax-bg-skeleton-a), var(--vajax-bg-skeleton-b));
      color: rgba(255,255,255,0.4); font-size: 1.6rem; font-weight: 700;
    }
    .vajax-entry-card__badge {
      position: absolute; top: 6px; right: 6px;
      background: var(--vajax-o-bg); color: var(--vajax-text-strong);
      font-size: 0.66rem; padding: 2px 7px; border-radius: 4px; font-weight: 600;
      backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
    }
    .vajax-entry-card__body { padding: 9px 11px 11px 11px; }
    .vajax-entry-card__title {
      font-size: 0.8rem; color: var(--vajax-text-body); font-weight: 500;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      line-height: 1.35;
    }
    .vajax-entry-card__sub {
      margin-top: 2px; font-size: 0.68rem; color: var(--vajax-text-faint);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    /* Loading / empty states */
    .vajax-loading, .vajax-empty {
      color: rgba(255,255,255,0.4); padding: 20px 4px;
      text-align: center; font-style: italic; font-size: 0.86rem;
    }

    /* Image masonry \u2014 each tile uses the image's natural aspect ratio */
    .vajax-image-masonry { column-count: 3; column-gap: var(--vajax-gap); }
    @media (max-width: 1400px) { .vajax-image-masonry { column-count: 2; } }
    @media (max-width: 600px)  { .vajax-image-masonry { column-count: 1; } }
    .vajax-image-tile {
      display: block;
      break-inside: avoid; page-break-inside: avoid; -webkit-column-break-inside: avoid;
      margin-bottom: var(--vajax-gap);
      border-radius: var(--vajax-radius-md);
      overflow: hidden;
      background: var(--vajax-bg-scene-thumb);
      border: 1px solid var(--vajax-border-card);
      text-decoration: none; color: inherit;
      transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
    }
    .vajax-image-tile:hover {
      transform: translateY(-2px);
      box-shadow: var(--vajax-shadow-card-hover);
      border-color: var(--vajax-border-card-hover);
    }
    .vajax-image-tile img { width: 100%; height: auto; display: block; object-fit: cover; }
  `,document.head.appendChild(e)}function he(e){if(document.getElementById("vajax-homepage-root"))return;console.log("[Vajax Homepage] Mounting into",e),e.classList.add("vajax-hide-native");let r=document.createElement("div");r.id="vajax-homepage-root",r.className="vajax-homepage-root",e.appendChild(r),Y.render(a.createElement(me,null),r)}function W(){let e=!1,r=setInterval(()=>{window.csLib&&typeof window.csLib.PathElementListener=="function"&&(e=!0,clearInterval(r),console.log("[Vajax Homepage] csLib detected, registering listener"),window.csLib.PathElementListener("/",".recommendations-container",he))},100);setTimeout(()=>{e||(clearInterval(r),console.warn("[Vajax Homepage] csLib not found within 10s"))},1e4)}W();})()