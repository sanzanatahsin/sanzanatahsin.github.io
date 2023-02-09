/*! For license information please see ed189969d8e73df3b8fa53f7340c53f7fddd75e4-fa55ccfe97048839a404.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[547],{861:function(e,t,n){"use strict";n.d(t,{FT:function(){return s}});var a=n(7294),o=n(5893);const r=["as","disabled"];function s({tagName:e,disabled:t,href:n,target:a,rel:o,role:r,onClick:s,tabIndex:i=0,type:c}){e||(e=null!=n||null!=a||null!=o?"a":"button");const d={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},d];const l=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&a.preventDefault(),t?a.stopPropagation():null==s||s(a)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:l,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),l(e))}},d]}const i=a.forwardRef(((e,t)=>{let{as:n,disabled:a}=e,i=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);const[c,{tagName:d}]=s(Object.assign({tagName:n,disabled:a},i));return(0,o.jsx)(d,Object.assign({},i,c,{ref:t}))}));i.displayName="Button",t.ZP=i},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var a=n(5785),o=n(7294),r=n(4184),s=n.n(r),i=n(5697),c=n.n(i),d=n(5893);const l={type:c().string,tooltip:c().bool,as:c().elementType},m=o.forwardRef((({as:e="div",className:t,type:n="valid",tooltip:a=!1,...o},r)=>(0,d.jsx)(e,{...o,ref:r,className:s()(t,`${n}-${a?"tooltip":"feedback"}`)})));m.displayName="Feedback",m.propTypes=l;var u=m;var p=o.createContext({}),f=n(6792);const g=o.forwardRef((({id:e,bsPrefix:t,className:n,type:a="checkbox",isValid:r=!1,isInvalid:i=!1,as:c="input",...l},m)=>{const{controlId:u}=(0,o.useContext)(p);return t=(0,f.vE)(t,"form-check-input"),(0,d.jsx)(c,{...l,ref:m,type:a,id:e||u,className:s()(n,t,r&&"is-valid",i&&"is-invalid")})}));g.displayName="FormCheckInput";var b=g;const S=o.forwardRef((({bsPrefix:e,className:t,htmlFor:n,...a},r)=>{const{controlId:i}=(0,o.useContext)(p);return e=(0,f.vE)(e,"form-check-label"),(0,d.jsx)("label",{...a,ref:r,htmlFor:n||i,className:s()(t,e)})}));S.displayName="FormCheckLabel";var y=S,C=n(3439);const v=o.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:a=!1,reverse:r=!1,disabled:i=!1,isValid:c=!1,isInvalid:l=!1,feedbackTooltip:m=!1,feedback:g,feedbackType:S,className:v,style:E,title:h="",type:N="checkbox",label:x,children:j,as:X="input",...I},G)=>{t=(0,f.vE)(t,"form-check"),n=(0,f.vE)(n,"form-switch");const{controlId:P}=(0,o.useContext)(p),w=(0,o.useMemo)((()=>({controlId:e||P})),[P,e]),A=!j&&null!=x&&!1!==x||(0,C.XW)(j,y),k=(0,d.jsx)(b,{...I,type:"switch"===N?"checkbox":N,ref:G,isValid:c,isInvalid:l,disabled:i,as:X});return(0,d.jsx)(p.Provider,{value:w,children:(0,d.jsx)("div",{style:E,className:s()(v,A&&t,a&&`${t}-inline`,r&&`${t}-reverse`,"switch"===N&&n),children:j||(0,d.jsxs)(d.Fragment,{children:[k,A&&(0,d.jsx)(y,{title:h,children:x}),g&&(0,d.jsx)(u,{type:S,tooltip:m,children:g})]})})})}));v.displayName="FormCheck";var E=Object.assign(v,{Input:b,Label:y});n(2473);const h=o.forwardRef((({bsPrefix:e,type:t,size:n,htmlSize:a,id:r,className:i,isValid:c=!1,isInvalid:l=!1,plaintext:m,readOnly:u,as:g="input",...b},S)=>{const{controlId:y}=(0,o.useContext)(p);let C;return e=(0,f.vE)(e,"form-control"),C=m?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${n}`]:n},(0,d.jsx)(g,{...b,type:t,size:a,ref:S,readOnly:u,id:r||y,className:s()(i,C,c&&"is-valid",l&&"is-invalid","color"===t&&`${e}-color`)})}));h.displayName="FormControl";var N=Object.assign(h,{Feedback:u}),x=(0,n(4680).Z)("form-floating");const j=o.forwardRef((({controlId:e,as:t="div",...n},a)=>{const r=(0,o.useMemo)((()=>({controlId:e})),[e]);return(0,d.jsx)(p.Provider,{value:r,children:(0,d.jsx)(t,{...n,ref:a})})}));j.displayName="FormGroup";var X=j;const I=o.forwardRef(((e,t)=>{const[{className:n,...a},{as:o="div",bsPrefix:r,spans:i}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,f.vE)(t,"col");const o=(0,f.pi)(),r=(0,f.zG)(),i=[],c=[];return o.forEach((e=>{const n=a[e];let o,s,d;delete a[e],"object"==typeof n&&null!=n?({span:o,offset:s,order:d}=n):o=n;const l=e!==r?`-${e}`:"";o&&i.push(!0===o?`${t}${l}`:`${t}${l}-${o}`),null!=d&&c.push(`order${l}-${d}`),null!=s&&c.push(`offset${l}-${s}`)})),[{...a,className:s()(n,...i,...c)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,d.jsx)(o,{...a,ref:t,className:s()(n,!i.length&&r)})}));I.displayName="Col";var G=I;const P=o.forwardRef((({as:e="label",bsPrefix:t,column:n,visuallyHidden:a,className:r,htmlFor:i,...c},l)=>{const{controlId:m}=(0,o.useContext)(p);t=(0,f.vE)(t,"form-label");let u="col-form-label";"string"==typeof n&&(u=`${u} ${u}-${n}`);const g=s()(r,t,a&&"visually-hidden",n&&u);return i=i||m,n?(0,d.jsx)(G,{ref:l,as:"label",className:g,htmlFor:i,...c}):(0,d.jsx)(e,{ref:l,className:g,htmlFor:i,...c})}));P.displayName="FormLabel",P.defaultProps={column:!1,visuallyHidden:!1};var w=P;const A=o.forwardRef((({bsPrefix:e,className:t,id:n,...a},r)=>{const{controlId:i}=(0,o.useContext)(p);return e=(0,f.vE)(e,"form-range"),(0,d.jsx)("input",{...a,type:"range",ref:r,className:s()(t,e),id:n||i})}));A.displayName="FormRange";var k=A;const D=o.forwardRef((({bsPrefix:e,size:t,htmlSize:n,className:a,isValid:r=!1,isInvalid:i=!1,id:c,...l},m)=>{const{controlId:u}=(0,o.useContext)(p);return e=(0,f.vE)(e,"form-select"),(0,d.jsx)("select",{...l,size:n,ref:m,className:s()(a,e,t&&`${e}-${t}`,r&&"is-valid",i&&"is-invalid"),id:c||u})}));D.displayName="FormSelect";var R=D;const B=o.forwardRef((({bsPrefix:e,className:t,as:n="small",muted:a,...o},r)=>(e=(0,f.vE)(e,"form-text"),(0,d.jsx)(n,{...o,ref:r,className:s()(t,e,a&&"text-muted")}))));B.displayName="FormText";var F=B;const $=o.forwardRef(((e,t)=>(0,d.jsx)(E,{...e,ref:t,type:"switch"})));$.displayName="Switch";var T=Object.assign($,{Input:E.Input,Label:E.Label});const L=o.forwardRef((({bsPrefix:e,className:t,children:n,controlId:a,label:o,...r},i)=>(e=(0,f.vE)(e,"form-floating"),(0,d.jsxs)(X,{ref:i,className:s()(t,e),controlId:a,...r,children:[n,(0,d.jsx)("label",{htmlFor:a,children:o})]}))));L.displayName="FloatingLabel";var W=L;const M={_ref:c().any,validated:c().bool,as:c().elementType},O=o.forwardRef((({className:e,validated:t,as:n="form",...a},o)=>(0,d.jsx)(n,{...a,ref:o,className:s()(e,t&&"was-validated")})));O.displayName="Form",O.propTypes=M;var z=Object.assign(O,{Group:X,Control:N,Floating:x,Check:E,Switch:T,Label:w,Text:F,Range:k,Select:R,FloatingLabel:W});const H=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},o)=>{const r=(0,f.vE)(e,"row"),i=(0,f.pi)(),c=(0,f.zG)(),l=`${r}-cols`,m=[];return i.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const o=e!==c?`-${e}`:"";null!=n&&m.push(`${l}${o}-${n}`)})),(0,d.jsx)(n,{ref:o,...a,className:s()(t,r,...m)})}));H.displayName="Row";var V=H,Z=n(5005);const _=n(4955).W;var q=function(){const{0:e,1:t}=(0,o.useState)([]),n=(0,o.useRef)(),r=(0,o.useRef)(),s=(0,o.useRef)(),i=(0,o.useRef)();return o.createElement(z,null,o.createElement(V,{className:"mb-3"},o.createElement(z.Group,{as:G},o.createElement(z.Label,null,"Semester"),o.createElement(z.Select,{ref:s},o.createElement("option",null,"Select Semester"),_[0].semester.map((e=>o.createElement("option",{value:e.sem,id:e.sem},e.sem))))),o.createElement(z.Group,{as:G},o.createElement(z.Label,null,"Year"),o.createElement(z.Select,{ref:r},o.createElement("option",null,"Select Year"),_[0].year.map((e=>o.createElement("option",{value:e.years,id:e.years},e.years)))))),o.createElement(z.Group,{className:"mb-3"},o.createElement(z.Label,null,"Courses"),o.createElement(z.Select,{ref:i},o.createElement("option",null,"Select Courses"),o.createElement("option",{style:{fontWeight:"bold"}},_[0].groupName),_[0].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[1].groupName),_[1].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[2].groupName),_[2].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[3].groupName),_[3].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[4].groupName),_[4].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[5].groupName),_[5].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[6].groupName),_[6].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[7].groupName),_[7].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[8].groupName),_[8].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[9].groupName),_[9].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[10].groupName),_[10].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))),o.createElement("option",{style:{fontWeight:"bold"}},_[11].groupName),_[11].subjects.map((e=>o.createElement("option",{id:e.code},e.code," ",e.name))))),o.createElement(z.Group,{className:"mb-3",controlId:"formBasicEmail"},o.createElement(z.Label,null,"Grade"),o.createElement(z.Control,{type:"text",placeholder:"Enter GRADE",ref:n})),o.createElement(Z.Z,{variant:"primary",type:"submit",onClick:()=>{if(""!=i.current.value){var o={course:i.current.value,sem:s.current.value,year:r.current.value,grade:n.current.value};e.push(o),t((0,a.Z)(e))}},style:{backgroundColor:"#bb0a1e",border:"none"}},"ADD"))}},5005:function(e,t,n){"use strict";var a=n(4184),o=n.n(a),r=n(7294),s=n(861),i=n(6792),c=n(5893);const d=r.forwardRef((({as:e,bsPrefix:t,variant:n,size:a,active:r,className:d,...l},m)=>{const u=(0,i.vE)(t,"btn"),[p,{tagName:f}]=(0,s.FT)({tagName:e,...l}),g=f;return(0,c.jsx)(g,{...p,...l,ref:m,className:o()(d,u,r&&"active",n&&`${u}-${n}`,a&&`${u}-${a}`,l.href&&l.disabled&&"disabled")})}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=d},3439:function(e,t,n){"use strict";n.d(t,{Ed:function(){return r},UI:function(){return o},XW:function(){return s}});var a=n(7294);function o(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}function r(e,t){let n=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&t(e,n++)}))}function s(e,t){return a.Children.toArray(e).some((e=>a.isValidElement(e)&&e.type===t))}},6792:function(e,t,n){"use strict";n.d(t,{pi:function(){return l},vE:function(){return d},zG:function(){return m}});var a=n(7294);n(5893);const o=["xxl","xl","lg","md","sm","xs"],r="xs",s=a.createContext({prefixes:{},breakpoints:o,minBreakpoint:r}),{Consumer:i,Provider:c}=s;function d(e,t){const{prefixes:n}=(0,a.useContext)(s);return e||n[t]||t}function l(){const{breakpoints:e}=(0,a.useContext)(s);return e}function m(){const{minBreakpoint:e}=(0,a.useContext)(s);return e}},4680:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(4184),o=n.n(a),r=/-(.)/g;var s=n(7294),i=n(6792),c=n(5893);const d=e=>{return e[0].toUpperCase()+(t=e,t.replace(r,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function l(e,{displayName:t=d(e),Component:n,defaultProps:a}={}){const r=s.forwardRef((({className:t,bsPrefix:a,as:r=n||"div",...s},d)=>{const l=(0,i.vE)(a,e);return(0,c.jsx)(r,{ref:d,className:o()(t,l),...s})}));return r.defaultProps=a,r.displayName=t,r}},2473:function(e){"use strict";var t=function(){};e.exports=t},4955:function(e){"use strict";e.exports=JSON.parse('{"W":[{"semester":[{"sem":"1"},{"sem":"2"},{"sem":"3"}],"year":[{"years":"2019"},{"years":"2020"},{"years":"2021"},{"years":"2022"}],"groupName":"Language Courses","subjects":[{"code":"BG 1001","name":"English I","credits":"3"},{"code":"BG 1002","name":"English II","credits":"3"},{"code":"BG 2000","name":"English III","credits":"3"},{"code":"BG 2001","name":"English IV","credits":"3"}]},{"groupName":"Humanities Courses","subjects":[{"code":"LAW 1201","name":"Business Laws for Entrepreneurs","credits":"3"}]},{"year":"2018","groupName":"Social Science Courses","subjects":[{"code":"GE 2202","name":"Ethics","credits":"3"},{"code":"BBA 1001","name":"Business Exploration","credits":"3"}]},{"groupName":"Science and Mathemetics Courses","subjects":[{"code":"BAC 1602","name":"Fundamentals of Financial Accounting I","credits":"3"},{"code":"CSX 1001","name":"Basic Mathematics and Statistics","credits":"3"}]},{"groupName":"General Education Courses","subjects":[{"code":"GE 1103","name":"Historical Perspectives on Thailand","credits":"3"},{"code":"GE 1102","name":"Introduction to Philosophy","credits":"3"},{"code":"GE 2102","name":"Human Heritage and Globalization","credits":"3"},{"code":"GE 2103","name":"Art of Reasoning","credits":"3"},{"code":"GE 2104","name":"Thai Buddhism","credits":"3"},{"code":"GE 2105","name":"Introduction to World Religion","credits":"3"},{"code":"GE 2106","name":"Logical Thinking and Application","credits":"3"},{"code":"GE 2107","name":"Applied Philosophy in Social Sciences and Humanities","credits":"3"},{"code":"BBA 2001","name":"Human Behavior","credits":"3"},{"code":"GE 1207","name":"Fundamental Psychology","credits":"3"},{"code":"GE 1203","name":"Society, Politics and Economics","credits":"3"},{"code":"GE 1205","name":"ASEAN Ways","credits":"3"},{"code":"GE 1206","name":"Philosophy of Sufficiency Economy","credits":"3"},{"code":"GE 2203","name":"Art of Living","credits":"3"},{"code":"GE 2205","name":"Communication and Multicultural society","credits":"3"},{"code":"GE 2206","name":"Personality Development","credits":"3"},{"code":"GE 2207","name":"Sport, Health and Wellness Development","credits":"3"},{"code":"GE 2208","name":"Thai Politics and Government","credits":"3"},{"code":"BEC 2200","name":"Introduction to Economics","credits":"3"},{"code":"GE 1302","name":"Ecology and Sustainability","credits":"3"},{"code":"GE 2301","name":"Lifestyles in Dynamic World","credits":"3"},{"code":"GE 2302","name":"Climate Change and Human Life","credits":"3"},{"code":"GE 2303","name":"Building Brilliant Brain","credits":"3"},{"code":"MA 1200","name":"Mathematics for Business","credits":"3"},{"code":"GE 1403","name":"Communication in Thai"},{"code":"GE 1405","name":"Thai Language and Culture"},{"code":"GE 1406","name":"Burmese Language"},{"code":"GE 1407","name":"Russian Language"},{"code":"GE 3401","name":"Public Speaking in Thai"}]},{"groupName":"Core Courses","subjects":[{"code":"MA 1200","name":"Mathematics for Business","credits":"3"},{"code":"CSX 2003","name":"Principles of Statistics","credits":"3"},{"code":"CSX 2006","name":"Mathematics and Statistics for Data Science","credits":"3"},{"code":"CSX 2008","name":"Mathematics Foundation for Computer Science","credits":"3"}]},{"groupName":"Major required Courses","subjects":[{"code":"CSX 2001","name":"Introduction to Information Technology","credits":"3"},{"code":"CSX 3010","name":"Senior Project1","credits":"3"},{"code":"CSX 3011","name":"Senior Project II","credits":"3"},{"code":"CSX 3001","name":"Fundamentals of Computer Programming","credits":"3"},{"code":"CSX 3002","name":"Object-Oriented Concepts and Programming","credits":"3"},{"code":"CSX 3001","name":"Fundamentals of Computer Programming","credits":"3"},{"code":"CSX 3004","name":"Programming Languages","credits":"3"},{"code":"CSX 3009","name":"Algorithm Design","credits":"3"},{"code":"CSX 2009","name":"Computer Networks","credits":"3"},{"code":"CSX 3005","name":"Cloud Computing","credits":"3"},{"code":"CSX 3006","name":"Database Systems","credits":"3"},{"code":"CSX 3008","name":"Operating Systems","credits":"3"},{"code":"CSX 3007","name":"Computer Archietecture","credits":"3"}]},{"groupName":"Group 1(A): Software Engineering and Development","subjects":[{"code":"CSX 4101","name":"Information System Analysis and Design","credits":"3"},{"code":"CSX 4102","name":"Software Engineering","credits":"3"},{"code":"CSX 4103","name":"Requirement Engineering","credits":"3"},{"code":"CSX 4104","name":"Software Testing","credits":"3"},{"code":"CSX 4105","name":"IT Project Management","credits":"3"},{"code":"CSX 4106","name":"Enterprise Architecture","credits":"3"},{"code":"CSX 4107","name":"Web Application Development","credits":"3"},{"code":"CSX 4108","name":"iOS Application Development","credits":"3"},{"code":"CSX 4109","name":" Android Application Development","credits":"3"}]},{"groupName":"Group 1(B): Informatics and Data Science","subjects":[{"code":"CSX 4201","name":"Artificial Intelligence Concepts","credits":"3"},{"code":"CSX 4202","name":"Data Mining ","credits":"3"},{"code":"CSX 4203","name":"Machine Learning","credits":"3"},{"code":"CSX 4204","name":"Biometrics","credits":"3"},{"code":"CSX 4205","name":"Big Data Analytics","credits":"3"},{"code":"CSX 4206","name":"Data Warehousing and Business Intelligence","credits":"3"},{"code":"CSX 4207","name":"Decision Support and Recommender Systems","credits":"3"},{"code":"CSX 4208","name":"Deep Learning","credits":"3"},{"code":"CSX 4209","name":"Intelligent System Development ","credits":"3"},{"code":"CSX 4210","name":"Natural Language Processing and Social Interactions ","credits":"3"}]},{"groupName":"Group 1(C): Network Technology and Infrastructure","subjects":[{"code":"CSX 4301","name":"Business Systems","credits":"3"},{"code":"CSX 4302","name":"Sales and Distribution Management System","credits":"3"},{"code":"CSX 4303","name":"Manufacturing Management System","credits":"3"},{"code":"CSX 4304","name":"Supply Chain Management System","credits":"3"},{"code":"CSX 4305","name":"Finance and Accounting Information System ","credits":"3"},{"code":"CSX 4306","name":"Customer Relationship Management System","credits":"3"},{"code":"CSX 4307","name":"Enterprise Application Development","credits":"3"},{"code":"CSX 4308","name":"Enterprise Database System","credits":"3"},{"code":"CSX 4309","name":"Blockchain Technology","credits":"3"}]},{"groupName":"Group 1(D): Enterprise Systems","subjects":[{"code":"CSX 4401","name":"Information System Analysis and Design","credits":"3"},{"code":"CSX 4402","name":"Software Engineering","credits":"3"},{"code":"CSX 4403","name":"Requirement Engineering","credits":"3"},{"code":"CSX 4404","name":"Software Testing","credits":"3"},{"code":"CSX 4405","name":"IT Project Management","credits":"3"},{"code":"CSX 4406","name":"Enterprise Architecture","credits":"3"},{"code":"CSX 4407","name":"Web Application Development","credits":"3"},{"code":"CSX 4408","name":"iOS Application Development","credits":"3"},{"code":"CSX 4409","name":" Android Application Development","credits":"3"}]},{"groupName":"Major Elective Courses Group 2","subjects":[{"code":"CSX 4501","name":"Theory of Computation","credits":"3"},{"code":"CSX 4502","name":"Tech Startup","credits":"3"},{"code":"CSX 4503","name":"Information Systems Security","credits":"3"},{"code":"CSX 4504","name":"FDigital Marketing ","credits":"3"},{"code":"CSX 4505","name":"Digital Transformation","credits":"3"},{"code":"CSX 4506","name":"Image Processing","credits":"3"},{"code":"CSX 4507","name":"Information Retrieval and Search Engines","credits":"3"},{"code":"CSX 4508","name":" Quantitative Research for Digital Business","credits":"3"},{"code":"CSX 4600-4699","name":"Selected Topics","credits":"3"}]}]}')}}]);
//# sourceMappingURL=ed189969d8e73df3b8fa53f7340c53f7fddd75e4-fa55ccfe97048839a404.js.map