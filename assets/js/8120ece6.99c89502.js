"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[183],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(o),h=n,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return o?r.createElement(m,s(s({ref:t},l),{},{components:o})):r.createElement(m,s({ref:t},l))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3862:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:1},s="Basic Concepts",i={unversionedId:"basic-concepts/basics",id:"basic-concepts/basics",title:"Basic Concepts",description:"Here you find a description of Krok itself, what it does, and how it works in general terms.",source:"@site/docs/basic-concepts/basics.md",sourceDirName:"basic-concepts",slug:"/basic-concepts/basics",permalink:"/docs/basic-concepts/basics",draft:!1,editUrl:"https://github.com/krok-o/docs/tree/main/packages/create-docusaurus/templates/shared/docs/basic-concepts/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/docs/category/basic-concepts"},next:{title:"Repositories",permalink:"/docs/basic-concepts/repositories"}},c={},p=[{value:"What is Krok?",id:"what-is-krok",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"TL;DR",id:"tldr",level:3}],l={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basic-concepts"},"Basic Concepts"),(0,n.kt)("p",null,"Here you find a description of Krok itself, what it does, and how it works in general terms."),(0,n.kt)("h2",{id:"what-is-krok"},"What is Krok?"),(0,n.kt)("p",null,"Krok handles ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic-concepts/events"},"events")," from various ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic-concepts/providers"},"providers")," that the user can set up. What the hell does this mean?"),(0,n.kt)("p",null,"Suppose the following scenario. You have several repositories across multiple services such as, ",(0,n.kt)("em",{parentName:"p"},"GitHub"),", ",(0,n.kt)("em",{parentName:"p"},"Gitlab"),",\n",(0,n.kt)("em",{parentName:"p"},"Gitea"),", ",(0,n.kt)("em",{parentName:"p"},"Bitbucket")," etc. You would like to have a consistent way of handling events like ",(0,n.kt)("inlineCode",{parentName:"p"},"push"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pull"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"issue_comment")," etc, similarly for all of those repositories. However, you don't want to go and set all the same things\nup for each of them separately."),(0,n.kt)("p",null,"Even if you have only a single provider, like GitHub, if you have multiple repositories it can be a drag to go and\nadd the same GitHub action to each repository with slight modifications here and there."),(0,n.kt)("p",null,"Krok offers a way to abstract this burden. Let's see how it does that."),(0,n.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,n.kt)("p",null,"Krok uses a Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/krok-o/operator/"},"operator"),". It has three main building blocks.\n",(0,n.kt)("a",{parentName:"p",href:"/docs/basic-concepts/repositories"},"repositories"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic-concepts/events"},"events")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/basic-concepts/commands"},"commands"),". You can read more about those in their respective guides."),(0,n.kt)("h3",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"A repository has a one to one mapping with hooks. A hook is a webhook that Krok creates on these repositories using the\nconfigured platforms API to create a webhook. It generates a unique URL based on it's id and name of the repository\nwhich is then used as a call-back for the webhook. The secret is also configurable."),(0,n.kt)("p",null,"The user can configure a domain name for the base of this webhook. The operator runs a server which handles call-backs\nfor any configured event and creates something called a ",(0,n.kt)("inlineCode",{parentName:"p"},"KrokEvent")," which then launches the configured Commands."),(0,n.kt)("p",null,"Commands can have dependencies and can use output from other commands."),(0,n.kt)("p",null,"Once a repository with commands like Slack-Commenter or Issue-Commenter are configured, the command will execute with\nthe necessary creds and perform its function."))}u.isMDXComponent=!0}}]);