(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(143),i=n(151);t.default=function(e){var t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=n(142),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(144),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var m=n(36);n.d(t,"parsePath",function(){return m.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=n(51),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},148:function(e){e.exports={data:{en:{name:"Main Nav",pages:[{__typename:"ContentfulHomepage",pageName:"Home"},{__typename:"ContentfulAbout",pageName:"About"},{__typename:"ContentfulProjects",pageName:"Projects"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connect"}],externalLinks:[{text:"Videos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}},fr:{name:"Main Nav",pages:[{__typename:"ContentfulHomepage",pageName:"Accueil"},{__typename:"ContentfulAbout",pageName:"À Propos"},{__typename:"ContentfulProjects",pageName:"Projets"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connectez"}],externalLinks:[{text:"Vidéos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}}}}},149:function(e,t,n){},151:function(e,t,n){"use strict";var a=n(146),o=n(0),r=n.n(o),i=n(4),c=n.n(i),l=n(152),u=n.n(l),s=n(143),p=(n(50),n(26),n(148)),m=n(145),d=m.a.div.withConfig({displayName:"container",componentId:"sc-15iduiu-0"})(["display:block;margin:0 auto;overflow:auto;width:1200px;@media (max-width:1200px){width:100%;}"]),f=m.a.footer.withConfig({displayName:"navbar__Footer",componentId:"sc-12kvf4b-0"})(["background-color:#242424;display:block;overflow:visible;position:relative;text-align:center;width:100%;"]),g=m.a.ul.withConfig({displayName:"navbar__Navigation",componentId:"sc-12kvf4b-1"})(["margin:0;padding:15px 0;text-align:center;@media (max-width:1200px){display:none;}"]),y=m.a.nav.withConfig({displayName:"navbar__NavigationItem",componentId:"sc-12kvf4b-2"})(["color:#fff;display:inline-block;margin:0 50px;"]),h=m.a.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-12kvf4b-3"})(["display:none;font-size:1.25em;padding:15px 25px 0;text-align:right;width:100%;@media (max-width:1200px){display:block;}"]),v=m.a.span.withConfig({displayName:"navbar__HamburgerIcon",componentId:"sc-12kvf4b-4"})(["color:#fff;"]),_=function(e){var t=e.__typename.replace("Contentful","").toLowerCase();return{url:"/"+("homepage"===t?"":t),key:t,text:e.pageName}},b=function(e){var t=e[Object({NODE_ENV:"production",PUBLIC_DIR:"/Users/tjnickerson/Documents/Github/Nickersoft/conor/active/public",BUILD_STAGE:"build-javascript",GATSBY_BUILD_STAGE:"build-javascript"}).LOCALE||"en"];console.log(t);var n=t.pages.map(_);return r.a.createElement(f,null,r.a.createElement(d,null,r.a.createElement(h,null,r.a.createElement(v,{className:"fa fa-bars",id:"mobile_nav_toggle"})),r.a.createElement(g,null,n.map(function(e){return r.a.createElement(y,{key:e.key},r.a.createElement(s.Link,{to:e.url},e.text))}))))},w=function(e){e.location;return r.a.createElement(s.StaticQuery,{query:"2072581527",render:b,data:p})},k=(n(149),function(e){var t=e.children,n=e.location;return r.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("main",null,t),r.a.createElement(w,{location:n}))},data:a})});k.propTypes={children:c.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-page-2-js-58e189d40ffef8d1563d.js.map