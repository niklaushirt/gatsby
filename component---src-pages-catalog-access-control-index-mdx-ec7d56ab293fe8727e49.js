(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),s=a.n(i),n=a("NmYn"),o=a.n(n),c=a("Wbzz"),l=a("Xrax"),r=a("k4MR"),b=a("TSYQ"),g=a.n(b),d=a("QH2O"),p=a.n(d),m=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,s=e.tabs,n=void 0===s?[]:s;return Object(m.b)("div",{className:g()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,i=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,n=s.baseUrl,o=s.subDirectory,l=n+"/edit/"+s.branch+o+"/src/pages"+t;return n?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),x=a("dI71"),y=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),n=a===s,l=new RegExp(s+"/?(#.*)?$"),r=i.replace(l,a);return Object(m.b)("li",{key:e,className:g()((t={},t[y.selectedItem]=n,t),y.listItem)},Object(m.b)(c.Link,{className:y.link,to:""+r},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:y.list},n))))))},t}(s.a.Component),w=a("MjG9"),O=a("CzIb"),v=a("Asxa"),C=a("OIbQ"),k=a.n(C),I=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:k.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,n=t.frontmatter,b=void 0===n?{}:n,g=t.relativePagePath,d=t.titleType,p=b.tabs,A=b.title,x=b.theme,y=b.description,v=b.keywords,C=b.date,k=Object(O.a)().interiorTheme,T=Object(c.useStaticQuery)("2456312558").site.pathPrefix,M=T?i.pathname.replace(T,""):i.pathname,N=p?M.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",B=x||k;return Object(m.b)(r.a,{tabs:p,homepage:!1,theme:B,pageTitle:A,pageDescription:y,pageKeywords:v,titleType:d},Object(m.b)(u,{title:s?Object(m.b)(s,null):A,label:"label",tabs:p,theme:B}),p&&Object(m.b)(j,{title:A,slug:M,tabs:p,currentTab:N}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:g}),Object(m.b)(I,{date:C})),Object(m.b)(h.a,{pageContext:t,location:i,slug:M,tabs:p,currentTab:N}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},R2ja:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var i,s=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("T0C+"),a("qKvR"),{}),r=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:l},g=c.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(g,Object(s.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(r,{mdxType:"PageDescription"}),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"Authorizing access to private catalogs")),Object(o.b)("p",null,"To authorize users to work with the products in your private catalogs, assign them the viewer role on the catalog management service. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Catalog management")),Object(o.b)("p",null,"You can give users access to view private catalogs and catalog filters, create private catalogs, add software to private catalogs, and set catalog filters. "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"881px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGklEQVQ4y42TCY7DIAxFuf81s+9bs1aNRw/JkUUzmUF6DSnmY/Md1/e9fD4fOc/zYhxHWZZFtm2TdV09vMNxHMKw8Rb3fr8lHPM8e1EOQ9QK38Xb4dj0er2uDVDXtVRVJWVZ+qz2fb+Egf9svFbAmmuaRoZhkGmaLpIkkSiKPMzJ1q7/BpU5fsjQLpBdnueSZZlwYLj+p2CIllwUhb9HyrmLC6F0x+mhU5zGNQD39+Tql8v2RTeSVdu2vtyu677a6lHwznqy1rbRDP87nDrIRgUhMtMOsKbYuBCa3rcNWLcwA5fVaVoHwrhHl8lCSdNU4ji+njhOxjYmBEG6wd0tkhVioELhoXd4Qf1ecQg3gXvVttE5wjrnqbEhP4ACPTitLqB9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/gatsby/static/a284e94d9aedc2617fc9e42a5beae2ae/63748/CatalogIAM.png",srcSet:["/gatsby/static/a284e94d9aedc2617fc9e42a5beae2ae/7fc1e/CatalogIAM.png 288w","/gatsby/static/a284e94d9aedc2617fc9e42a5beae2ae/a5df1/CatalogIAM.png 576w","/gatsby/static/a284e94d9aedc2617fc9e42a5beae2ae/63748/CatalogIAM.png 881w"],sizes:"(max-width: 881px) 100vw, 881px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"As the account owner, you assign users specific catalog management access depending on what tasks they are performing. To streamline the process of assigning access, you can use access groups to organize a set of users into a single entity. That way, you can assign a single policy to the group one time, and then add or remove users from the group as needed. "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABfUlEQVQoz3VT2ZKCMBDk/39PS61dFZErXOE+fejtiWCxlFDVzJBMOj0HVhAECMMQYhckSYI8z9E0Deq6Nvjmb63Aklfbtni9XpCn6zpDmKUphmEwQVVV7RJufWsYR4yCacJE0p4kXd+jJ2TPkM7BDS/eI/sodA8HPE8nqOsV6eMB7ThIbPs/7ndjo8sFRRyjYRZr0jUszfpJSkbRrKxteWNVoiwLVERdlka59jzkjF8ItzCE4c8PFBWUbEbuuiiIxHbg/94QzAivd0T2EyEVlqytpL7XKCvzfSimU7ERUq9h6FHWHXQ1oGhGYjLI65Hrzdc01/W0/OMRiqrC8xmRUlCE1ppjo6GzDFmWGluxBLKeUqFMgdjFX4+ZFbMROR0pusuGeFQsATGL/w1CInYhXdY/hBHrV1BqTOtRqUNSgU/iLVkURQaLv14X9W9CKouLAup2Q8QO+vPfIkGiIDNpZ+aAYPkWLPtiC3K8u8wZjKlMZkyvgteH9oi2syjffwjMi67XV0fvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/gatsby/static/d6e9f746ae75a7cb14755fc76909716a/3cbba/CatalogAssignIAM.png",srcSet:["/gatsby/static/d6e9f746ae75a7cb14755fc76909716a/7fc1e/CatalogAssignIAM.png 288w","/gatsby/static/d6e9f746ae75a7cb14755fc76909716a/a5df1/CatalogAssignIAM.png 576w","/gatsby/static/d6e9f746ae75a7cb14755fc76909716a/3cbba/CatalogAssignIAM.png 1152w","/gatsby/static/d6e9f746ae75a7cb14755fc76909716a/d460a/CatalogAssignIAM.png 1224w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Catalog Visibility")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click Catalogs in the breadcrumb at the top of the page."),Object(o.b)("li",{parentName:"ul"},"Click Settings."),Object(o.b)("li",{parentName:"ul"},"Set IBM Cloud catalog to On."),Object(o.b)("li",{parentName:"ul"},"Confirm that your filters and settings are correctly applied by going to the public catalog, and expanding the catalog switcher. Only the private catalogs in your account should be displayed in the list.")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"27.083333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsTAAALEwEAmpwYAAABAklEQVQY05WPS2uDUBCF/StGjBtxERGqfznS+Atc+AwU2lSQQh62SQtNsylNfFy9ek+vgtJtBz7mnIE5zAiaplFJkqCqKnMcB57nIY5jRFE00OvRh2EI3/cngiCA67qwbRv3qxXs5RKCZVmUh8I0TfZ1uYDh/9W2LRhfbJoGgmEYVJnPcWdZLF2vcdps8P6cYJc8Yvv0gHOa4ud6RVVV6LpuWP5LPxuL8VRBlmUqiiJ0XWcvSYLTfo+PQ4bsdYfssMX35xllWaIoCuR5PjH6um7Q8kzaMlBKISiKQmezGfTFgr0djyB1jZJfQxvKX6Ag/I3+OkLI1Ec9QGrcCMOtagf/CxrIU/3mvB8cAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud IAM Catalog Access",title:"IBM Cloud IAM Catalog Access",src:"/gatsby/static/b46c547ab7e8f927eec901f33f90f3f2/3cbba/Visibility.png",srcSet:["/gatsby/static/b46c547ab7e8f927eec901f33f90f3f2/7fc1e/Visibility.png 288w","/gatsby/static/b46c547ab7e8f927eec901f33f90f3f2/a5df1/Visibility.png 576w","/gatsby/static/b46c547ab7e8f927eec901f33f90f3f2/3cbba/Visibility.png 1152w","/gatsby/static/b46c547ab7e8f927eec901f33f90f3f2/6a9ba/Visibility.png 1475w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-catalog-access-control-index-mdx-ec7d56ab293fe8727e49.js.map