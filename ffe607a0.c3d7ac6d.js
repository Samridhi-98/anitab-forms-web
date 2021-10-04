(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(94)),i={id:"Coding-Standards",title:"Coding Standards"},c={unversionedId:"Coding-Standards",id:"Coding-Standards",isDocsHomePage:!1,title:"Coding Standards",description:"These are some of the standards we choose to follow in this project. These might change if we agree on standards for javascript development within the community.",source:"@site/docs/Coding-Standards.md",slug:"/Coding-Standards",permalink:"/anitab-forms-web/docs/Coding-Standards",editUrl:"https://github.com/anitab-org/anitab-forms-web/docs/docs/Coding-Standards.md",version:"current",sidebar:"docs",previous:{title:"Tech Stack",permalink:"/anitab-forms-web/docs/Tech-Stack"},next:{title:"User Interface Design",permalink:"/anitab-forms-web/docs/User-Interface-Design"}},s=[{value:"Code Comments",id:"code-comments",children:[]},{value:"Another Example of Coding Standard",id:"another-example-of-coding-standard",children:[]}],d={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"These are some of the standards we choose to follow in this project. These might change if we agree on standards for javascript development within the community."),Object(a.b)("h3",{id:"code-comments"},"Code Comments"),Object(a.b)("p",null,"We follow the Comments guidelines from ",Object(a.b)("a",{parentName:"p",href:"https://prettier.io/playground/"},"this style guide"),"."),Object(a.b)("h3",{id:"another-example-of-coding-standard"},"Another Example of Coding Standard"),Object(a.b)("p",null,"Use the ",Object(a.b)("a",{parentName:"p",href:"https://react.semantic-ui.com/"},"Semantic UI Library")," to import components as much as you can. Try and refrain from using basic HTML elements, unless they are really necessary. Keep ",Object(a.b)("inlineCode",{parentName:"p"},"actions/"),", ",Object(a.b)("inlineCode",{parentName:"p"},"reducers/"),", ",Object(a.b)("inlineCode",{parentName:"p"},"styles/")," and ",Object(a.b)("inlineCode",{parentName:"p"},"components/")," in separate directories already present."))}p.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,f=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return n?o.a.createElement(f,c(c({ref:t},d),{},{components:n})):o.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);