(this["webpackJsonpreact-registration"]=this["webpackJsonpreact-registration"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t.n(s),r=t(8),c=t.n(r),i=(t(14),t(9)),l=t(3),h=t(4),u=t(1),o=t(6),p=t(5),j=(t(15),t(16),t(0));function b(e,a,t){return null!==e.match(a)||(t.classList.toggle("error__pass"),setTimeout((function(){return t.classList.toggle("error__pass")}),820),!1)}var d=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={valueEmail:"",valuePass:"",valueUser:"",passwordCheck:{length:0,checkNumber:!1,checkUpper:!1,checkLower:!1}},s.handleSubmit=s.handleSubmit.bind(Object(u.a)(s)),s.handlePasswordChange=s.handlePasswordChange.bind(Object(u.a)(s)),s.handleEmailUserChange=s.handleEmailUserChange.bind(Object(u.a)(s)),s}return Object(h.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var a=e.target[0],t=e.target[1],s=e.target[2],n=!0;(n=(n=(n=n&&b(this.state.valueUser,/^[a-zA-z0-9._-]{4,32}$/,a))&&b(this.state.valueEmail,/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,t))&&b(this.state.valuePass,/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[A-Za-z0-9 !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{8,}$/,s))&&localStorage.setItem(a.value,JSON.stringify({user:a.value,email:t.value,password:s.value}))}},{key:"handleEmailUserChange",value:function(e){this.setState(Object(i.a)({},"email"===e.target.type?"valueEmail":"valueUser",e.target.value))}},{key:"handlePasswordChange",value:function(e){this.setState({valuePass:e.target.value});this.setState({passwordCheck:{length:e.target.value.length,checkLower:!!e.target.value.match(/(?=.*[a-z])/),checkUpper:!!e.target.value.match(/(?=.*[A-Z])/),checkNumber:!!e.target.value.match(/(?=.*[0-9])/)}})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("p",{children:"Registration with Email"}),Object(j.jsx)(v,{userValuePass:this.handleEmailUserChange,value:this.state.valueUser}),Object(j.jsx)(O,{emailValuePass:this.handleEmailUserChange,value:this.state.valueEmail}),Object(j.jsx)(g,{passwordValuePass:this.handlePasswordChange,value:this.state.valuePass,passCheck:this.state.passwordCheck}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]})})}}]),t}(n.a.Component),v=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).userHandle=s.userHandle.bind(Object(u.a)(s)),s}return Object(h.a)(t,[{key:"userHandle",value:function(e){this.props.userValuePass(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"input__wrapper",children:[Object(j.jsx)("input",{type:"text",placeholder:"Username",onChange:this.userHandle,value:this.props.value}),this.props.value.match(/^[a-zA-z0-9._-]{4,32}$/)?Object(j.jsx)("div",{className:"tooltip tooltip__green",children:Object(j.jsx)("i",{className:"fa fa-check"})}):Object(j.jsxs)("div",{className:"tooltip",children:["!",Object(j.jsx)(m,{})]})]})}}]),t}(n.a.Component);function m(e){return Object(j.jsx)("div",{className:"tooltip__text",children:Object(j.jsxs)("span",{children:["Username must be between 4 and 32 characters",Object(j.jsx)("br",{}),"Username may contain _, -, ."]})})}var O=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).emailChange=s.emailChange.bind(Object(u.a)(s)),s}return Object(h.a)(t,[{key:"emailChange",value:function(e){this.props.emailValuePass(e)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"input__wrapper",children:Object(j.jsx)("input",{placeholder:"Email",onChange:this.emailChange,type:"email",value:this.props.value})})}}]),t}(n.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={passShow:!1},s.passChange=s.passChange.bind(Object(u.a)(s)),s.togglePassword=s.togglePassword.bind(Object(u.a)(s)),s}return Object(h.a)(t,[{key:"togglePassword",value:function(e){this.setState({passShow:!this.state.passShow}),e.target.classList.toggle("fa-eye-slash")}},{key:"passChange",value:function(e){this.props.passwordValuePass(e)}},{key:"render",value:function(){var e=this.props.passCheck.checkNumber&&this.props.passCheck.checkLower&&this.props.passCheck.checkUpper&&this.props.passCheck.length>7;return Object(j.jsxs)("div",{className:"input__wrapper",children:[Object(j.jsx)("input",{placeholder:"Password",onChange:this.passChange,type:this.state.passShow?"text":"password",value:this.props.value}),Object(j.jsx)("i",{className:"far fa-eye",onClick:this.togglePassword}),e?Object(j.jsx)("div",{className:"tooltip tooltip__green",children:Object(j.jsx)("i",{className:"fa fa-check"})}):Object(j.jsxs)("div",{className:"tooltip",children:["!",Object(j.jsx)(f,{})]})]})}}]),t}(n.a.Component);function f(e){return Object(j.jsx)("div",{className:"tooltip__text",children:Object(j.jsxs)("span",{children:["Password Must:",Object(j.jsx)("br",{}),"* be longer than 7 characters",Object(j.jsx)("br",{}),"* contain at least one number",Object(j.jsx)("br",{}),"* contain at least one upper and lower case letters"]})})}var x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(d,{})})};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8042bca0.chunk.js.map