!function(e){function n(n){for(var a,o,i=n[0],c=n[1],s=n[2],m=0,u=[];m<i.length;m++)o=i[m],r[o]&&u.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(p&&p(n);u.length;)u.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],a=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(a=!1)}a&&(l.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={0:0},l=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var p=c;l.push([185,1]),t()}({180:function(e,n,t){e.exports=t.p+"174218c656e4d700cb6f978e20a07c10.jpg"},181:function(e,n,t){e.exports=t.p+"059715b3be90463ffd26bd18141e2479.jpg"},182:function(e,n,t){e.exports=t.p+"42812493ed1f0eb21a28eab5fba92143.jpg"},183:function(e,n,t){e.exports=t.p+"dbc9274c2c47719ccc9160b334888752.jpg"},184:function(e,n,t){e.exports=t.p+"ba97be00cbc6eeae03392fe783aaeb67.jpg"},185:function(e,n,t){t(186),e.exports=t(472)},467:function(e,n,t){var a=t(468);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(470)(a,r);a.locals&&(e.exports=a.locals)},468:function(e,n,t){(e.exports=t(469)(!1)).push([e.i,"body{\n    color: #990099;\n    margin:0;\n    margin-bottom:10vh;\n}\na {\n    text-decoration: none;\n    font-size: 20px;\n    padding-bottom:2px;\n\n}\nsvg{\n    color: #990099;\n    transition:ease-in-out all 0.3s;\n  }\na:hover, svg:hover{\n    color:black;\n    transform: scale(1.2);\n    text-shadow: 4px 4px 4px lightgrey;\n}\n.content{\n    text-align: center;\n}\nh1{\n    font-size:5vw;\n}\n\n.flexRow{\n    display: flex; \n    flex-Direction: row;\n}\n.item {\n    flex-grow: 7;\n  }\n\n@media (min-width: 100px) and (max-width: 550px) {\n            span{\n                display:none;\n            }  \n            .flexRow{\n                display: flex; \n                flex-Direction:column;\n            }\n  }",""])},472:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),l=t(173),o=t.n(l),i=t(56),c=t(177),s=t(178),p=t.n(s),m=t(180),u=t.n(m),d=t(181),h=t.n(d),f=t(182),b=t.n(f),g=t(183),x=t.n(g);window.matchMedia=window.matchMedia||function(){return{matches:!0,addListener:()=>{},removeListener:()=>{}}};const v=Object(i["default"])(p.a)`
  height: 60vh;
  width: auto;
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 180%;
  background-position-x: center;
  overflow: hidden;
`,E=()=>r.a.createElement(c.a,{query:{minWidth:1e3}},e=>r.a.createElement(v,{src:e?h.a:x.a,placeholder:e?u.a:b.a}));E.displayName="CoverImage";var w=E,y=t(184);const j=i["default"].div`
  background-image: url(${t.n(y).a});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 200px;
  position: relative;
  top: -50px;
  margin-bottom: -50px;
  background-position-x: -2rem;
  border: 2px solid white;
  border-radius:50%;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.35);
`;j.displayName="Avatar";var k=j,N=t(57),O=t(114);var M=class extends a.Component{constructor(){super(),this.openAlert=this.openAlert.bind(this)}openAlert(){alert("StefanLachmann at hotmail . com")}render(){return r.a.createElement("div",{className:"flexRow"},r.a.createElement("ul",{style:{listStyleType:"none",display:"contents"}},r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/2lach",rel:"noopener"},r.a.createElement(N.b,{style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Github")," ")),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/slachmann/",rel:"noopener"},r.a.createElement(N.c,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://codepen.io/2lach/",rel:"noopener"},r.a.createElement(N.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Codepen"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://twitter.com/2lach__",rel:"noopener"},r.a.createElement(O.b,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Twitter"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://medium.com/@2lach",rel:"noopener"},r.a.createElement(O.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Medium"))),r.a.createElement("li",{className:"item",onClick:this.openAlert},r.a.createElement("a",{rel:"noopener"},r.a.createElement(N.d,{style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Contact")," "))))}};t(467);var S=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"My name is Stefan and I build things"),r.a.createElement(M,null)))}};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}});