(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),i=a("NmYn"),c=a.n(i),o=a("Wbzz"),r=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),g=a("QH2O"),u=a.n(g),m=a("qKvR"),p=function(e){var t,a=e.title,s=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===s,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,s=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||s,i=n.baseUrl,c=n.subDirectory,r=i+"/edit/"+n.branch+c+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:r},"Edit this page on GitHub"))):null},h=a("FCXl"),w=a("dI71"),x=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,n=s.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===n,r=new RegExp(n+"/?(#.*)?$"),l=s.replace(r,a);return Object(m.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=i,t),x.listItem)},Object(m.b)(o.Link,{className:x.link,to:""+l},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},i))))))},t}(n.a.Component),O=a("MjG9"),j=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),I=a.n(N),C=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:I.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,n=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,g=t.titleType,u=b.tabs,A=b.title,w=b.theme,x=b.description,v=b.keywords,N=b.date,I=Object(j.a)().interiorTheme,k=Object(o.useStaticQuery)("2456312558").site.pathPrefix,B=k?s.pathname.replace(k,""):s.pathname,T=u?B.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",M=w||I;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:M,pageTitle:A,pageDescription:x,pageKeywords:v,titleType:g},Object(m.b)(p,{title:n?Object(m.b)(n,null):A,label:"label",tabs:u,theme:M}),u&&Object(m.b)(y,{title:A,slug:B,tabs:u,currentTab:T}),Object(m.b)(O.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d}),Object(m.b)(C,{date:N})),Object(m.b)(h.a,{pageContext:t,location:s,slug:B,tabs:u,currentTab:T}),Object(m.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},l1qh:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return g}));var s,n=a("wx14"),i=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("013z"),r=(a("T0C+"),a("qKvR"),{}),l=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",e)}),b={_frontmatter:r},d=o.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)(d,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{mdxType:"PageDescription"}),Object(c.b)("h2",null,Object(c.b)("strong",{parentName:"h2"},"Passport Advantage")),Object(c.b)("p",null,"To install software products in IBM Cloud, the license for the software must be assigned to your account. You’re entitled to install a specific version of the software for a specific period of time, for example, one year. Licenses, which are also referred to as entitlements, are purchased and acquired through IBM® Passport Advantage."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Acquiring a license")),Object(c.b)("p",null,"In most cases, someone in a procurement or financial role in your organization works with an IBM Cloud sales representative to purchase the license through IBM Passport Advantage. A part number is associated with the license for the software product to be used in IBM Cloud. The person acquiring the license is not typically the same person who installs the software in the IBM Cloud account. After a sales representative acquires the license through the Software Quote Order tool, it must be assigned to each account that requires entitlement for use of the software in IBM Cloud."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Assigning licenses to an account")),Object(c.b)("p",null,"When you assign licenses to your account, all users with access to your account can use them to install the software to which the licenses apply. If the procurement focal is not the owner of the account to which the license must be assigned, they must be assigned the administrator role on the License and entitlement account management service."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVQoz21TzW7yMBDM+584l9fgDg9QfeKG1B4oJZB/JzhxElLCfDMmQaiqpdEu8Xp2dmyC/TFCnKRI4hjn8xmn0wlRFD3zmN/ruv4Tzjn0fYfWNRhvN2gFYXhEGIb+cJqmnkAxSRIP5fPhhlB0bYu6aUjkYJsWeeUw/IwPwuPxQShFeZ7DGIOiKHyu+MwFkgs5G1Vl6cm7rmeDHsPw8yCMuWmpoOt7WGthWNioO1VUVeXVddcrjKb4+ED89YWcefz5Cce6G0ftug5X1ozjiMCRRLiSoGVBz00VaXMYBg8tl2WwVC8SfTOcrL5ccGOdxDwJ1TElKnpXfn/D8mBLUqn0fimyWclJCu5LaU4yQcS73Q7L5RuxxGq1QmDYpSJqHjbyh5ej3xq3nMZvJlLHRj5Ol9JTmbzfbDZYr9fYbrcICo5haHxG06PDAef9HglVptMtZ8x1Ka+XpAuRt2r0ewWGSqSmYFGiN0hSkWdUm75A5CKTamsvDzsI+SbMvgcpvStYbKRKZPRII+vgb+hJCQn/CAfWSuH9fvfK5hgYemCoTChotJ3e1+zdKzSm3tv7vy0Wi4WfbCabCf8DkvRBBymTV18AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud License Assign",title:"IBM Cloud License Assign",src:"/gatsby/static/a6e361546ed439368cbf84df01f29ce9/3cbba/IAMAssignLicense.png",srcSet:["/gatsby/static/a6e361546ed439368cbf84df01f29ce9/7fc1e/IAMAssignLicense.png 288w","/gatsby/static/a6e361546ed439368cbf84df01f29ce9/a5df1/IAMAssignLicense.png 576w","/gatsby/static/a6e361546ed439368cbf84df01f29ce9/3cbba/IAMAssignLicense.png 1152w","/gatsby/static/a6e361546ed439368cbf84df01f29ce9/9941d/IAMAssignLicense.png 1523w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"Complete the following steps to assign a license to an account:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Log in to the console and go to Manage > Account."),Object(c.b)("li",{parentName:"ul"},"Click Licenses.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQoz52Ru07DMBSG/R5VSSuVMUsfJFBUdgZWXgAhkUvVnYdghhdgZmKBqSMoNhGJ1MRuk9i5/MQGBYSQuFj69J8jHx0f/4cMBgNMp1Msl0ssFgsEQWDQ+Vd834fruvA8r1ff7+q9cxyduJgd+yDD4RDz+RxSSmRZhjRNIYRAXdeGpmkMOm7bto+16ryuGwAtbh+ByzuAjMdjOI6DOEkQUgbKoo5nMMZ6KKUIw7DXz1CqlSJNGIosArFt20yoZIHtOkIpYmzTFyRxjKR7hHMOpVQ/6ffUUFWDQlYgO9YIhwcOVlGL06sKZ9cVLm4qSPXx5d8ebQGZTHYx29/DWkjcP0k8dKyYRNl5Kt8py/JHdF2e5yCjkWU8LIscVcENqhBmMX9FL5VY1ltD3Z1zAW4uN9hs/scru40rUY0ZV24AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud License Assign",title:"IBM Cloud License Assign",src:"/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/3cbba/PALicenses.png",srcSet:["/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/7fc1e/PALicenses.png 288w","/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/a5df1/PALicenses.png 576w","/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/3cbba/PALicenses.png 1152w","/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/0b124/PALicenses.png 1728w","/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/4ea69/PALicenses.png 2304w","/gatsby/static/e4308df74ab6252e10407ab2bb0fc71b/96b51/PALicenses.png 3146w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"If you don’t have any licenses assigned to the account, click Check IBM Passport Advantage to find all the licenses that are tied to your IBMid. If you have existing licenses, click Assign to assign more licenses to the account.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"277px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"314.4404332129964%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,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')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud License Assign",title:"IBM Cloud License Assign",src:"/gatsby/static/9426008af28bdf14fd9d4a97b8cf769a/d3a99/AssignLicense.png",srcSet:["/gatsby/static/9426008af28bdf14fd9d4a97b8cf769a/d3a99/AssignLicense.png 277w"],sizes:"(max-width: 277px) 100vw, 277px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-catalog-passport-advantage-index-mdx-a051bfed2df898377ed3.js.map