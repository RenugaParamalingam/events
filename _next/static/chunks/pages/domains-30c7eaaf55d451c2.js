(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{33198:function(e,t,n){var r=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,d=o||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,m=Math.min,x=function(){return d.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,n){var r,s,i,a,c,o,l=0,d=!1,u=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=s;return r=s=void 0,l=t,a=e.apply(i,n)}function p(e){return l=e,c=setTimeout(y,t),d?v(e):a}function j(e){var n=e-o;return void 0===o||n>=t||n<0||u&&e-l>=i}function y(){var e=x();if(j(e))return N(e);c=setTimeout(y,function(e){var n=t-(e-o);return u?m(n,i-(e-l)):n}(e))}function N(e){return c=void 0,b&&r?v(e):(r=s=void 0,a)}function w(){var e=x(),n=j(e);if(r=arguments,s=this,o=e,n){if(void 0===c)return p(o);if(u)return c=setTimeout(y,t),v(o)}return void 0===c&&(c=setTimeout(y,t)),a}return t=g(t)||0,h(n)&&(d=!!n.leading,i=(u="maxWait"in n)?f(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=o=s=c=void 0},w.flush=function(){return void 0===c?a:N(x())},w}},6985:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/domains",function(){return n(76423)}])},49931:function(e,t,n){"use strict";var r=n(24246),s=(n(27378),n(79894)),i=n.n(s),a=n(21135),c=n(41978);t.Z=function(e){var t=e.domains,n=void 0===t?[]:t;return(0,r.jsx)("ul",{className:"mt-3 grid grid-cols-1 gap-5 md:grid-cols-2",children:n.map((function(e){var t;return(0,r.jsx)("li",{className:"flex",children:(0,r.jsx)(i(),{href:"/domains/".concat(e.name),children:(0,r.jsxs)("a",{className:"flex shadow-sm w-full",children:[(0,r.jsx)("div",{style:{background:(0,c.Z)(e.name)},className:"w-4 rounded-l-md"}),(0,r.jsx)("div",{className:"w-full border-t border-r border-b border-gray-200 bg-white rounded-r-md ",children:(0,r.jsxs)("div",{className:"p-4 text-sm space-y-2 flex flex-col justify-between h-full",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-gray-900 font-bold",children:e.name}),null===(t=e.badges)||void 0===t?void 0:t.map((function(t){return(0,r.jsx)("span",{className:"ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-".concat(t.backgroundColor,"-100 text-").concat(t.textColor,"-800"),children:t.content},"".concat(e.name,"-").concat(t.content))})),(0,r.jsx)("div",{className:"text-gray-500 text-xs font-normal mt-2 line-clamp-3",children:e.summary})]}),(0,r.jsxs)("div",{className:"flex space-x-4 text-xs pt-2 relative bottom-0 left-0",children:[(0,r.jsxs)("div",{className:" font-medium text-gray-500",children:[(0,r.jsx)(a.Z,{className:"h-4 w-4 text-green-400 inline-block mr-2","aria-hidden":"true"}),"Services (",e.services.length,")"]}),(0,r.jsxs)("div",{className:" font-medium text-gray-500",children:[(0,r.jsx)(a.Z,{className:"h-4 w-4 text-indigo-400 inline-block mr-2","aria-hidden":"true"}),"Events (",e.events.length,")"]})]})]})})]})})},e.name)}))})}},76423:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return h},default:function(){return g}});var r=n(17599),s=n(85034),i=n(70169),a=n(24246),c=n(88038),o=n.n(c),l=n(27378),d=n(33198),u=n.n(d),f=n(45604),m=n(49931),x=n(90476),h=!0;function g(e){var t=e.domains,n=(0,l.useState)(t),c=n[0],d=n[1],h=(0,l.useState)(""),g=h[0],b=h[1],v=(0,l.useState)({badges:[]}),p=v[0],j=v[1],y=[{id:"badges",name:"Filter by Badges",options:t.reduce((function(e,t){return t.badges?(t.badges.forEach((function(t){e.map((function(e){return e.value})).includes(t.content)||e.push({value:t.content,label:t.content,checked:!1})})),e):e}),[])}];(0,l.useEffect)((function(){d(function(){var e=t;if(!p.badges&&!g)return t;if(g&&(e=e.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())}))),p.badges.length>0){var n=p.badges;e=e.filter((function(e){return!!e.badges&&0!==e.badges.filter((function(e){return n.includes(e.content)})).length}))}return e}())}),[p,g]);var N=(0,l.useCallback)(u()((function(e){b(e.target.value)}),500),[c]),w=!!g||p.badges.length>0,k=(0,x.ZR)().title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o(),{children:(0,a.jsxs)("title",{children:[k," - All Domains"]})}),(0,a.jsxs)("main",{className:"max-w-7xl mx-auto md:min-h-screen px-4 xl:px-0",children:[(0,a.jsx)("div",{className:"relative z-10 flex items-baseline justify-between pt-8 pb-6 border-b border-gray-200",children:(0,a.jsxs)("h1",{className:"text-2xl font-extrabold tracking-tight text-gray-900",children:["Domains (",t.length,")"]})}),(0,a.jsx)("section",{className:"pt-6 pb-24",children:(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-x-8 gap-y-10",children:[(0,a.jsxs)("form",{className:"hidden lg:block",children:[(0,a.jsxs)("div",{className:"border-b border-gray-200 pb-6",children:[(0,a.jsx)("label",{htmlFor:"domain",className:"font-bold block text-sm font-medium text-gray-700",children:"Search Domains"}),(0,a.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,a.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,a.jsx)(f.Z,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),(0,a.jsx)("input",{type:"text",name:"domain",id:"domain",onChange:N,className:"focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"})]})]}),y.map((function(e){return e.options.length?(0,a.jsxs)("div",{className:"border-b border-gray-200 py-6",children:[(0,a.jsx)("h3",{className:"-my-3 flow-root",children:(0,a.jsx)("div",{className:"py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500",children:(0,a.jsxs)("span",{className:"font-bold font-medium text-gray-900",children:[e.name," (",e.options.length,")"]})})}),(0,a.jsx)("div",{className:"pt-6",children:(0,a.jsx)("div",{className:"space-y-4",children:e.options.map((function(t,n){return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("input",{id:"filter-".concat(e.id,"-").concat(n),name:"".concat(e.id,"[]"),defaultValue:t.value,type:"checkbox",onChange:function(n){return function(e,t,n){if(console.log(e,t,n),n.target.checked){var a=p[t].concat([e.value]);j((0,i.Z)((0,s.Z)({},p),(0,r.Z)({},t,a)))}else{var c=p[t].filter((function(t){return t!==e.value}));j((0,i.Z)((0,s.Z)({},p),(0,r.Z)({},t,c)))}}(t,e.id,n)},defaultChecked:t.checked,className:"h-4 w-4 border-gray-300 rounded text-gray-600 focus:ring-gray-500"}),(0,a.jsx)("label",{htmlFor:"filter-".concat(e.id,"-").concat(n),className:"ml-3 text-sm text-gray-600",children:t.label})]},t.value)}))})})]},e.id):null}))]}),(0,a.jsx)("div",{className:"col-span-4 lg:col-span-3",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-gray-500 text-xs font-medium uppercase tracking-wide",children:w?"Filtered Domains (".concat(c.length,"/").concat(t.length,")"):"All Domains (".concat(t.length,")")}),(0,a.jsx)(m.Z,{domains:c}),0===c.length&&(0,a.jsx)("div",{className:"text-gray-400 flex h-96 justify-center items-center",children:(0,a.jsxs)("div",{children:[(0,a.jsx)(f.Z,{className:"w-6 h-6 inline-block mr-1"}),"No domains found."]})})]})})]})})]})]})}},41978:function(e,t,n){"use strict";function r(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var r="#",s=0;s<3;s++){r+="00".concat((t>>8*s&255).toString(16)).substr(-2)}return r}n.d(t,{Z:function(){return r}})},21135:function(e,t,n){"use strict";var r=n(27378);const s=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}))}));t.Z=s},45604:function(e,t,n){"use strict";var r=n(27378);const s=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))}));t.Z=s},70169:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=6985,e(e.s=t);var t}));var t=e.O();_N_E=t}]);