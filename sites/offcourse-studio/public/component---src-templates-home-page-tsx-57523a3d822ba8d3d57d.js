(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{172:function(n,e,t){"use strict";t.r(e);t(23);var a,o,r,l,f,i,c=t(180),s=t(0),u=t.n(s);!function(n){n.DEFAULT="DEFAULT",n.DISABLED="DISABLED",n.INFO="INFO",n.POSITIVE="POSITIVE",n.WARNING="WARNING",n.NEGATIVE="NEGATIVE"}(a||(a={})),function(n){n.SMALL="SMALL",n.NORMAL="NORMAL",n.LARGE="LARGE",n.EXTRA_LARGE="EXTRA_LARGE"}(o||(o={})),function(n){n.NONE="NONE",n.RESOURCE_NOT_LOADING="RESOURCE_NOT_LOADING",n.COURSE_NOT_FOUND="COURSE_NOT_FOUND",n.CHECKPOINT_NOT_FOUND="CHECKPOINT_NOT_FOUND",n.TOTAL_PANIC="TOTAL_PANIC",n.NO_SEARCH_RESULTS="NO_SEARCH_RESULTS"}(r||(r={})),function(n){n.HORIZONTAL="HORIZONTAL",n.VERTICAL="VERTICAL",n.UP="UP",n.DOWN="DOWN"}(l||(l={})),function(n){n.NONE="NONE",n.CHECKABLE="CHECKABLE",n.UNCHECKABLE="UNCHECKABLE",n.CLOSEABLE="CLOSEABLE",n.EXPANDABLE="EXPANDABLE",n.SHRINKABLE="SHRINKABLE",n.SELECTABLE="SELECTABLE"}(f||(f={})),function(n){n.START="START",n.END="END",n.FULL="FULL",n.CENTER="CENTER"}(i||(i={}));var E=t(173),m=t(179);function d(){var n=A(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  height: 100vh;\n  background-color: ",";\n  color: ",";\n  &:nth-of-type(odd) {\n    background-color: ",";\n    color: ",";\n  }\n"]);return d=function(){return n},n}function N(){var n=A(["\n  padding: ",";\n"]);return N=function(){return n},n}function A(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=Object(m.a)(function(n){var e=n.className,t=n.children;return u.a.createElement("div",{className:e},t)})(N(),function(n){return n.theme.space[8]}),b=Object(m.a)(function(n){var e=n.slogan,t=n.explanation,a=n.className;return u.a.createElement("div",{className:a},u.a.createElement(p,null,u.a.createElement(E.f.h1,{size:o.EXTRA_LARGE},"Offcourse"),u.a.createElement(E.f.h1,{size:o.EXTRA_LARGE},"Studio_")),u.a.createElement(p,null,u.a.createElement(E.f.h1,{size:o.EXTRA_LARGE},"www.offcourse-studio.com"),u.a.createElement(E.f.h1,{size:o.EXTRA_LARGE},"==> ",e),u.a.createElement(E.f.p,null,t),u.a.createElement("button",null,"Call us")))})(d(),function(n){return n.theme.grayScale[0]},function(n){return n.theme.grayScale[2]},function(n){return n.theme.grayScale[3]},function(n){return n.theme.grayScale[0]}),L=t(174),g=function(n){var e=n.children,t=n.theme;return u.a.createElement(E.g,{theme:t},u.a.createElement(L.a,{styles:Object(L.c)(t.globals)}),u.a.createElement(E.f.root,null,e))},O=t(183),S=t.n(O),R=t(184),h=t.n(R),T=t(185),C=t.n(T),B=t(186),w=t.n(B),y=t(187),F=t.n(y),_=t(188),G=t.n(_),I={fonts:{body:"Fira Sans Regular, Nitti Grotesk, Helvetica, sans-serif",heading:"Fira Sans Bold, Nitti Grotesk Bold, Helvetica Bold, sans-serif",monospace:"Fira Code Bold, Nitti Bold, Helvetica Bold, sans-serif"},fontSizes:["0.75rem","1rem","1.375rem","1.75rem","2.5rem","4rem"],grayScale:["#FFFFFF","#f4f6f4","#C8CAC9","#797B7A","#000000"],breakpoints:["30rem","48rem","64rem"],lineHeights:["1rem","1.25rem","1.375rem","1.75rem","1.875rem","3rem","4.5rem"],space:["0","0.0625rem","0.125rem","0.25rem","0.5rem","0.75rem","1rem","1.5rem","2rem"],styles:{root:{fontFamily:"body",fontSize:5},Container:{padding:0,maxWidth:"100%"},h1:{fontSize:5,margin:0,fontFamily:"monospace"}},globals:"\n        body {\n            top: 0;\n            left: 0;\n            right: 0;\n            margin: 0;\n        }\n\n        ::-webkit-scrollbar {\n            width: 0px;  /* remove scrollbar space */\n            background: transparent;  /* optional: just make scrollbar invisible */\n        }\n\n        @font-face {\n            font-family: 'Fira Sans Regular';\n            font-weight: 400;\n            font-display: fallback;\n            src: local('Fira Sans Regular'),\n            url("+S.a+") format('opentype')\n        }\n\n        @font-face {\n            font-family: 'Fira Code Bold';\n            font-weight: 700;\n            font-display: fallback;\n            src: local('Fira Code Bold'),\n            url("+C.a+") format('woff2')\n        }\n\n        @font-face {\n            font-family: 'Fira Sans Bold';\n            font-weight: 700;\n            font-display: fallback;\n            src: local('Fira Sans Bold'),\n            url("+h.a+") format('opentype')\n        }\n        @font-face {\n            font-family: 'Nitti Grotesk';\n            font-weight: 300;\n            font-display: fallback;\n            src: local('Nitti Grotesk'),\n            url("+G.a+") format('woff'),\n                url('https://offcourse.io/fonts/NGN.woff') format('woff');\n        }\n\n        @font-face {\n            font-family: 'Nitti Grotesk Bold';\n            font-weight: 700;\n            font-display: fallback;\n            src: local('Nitti Grotesk Bold'),\n                url("+F.a+") format('woff'),\n                url('https://offcourse.io/fonts/NGB.woff') format('woff');\n        }\n\n        @font-face {\n            font-family: 'Nitti Bold';\n            font-weight: 700;\n            font-display: fallback;\n            src: local('Nitti Bold'),\n                url("+w.a+") format('woff'),\n                url('https://offcourse.io/fonts/NB.woff') format('woff');\n        }\n\n        * {\n            -webkit-font-smoothing: antialiased;\n            -moz-osx-font-smoothing: grayscale;\n            box-sizing: border-box;\n        }\n     "},k=function(n){var e=n.children;return u.a.createElement(g,{theme:I},u.a.createElement(E.d,null,u.a.createElement(E.c,null),u.a.createElement(E.e,null,u.a.createElement(E.a,null,e)),u.a.createElement(E.b,null)))};e.default=function(n){n.className;var e=c.data.allPageSection.edges;return u.a.createElement(k,null,e.map(function(n){var e=n.section;return e.publishable?u.a.createElement(b,Object.assign({key:e.role},e)):null}))}},180:function(n){n.exports={data:{allPageSection:{edges:[{section:{role:"hero",slogan:"Tinkering solutions for unexpected futures",explanation:"We build digital products with you",publishable:!0}}]}}}},183:function(n,e,t){n.exports=t.p+"static/FiraSans-Regular-9b3040e79b0e728dbe6ad51108457448.otf"},184:function(n,e,t){n.exports=t.p+"static/FiraSans-Bold-dd44f6a983d7f1fe2538b2521ce51c46.otf"},185:function(n,e,t){n.exports=t.p+"static/FiraCode-Bold-b7650b06e23141743ae7b56b99fe5c86.woff2"},186:function(n,e,t){n.exports=t.p+"static/NB-f13d7dc50b39b786bc333c78b0bbe4f1.woff"},187:function(n,e,t){n.exports=t.p+"static/NGB-0f2aaa7d7331a94503442b413b806015.woff"},188:function(n,e,t){n.exports=t.p+"static/NGN-49e1682a2cd9fa8c91d83a0220e903ce.woff"}}]);
//# sourceMappingURL=component---src-templates-home-page-tsx-57523a3d822ba8d3d57d.js.map