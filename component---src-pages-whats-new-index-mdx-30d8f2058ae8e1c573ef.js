(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),b=a("NmYn"),d=a.n(b),l=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),c=a("TSYQ"),s=a.n(c),m=a("QH2O"),p=a.n(m),u=a("qKvR"),O=function(e){var t,a=e.title,r=e.theme,n=e.tabs,b=void 0===n?[]:n;return Object(u.b)("div",{className:s()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===r,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,r=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,b=n.baseUrl,d=n.subDirectory,o=b+"/edit/"+n.branch+d+"/src/pages"+t;return b?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},f=a("FCXl"),N=a("dI71"),x=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=d()(e,{lower:!0,strict:!0}),b=a===n,o=new RegExp(n+"/?(#.*)?$"),i=r.replace(o,a);return Object(u.b)("li",{key:e,className:s()((t={},t[x.selectedItem]=b,t),x.listItem)},Object(u.b)(l.Link,{className:x.link,to:""+i},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},b))))))},t}(n.a.Component),v=a("MjG9"),y=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),P=a.n(w),k=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(T.c,{className:P.a.row},Object(u.b)(T.a,null,Object(u.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,b=t.frontmatter,c=void 0===b?{}:b,s=t.relativePagePath,m=t.titleType,p=c.tabs,j=c.title,N=c.theme,x=c.description,T=c.keywords,w=c.date,P=Object(y.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=I?r.pathname.replace(I,""):r.pathname,M=p?C.split("/").filter(Boolean).slice(-1)[0]||d()(p[0],{lower:!0}):"",A=N||P;return Object(u.b)(i.a,{tabs:p,homepage:!1,theme:A,pageTitle:j,pageDescription:x,pageKeywords:T,titleType:m},Object(u.b)(O,{title:n?Object(u.b)(n,null):j,label:"label",tabs:p,theme:A}),p&&Object(u.b)(h,{title:j,slug:C,tabs:p,currentTab:M}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:s}),Object(u.b)(k,{date:w})),Object(u.b)(f.a,{pageContext:t,location:r,slug:C,tabs:p,currentTab:M}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dGNc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var r,n=a("wx14"),b=a("zLVn"),d=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("T0C+"),a("qKvR"),{}),i=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(d.b)("div",e)}),c={_frontmatter:o},s=l.a;function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(d.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(d.b)(i,{mdxType:"PageDescription"}),Object(d.b)("h2",null,Object(d.b)("strong",{parentName:"h2"},"Release 0.0.2")),Object(d.b)("p",null,"The latest updates to the IBM Enterprise Run Books are below."),Object(d.b)("table",null,Object(d.b)("thead",{parentName:"table"},Object(d.b)("tr",{parentName:"thead"},Object(d.b)("th",{parentName:"tr",align:"left"},"Latest Updates"),Object(d.b)("th",{parentName:"tr",align:"left"},"Date "," "," "," "))),Object(d.b)("tbody",{parentName:"table"},Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/programming/cf/"},"IBM Cloud Functions and IBM Event Streams")),Object(d.b)("td",{parentName:"tr",align:"left"},"2021-04-13")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/install/cis/"},"Cloud Internet Services")),Object(d.b)("td",{parentName:"tr",align:"left"},"2021-03-11")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/install/edgenode/"},"Edge Node Device and Cluster 4.2 updates")),Object(d.b)("td",{parentName:"tr",align:"left"},"2021-03-03")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/install/portworx-for-data/"},"Portworx setup for Cloud Pak for Data 3.5 on IBM Managed Openshift 4.5+")),Object(d.b)("td",{parentName:"tr",align:"left"},"2021-02-25")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/videos/overview/"},"Videos for Accounts, IKS, VPC , VMWare, Storage , IAM and Load Balancer ")),Object(d.b)("td",{parentName:"tr",align:"left"},"2021-01-06")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/videos/foundation/"},"Videos Foundation")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-12-26")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/team/"},"Team Contribution")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-11-17")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/redhat/rhm/"},"RedHat Marketplace Section")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-10-05")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/redhat/virtualization/"},"Virtualization Section")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-10-07")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/install/integration-operator/"},"CP4I Operator Based Install Guide")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-10-07")),Object(d.b)("tr",{parentName:"tbody"},Object(d.b)("td",{parentName:"tr",align:"left"},"Added ",Object(d.b)("a",{parentName:"td",href:"/gatsby/videos/overview/"},"Videos - IBM Cloud Platform")),Object(d.b)("td",{parentName:"tr",align:"left"},"2020-10-17")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-whats-new-index-mdx-30d8f2058ae8e1c573ef.js.map