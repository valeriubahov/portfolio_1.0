(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,n,t){e.exports=t(85)},45:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(32),l=t.n(o),c=(t(45),t(38)),i=t(14),u=t(13),m=t(15),s=t(2),p=t(3);function d(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return d=function(){return e},e}var f=Object(p.a)(m.SideNav)(d()),E=[{name:"About me",path:"/portfolio"},{name:"Experience",path:"/work"},{name:"Projects",path:"/projects"},{name:"Eduction",path:"/education"}],b=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,E.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(8);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return O=function(){return e},e}var x=p.a.div(O(),(function(e){return e.isHome?"flex":"none"})),y=p.a.div(j()),w=p.a.img(g()),k=p.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(x,{isHome:"/portfolio"===t.pathname},r.a.createElement(y,null,r.a.createElement(w,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Location ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a Software Developer"),r.a.createElement("p",null,n.basics.headline))),r.a.createElement("div",null,r.a.createElement(k,{href:"https://drive.google.com/open?id=1959FAnB_5RAOQFvMSWlw6YZ5jl3GtRVP",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.ArrowRight16,null))))},P=t(37),S=t.n(P);function A(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return A=function(){return e},e}function D(){var e=Object(s.a)(["\n  width: 25%;\n"]);return D=function(){return e},e}function F(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return F=function(){return e},e}function N(){var e=Object(s.a)(["\n  height: 48px;\n"]);return N=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: none;\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return R=function(){return e},e}var _=p.a.div(R()),B=p.a.div(N()),C=p.a.div(F()),H=Object(p.a)(i.b)(D()),W=Object(p.a)(S.a)(A()),z=function(){return r.a.createElement(_,null,r.a.createElement(B,null),r.a.createElement(C,null,r.a.createElement(H,{to:"/portfolio"},r.a.createElement(W,{hasIconOnly:!0,renderIcon:v.User32,iconDescription:"About me",tooltipPosition:"bottom"})),r.a.createElement(H,{to:"/work"},r.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Portfolio32,iconDescription:"Experience",tooltipPosition:"bottom"})),r.a.createElement(H,{to:"/projects"},r.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Code32,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(H,{to:"/education"},r.a.createElement(W,{hasIconOnly:!0,renderIcon:v.Education32,iconDescription:"Education",tooltipPosition:"bottom"}))))};function J(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return J=function(){return e},e}var L=Object(p.a)(m.Content)(J()),M=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(b,null),r.a.createElement(L,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},V=t(10);function G(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return G=function(){return e},e}function Q(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return Q=function(){return e},e}function T(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return T=function(){return e},e}var U=p.a.h3(T()),Y=p.a.p(Q()),Z=p.a.span(G(),V.a[20],V.a[70],V.a[70]);function $(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return $=function(){return e},e}var q=p.a.li($()),K=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"About Me"),r.a.createElement(Y,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(U,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(Z,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(U,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(q,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},X=t(27);function ee(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return te=function(){return e},e}var ae=p.a.li(te(),V.b),re=p.a.h4(ne()),oe=p.a.div(ee()),le=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(ae,{key:n},r.a.createElement(re,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(oe,null,[].concat(Object(X.a)(e.languages),Object(X.a)(e.libraries)).map((function(e,n){return r.a.createElement(Z,{key:n},e)}))))})))))};function ce(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ce=function(){return e},e}function ie(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ie=function(){return e},e}function ue(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ue=function(){return e},e}var me=p.a.li(ue(),V.b),se=p.a.h4(ie()),pe=p.a.p(ce()),de=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Experience"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(me,{key:n},r.a.createElement(se,null,e.position),r.a.createElement("div",null,r.a.createElement(pe,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.month,"/",e.start.year," to  ",e.end.month,"/",e.end.year)),r.a.createElement(Y,null,e.summary))})))))};function fe(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return fe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return Ee=function(){return e},e}function be(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return be=function(){return e},e}var ve=p.a.li(be(),V.b),he=p.a.h4(Ee()),ge=p.a.p(fe()),je=function(e){var n=e.user;return r.a.createElement(M,{user:n},r.a.createElement("div",null,r.a.createElement(U,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(ve,{key:n},r.a.createElement(he,null,e.position),r.a.createElement("div",null,r.a.createElement(ge,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(Y,null,e.description.replace("\n\n","\n")))})))))},Oe=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/portfolio"},r.a.createElement(K,{user:n})),r.a.createElement(u.a,{path:"/work"},r.a.createElement(de,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(le,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(je,{user:n}))))};var xe=function(){var e=Object(a.useState)(null),n=Object(c.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/valeriubahov").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),t?r.a.createElement(Oe,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.c3bc38df.chunk.js.map