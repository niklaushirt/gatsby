(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),o=a("NmYn"),r=a.n(o),i=a("Wbzz"),b=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),c=a.n(s),d=a("QH2O"),u=a.n(d),m=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(m.b)("div",{className:c()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===A,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},p=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,A=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,o=n.baseUrl,r=n.subDirectory,b=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+p.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:p.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),x=a("dI71"),h=a("I8xM"),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===n,b=new RegExp(n+"/?(#.*)?$"),l=A.replace(b,a);return Object(m.b)("li",{key:e,className:c()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(m.b)(i.Link,{className:h.link,to:""+l},e))}));return Object(m.b)("div",{className:h.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:h.list},o))))))},t}(n.a.Component),O=a("MjG9"),w=a("CzIb"),N=a("Asxa"),v=a("OIbQ"),B=a.n(v),Q=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(N.c,{className:B.a.row},Object(m.b)(N.a,null,Object(m.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,c=t.relativePagePath,d=t.titleType,u=s.tabs,p=s.title,x=s.theme,h=s.description,N=s.keywords,v=s.date,B=Object(w.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=T?A.pathname.replace(T,""):A.pathname,y=u?I.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",k=x||B;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:k,pageTitle:p,pageDescription:h,pageKeywords:N,titleType:d},Object(m.b)(g,{title:n?Object(m.b)(n,null):p,label:"label",tabs:u,theme:k}),u&&Object(m.b)(E,{title:p,slug:I,tabs:u,currentTab:y}),Object(m.b)(O.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:c}),Object(m.b)(Q,{date:v})),Object(m.b)(f.a,{pageContext:t,location:A,slug:I,tabs:u,currentTab:y}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Fo6W:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var A,n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),b=(a("T0C+"),a("qKvR"),{}),l=(A="PageDescription",function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:b},c=i.a;function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"}),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Overview")),Object(r.b)("p",null,"IBM Edge Application Manager (IEAM) provides you with edge computing features to help you manage and deploy workloads from a management hub cluster to remote instances of OpenShift Container Platform or other Kubernetes-based clusters."),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Install")),Object(r.b)("p",null,"The following diagram depicts the high-level topology for a typical edge computing setup:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"841px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.8611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAL/2gAMAwEAAhADEAAAAdGGF0zYZAv/xAAZEAEBAQEBAQAAAAAAAAAAAAACAQMAERP/2gAIAQEAAQUC13+bG1fHf2MG8bIjJ5//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAEDAQE/AW4af//EABkRAAIDAQAAAAAAAAAAAAAAAAACAREhUf/aAAgBAgEBPwHJUpun/8QAHBAAAQQDAQAAAAAAAAAAAAAAAAECETESYYEi/9oACAEBAAY/Ao89UpsaKJc1s7QxTBOFIf/EAB0QAAICAgMBAAAAAAAAAAAAAAERADEhUUFhgZH/2gAIAQEAAT8hH0ANEONmeSJryEcv2C2GzIggByITm7Qn/9oADAMBAAIAAwAAABB7H//EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EKNEo6f/xAAXEQEBAQEAAAAAAAAAAAAAAAABIQAR/9oACAECAQE/EAkLuUc//8QAHBABAQACAgMAAAAAAAAAAAAAAREAIUGBYXHB/9oACAEBAAE/ELbOjZNUpB1rH9frbIvIJ3jCKM1fzEAEQJBfPvF9jQAPV5x5jisQz//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Edge Computing",title:"IBM Edge Computing",src:"/gatsby/static/4f40a3db14df881c4fd43f63ae6e1fa9/83da9/Edge.jpg",srcSet:["/gatsby/static/4f40a3db14df881c4fd43f63ae6e1fa9/69549/Edge.jpg 288w","/gatsby/static/4f40a3db14df881c4fd43f63ae6e1fa9/473e3/Edge.jpg 576w","/gatsby/static/4f40a3db14df881c4fd43f63ae6e1fa9/83da9/Edge.jpg 841w"],sizes:"(max-width: 841px) 100vw, 841px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Install Management Hub")),Object(r.b)("p",null,"Installation and configuration of the management hub must be done before moving on to the IBM Edge Application Manager (IEAM) node tasks. For more information about installing the required software for IBM Edge Management Hub, see:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SSFKVV_4.2/hub/hub.html"},"Management hub installation overview"))),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Best Practices")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SSFKVV_4.2/developing/developing_edge_services.html"},"Best practices for developing edge services"))),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"FAQs")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.ibm.com/support/knowledgecenter/SSFKVV_4.2/getting_started/faq.html"},"Most frequently asked questions (FAQs) about IBM Edge Application Manager"))))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-install-edge-index-mdx-c623fbac9261f3475864.js.map