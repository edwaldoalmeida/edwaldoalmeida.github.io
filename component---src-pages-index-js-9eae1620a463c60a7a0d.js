(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(34),i=a.n(n),o=a(7),r=a.n(o),c=a(0),l=a.n(c),s=a(376),m=a.n(s),u=a(190),p=a(4),d=a.n(p),g=a(381),h=a.n(g),f=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.gotoImage=t.gotoImage.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this,t=this.props.images;if(t){var a=t.map(function(t,a){return l.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:a},l.a.createElement("a",{className:"image fit thumb",href:t.src,onClick:function(t){return e.openLightbox(a,t)}},l.a.createElement("img",{src:t.thumbnail})),l.a.createElement("h3",null,t.caption),l.a.createElement("p",null,t.description))});return l.a.createElement("div",{className:"row"},a)}},a.render=function(){return l.a.createElement("div",null,this.renderGallery(),l.a.createElement(h.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClickImage:this.handleClickImage,onClickNext:this.gotoNext,onClickPrev:this.gotoPrevious,onClickThumbnail:this.gotoImage,onClose:this.closeLightbox}))},t}(c.Component);f.displayName="Gallery",f.propTypes={images:d.a.array};var b=a(425),E=a.n(b),x=a(426),I=a.n(x),v=a(427),N=a.n(v),w=a(428),k=a.n(w),C=a(429),y=a.n(C),L=a(430),j=a.n(L),S=a(431),P=a.n(S),O=a(432),D=a.n(O),A=a(433),G=a.n(A),B=a(434),J=a.n(B),M=a(435),T=a.n(M),z=a(436),H=a.n(z),$=(P.a,E.a,D.a,I.a,G.a,N.a,J.a,k.a,T.a,y.a,H.a,j.a,function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(i()(t)),t.gotoNext=t.gotoNext.bind(i()(t)),t.gotoPrevious=t.gotoPrevious.bind(i()(t)),t.openLightbox=t.openLightbox.bind(i()(t)),t.handleClickImage=t.handleClickImage.bind(i()(t)),t}r()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement("title",null,"Edwaldo Almeida"),l.a.createElement("meta",{name:"description",content:"Software Developer"})),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"Hello!")),l.a.createElement("p",null,"I'm from Brazil, living in Canada and concluding a Software Development postgraduate program this August 2019."),l.a.createElement("p",null,l.a.createElement("i",null,"(Portfolio coming soon...)")),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://linkedin.com/in/edwaldoalmeida",className:"button"},"More about me"))),l.a.createElement("ul",{className:"actions"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:edwaldoalmeida@icloud.com",className:"button"},"Contact"))))))},t}(l.a.Component));t.default=$},186:function(e,t,a){e.exports=a.p+"static/avatar-f283b8d438942e0cfa76ba8b1185f355.png"},190:function(e,t,a){"use strict";var n=a(7),i=a.n(n),o=a(0),r=a.n(o),c=(a(191),a(192),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"inner"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/edwaldoalmeida",className:"icon fa-linkedin"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:edwaldoalmeida@icloud.com",className:"icon fa-envelope-o"},r.a.createElement("span",{className:"label"},"Email")))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.edwaldoalmeida.com"},"Edwaldo Almeida")),r.a.createElement("li",null,"2019"))))},t}(r.a.Component)),l=a(186),s=a.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"inner"},r.a.createElement("a",{href:"#",className:"image avatar"},r.a.createElement("img",{src:s.a,alt:""})),r.a.createElement("h1",null,r.a.createElement("strong",null,"I'm Edwaldo Almeida, "),r.a.createElement("br",null),"Software Developer with a wide experience in Computer Networking, ",r.a.createElement("br",null),"Project Management and Business. ")),r.a.createElement(c,null))},t}(r.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",null,r.a.createElement(m,null),e)},t}(r.a.Component);t.a=u},425:function(e,t,a){e.exports=a.p+"static/01-6c866ee91adf8b061eaa83d7d286f64a.jpg"},426:function(e,t,a){e.exports=a.p+"static/02-5a005bd6e50a92ebb852094e87bae405.jpg"},427:function(e,t,a){e.exports=a.p+"static/03-6c07129022e286d50d1da5af14d28045.jpg"},428:function(e,t,a){e.exports=a.p+"static/04-f91f216f6dcccc296c646ccf71110979.jpg"},429:function(e,t,a){e.exports=a.p+"static/05-b9b1fc8ff6a17498e1436ed653764b58.jpg"},430:function(e,t,a){e.exports=a.p+"static/06-46276d05380390ac1bf441cac76b8f54.jpg"},431:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},432:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},433:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},434:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},435:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},436:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-9eae1620a463c60a7a0d.js.map