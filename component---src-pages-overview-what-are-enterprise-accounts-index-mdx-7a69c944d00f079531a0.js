(window.webpackJsonp=window.webpackJsonp||[]).push([[88,69],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),d=a("QH2O"),p=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,s=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),w=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(m.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(m.b)(o.Link,{className:w.link,to:""+l},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},i))))))},t}(r.a.Component),y=a("MjG9"),A=a("CzIb"),v=a("Asxa"),T=a("OIbQ"),N=a.n(T),k=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:N.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,u=t.relativePagePath,d=t.titleType,p=b.tabs,h=b.title,j=b.theme,w=b.description,v=b.keywords,T=b.date,N=Object(A.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,I=p?C.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",E=j||N;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:E,pageTitle:h,pageDescription:w,pageKeywords:v,titleType:d},Object(m.b)(g,{title:r?Object(m.b)(r,null):h,label:"label",tabs:p,theme:E}),p&&Object(m.b)(f,{title:h,slug:C,tabs:p,currentTab:I}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:u}),Object(m.b)(k,{date:T})),Object(m.b)(O.a,{pageContext:t,location:n,slug:C,tabs:p,currentTab:I}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},i1pZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n,r=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("T0C+"),a("qKvR"),{}),l=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),b={_frontmatter:s},u=o.a;function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(u,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{mdxType:"PageDescription"}),Object(c.b)("h2",null,Object(c.b)("strong",{parentName:"h2"},"Introduction")),Object(c.b)("p",null,"IBM Cloud enterprises provide a way to centrally manage billing and resource usage across multiple accounts. Within an enterprise, you create a multitiered hierarchy of accounts, with billing and payments for all accounts managed at the enterprise level."),Object(c.b)("p",null,"When compared to using multiple stand-alone accounts, enterprises offer the following key benefits:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Centralized account management:\nView your entire enterprise hierarchy at a glance, without needing to switch accounts. "),Object(c.b)("li",{parentName:"ul"},"Consolidated subscription billing:\nTrack your subscriptions and credit spending for all accounts from a single view. "),Object(c.b)("li",{parentName:"ul"},"Top-down usage reporting:\nFrom your enterprise account, you can view usage of all accounts in your enterprise, which is organized by account group.")),Object(c.b)("h3",null,Object(c.b)("strong",{parentName:"h3"},"Enterprise hierarchy")),Object(c.b)("p",null," ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"774px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.70833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVQ4y32TTUhUURTHH7SKapFTEJQtpOxr46JdVEQELcpVVGgFUSS1CmzRJlpUUCQRiAjVwhAnC53QIAuapJA0E1Mrh/wYdcb5bJ7jzLx335t3333/zrtjU8bUgbN4//vuuef8zjkKSljOEugN6/CHdHyIMljCwb/McZafKcIRMAwmXTcMwM7j7ewi1j6cQnnLDLa2BhFUNThWHswwYZrk9J+h67DyphtRBv3lihvVtgrRhZsJPZBiNrqCNnyTJl7N2WCUsavbQkDYNtycSEG+RJZKPDOLmcQ4VH2eAtpStIWBtPYV4cRHZLTvS9d/m0glwYYHke7vgz0fkg8UM6zrqMC5Z5twsXML4tmgvPAt1oeatjLUPvGQvgMRdZqqcMByWXA6T1+/gtAKBeHVCpLV+5eyFIWAHcO34B28Bt/IbWhmWh4u6DG8DDSha+w+/BMtMCxd6twywQSHMdSPTOMdZJsaoL9+USy7yHBZOY7Af42X7vQvikrG14Zk6wNo3U9h65oU03ocPYFm+D7fowwfE1OOBRbD87G7aP90Ez3jTdTprAubmsSXBVbCqxREPMRjjQI2GZD4R0O9OOUtw5l2Dy51VkoUUz+GcNrrId4biWslkoth8Hxh5BhjxU4r7N0bMH8PjPd+cC1Hs2UhT8xm1FEEIgOYS32R3be4gcjiBILxUcQz06RxOYOuubPpjhP+ZuhmZ5ZAxktof5JmnBe/FXcDXNO7O5C8cBKxuhrkHjVKyJnmBkSPHSQ/hFxLs7ykXj6LyInDSNQegUHVpc4fR7R6H+Lk+ZEhCsgLa5K+cRXzZcSzfCWS9LNran0dotvWIbp9Pc1evXwkfqAKsarNiO7aAK3Ti8TRvUjs2YnY7goYA30UcImDQ3tpp1XYCyoEQZYaPSY0TbrDC4ULlxexFkynbRRSF7TbjmVJpD8BGwHoUHJs1JcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Enterprise Account Hierarchy",title:"Enterprise Account Hierarchy",src:"/ibm-enterprise-runbooks/static/cff5571396f083a57a95cb008741898d/97191/hierarchy.png",srcSet:["/ibm-enterprise-runbooks/static/cff5571396f083a57a95cb008741898d/7fc1e/hierarchy.png 288w","/ibm-enterprise-runbooks/static/cff5571396f083a57a95cb008741898d/a5df1/hierarchy.png 576w","/ibm-enterprise-runbooks/static/cff5571396f083a57a95cb008741898d/97191/hierarchy.png 774w"],sizes:"(max-width: 774px) 100vw, 774px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"   "),Object(c.b)("p",null,"At its core, an enterprise consists of three main building blocks:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The enterprise account, which serves as the parent account to all other accounts in the enterprise."),Object(c.b)("li",{parentName:"ul"},"Account groups, which you can use to organize related accounts. "),Object(c.b)("li",{parentName:"ul"},"Accounts, which are just like stand-alone IBM Cloud accounts in that they contain resources and resource groups and independent access permissions. ")),Object(c.b)("h2",null,Object(c.b)("strong",{parentName:"h2"},"Resources")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/enterprise"},"IBM Cloud Enterprises Overview"))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-what-are-enterprise-accounts-index-mdx-7a69c944d00f079531a0.js.map