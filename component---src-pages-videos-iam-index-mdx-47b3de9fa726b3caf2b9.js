(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("NmYn"),l=a.n(r),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,o=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===o,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,o=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||o,r=n.baseUrl,l=n.subDirectory,c=r+"/edit/"+n.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),v=a("dI71"),g=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===n,c=new RegExp(n+"/?(#.*)?$"),s=o.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[g.selectedItem]=r,t),g.listItem)},Object(p.b)(i.Link,{className:g.link,to:""+s},e))}));return Object(p.b)("div",{className:g.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:g.list},r))))))},t}(n.a.Component),T=a("MjG9"),w=a("CzIb"),y=a("Asxa"),k=a("OIbQ"),I=a.n(k),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:I.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,h=b.title,v=b.theme,g=b.description,y=b.keywords,k=b.date,I=Object(w.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,M=P?o.pathname.replace(P,""):o.pathname,C=m?M.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",A=v||I;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:A,pageTitle:h,pageDescription:g,pageKeywords:y,titleType:d},Object(p.b)(x,{title:n?Object(p.b)(n,null):h,label:"label",tabs:m,theme:A}),m&&Object(p.b)(f,{title:h,slug:M,tabs:m,currentTab:C}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u}),Object(p.b)(N,{date:k})),Object(p.b)(j.a,{pageContext:t,location:o,slug:M,tabs:m,currentTab:C}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},P2Gt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),i=a("6j+H"),c=(a("qKvR"),{}),s={_frontmatter:c},b=l.a;function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(b,Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"IAM is the means by which you control access rights to services and service instances in IBM Cloud, for users that you invite to share your account. IAM enables you to securely authenticate users for platform services and control access to resources consistently across IBM Cloud. "),Object(r.b)("h3",null,"IAM"),Object(r.b)("p",null,"The following is a list of videos for the IBM Cloud Account which walkthrough the below categories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create IAM Resource Groups and Access Groups for a project "),Object(r.b)("li",{parentName:"ul"},"How to invite users to the account "),Object(r.b)("li",{parentName:"ul"},"Migrating Cloud Foundry services to IAM ")),Object(r.b)("p",null,"To view a video click on the Video tile and it will show an inline video player. To Close the video click outside of the video and video player will close. To make the video full screen use the YouTube controls to enable this."),Object(r.b)(i.a,{content:"iam",tileColor:"bx--article-card--ibm",mdxType:"VideoTile"}),Object(r.b)("h3",null,"IBM Cloud Docs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/account?topic=account-iamoverview"},"IBM Cloud IAM Overview "))))}u.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-videos-iam-index-mdx-47b3de9fa726b3caf2b9.js.map