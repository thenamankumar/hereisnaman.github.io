(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=(n(160),n(157)),i=n.n(o),l=n(247),s=n.n(l),c=n(0),m=n.n(c),p=n(164),d=n.n(p),u=n(36),f=n(248),g=n.n(f),h=n(179),b=n.n(h),x=n(259),w=n.n(x),E=n(155),v=n(167),y=(n(297),n(299)),k=function(e){return m.a.createElement(y.Twemoji,{text:e.children.toString(),svg:!0,onlyEmojiClassName:"emoji"})},_=(n(40),n(81),n(309)),C=n.n(_),N=(n(39),n(242),n(311)),z=n.n(N),S=(n(172),n(314)),j=n.n(S),I=(n(321),n(325)),R=(n(322),n(324),n(156));function M(){var e=i()(["\n    max-width: 100%;\n  "]);return M=function(){return e},e}var O=n(312).js,P=E.b.div.withConfig({displayName:"editor__EditorWrap",componentId:"sc-1meaa7l-0"})(["max-width:80%;margin:50px auto;.wrap{position:relative;padding:15px;border-radius:4px;background:#172a45;box-shadow:0 0 140px rgba(255,255,255,0.05);}.ace_editor{color:#a8b2d1;background:#172a45;.ace_scroller{z-index:9;}.ace_selection{padding:15px;background:","!important;}.ace_identifier{color:#fff;}.ace_keyword{color:#64ffda;}.ace_constant,.ace_string{color:#fe8341 !important;}.ace_operator{color:#a8b2d1 !important;}.ace_variable.ace_language{color:#ea9f82;}.ace_comment{color:#657092;}}",""],R.l.colors.navy,R.j.tablet(M())),T=E.b.div.withConfig({displayName:"editor__EditorHeader",componentId:"sc-1meaa7l-1"})(["text-align:right;position:absolute;top:15px;right:15px;z-index:99;display:inline;width:auto !important;background-image:linear-gradient( to right,transparent 0%,rgba(23,42,69,0.5) 50%,#172a45 100% );height:20px;"]),F=E.b.button.withConfig({displayName:"editor__Action",componentId:"sc-1meaa7l-2"})(["border:none;padding:0;margin-left:15px;flex:1;background:none;color:",";font-size:",";cursor:pointer;transition:all 0.2s ease;&.run{color:#e92e2e;&:hover{color:#841b1b;}}&.reset:hover{color:#09ae87;}&.format{color:#3e9add;&:hover{color:#1e72ae;}}svg{display:inline;width:",";height:",";cursor:pointer;vertical-align:middle;}"],R.l.colors.green,R.l.fontSizes.small,R.l.fontSizes.small,R.l.fontSizes.small),W=E.b.div.withConfig({displayName:"editor__Output",componentId:"sc-1meaa7l-3"})(["width:100%;border-top:2px solid #1d304a;font-size:",";padding-top:10px;.title{color:",";margin:0;margin-bottom:10px;svg{display:inline;width:",";height:",";cursor:pointer;vertical-align:bottom;color:#8892b0;position:absolute;right:15px;transition:all 0.2s ease;&:hover{color:#e92e2e;}}}.print{margin:0;background:#0a192f;padding:10px;color:#a8b2d1;border-radius:4px;max-height:200px;overflow:auto;}"],R.l.fontSizes.medium,R.l.colors.green,R.l.fontSizes.small,R.l.fontSizes.small),A=E.b.div.withConfig({displayName:"editor__Spinner",componentId:"sc-1meaa7l-4"})(["position:relative;width:14px !important;height:14px;display:inline-block;&:before,&:after{content:'';display:block;}@keyframes pulse{0%{transform:scale(0);}50%{transform:scale(1.3);opacity:0;}100%{transform:scale(1.3);opacity:0;}}@keyframes pulse-2{0%{transform:scale(0);}100%{transform:scale(1.3);opacity:0;}}.circle{border-radius:100px;position:absolute;left:0;right:0;margin:auto;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center;}.circle-1{width:180%;height:180%;background-color:#e92e2e;left:-40%;-webkit-animation:pulse 1.6s linear 0s infinite;animation:pulse 1.6s linear 0s infinite;}.circle-2{width:120%;height:120%;background-color:#e92e2e;top:20%;-webkit-animation:pulse-2 1.6s linear 0s infinite;animation:pulse-2 1.6s linear 0s infinite;}.circle-3{width:80%;height:80%;background-color:#e92e2e;top:40%;}}"]),H=function(e){return m.a.createElement(A,e,m.a.createElement("div",{class:"circle circle-1"}),m.a.createElement("div",{class:"circle circle-2"}),m.a.createElement("div",{class:"circle circle-3"}))},Y=function(e){function t(t){var n;(n=e.call(this,t)||this).handleCodeChange=function(e){return n.setState({code:e})},n.handleCodeReset=function(){return n.setState({code:n.state.saved})},n.handleCodeRun=z()(C.a.mark(function e(){var t,a,r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.code,e.next=3,n.setState({running:!0});case 3:return a=new Worker("/workers/jsWorker.js"),n.jsWorkerRef=a,a.postMessage({code:t}),r=new Promise(function(e){a.onmessage=function(t){var a=t.data;n.setState(function(e){if(e.running)return{output:a,running:!1,showOutput:!0}}),e(a)}}),n.execPromiseRef=r,e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)})),n.handleHideOutput=function(){return n.setState({showOutput:!1})},n.handleStopExec=function(){if(n.state.running)try{n.jsWorkerRef.terminate(),n.setState({running:!1})}catch(e){}},n.handleCodeFormat=function(){return n.setState(function(e){return{code:O(e.code,{indent_size:2})}})},n.renderRenderEditor=function(){var e=n.state,t=e.code,a=e.output,r=e.running,o=e.showOutput;e.show;return m.a.createElement(P,null,m.a.createElement("div",{className:"wrap"},m.a.createElement(T,null,m.a.createElement(F,{className:"format",title:"Format",onClick:n.handleCodeFormat,disabled:r},m.a.createElement(I.b,null)),m.a.createElement(F,{className:"reset",title:"Reset",onClick:n.handleCodeReset,disabled:r},m.a.createElement(I.d,null)),m.a.createElement(F,{className:"run",title:r?"Stop":"Run",onClick:r?n.handleStopExec:n.handleCodeRun},r?m.a.createElement(H,null):m.a.createElement(I.c,null))),m.a.createElement(j.a,{mode:"javascript",theme:"clouds_midnight",value:t,onChange:n.handleCodeChange,wrapEnabled:!0,readOnly:r,showGutter:!1,showPrintMargin:!1,tabSize:2,fontSize:14,width:"100%",height:Math.max(150,19.16*(t.match(/\n/g)||[]).length+30)+"px"}),o&&m.a.createElement(W,null,m.a.createElement("div",{className:"title"},"Output:",m.a.createElement(I.a,{onClick:n.handleHideOutput})),m.a.createElement("p",{className:"print"},(a||[]).map(function(e){return m.a.createElement("div",null,void 0===e?typeof e:null===e?"null":e)})))))};var a=t.children[0].replace(/\n[\s]*\/\/[\s]*\n/gi,"\n\n"),r=O(a.substr(1,a.length-1),{indent_size:2});return n.state={code:r,saved:r,output:"",showOutput:!1,running:!1,show:!1},n.jsWorkerRef=null,n.execPromiseRef=null,n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({show:!0})},n.render=function(){var e=this.state;e.code,e.output,e.running,e.showOutput;if(!e.show)return null},t}(m.a.Component);function L(){var e=i()(["\n  flex-direction: column;\n    .next, .previous {\n      max-width: 100%;\n    }\n\n    .previous {\n      margin-bottom: 20px;\n    }\n\n    .next.latest, .previous.first {\n      display: none;\n    }\n  "]);return L=function(){return e},e}function B(){var e=i()(["font-size: ",";"]);return B=function(){return e},e}function D(){var e=i()(["font-size: ",";"]);return D=function(){return e},e}function J(){var e=i()(["font-size: ",";"]);return J=function(){return e},e}function q(){var e=i()(["font-size: ",";"]);return q=function(){return e},e}function G(){var e=i()(["font-size: 40px;"]);return G=function(){return e},e}function Q(){var e=i()(["font-size: 50px;"]);return Q=function(){return e},e}function K(){var e=i()(["font-size: 60px;"]);return K=function(){return e},e}function U(){var e=i()(["font-size: 70px;"]);return U=function(){return e},e}function V(){var e=i()(["padding-top: 150px;"]);return V=function(){return e},e}n.d(t,"pageQuery",function(){return me});var X=Object(E.b)(R.d).withConfig({displayName:"blog-post__MainContainer",componentId:"sc-16ouefy-0"})(["",";counter-reset:section;"],R.k.sidePadding),Z=E.b.div.withConfig({displayName:"blog-post__CommentsContainer",componentId:"sc-16ouefy-1"})([".reaction-item__button{border-color:",";}"],R.l.colors.green),$=Object(E.b)(R.h).withConfig({displayName:"blog-post__HeroContainer",componentId:"sc-16ouefy-2"})(["",";flex-direction:column;justify-content:flex-start;align-items:flex-start;min-height:100vh;padding-top:200px;",";div{width:100%;}"],R.k.flexCenter,R.j.tablet(V())),ee=E.b.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-16ouefy-3"})(["font-size:80px;line-height:1.1;margin:0;",";",";",";",";"],R.j.desktop(U()),R.j.tablet(K()),R.j.phablet(Q()),R.j.phone(G())),te=E.b.h3.withConfig({displayName:"blog-post__Author",componentId:"sc-16ouefy-4"})(["display:inline;color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;",";",";"],R.l.colors.green,R.l.fontSizes.small,R.l.fonts.SFMono,R.j.desktop(q(),R.l.fontSizes.small),R.j.tablet(J(),R.l.fontSizes.smallish)),ne=Object(E.b)(d.a).withConfig({displayName:"blog-post__Avatar",componentId:"sc-16ouefy-5"})(["width:30px;max-width:30px;max-height:30px;vertical-align:middle;position:relative;display:inline-block;border-radius:50%;border:3px solid #fff;margin-right:10px;"]),ae=Object(E.b)(d.a).withConfig({displayName:"blog-post__FeaturedImage",componentId:"sc-16ouefy-6"})(["width:100%;vertical-align:middle;position:relative;border:3px solid #fff;margin-top:20px;"]),re=E.b.div.withConfig({displayName:"blog-post__PostBody",componentId:"sc-16ouefy-7"})(["margin-top:40px;strong{color:white;}.emoji{margin-right:5px;img{vertical-align:middle;}}ul{list-style-type:'# ';li{margin-block-end:0.5em;margin-block-start:0.5em;}}a{color:",";}blockquote{border-left:3px solid;box-sizing:border-box;padding:0.5em 1em;margin:0;margin-bottom:0px;margin-bottom:1em;p{margin:0;}}"],R.l.colors.green),oe=E.b.h3.withConfig({displayName:"blog-post__Meta",componentId:"sc-16ouefy-8"})(["display:inline;color:",";margin:0 0 20px 3px;font-size:",";font-family:",";font-weight:normal;word-wrap:break-word;",";",";.tag{margin-left:10px;}.read-time{margin-right:20px;}"],R.l.colors.green,R.l.fontSizes.small,R.l.fonts.SFMono,R.j.desktop(D(),R.l.fontSizes.small),R.j.tablet(B(),R.l.fontSizes.smallish)),ie=E.b.div.withConfig({displayName:"blog-post__Credits",componentId:"sc-16ouefy-9"})(["margin-top:20px;margin-bottom:40px;"]),le=E.b.div.withConfig({displayName:"blog-post__PostLinks",componentId:"sc-16ouefy-10"})(["display:flex;justify-content:space-between;margin-bottom:40px;.next{text-align:right;}.prevous{text-align:left;}.previous,.next{flex:1;border-radius:2px;max-width:calc(50% - 15px);padding:10px 20px;background:#172a45;.title{color:white;font-size:20px;margin-bottom:0;}.pos{color:",";font-size:",";margin-bottom:5px;}.empty{text-align:center;margin-bottom:0;position:relative;top:50%;transform:translateY(-50%);}.excerpt{font-size:",";margin-bottom:0px;}","{font-size:12px;margin-bottom:0;}&:hover{-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);box-shadow:0 2px 4px rgba(2,12,27,0.9);}}",""],R.l.colors.green,R.l.fontSizes.small,R.l.fontSizes.large,oe,R.j.tablet(L())),se=new w.a({createElement:m.a.createElement,components:{emoji:k,editor:Y}}).Compiler,ce=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site,n=this.props.pageContext,a=n.previous,r=n.next,o="https://"+s.a.join("naman.sh/",e.frontmatter.featuredImg.childImageSharp.fluid.src),i="https://"+s.a.join("naman.sh/",e.frontmatter.slug,"/"),l=e.frontmatter.title+" | "+t.siteMetadata.title,c=e.excerpt;return m.a.createElement(v.a,{location:this.props.location},m.a.createElement(b.a,null,m.a.createElement("title",{itemProp:"name",lang:"en"},l),m.a.createElement("meta",{name:"description",content:c}),m.a.createElement("meta",{name:"keywords",content:(e.frontmatter.tags||[]).join(",")}),m.a.createElement("meta",{property:"og:title",content:l}),m.a.createElement("meta",{property:"og:description",content:c}),m.a.createElement("meta",{property:"og:type",content:"website"}),m.a.createElement("meta",{property:"og:url",content:i}),m.a.createElement("meta",{property:"og:site_name",content:t.siteMetadata.title}),m.a.createElement("meta",{property:"og:image",content:o}),m.a.createElement("meta",{itemProp:"name",content:t.siteMetadata.title}),m.a.createElement("meta",{itemProp:"description",content:c}),m.a.createElement("meta",{itemProp:"image",content:o}),m.a.createElement("meta",{name:"twitter:url",content:i}),m.a.createElement("meta",{name:"twitter:title",content:l}),m.a.createElement("meta",{name:"twitter:description",content:c}),m.a.createElement("meta",{name:"twitter:image:src",content:o}),m.a.createElement("meta",{name:"twitter:image:alt",content:l})),m.a.createElement(X,{id:"content"},m.a.createElement($,null,m.a.createElement(ee,null,e.frontmatter.title),m.a.createElement("div",null,m.a.createElement(oe,null,m.a.createElement("span",{className:"read-time"},e.timeToRead," Min",e.timeToRead>1?"s":""," Read"),(e.frontmatter.tags||[]).map(function(e){return m.a.createElement("span",{className:"tag"},"#",e)}))),m.a.createElement(ae,{fluid:e.frontmatter.featuredImg.childImageSharp.fluid,alt:e.frontmatter.title}),m.a.createElement(re,null,se(e.htmlAst)),m.a.createElement(ie,null,m.a.createElement(ne,{fluid:e.frontmatter.authorImg.childImageSharp.fluid,alt:"Avatar"}),m.a.createElement(te,null,"By ",e.frontmatter.authorName," on ",e.frontmatter.date)),m.a.createElement(le,null,a?m.a.createElement(u.Link,{className:"previous",to:a.frontmatter.slug},m.a.createElement("p",{className:"pos"},"<< previous"),m.a.createElement("h3",{className:"title"},a.frontmatter.title),m.a.createElement("p",{className:"excerpt"},a.excerpt),m.a.createElement(oe,null,m.a.createElement("span",{className:"read-time"},a.timeToRead," ",a.timeToRead>1?"Mins":"Min"," Read"),(a.frontmatter.tags||[]).map(function(e){return m.a.createElement("span",{className:"tag"},"#",e)}))):m.a.createElement("div",{className:"previous first"},m.a.createElement("p",{className:"empty"},"This is the first post.")),r?m.a.createElement(u.Link,{className:"next",to:r.frontmatter.slug},m.a.createElement("p",{className:"pos"},"next >>"),m.a.createElement("h3",{className:"title"},r.frontmatter.title),m.a.createElement("p",{className:"excerpt"},r.excerpt),m.a.createElement(oe,null,m.a.createElement("span",{className:"read-time"},r.timeToRead," ",r.timeToRead>1?"Mins":"Min"," Read"),(r.frontmatter.tags||[]).map(function(e){return m.a.createElement("span",{className:"tag"},"#",e)}))):m.a.createElement("div",{className:"next latest"},m.a.createElement("p",{className:"empty"},"This is the latest post"))),m.a.createElement(Z,null,m.a.createElement(g.a.DiscussionEmbed,{shortname:"naman-kumar",config:{url:"https://naman.sh"+e.frontmatter.slug,identifier:n.filePath,title:e.frontmatter.title}})))))},t}(m.a.Component),me=(t.default=ce,"1197485507")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-78a97203dd771c5779cb.js.map