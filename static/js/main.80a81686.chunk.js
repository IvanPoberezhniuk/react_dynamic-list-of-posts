(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(18),a(11)),m=a(6),l=a.n(m),u=a(10),i=a(9),p=a(1),d=a(2),f=a(4),h=a(3),E=a(5),b=(a(20),function(){return fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()})}),_=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()})},j=function(){return fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.json()})},y=function(e){var t=e.comment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"comment__name"},r.a.createElement("a",{href:"#/"},t.name)),r.a.createElement("span",{className:"comment__body"},t.body),r.a.createElement("span",{className:"comment__email"},r.a.createElement("a",{href:"#/"},t.email)))},v=function(e){return e.comments.map(function(e){return r.a.createElement("section",{key:e.id,className:"post__comment"},r.a.createElement(y,{comment:e}))})},N=function(e){var t=e.post;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"post__title"},t.title),r.a.createElement("span",{className:"post__author-name"},r.a.createElement("a",{href:"#/"},t.user.name)),r.a.createElement("span",{className:"post__body"},t.body),r.a.createElement("span",{className:"post__email"},r.a.createElement("a",{href:"#/"},t.user.email)),r.a.createElement("span",{className:"post__address"},r.a.createElement("a",{href:"#/"},t.user.address.city," ",t.user.address.street," ",t.user.address.suite)),r.a.createElement("section",{className:"post__comments"},r.a.createElement(v,{comments:t.comments})))},O=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"postList"},e.map(function(e){return r.a.createElement("section",{key:e.id,className:"post"},r.a.createElement(N,{post:e}))}))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.loadData=Object(i.a)(l.a.mark(function e(){var t,n,r,c,s,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([b(),_(),j()]);case 2:t=e.sent,n=Object(u.a)(t,3),r=n[0],c=n[1],s=n[2],o=a.groupeAllData(r,c,s),a.setState({data:o});case 9:case"end":return e.stop()}},e)})),a.groupeAllData=function(e,t,a){return e.map(function(e){return Object(o.a)({},e,{user:t.find(function(t){return e.userId===t.id}),comments:a.filter(function(t){return t.postId===e.id})})})},a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.data;return console.log(e),r.a.createElement("div",{className:"App"},e.length?r.a.createElement(O,{data:e}):r.a.createElement("button",{type:"button",onClick:this.loadData},"Press ME!"))}}]),t}(r.a.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.80a81686.chunk.js.map