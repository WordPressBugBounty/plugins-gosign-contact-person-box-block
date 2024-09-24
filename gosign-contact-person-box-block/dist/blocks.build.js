!function(e){function t(n){if(l[n])return l[n].exports;var a=l[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,l){var n,a;!function(){"use strict";function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var o=l.apply(null,n);o&&e.push(o)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(l.default=l,e.exports=l):(n=[],void 0!==(a=function(){return l}.apply(t,n))&&(e.exports=a))}()},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(2)},function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var a=l(0),r=l.n(a),o=l(3),i=l(4),c=(l.n(i),l(5)),__=(l.n(c),wp.i18n.__),m=wp.blocks.registerBlockType,s=wp.element,p=(s.Component,s.Fragment),u=wp.components,d=u.PanelBody,b=u.RangeControl,g=u.SelectControl,w=(u.Toolbar,u.ToggleControl),f=u.TextControl,h=(u.TextareaControl,u.Button),E=wp.editor,v=E.InspectorControls,y=E.BlockAlignmentToolbar,R=E.PanelColorSettings,k=E.BlockControls,C=(E.RichText,E.InnerBlocks,E.AlignmentToolbar,wp.editor.MediaUpload);m("gosign/contact-person-box-block",{title:__("Gosign - Contact person box block"),icon:"groups",category:"common",keywords:[__("contact-person-box-block \u2014 Gosign Block"),__("profile block"),__("guten block")],attributes:{title:{type:"string",selector:"p"},subtitle:{type:"string",selector:"p"},bio:{type:"string",selector:"p"},image:{type:"string"},imageCaption:{type:"string",source:"text",selector:"figcaption"},imagePosition:{type:"string",default:"0"},horizontalPos:{type:"string",default:"center"},verticalPos:{type:"string",default:"above"},noWrap:{type:"boolean",default:!1},align:{type:"string",default:"full"},imageColumnWidth:{type:"int",default:50},emailAddress:{type:"string"},phone:{type:"string"},altAttachment:{type:"string"},RoundImage:{type:"boolean",default:!1},displayphone:{type:"boolean",default:!1},displayemail:{type:"boolean",default:!1},alignment:{type:"string",selector:"a"},borderSize:{default:1,type:"number"},borderRadius:{default:0,type:"number"},bordercolor:{type:"string",default:"#000000"},backgroundColor:{type:"string",default:"#ffffff"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},facebookURL:{type:"url"},twitterURL:{type:"url"},xingURL:{type:"url"},linkedURL:{type:"url"}},getEditWrapperProps:function(e){var t=e.align;if("left"===t||"right"===t||"wide"===t||"full"===t)return{"data-align":t}},edit:function(e){function t(t){e.setAttributes({mediaURL:t.url,mediaID:t.id,altAttachment:t.alt})}var l,a=e.attributes,o=e.setAttributes,i=a.align,c=a.imagePosition,m=a.horizontalPos,s=a.verticalPos,u=a.noWrap,E=a.title,x=a.subtitle,L=a.bio,U=a.emailAddress,N=a.imageColumnWidth,P=a.phone,A=a.RoundImage,I=a.backgroundColor,S=a.bordercolor,z=a.borderSize,W=a.borderRadius,B=a.displayemail,T=a.displayphone,O=a.mediaID,_=a.mediaURL,j=a.altAttachment,D=a.facebookURL,M=a.twitterURL,F=a.xingURL,G=a.linkedURL,H=[{horizontal:{center:[0,8],right:[1,9,17,25],left:[2,10,18,26]}},{vertical:{above:[0,1,2],intext:[17,18,25,26],below:[8,9,10]}}],X=function(e,t){return e.find(function(e){return e==t})},q=wp.element.createElement(v,null,wp.element.createElement(d,{title:__("Text With Image Settings")},wp.element.createElement(g,{label:"Position and Alignment ",value:c,options:[{label:"Above Center",value:"0"},{label:"Above Right",value:"1"},{label:"Above Left",value:"2"},{label:"Below Center",value:"8"},{label:"Below Right",value:"9"},{label:"Below Left",value:"10"},{label:"In text Right",value:"17"},{label:"In text Left",value:"18"},{label:"Beside Right",value:"25"},{label:"Beside Left",value:"26"}],onChange:function(e){H.map(function(t,l){void 0!=t.horizontal?(void 0!=X(t.horizontal.center,e)&&o({horizontalPos:"center"}),void 0!=X(t.horizontal.right,e)&&o({horizontalPos:"right"}),void 0!=X(t.horizontal.left,e)&&o({horizontalPos:"left"})):(void 0!=X(t.vertical.above,e)&&o({verticalPos:"above"}),void 0!=X(t.vertical.intext,e)&&o({verticalPos:"intext"}),void 0!=X(t.vertical.below,e)&&o({verticalPos:"below"})),25==e||26==e?o({noWrap:!0}):0!=u&&o({noWrap:!1})}),o({imagePosition:e})}}),function(){if("intext"==s)return wp.element.createElement(b,{label:"In Text Image Width",value:N,onChange:function(e){return o({imageColumnWidth:e})},min:0,max:100})}()),wp.element.createElement(d,{title:__("Author Block Settings")},wp.element.createElement(p,null,wp.element.createElement(w,{label:__("Enable Round Image"),checked:A,onChange:function(e){return o({RoundImage:e})}}),wp.element.createElement(w,{label:__("Hide Phone Icon"),checked:T,onChange:function(e){return o({displayphone:e})}}),wp.element.createElement(w,{label:__("Hide Email Icon"),checked:B,onChange:function(e){return o({displayemail:e})}}),wp.element.createElement(d,{title:"Social Media Settings",icon:"category",initialOpen:!1},wp.element.createElement(f,{label:__("Facebook:"),onChange:function(e){o({facebookURL:e})},value:D,placeholder:"Enter facebook url",type:"url"}),wp.element.createElement(f,{label:__("Twitter:"),onChange:function(e){o({twitterURL:e})},value:M,placeholder:"Enter twitter url",type:"url"}),wp.element.createElement(f,{label:__("Xing:"),onChange:function(e){o({xingURL:e})},value:F,placeholder:"Enter xing url",type:"url"}),wp.element.createElement(f,{label:__("LinkedIn:"),onChange:function(e){o({linkedURL:e})},value:G,placeholder:"Enter linkedin url",type:"url"})),wp.element.createElement(R,{title:__("Background Color Settings"),initialOpen:!1,colorSettings:[{value:I,onChange:function(e){return o({backgroundColor:e})},label:__("Select Color")}]}),wp.element.createElement(d,{title:"Border Settings",icon:"category",initialOpen:!1},wp.element.createElement(p,null,wp.element.createElement(R,{title:__("Border Color "),initialOpen:!1,colorSettings:[{value:S,onChange:function(e){return o({bordercolor:e})},label:__("Select Color")}]}),wp.element.createElement(b,{label:__("Enter Border Size its in px"),value:z,min:"0",max:"10",step:"1",onChange:function(e){o({borderSize:e})}}),wp.element.createElement(b,{label:__("Enter Border Radius its in px"),value:W,min:"0",max:"10",step:"1",onChange:function(e){o({borderRadius:e})}})))))),J=function(){if("center"==m){var e=A?{borderRadius:"50%"}:{borderRadius:"0px"};return wp.element.createElement("div",{className:"ce-gallery"},wp.element.createElement("div",{class:"ce-outer"},wp.element.createElement("div",{class:"ce-inner"},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement(C,{onSelect:t,type:"image",value:O,render:function(t){var l=t.open;return wp.element.createElement(h,{className:O?"image-button":"button button-large",onClick:l},O?wp.element.createElement("img",{style:e,src:_,alt:j,width:"200",height:"200"}):__("Upload Image"))}}))))))}var l=A?{borderRadius:"50%"}:{borderRadius:"0px"};return wp.element.createElement("div",{className:"ce-gallery",style:{width:"intext"==s?N+"%":"auto"}},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement(C,{onSelect:t,type:"image",value:O,render:function(e){var t=e.open;return wp.element.createElement(h,{className:O?"image-button":"button button-large",onClick:t},O?wp.element.createElement("img",{style:l,src:_,alt:j,width:"200",height:"200"}):__("Upload Image"))}}))))};return wp.element.createElement(p,null,wp.element.createElement("div",{style:{backgroundColor:I,border:"solid",borderColor:S,borderRadius:W,borderWidth:z}},q,wp.element.createElement(k,null,wp.element.createElement(y,{value:i,onChange:function(e){o({align:e})},controls:["center","full"]})),1!=u&&wp.element.createElement("header",null),wp.element.createElement("div",{className:r()(e.className,"ce-textpic",(l={},n(l,"ce-"+m,!0),n(l,"ce-"+s,!0),n(l,"no-wrap",u),l))},"below"!=s&&wp.element.createElement(p,null,J()),wp.element.createElement("div",{class:"ce-bodytext"},1==u&&wp.element.createElement("header",null),wp.element.createElement("div",null,"Title: "),wp.element.createElement(f,{tagName:"p",value:E,onChange:function(e){o({title:e})}}),wp.element.createElement("div",null,"Subtitle: "),wp.element.createElement(f,{tagName:"p",onChange:function(e){o({subtitle:e})},value:x}),wp.element.createElement("div",null,"Description: "),wp.element.createElement(f,{tagName:"p",onChange:function(e){o({bio:e})},value:L,placeholder:"Type..."}),wp.element.createElement("div",null,"Email Address: "),wp.element.createElement(f,{onChange:function(e){o({emailAddress:e})},value:U,placeholder:"Enter Email",rel:"noopener noreferrer"}),wp.element.createElement("div",null,"Phone: "),wp.element.createElement(f,{onChange:function(e){o({phone:e})},value:P,placeholder:"Enter phone number",rel:"noopener noreferrer"})),"below"==s&&wp.element.createElement(p,null,J()))))},save:function(e){var t,l=e.attributes,a=(l.align,l.imagePosition,l.horizontalPos),o=l.verticalPos,i=l.noWrap,c=(l.title,l.subtitle,l.bio,l.emailAddress,l.imageColumnWidth),m=(l.phone,l.RoundImage,l.backgroundColor),s=l.bordercolor,u=l.borderSize,d=l.borderRadius,b=l.facebookURL,g=l.twitterURL,w=l.linkedURL,f=l.xingURL,h=l.RoundImage?{borderRadius:"50%"}:{borderRadius:"0px"},E=l.displayphone?{display:"none"}:{display:"block"},v=l.displayemail?{display:"none"}:{display:"block"},y=function(){return"center"==a?wp.element.createElement("div",{className:"ce-gallery"},wp.element.createElement("div",{class:"ce-outer"},wp.element.createElement("div",{class:"ce-inner"},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement("img",{style:h,src:l.mediaURL,alt:l.altAttachment,width:"200",height:"200"})))))):wp.element.createElement("div",{className:"ce-gallery",style:{width:"intext"==o?c+"%":"auto"}},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement("img",{style:h,src:l.mediaURL,alt:l.altAttachment,width:"200",height:"200"}))))};return wp.element.createElement(p,null,wp.element.createElement("div",{className:"contact-person-box"},wp.element.createElement("div",{style:{backgroundColor:m,border:"solid",borderColor:s,borderRadius:d,borderWidth:u}},1!=i&&wp.element.createElement("header",null),wp.element.createElement("div",{className:r()(e.className,"ce-textpic",(t={},n(t,"ce-"+a,!0),n(t,"ce-"+o,!0),n(t,"no-wrap",i),t))},"below"!=o&&wp.element.createElement(p,null,y()),wp.element.createElement("div",{className:"ce-bodytext"},wp.element.createElement("h4",{className:"title"},l.title),wp.element.createElement("p",{className:"subtitle"},l.subtitle),wp.element.createElement("p",{className:"description"},l.bio),wp.element.createElement("a",{href:"mailto:"+l.emailAddress,class:"av-icon-char",target:"_blank",rel:"noopener noreferrer"},wp.element.createElement("i",{style:v,class:"fa fa-envelope"}),l.emailAddress),wp.element.createElement("p",{class:"av-icon-char"},wp.element.createElement("i",{style:E,class:"fa fa-phone"}),l.phone),wp.element.createElement("div",{class:"social-icons"},b&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.facebookURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-facebook"}))),g&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.twitterURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-twitter "}))),f&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.xingURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-xing"}))),w&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.linkedURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-linkedin"}))))),"below"==o&&wp.element.createElement(p,null,y())))))},deprecated:o.a})},function(e,t,l){"use strict";function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var a=l(0),r=l.n(a),o=wp.element.Fragment,i={title:{type:"string",selector:"p"},subtitle:{type:"string",selector:"p"},bio:{type:"string",selector:"p"},image:{type:"string"},imageCaption:{type:"string",source:"text",selector:"figcaption"},imagePosition:{type:"string",default:"0"},horizontalPos:{type:"string",default:"center"},verticalPos:{type:"string",default:"above"},noWrap:{type:"boolean",default:!1},align:{type:"string",default:"full"},imageColumnWidth:{type:"int",default:50},emailAddress:{type:"string"},phone:{type:"string"},altAttachment:{type:"string"},RoundImage:{type:"boolean",default:!1},displayphone:{type:"boolean",default:!1},displayemail:{type:"boolean",default:!1},alignment:{type:"string",selector:"a"},borderSize:{default:1,type:"number"},borderRadius:{default:0,type:"number"},bordercolor:{type:"string",default:"#000000"},backgroundColor:{type:"string",default:"#ffffff"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},facebookURL:{type:"url"},twitterURL:{type:"url"},xingURL:{type:"url"},linkedURL:{type:"url"}};t.a=[{attributes:i,save:function(e){var t,l=e.attributes,a=(l.align,l.imagePosition,l.horizontalPos),i=l.verticalPos,c=l.noWrap,m=(l.title,l.subtitle,l.bio,l.emailAddress,l.imageColumnWidth),s=(l.phone,l.RoundImage,l.backgroundColor),p=l.bordercolor,u=l.borderSize,d=l.borderRadius,b=l.facebookURL,g=l.twitterURL,w=l.linkedURL,f=l.xingURL,h=l.RoundImage?{borderRadius:"50%"}:{borderRadius:"0px"},E=l.displayphone?{display:"none"}:{display:"block"},v=l.displayemail?{display:"none"}:{display:"block"},y=function(){return"center"==a?wp.element.createElement("div",{className:"ce-gallery"},wp.element.createElement("div",{class:"ce-outer"},wp.element.createElement("div",{class:"ce-inner"},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement("img",{style:h,src:l.mediaURL,alt:l.altAttachment,width:"200",height:"200"})))))):wp.element.createElement("div",{className:"ce-gallery",style:{width:"intext"==i?m+"%":"auto"}},wp.element.createElement("div",{className:"ce-row"},wp.element.createElement("div",{className:"ce-column"},wp.element.createElement("img",{style:h,src:l.mediaURL,alt:l.altAttachment,width:"200",height:"200"}))))};return wp.element.createElement(o,null,wp.element.createElement("div",{style:{backgroundColor:s,border:"solid",borderColor:p,borderRadius:d,borderWidth:u}},1!=c&&wp.element.createElement("header",null),wp.element.createElement("div",{className:r()(e.className,"ce-textpic",(t={},n(t,"ce-"+a,!0),n(t,"ce-"+i,!0),n(t,"no-wrap",c),t))},"below"!=i&&wp.element.createElement(o,null,y()),wp.element.createElement("div",{className:"ce-bodytext"},wp.element.createElement("h4",{className:"title"},l.title),wp.element.createElement("p",{className:"subtitle"},l.subtitle),wp.element.createElement("p",{className:"description"},l.bio),wp.element.createElement("a",{href:"mailto:"+l.emailAddress,class:"av-icon-char",target:"_blank",rel:"noopener noreferrer"},wp.element.createElement("i",{style:v,class:"fa fa-envelope"}),l.emailAddress),wp.element.createElement("p",{class:"av-icon-char"},wp.element.createElement("i",{style:E,class:"fa fa-phone"}),l.phone),wp.element.createElement("div",{class:"social-icons"},b&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.facebookURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-facebook"}))),g&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.twitterURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-twitter "}))),f&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.xingURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-xing"}))),w&&wp.element.createElement("li",null,wp.element.createElement("a",{href:l.linkedURL,class:"av-icon-char"},wp.element.createElement("i",{class:"fa fa-linkedin"}))))),"below"==i&&wp.element.createElement(o,null,y()))))}}]},function(e,t){},function(e,t){}]);