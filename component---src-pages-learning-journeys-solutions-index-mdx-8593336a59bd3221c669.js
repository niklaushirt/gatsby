(window.webpackJsonp=window.webpackJsonp||[]).push([[86,69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(x.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),T=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(x.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(x.b)(b.Link,{className:f.link,to:""+l},e))}));return Object(x.b)("div",{className:f.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":t},Object(x.b)("ul",{className:f.list},o))))))},t}(r.a.Component),h=a("MjG9"),w=a("CzIb"),P=a("Asxa"),k=a("OIbQ"),N=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(x.b)(P.c,{className:N.a.row},Object(x.b)(P.a,null,Object(x.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,T=s.theme,f=s.description,P=s.keywords,k=s.date,N=Object(w.a)().interiorTheme,I=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,E=m?C.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",D=T||N;return Object(x.b)(l.a,{tabs:m,homepage:!1,theme:D,pageTitle:g,pageDescription:f,pageKeywords:P,titleType:u},Object(x.b)(p,{title:r?Object(x.b)(r,null):g,label:"label",tabs:m,theme:D}),m&&Object(x.b)(v,{title:g,slug:C,tabs:m,currentTab:E}),Object(x.b)(h.a,{padded:!0},a,Object(x.b)(j,{relativePagePath:d}),Object(x.b)(y,{date:k})),Object(x.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:E}),Object(x.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Liyj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),c=(a("T0C+"),a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),s={_frontmatter:c},d=b.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"Common patterns for combining Cloud Pak solutions together")))}u.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-learning-journeys-solutions-index-mdx-8593336a59bd3221c669.js.map