(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,n){"use strict";n.r(t);var a=n(34),i=n.n(a),r=n(7),o=n.n(r),c=n(0),l=n.n(c),s=n(376),m=n.n(s),u=n(190),p=n(4),g=n.n(p),d=n(381),h=n.n(d),f=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.gotoImage=t.gotoImage.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t}o()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.gotoImage=function(e){this.setState({currentImage:e})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.renderGallery=function(){var e=this,t=this.props.images;if(t){var n=t.map(function(t,n){return l.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:n},l.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(n,t)}},l.a.createElement("img",{src:t.thumbnail})),l.a.createElement("h3",null,t.caption),l.a.createElement("p",null,t.description))});return l.a.createElement("div",{className:"row"},n)}},n.render=function(){return l.a.createElement("div",null,this.renderGallery(),l.a.createElement(h.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(c.Component);f.displayName="Gallery",f.propTypes={images:g.a.array};var b=n(425),x=n.n(b),E=n(426),I=n.n(E),v=n(427),w=n.n(v),N=n(428),k=n.n(N),C=n(429),y=n.n(C),L=n(430),j=n.n(L),S=n(431),P=n.n(S),O=n(432),D=n.n(O),A=n(433),G=n.n(A),J=n(434),T=n.n(J),B=n(435),H=n.n(B),M=n(436),$=n.n(M),q=(P.a,x.a,D.a,I.a,G.a,w.a,T.a,k.a,H.a,y.a,$.a,j.a,function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t}o()(t,e);var n=t.prototype;return n.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},n.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},n.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},n.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},n.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},n.render=function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement("title",null,"Edwaldo Almeida"),l.a.createElement("meta",{name:"description",content:"Software Developer"})),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Hello!")),l.a.createElement("p",null,"I'm going to write something here... :) "))))},t}(l.a.Component));t.default=q},186:function(e,t,n){e.exports=n.p+"static/avatar-e768cb226efb1fffcfeeda55935b488c.png"},190:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),c=(n(191),n(192),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/edwaldoalmeida",className:"icon fa-linkedin"},o.a.createElement("span",{className:"label"},"LinkedIn"))),o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:edwaldoalmeida@icloud.com",className:"icon fa-envelope-o"},o.a.createElement("span",{className:"label"},"Email")))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,o.a.createElement("a",{href:"http://www.edwaldoalmeida.com"},"Edwaldo Almeida")),o.a.createElement("li",null,"2019"))))},t}(o.a.Component)),l=n(186),s=n.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement("header",{id:"header"},o.a.createElement("div",{className:"inner"},o.a.createElement("a",{href:"#",className:"image avatar"},o.a.createElement("img",{src:s.a,alt:""})),o.a.createElement("h1",null,o.a.createElement("strong",null,"I'm Edwaldo Almeida, "),o.a.createElement("br",null),"Software Developer with a wide experience in Computer Networking, ",o.a.createElement("br",null),"Project Management and Business. ")),o.a.createElement(c,null))},t}(o.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(m,null),e)},t}(o.a.Component);t.a=u},425:function(e,t,n){e.exports=n.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},426:function(e,t,n){e.exports=n.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},427:function(e,t,n){e.exports=n.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},428:function(e,t,n){e.exports=n.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},429:function(e,t,n){e.exports=n.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},430:function(e,t,n){e.exports=n.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},431:function(e,t,n){e.exports=n.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},432:function(e,t,n){e.exports=n.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},433:function(e,t,n){e.exports=n.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},434:function(e,t,n){e.exports=n.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},435:function(e,t,n){e.exports=n.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},436:function(e,t,n){e.exports=n.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-374588b9675bd0d26e33.js.map