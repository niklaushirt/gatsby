(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),c=a("NmYn"),l=a.n(c),r=a("Wbzz"),i=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,c=void 0===o?[]:o;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,c=o.baseUrl,l=o.subDirectory,i=c+"/edit/"+o.branch+l+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},j=a("FCXl"),g=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===o,i=new RegExp(o+"/?(#.*)?$"),b=n.replace(i,a);return Object(p.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(p.b)(r.Link,{className:f.link,to:""+b},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},c))))))},t}(o.a.Component),v=a("MjG9"),w=a("CzIb"),k=a("Asxa"),y=a("OIbQ"),N=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(k.c,{className:N.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,c=t.frontmatter,s=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,m=s.tabs,h=s.title,g=s.theme,f=s.description,k=s.keywords,y=s.date,N=Object(w.a)().interiorTheme,I=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,M=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",B=g||N;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:B,pageTitle:h,pageDescription:f,pageKeywords:k,titleType:d},Object(p.b)(x,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:B}),m&&Object(p.b)(T,{title:h,slug:C,tabs:m,currentTab:M}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u}),Object(p.b)(P,{date:y})),Object(p.b)(j.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:M}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jReX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a("wx14"),o=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),r=a("6j+H"),i=(a("qKvR"),{}),b={_frontmatter:i},s=l.a;function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",null,"Overview"),Object(c.b)("p",null,"IBM Cloud account includes many interacting components and systems for resource, user, and access management. Concepts like how certain components are connected or how access works help you in understanding how to set up your account."),Object(c.b)("h3",null,"Account"),Object(c.b)("p",null,"The following is a list of videos for the IBM Cloud Account which walkthrough the below categories:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"IBM Cloud has three different account types : Lite, PayGO and Subscription"),Object(c.b)("li",{parentName:"ul"},"Steps for creating an IBM Cloud account"),Object(c.b)("li",{parentName:"ul"},"Log into a new IBM Cloud Account and get a guided tour of the Dashboard screen"),Object(c.b)("li",{parentName:"ul"},"Upgrading your LITE account to either a PayGO or Subscription account")),Object(c.b)("p",null,"To view a video click on the Video tile and it will show an inline video player. To Close the video click outside of the video and video player will close. To make the video full screen use the YouTube controls to enable this."),Object(c.b)(r.a,{content:"account",tileColor:"bx--article-card--ibm",mdxType:"VideoTile"}),Object(c.b)("h3",null,"IBM Cloud Docs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/account?topic=account-overview"},"IBM Cloud Account "))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-videos-account-index-mdx-b422f726ec652b317ce9.js.map