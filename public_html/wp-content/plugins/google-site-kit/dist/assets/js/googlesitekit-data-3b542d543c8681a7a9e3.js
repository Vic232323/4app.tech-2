(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[8],{150:function(t,n,r){"use strict";var e=r(0),o=Object(e.createContext)(!1);n.a=o},162:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r(346);function o(t){return Object(e.a)(t)}},23:function(t,n,r){"use strict";r.d(n,"b",(function(){return e})),r.d(n,"a",(function(){return o}));var e="core/ui",o="activeContextID"},377:function(t,n,r){"use strict";r.d(n,"a",(function(){return s}));var e=r(16),o=r.n(e),c=r(503),u=r(350),i=r(0),a=r(150),f=r(23),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.sticky,r=void 0!==n&&n,e=Object(i.useContext)(a.a),s=Object(i.useState)(!1),d=o()(s,2),l=d[0],p=d[1],v=Object(u.a)((function(t){return t(f.b).getInViewResetCount()})),b=Object(u.a)((function(t){return t(f.b).getValue("forceInView")}));return Object(i.useEffect)((function(){e.value&&!l&&p(!0)}),[l,e,p]),Object(i.useEffect)((function(){b&&p(!0)}),[b]),Object(c.a)((function(){p(!1)}),[v]),!(!r||!l)||!!e.value}},421:function(t,n,r){"use strict";(function(t){var e=r(768),o=r(588),c=r(108),u=r(350),i=r(728),a=r(492),f=r(753),s=r(755),d=r(603);r.d(n,"f",(function(){return o.b})),r.d(n,"h",(function(){return c.a})),r.d(n,"i",(function(){return c.b})),r.d(n,"n",(function(){return u.a})),r.d(n,"k",(function(){return i.a})),r.d(n,"m",(function(){return a.a})),r.d(n,"p",(function(){return f.a})),r.d(n,"o",(function(){return s.a})),r.d(n,"a",(function(){return d.b}));var l=r(512);r.d(n,"l",(function(){return l.a}));var p=r(57);r.d(n,"b",(function(){return p.a})),r.d(n,"c",(function(){return p.b})),r.d(n,"d",(function(){return p.c})),r.d(n,"e",(function(){return p.d}));var v,b=r(162);r.d(n,"g",(function(){return b.a}));var y=Object(e.a)({},null===(v=t.wp)||void 0===v?void 0:v.data);y.combineStores=p.a,y.commonActions=p.b,y.commonControls=p.c,y.commonStore=p.d,y.createReducer=b.a,y.useInViewSelect=l.a,y.controls=o.b,y.createRegistryControl=c.a,y.createRegistrySelector=c.b,y.useSelect=u.a,y.useDispatch=i.a,y.useRegistry=a.a,y.withSelect=f.a,y.withDispatch=s.a,y.RegistryProvider=d.b,n.j=y}).call(this,r(26))},512:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r(350),o=r(0),c=r(377);function u(){}var i=function(t,n){var r=Object(c.a)({sticky:!0}),i=Object(o.useRef)(),a=Object(o.useCallback)(t,n),f=Object(e.a)(r?a:u);return r&&(i.current=f),i.current}},57:function(t,n,r){"use strict";r.d(n,"a",(function(){return A})),r.d(n,"b",(function(){return C})),r.d(n,"c",(function(){return P})),r.d(n,"d",(function(){return I})),r.d(n,"e",(function(){return E})),r.d(n,"g",(function(){return _})),r.d(n,"f",(function(){return G}));var e,o=r(5),c=r.n(o),u=r(27),i=r.n(u),a=r(7),f=r.n(a),s=r(10),d=r.n(s),l=r(55),p=r.n(l),v=r(13),b=r(108);function y(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function g(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){f()(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var O=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.reduce((function(t,n){return g(g({},t),n)}),{}),o=n.reduce((function(t,n){return[].concat(i()(t),i()(Object.keys(n)))}),[]),c=D(o);return d()(0===c.length,"collect() cannot accept collections with duplicate keys. Your call to collect() contains the following duplicated functions: ".concat(c.join(", "),". Check your data stores for duplicates.")),e},h=O,j=O,w=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e,o=[].concat(n);return"function"!=typeof o[0]&&(e=o.shift()),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o.reduce((function(t,r){return r(t,n)}),t)}},m=O,S=O,k=O,R=function(t){return t},A=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=k.apply(void 0,i()(n.map((function(t){return t.initialState||{}}))));return{initialState:e,controls:j.apply(void 0,i()(n.map((function(t){return t.controls||{}})))),actions:h.apply(void 0,i()(n.map((function(t){return t.actions||{}})))),reducer:w.apply(void 0,[e].concat(i()(n.map((function(t){return t.reducer||R}))))),resolvers:m.apply(void 0,i()(n.map((function(t){return t.resolvers||{}})))),selectors:S.apply(void 0,i()(n.map((function(t){return t.selectors||{}}))))}},C={getRegistry:function(){return{payload:{},type:"GET_REGISTRY"}},await:c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{payload:{value:n},type:"AWAIT"});case 1:case"end":return t.stop()}}),t)}))},P=(e={},f()(e,"GET_REGISTRY",Object(b.a)((function(t){return function(){return t}}))),f()(e,"AWAIT",(function(t){return t.payload.value})),e),D=function(t){for(var n=[],r={},e=0;e<t.length;e++){var o=t[e];r[o]=r[o]>=1?r[o]+1:1,r[o]>1&&n.push(o)}return n},I={actions:C,controls:P,reducer:R},E=function(t){return function(n){return T(t(n))}},T=p()((function(t){return Object(v.mapValues)(t,(function(t,n){return function(){var r=t.apply(void 0,arguments);return d()(void 0!==r,"".concat(n,"(...) is not resolved")),r}}))}));function _(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.negate,e=void 0!==r&&r,o=Object(b.b)((function(n){return function(r){var o=!e,c=!!e;try{for(var u=arguments.length,i=new Array(u>1?u-1:0),a=1;a<u;a++)i[a-1]=arguments[a];return t.apply(void 0,[n,r].concat(i)),o}catch(t){return c}}})),c=Object(b.b)((function(n){return function(r){for(var e=arguments.length,o=new Array(e>1?e-1:0),c=1;c<e;c++)o[c-1]=arguments[c];t.apply(void 0,[n,r].concat(o))}}));return{safeSelector:o,dangerousSelector:c}}function G(t,n){return d()("function"==typeof t,"a validator function is required."),d()("function"==typeof n,"an action creator function is required."),d()("Generator"!==t[Symbol.toStringTag]&&"GeneratorFunction"!==t[Symbol.toStringTag],"an action’s validator function must not be a generator."),function(){return t.apply(void 0,arguments),n.apply(void 0,arguments)}}},698:function(t,n,r){"use strict";r.r(n),function(t){var e=r(421);r.d(n,"combineStores",(function(){return e.b})),r.d(n,"commonActions",(function(){return e.c})),r.d(n,"commonControls",(function(){return e.d})),r.d(n,"commonStore",(function(){return e.e})),r.d(n,"controls",(function(){return e.f})),r.d(n,"createReducer",(function(){return e.g})),r.d(n,"useInViewSelect",(function(){return e.l})),r.d(n,"createRegistryControl",(function(){return e.h})),r.d(n,"createRegistrySelector",(function(){return e.i})),r.d(n,"useSelect",(function(){return e.n})),r.d(n,"useDispatch",(function(){return e.k})),r.d(n,"useRegistry",(function(){return e.m})),r.d(n,"withSelect",(function(){return e.p})),r.d(n,"withDispatch",(function(){return e.o})),r.d(n,"RegistryProvider",(function(){return e.a})),void 0===t.googlesitekit&&(t.googlesitekit={}),t.googlesitekit.data=e.j,n.default=e.j}.call(this,r(26))}},[[698,1,0]]]);