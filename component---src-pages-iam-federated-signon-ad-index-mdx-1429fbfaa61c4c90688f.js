(window.webpackJsonp=window.webpackJsonp||[]).push([[46,69],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),A=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),c=a.n(d),b=a("QH2O"),m=a.n(b),u=a("qKvR"),p=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:c()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===i,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,i=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,o=n.subDirectory,A=r+"/edit/"+n.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:A},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),y=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===n,A=new RegExp(n+"/?(#.*)?$"),l=i.replace(A,a);return Object(u.b)("li",{key:e,className:c()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(u.b)(s.Link,{className:y.link,to:""+l},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:y.list},r))))))},t}(n.a.Component),w=a("MjG9"),B=a("CzIb"),N=a("Asxa"),I=a("OIbQ"),v=a.n(I),M=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(N.c,{className:v.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,d=void 0===r?{}:r,c=t.relativePagePath,b=t.titleType,m=d.tabs,h=d.title,j=d.theme,y=d.description,N=d.keywords,I=d.date,v=Object(B.a)().interiorTheme,x=Object(s.useStaticQuery)("2456312558").site.pathPrefix,E=x?i.pathname.replace(x,""):i.pathname,k=m?E.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",Q=j||v;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:Q,pageTitle:h,pageDescription:y,pageKeywords:N,titleType:b},Object(u.b)(p,{title:n?Object(u.b)(n,null):h,label:"label",tabs:m,theme:Q}),m&&Object(u.b)(O,{title:h,slug:E,tabs:m,currentTab:k}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:c}),Object(u.b)(M,{date:I})),Object(u.b)(f.a,{pageContext:t,location:i,slug:E,tabs:m,currentTab:k}),Object(u.b)(A.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},d6tX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return A})),a.d(t,"default",(function(){return b}));var i,n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),A=(a("T0C+"),a("qKvR"),{}),l=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={_frontmatter:A},c=s.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"PageDescription"}),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"Introduction")),Object(o.b)("p",null,"As a federated user that uses a corporate or enterprise single sign-on ID, you can log in to IBM Cloud® from the command-line interface (CLI) by using either a one-time passcode or an API key."),Object(o.b)("p",null,"IBMid has added support for IBM customers and partners to incorporate IBMid authentication to their organizations identity provider.  This allows the organizations identity provider to handle all the users leveraging IBM web applications and cloud services.  As a result, Company X can use their own login page and security controls to secure  access to IBM Cloud Apps or IBM Services.  "),Object(o.b)("p",null,"IBM leverages the Security Assertion Markup Language 2.0 (SAML 2.0) for this capability.  SAML 2.0 is a standard version for exchanging authentication data between security domains.  It is an XML-based protocol that uses a security token containing assertions to pass information between the organizations “Identity Provider”, and the IBM Rely Party (RP) - otherwise known as the Service Provider."),Object(o.b)("p",null,"This section is intended to detail the steps required to onboard an IBM customer or partner to this new service, how they will perform ongoing lifecycle maintenance of such an arrangement, and how they will receive support for any issues that may arise with this federation setup. "),Object(o.b)("p",null,"To begin this process, please send an email to:  ",Object(o.b)("a",{parentName:"p",href:"mailto:ibmidfd@us.ibm.com"},"ibmidfd@us.ibm.com")," and state that you’d like to federate your Company IdP with IBMId.  They will take it from there. "),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"User experience")),Object(o.b)("p",null,"After an enterprise has federated with IBM, the user experience will be as follows:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"401px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAMCAQX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAH2+VmUTFMBsH//xAAZEAEAAwEBAAAAAAAAAAAAAAABABAhMUH/2gAIAQEAAQUCDTtOwGvZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEhMDL/2gAIAQEABj8ClmqP/8QAHRABAAEDBQAAAAAAAAAAAAAAAQAQITERQVGBkf/aAAgBAQABPyFRPRA3YcQxQITSANvaFoMT/9oADAMBAAIAAwAAABATDzz/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhMRBhcaHR/9oACAEBAAE/EOFJeKZMcpx3Hf5lQ5G0w3AvvT59nhLVW87o+N//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud or Services",title:"IBM Cloud or Services",src:"/ibm-enterprise-runbooks/static/440b506d97b7d0cc4317d15e28c56810/14d0c/signon.jpg",srcSet:["/ibm-enterprise-runbooks/static/440b506d97b7d0cc4317d15e28c56810/69549/signon.jpg 288w","/ibm-enterprise-runbooks/static/440b506d97b7d0cc4317d15e28c56810/14d0c/signon.jpg 401w"],sizes:"(max-width: 401px) 100vw, 401px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"A user (joe.CompanyX.com) opens an IBM Cloud application and must authenticate via the IBMid sign in page."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Old Sign in to IBM page")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"600px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAd4EBeX/xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIQE//aAAgBAQABBQKtYs//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARL/2gAIAQMBAT8Bbr//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARP/2gAIAQIBAT8BZx//xAAWEAADAAAAAAAAAAAAAAAAAAAAEDH/2gAIAQEABj8CVP/EABkQAQEAAwEAAAAAAAAAAAAAAAEAESExkf/aAAgBAQABPyElxuOZeX//2gAMAwEAAgADAAAAEHvv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EKmD/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAECAQE/EDZNv//EABkQAQEBAAMAAAAAAAAAAAAAAAERACFBUf/aAAgBAQABPxAp1LitPAXELBfW/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Old Sign",title:"IBM Cloud Old Sign",src:"/ibm-enterprise-runbooks/static/ee98dbcd29bd9c10d8ea4ede70bd9c3a/f6133/oldsign.jpg",srcSet:["/ibm-enterprise-runbooks/static/ee98dbcd29bd9c10d8ea4ede70bd9c3a/69549/oldsign.jpg 288w","/ibm-enterprise-runbooks/static/ee98dbcd29bd9c10d8ea4ede70bd9c3a/473e3/oldsign.jpg 576w","/ibm-enterprise-runbooks/static/ee98dbcd29bd9c10d8ea4ede70bd9c3a/f6133/oldsign.jpg 600w"],sizes:"(max-width: 600px) 100vw, 600px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Federated users used to click on “Log in with your company credential (SSO)” ."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"New Sign in to IBM page")),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"572px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.8611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVQ4y5WUPY/TMBjHO8F0Cx+Bz8DMDSx8AFZWkJCY2RhuAiGxMTHyAZgZWdgr3YCEmtDqmrRHsJOzYyfxy5/H8VHSpr0rln7yk8T++3Gel4kxBmF470eEb9baWwnrnHMQQmBSco40STBfLJDnOVarHNPpFAt6/t+hlMKk0RqMMZRVhbqWkFKA0yGa3g89J2vE8DYbwbAxGPuH31iOTKk9BMGlh279zoHXgoxXWOZrqKZDaxyazva0PS5C73VrseIWObO4KCyYcPsFax2FDLnQ0byF/YchnHe0ORIO3SvYe2JIjL5HfMREz3rBnYN6B+wBD23XoFUVlGCQFSO7hJAdVHt7VP8KbQlyYTBbtfiRaSS5xvyyQXppkf6iBd04mruRHXn4+rPDnWfA/VfAvZfA3efAyQtg8tTj07coaOxh0ZHgx68OD98ATz54PH7vcfrW49E7jwdnwJfzeLXwu/wRV+8FKcNuyMHtpD7kXSi7QWI3kDUlN81Ktz210hDKUGA8pYfDlaI0aY8UlFKiLEuEmmZEsDlnqCjSxRWoKoA1D1VyZC13XTfoHG6Ave421ElsnMPzITbdJssyJNRt0nSGRfYbybLGz0xgtpT4PpdILiRmxHIdG0fYtI9w06Io8Ad8X9SI7Q/2jQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Old Sign",title:"IBM Cloud Old Sign",src:"/ibm-enterprise-runbooks/static/de961d60d934ed3e23fc13b98f7cd050/e2ccf/newsign.png",srcSet:["/ibm-enterprise-runbooks/static/de961d60d934ed3e23fc13b98f7cd050/7fc1e/newsign.png 288w","/ibm-enterprise-runbooks/static/de961d60d934ed3e23fc13b98f7cd050/e2ccf/newsign.png 572w"],sizes:"(max-width: 572px) 100vw, 572px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"Federated users, they enter their email address and click continue, at that point a lookup is made in the background of IBMid to verify if the email address/domain is associated with the users organization.\nThe user is then redirected to their organizations sign in experience. "),Object(o.b)("p",null,"After authenticating successfully via the steps required by their organization, the user is returned back to IBMid with a “SAML assertion” attached.   The IBMid system uses the email address in the “SAML assertion” to match them to an existing IBMid. Additionally, if an existing IBMid is not found then IBMid autoprovisions a new IBMid for the organizational user based on the username information provided by the organization in the SAML assertion.  Once this has been completed they are returned  to the originally requested IBM cloud service as a fully recognized and authenticated IBMid user.  \nRemember me function is available and it will remember its user IBMid after click Continue. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IBMid re-authentication for federated users:"),"\nFederated users will not be automatically re-authenticated to IBMid via failover cookie after their sessions expire (default timeout is 30 minutes of inactivity and 1 hour total). Many federating companies have requested this feature to force a more frequent authentication. Once the IBM application or IBMid session time out occurs, any further authentication will be redirected back to your IdP for re-authentication. Whether user is required to authenticate with your IdP again is controlled by your IdP’s session lifetime settings. "),Object(o.b)("p",null,"If ‘remember me’ is enabled for the user, and your IdP has a longer lifetime than IBMid, user may not notice re-authentication to IBMid happening. Otherwise, user will have to re-authenticate with your IdP again. "),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"On-boarding - overall steps")),Object(o.b)("p",null,"This process flow begins after an agreement has been made. "),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"686px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"145.13888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAQACAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB9nPRSmXKoTH/xAAcEAABAwUAAAAAAAAAAAAAAAABAAISEBEgIUH/2gAIAQEAAQUCk5CTUCV00vs4/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAADAQEBAAAAAAAAAAAAAAAAATGRITD/2gAIAQEABj8Ci0i06il8P//EAB0QAAICAgMBAAAAAAAAAAAAAAABETEhcRBBkfH/2gAIAQEAAT8hckHbM2bEHAtMb+A+gqHCEvwrbR0RmyeP/9oADAMBAAIAAwAAABAsyTD/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAwEBPxAj/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8QY//EAB4QAQADAAIDAQEAAAAAAAAAAAEAESFBYTFRkaHB/9oACAEBAAE/ED26+Lp/IFqmhXOvETZa81z5KwYrjf7GAr4XFYbvv3DBA+ixHQ5vBcNG33FIRgcFbDpFtn//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IBM Cloud Old Sign",title:"IBM Cloud Old Sign",src:"/ibm-enterprise-runbooks/static/93a1925d5a75fa9a2b6f050636bf542d/3237b/customeribm.jpg",srcSet:["/ibm-enterprise-runbooks/static/93a1925d5a75fa9a2b6f050636bf542d/69549/customeribm.jpg 288w","/ibm-enterprise-runbooks/static/93a1925d5a75fa9a2b6f050636bf542d/473e3/customeribm.jpg 576w","/ibm-enterprise-runbooks/static/93a1925d5a75fa9a2b6f050636bf542d/3237b/customeribm.jpg 686w"],sizes:"(max-width: 686px) 100vw, 686px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5(*) in above picture")," you can choose to federate a few sets of users for testing and later convert the entire domain."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This is a straightforward boarding flow, and an interaction back and forth among steps 5 to 10 may happen."),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"On-boarding - basic requirements")),Object(o.b)("p",null,"For an organization to be able to onboard the enterprise federation service associated with IBMid, they must have an IBM employee as a business sponsor that can confirm and own the IBM relationship with the customer/partner. \nAdditionally, an organization must have an organizational “identity provider” which its users can be directed to by the IBMid system to authenticate through, and which supports the following baseline technical requirements:"),Object(o.b)("p",null,"The organizational Identity Provider must support SAML 2.0, and be able to support signed SAML assertions.\nWhile Identity Provider initiated flows are allowed and supported, Service Provider initiated flows are highly preferred for the most optimal user experience.\nThe SAML “Nameid” returned by the organizations identity provider must be set to equal the valid email address for the organizational users email address and format:emailAddress\nThe following SAML Attributes must be provided in the SAML assertion, with these exact attribute names: firstName, lastName, country and emailAddress and these attributes must have NameFormat. These required SAML attributes will be mapped to OpenID Connect standard claim per OIDC specification, see table below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"SAML Assertion attribute"),Object(o.b)("th",{parentName:"tr",align:null},"Comments"),Object(o.b)("th",{parentName:"tr",align:null},"OIDC ID Token Claim"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"* emailAddress"),Object(o.b)("td",{parentName:"tr",align:null},"- required. Length 80"),Object(o.b)("td",{parentName:"tr",align:null},"email")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"* lastName "),Object(o.b)("td",{parentName:"tr",align:null},"- required. Length 35"),Object(o.b)("td",{parentName:"tr",align:null},"family_name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"* firstName"),Object(o.b)("td",{parentName:"tr",align:null},"- required. Length 35"),Object(o.b)("td",{parentName:"tr",align:null},"given_name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"* country "),Object(o.b)("td",{parentName:"tr",align:null},"- required. 2 CHARS"),Object(o.b)("td",{parentName:"tr",align:null},"address.country")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"country")," attribute can not be excluded, and it must be always a required value. IBM operates globally and we must comply with laws around embargo’s countries. This is one of our ways to be on compliance. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Regexp for email validation"),"\nmust match regExp  ”^[A-Za-z0-9!#=/%","\\","&",Object(o.b)("em",{parentName:"p"},"`{}~","\\","-.$?|","\\","^","\\","[\\]","+\\”’]+@[A-Za-z0-9!#=/%","\\","&"),Object(o.b)("inlineCode",{parentName:"p"},"{}~\\\\-$?|\\\\^\\\\[\\\\]+\\\"']+(\\\\.[A-Za-z0-9!#=/%\\\\&_"),"{}~","\\","-$?|","\\","^","\\","[\\]","+\\”’]+)+$”\nmust not match failRegExp  ”(?i).*","\\",".(cu|ir|sd|sy)$” "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The organizational Identity Provider must provide a metadata file which includes both signing and encryption certificates, if encryption certificate is missing we need to manually duplicate it from the signing cert, even if encryption is not going to be performed, and a copy of the signing certificate can be used for that purpose. Also the ‘OrganizationDisplayName’ will be used as ‘Company’ attribute for the user, it must be set properly. (see 5.3 below)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Any other attributes provided by the organization in the SAML assertion will be sent through to the end IBM cloud service being used by the user, but will not be persisted in the IBMid system in any way.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The following attributes “uid” and “groupid” will be ignored and removed from SAML assertion, please make sure your IdP does not use them. These attribute are not case sensitive.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The federation will be first enable in IBM Pre-Production environment. Once the federation is working fine in Pre-Production it will move to IBM Production environment.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Production time window change :\nProduction environment is updated twice a week (Tuesday and Friday at 6am EST). In case of Identity Provider signing certificate change/update, please provide the new certificate along with IdP metadata file at least 1 week prior it expiration.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"CRL (Certificate Revocation List). In case your signing certificate has CRL, the url must be public so IBM server can reach them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"CA issue certificates are required to have CRL (Certificate Revocation List)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Self Signed certificate can not have Basic Constraints set to CA type.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"CRL validation :\nAs part of IBM security standards we have a CRL (Certificate Revocation List) validation procedure running each 30 minutes. "),Object(o.b)("p",{parentName:"li"},"When a Federation certificate is revoked, that certificate is considered as untrustworthy by the Certificate Authority. Continue to allow your federation login with revoked certificate is a security risk. "),Object(o.b)("p",{parentName:"li"},"In case we receive its failure 4 consecutive times ( in a period of 2 hours) we will send you an alert notification about your CRL validation fail, in order to keep you aware that may be an issue with your current signing certificate CRL."),Object(o.b)("p",{parentName:"li"},"In case this issue continue for 12 hours, we will send you a second notification about this failure and your IdP can check if there is an issue with your signing certificate related to CRL."),Object(o.b)("p",{parentName:"li"},"You can check if your signing certificate was revoked or even added by mistake. As you own your signing certificate, you can:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Option A")," : Request IBM to disable your federation and this will impact all federated users preventing them to authenticate with your own company credentials when accessing any IBM product ."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"option B")," : You can decide to keep the way it is and assume the risk of using a signing certificate that has a CRL validation failure. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"option C")," : You can also keep using the current Signing certificate with CRL validation failure while providing a new certificate. Please send us the new certificate at least 5 business day before you deploy it in our IdP environment, so IBM can update your federation and not cause any outage or issue for your federated users.")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"NOTE:")," IBMid does not support userid or username change. In this case the federating organization must create a new IBMid account (auto-provision or manually registration) to match the organization email domain."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Add new signing CA issued certificate prior expiration of current one:\nIBMid Enterprise Federation send an email to the company contacts that we have in our list,  about 60 days prior their  Identity Provider  Certificate will expire. After this email we can exchange some information to coordinate the Signing certificate change.\nTo handle the Identity provider Certificate change, once you receive the notification about the expiration of the Signing Certificate, please send an email to IBMid Enterprise Federation team: ",Object(o.b)("a",{parentName:"p",href:"mailto:ibmidfd@us.ibm.com"},"ibmidfd@us.ibm.com"),"\nCheck with your Identity Provider team if they could send us the certificate in advance, so we can validate the cert to be added as secondary. In this case, we will have both certificates in place as primary and secondary. \nIn case is not possible to add the new certificate as secondary, we may need to receive the certificate and apply the change in the exact date and time when the Identity Provider will change it in their side. IBM Enterprise Federation team needs to receive the certificate 5 days in advance if possible. "),Object(o.b)("p",{parentName:"li"},"*IBM can add a second signing certificate and it is required its Subject DN matches the current one. In case the new certificate has a different Subject DN, we have to replace the old one by new one."))),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"On-boarding - detailed information required")),Object(o.b)("h4",null,Object(o.b)("strong",{parentName:"h4"},"Email domains to be associated with federation:")),Object(o.b)("p",null,"The organization adopting IBMid enterprise federation must provide a list of all email domains which organizational users may come to IBMid with.   "),Object(o.b)("h4",null,Object(o.b)("strong",{parentName:"h4"},"Changes (as needed) to pre-existing IBMid users:")),Object(o.b)("p",null,"IBM will use the email domains provided in above section to give the onboarding organization a list of users in the provided domains that may already exist in the IBMid system.  The enterprise must then analyze this list of pre-existing IBMid users, and determine how to handle any pre-existing IBMid users.  Typically one of 4 choices will need to be made for each pre-existing user:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Convert")," - If the pre-existing IBMid is still a valid organizational employee, then typically the organization will want IBM to convert the existing ID so that it will require federated authentication to be used.  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Delete")," - If the pre-existing IBMid no longer matches a valid organizational employee, then IBM can delete the IBMid so that there are no IBMid users impersonating members of the organization that is onboarding. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Leave")," - Keep the original IBMid as is, as an unfederated IBMid user (the typical example of why this may be requested is to keep a few organizationals admins with access to IBMid service in a non federated fashion, so that they can test/verify that federation is/is not working at some point in time)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Modify")," - If any of the attributes of the pre-existing user ID need to change (email, name, country, etc) to align with the current organizations values, then the IBMid can be modified to align at time of on-boarding. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," There are older IBMids where the “username” does not equal an email address, but the contact email associated with the ID may still match the organizational email domain.  In such a case the federating organization may ask iBM to modify the IBMid username to match the email address, so that the ID can be used in a federated fashion.   This would come with a potentially negative impact that some IBM cloud apps use the email address as identifier for the user - and thus changing the username may affect the access rights of the IBMid."),Object(o.b)("h4",null,Object(o.b)("strong",{parentName:"h4"},"Organization name to be displayed to user during authentication")),Object(o.b)("p",null,"The IBMid interface, when seeing a federated user, informs the user that they are going to be sent to their organization to authenticate.  This user experience/sample login screen is shown in section 2 above in this document.   The organization must give IBM a name that is used to display to the user, which must be limited to 30 characters.  \nThe name that will be used must be supplied in the IDP SAML metadata provided by the federating organization to IBM, within the organization section.  The “OrganizationDisplayName” is what must contain the maximum 30 character name that the organization wishes to be displayed to users, as well as the organization name that will be saved into the users IBMid record.  "),Object(o.b)("p",null," \n",Object(o.b)("strong",{parentName:"p"},"Example:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'<md:Organization>\n<md:OrganizationName xml:lang="en">IBM</md:OrganizationName>\n<md:OrganizationDisplayName xml:lang="en">IBM w3id</md:OrganizationDisplayName>\n<md:OrganizationURL xml:lang="en"/>\n</md:Organization>\n')),Object(o.b)("p",null,"OrganizationDisplayName must exist in SAML metadata, and it must be less than 30 characters. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NOTE:")," This “organization” section in SAML metadata is part of the SAML industry spec for metadata, but is considered optional.  As such it may have to be manually added to the metadata that is generated by the organizations IDP.  "),Object(o.b)("h4",null,Object(o.b)("strong",{parentName:"h4"},"The organizations’s Identity Provider (IdP) metadata:")),Object(o.b)("p",null,"The organization must then provide IBM with the SAML metadata for its organization identity provider.   This can be provided either via a URL to download the metadata, or sent in XML file format directly to IBMid federation on-boarding contact. \nOnce the federating organization provides its SAML metadata, and the email domain information required above, IBM will respond with IBMid service provider SAML metadata."),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"On-going - Support")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Organizational admins whom wish to perform one of the lifecycle management activities described in Section 6 of this document should contact: ",Object(o.b)("a",{parentName:"li",href:"mailto:ibmidfd@us.ibm.com"},"ibmidfd@us.ibm.com")),Object(o.b)("li",{parentName:"ul"},"Organizational admins whom believe there is a systematic issue (e.g. outage) with the organizational federation setup with IBMid should contact IBMid operations team via email.   The email address to open a ticket is:  ",Object(o.b)("a",{parentName:"li",href:"mailto:security_sso_operations@wwpdl.vnet.ibm.com"},"security_sso_operations@wwpdl.vnet.ibm.com"),"   This email address is monitored 24x7. "),Object(o.b)("li",{parentName:"ul"},"End users experiencing issues with their ID, including a federated IBMid, should contact normal IBMid support at: ",Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/account/profile/us?page=reghelpdesk"},"https://www.ibm.com/account/profile/us?page=reghelpdesk"))),Object(o.b)("h2",null,Object(o.b)("strong",{parentName:"h2"},"General Errors")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error message:")," Contact your company administrator"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"How to troubleshoot: Ask the user to send its SAML response assertion.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"How to fix the problem:\nCheck the NameId and emailAddress value being sent by IdP (Identity Provider), probably it is sending an email address that is not listed in federation domain. \nIn case the email address is correct, then contact IBMid Federation team and request to add this user or email domain to federation."))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Error message:")," Token exchange failed. The given SAML assertion is not valid yet."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Why this error happen? This is an know issue between TFIM and ADFS. ADFS send its SAML assertion by millisecond and TFIM (IBM) check it by second, so this may cause an failure in case their internet connection is faster than usual.\n"),Object(o.b)("li",{parentName:"ul"},"How to fix the problem:\n1) Make sure your ADFS/IdP server has the correct clock time.\n2) This is a work around and will allow this particular user to access after see this error right away.\nAsk the user to press F5 in the Browser and you will see it will allow the user to proceed its authentication.\n3) In case of ADFS, you will have to add “skew” parameter, so add a range validation time of its SAML response assertion.")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-iam-federated-signon-ad-index-mdx-1429fbfaa61c4c90688f.js.map