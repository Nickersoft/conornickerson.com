(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(0),i=a.n(n),o=a(145),r=a(153),c=o.a.div.withConfig({displayName:"pages__Sidebar",componentId:"sc-6kvjaa-0"})(["background:#242424;display:inline-block;height:100%;overflow:hidden;width:450px;vertical-align:top;@media (max-width:500px){width:100%}"]),l=o.a.div.withConfig({displayName:"pages__HeaderArea",componentId:"sc-6kvjaa-1"})(["margin-top:50%;transform:translateY(-25%);"]),s=o.a.h1.withConfig({displayName:"pages__Header",componentId:"sc-6kvjaa-2"})(["color:#FFF;letter-spacing:0;font-size:2.5rem;padding:0 10px;margin-top:10px;@media (max-width:700px){font-size:3em;}"]),p=o.a.h2.withConfig({displayName:"pages__Subheader",componentId:"sc-6kvjaa-3"})(["color:#FFF;display:block;font-size:2rem;letter-spacing:0;margin:10px 0 100px;padding:0;@media (max-width:500px){font-size:1.5em;}"]),u=(o.a.img.withConfig({displayName:"pages__Logo",componentId:"sc-6kvjaa-4"})(["padding:0px 80px 10px;width:100%;"]),o.a.div.withConfig({displayName:"pages__CoverImageContainer",componentId:"sc-6kvjaa-5"})(["background:red;display:inline-block;width:calc(100% - 450px);vertical-align:top;height:100%;overflow:hidden;position:relative;"])),d=o.a.img.withConfig({displayName:"pages__CoverImage",componentId:"sc-6kvjaa-6"})(["min-height:660px;height:100%;position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);"]),m="26437331";t.default=function(e){var t=e.data,a=e.location,n=t[Object({NODE_ENV:"production",PUBLIC_DIR:"/Users/tjnickerson/Documents/Github/Nickersoft/conor/active/public",BUILD_STAGE:"build-javascript",GATSBY_BUILD_STAGE:"build-javascript"}).LOCALE||"en"];console.log(Object({NODE_ENV:"production",PUBLIC_DIR:"/Users/tjnickerson/Documents/Github/Nickersoft/conor/active/public",BUILD_STAGE:"build-javascript",GATSBY_BUILD_STAGE:"build-javascript"}).LOCALE);var o=n.titleLine1,m=n.titleLine2,f=n.coverImage.fluid;return console.log(f),i.a.createElement(r.a,{location:a},i.a.createElement(c,null,i.a.createElement(l,null,i.a.createElement(s,null,o),i.a.createElement(p,null,m))),i.a.createElement(u,null,i.a.createElement(d,{srcSet:f.srcSet})))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),i=a.n(n),o=a(4),r=a.n(o),c=a(142),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(27);a.d(t,"waitForRouteChange",function(){return s.c});var p=a(144),u=a.n(p);a.d(t,"PageRenderer",function(){return u.a});var d=a(36);a.d(t,"parsePath",function(){return d.a});var m=i.a.createContext({}),f=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),i=a.n(n),o=a(4),r=a.n(o),c=a(51),l=a(1),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},148:function(e){e.exports={data:{en:{name:"Main Nav",pages:[{__typename:"ContentfulHomepage",pageName:"Home"},{__typename:"ContentfulAbout",pageName:"About"},{__typename:"ContentfulProjects",pageName:"Projects"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connect"}],externalLinks:[{text:"Videos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}},fr:{name:"Main Nav",pages:[{__typename:"ContentfulHomepage",pageName:"Accueil"},{__typename:"ContentfulAbout",pageName:"À Propos"},{__typename:"ContentfulProjects",pageName:"Projets"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connectez"}],externalLinks:[{text:"Vidéos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}}}}},149:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(146),i=a(0),o=a.n(i),r=a(4),c=a.n(r),l=a(154),s=a.n(l),p=a(143),u=(a(50),a(26),a(148)),d=a(145),m=d.a.div.withConfig({displayName:"container",componentId:"sc-15iduiu-0"})(["display:block;margin:0 auto;overflow:auto;width:1200px;@media (max-width:1200px){width:100%;}"]),f=d.a.footer.withConfig({displayName:"navbar__Footer",componentId:"sc-12kvf4b-0"})(["background-color:#242424;display:block;overflow:visible;position:relative;text-align:center;width:100%;"]),g=d.a.ul.withConfig({displayName:"navbar__Navigation",componentId:"sc-12kvf4b-1"})(["margin:0;padding:15px 0;text-align:center;list-style:none;@media (max-width:1200px){display:none;}"]),h=d.a.nav.withConfig({displayName:"navbar__NavigationItem",componentId:"sc-12kvf4b-2"})(["color:#fff;display:inline-block;margin:0 50px;"]),v=Object(d.a)(p.Link).withConfig({displayName:"navbar__NavigationLink",componentId:"sc-12kvf4b-3"})(["transition:all 0.25s ease-in-out;color:#ccc;font-size:0.8em;font-weight:lighter;letter-spacing:4px;text-decoration:none;text-transform:uppercase;&:hover{color:#fff;}"]),_=d.a.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-12kvf4b-4"})(["display:none;font-size:1.25em;padding:15px 25px 0;text-align:right;width:100%;@media (max-width:1200px){display:block;}"]),y=d.a.span.withConfig({displayName:"navbar__HamburgerIcon",componentId:"sc-12kvf4b-5"})(["color:#fff;"]),b=function(e,t){var a=e.__typename.replace("Contentful","").toLowerCase(),n="/"+("homepage"===a?"":a),i=!1;t&&(i=t.pathname===n);return{url:n,active:i,key:a,text:e.pageName}},w=function(e){var t=e.location;return o.a.createElement(p.StaticQuery,{query:"2072581527",render:function(e){return function(t){var a=t[Object({NODE_ENV:"production",PUBLIC_DIR:"/Users/tjnickerson/Documents/Github/Nickersoft/conor/active/public",BUILD_STAGE:"build-javascript",GATSBY_BUILD_STAGE:"build-javascript"}).LOCALE||"en"].pages.map(b,e);return o.a.createElement(f,null,o.a.createElement(m,null,o.a.createElement(_,null,o.a.createElement(y,{className:"fa fa-bars",id:"mobile_nav_toggle"})),o.a.createElement(g,null,a.map(function(e){return o.a.createElement(h,{key:e.key},o.a.createElement(v,{to:e.url},e.text))}))))}}(t),data:u})},x=(a(149),function(e){var t=e.children,a=e.location;return o.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("main",null,t),o.a.createElement(w,{location:a}))},data:n})});x.propTypes={children:c.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-index-js-020122836d4a473568de.js.map