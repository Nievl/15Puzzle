(this.webpackJsonp15puzzle=this.webpackJsonp15puzzle||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),u=n.n(c),l=n(2),o=function(){var e=Array.from(Array(Math.pow(4,2)),(function(e,t){return t}));return i(e)},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e.sort((function(){return Math.random()-.5})):[]},s=function(e){return e%4},m=function(e){return Math.floor(e/4)},f=function(e,t){if("number"===typeof e&&"number"===typeof t){var n={x:s(t),y:m(t)},r={x:s(e),y:m(e)},a=Math.abs(n.x-r.x),c=Math.abs(n.y-r.y);if((0===a||0===c)&&(1===a||1===c))return!0}return!1},v=n(1),p=n(5),b=function(e){var t=e.cube,n=e.onclick,r=t?"":"zero",c=t||"";return a.a.createElement("div",{className:"cube "+r,"data-value":t,onClick:n},c)},d=function(e){var t=e.open,n=e.steps,r=e.reset;return t?a.a.createElement("div",{className:"modal"},"\u0412\u044b \u0441\u043b\u043e\u0436\u0438\u043b\u0438 \u043f\u0430\u0437\u043b \u0437\u0430 ",n," \u0448\u0430\u0433(\u043e\u0432)",a.a.createElement("button",{type:"button",onClick:r},"\u0421\u0431\u0440\u043e\u0441")):null},y=function(){var e=Object(r.useState)(o()),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(0),i=Object(l.a)(u,2),s=i[0],m=i[1],y=Object(r.useState)(!1),E=Object(l.a)(y,2),h=E[0],g=E[1],k=function(e){var t,r=+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dataset,n=arguments.length>1?arguments[1]:void 0;if(Array.isArray(n)){var r=n.reduce((function(e,n){return t[n]?Object(p.a)({},e,Object(v.a)({},n,t[n])):e}),{});return r}return"string"===typeof n?t[n]||"":{}}(e.target,"value"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.indexOf(0),r=e.indexOf(t);if(f(n,r)){var a=e.map((function(e,n){return 0===e?t:e===t?0:e}));return a}return!1}(n,r);a&&(c(a),m(s+1),(t=a,!!Array.isArray(t)&&t.every((function(e,t,n){return 0===t?0===n[1]?e<n[2]:e<n[1]:0===e||e>n[t-1]})))&&g(!0))},O=function(){g(!1),m(0),c(o())},z=h?" block":"";return a.a.createElement(a.a.Fragment,null,a.a.createElement(d,{open:h,steps:s,reset:O}),a.a.createElement("div",{className:"panel "+z},a.a.createElement("div",{className:"counter"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0439: ",s),a.a.createElement("button",{type:"button",onClick:O},"\u0421\u0431\u0440\u043e\u0441"),a.a.createElement("div",{className:"board "},n.map((function(e){return a.a.createElement(b,{cube:e,onclick:k,key:e})})))))},E=function(){return a.a.createElement("div",{className:"app"},a.a.createElement("header",null,a.a.createElement("h3",null,"15 Puzzle")),a.a.createElement("main",null,a.a.createElement(y,null),a.a.createElement("div",{className:"help"},"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u044f \u043a\u043e\u0441\u0442\u044f\u0448\u043a\u0438 \u043f\u043e \u043a\u043e\u0440\u043e\u0431\u043a\u0435, \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0438\u0445 \u043f\u043e \u043d\u043e\u043c\u0435\u0440\u0430\u043c, \u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0432 \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u044c\u0448\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0439.")),a.a.createElement("footer",null,a.a.createElement("a",{href:"https://github.com/Nievl/15Puzzle",target:"_blank",rel:"noopener noreferrer"},"\xa9 2019, Nievl")))};n(11);u.a.render(a.a.createElement(E,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(12)}},[[6,1,2]]]);