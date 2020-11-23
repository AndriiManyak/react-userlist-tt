(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{35:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(17),i=n.n(a),u=(n(35),n(10)),j=n(8),o=(n(40),n(3)),l=(n(41),function(){return Object(c.jsx)("header",{className:"Header",children:Object(c.jsxs)("nav",{children:[Object(c.jsx)(u.b,{to:"/",exact:!0,activeClassName:"Header--active",children:"Home"}),Object(c.jsx)(u.b,{to:"/users",activeClassName:"Header--active",children:"Users"})]})})}),b=n(11),d=n.n(b),h=n(19),O=n(12),x=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jsonbin.io/b/5fb68f0f02f80c2af522bc69");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=n(14),m=n(29),p=n(16),v={users:[]},g="users/SAVE",P=function(e){return{type:g,users:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object(p.a)(Object(p.a)({},e),{},{users:Object(m.a)(t.users)}):e};function _(e){return e.usersState.users}var k=Object(f.b)({usersState:N}),C=Object(f.c)(k),S=function(e){var t=e.text,n=e.handleClick,r=e.isDisabled;return Object(c.jsx)("li",{className:"Pagination__item",children:Object(c.jsx)("button",{type:"button",className:"Pagination__button",onClick:n,disabled:r,children:t})})},w=n(28),y=n.n(w),U=function(e){var t=e.pageNumber,n=e.isActive,r=e.handleClick;return Object(c.jsx)("li",{className:"Pagination__item",children:Object(c.jsx)("button",{type:"button",className:y()({Pagination__button:!0},{"Pagination__button--active":n}),onClick:function(){return r(t)},children:t})})},A=(n(44),s.a.memo((function(e){for(var t=e.totalElements,n=e.elementsPerPage,r=e.currentPage,s=e.changePage,a=e.selectNextPage,i=e.selectPreviousPage,u=Math.ceil(t/n),j=[],o=1;o<=u;o+=1)j.push(o);return Object(c.jsx)("nav",{className:"Pagination",children:Object(c.jsxs)("ul",{className:"Pagination__list",children:[Object(c.jsx)(S,{text:"Previous",handleClick:i,isDisabled:1===r}),j.map((function(e){return Object(c.jsx)(U,{pageNumber:e,handleClick:s,isActive:e===r},e)})),Object(c.jsx)(S,{text:"Next",handleClick:a,isDisabled:r===u})]})})}))),E=function(e){var t,n=e.randomIndex,r=Object(j.c)((t=n,function(e){return _(e)[t]}));return Object(c.jsx)("h2",{children:"".concat(r.name," ").concat(r.surname)})},I=(n(45),function(e){var t=e.name,n=e.surname,r=e.desc;return Object(c.jsxs)("div",{className:"User",children:[Object(c.jsx)("h3",{className:"User__name",children:"".concat(t," ").concat(n)}),Object(c.jsx)("p",{className:"User__description",children:r})]})}),H=s.a.memo((function(e){var t=e.currentPage,n=e.usersPerPage,r=Object(j.c)(function(e,t){return function(n){var c=e*t,r=c-t;return _(n).slice(r,c)}}(t,n));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(I,Object(p.a)({},e))},e.id)}))})})})),M=(n(46),function(){var e=Object(j.c)(_),t=Object(j.b)(),n=Object(r.useState)(0),s=Object(O.a)(n,2),a=s[0],i=s[1],u=Object(r.useState)(1),o=Object(O.a)(u,2),l=o[0],b=o[1],f=Object(r.useState)(5),m=Object(O.a)(f,1)[0],p=Object(r.useState)(!1),v=Object(O.a)(p,2),g=v[0],N=v[1],k=Object(r.useState)(!1),C=Object(O.a)(k,2),S=C[0],w=C[1];Object(r.useEffect)((function(){y();var e=setInterval((function(){i(U(0,19))}),8e3);return function(){clearInterval(e)}}),[]);var y=function(){var e=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,x();case 4:n=e.sent,t(P(n.users)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),w(!0);case 11:N(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(e,t){return Math.floor(Math.random()*(e-t+1))+t},I=Object(r.useCallback)((function(e){b(e)}),[]),M=Object(r.useCallback)((function(){b((function(e){return e+1}))}),[]),D=Object(r.useCallback)((function(){b((function(e){return e-1}))}),[]);return Object(c.jsxs)("div",{className:"Users",children:[g&&Object(c.jsx)("h2",{children:"...Loading"}),S&&!e&&Object(c.jsx)("h3",{className:"Users__error",children:"An error occured when loading users"}),e.length>0&&!g&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Users__list",children:[Object(c.jsx)(H,{currentPage:l,usersPerPage:m}),Object(c.jsx)(A,{totalElements:e.length,elementsPerPage:m,currentPage:l,changePage:I,selectNextPage:M,selectPreviousPage:D})]}),Object(c.jsx)("div",{children:Object(c.jsx)(E,{randomIndex:a})})]})]})}),D=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{}),Object(c.jsx)("div",{className:"App__content",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/users",children:Object(c.jsx)(M,{})}),Object(c.jsx)(o.a,{path:"/",children:Object(c.jsx)("h3",{children:"This is home page. To see list of users go to users page"})})]})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(j.a,{store:C,children:Object(c.jsx)(u.a,{children:Object(c.jsx)(D,{})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d5fd2f0c.chunk.js.map