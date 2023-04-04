(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[54],{69949:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services",function(){return t(95586)}])},74588:function(e,n,t){"use strict";var r=t(24246),a=(t(27378),t(79894)),s=t.n(a),c=t(21135),i=t(23357),o=t(41978);n.Z=function(e){var n=e.services,t=void 0===n?[]:n,a=e.showMermaidDiagrams,l=void 0!==a&&a;return(0,r.jsx)("ul",{className:"mt-3 grid grid-cols-1 gap-5 md:grid-cols-2",children:t.map((function(e){var n,t=e.draft,a=e.domain,d=a?"/domains/".concat(a,"/services/").concat(e.name):"/services/".concat(e.name);return(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(s(),{href:d,children:(0,r.jsxs)("a",{className:"flex shadow-sm w-full",children:[(0,r.jsx)("div",{style:{background:(0,o.Z)(e.name)},className:"w-4 rounded-l-md"}),(0,r.jsx)("div",{className:"w-full border-t border-r border-b border-gray-200 bg-white rounded-r-md ",children:(0,r.jsxs)("div",{className:"p-4 text-sm space-y-2 flex flex-col justify-between h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-gray-900 font-bold",children:e.name}),null===(n=e.badges)||void 0===n?void 0:n.map((function(n){return(0,r.jsx)("span",{className:"ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-".concat(n.backgroundColor,"-100 text-").concat(n.textColor,"-800"),children:n.content},"".concat(e.name,"-").concat(n.content))})),t&&(0,r.jsx)("span",{className:"ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500 text-gray-100",children:"Draft"}),(0,r.jsx)("div",{className:"text-gray-500 text-xs font-normal mt-2 line-clamp-3",children:e.summary})]}),l&&(0,r.jsx)("div",{className:"h-full items-center flex",children:(0,r.jsx)(i.Z,{source:"service",data:e,rootNodeColor:(0,o.Z)(e.name)})}),(0,r.jsxs)("div",{className:"flex space-x-4 text-xs pt-2 relative bottom-0 left-0",children:[(0,r.jsxs)("div",{className:" font-medium text-gray-500",children:[(0,r.jsx)(c.Z,{className:"h-4 w-4 text-green-400 inline-block mr-2","aria-hidden":"true"}),"Subscribe Events (",e.subscribes.length,")"]}),(0,r.jsxs)("div",{className:" font-medium text-gray-500",children:[(0,r.jsx)(c.Z,{className:"h-4 w-4 text-indigo-400 inline-block mr-2","aria-hidden":"true"}),"Publish Events (",e.publishes.length,")"]})]})]})})]})})},e.name)}))})}},23357:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(24246),a=t(27378),s=t(22258),c=t(23892),i=t.n(c)()().publicRuntimeConfig,o=(void 0===i?{}:i).basePath,l=void 0===o?"":o,d=function(e){return e.length>"50"?"".concat(e.substring(0,"50"),"..."):e},m=function(e,n,t){var r="/".concat(t?"domains/".concat(t,"/"):"").concat(n,"/").concat(e);return l?"".concat(l).concat(r):r},u=function(e,n,t,r){return"flowchart LR\n\n".concat(n.map((function(n){return"l-".concat(n.id,"[").concat(n.name,"]:::producer--\x3e").concat(e.id,"[").concat(e.name,"]:::event\n")})).join(""),"\nclassDef event stroke:").concat(r,",stroke-width: 4px;\n\nclassDef producer stroke:#75d7b6,stroke-width: 2px;\n\nclassDef consumer stroke:#818cf8,stroke-width: 2px;\n\n").concat(t.map((function(n){return"".concat(e.id,"[").concat(e.name,"]:::event--\x3er-").concat(n.id,"[").concat(n.name,"]:::consumer\n")})).join(""),"\n").concat(n.map((function(e){return"click l-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\n").concat(t.map((function(e){return"click r-".concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n')})).join(""),"\nclick ").concat(e.id,' href "').concat(e.link,'" "Go to ').concat(e.name,'" _self\n\n')};s.Z.initialize({startOnLoad:!0,theme:"forest",securityLevel:"loose",flowchart:{useMaxWidth:!1},themeCSS:"\n  .node {\n      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))\n  }\n  .mermaid svg {\n      width: 10000px\n  }\n  .node rect {\n      fill: white\n  }\n    ",fontFamily:"Fira Code"});var f=function(e){var n=e.data,t=e.source,c=void 0===t?"event":t,i=e.rootNodeColor,o=e.charts;if((0,a.useEffect)((function(){s.Z.contentLoaded()}),[]),o)return(0,r.jsx)(r.Fragment,{children:o.map((function(e,n){return(0,r.jsx)("div",{className:"mermaid",children:e},"chart-".concat(n))}))});var l="event"===c?function(e){var n=e.name,t=e.producerNames,r=e.consumerNames,a=e.producers,s=void 0===a?[]:a,c=e.consumers,i=void 0===c?[]:c,o=e.domain,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",f=t.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:m(e,"services",null===(n=s.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),x=r.map(d).map((function(e){var n;return{id:e.replace(/ /g,"_"),name:e,link:m(e,"services",null===(n=i.find((function(n){return n.name===e})))||void 0===n?void 0:n.domain)}})),h={id:d(n.replace(/ /g,"_")),name:n,link:m(n,"events",o)};return u(h,f,x,l)}(n,i):function(e){var n=e.publishes,t=e.subscribes,r=e.name,a=e.domain,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#2563eb",c=t.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,t=e.truncatedName;return{id:t.replace(/ /g,"_"),name:t,link:m(n.name,"events",n.domain)}})),i=n.map((function(e){return{event:e,truncatedName:d(e.name)}})).map((function(e){var n=e.event,t=e.truncatedName;return{id:t.replace(/ /g,"_"),name:t,link:m(n.name,"events",n.domain)}})),o={id:d(r.replace(/ /g,"_")),name:r,link:m(r,"services",a)};return u(o,c,i,s)}(n,i);return(0,r.jsx)("div",{className:"mermaid",children:l})}},95586:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return j},default:function(){return N}});var r=t(17599),a=t(85034),s=t(70169),c=t(24246),i=t(27378),o=t(88038),l=t.n(o),d=t(33198),m=t.n(d),u=t(20164),f=t(1831),x=t(83326),h=t(9192),v=t(74588),g=t(90476);function p(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}var b=[{name:"Name",href:"#",current:!0},{name:"Version",href:"#",current:!1},{name:"Domains",href:"#",current:!1}],j=!0;function N(e){var n=e.services,t=(0,i.useState)(n),o=t[0],d=t[1],j=(0,i.useState)(""),N=j[0],y=j[1],w=(0,i.useState)({badges:[]}),k=w[0],_=w[1],Z=[{id:"badges",name:"Filter by Badges",options:n.reduce((function(e,n){return n.badges?(n.badges.forEach((function(n){e.map((function(e){return e.value})).includes(n.content)||e.push({value:n.content,label:n.content,checked:!1})})),e):e}),[])}];(0,i.useEffect)((function(){d(function(){var e=n;if(!k.badges&&!N)return n;if(N&&(e=e.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}))),k.badges.length>0){var t=k.badges;e=e.filter((function(e){return!!e.badges&&0!==e.badges.filter((function(e){return t.includes(e.content)})).length}))}return e}())}),[k,N]);var C=(0,i.useCallback)(m()((function(e){y(e.target.value)}),500),[o]),S=!!N||k.badges.length>0,F=(0,i.useState)(!1),E=F[0],D=F[1],L=(0,g.ZR)().title;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l(),{children:(0,c.jsxs)("title",{children:[L," - All Services"]})}),(0,c.jsxs)("main",{className:"max-w-7xl mx-auto md:min-h-screen px-4 xl:px-0",children:[(0,c.jsxs)("div",{className:"relative z-10 flex items-baseline justify-between pt-8 pb-6 border-b border-gray-200",children:[(0,c.jsxs)("h1",{className:"text-2xl font-extrabold tracking-tight text-gray-900",children:["Services (",n.length,")"]}),(0,c.jsx)("div",{className:"flex items-center",children:(0,c.jsxs)(u.v,{as:"div",className:"relative hidden text-left",children:[(0,c.jsx)("div",{children:(0,c.jsxs)(u.v.Button,{className:"group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900",children:["Sort",(0,c.jsx)(x.Z,{className:"flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})}),(0,c.jsx)(f.u,{as:i.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,c.jsx)(u.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,c.jsx)("div",{className:"py-1",children:b.map((function(e){return(0,c.jsx)(u.v.Item,{children:function(n){var t=n.active;return(0,c.jsx)("a",{href:e.href,className:p(e.current?"font-medium text-gray-900":"text-gray-500",t?"bg-gray-100":"","block px-4 py-2 text-sm"),children:e.name})}},e.name)}))})})})]})})]}),(0,c.jsx)("section",{className:"pt-6 pb-24",children:(0,c.jsxs)("div",{className:"grid grid-cols-4 gap-x-8 gap-y-10",children:[(0,c.jsxs)("form",{className:"hidden lg:block",children:[(0,c.jsxs)("div",{className:"border-b border-gray-200 pb-6",children:[(0,c.jsx)("label",{htmlFor:"service",className:"font-bold block text-sm font-medium text-gray-700",children:"Search Services"}),(0,c.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,c.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,c.jsx)(h.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,c.jsx)("input",{type:"text",name:"service",id:"service",onChange:C,className:"focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"})]})]}),Z.map((function(e){return e.options.length?(0,c.jsxs)("div",{className:"border-b border-gray-200 py-6",children:[(0,c.jsx)("h3",{className:"-my-3 flow-root",children:(0,c.jsx)("div",{className:"py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500",children:(0,c.jsxs)("span",{className:"font-bold font-medium text-gray-900",children:[e.name," (",e.options.length,")"]})})}),(0,c.jsx)("div",{className:"pt-6",children:(0,c.jsx)("div",{className:"space-y-4",children:e.options.map((function(n,t){return(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("input",{id:"filter-".concat(e.id,"-").concat(t),name:"".concat(e.id,"[]"),defaultValue:n.value,type:"checkbox",onChange:function(t){return function(e,n,t){if(console.log(e,n,t),t.target.checked){var c=k[n].concat([e.value]);_((0,s.Z)((0,a.Z)({},k),(0,r.Z)({},n,c)))}else{var i=k[n].filter((function(n){return n!==e.value}));_((0,s.Z)((0,a.Z)({},k),(0,r.Z)({},n,i)))}}(n,e.id,t)},defaultChecked:n.checked,className:"h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"}),(0,c.jsx)("label",{htmlFor:"filter-".concat(e.id,"-").concat(t),className:"ml-3 text-sm text-gray-600",children:n.label})]},n.value)}))})})]},e.id):null})),(0,c.jsxs)("div",{className:"border-b border-gray-200 pb-6",children:[(0,c.jsx)("h3",{className:"-my-3 flow-root",children:(0,c.jsx)("div",{className:"py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500",children:(0,c.jsx)("span",{className:"font-medium text-gray-900",children:"Features"})})}),(0,c.jsx)("div",{className:"pt-6",children:(0,c.jsx)("div",{className:"space-y-4",children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("input",{id:"show-mermaid",type:"checkbox",onChange:function(e){return D(e.target.checked)},defaultChecked:E,className:"h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"}),(0,c.jsx)("label",{htmlFor:"show-mermaid",className:"ml-3 text-sm text-gray-600",children:"Show Mermaid Diagrams"})]})})})]})]}),(0,c.jsx)("div",{className:"col-span-4 lg:col-span-3",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:"text-gray-500 text-xs font-medium uppercase tracking-wide",children:S?"Filtered Services (".concat(o.length,"/").concat(n.length,")"):"All Services (".concat(n.length,")")}),(0,c.jsx)(v.Z,{services:o,showMermaidDiagrams:E}),0===o.length&&(0,c.jsx)("div",{className:"text-gray-400 flex h-96 justify-center items-center",children:(0,c.jsxs)("div",{children:[(0,c.jsx)(h.Z,{className:"w-6 h-6 inline-block mr-1"}),"No services found."]})})]})})]})})]})]})}},41978:function(e,n,t){"use strict";function r(e){for(var n=0,t=0;t<e.length;t++)n=e.charCodeAt(t)+((n<<5)-n);for(var r="#",a=0;a<3;a++){r+="00".concat((n>>8*a&255).toString(16)).substr(-2)}return r}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[695,11,774,888,179],(function(){return n=69949,e(e.s=n);var n}));var n=e.O();_N_E=n}]);