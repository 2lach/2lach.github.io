!function(e){function t(t){for(var a,o,i=t[0],c=t[1],s=t[2],h=0,m=[];h<i.length;h++)o=i[h],r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);m.length;)m.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;l.push([189,1]),n()}({184:function(e,t,n){e.exports=n.p+"174218c656e4d700cb6f978e20a07c10.jpg"},185:function(e,t,n){e.exports=n.p+"059715b3be90463ffd26bd18141e2479.jpg"},186:function(e,t,n){e.exports=n.p+"42812493ed1f0eb21a28eab5fba92143.jpg"},187:function(e,t,n){e.exports=n.p+"dbc9274c2c47719ccc9160b334888752.jpg"},188:function(e,t,n){e.exports=n.p+"ba97be00cbc6eeae03392fe783aaeb67.jpg"},189:function(e,t,n){n(190),e.exports=n(484)},479:function(e,t,n){var a=n(480);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(482)(a,r);a.locals&&(e.exports=a.locals)},480:function(e,t,n){(e.exports=n(481)(!1)).push([e.i,"body{\n    color: #990099;\n    margin:0;\n    margin-bottom:10vh;\n}\na {\n    color: #990099;\n    text-decoration: none;\n    font-size: 20px;\n    padding-bottom:2px;\n    transition:ease-in-out all 0.3s;\n\n}\nsvg{\n    color: #990099;\n    transition:ease-in-out all 0.3s;\n  }\na:hover, svg:hover{\n    color:black;\n    transform: scale(1.2);\n    text-shadow: 4px 4px 4px lightgrey;\n    \n}\n.content{\n    text-align: center;\n}\nh1{\n    font-size:5vw;\n}\n\n.flexRow{\n    display: flex; \n    flex-Direction: row;\n}\n.item {\n    flex-grow: 7;\n  }\n\n@media (min-width: 100px) and (max-width: 550px) {\n            span{\n                display:none;\n            }  \n            .flexRow{\n                display: flex; \n                flex-Direction:column;\n            }\n  }",""])},484:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),l=n(113),o=n.n(l),i=n(57),c=n(181),s=n(182),d=n.n(s),h=n(184),m=n.n(h),u=n(185),p=n.n(u),f=n(186),g=n.n(f),b=n(187),E=n.n(b);window.matchMedia=window.matchMedia||function(){return{matches:!0,addListener:()=>{},removeListener:()=>{}}};const v=Object(i["default"])(d.a)`
  height: 60vh;
  width: auto;
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 180%;
  background-position-x: center;
  overflow: hidden;
`,x=()=>r.a.createElement(c.a,{query:{minWidth:1e3}},e=>r.a.createElement(v,{src:e?p.a:E.a,placeholder:e?m.a:g.a}));x.displayName="CoverImage";var w=x,y=n(188);const M=i["default"].div`
  background-image: url(${n.n(y).a});
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
`;M.displayName="Avatar";var k=M,j=n(52),O=n(117),C=n(116),S=n.n(C);S.a.setAppElement("#root");var N=class extends a.Component{constructor(){super(),this.state={showModal:!1,imgsrc:"https://avatars.mds.yandex.net/get-pdb/936467/d6e8f55f-22db-42cf-894d-4e1b29782040/orig"},this.handleOpenModal=this.handleOpenModal.bind(this),this.handleCloseModal=this.handleCloseModal.bind(this),this.changeSource=this.changeSource.bind(this)}handleOpenModal(){this.setState({showModal:!0})}handleCloseModal(){this.setState({showModal:!1})}changeSource(){this.setState({imgsrc:"http://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif"})}render(){return r.a.createElement("div",{className:"flexRow"},r.a.createElement("ul",{style:{listStyleType:"none",display:"contents"}},r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/2lach",rel:"noopener"},r.a.createElement(j.b,{style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Github")," ")),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/slachmann/",rel:"noopener"},r.a.createElement(j.c,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://codepen.io/2lach/",rel:"noopener"},r.a.createElement(j.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Codepen"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://twitter.com/2lach__",rel:"noopener"},r.a.createElement(O.b,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Twitter"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://medium.com/@2lach",rel:"noopener"},r.a.createElement(O.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Medium"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",null,r.a.createElement(j.e,{onClick:this.handleOpenModal,style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Contact"),r.a.createElement(S.a,{isOpen:this.state.showModal,style:{overlay:{backgroundColor:"rgba(32, 31, 31, 0.6)"},content:{position:"absolute",color:"#990099",textAlign:"center",top:" 20%",left:"calc(50% - 25vw)",height:"auto",width:"50vw"}}},r.a.createElement(j.d,{onClick:this.handleCloseModal,style:{float:"right"}}),r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:stefanlachmann@hotmail.com?subject=Heyo"},"Click here to contact me")),r.a.createElement("div",null,r.a.createElement("p",{onClick:this.changeSource,style:{textAlign:"center"}},r.a.createElement("img",{src:this.state.imgsrc,style:{width:"auto",height:"auto"}}))))))))}};n(479);var _=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(k,null),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"My name is Stefan and I build things"),r.a.createElement(N,null)))}};o.a.render(r.a.createElement(_,null),document.getElementById("root"))}});