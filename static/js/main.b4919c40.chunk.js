(this.webpackJsonpdudzic_portfolio=this.webpackJsonpdudzic_portfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){var n={"./0.jpg":13};function a(e){var t=s(e);return c(t)}function s(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=12},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.7684c6c6.jpg"},function(e,t,c){var n={"./0.png":15};function a(e){var t=s(e);return c(t)}function s(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=14},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.b9fb71ec.png"},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),r=c.n(s),i=c(2),l=c(0);var o=function(e){var t=e.navSelected,c=e.setNavSelected;return Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-muted",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(l.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(l.jsx)("li",{className:"nav-item ".concat("about"===t&&"active"),children:Object(l.jsx)("span",{className:"nav-link",onClick:function(){return c("about")},children:"About Me"})}),Object(l.jsx)("li",{className:"nav-item ".concat("portfolio"===t&&"active"),children:Object(l.jsx)("span",{className:"nav-link",onClick:function(){return c("portfolio")},children:"Portfolio"})}),Object(l.jsx)("li",{className:"nav-item ".concat("contact"===t&&"active"),children:Object(l.jsx)("span",{className:"nav-link",onClick:function(){return c("contact")},children:"Contact Me"})}),Object(l.jsx)("li",{className:"nav-item ".concat("resume"===t&&"active"),children:Object(l.jsx)("span",{className:"nav-link",onClick:function(){return c("resume")},children:"Resume"})})]})})]})})};var j=function(){return Object(l.jsxs)("section",{className:"mt-5",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("h1",{id:"about",children:"About me"})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col about-img pl-0",children:Object(l.jsx)("img",{src:"https://ca.slack-edge.com/T01EXTZCZ44-U01FG6JGREX-8aab55bc0e29-512",alt:""})}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)("p",{children:"I currently work as an electrical technican with cnc router tables, I aspire to create easy to use softwares to help increase efficency."}),Object(l.jsx)("p",{children:"I have enjoyed learning all the aspects of coding through the UOFT software bootcamp."}),Object(l.jsx)("p",{children:"I have a wonderful girlfriend who is patiently waiting for me to finish this project."})]})]})]})},d=c(3);var b=function(e){var t=e.onClose,n=e.currentPhoto,a=n.name,s=n.description,r=n.tools,i=n.website_1,o=n.website_2,j=n.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{class:"ml-4",children:Object(l.jsx)("h3",{children:a})}),Object(l.jsx)("div",{className:"ml-auto mr-4",children:Object(l.jsx)("i",{onClick:t,className:"fas fa-window-close close-btn"})})]}),Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("img",{src:c(12)("./".concat(j,".jpg")).default,alt:"current category"})}),Object(l.jsx)("div",{className:"row ml-3 mr-3 mt-2",children:Object(l.jsxs)("p",{children:[s," ",r]})}),Object(l.jsxs)("div",{className:"row justify-content-center",children:[Object(l.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:"btn btn-primary rounded-pill",children:"Visit site"}),Object(l.jsxs)("a",{href:o,target:"_blank",rel:"noreferrer",className:"btn btn-primary rounded-pill",children:["Visit ",Object(l.jsx)("i",{className:"fab fa-github"})," Repository"]})]})]})})},u=function(e){var t=e.category,a=Object(n.useState)([{name:"Screen Genius",description:"A website designed to help users find movies they may not have seen before.",tools:"Built with  HTML, Bulma CSS, JavaScript, The Movie Database API and the Utelly API.",website_1:"https://screen-genius.github.io/",website_2:"https://github.com/screen-genius/screen-genius.github.io"}]),s=Object(i.a)(a,1)[0],r=Object(n.useState)(),o=Object(i.a)(r,2),j=o[0],u=o[1],h=Object(n.useState)(),m=Object(i.a)(h,2),O=m[0],x=m[1],f=function(e,t){u(Object(d.a)(Object(d.a)({},e),{},{index:t})),x(!O)},v=s.filter((function(e){return e.category===t}));return Object(l.jsxs)("div",{children:[O&&Object(l.jsx)(b,{currentPhoto:j,onClose:f}),Object(l.jsx)("div",{className:"row",children:v.map((function(e,t){return Object(l.jsxs)("div",{className:"card border-left-0 border-top-0 border-right-0 text-center justify-content-center",children:[Object(l.jsx)("img",{src:c(14)("./".concat(t,".png")).default,alt:e.name,className:"thumbnail",onClick:function(){return f(e,t)}},e.name),Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsx)("button",{onClick:function(){return f(e,t)},className:"btn btn-info rounded-pill",children:"Learn More"})]})]})}))})]})};var h=function(){return Object(l.jsxs)("section",{className:"mt-5",children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)(u,{})]})},m=c(4);var O=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({name:"",email:"",message:""}),r=Object(i.a)(s,2),o=r[0],j=r[1],b=o.name,u=o.email,h=o.message;function O(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);a(t?"":"Your email is invalid.")}else e.target.value.length?a(""):a("".concat(e.target.name," is required"));c||j(Object(d.a)(Object(d.a)({},o),{},Object(m.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{className:"mt-5",children:[Object(l.jsx)("h1",{children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(o)},children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Name",defaultValue:b,onBlur:O})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"email",placeholder:"Email",defaultValue:u,onBlur:O})}),Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{name:"message",rows:"5",placeholder:"Message",defaultValue:h,onBlur:O})}),c&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"text-danger",children:c})}),Object(l.jsx)("button",{"data-testid":"subBtn",type:"submit",className:"btn btn-primary rounded-pill ml-2 mt-4",children:"Submit"})]})]})};function x(){return Object(l.jsxs)("section",{className:"mt-5",children:[Object(l.jsx)("h1",{children:"Resume"}),Object(l.jsx)("p",{children:Object(l.jsxs)("a",{href:"https://studzic.github.io/Profile-css/",className:"btn btn-info rounded-pill",children:[" Download my ",Object(l.jsx)("i",{class:"fas fa-file"})," resume"]})}),Object(l.jsx)("h2",{children:"Proficiencies"}),Object(l.jsx)("h3",{children:"Front End"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h3",{children:"Back End"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL, Sequelize"}),Object(l.jsx)("li",{children:"MongoDB, Mongoose"}),Object(l.jsx)("li",{children:"REST"}),Object(l.jsx)("li",{children:"Bootstrap"})]})]})}var f=function(){return Object(l.jsxs)("footer",{className:"bg-secondary text-center text-dark",children:[Object(l.jsx)("div",{className:"container p-3 pb-0",children:Object(l.jsxs)("section",{children:[Object(l.jsx)("a",{className:"btn btn-outline-dark btn-floating rounded-circle m-1 site-link",href:"https://www.linkedin.com/feed/",role:"button",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(l.jsx)("a",{className:"btn btn-outline-dark btn-floating rounded-circle m-1 site-link",href:"https://github.com/Studzic",role:"button",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("i",{className:"fab fa-github"})})]})}),Object(l.jsx)("div",{className:"bg-primary p-2 text-light",children:"\xa9 2021: Austin Dudzic"})]})};c(16);var v=function(){var e=Object(n.useState)("about"),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{navSelected:c,setNavSelected:a}),Object(l.jsxs)("main",{className:"container",children:["contact"===c&&Object(l.jsx)(O,{}),"portfolio"===c&&Object(l.jsx)(h,{}),"about"===c&&Object(l.jsx)(j,{}),"resume"===c&&Object(l.jsx)(x,{})]}),Object(l.jsx)(f,{})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b4919c40.chunk.js.map