(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),i=t.n(a),n=t("NmYn"),s=t.n(n),o=t("Wbzz"),l=t("Xrax"),r=t("k4MR"),c=t("TSYQ"),b=t.n(c),d=t("QH2O"),p=t.n(d),g=t("qKvR"),m=function(A){var e,t=A.title,a=A.theme,i=A.tabs,n=void 0===i?[]:i;return Object(g.b)("div",{className:b()(p.a.pageHeader,(e={},e[p.a.withTabs]=n.length,e[p.a.darkMode]="dark"===a,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},t)))))},h=t("BAC9"),j=function(A){var e=A.relativePagePath,t=A.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||a,n=i.baseUrl,s=i.subDirectory,l=n+"/edit/"+i.branch+s+"/src/pages"+e;return n?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},E=t("FCXl"),u=t("dI71"),B=t("I8xM"),w=function(A){function e(){return A.apply(this,arguments)||this}return Object(u.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,a=A.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(A){var e,t=s()(A,{lower:!0,strict:!0}),n=t===i,l=new RegExp(i+"/?(#.*)?$"),r=a.replace(l,t);return Object(g.b)("li",{key:A,className:b()((e={},e[B.selectedItem]=n,e),B.listItem)},Object(g.b)(o.Link,{className:B.link,to:""+r},A))}));return Object(g.b)("div",{className:B.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:B.list},n))))))},e}(i.a.Component),Q=t("MjG9"),f=t("CzIb"),x=t("Asxa"),N=t("OIbQ"),y=t.n(N),Y=function(A){var e=A.date,t=new Date(e);return e?Object(g.b)(x.c,{className:y.a.row},Object(g.b)(x.a,null,Object(g.b)("div",{className:y.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,i=A.Title,n=e.frontmatter,c=void 0===n?{}:n,b=e.relativePagePath,d=e.titleType,p=c.tabs,h=c.title,u=c.theme,B=c.description,x=c.keywords,N=c.date,y=Object(f.a)().interiorTheme,O=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=O?a.pathname.replace(O,""):a.pathname,v=p?C.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",k=u||y;return Object(g.b)(r.a,{tabs:p,homepage:!1,theme:k,pageTitle:h,pageDescription:B,pageKeywords:x,titleType:d},Object(g.b)(m,{title:i?Object(g.b)(i,null):h,label:"label",tabs:p,theme:k}),p&&Object(g.b)(w,{title:h,slug:C,tabs:p,currentTab:v}),Object(g.b)(Q.a,{padded:!0},t,Object(g.b)(j,{relativePagePath:b}),Object(g.b)(Y,{date:N})),Object(g.b)(E.a,{pageContext:e,location:a,slug:C,tabs:p,currentTab:v}),Object(g.b)(l.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},"M/PL":function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return l})),t.d(e,"default",(function(){return d}));var a,i=t("wx14"),n=t("zLVn"),s=(t("q1tI"),t("7ljp")),o=t("013z"),l=(t("T0C+"),t("qKvR"),{}),r=(a="PageDescription",function(A){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",A)}),c={_frontmatter:l},b=o.a;function d(A){var e=A.components,t=Object(n.a)(A,["components"]);return Object(s.b)(b,Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)(r,{mdxType:"PageDescription"}),Object(s.b)("h1",null,"Reference Architecture"),Object(s.b)("p",null,Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB2mcSokX/xAAZEAACAwEAAAAAAAAAAAAAAAABEQACECL/2gAIAQEAAQUCRrOmLg6hP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAIBBQAAAAAAAAAAAAAAAAERACAhIkGh/9oACAEBAAY/AsemaUKIsVR//8QAGxABAQACAwEAAAAAAAAAAAAAAREAIRBBUXH/2gAIAQEAAT8hl1u60xYQXb3HbG595AsArXP/2gAMAwEAAgADAAAAEOwP/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Qh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/EKf/xAAdEAEBAAIBBQAAAAAAAAAAAAABEQAhEEFRYXGB/9oACAEBAAE/ENSVqkfmFZh1KD1gtQIXQlHXnHhHZCBK98//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/4da9e90a704325dd5180654dd168cded/2e753/Screenshot_4_lat.jpg",srcSet:["/gatsby/static/4da9e90a704325dd5180654dd168cded/69549/Screenshot_4_lat.jpg 288w","/gatsby/static/4da9e90a704325dd5180654dd168cded/473e3/Screenshot_4_lat.jpg 576w","/gatsby/static/4da9e90a704325dd5180654dd168cded/2e753/Screenshot_4_lat.jpg 1152w","/gatsby/static/4da9e90a704325dd5180654dd168cded/efc86/Screenshot_4_lat.jpg 1187w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(s.b)("p",null,"The current scenario discusses real-time replication between two computes, however this can be customized to work with multiple machines. The solution is tested on RHEL8 machine on IBM Cloud’s VPC based network."),Object(s.b)("p",null,"The private network can be either cloud-based network or on-prem data center network. Data can come from public Internet or generated by internal processes and stored on local disks or SAN volumes. This data can be replicated in real-time or scheduled for later replication depending on Individual requirements. The solution makes use of paramiko framework available in Python, the details of which are mentioned in below sections.  "),Object(s.b)("p",null,"The python replication service runs as systemd service on RHEL and starts automatically when OS is restarted. Any time data is loaded into landing zone, this service replicates it to other computes it is configured for. This service needs to be installed and confirmed on all participating peer machines for cross replication. This service will not replicate data which is currently downloading, in RHEL it has a ",Object(s.b)("strong",{parentName:"p"},".filepart")," extension and wait for it to completely download before action on it. The additional extensions (if any) can be added in the service code. "),Object(s.b)("p",null,"This also talks about performance measurement for data transfer between two machines."),Object(s.b)("h1",null,"Parmiko"),Object(s.b)("p",null,"Paramiko primarily supports POSIX platforms with standard OpenSSH implementations, and is most frequently tested on Linux and OS X. Windows is supported as well, though it may not be as straightforward. Details can be found in below git-hub link:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://github.com/paramiko/paramiko"},"https://github.com/paramiko/paramiko")),Object(s.b)("hr",null),Object(s.b)("h1",null,"Meeting the Pre-requisites"),Object(s.b)("p",null,"dnf install python3\npip3 install schedule",Object(s.b)("br",{parentName:"p"}),"\n","pip3 install setuptools-rust\npip3 install wheel\npip3 install PyNaCl\npip3 install bcrypt\ndnf install redhat-rpm-config gcc libffi-devel python3-devel openssl-devel cargo\npip3 install paramiko\npip install loguru "),Object(s.b)("h2",null,"Make Pre-requisite directories"),Object(s.b)("p",null,"mkdir /upload\nchmod 777 /upload\nmkdir /archive\nchmod 777 /archive "),Object(s.b)("h2",null,"Service Setup"),Object(s.b)("p",null,"a) Copy schedule_test_every_two_min.py in /opt or directory of your choice (make sure to modify service file in this case).\nb) Copy python-scheduler.service in /etc/systemd/system directory.\nc) Run systemctl daemon-reload\nd) Run systemd-analyze verify python-scheduler.service to ensure that file is correct. If it is correct it should not return any output.\ne) Run systemctl enable python-scheduler.service to enable service to start automatically on system restart.\nf) Run systemctl start python-scheduler.service\ng) Run systemctl status python-scheduler.service to check the status of service. "),Object(s.b)("h2",null,"SSH Session Timeout"),Object(s.b)("p",null,"The ClientAliveInterval parameter specifies the time in seconds that the server will wait before sending a null packet to the client system to keep the connection alive."),Object(s.b)("p",null,"On the other hand, the ClientAliveCountMax parameter defines the number of client alive messages which are sent without getting any messages from the client. If this limit is reached while the messages are being sent, the sshd daemon will drop the session, effectively terminating the ssh session."),Object(s.b)("p",null,"Timeout value = ClientAliveInterval * ClientAliveCountMax"),Object(s.b)("p",null,"Example:\nClientAliveInterval  1200\nClientAliveCountMax 3 "),Object(s.b)("p",null,"The Timeout value will be 1200 seconds * 3 = 3600 seconds.\nThis is an equivalent of 1 hour, which implies that your ssh session will remain alive for idle time of 1 hour without dropping."),Object(s.b)("p",null,"Alternatively, you can achieve the same result by specifying the ClientAliveInterval parameter alone."),Object(s.b)("p",null,"ClientAliveInterval  3600"),Object(s.b)("p",null,"Once done, reload the OpenSSH daemon for the changes to come into effect."),Object(s.b)("h2",null,"Performance Measurement"),Object(s.b)("p",null,"dnf install ",Object(s.b)("a",{parentName:"p",href:"https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm"},"https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm"),"\ndnf install nload\nnload -m\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"963px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABwQSD/8QAFhABAQEAAAAAAAAAAAAAAAAAAAFB/9oACAEBAAEFAqx//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABPyFP/9oADAMBAAIAAwAAABCDz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAAICAwAAAAAAAAAAAAAAAAABEWExkfD/2gAIAQEAAT8Qa9E8yTbP/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/2a12c47f66ab57ddac14cd45fab2d7ee/9fac0/Screenshot_1.jpg",srcSet:["/gatsby/static/2a12c47f66ab57ddac14cd45fab2d7ee/69549/Screenshot_1.jpg 288w","/gatsby/static/2a12c47f66ab57ddac14cd45fab2d7ee/473e3/Screenshot_1.jpg 576w","/gatsby/static/2a12c47f66ab57ddac14cd45fab2d7ee/9fac0/Screenshot_1.jpg 963w"],sizes:"(max-width: 963px) 100vw, 963px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("h1",null,"nload commands"),Object(s.b)("p",null,Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"472px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB1qCgf//EABYQAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAQABBQIi/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAABAx/9oACAEBAAY/Air/xAAYEAADAQEAAAAAAAAAAAAAAAAAASERcf/aAAgBAQABPyHa6dhRH//aAAwDAQACAAMAAAAQAA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAYEAEBAQEBAAAAAAAAAAAAAAABEQBBkf/aAAgBAQABPxASFe6sCBVnXf/Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/94d1530cbcf9b9aeb5c779f1ceef9412/9a0b6/Screenshot_2.jpg",srcSet:["/gatsby/static/94d1530cbcf9b9aeb5c779f1ceef9412/69549/Screenshot_2.jpg 288w","/gatsby/static/94d1530cbcf9b9aeb5c779f1ceef9412/9a0b6/Screenshot_2.jpg 472w"],sizes:"(max-width: 472px) 100vw, 472px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(s.b)("h1",null,"Where"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"985px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"26.73611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2gWD/8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAEBAAEFAoj/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAYEAACAwAAAAAAAAAAAAAAAAAAARAhMf/aAAgBAQABPyF64Sj/2gAMAwEAAgADAAAAEAPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAAIDAQAAAAAAAAAAAAAAAQARITFRcf/aAAgBAQABPxDDZvsKBxfqwktVc//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/b734b1063752d45415606850fddad016/49c7d/Screenshot_3.jpg",srcSet:["/gatsby/static/b734b1063752d45415606850fddad016/69549/Screenshot_3.jpg 288w","/gatsby/static/b734b1063752d45415606850fddad016/473e3/Screenshot_3.jpg 576w","/gatsby/static/b734b1063752d45415606850fddad016/49c7d/Screenshot_3.jpg 985w"],sizes:"(max-width: 985px) 100vw, 985px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("h1",null,"Example Scenario - File is externally uploaded to virtual server ftom WinSCP and this will is replicated to second virtual server through python code"),Object(s.b)("h1",null,"Step1 - Uploading File"),Object(s.b)("p",null,"After file transfer is started one can verify download speed as below\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAFRZg3FppA//8QAHBAAAQQDAQAAAAAAAAAAAAAAAgABAxEEEhMh/9oACAEBAAEFArTAZjwlWrXieR2v/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHBAAAgEFAQAAAAAAAAAAAAAAAAECEDEzQ3GR/9oACAEBAAY/AsrE4OTNnjLIl2n/xAAaEAEBAQEAAwAAAAAAAAAAAAABABFhIXHh/9oACAEBAAE/Ic/FjA540G6y9K5PCATd/9oADAMBAAIAAwAAABCwD//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhMVHwcf/aAAgBAQABPxDcXncdwoj1vBuA4fB7C2cTELDBVBKhAoUJ/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/2e753/Screenshot_1_lat.jpg",srcSet:["/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/69549/Screenshot_1_lat.jpg 288w","/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/473e3/Screenshot_1_lat.jpg 576w","/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/2e753/Screenshot_1_lat.jpg 1152w","/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/74f4b/Screenshot_1_lat.jpg 1728w","/gatsby/static/9bb02d03c0f46233f70d23fbbaa73197/351dc/Screenshot_1_lat.jpg 1753w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(s.b)("p",null,"One the upload is complete to first virtual server, python scheduler will replicate the data to second virtual server as shown below, one can not both outbound transfer rate on first server and inbound rate on second server  - "),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1004px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.90277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEFAgP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGO8spnMP/EABkQAAMBAQEAAAAAAAAAAAAAAAADEwISBP/aAAgBAQABBQKrSjTz73xZhVghm+f/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAQUBAAAAAAAAAAAAAAAAApEBETEyUTP/2gAIAQEABj8C3eTd5K3Zs9PRpN3krdmz0//EABsQAAICAwEAAAAAAAAAAAAAAAAB4fERIVFh/9oACAEBAAE/IbYKVDmSPpi1CnptS9D/2gAMAwEAAgADAAAAECPP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAAICAgMAAAAAAAAAAAAAAQARMfBBYSFR0f/aAAgBAQABPxD0aXcf5WN+ZSaGFxqiU4o6+0cUs6cxNwjLVcE//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/cc6d2a9917829042eb7b727d2cf4d3a0/5528f/Screenshot_2_lat.jpg",srcSet:["/gatsby/static/cc6d2a9917829042eb7b727d2cf4d3a0/69549/Screenshot_2_lat.jpg 288w","/gatsby/static/cc6d2a9917829042eb7b727d2cf4d3a0/473e3/Screenshot_2_lat.jpg 576w","/gatsby/static/cc6d2a9917829042eb7b727d2cf4d3a0/5528f/Screenshot_2_lat.jpg 1004w"],sizes:"(max-width: 1004px) 100vw, 1004px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"The schedule will not initiate transfer during downloading process "),Object(s.b)("p",null,Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"894px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB5UYUGRYP/8QAFxAAAwEAAAAAAAAAAAAAAAAAAAMTIP/aAAgBAQABBQKzSzS7Mf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABgQAAMBAQAAAAAAAAAAAAAAAAIzkQAg/9oACAEBAAY/AmFcwrmFeP/EABoQAAICAwAAAAAAAAAAAAAAAAABEEGR0fH/2gAIAQEAAT8hdGUNW0dWOf/aAAwDAQACAAMAAAAQkA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAACAwEBAAAAAAAAAAAAAAAAATFh8BCx/9oACAEBAAE/EEHAopTdY956RY+f/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/c6965d6bc87d032d119c38f3a769cace/0b910/Screenshot_3_lat.jpg",srcSet:["/gatsby/static/c6965d6bc87d032d119c38f3a769cace/69549/Screenshot_3_lat.jpg 288w","/gatsby/static/c6965d6bc87d032d119c38f3a769cace/473e3/Screenshot_3_lat.jpg 576w","/gatsby/static/c6965d6bc87d032d119c38f3a769cace/0b910/Screenshot_3_lat.jpg 894w"],sizes:"(max-width: 894px) 100vw, 894px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(s.b)("h1",null,"Running Scheduler as Systemd Service"),Object(s.b)("p",null,"Copy python-scheduler.service in /etc/systemd/system directory.\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1073px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABw4EB/8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEQ/9oACAEBAAEFAoj/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAYEAACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAQABPyHS3D//2gAMAwEAAgADAAAAEPPP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QFn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAZEAEAAwEBAAAAAAAAAAAAAAABABExQSH/2gAIAQEAAT8QsWhUUOReOb25/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Alt text",title:"Alt text",src:"/gatsby/static/a20dac86afe07936e323d15c24f1fd7d/ba935/Screenshot_5_lat.jpg",srcSet:["/gatsby/static/a20dac86afe07936e323d15c24f1fd7d/69549/Screenshot_5_lat.jpg 288w","/gatsby/static/a20dac86afe07936e323d15c24f1fd7d/473e3/Screenshot_5_lat.jpg 576w","/gatsby/static/a20dac86afe07936e323d15c24f1fd7d/ba935/Screenshot_5_lat.jpg 1073w"],sizes:"(max-width: 1073px) 100vw, 1073px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")," "),Object(s.b)("h3",null,"Note: Entry Environment=PYTHONUNBUFFERED=1 in systemd service file ensures that the logging is not buffered and is real time. The logging is generated in /var/log/messages file"),Object(s.b)("h2",null,"Reference:"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://cryptography.io/en/3.4.5/installation.html"},"https://cryptography.io/en/3.4.5/installation.html"),"\n",Object(s.b)("a",{parentName:"p",href:"http://www.paramiko.org/installing.html#cryptography"},"http://www.paramiko.org/installing.html#cryptography"),"\n",Object(s.b)("a",{parentName:"p",href:"https://www.programcreek.com/python/example/4561/paramiko.SSHClient"},"https://www.programcreek.com/python/example/4561/paramiko.SSHClient"),"\n",Object(s.b)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/how-to-test-the-network-speedthroughput-between-two-linux-servers/"},"https://www.cyberciti.biz/faq/how-to-test-the-network-speedthroughput-between-two-linux-servers/"),"\n",Object(s.b)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/linux-unix-test-internet-connection-download-upload-speed/"},"https://www.cyberciti.biz/faq/linux-unix-test-internet-connection-download-upload-speed/"),"\n",Object(s.b)("a",{parentName:"p",href:"https://phoenixnap.com/kb/linux-network-speed-test"},"https://phoenixnap.com/kb/linux-network-speed-test"),"\n",Object(s.b)("a",{parentName:"p",href:"https://www.cyberciti.biz/faq/linux-unix-test-internet-connection-download-upload-speed/"},"https://www.cyberciti.biz/faq/linux-unix-test-internet-connection-download-upload-speed/")," "))}d.isMDXComponent=!0},OIbQ:function(A,e,t){A.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-ibmcloud-replication-index-mdx-5b78f386fe8eb57f6d2f.js.map