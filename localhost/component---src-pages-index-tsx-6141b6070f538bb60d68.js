(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{294:function(e,n,t){"use strict";t.r(n);t(45);var a=t(0),r=t.n(a),i=t(341),s=t(161),o=t(348),c=t(347),u=t(346),l=t(340),d=t(324),m=t(327),f=t(337),b=t.n(f),h=t(326);function g(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n                  margin-right: 5px;\n                "]);return g=function(){return e},e}var v=function(e){var n=e.blocks,t=[{key:"columnIndex",name:"Index",fieldName:"index",iconName:"NumberSymbol",isIconOnly:!0,minWidth:5,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnHash",name:"Hash",fieldName:"hash",minWidth:350,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(e){return r.a.createElement(c.a,{href:"./block/?"+e.hash},e.hash)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0}];return r.a.createElement(u.a,{items:n,columns:t,selectionMode:l.b.none,getKey:function(e){return e.hash},setKey:"set",layoutMode:d.e.justified,isHeaderVisible:!0,onItemInvoked:function(e){return Object(s.navigate)("/block/?"+e.hash)}})};n.default=function(e){var n=e.location,t=function(e){var n=Object(h.a)(e),t=n[0],a=n[1];return[b.a.parse(t),function(e){return a(b.a.stringify(e))}]}(n),a=t[0],s=t[1],c=a.offset,u=void 0===c?0:c,l=function(e){if(e<1){var n=Object.assign({},a);delete n.offset,s(n)}else s(Object.assign({},a,{offset:e}))},d=function(){l(+u+20)},f=function(){l(+u-20)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{variables:{offset:u,limit:20}},function(e){var n=e.data,t=e.loading;return e.error?r.a.createElement("p",null,"error!"):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:f,disabled:t||u<1,className:Object(i.a)(g())},"← Newer"),r.a.createElement(o.a,{disabled:t,onClick:d},"Older →"),t?r.a.createElement("p",null,"Loading…"):r.a.createElement(v,{blocks:t?[]:n.blocks}))}))}},326:function(e,n,t){"use strict";t.d(n,"a",function(){return i});t(162);var a=t(0),r=t(161);function i(e){var n=Object(a.useState)(e.search.substr(1)),t=n[0],i=n[1];return Object(a.useEffect)(function(){var n=e.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(n+(t?"?"+t:""))},[t]),[t,i]}},327:function(e,n,t){"use strict";t.d(n,"b",function(){return f}),t.d(n,"a",function(){return h});t(45);var a=t(163),r=t.n(a),i=t(0),s=t(328);t(332);function o(){var e=l(["\n    query BlockByHash($hash: ID) {\n  block(hash: $hash) {\n    ...BlockCommon\n    miner\n    nonce\n    previousBlock {\n      hash\n    }\n    transactions {\n      nonce\n      publicKey\n      signature\n      signer\n      timestamp\n      updatedAddresses\n    }\n  }\n}\n    ",""]);return o=function(){return e},e}function c(){var e=l(["\n    query BlockList($offset: Int!, $limit: Int!) {\n  blocks(desc: true, offset: $offset, limit: $limit) {\n    ...BlockCommon\n  }\n}\n    ",""]);return c=function(){return e},e}function u(){var e=l(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return u=function(){return e},e}function l(e,n){return n||(n=e.slice(0)),e.raw=n,e}var d=r()(u()),m=r()(c(),d),f=function(e){return i.createElement(s.b,Object.assign({query:m},e))};var b=r()(o(),d),h=function(e){return i.createElement(s.b,Object.assign({query:b},e))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6141b6070f538bb60d68.js.map