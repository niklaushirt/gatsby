(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),o=a.n(s),n=a("NmYn"),r=a.n(n),i=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),g=a.n(l),p=a("QH2O"),d=a.n(p),u=a("qKvR"),m=function(e){var t,a=e.title,s=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(u.b)("div",{className:g()(d.a.pageHeader,(t={},t[d.a.withTabs]=n.length,t[d.a.darkMode]="dark"===s,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,s=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||s,n=o.baseUrl,r=o.subDirectory,c=n+"/edit/"+o.branch+r+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+A.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:A.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),h=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,o=s.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),n=a===o,c=new RegExp(o+"/?(#.*)?$"),b=s.replace(c,a);return Object(u.b)("li",{key:e,className:g()((t={},t[O.selectedItem]=n,t),O.listItem)},Object(u.b)(i.Link,{className:O.link,to:""+b},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},n))))))},t}(o.a.Component),v=a("MjG9"),w=a("CzIb"),x=a("Asxa"),N=a("OIbQ"),I=a.n(N),M=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(x.c,{className:I.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,o=e.Title,n=t.frontmatter,l=void 0===n?{}:n,g=t.relativePagePath,p=t.titleType,d=l.tabs,A=l.title,h=l.theme,O=l.description,x=l.keywords,N=l.date,I=Object(w.a)().interiorTheme,k=Object(i.useStaticQuery)("2456312558").site.pathPrefix,B=k?s.pathname.replace(k,""):s.pathname,S=d?B.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",E=h||I;return Object(u.b)(b.a,{tabs:d,homepage:!1,theme:E,pageTitle:A,pageDescription:O,pageKeywords:x,titleType:p},Object(u.b)(m,{title:o?Object(u.b)(o,null):A,label:"label",tabs:d,theme:E}),d&&Object(u.b)(j,{title:A,slug:B,tabs:d,currentTab:S}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:g}),Object(u.b)(M,{date:N})),Object(u.b)(y.a,{pageContext:t,location:s,slug:B,tabs:d,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kDVC:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var s,o=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("T0C+"),a("qKvR"),{}),b=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:c},g=i.a;function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(g,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"PageDescription"}),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Introduction")),Object(r.b)("p",null,"After you set up your IBM Cloud account, you’re ready to start planning how you want to organize resources and assign access to identities in your account. These best practices provide you with the basic building blocks to enable successful and secure app development in IBM Cloud. "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Resource groups")),Object(r.b)("p",null,"Resource groups offer a way for you to organize IAM-enabled resources that are governed by IBM Cloud Identity and Access Management (IAM). You can group resources and assign access to individual service instances or entire resource groups that use IAM."),Object(r.b)("p",null,"The IBM Cloud account owner can add resources to any resource group, but other users must be granted access by using an IAM access policy. There are two minimum platform management roles that users must be assigned to add resources to a resource group: viewer role or higher on the resource group and editor role or higher on the resource or service."),Object(r.b)("p",null,"When you assign resources to a resource group, they can’t be later moved to another resource group. Be sure to plan how you want to organize resources in your account before you assign them to a resource group."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABuElEQVQoz5WSy07CQBSGeQ9KQIXKRRII4iXRhStfjadQWwLuWWDQxIREXevWhS4EBFpaSrm0QPt7zmCJMcboJH+YTIbvfPOnIVneRjweRzgcRqlUQvXyEmfn51BUFZVqFZVK5ceUy2UoigKVoyq0v6AzFaF8PodMJo1YLIqnx0f48zmswQDuZAJ4Hv67Qscnpzg8OsGmvIPmVQNmp43311d0Ke3nZ3RfXmAMhzBNU8QwjHUGHHOErmZAMyyMRiMyLOxht3iArbiMZr0OezxGX9MwtCyYZNonsE5/1HVdZEBnQxqwDg3pvneg9ftioHhyOp1CRArjrtGA5/twHEfo+4sFXLpk0/MNArHVhKv4sjyqhc0sCu9DxWIRe/v72IjFcH99LS4FwCX1OSOQQ78M4riuC5+GBmHIdDrFbDZbAQuFArLZLCKRiAAulsu1hUcgh4BcQ9Cbbdsre4KJoXSfn25RRbwXwFwuB0mS1oYM5Kcvyea7Idv/aphMJpFKcYcSHm5uBHBO3QXLZSvu8NNwTLZfDRnCdmwugIlEArIsIxqN4rZWg95qiU9Ge3tDjz4Zu9eD+wfD4PwDmoCpCgUE9nYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Resource Group",title:"IBM Cloud IAM Resource Group",src:"/gatsby/static/0476f65bb0682365a70fe62d21bc5fed/3cbba/RG.png",srcSet:["/gatsby/static/0476f65bb0682365a70fe62d21bc5fed/7fc1e/RG.png 288w","/gatsby/static/0476f65bb0682365a70fe62d21bc5fed/a5df1/RG.png 576w","/gatsby/static/0476f65bb0682365a70fe62d21bc5fed/3cbba/RG.png 1152w","/gatsby/static/0476f65bb0682365a70fe62d21bc5fed/e35c7/RG.png 1372w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Platform Roles")),Object(r.b)("p",null,"Govern user’s ability to do actions at the IBM Cloud Platform level"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Why"),"\nCustomers need the ability to set platform access, but withhold service actions."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),"\nCreating, viewing, or delete instances of a service, but not developing in the service"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"4 Platform Roles"),"\nAdministrator, Editor, Operator, Viewer"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"498px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"91.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC8ElEQVQ4y5VU23baMBD0//9O+5a0adI8tCftSWx8l8GOuRPAGBswNjCdlUP80pfonGFXK7HWzo5kDAYJrJ6LIOzD80PE8SuUGkBFMaJ+gtV6g7quNY5E05xwPB41Gj1vNE6nk7ZG+poiDCIEhFJ9uI4P3wsR8gN9JvXo9ywHruvDtFwM+BHLtPX+wG/XZL9je1gu1zDidAg/SuBwQ5SOsNntkZU7FNVR23a+x4a+jh8qbbe0srbaFsiKnbbNBTA2cYxjmmKXJDjQnqdTNJMx6vHo3bZoBJPO72IT1Iw3oxHqxQKG9eUrUtfDyLY1hj0bb0phGUXaXnGdi21BX3VYvyaI7+5g9H7cY8YjJ+MJ4vEUg9FEl7djyRWJrk5nVCS7ZIkH2j0bIWXv6wYHAWPF/oAKwPD5GcbCssDSoQKlG6EIaVIYto2SpnhsiGU6sEl8wH1iHdtHj+qQZvQsGzb3mTffmLDXg4w+pdKnhJIkpXRSJK9DpMMx9vx6UZYoihI5ia8qnvTAWFHo+JaxgjheLkifnmB4Dz+RSbdWa9Q8/vl81lpr3v3PjDmrZcIHzDc5BhT0OsuwoV+KPHgi8d+WK+R5QX+Lt8VSx7Jsg/U6o+gzzGYLPZcxfXmBsXRsPVHkTHPjBuQt0EIOQkVfwXFaUcu6K5xS0OIrFb8foOwSBo+PKNk5WdjkW5zZ1Qv5OF+6cuVa1XVLgUCv/4cOnVBKXjBRyGs3mkyZNNeE78irlC2ka+J5CilN6Mi5X9Z0jHc952FkzEwThvxcZePqckP4LEl8ge8HlEr7cFi8txHvt+9TYirS5ZsvNiaTWXfC+bsO4wE38o8iGUnoeb6WiXT7+rpUFLTI5joXiKwa0tGVfH/fPgDs2OWTMunGpUuofv1Gxi/0+dJM+fzIy5GRH3lRVpTLelt+2DeRTpbrdZkLZP+SsdW+wpSXxBjyQpd8wsyb70j+/MXMdrhgf9grrvOxaWFO/zqfOy5mTLQg18ntLf4BmTU+mmN4gooAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Assign Platform Access Roles",title:"IBM Cloud Assign Platform Access Roles",src:"/gatsby/static/4e9196ac1f70249307d2aacafb8e7f04/a0e61/Platform.png",srcSet:["/gatsby/static/4e9196ac1f70249307d2aacafb8e7f04/7fc1e/Platform.png 288w","/gatsby/static/4e9196ac1f70249307d2aacafb8e7f04/a0e61/Platform.png 498w"],sizes:"(max-width: 498px) 100vw, 498px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Service Roles")),Object(r.b)("p",null,"Govern user’s ability to do actions at a service level (consume/use a service)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),"\nDeveloper access for service-specific actions like using a service’s UIs, CLIs, and APIs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3 Service Roles"),"\nManager, Writer, Reader"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"494px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAACg0lEQVQ4y61TyVLbQBDV/38BhLDklhyAUwIxVMHBFNgUVSzGtrzIWo2MwYskW9bml9cDZqlccoiqXnVPT09rXr9pbTQao3bfhGV7ME0HpuWg0zWV7Zk2imKJf/2WyyW00dMzrq9raDbbLKyj3mixsA3DMAlLFfYHj/DcPiz6/f4DPO8FLmOO48HhZQaDoSqqhUEAmwFJ6BOSkKYZ8ixDRqRJiix9sWmScC99R/IOyVE3xH/+NLtUgnt+Dr9SUXi4uPgbEl/tffRXa9o+bf/kBJr+6wAOe9TpdFXv0sUCGanlpCRWkMTxW1zsYj5HtkgUVJz78g3OzqD5FxVkXPR6llK30WzBoN99FWWleKdtKL9FK/sSE+Es20W9rmMUzTCoVqny1ZWq3m51oett3tSg7eDm5l4pLupLoSZj97UGut3eW65HxYMgVGIOJwG8Mm/olsuIiwJjvscZ/xKGESbcjOgHYUgb8RDBeMj1bDbDdBqoQgXPffyGl5fQWkfHcIZPsF0Pc/Yiz3Mlf5bl6oA8oSz7DMkRm7CnC/YxZ64q+ImyUOLECM16Q6ev4+6uQZpi66+xJmqk3WSO+NICvdVBwqLyPUpBj8rIcjKeQMZwSipCdTyZKloRqY65F7IFQncVm89j1Q5pDSm937BVOoLtP6JNMeSgTEhBSkX+Mi0yHbLO5Bm9IpGnEy8Q8/nI/owXSFlzwLeoTW9vVXV/OELP89G2OJv+ED3OqaxNKmh6Axiu+D4Mp09FySJOMI7miDh2z1MWZI2oVoN2uraG891d/N7cQmlrG0fbOzj8uomfXzZwvPONsS0cbGwqX+KHzCt//4HL/T1U9/ZQ4dmqYH8fp+vr+AOWYVbhvz6uigAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Assign Service Roles",title:"IBM Cloud Assign Service Roles",src:"/gatsby/static/f7ab2a092cccef7a9edff4d14c00ec67/7a0f1/ServiceRole.png",srcSet:["/gatsby/static/f7ab2a092cccef7a9edff4d14c00ec67/7fc1e/ServiceRole.png 288w","/gatsby/static/f7ab2a092cccef7a9edff4d14c00ec67/7a0f1/ServiceRole.png 494w"],sizes:"(max-width: 494px) 100vw, 494px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Access Groups")),Object(r.b)("p",null,"Grouping of user and service IDs to which the same IAM access can be granted."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Why Access Groups?"),"\nYou can assign a single policy to multiple users or service IDs instead of assigning the same access multiple times per individual user or service ID."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What is it not?"),"\nAn access group is not necessarily an Azure team or AWS role. (Predefined Access Groups in roadmap)"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"675px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"128.81944444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsTAAALEwEAmpwYAAADUklEQVRIx52VWU8aYRSG+RMmXkjrAioKEiFEcLmoLa3Vqya96UX/qkkTk2oTl7rUtrRhU4EBZpiFWYCZt+d8I1VxiUry+I2EeeY9nPN9BMbGxhB88QLRaAx8PTQ0JBgeHsbU1BQikQimp6cFfM3vhUKhewlMTk5ifHxcMDExIQgGg1haWsLm5iZ2dnawvb19g62trXsJzM3NIZVKIZlMiqdzktHRUaytrUFVVZydnaFQKKBYLIq1VCrBdd17CUQiM4jH45idnQWn7Quz2Syq1SrqdQmVSgXn5+eoXFyIa1mWb6EoilgDseiMSBcKcbnjJA2Lkt+8eY1arYZqpYEqr0RNkgQX9KALEl+HH84EkisbWHmVxcLyKuZTS4gnFzEdTWDjwydKJ8NSDFhUuqVpAvsOHNuG4ziCQHJ5HSura0ivZBFPLSOWyCA8M4+Nj59RPDhE7WAP0q9fkE5Pb1H/+RO142M0Tk7gAuh2OlRyLIr5+YT4/rjDvAZHgnj7/j0Ku7s43dvD4ckRyqUiyuUiNYWaU7yEGpTP5/GDpoGvC3RNwhgymTQWFhZEl5mXNJfv1tdR3N9Hs1KHpNmoKSaqRFM1YZkmTMKyLLQNAxKltKhsfk+MzeLiIkkzSCQSN4Slg31YLR0m1dPu+Dg93HzRqGi53P9/LxNmaKdExcgMCrWmCsUGWmRtGB7ktoea5sHqeHS7B7fbRev3byHzeA5ZmE6nhYy3zqBQb2pQHUC1POi2L2o7Hro9zw94Xeh5/ta7znVhmYQqCTlhk5LxDZyqD/91ez2og8JwOCwYFPYTtiihQekU00cmzM4jErJ0UNiWNejcEBKylMvWCLv7gLCf7q6ESkNDkxI2KVXvrpKfKrSoZBo3WNRhh6QdxvK/z2cJHRJ2SOjo3hVGv0F+U54ktKnkroMbpYpyn5vQlvk0oY1PTXDpBtf1ebawRSU3SCjp3q2UeGgO7xMasr9TNGpEy/JHhtdO7zljs+/PYZsOBJ4/3nK8qo8R9hkUao0WFOqyYvQgGy4sh49SVxwEjEuHaosO4Mft5e8HaOs2dPowuaATJm6/1D9/roSDP9T+iT2CtyTM029y/stX5L4d4+/OIXKXNA59mkdHkOhUr9Op3j++/gFcW/ol4JAcPgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Access Group",title:"IBM Cloud Access Group",src:"/gatsby/static/f80a27b8f1eb75d4cb21728444790d41/761cc/AG.png",srcSet:["/gatsby/static/f80a27b8f1eb75d4cb21728444790d41/7fc1e/AG.png 288w","/gatsby/static/f80a27b8f1eb75d4cb21728444790d41/a5df1/AG.png 576w","/gatsby/static/f80a27b8f1eb75d4cb21728444790d41/761cc/AG.png 675w"],sizes:"(max-width: 675px) 100vw, 675px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Account Management Services")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Manage platform level access and resources")),Object(r.b)("p",null,"Many of the platform level roles can be granted using an Account Management Service"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Easier way to provide platform access"),Object(r.b)("li",{parentName:"ul"},"Ex: Billing Role, User Access Role, Support Focal")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"675px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB0ElEQVQ4y41UiXKCMBTk/7/NjketjrXeAoKCQBAFj9fdNyZ1pofNzE5e8pJl3xG8+Xwu7XZbBoOBjMdj6ff7MplMnN3pdNTf6/V0brVaMhwO9TzX3W5X0jSVw+EgxhjxiqKQ/X4vWZZJnuffZvoteIGgbX2c7b4S+r6vaqh0Npu5eTqdymKxcDNVJEmiHy/L8hsc4Xa7lSAIJI5jiaJINpuNgjZBH8G9MAz1nFVm1VlCzt7pdNL4q6qS6/UqHLfbzeFyuaif4AWS8ez5fFYfFe92u68cVjC4QaUGh+ngRx4JmU+qo8r1eq3nSU4BPEu/Vend5O9xBiEvNU3jVNGu61rXHPRTuYYcojUsgtdXhzXaZDcaSXVPOsP8CY8FUcL5y4vMUOXVx4fEq5VEy6XEQIRC+Oi5HIWpoMA8tM1PcCHvQVJCfnU8ypU5I+7FydE+JfJ1Qoj20m9wChP0XYZFhmqxMAkIiALFyaC6ZmvQfkj8X/BSNK1hyyDZbtwVFlDYgJCrZwotvBy5KhFSjgtEfa8ch0EuG+ROCZ/k0CmMUdEMpCkuJ0CGPivwHA1fDgpmkIYjcvwfMiUM0Bo+/hwB/iAEbcXbm4Tv71LY5/XPkD8BKVlzBvX6ldAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Account Management Services",title:"IBM Cloud Account Management Services",src:"/gatsby/static/83c9e879eee4eaf80b314d77ef71b014/761cc/AMS.png",srcSet:["/gatsby/static/83c9e879eee4eaf80b314d77ef71b014/7fc1e/AMS.png 288w","/gatsby/static/83c9e879eee4eaf80b314d77ef71b014/a5df1/AMS.png 576w","/gatsby/static/83c9e879eee4eaf80b314d77ef71b014/761cc/AMS.png 675w"],sizes:"(max-width: 675px) 100vw, 675px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Resources")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/account?topic=account-account_setup"},"Best practices for organizing resources and assigning access"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-iam-best-practices-index-mdx-7f7e86d1910e45d76aca.js.map