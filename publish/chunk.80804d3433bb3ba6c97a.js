(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{219:function(e,t,o){"use strict";o.r(t);o(4);var n=o(0),i=o(19),l=o(25),d=o(41),s=o(73),a=o(51),r=o(190),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product-card";e.buyText&&(window.productCardBuyText=e.buyText),e.buy&&(window.productCardBuyHtml=e.buy),e.footer&&(window.productCardFooterHtml=e.footer);const o=window.storefront&&window.storefront.getScopedSlots,n=document.querySelectorAll(`.${t}`),i=[];for(let e=0;e<n.length;e++)if(n[e]){const{productId:t,toRender:o}=n[e].dataset;o&&-1===i.indexOf(t)&&i.push(t)}let c;if(i.length>=4&&i.length<=70&&!e.skipSearchApi){const e=new a.a;c=e.setPageSize(i.length).setProductIds(i).fetch(!0,{timeout:5e3}).then((()=>{const t=e.getItems();for(let e=0;e<2;e++)u(n[e]);return t})).catch((e=>{console.error(e)}))}else c=Promise.resolve();const u=n=>{if(n){const{productId:i,sku:d,toRender:a}=n.dataset;if(a){let a;c.then((e=>{Array.isArray(e)&&(a=e.find((e=>{let{_id:t}=e;return t===i})))})).finally((()=>{let c;if(a){if(c=!0,!a.available||!a.visible||!Object(s.a)(a)){const e=n.parentNode&&n.parentNode.parentNode;e&&"LI"===e.tagName&&e.parentNode.appendChild(e)}}else{const e=n.parentNode;if(e&&(a=e.dataset.product,"string"==typeof a))try{a=JSON.parse(a)}catch(e){a=void 0}}((n,i,d,s,a)=>{new l.a({render:l=>l(r.a,{class:"product-card"!==t?t:null,attrs:{"data-product-id":i,"data-sku":d},props:{...e.props,productId:i,product:s,isLoaded:a,transitionClass:null},scopedSlots:"function"==typeof o?o(n,l):void 0})}).$mount(n)})(n,i,d,a,c)}))}}};Object(d.a)(n,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const u=window.location.pathname.startsWith("/app/"),p=[],w="localhost"===window.location.hostname?50:1,m=(e,t)=>{const o=new Promise((o=>{setTimeout((()=>{const l=window._widgets&&window._widgets[e];if(l&&l.active&&(!l.desktopOnly||!n.isMobile)&&(u?l.enableCheckout:!l.disablePages))return t().then((t=>{"function"==typeof t.default&&t.default({...l.options,$emit(e,t){i.a.emit(e,t)}}),i.a.emit(`widget:${e}`),console.log(`Widget loaded: ${e}`)})).catch(console.error).finally(o);o()}),w)}));p.push(o)},{resource:h}=document.body.dataset;u||"products"!==h||m("@ecomplus/widget-product",(()=>Promise.all([o.e(0),o.e(2),o.e(5),o.e(18)]).then(o.bind(null,372)))),Promise.all(p).then((()=>{m("@ecomplus/widget-product-card",(()=>Promise.resolve({default:c}))),("/search"===window.location.pathname||"categories"===h||"brands"===h||!h&&document.getElementById("search-engine"))&&m("@ecomplus/widget-search-engine",(()=>Promise.all([o.e(4),o.e(25)]).then(o.bind(null,373))));const e=e=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(e)),200):setTimeout(e,800)};e((()=>{i.a.emit("load:lcp"),u||(m("@ecomplus/widget-search",(()=>Promise.all([o.e(4),o.e(21)]).then(o.bind(null,383)))),m("@ecomplus/widget-minicart",(()=>Promise.all([o.e(0),o.e(16)]).then(o.bind(null,384)))),m("@ecomplus/widget-user",(()=>o.e(20).then(o.bind(null,385))))),Promise.all(p).then((()=>{e((()=>i.a.emit("load:components"))),m("@ecomplus/widget-tag-manager",(()=>o.e(23).then(o.bind(null,390)))),m("@ecomplus/widget-analytics",(()=>o.e(22).then(o.bind(null,391)))),m("@ecomplus/widget-fb-pixel",(()=>o.e(30).then(o.bind(null,387)))),m("@ecomplus/widget-tiktok-pixel",(()=>o.e(32).then(o.bind(null,386)))),m("@ecomplus/widget-gmc-ratings",(()=>o.e(31).then(o.bind(null,374)))),m("@ecomplus/widget-ebit",(()=>o.e(29).then(o.bind(null,375)))),m("@ecomplus/widget-compre-confie",(()=>o.e(28).then(o.bind(null,376))))}))}))}))}},0,[0,2,5,18,4,25]]);