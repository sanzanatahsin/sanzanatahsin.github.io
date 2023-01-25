/*! For license information please see component---src-pages-pos-index-js-91035299365913b434fb.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[588],{4184:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},9309:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Y}});var a=r(5785),n=r(7294),s=r(4184),o=r.n(s),l=r(5893);const i=["xxl","xl","lg","md","sm","xs"],c=n.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"}),{Consumer:u,Provider:f}=c;function d(e,t){const{prefixes:r}=(0,n.useContext)(c);return e||r[t]||t}function m(){const{breakpoints:e}=(0,n.useContext)(c);return e}function p(){const{minBreakpoint:e}=(0,n.useContext)(c);return e}const v=n.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:a,...n},s)=>{const i=d(e,"container"),c="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(r,{ref:s,...n,className:o()(a,t?`${i}${c}`:i)})}));v.displayName="Container",v.defaultProps={fluid:!1};var y=v;const b=n.forwardRef((({bsPrefix:e,size:t,vertical:r,className:a,as:n="div",...s},i)=>{const c=d(e,"btn-group");let u=c;return r&&(u=`${c}-vertical`),(0,l.jsx)(n,{...s,ref:i,className:o()(a,u,t&&`${c}-${t}`)})}));b.displayName="ButtonGroup",b.defaultProps={vertical:!1,role:"group"};var g=b;const h=["as","disabled"];function x({tagName:e,disabled:t,href:r,target:a,rel:n,role:s,onClick:o,tabIndex:l=0,type:i}){e||(e=null!=r||null!=a||null!=n?"a":"button");const c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];const u=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==o||o(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:l,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?n:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const N=n.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,h);const[s,{tagName:o}]=x(Object.assign({tagName:r,disabled:a},n));return(0,l.jsx)(o,Object.assign({},n,s,{ref:t}))}));N.displayName="Button";const C=n.forwardRef((({as:e,bsPrefix:t,variant:r,size:a,active:n,className:s,...i},c)=>{const u=d(t,"btn"),[f,{tagName:m}]=x({tagName:e,...i}),p=m;return(0,l.jsx)(p,{...f,...i,ref:c,className:o()(s,u,n&&"active",r&&`${u}-${r}`,a&&`${u}-${a}`,i.href&&i.disabled&&"disabled")})}));C.displayName="Button",C.defaultProps={variant:"primary",active:!1,disabled:!1};var w=C;const $=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},n)=>{const s=d(e,"row"),i=m(),c=p(),u=`${s}-cols`,f=[];return i.forEach((e=>{const t=a[e];let r;delete a[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n=e!==c?`-${e}`:"";null!=r&&f.push(`${u}${n}-${r}`)})),(0,l.jsx)(r,{ref:n,...a,className:o()(t,s,...f)})}));$.displayName="Row";var E=$;const k=n.forwardRef(((e,t)=>{const[{className:r,...a},{as:n="div",bsPrefix:s,spans:i}]=function({as:e,bsPrefix:t,className:r,...a}){t=d(t,"col");const n=m(),s=p(),l=[],i=[];return n.forEach((e=>{const r=a[e];let n,o,c;delete a[e],"object"==typeof r&&null!=r?({span:n,offset:o,order:c}=r):n=r;const u=e!==s?`-${e}`:"";n&&l.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=c&&i.push(`order${u}-${c}`),null!=o&&i.push(`offset${u}-${o}`)})),[{...a,className:o()(r,...l,...i)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,l.jsx)(n,{...a,ref:t,className:o()(r,!i.length&&s)})}));k.displayName="Col";var j=k,P=/-(.)/g;const S=e=>{return e[0].toUpperCase()+(t=e,t.replace(P,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function O(e,{displayName:t=S(e),Component:r,defaultProps:a}={}){const s=n.forwardRef((({className:t,bsPrefix:a,as:n=r||"div",...s},i)=>{const c=d(a,e);return(0,l.jsx)(n,{ref:i,className:o()(t,c),...s})}));return s.defaultProps=a,s.displayName=t,s}var R=e=>n.forwardRef(((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:o()(t.className,e)})));const B=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:a="img",...n},s)=>{const i=d(e,"card-img");return(0,l.jsx)(a,{ref:s,className:o()(r?`${i}-${r}`:i,t),...n})}));B.displayName="CardImg";var I=B;const z=n.createContext(null);z.displayName="CardHeaderContext";var J=z;const H=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},s)=>{const i=d(e,"card-header"),c=(0,n.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,l.jsx)(J.Provider,{value:c,children:(0,l.jsx)(r,{ref:s,...a,className:o()(t,i)})})}));H.displayName="CardHeader";var T=H;const _=R("h5"),A=R("h6"),D=O("card-body"),L=O("card-title",{Component:_}),U=O("card-subtitle",{Component:A}),W=O("card-link",{Component:"a"}),F=O("card-text",{Component:"p"}),G=O("card-footer"),K=O("card-img-overlay"),M=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:a,border:n,body:s,children:i,as:c="div",...u},f)=>{const m=d(e,"card");return(0,l.jsx)(c,{ref:f,...u,className:o()(t,m,r&&`bg-${r}`,a&&`text-${a}`,n&&`border-${n}`),children:s?(0,l.jsx)(D,{children:i}):i})}));M.displayName="Card",M.defaultProps={body:!1};var Z=Object.assign(M,{Img:I,Title:L,Subtitle:U,Body:D,Link:W,Text:F,Header:T,Footer:G,ImgOverlay:K});var q=function(e){const{title:t,image:r,price:a,handleClick:s}=e;return n.createElement(Z,{style:{width:"12.5rem"}},n.createElement(Z.Img,{variant:"top",height:"450px",src:r}),n.createElement(Z.Body,null,n.createElement(Z.Title,null,t," - ",a," Baht"),"               ",n.createElement(w,{variant:"primary",onClick:s},"Add to Cart")))},Q=function(){};var V="undefined"!=typeof window,X=function(e,t,r){if(!V)return[t,Q,Q];if(!e)throw new Error("useLocalStorage key may not be falsy");var a=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,s=(0,n.useRef)((function(e){try{var n=r?r.raw?String:r.serializer:JSON.stringify,s=localStorage.getItem(e);return null!==s?a(s):(t&&localStorage.setItem(e,n(t)),t)}catch(o){return t}})),o=(0,n.useState)((function(){return s.current(e)})),l=o[0],i=o[1];(0,n.useLayoutEffect)((function(){return i(s.current(e))}),[e]);var c=(0,n.useCallback)((function(t){try{var n="function"==typeof t?t(l):t;if(void 0===n)return;var s=void 0;s=r?r.raw?"string"==typeof n?n:JSON.stringify(n):r.serializer?r.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(e,s),i(a(s))}catch(o){}}),[e,i]),u=(0,n.useCallback)((function(){try{localStorage.removeItem(e),i(void 0)}catch(o){}}),[e,i]);return[l,c,u]};var Y=function(){const[e,t]=X("wine","Wines");let[r,s]=n.useState([]),[o,l]=n.useState("rose"),[i,c]=X("cart",[]);function u(e){i.push(e),console.table(i),c((0,a.Z)(i))}return n.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+o).then((e=>e.json())).then((t=>{for(let r=0;r<t.length;r++)e.push(n.createElement(q,{key:r,image:t[r].image,title:t[r].winery,price:59,handleClick:()=>{u(t[r])}}));s(e)}))}),[o]),n.createElement(y,null,n.createElement("h1",null,"POS"),n.createElement(g,{"aria-label":"Basic example"},n.createElement(w,{variant:"secondary",onClick:()=>{l("whites")}},"Whites"),n.createElement(w,{variant:"secondary",onClick:()=>{l("rose")}},"Rose")),n.createElement(E,null,n.createElement(j,null,n.createElement(E,null,"                   ",r)),n.createElement(j,{sm:3},n.createElement("h2",null,"Cart ",e),"               ",i.map(((e,t)=>n.createElement(E,{key:t},n.createElement(j,null,e.winery),n.createElement(j,null,59)))),n.createElement(E,null,"                   Total: ",59*i.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-pos-index-js-91035299365913b434fb.js.map