(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(160);n.default=function(){return o.a.createElement(r.a,null,o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},150:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return g}),t.d(n,"StaticQueryContext",function(){return d}),t.d(n,"StaticQuery",function(){return f});var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=t(148),l=t.n(c);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var s=t(26);t.d(n,"waitForRouteChange",function(){return s.c});var u=t(151),p=t.n(u);t.d(n,"PageRenderer",function(){return p.a});var m=t(36);t.d(n,"parsePath",function(){return m.a});var d=o.a.createContext({}),f=function(e){return o.a.createElement(d.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,n,t){var a;e.exports=(a=t(154))&&a.default||a},152:function(e,n,t){"use strict";var a=t(149).a.div.withConfig({displayName:"container__Container",componentId:"sc-15iduiu-0"})(["display:block;margin:0 auto;overflow:auto;width:1200px;@media (max-width:1200px){width:100%;}"]);n.a=a},153:function(e){e.exports={data:{en:{siteName:"Conor Nickerson"},fr:{siteName:"Conor Nickerson"}}}},154:function(e,n,t){"use strict";t.r(n);t(37);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=t(51),l=t(1),s=function(e){var n=e.location,t=l.default.getResourcesForPathnameSync(n.pathname);return o.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=s},155:function(e){e.exports={data:{en:{name:"Main Nav",footer:{childMarkdownRemark:{html:'<p>© 2018 Conor Nickerson. Site designed by <a href="https://tylernickerson.com/">Tyler Nickerson</a>.</p>'}},pages:[{__typename:"ContentfulHomepage",pageName:"Home"},{__typename:"ContentfulAbout",pageName:"About"},{__typename:"ContentfulProjects",pageName:"Projects"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connect"}],externalLinks:[{text:"Videos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}},fr:{name:"Main Nav",footer:{childMarkdownRemark:{html:'<p>© 2018 Conor Nickerson. Site conçu par <a href="https://tylernickerson.com/">Tyler Nickerson</a>.</p>'}},pages:[{__typename:"ContentfulHomepage",pageName:"Accueil"},{__typename:"ContentfulAbout",pageName:"À Propos"},{__typename:"ContentfulProjects",pageName:"Projets"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connectez"}],externalLinks:[{text:"Vidéos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}}}}},156:function(e,n,t){},160:function(e,n,t){"use strict";var a=t(153),o=t(0),r=t.n(o),i=t(4),c=t.n(i),l=t(162),s=t.n(l),u=t(150),p=t(149),m=(t(76),t(50),t(27),t(155)),d=t(152),f=p.a.footer.withConfig({displayName:"navbar__Footer",componentId:"sc-12kvf4b-0"})(["background-color:#242424;display:block;overflow:visible;position:relative;text-align:center;width:100%;"]),g=p.a.ul.withConfig({displayName:"navbar__Navigation",componentId:"sc-12kvf4b-1"})(["margin:0;padding:15px 0;text-align:center;list-style:none;@media (max-width:1200px){display:none;}"]),y=p.a.nav.withConfig({displayName:"navbar__NavigationItem",componentId:"sc-12kvf4b-2"})(["color:#fff;display:inline-block;margin:0 50px;"]),h=Object(p.a)(u.Link).withConfig({displayName:"navbar__NavigationLink",componentId:"sc-12kvf4b-3"})(["transition:all 0.25s ease-in-out;color:#ccc;font-size:0.8em;font-weight:lighter;letter-spacing:4px;text-decoration:none;text-transform:uppercase;&:hover{color:#fff;}"]),v=p.a.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-12kvf4b-4"})(["display:none;font-size:1.25em;padding:15px 25px 0;text-align:right;width:100%;@media (max-width:1200px){display:block;}"]),_=p.a.span.withConfig({displayName:"navbar__HamburgerIcon",componentId:"sc-12kvf4b-5"})(["color:#fff;"]),k=p.a.span.withConfig({displayName:"navbar__Credits",componentId:"sc-12kvf4b-6"})(["color:#aaa;display:block;font-size:0.8em;margin:25px 0;p{margin:0;padding:0;}a{color:#ccc;}"]),x=function(e,n){var t=e.__typename.replace("Contentful","").toLowerCase();return{url:"/"+("homepage"===t?"":t),external:!1,key:t,text:e.pageName}},w=function(e){var n=e.location,t=e.href,a=n.pathname.replace(/\//g,"");return t.replace(/\//g,"")===a?{style:{color:"#fff"}}:null},b=function(e){var n=e.location;return r.a.createElement(u.StaticQuery,{query:"2260636581",render:function(e){return function(n){var t=n.en,a=t.footer.childMarkdownRemark.html,o=t.pages.map(x,e),i=t.pages.map(function(e){return e.__typename}).indexOf(t.insertLinksAfter.__typename),c=t.externalLinks.map(function(e){var n=e.text,t=e.url;return{url:encodeURIComponent("out?url="+t),text:n,external:!0,key:t}});return i>=0&&o.splice.apply(o,[i+1,0].concat(c)),r.a.createElement(f,null,r.a.createElement(d.a,null,r.a.createElement(v,null,r.a.createElement(_,{className:"fa fa-bars",id:"mobile_nav_toggle"})),r.a.createElement(g,null,o.map(function(e){return r.a.createElement(y,{key:e.key},r.a.createElement(h,{to:e.url,getProps:w},e.text))})),r.a.createElement(k,{dangerouslySetInnerHTML:{__html:a}})))}}(n),data:m})},C=(t(156),p.a.main.withConfig({displayName:"layout__Main",componentId:"gfnls3-0"})(["height:calc(100% - 30px - 1em);max-height:calc(100% - 32px - 1em);display:block;overflow-y:scroll;overflow-x:hidden;position:relative;animation:animation-fade 1s ease-in-out;@keyframes animation-fade{from{opacity:0;}to{opacity:1;}}"])),N=function(e){var n=e.children,t=e.pageName,o=e.location;return r.a.createElement(u.StaticQuery,{query:"297150321",render:function(e){var a=e.en,i=a.siteName,c=a.description,l=a.keywords;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:t+" | "+i,meta:[{name:"description",content:c},{name:"keywords",content:l}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(C,null,n),r.a.createElement(b,{location:o}))},data:a})};N.propTypes={children:c.a.node.isRequired};n.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-6c64511bb83eb9535150.js.map