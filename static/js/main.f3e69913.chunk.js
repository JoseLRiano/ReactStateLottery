(this.webpackJsonplottery=this.webpackJsonplottery||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),i=n(2),u=n(4),s=n(3),m=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Ball"},this.props.num)}}]),n}(a.Component)),h=(n(14),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).generate=function(){a.setState((function(e){return{nums:e.nums.map((function(e){return Math.floor(Math.random()*a.props.maxNum)+1}))}}))},a.handleClick=function(){a.generate()},a.state={nums:Array.from({length:a.props.maxBalls})},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("section",{className:"Lottery"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",null,this.state.nums.map((function(e){return r.a.createElement(m,{num:e})}))),r.a.createElement("button",{onClick:this.handleClick},"Generate"))}}]),n}(a.Component));h.defaultProps={title:"Lotto",maxBalls:6,maxNum:40};var f=h;n(15);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(f,{title:"Mid-Daily",maxNum:10,maxBalls:4}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.f3e69913.chunk.js.map