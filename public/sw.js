if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0d385525c4a52dfdc03acfa109526d84"},{url:"/_next/static/chunks/081ca426-63100cec0b4cf06f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/1685-12436b2c06f8e437.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/2117-00ebae226afab570.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/2358-f8864d8bf434f381.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/2611-62c0d8efe7205311.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/2972-27f1772bd9235c4c.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/30a37ab2-f74aa5f0cb0d8f7f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/3145-a1e38d93788e747e.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/370b0802-b9d15aa29a396d41.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/3d47b92a-49a9ed4d1539e145.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/4507-8bfacd2bac8710e2.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/479ba886-868dfb56f8ea2ddd.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/53c13509-faa15861a0217216.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/54a60aa6-b682a55a2e351c00.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/578c2090-bf1dd4b52d693202.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/59650de3-7e39553a2e038cd1.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/5e22fd23-0011599f59abd142.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/6185-c86735a7a74ef96b.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/6484-727f2d3dcab8740c.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/70e0d97a-7c060d66bb2e1175.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/7835-0efdb3d920766167.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/7846-f4693e2c3e974071.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/7859-da420e7b48b3817a.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/795d4814-7f926f3f1c3c6a7f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/8e1d74a4-4497c206bae64610.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/9188-776d9f00c39cb95f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/94730671-31e9d29876c2bc0c.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/953-ebefa07fa6962da4.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/9837-670112c98ea3a5e7.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/9842-ff8d5093a14ad52d.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/9990-95be9e76231c21ab.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/9c4e2130-7ae395e3dd1d8683.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/%5B...not_found%5D/not-found-e179131704609d29.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/%5B...not_found%5D/page-95809ec86fe5d060.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/about/page-94f5c2b1c7f1f91f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/contacts/page-4053ef0277c60ac5.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/emails/page-b17b17f5bcc272af.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/help/contacts/page-16cb5f295e88abed.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/help/page-009edca6d3255643.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/help/sections/page-13f84d90ed756420.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/help/services/page-086422d7ea98b5bb.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/help/textadv/page-47419710380f45a5.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/layout-da4c610d9b48da2f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/master/page-f8110e546b1357b8.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/page-c32b165983244a68.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/posts/%5Bid%5D/categories/page-447dad86db43a183.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/posts/%5Bid%5D/comments/page-35e6fa55fba4b555.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/posts/%5Bid%5D/live/page-fd3d1953c4b0ceb2.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/posts/%5Bid%5D/page-9b60990cc86cc52f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/posts/page-200c9542a9b49034.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/sections/%5Bid%5D/page-c890cff618f797f1.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/sections/page-2a7d00db8148a56a.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/services/%5Bid%5D/page-23827af3431bb19e.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/services/page-7609f07c25967b72.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/settings/page-519d45e4f080f863.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/textadv/%5Bid%5D/page-e332c5acf9f839bc.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/admin/textadv/page-969dea7ee5ea49eb.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/contacts/page-d0a640c4a48fbfa3.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/demo/page-382d3db8382c5b87.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/feed/page-11322a677e74db38.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/login/page-435599955cf33c6a.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/posts/%5Bid%5D/page-0f5967d27d9c91d3.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/privacy_policy/page-5b804ce90ec06db0.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/(pages)/services/%5Bid%5D/page-4f14e3f8dd627e0c.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/_not-found/page-42473b4465c3f085.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/layout-1e621a3684ab9dd9.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/loading-94afa4c2181ed9cc.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/app/page-af2c244f9eb2b2a4.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/b563f954-5d22405beae2b2e4.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/c916193b-70869ede2b189f73.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/e34aaff9-4dc6c2f58e6bcd23.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/ee560e2c-363a6b7b06f05e3f.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/f25cdb8d-932fe6cd8e11910e.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/f97e080b-2a422366b34ff798.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/fca4dd8b-9d7d4b71434171ae.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/fd9d1056-61bacf9fc30aebc3.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/framework-a63c59c368572696.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/main-030276b4bcf34383.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/main-app-94d58b4e6c63d934.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/pages/_app-78ddf957b9a9b996.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/pages/_error-7ce03bcf1df914ce.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ee9330a47c277c01.js",revision:"yJHrvRzwGiLXf9XdW9WCj"},{url:"/_next/static/css/284ff5b59dac4942.css",revision:"284ff5b59dac4942"},{url:"/_next/static/css/30f632d520b23430.css",revision:"30f632d520b23430"},{url:"/_next/static/css/b643bca5ffe0be83.css",revision:"b643bca5ffe0be83"},{url:"/_next/static/css/bddf628001ff2cf8.css",revision:"bddf628001ff2cf8"},{url:"/_next/static/media/064ea76c844b54f3-s.woff2",revision:"3fee4096c9abd02c729e85e38fd59e4b"},{url:"/_next/static/media/09f6c2baa931b883-s.woff2",revision:"05d5a027d0230d04b87ea36afaf6c9f4"},{url:"/_next/static/media/6b4fe0bff7871930-s.woff2",revision:"43b5bfe23b6c47868202fc5d161d48b4"},{url:"/_next/static/media/92daa4d0098aa288-s.p.woff2",revision:"d5e6781d146904e54b05ac6a23c246e8"},{url:"/_next/static/media/admin.a95aa2a5.webp",revision:"36dd7bb46bb5eeaea66eaab79636a6ee"},{url:"/_next/static/media/b0fde133b3c9bd9c-s.woff2",revision:"c728f3003d3b11cdefc0aa23fa6e56d1"},{url:"/_next/static/yJHrvRzwGiLXf9XdW9WCj/_buildManifest.js",revision:"0ea7e7088aabf697ba3d8aa8c7b54a89"},{url:"/_next/static/yJHrvRzwGiLXf9XdW9WCj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/google5b7d6e8ed31c699b.html",revision:"537f9192897dc89b4421c14d1df9058b"},{url:"/static/Image/admin.webp",revision:"36dd7bb46bb5eeaea66eaab79636a6ee"},{url:"/static/Image/default.gif",revision:"22c114f768798a2c77899a1485cc69d5"},{url:"/static/Image/logo.jpg",revision:"94bec10fd112cb2534dd0ef26fe28545"},{url:"/static/Image/logo.png",revision:"d62dbfa9a093c4422dcbae43a25b8391"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
