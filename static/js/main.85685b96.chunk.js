(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{44:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(12),r=c.n(s),a=c(13),i=c(14),l=c(18),o=c(16),j=c(19),u=c(0);function d(e){return Object(u.jsx)("main",Object(j.a)({className:"wrapper"},e))}function h(){return Object(u.jsxs)("div",{className:"text-center text-white p-4 bg-dark",children:[Object(u.jsx)("h1",{children:"Employee Directory"}),Object(u.jsx)("h3",{children:"You can find your employee list here!"})]})}function m(e){var t=e.handleChange,c=Object(n.useRef)();return Object(u.jsx)("div",{className:"d-flex justify-content-center p-5",children:Object(u.jsx)("input",{type:"text",className:"form-control col-2",placeholder:"Search Employee Name",ref:c,onChange:function(){return t(c.current.value)}})})}var b=c(17);function p(){return Object(u.jsx)("img",{className:"sort-style",src:"https://www.flaticon.com/svg/static/icons/svg/59/59043.svg",alt:"sort",style:{height:15}})}function O(){return Object(u.jsx)("img",{className:"sort-style",src:"https://www.flaticon.com/svg/static/icons/svg/959/959159.svg",alt:"descend",style:{height:15}})}var f=function(e){var t=e.result.results,c=Object(n.useReducer)((function(e,c){switch(c.type){case"change":return c.input;case"ascend":return t.sort((function(e,t){return e.name.first>t.name.first.toUpperCase()?1:-1}));case"descend":return t.sort((function(e,t){return e.name.first>t.name.first.toUpperCase()?-1:1}));default:return e}}),t),s=Object(b.a)(c,2),r=(s[0],s[1]);return Object(u.jsxs)("table",{className:"table m-3",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsxs)("th",{scope:"col",children:["Name\xa0",Object(u.jsx)("span",{onClick:function(){return r({type:"ascend"})},children:Object(u.jsx)(p,{})}),Object(u.jsx)("span",{onClick:function(){return r({type:"descend"})},children:Object(u.jsx)(O,{})})]}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"name",children:Object(u.jsx)("img",{src:e.picture.thumbnail,alt:"employee-pic"})}),Object(u.jsxs)("td",{className:"name",children:[e.name.first," ",e.name.last]}),Object(u.jsx)("td",{className:"name",children:e.email}),Object(u.jsx)("td",{className:"name",children:e.phone}),Object(u.jsx)("td",{className:"name",children:e.dob.date})]},e.name.first)}))})]})},x=c(15),y=c.n(x),v=function(){return y.a.get("https://randomuser.me/api/?results=15&inc=picture,name,phone,email,dob&nat=us")},g=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(a.a)(this,c),(n=t.call(this,e)).state={error:null,isLoaded:!1,result:{results:[]}},n}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"searchEmployees",value:function(){var e=this;v().then((function(t){e.setState({isLoaded:!0,result:t.data}),console.log(t.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)(d,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(m,{}),Object(u.jsx)(f,{result:this.state.result})]})}}]),c}(n.Component);var N=function(){return Object(u.jsx)(g,{})};c(43);r.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.85685b96.chunk.js.map