(window.webpackJsonp=window.webpackJsonp||[]).push([[21,69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},f=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},v=a("FCXl"),O=a("dI71"),h=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(p.b)(c.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},o))))))},t}(r.a.Component),j=a("MjG9"),A=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),T=a.n(k),C=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:T.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=b.tabs,f=b.title,O=b.theme,h=b.description,y=b.keywords,k=b.date,T=Object(A.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,N=I?n.pathname.replace(I,""):n.pathname,P=m?N.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",B=O||T;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:B,pageTitle:f,pageDescription:h,pageKeywords:y,titleType:u},Object(p.b)(g,{title:r?Object(p.b)(r,null):f,label:"label",tabs:m,theme:B}),m&&Object(p.b)(w,{title:f,slug:N,tabs:m,currentTab:P}),Object(p.b)(j.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(C,{date:k})),Object(p.b)(v.a,{pageContext:t,location:n,slug:N,tabs:m,currentTab:P}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},c6WR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("T0C+"),a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:s},d=c.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"}),Object(i.b)("h2",null,Object(i.b)("strong",{parentName:"h2"},"Overview")),Object(i.b)("p",null,"As the account owner or administrator, you can manage which products in the IBM Cloud catalog are available for your enterprise. You can choose to include all products, a set of products, or only certain products. You can also specify what level of the enterprise hierarchy the filters apply to. And, you can further restrict which products are available for a specific account group or account."),Object(i.b)("p",null,"As the account owner or administrator, you can manage the settings for all catalogs across your account. Management tasks include setting the visibility of the IBM Cloud® catalog and controlling access to products in the public catalog and private catalogs for users in your account."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You need the administrator role on the catalog management service to perform these tasks.")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACCklEQVQoz2VRTasSURg+P6DdyJCaiAtRxC6hZNSikMImIwRFg0Cz3ES7gmpR3P/QT2ldi7u7cLmrIMJFK0X8mhlnnHFmnHGeznvuHbnWgYf347zv836xbDaLdDqNZDIJWZYFYrEYJEkSID0ejyORSCB+XYaUrUG6NUCs9AbS0UvIRy8g3eTIP4OUvgNWLBZRKBSQyWRQrVbRbrfRbDbRarXQ6XRQq9XAGLvENbDb38DunYDdPwOr/uTyHOzhb7C7P8BuvAWrVCog0nK5jG63i36/L/CKYzAYoNfroV5/isePHkB5/h714z9QPp1D+XAK5eMZ6p9/4cmXIZR336G8/gpWKpWQSqXQaDQwnU4xHA6FNBcLaJoG27ZBL9iF0HQDvucgei7XTUNHGHjc8jl2YPl8fk+4Xq8xm81gGAZP1oW+4MSr1QqO40BdLjGfz6GqKkzThOO6Is6ybLiuBz8IwHK53J7Q931BalmWCCKSzWYDz/MEbHvDE13uc4Qk34XcCmy328MOyUGViVBVdUEe8KphGIpkWgEVIRLyO5xY0/R90d3un5Gvdki7o9EpmArR35KPTGugsYnc9VwRHzVBMQeEVF3nO6EAIiSyaDT6i3ykR76rNsUe7JCqRUcYj8eiE7JJUnek00FGo9H+j+wI1PV/I18cxMJkMhGJRBxJAiUtL68dFafVEGiyv/QDmbfjQmoLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/3cbba/CatalogOverview.png",srcSet:["/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/7fc1e/CatalogOverview.png 288w","/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/a5df1/CatalogOverview.png 576w","/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/3cbba/CatalogOverview.png 1152w","/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/0b124/CatalogOverview.png 1728w","/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/4ea69/CatalogOverview.png 2304w","/ibm-enterprise-runbooks/static/b6120ffda9a0ec0119f2d44d48e2e984/0fff2/CatalogOverview.png 3124w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-catalog-overview-index-mdx-7dbde731d8d7a221b8d9.js.map