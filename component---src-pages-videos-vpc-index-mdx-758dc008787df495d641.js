(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},f=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,c=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+f.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:f.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),v=a("I8xM"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),i=a===r,c=new RegExp(r+"/?(#.*)?$"),b=n.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(p.b)(o.Link,{className:v.link,to:""+b},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},i))))))},t}(r.a.Component),C=a("MjG9"),w=a("CzIb"),P=a("Asxa"),T=a("OIbQ"),N=a.n(T),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:N.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,m=s.tabs,f=s.title,j=s.theme,v=s.description,P=s.keywords,T=s.date,N=Object(w.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,V=I?n.pathname.replace(I,""):n.pathname,y=m?V.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",S=j||N;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:S,pageTitle:f,pageDescription:v,pageKeywords:P,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):f,label:"label",tabs:m,theme:S}),m&&Object(p.b)(g,{title:f,slug:V,tabs:m,currentTab:y}),Object(p.b)(C.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u}),Object(p.b)(k,{date:T})),Object(p.b)(h.a,{pageContext:t,location:n,slug:V,tabs:m,currentTab:y}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},c2N4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=a("6j+H"),c=(a("qKvR"),{}),b={_frontmatter:c},s=l.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Overview"),Object(i.b)("p",null,"A VPC is a public cloud offering that lets an enterprise establish its own private cloud-like computing environment on shared public cloud infrastructure. "),Object(i.b)("p",null,"With IBM Cloud Virtual Private Cloud (VPC), you can use the UI, CLI, and API to quickly provision generation 2 virtual server instances for VPC with high network performance. VPC infrastructure contains a number of Infrastructure-as-a-Service (IaaS) offerings, including Virtual Servers for VPC"),Object(i.b)("h3",null,"VPC & VSI"),Object(i.b)("p",null,"This section walkthrough the high level overview of the Virtual Private Cloud (VPC)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Creation of VPC with its first subnet, ACL and Security group"),Object(i.b)("li",{parentName:"ul"},"Creation of second submet in a different zone"),Object(i.b)("li",{parentName:"ul"},"Control VPC network traffic via Access Control Lists and Security Groups"),Object(i.b)("li",{parentName:"ul"},"Creation of Virtual Server Instances (VSI)"),Object(i.b)("li",{parentName:"ul"},"Creation of SSH Keys to use with virtual server instances in VPC"),Object(i.b)("li",{parentName:"ul"},"Creation of Load Balancer with health checks in VPC"),Object(i.b)("li",{parentName:"ul"},"Introduction of VPC Gen2 and comparison to Gen1"),Object(i.b)("li",{parentName:"ul"},"Creation of VPC Gen2"),Object(i.b)("li",{parentName:"ul"},"Creation of Virtual Server Instances from a template"),Object(i.b)("li",{parentName:"ul"},"Introduction of VPC Autoscaler"),Object(i.b)("li",{parentName:"ul"},"Creation of VPC Autoscaler ")),Object(i.b)("p",null,"To view a video click on the Video tile and it will show an inline video player. To Close the video click outside of the video and video player will close. To make the video full screen use the YouTube controls to enable this."),Object(i.b)(o.a,{content:"vpc",tileColor:"bx--article-card--ibm",mdxType:"VideoTile"}),Object(i.b)("h3",null,"IBM Cloud Docs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/vpc?topic=vpc-getting-started"},"IBM Cloud Virtual Private Cloud")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/learn/vpc"},"IBM Cloud VPC Getting Started"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-videos-vpc-index-mdx-758dc008787df495d641.js.map