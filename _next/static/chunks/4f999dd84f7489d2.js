(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94909,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return d},getImageProps:function(){return c}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e.r(55682),o=e.r(8927),s=e.r(5500),l=i._(e.r(1948));function c(e){let{props:r}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(r))void 0===t&&delete r[e];return{props:r}}let d=s.Image},57688,(e,r,t)=>{r.exports=e.r(94909)},98183,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});function i(e){let r={};for(let[t,n]of e.entries()){let e=r[t];void 0===e?r[t]=n:Array.isArray(e)?e.push(n):r[t]=[e,n]}return r}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,o(e));else r.set(t,o(n));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}},95057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:t}=e,n=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:t&&(c=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${n}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18967,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return _}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let r,t=!1;return(...n)=>(t||(t=!0,r=e(...n)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function d(){let{href:e}=window.location,r=c();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function m(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await m(r.Component,r.ctx)}:{};let n=await e.getInitialProps(r);if(t&&p(t))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let h="u">typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class x extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function _(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(18967),a=e.r(52817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let r=(0,n.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,a.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return b},useLinkStatus:function(){return y}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e.r(90809),o=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(91949),m=e.r(73668),h=e.r(9396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(r){var t;let n,a,i,[l,b]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:v,as:j,children:_,prefetch:w=null,passHref:N,replace:k,shallow:P,scroll:O,onClick:C,onMouseEnter:S,onTouchStart:E,legacyBehavior:A=!1,onNavigate:z,ref:T,unstable_dynamicOnHover:L,...I}=r;n=_,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let M=s.default.useContext(c.AppRouterContext),R=!1!==w,U=!1!==w?null===(t=w)||"auto"===t?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:$,as:F}=s.default.useMemo(()=>{let e=g(v);return{href:e,as:j?g(j):e}},[v,j]);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(n)}let B=A?a&&"object"==typeof a&&a.ref:T,D=s.default.useCallback(e=>(null!==M&&(y.current=(0,f.mountLinkInstance)(e,$,M,U,R,b)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[R,$,M,U,b]),W={ref:(0,d.useMergedRef)(D,B),onClick(r){A||"function"!=typeof C||C(r),A&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(r),!M||r.defaultPrevented||function(r,t,n,a,i,o,l){if("u">typeof window){let c,{nodeName:d}=r.currentTarget;if("A"===d.toUpperCase()&&((c=r.currentTarget.getAttribute("target"))&&"_self"!==c||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(t)){i&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(n||t,i?"replace":"push",o??!0,a.current)})}}(r,$,F,y,k,O,z)},onMouseEnter(e){A||"function"!=typeof S||S(e),A&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),M&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){A||"function"!=typeof E||E(e),A&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),M&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,u.isAbsoluteUrl)(F)?W.href=F:A&&!N&&("a"!==a.type||"href"in a.props)||(W.href=(0,p.addBasePath)(F)),i=A?s.default.cloneElement(a,W):(0,o.jsx)("a",{...I,...W,children:n}),(0,o.jsx)(x.Provider,{value:l,children:i})}e.r(84508);let x=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(x);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},76387,e=>{"use strict";var r=e.i(43476),t=e.i(71645),n=e.i(57688),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=t.default.createContext&&t.default.createContext(a),o=["attr","size","title"];function s(){return(s=Object.assign.bind()).apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach(function(r){var n,a,i;n=e,a=r,i=t[r],(a=function(e){var r=function(e,r){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:r+""}(a))in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function d(e){return r=>t.default.createElement(u,s({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,n)=>t.default.createElement(r.tag,c({key:n},r.attr),e(r.child)))}(e.child))}function u(e){var r=r=>{var n,{attr:a,size:i,title:l}=e,d=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,o),u=i||r.size||"1em";return r.className&&(n=r.className),e.className&&(n=(n?n+" ":"")+e.className),t.default.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,d,{className:n,style:c(c({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&t.default.createElement("title",null,l),e.children)};return void 0!==i?t.default.createElement(i.Consumer,null,e=>r(e)):r(a)}function p(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function f(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(e)}function m(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function h(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(e)}function g(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"1",y:"3",width:"15",height:"13"},child:[]},{tag:"polygon",attr:{points:"16 8 20 8 23 11 23 16 16 16 16 8"},child:[]},{tag:"circle",attr:{cx:"5.5",cy:"18.5",r:"2.5"},child:[]},{tag:"circle",attr:{cx:"18.5",cy:"18.5",r:"2.5"},child:[]}]})(e)}function b(e){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(e)}var x=e.i(97053);let y=x.default.div.withConfig({displayName:"HeroStyles__HeroSection",componentId:"sc-448bc83b-0"})`
  background:
    radial-gradient(
      circle at top left,
      rgba(22, 163, 74, 0.22),
      transparent 55%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(74, 222, 128, 0.18),
      transparent 50%
    ),
    linear-gradient(135deg, #ffffff 0%, #f0fdf4 55%, #dcfce7 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem 6%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  align-items: center;
  box-shadow: var(--shadow);

  @media (max-width: 48em) {
    padding: 2.5rem 6%;
  }

  .hero_content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      font-size: clamp(1.8rem, 3vw, 3.25rem);
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.05rem;
      color: var(--muted);
      max-width: 38rem;
    }

    .hero_actions {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      .primary_btn {
        background: var(--brand);
        color: #fff;
        padding: 0.85rem 1.6rem;
        border-radius: 999px;
        font-size: 1rem;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(22, 163, 74, 0.35);
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(21, 128, 61, 0.35);
        }
      }

      .ghost_btn {
        border: 1px solid var(--border);
        color: var(--text);
        padding: 0.85rem 1.6rem;
        border-radius: 999px;
        font-size: 1rem;
        font-weight: 600;
        background: #fff;
        transition:
          border 0.2s ease,
          transform 0.2s ease;

        &:hover {
          border-color: var(--brand);
          transform: translateY(-1px);
        }
      }
    }
  }

  .hero_visual {
    background: linear-gradient(145deg, #064e3b 0%, #166534 45%, #15803d 100%);
    border-radius: 20px;
    padding: 1.5rem;
    color: #fff;
    display: grid;
    gap: 1rem;

    .metric_row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      .metric_card {
        background: rgba(255, 255, 255, 0.16);
        padding: 1rem;
        border-radius: 16px;
        flex: 1 1 140px;
        min-width: 120px;

        .metric_value {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .metric_label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.75);
        }
      }
    }
  }
`,v=({})=>(0,r.jsxs)(y,{children:[(0,r.jsxs)("div",{className:"hero_content",children:[(0,r.jsx)("h1",{children:"Welcome to Ann's Kitchen — Authentic Nigerian Igbo Cuisine."}),(0,r.jsx)("p",{children:"Experience traditional Igbo delicacies prepared with love and authentic ingredients. Order your favorite soups, fufu, and delicacies with instant WhatsApp checkout."}),(0,r.jsxs)("div",{className:"hero_actions",children:[(0,r.jsx)("a",{href:"#categories",className:"primary_btn",children:"Order Now"}),(0,r.jsx)("a",{href:"#contact",className:"ghost_btn",children:"Contact Us"})]})]}),(0,r.jsxs)("div",{className:"hero_visual",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(b,{size:22})," Order via WhatsApp instantly"]}),(0,r.jsxs)("div",{className:"metric_row",children:[(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsx)("div",{className:"metric_value",children:"24+"}),(0,r.jsx)("div",{className:"metric_label",children:"Delicious dishes"})]}),(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsx)("div",{className:"metric_value",children:"4.9/5"}),(0,r.jsx)("div",{className:"metric_label",children:"Customer ratings"})]}),(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsx)("div",{className:"metric_value",children:"2h"}),(0,r.jsx)("div",{className:"metric_label",children:"Fast delivery"})]})]}),(0,r.jsxs)("div",{className:"metric_row",children:[(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsxs)("div",{className:"metric_value",children:[(0,r.jsx)(p,{})," Fresh"]}),(0,r.jsx)("div",{className:"metric_label",children:"Daily ingredients"})]}),(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsxs)("div",{className:"metric_value",children:[(0,r.jsx)(h,{})," Popular"]}),(0,r.jsx)("div",{className:"metric_label",children:"Top dishes"})]}),(0,r.jsxs)("div",{className:"metric_card",children:[(0,r.jsxs)("div",{className:"metric_value",children:[(0,r.jsx)(f,{})," Hygienic"]}),(0,r.jsx)("div",{className:"metric_label",children:"Clean kitchen"})]})]})]})]});var j=e.i(22016);let _=x.default.article.withConfig({displayName:"ProductCardStyles__ProductCardWrapper",componentId:"sc-7e07673d-0"})`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
  }

  .product_image {
    background: linear-gradient(135deg, #16a34a 0%, #4ade80 55%, #22c55e 100%);
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      transition: transform 0.2s ease;
    }

    a:hover img {
      transform: scale(1.05);
    }
  }

  .product_body {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 1;

    a {
      text-decoration: none;
      color: inherit;

      &:hover .product_name {
        color: var(--brand);
      }
    }

    h3,
    .product_name {
      font-size: 1.05rem;
      margin: 0;
      transition: color 0.2s ease;
    }

    .description {
      color: var(--muted);
      font-size: 0.9rem;
    }

    .tag_row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      .badge {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(249, 115, 22, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
      }

      .promo_chip {
        font-size: 0.72rem;
        padding: 0.3rem 0.6rem;
        border-radius: 999px;
        background: rgba(34, 197, 94, 0.16);
        color: var(--accent);
        font-weight: 600;
      }
    }

    .price_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-top: auto;

      .price {
        font-size: 1.1rem;
        font-weight: 700;
      }

      .buy_btn {
        background: var(--brand);
        color: #fff;
        border-radius: 10px;
        padding: 0.6rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        text-align: center;
        transition:
          background 0.2s ease,
          transform 0.2s ease;

        &:hover {
          background: var(--brand-dark);
          transform: translateY(-1px);
        }
      }
    }

    .quantity_section {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      background: var(--bg);
      border-radius: 10px;
      border: 1px solid var(--border);

      .quantity_label {
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--muted);
        white-space: nowrap;
      }

      .quantity_controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-left: auto;

        .qty_btn {
          background: var(--brand);
          color: #fff;
          border: none;
          border-radius: 6px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition:
            background 0.2s ease,
            opacity 0.2s ease;

          &:hover:not(:disabled) {
            background: var(--brand-dark);
          }

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }

        .qty_input {
          width: 45px;
          height: 28px;
          text-align: center;
          border: 1px solid var(--border);
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 600;
          background: #fff;
          color: var(--text);
          transition: border-color 0.2s ease;

          &:focus {
            outline: none;
            border-color: var(--brand);
          }

          &.error {
            border-color: #ef4444;
            background-color: #fee2e2;
          }

          /* Remove spinners from number input */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          &[type="number"] {
            appearance: textfield;
            -moz-appearance: textfield;
          }
        }
      }
    }
  }
`;var w=e.i(25615),N=e.i(35521);let k=e=>"string"!=typeof e?"":e.replace(/[<>]/g,"").trim(),P=({product:e,categoryTitle:a,onBuyClick:i})=>{let o,[s,l]=(0,t.useState)(1),[c,d]=(0,t.useState)(!1),u=(0,t.useCallback)(()=>{l(e=>(0,w.validateQuantity)(e+1)),d(!1)},[]),p=(0,t.useCallback)(()=>{l(e=>Math.max(1,e-1)),d(!1)},[]),f=(0,t.useCallback)(e=>{let r=e.target.value;if(""===r){l(1),d(!1);return}let t=parseInt(r,10);isNaN(t)?d(!0):(l((0,w.validateQuantity)(t)),d(!1))},[]),m=(0,t.useCallback)(r=>{r.preventDefault(),i(e,a,(0,w.validateQuantity)(s))},[e,a,s,i]);return(0,r.jsxs)(_,{children:[(0,r.jsx)("div",{className:"product_image",children:(0,r.jsx)(j.default,{href:`/product/${e.id}/`,children:(0,r.jsx)(n.default,{src:(o=e.image,(0,N.getPublicAssetPath)(o)),alt:`${k(e.name)} - Delicious Nigerian food from Anna's Kitchen`,title:k(e.name),width:520,height:340,sizes:"(max-width: 48em) 100vw, 33vw",style:{width:"100%",height:"auto",cursor:"pointer"},priority:!1})})}),(0,r.jsxs)("div",{className:"product_body",children:[(0,r.jsx)(j.default,{href:`/product/${e.id}/`,children:(0,r.jsx)("h3",{className:"product_name",children:k(e.name)})}),(0,r.jsx)("p",{className:"description",children:k(e.description)}),(0,r.jsxs)("div",{className:"tag_row",children:[e.badge&&(0,r.jsx)("span",{className:"badge",children:k(e.badge)}),e.promoCode&&(0,r.jsxs)("span",{className:"promo_chip",children:[k(e.promoCode)," · ",e.promoPercent,"% off"]})]}),(0,r.jsxs)("div",{className:"quantity_section",children:[(0,r.jsx)("span",{className:"quantity_label",children:"Quantity:"}),(0,r.jsxs)("div",{className:"quantity_controls",children:[(0,r.jsx)("button",{type:"button",className:"qty_btn",onClick:p,"aria-label":"Decrease quantity",disabled:1===s,children:"−"}),(0,r.jsx)("input",{type:"number",className:`qty_input ${c?"error":""}`,value:s,onChange:f,min:"1",max:w.MAX_QUANTITY,"aria-label":"Product quantity",inputMode:"numeric"}),(0,r.jsx)("button",{type:"button",className:"qty_btn",onClick:u,"aria-label":"Increase quantity",disabled:s>=w.MAX_QUANTITY,children:"+"})]})]}),(0,r.jsxs)("div",{className:"price_row",children:[(0,r.jsx)("div",{className:"price",children:w.formatter.format(e.price)}),(0,r.jsx)("a",{href:"#",className:"buy_btn",onClick:m,rel:"noreferrer noopener",children:"Buy on WhatsApp"})]})]})]})},O=x.default.div.withConfig({displayName:"CategorySectionStyles__CategorySectionWrapper",componentId:"sc-f845f803-0"})`
  .section_header {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 0.75rem;

    h2 {
      font-size: 1.6rem;
    }

    .subtitle {
      color: var(--muted);
      font-size: 0.95rem;
    }
  }

  .cards_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .load_more_row {
    display: flex;
    justify-content: center;
    margin-top: 0.9rem;

    button {
      border: 1px solid var(--border);
      background: #fff;
      color: var(--text);
      border-radius: 999px;
      padding: 0.65rem 1.4rem;
      font-size: 0.95rem;
      font-weight: 600;
      cursor: pointer;
      transition:
        border 0.2s ease,
        transform 0.2s ease;

      &:hover {
        border-color: var(--brand);
        transform: translateY(-1px);
      }
    }
  }
`,C=({category:e,visibleCount:t,onLoadMore:n,onBuyClick:a})=>{let i=e.items.slice(0,t),o=t<e.items.length;return(0,r.jsxs)(O,{children:[(0,r.jsxs)("div",{className:"section_header",children:[(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("p",{className:"subtitle",children:e.subtitle})]}),(0,r.jsx)("div",{className:"cards_grid",children:i.map(t=>(0,r.jsx)(P,{product:t,categoryTitle:e.title,onBuyClick:a},t.id))}),o&&(0,r.jsx)("div",{className:"load_more_row",children:(0,r.jsxs)("button",{type:"button",onClick:n,children:["Load more ",e.title.toLowerCase()]})})]})},S=x.default.footer.withConfig({displayName:"FooterStyles__FooterSection",componentId:"sc-d229dfa6-0"})`
  text-align: center;
  color: var(--muted);
  font-size: 0.85rem;
  padding-bottom: 1rem;

  .footer_icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .footer_note {
    margin-top: 0.5rem;
  }
`,E=({})=>(0,r.jsxs)(S,{id:"contact",children:[(0,r.jsxs)("div",{className:"footer_icons",children:[(0,r.jsx)(m,{})," Premium picks · ",(0,r.jsx)(g,{})," Fast delivery · ",(0,r.jsx)(f,{}),"Secure checkout"]}),(0,r.jsx)("div",{className:"footer_note",children:"Secure shopping experience with encrypted WhatsApp communication."})]}),A=x.default.main.withConfig({displayName:"ProductShowcaseStyles__Page",componentId:"sc-5045877d-0"})`
  min-width: 300px;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  /* CATEGORIES SECTION */
  .categories {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .category_section {
      .section_header {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-bottom: 0.75rem;

        h2 {
          font-size: 1.6rem;
        }

        .subtitle {
          color: var(--muted);
          font-size: 0.95rem;
        }
      }

      .cards_grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }

      .load_more_row {
        display: flex;
        justify-content: center;
        margin-top: 0.9rem;

        button {
          border: 1px solid var(--border);
          background: #fff;
          color: var(--text);
          border-radius: 999px;
          padding: 0.65rem 1.4rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition:
            border 0.2s ease,
            transform 0.2s ease;

          &:hover {
            border-color: var(--brand);
            transform: translateY(-1px);
          }
        }
      }
    }
  }

  /* STORY SECTIONS */
  .story_sections {
    display: grid;
    gap: 1.75rem;
  }

  .story_section {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: var(--shadow);
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    align-items: center;

    .story_content {
      display: grid;
      gap: 0.75rem;

      h3 {
        font-size: 1.4rem;
      }

      p {
        color: var(--muted);
        font-size: 0.98rem;
      }

      .story_badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        background: rgba(249, 115, 22, 0.12);
        color: var(--brand-dark);
        font-weight: 600;
        font-size: 0.78rem;
        width: fit-content;
      }
    }

    .story_media {
      background: linear-gradient(135deg, var(--accent-soft), #fff7ed);
      border-radius: 16px;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .story_media .story_image {
      width: min(100%, 420px);
      height: auto;
      border-radius: 12px;
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
    }
  }
`;e.s(["default",0,()=>{let[e,a]=(0,t.useState)(w.initialVisible),i=(0,t.useMemo)(()=>new Map(w.categories.map(e=>[e.id,e])),[]),o=(e,r,t)=>{let n=(0,w.buildWhatsAppUrl)(e,r,t);window.open(n,"_blank","noopener,noreferrer")};return(0,r.jsxs)(A,{children:[(0,r.jsx)(v,{}),(0,r.jsx)("section",{className:"categories",id:"categories",children:w.categories.map(s=>(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(C,{category:s,visibleCount:e[s.id],onLoadMore:()=>{var e;let r;return e=s.id,void((r=i.get(e))&&a(t=>{let n=Math.min(t[e]+4,r.items.length);return{...t,[e]:n}}))},onBuyClick:o}),"best-sellers"===s.id&&(0,r.jsxs)("section",{className:"story_sections",children:[(0,r.jsxs)("div",{className:"story_section",children:[(0,r.jsxs)("div",{className:"story_content",children:[(0,r.jsx)("span",{className:"story_badge",children:"Animated spotlight"}),(0,r.jsx)("h3",{children:"Anna's delicacies on the big board"}),(0,r.jsx)("p",{children:"A playful animated scene highlighting our best plates on a billboard — perfect for social shares and homepage energy."})]}),(0,r.jsx)("div",{className:"story_media",children:(0,r.jsx)(n.default,{src:(0,N.getPublicAssetPath)("/animations/adult-pointing-1.gif"),alt:"Animated adult pointing at a billboard of Anna's delicacies",width:420,height:280,className:"story_image",unoptimized:!0})})]}),(0,r.jsxs)("div",{className:"story_section",children:[(0,r.jsx)("div",{className:"story_media",children:(0,r.jsx)(n.default,{src:(0,N.getPublicAssetPath)("/animations/adult-pointing-2.gif"),alt:"Animated adult presenting a billboard featuring Anna's delicacies",width:420,height:280,className:"story_image",unoptimized:!0})}),(0,r.jsxs)("div",{className:"story_content",children:[(0,r.jsx)("span",{className:"story_badge",children:"Fresh & tasty"}),(0,r.jsx)("h3",{children:"Fresh meals, warm vibes"}),(0,r.jsx)("p",{children:"Another animated highlight section to keep the landing page lively and reinforce the premium, authentic taste experience."})]})]})]})]},s.id))}),(0,r.jsx)(E,{})]})}],76387)}]);