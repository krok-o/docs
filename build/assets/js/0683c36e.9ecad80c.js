"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Installing operator",l={unversionedId:"installation-guide/operator-installation",id:"installation-guide/operator-installation",title:"Installing operator",description:"This is a detailed guide on how to install the operator. And then add some basic setup and CRDs.",source:"@site/docs/installation-guide/operator-installation.md",sourceDirName:"installation-guide",slug:"/installation-guide/operator-installation",permalink:"/docs/installation-guide/operator-installation",draft:!1,editUrl:"https://github.com/krok-o/docs/tree/main/packages/create-docusaurus/templates/shared/docs/installation-guide/operator-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/docs/category/installation-guide"},next:{title:"Tutorial - Operator",permalink:"/docs/category/tutorial---operator"}},s={},c=[{value:"CRDs, RBAC, kustomize",id:"crds-rbac-kustomize",level:2},{value:"Operator and Image overwrite",id:"operator-and-image-overwrite",level:2},{value:"Secrets",id:"secrets",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-operator"},"Installing operator"),(0,o.kt)("p",null,"This is a detailed guide on how to install the operator. And then add some basic setup and CRDs."),(0,o.kt)("h2",{id:"crds-rbac-kustomize"},"CRDs, RBAC, kustomize"),(0,o.kt)("h2",{id:"operator-and-image-overwrite"},"Operator and Image overwrite"),(0,o.kt)("h2",{id:"secrets"},"Secrets"))}u.isMDXComponent=!0}}]);