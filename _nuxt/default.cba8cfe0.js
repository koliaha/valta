import{r as g,o as c,b as u,f as y,F as m,i as v,u as x,p as h,t as w,q as i,K as k,s as _,v as A,R as K,x as T,y as R,z as C,A as l,B as N,S as B,C as L,D as S,T as b,E as j,a as H,h as p}from"./entry.80a31c6e.js";const V=""+new URL("map.adf5b5c0.svg",import.meta.url).href,f=""+new URL("arrow_orange.9e3dea03.svg",import.meta.url).href,F=""+new URL("phone.5f684645.svg",import.meta.url).href,O={class:"hidden md:flex justify-between py-3 flex-wrap"},P=h('<div class="flex gap-x-[31px]"><div class="nav-city-select flex items-center"><img src="'+V+'" alt=""><span class="ml-2 mr-1">Москва</span><img src="'+f+'" alt="arrow_orange"></div><span class="nav-city flex items-center"><img src="'+F+'" alt="phone"><a href="tel:+7 (495) 797-34-73" class="ml-2 mr-1">+7 (495) 797-34-73</a><img src="'+f+'" alt="arrow_orange"></span></div>',1),U={class:"max-w-198px flex gap-x-[30px]"},$=["href"],D={__name:"TheNav",setup(e){const a=g([{text:"Портфель новинок",route:"#"},{text:"О Валте",route:"#"},{text:"Академия зообизнеса ",route:"#"},{text:"Работа мечты",route:"#"},{text:"Контакты",route:"#"}]);return(n,t)=>(c(),u("div",O,[P,y("nav",U,[(c(!0),u(m,null,v(x(a),({text:o,route:r},s)=>(c(),u("a",{key:s,href:r},w(o),9,$))),128))])]))}},E=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var t;return((t=e.params[n.slice(1)])==null?void 0:t.toString())||""}),I=(e,a)=>{const n=e.route.matched.find(o=>{var r;return((r=o.components)==null?void 0:r.default)===e.Component.type}),t=a??(n==null?void 0:n.meta.key)??(n&&E(e.route,n));return typeof t=="function"?t(e.route):t},q=(e,a)=>({default:()=>e?i(k,e===!0?{}:e,a):a}),z=_({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a}){const n=A();return()=>i(K,{name:e.name,route:e.route,...a},{default:t=>{if(!t.Component)return;const o=I(t,e.pageKey),r=n.deferHydration(),s=!!(e.transition??t.route.meta.pageTransition??l),d=s&&J([e.transition,t.route.meta.pageTransition,l,{onAfterLeave:()=>{n.callHook("page:transition:finish",t.Component)}}].filter(Boolean));return N(b,s&&d,q(e.keepalive??t.route.meta.keepalive??S,i(B,{onPending:()=>n.callHook("page:start",t.Component),onResolve:()=>{L(()=>n.callHook("page:finish",t.Component).finally(r))}},{default:()=>i(M,{key:o,routeProps:t,pageKey:o,hasTransition:s})}))).default()}})}});function G(e){return Array.isArray(e)?e:e?[e]:[]}function J(e){const a=e.map(n=>({...n,onAfterLeave:G(n.onAfterLeave)}));return j(...a)}const M=_({name:"RouteProvider",props:["routeProps","pageKey","hasTransition"],setup(e){const a=e.pageKey,n=e.routeProps.route,t={};for(const o in e.routeProps.route)t[o]=T(()=>a===e.pageKey?e.routeProps.route[o]:n[o]);return R("_route",C(t)),()=>i(e.routeProps.Component)}}),Q={};function W(e,a){const n=D,t=z;return c(),u(m,null,[p(n),p(t)],64)}const Y=H(Q,[["render",W]]);export{Y as default};
