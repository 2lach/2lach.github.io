!function(e){function n(n){for(var a,l,i=n[0],s=n[1],c=n[2],p=0,m=[];p<i.length;p++)l=i[p],r[l]&&m.push(r[l][0]),r[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(n);m.length;)m.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],a=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(a=!1)}a&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var a={},r={0:0},o=[];function l(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=a,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)l.d(t,a,function(n){return e[n]}.bind(null,a));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var d=s;o.push([191,1]),t()}({186:function(e,n,t){e.exports=t.p+"174218c656e4d700cb6f978e20a07c10.jpg"},187:function(e,n,t){e.exports=t.p+"059715b3be90463ffd26bd18141e2479.jpg"},188:function(e,n,t){e.exports=t.p+"42812493ed1f0eb21a28eab5fba92143.jpg"},189:function(e,n,t){e.exports=t.p+"dbc9274c2c47719ccc9160b334888752.jpg"},190:function(e,n,t){e.exports=t.p+"ba97be00cbc6eeae03392fe783aaeb67.jpg"},191:function(e,n,t){t(192),e.exports=t(486)},481:function(e,n,t){var a=t(482);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(179)(a,r);a.locals&&(e.exports=a.locals)},482:function(e,n,t){(e.exports=t(178)(!1)).push([e.i,"*{\n    margin: 0;\n    padding: 0;\n  }\n  .wrapper{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n  }\n   \n  .mail{\n    width: 300px;\n    height: 200px;\n    background: #ff8789;\n    position: relative;\n    transform-style: preserve-3d;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    cursor: pointer;\n  }\n   \n  .mail:before{\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    border-left: 140px solid Transparent;\n    border-right: 150px solid #ff393c;\n    border-top: 100px solid Transparent;\n    border-bottom: 100px solid #ff393c;\n    z-index: 5;\n    border-bottom-right-radius: 10px;\n  }\n   \n  .mail:after{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-left: 150px solid #ff5355;\n    border-right: 140px solid Transparent;\n    border-top: 100px solid Transparent;\n    border-bottom: 100px solid #ff5355;\n    z-index: 4;\n    border-bottom-left-radius: 10px;\n  }\n   \n  .cover:before{\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-left: 150px solid transparent;\n    border-right: 150px solid transparent;\n    border-top: 100px solid #ff8789;\n    border-bottom: 100px solid transparent;\n    z-index: 6;\n    transform-origin: top;\n    transform: rotateX(0deg);\n    transition: all 1s 1s ease;\n  }\n   \n  .letter{\n    position: absolute;\n    z-index: 3;\n    top: 0px;\n    left: 10px;\n    background: #dedede;\n    width: 280px;\n    height: 180px;\n    border-radius: 20px;\n    transition: all 1s ease;\n  }\n   \n  .letter h1{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    font-size: 15px;\n    color: #798992;\n    font-weight: 900;\n  }\n   \n  .mail:hover .cover:before{\n    transform: rotateX(180deg);\n    transition: all 1s ease;\n  }\n   \n  .mail:hover .letter{\n    top: -80px;\n    transition: all 1s 1s ease;\n  }",""])},484:function(e,n,t){var a=t(485);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(179)(a,r);a.locals&&(e.exports=a.locals)},485:function(e,n,t){(e.exports=t(178)(!1)).push([e.i,"body{\n    color: #990099;\n    margin:0;\n    margin-bottom:10vh;\n}\na {\n    color: #990099;\n    text-decoration: none;\n    font-size: 20px;\n    padding-bottom:2px;\n    transition:ease-in-out all 0.3s;\n\n}\nsvg{\n    color: #990099;\n    transition:ease-in-out all 0.3s;\n  }\na:hover, svg:hover{\n    color:black;\n    transform: scale(1.2);\n    text-shadow: 4px 4px 4px lightgrey;\n    \n}\n.content{\n    text-align: center;\n}\nh1{\n    font-size:5vw;\n}\n\n.flexRow{\n    display: flex; \n    flex-Direction: row;\n}\n.item {\n    flex-grow: 7;\n  }\n\n    .ReactModal__Content, .ReactModal__Content--after-open{\n        position: absolute;\n        color: #990099;\n        text-Align: center;\n        top: 20%;\n        left: calc(50% - 25vw) !important;\n        height: auto;\n        width: 50vw;\n }\n\n@media (min-width: 100px) and (max-width: 550px) {\n            span{\n                display:none;\n            }  \n            .flexRow{\n                display: flex; \n                flex-Direction:column;\n            }\n            .ReactModal__Content, .ReactModal__Content--after-open{\n                position: absolute;\n                top: 20%;\n                left: calc(50% - 45vw) !important;\n                right: 40px;\n                bottom: 40px;\n                border: 1px solid rgb(204, 204, 204);\n                background: rgb(255, 255, 255);\n                overflow: auto;\n                border-radius: 4px;\n                outline: none;\n                padding: 20px;\n                color: rgb(153, 0, 153);\n                text-align: center;\n                height: auto;\n                width: 80vw;\n            }\n}",""])},486:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(113),l=t.n(o),i=t(57),s=t(183),c=t(184),d=t.n(c),p=t(186),m=t.n(p),h=t(187),u=t.n(h),f=t(188),b=t.n(f),g=t(189),x=t.n(g);window.matchMedia=window.matchMedia||function(){return{matches:!0,addListener:()=>{},removeListener:()=>{}}};const v=Object(i["default"])(d.a)`
  height: 60vh;
  width: auto;
  background-color: aliceblue;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 180%;
  background-position-x: center;
  overflow: hidden;
`,w=()=>r.a.createElement(s.a,{query:{minWidth:1e3}},e=>r.a.createElement(v,{src:e?u.a:x.a,placeholder:e?m.a:b.a}));w.displayName="CoverImage";var E=w,y=t(190);const M=i["default"].div`
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
`;M.displayName="Avatar";var k=M,C=t(52),_=t(117),j=t(116),O=t.n(j);t(481);var N=()=>r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"mail"},r.a.createElement("div",{className:"cover"}),r.a.createElement("div",{className:"letter"},r.a.createElement("h1",null,"Click here to contact me"))));O.a.setAppElement("#root");var S=class extends a.Component{constructor(){super(),this.state={showModal:!1,imgsrc:"https://avatars.mds.yandex.net/get-pdb/936467/d6e8f55f-22db-42cf-894d-4e1b29782040/orig"},this.handleOpenModal=this.handleOpenModal.bind(this),this.handleCloseModal=this.handleCloseModal.bind(this),this.changeSource=this.changeSource.bind(this)}handleOpenModal(){this.setState({showModal:!0})}handleCloseModal(){this.setState({showModal:!1})}changeSource(){this.setState({imgsrc:"http://gifimage.net/wp-content/uploads/2017/07/happy-dog-gif-5.gif"})}render(){return r.a.createElement("div",{className:"flexRow"},r.a.createElement("ul",{style:{listStyleType:"none",display:"contents"}},r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://github.com/2lach",rel:"noopener"},r.a.createElement(C.b,{style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Github")," ")),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/slachmann/",rel:"noopener"},r.a.createElement(C.c,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Linkedin"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://codepen.io/2lach/",rel:"noopener"},r.a.createElement(C.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Codepen"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://twitter.com/2lach__",rel:"noopener"},r.a.createElement(_.b,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Twitter"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",{href:"https://medium.com/@2lach",rel:"noopener"},r.a.createElement(_.a,{style:{width:40,height:50}}),r.a.createElement("br",null)," ",r.a.createElement("span",null,"Medium"))),r.a.createElement("li",{className:"item"},r.a.createElement("a",null,r.a.createElement(C.e,{onClick:this.handleOpenModal,style:{width:40,height:50}}),r.a.createElement("br",null),r.a.createElement("span",null,"Contact"),r.a.createElement(O.a,{isOpen:this.state.showModal,style:{overlay:{backgroundColor:"rgba(32, 31, 31, 0.6)"}}},r.a.createElement(C.d,{onClick:this.handleCloseModal,style:{float:"right"}}),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:stefanlachmann@hotmail.com?subject=Heyo"},r.a.createElement(N,null))))))))}};t(484);var z=class extends a.Component{render(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"My name is Stefan and I build things"),r.a.createElement(S,null)))}};l.a.render(r.a.createElement(z,null),document.getElementById("root"))}});