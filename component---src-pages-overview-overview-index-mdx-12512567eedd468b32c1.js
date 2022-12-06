(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"013z":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),r=a("NmYn"),i=a.n(r),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),m=a.n(d),p=a("qKvR"),h=function(e){var t,a=e.title,o=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===o,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,o=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||o,r=n.baseUrl,i=n.subDirectory,c=r+"/edit/"+n.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),j=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,n=o.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===n,c=new RegExp(n+"/?(#.*)?$"),l=o.replace(c,a);return Object(p.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(p.b)(s.Link,{className:j.link,to:""+l},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},r))))))},t}(n.a.Component),k=a("MjG9"),v=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),P=a.n(y),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:P.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,r=t.frontmatter,b=void 0===r?{}:r,u=t.relativePagePath,d=t.titleType,m=b.tabs,x=b.title,O=b.theme,j=b.description,w=b.keywords,y=b.date,P=Object(v.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,B=I?o.pathname.replace(I,""):o.pathname,C=m?B.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=O||P;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:E,pageTitle:x,pageDescription:j,pageKeywords:w,titleType:d},Object(p.b)(h,{title:n?Object(p.b)(n,null):x,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{title:x,slug:B,tabs:m,currentTab:C}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:u}),Object(p.b)(N,{date:y})),Object(p.b)(f.a,{pageContext:t,location:o,slug:B,tabs:m,currentTab:C}),Object(p.b)(c.a,null))}},"9CZT":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return d}));var o,n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("T0C+"),a("qKvR"),{}),l=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),b={_frontmatter:c},u=s.a;function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"Overview of the Enterprise Run Books")),Object(i.b)("h2",null,Object(i.b)("strong",{parentName:"h2"},"What are Run Books")),Object(i.b)("p",null,"In a computer system or network, a runbook is a compilation of routine procedures and operations that the system administrator or operator carries out. System administrators in IT departments and NOCs use runbooks as a reference."),Object(i.b)("p",null,"Runbooks can be in either electronic or in physical book form. Typically, a runbook contains procedures to begin, stop, supervise, and debug the system. It may also describe procedures for handling special requests and contingencies. An effective runbook allows other operators, with prerequisite expertise, to effectively manage and troubleshoot a system."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Runbook"},"Wikipedia Explaination")),Object(i.b)("h3",null,"Overview"),Object(i.b)("p",null,"The IBM Cloud Enterprise Run Books documentation is a set of Run Books compiled by IBM Cloud experts that help compliment the base Cloud documentation. Overtime this documentation will find its way into the core documentation. This goal of the Run Books is to make an outcome easy on the IBM Cloud."),Object(i.b)("p",null,"IBM Cloud has a number of solution reference guides, this focus on application patterns. These Run Books are specifically for the Site Reliability Engineer or System Administrator. They focus on the setup and configuration of an IBM Cloud Account and Environments."),Object(i.b)("p",null,"These Run Books compliment the ",Object(i.b)("a",{parentName:"p",href:"https://ibm.github.io/cloud-enterprise-examples/"},Object(i.b)("strong",{parentName:"a"},"IBM Cloud Patterns"))," The Cloud Patterns focus on Terraform automation. The Enterprise Run Books focus on the step by step guides to achieve an IBM Cloud outcome. This maybe tasks that cannot be automated. Overtime we will work to bring this work together."))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-overview-overview-index-mdx-12512567eedd468b32c1.js.map