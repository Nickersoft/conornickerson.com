(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return y});var n=t(0),o=t.n(n),i=t(150),r=t(149),c=t(160),l=r.a.div.withConfig({displayName:"pages__Sidebar",componentId:"sc-1p0quar-0"})(["background:#242424;display:inline-block;height:100%;overflow:hidden;width:450px;vertical-align:top;@media (max-width:500px){width:100%}"]),p=r.a.div.withConfig({displayName:"pages__HeaderArea",componentId:"sc-1p0quar-1"})(["margin-top:50%;transform:translateY(-25%);@media (max-width:700px){width:100%;}"]),s=r.a.h1.withConfig({displayName:"pages__Header",componentId:"sc-1p0quar-2"})(["color:#FFF;letter-spacing:0;font-size:2.25rem;padding:0 10px;margin-top:10px;@media (max-width:700px){font-size:3em;}"]),d=r.a.h2.withConfig({displayName:"pages__Subheader",componentId:"sc-1p0quar-3"})(["color:#FFF;display:block;font-size:1.75rem;letter-spacing:0;margin:10px 0 100px;padding:0;@media (max-width:500px){font-size:1.5em;}"]),m=r.a.img.withConfig({displayName:"pages__Logo",componentId:"sc-1p0quar-4"})(["padding:0px 80px 10px;width:100%;"]),u=r.a.div.withConfig({displayName:"pages__CoverImageContainer",componentId:"sc-1p0quar-5"})(["display:inline-block;width:calc(100% - 450px);vertical-align:top;height:100%;overflow:hidden;position:relative;"]),f=r.a.img.withConfig({displayName:"pages__CoverImage",componentId:"sc-1p0quar-6"})(["min-height:660px;height:100%;position:absolute;top:50%;left:50%;min-width:990px;transform:translateX(-50%) translateY(-50%);"]),g=r.a.div.withConfig({displayName:"pages__Languages",componentId:"sc-1p0quar-7"})(["display:block;text-align:center;"]),h=Object(r.a)(i.Link).withConfig({displayName:"pages__Language",componentId:"sc-1p0quar-8"})(["transition:opacity 0.5s ease-in-out;border-right:1px solid #fff;background-size:cover;color:#fff;cursor:pointer;display:inline-block;font-size:1.4em;padding:0 12px;text-transform:uppercase;opacity:0.5;&.active{opacity:1.0;}&:not(.active):hover{opacity:0.75;}&:last-child{border:none;padding-right:0;}"]),y="1274993932";a.default=function(e){var a=e.data,t=e.location,n=a.en,i=n.pageName,r=n.titleLine1,y=n.titleLine2,v=n.logo.fluid,_=n.coverImage.fluid;return o.a.createElement(c.a,{location:t,pageName:i},o.a.createElement(l,null,o.a.createElement(p,null,o.a.createElement(m,{srcSet:v.srcSet}),o.a.createElement(s,null,r),o.a.createElement(d,null,y),o.a.createElement(g,null,o.a.createElement(h,{className:"active",to:"../en"},"EN"),o.a.createElement(h,{className:"",to:"../fr"},"FR")))),o.a.createElement(u,null,o.a.createElement(f,{srcSet:_.srcSet})))}},150:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return g}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return f});var n=t(0),o=t.n(n),i=t(4),r=t.n(i),c=t(148),l=t.n(c);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var p=t(26);t.d(a,"waitForRouteChange",function(){return p.c});var s=t(151),d=t.n(s);t.d(a,"PageRenderer",function(){return d.a});var m=t(36);t.d(a,"parsePath",function(){return m.a});var u=o.a.createContext({}),f=function(e){return o.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},151:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},152:function(e,a,t){"use strict";var n=t(149).a.div.withConfig({displayName:"container__Container",componentId:"sc-15iduiu-0"})(["display:block;margin:0 auto;overflow:auto;width:1200px;@media (max-width:1200px){width:100%;}"]);a.a=n},153:function(e){e.exports={data:{en:{siteName:"Conor Nickerson"},fr:{siteName:"Conor Nickerson"}}}},154:function(e,a,t){"use strict";t.r(a);t(37);var n=t(0),o=t.n(n),i=t(4),r=t.n(i),c=t(51),l=t(1),p=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return o.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};p.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=p},155:function(e){e.exports={data:{en:{name:"Main Nav",footer:{childMarkdownRemark:{html:'<p>© 2018 Conor Nickerson. Site designed by <a href="https://tylernickerson.com/">Tyler Nickerson</a>.</p>'}},pages:[{__typename:"ContentfulHomepage",pageName:"Home"},{__typename:"ContentfulAbout",pageName:"About"},{__typename:"ContentfulProjects",pageName:"Projects"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connect"}],externalLinks:[{text:"Videos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}},fr:{name:"Main Nav",footer:{childMarkdownRemark:{html:'<p>© 2018 Conor Nickerson. Site conçu par <a href="https://tylernickerson.com/">Tyler Nickerson</a>.</p>'}},pages:[{__typename:"ContentfulHomepage",pageName:"Accueil"},{__typename:"ContentfulAbout",pageName:"À Propos"},{__typename:"ContentfulProjects",pageName:"Projets"},{__typename:"ContentfulPortfolio",pageName:"Portfolio"},{__typename:"ContentfulConnect",pageName:"Connectez"}],externalLinks:[{text:"Vidéos",url:"http://conornickerson.wixsite.com/site/video"}],insertLinksAfter:{__typename:"ContentfulPortfolio"}}}}},156:function(e,a,t){},160:function(e,a,t){"use strict";var n=t(153),o=t(0),i=t.n(o),r=t(4),c=t.n(r),l=t(162),p=t.n(l),s=t(150),d=t(149),m=(t(76),t(50),t(27),t(155)),u=t(152),f=d.a.footer.withConfig({displayName:"navbar__Footer",componentId:"sc-12kvf4b-0"})(["background-color:#242424;display:block;overflow:visible;position:relative;text-align:center;width:100%;"]),g=d.a.ul.withConfig({displayName:"navbar__Navigation",componentId:"sc-12kvf4b-1"})(["margin:0;padding:15px 0;text-align:center;list-style:none;@media (max-width:1200px){display:none;}"]),h=d.a.nav.withConfig({displayName:"navbar__NavigationItem",componentId:"sc-12kvf4b-2"})(["color:#fff;display:inline-block;margin:0 50px;"]),y=Object(d.a)(s.Link).withConfig({displayName:"navbar__NavigationLink",componentId:"sc-12kvf4b-3"})(["transition:all 0.25s ease-in-out;color:#ccc;font-size:0.8em;font-weight:lighter;letter-spacing:4px;text-decoration:none;text-transform:uppercase;&:hover{color:#fff;}"]),v=d.a.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-12kvf4b-4"})(["display:none;font-size:1.25em;padding:15px 25px 0;text-align:right;width:100%;@media (max-width:1200px){display:block;}"]),_=d.a.span.withConfig({displayName:"navbar__HamburgerIcon",componentId:"sc-12kvf4b-5"})(["color:#fff;"]),x=d.a.span.withConfig({displayName:"navbar__Credits",componentId:"sc-12kvf4b-6"})(["color:#aaa;display:block;font-size:0.8em;margin:25px 0;p{margin:0;padding:0;}a{color:#ccc;}"]),w=function(e,a){var t=e.__typename.replace("Contentful","").toLowerCase();return{url:"/"+("homepage"===t?"":t),external:!1,key:t,text:e.pageName}},k=function(e){var a=e.location,t=e.href,n=a.pathname.replace(/\//g,"");return t.replace(/\//g,"")===n?{style:{color:"#fff"}}:null},b=function(e){var a=e.location;return i.a.createElement(s.StaticQuery,{query:"2260636581",render:function(e){return function(a){var t=a.en,n=t.footer.childMarkdownRemark.html,o=t.pages.map(w,e),r=t.pages.map(function(e){return e.__typename}).indexOf(t.insertLinksAfter.__typename),c=t.externalLinks.map(function(e){var a=e.text,t=e.url;return{url:encodeURIComponent("out?url="+t),text:a,external:!0,key:t}});return r>=0&&o.splice.apply(o,[r+1,0].concat(c)),i.a.createElement(f,null,i.a.createElement(u.a,null,i.a.createElement(v,null,i.a.createElement(_,{className:"fa fa-bars",id:"mobile_nav_toggle"})),i.a.createElement(g,null,o.map(function(e){return i.a.createElement(h,{key:e.key},i.a.createElement(y,{to:e.url,getProps:k},e.text))})),i.a.createElement(x,{dangerouslySetInnerHTML:{__html:n}})))}}(a),data:m})},C=(t(156),d.a.main.withConfig({displayName:"layout__Main",componentId:"gfnls3-0"})(["height:calc(100% - 30px - 1em);max-height:calc(100% - 32px - 1em);display:block;overflow-y:scroll;overflow-x:hidden;position:relative;animation:animation-fade 1s ease-in-out;@keyframes animation-fade{from{opacity:0;}to{opacity:1;}}"])),N=function(e){var a=e.children,t=e.pageName,o=e.location;return i.a.createElement(s.StaticQuery,{query:"297150321",render:function(e){var n=e.en,r=n.siteName,c=n.description,l=n.keywords;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:t+" | "+r,meta:[{name:"description",content:c},{name:"keywords",content:l}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(C,null,a),i.a.createElement(b,{location:o}))},data:n})};N.propTypes={children:c.a.node.isRequired};a.a=N}}]);
//# sourceMappingURL=component---src-pages-index-jsx-1f48eded26a33ba76648.js.map