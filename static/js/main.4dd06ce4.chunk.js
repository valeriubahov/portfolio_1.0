(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e,n,t){e.exports=t(87)},46:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(32),o=t.n(l),c=(t(46),t(39)),i=t(14),u=t(13),m=t(15),s=t(2),d=t(3);function p(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return p=function(){return e},e}var f=Object(d.a)(m.SideNav)(p()),E=[{name:"About me",path:"/"},{name:"Experience",path:"/work"},{name:"Projects",path:"/projects"},{name:"Eduction",path:"/education"}],b=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,E.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(8);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return w=function(){return e},e}var y=d.a.div(w(),(function(e){return e.isHome?"flex":"none"})),O=d.a.div(j()),x=d.a.img(g()),k=d.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(y,{isHome:"/"===t.pathname},r.a.createElement(O,null,r.a.createElement(x,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Location ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a Software Developer"),r.a.createElement("p",null,n.basics.headline))),r.a.createElement("div",null,r.a.createElement(k,{href:"https://drive.google.com/open?id=1959FAnB_5RAOQFvMSWlw6YZ5jl3GtRVP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.ArrowRight16,null))))},P=t(37),S=t.n(P);function A(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return A=function(){return e},e}function D(){var e=Object(s.a)(["\n  width: 25%;\n"]);return D=function(){return e},e}function F(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return F=function(){return e},e}function N(){var e=Object(s.a)(["\n  height: 48px;\n"]);return N=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return R=function(){return e},e}var _=d.a.div(R()),z=d.a.div(N()),B=d.a.div(F()),C=Object(d.a)(i.b)(D()),H=Object(d.a)(S.a)(A()),W=function(){return r.a.createElement(_,null,r.a.createElement(z,null),r.a.createElement(B,null,r.a.createElement(C,{to:"/"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:v.User32,iconDescription:"About me",tooltipPosition:"bottom"})),r.a.createElement(C,{to:"/work"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:v.Portfolio32,iconDescription:"Experience",tooltipPosition:"bottom"})),r.a.createElement(C,{to:"/projects"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:v.Code32,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(C,{to:"/education"},r.a.createElement(H,{hasIconOnly:!0,renderIcon:v.Education32,iconDescription:"Education",tooltipPosition:"bottom"}))))};function J(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return J=function(){return e},e}var L=Object(d.a)(m.Content)(J()),M=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(b,null),r.a.createElement(L,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},V=t(10);function G(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return G=function(){return e},e}function Q(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return Q=function(){return e},e}function T(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return T=function(){return e},e}var U=d.a.h3(T()),Y=d.a.p(Q()),Z=d.a.span(G(),V.a[20],V.a[70],V.a[70]);function $(){var e=Object(s.a)(["\noverflow-x: scroll;\noverflow-y: hidden;\nwhite-space: nowrap;\nposition: relative;\n"]);return $=function(){return e},e}function q(){var e=Object(s.a)(["\nmargin-right: 0.5rem;\nmargin-bottom: 0.5rem;\nwidth:10%;\ndisplay: inline-block;\nposition: relative;\n"]);return q=function(){return e},e}function K(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return K=function(){return e},e}var X=d.a.li(K()),ee=d.a.div(q()),ne=d.a.div($()),te=t(38),ae=(t(86),function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"About Me"),r.a.createElement(Y,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(U,null,"Skills"),r.a.createElement(ne,null,n.skills.map((function(e,n){return r.a.createElement(ee,{key:n},r.a.createElement(te.a,{value:20*e.rating},r.a.createElement("div",{style:{fontSize:10}},r.a.createElement(Z,{key:e.name},20*e.rating,"% ",e.name))))})))),r.a.createElement("div",null,r.a.createElement(U,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(X,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))}),re=t(27);function le(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return le=function(){return e},e}function oe(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return oe=function(){return e},e}function ce(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ce=function(){return e},e}var ie=d.a.li(ce(),V.b),ue=d.a.h4(oe()),me=d.a.div(le()),se=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(ie,{key:n},r.a.createElement(ue,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(me,null,[].concat(Object(re.a)(e.languages),Object(re.a)(e.libraries)).map((function(e,n){return r.a.createElement(Z,{key:n},e)}))))})))))};function de(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return de=function(){return e},e}function pe(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return pe=function(){return e},e}function fe(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return fe=function(){return e},e}var Ee=d.a.li(fe(),V.b),be=d.a.h4(pe()),ve=d.a.p(de()),he=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Experience"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(Ee,{key:n},r.a.createElement(be,null,e.position),r.a.createElement("div",null,r.a.createElement(ve,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.month,"/",e.start.year," to  ",e.end.month,"/",e.end.year)),r.a.createElement(Y,null,e.summary))})))))};function ge(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ge=function(){return e},e}function je(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return je=function(){return e},e}function we(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return we=function(){return e},e}var ye=d.a.li(we(),V.b),Oe=d.a.h4(je()),xe=d.a.p(ge()),ke=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(ye,{key:n},r.a.createElement(Oe,null,e.position),r.a.createElement("div",null,r.a.createElement(xe,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Y,null,e.description.replace("\n\n","\n")))})))))},Ie=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(ae,{user:n})),r.a.createElement(u.a,{path:"/work"},r.a.createElement(he,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(se,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(ke,{user:n}))))};var Pe=function(){var e=Object(a.useState)(null),n=Object(c.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/valeriubahov").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(Ie,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.4dd06ce4.chunk.js.map