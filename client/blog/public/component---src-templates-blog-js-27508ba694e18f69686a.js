(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function O(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function j(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+o+s+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(z,(0,d.default)({ref:t,src:a},n,{ariaHidden:o}));return i.length>1?l.default.createElement("picture",null,r(i),s):s})),z=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:E?1:0,transition:P?"opacity "+y+"ms":"none"},s),T="boolean"==typeof b?"lightgray":b,k={transitionDelay:y+"ms"},C=(0,d.default)({opacity:this.state.imgLoaded?0:1},P&&k,{},s,{},f),q={title:t,alt:this.state.isVisible?"":a,style:C,className:p,itemProp:S};if(m){var N=m,M=g(m);return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),T&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&k)}),M.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:q,imageVariants:N,generateSources:x}),M.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:q,imageVariants:N,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,O(N),l.default.createElement(z,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:N}))}}))}if(h){var H=h,W=g(h),U=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete U.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},P&&k)}),W.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:q,imageVariants:H,generateSources:x}),W.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:q,imageVariants:H,generateSources:j}),this.state.isVisible&&l.default.createElement("picture",null,O(H),l.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:H}))}}))}return null},t}(l.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});P.propTypes={resolutions:V,sizes:T,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([T,c.default.arrayOf(T)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=P;t.default=k},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("v9g0"),a("q1tI"),a("9eSz");var i=a("qKvR"),r=a("VUD3"),n=a("wtQ5"),o=a("7oih"),s=a("JB2W"),d=a("Sw63"),l={name:"x566xh",styles:"margin-top:30px;margin-bottom:10px;"},c={name:"1q7njkh",styles:"margin-top:10px;"},u={name:"46b038",styles:"margin-top:30px;"},f={name:"15ijm9t",styles:"margin:50px 0;"};t.default=function(e){var t=e.data,a=t.site,p=t.allMdx,g=e.pageContext,m=g.pagination,h=(g.categories,m.page),b=m.nextPagePath,y=m.previousPagePath,v=h.map((function(e){return p.edges.find((function(t){return t.node.id===e}))})).filter((function(e){return void 0!==e}));return Object(i.d)(o.a,{site:a,noSubscribeForm:!0},Object(i.d)(n.a,null),Object(i.d)(r.a,{noVerticalPadding:!0},v.map((function(e){var t=e.node;return Object(i.d)("div",{key:t.id,css:Object(i.c)(":not(:first-of-type){margin-top:60px;",d.a,"{margin-top:40px;}",d.b,"{margin-top:20px;}}:first-of-type{margin-top:20px;",d.b,"{margin-top:20px;}}.gatsby-image-wrapper{}",d.b,"{padding:20px;}display:flex;flex-direction:column;")},t.frontmatter.banner&&Object(i.d)("div",{css:Object(i.c)("padding:60px 60px 40px 60px;",d.b,"{padding:20px;}")},Object(i.d)(s.a,{"aria-label":"View "+t.frontmatter.title+" article",to:"/"+t.fields.slug})),Object(i.d)("h2",{css:l},Object(i.d)(s.a,{"aria-label":"View "+t.frontmatter.title+" article",to:"/"+t.fields.slug},t.frontmatter.title)),Object(i.d)("p",{css:c},t.excerpt)," ",Object(i.d)(s.a,{to:"/"+t.fields.slug,"aria-label":'view "'+t.frontmatter.title+'" article'},"Read Article →"))})),Object(i.d)("div",{css:u},b&&Object(i.d)(s.a,{to:b,"aria-label":"View next page"},"Next Page →"),y&&Object(i.d)(s.a,{to:y,"aria-label":"View previous page"},"← Previous Page")),Object(i.d)("hr",{css:f})))};var p="4184737020"},"eXD+":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Siva Kannan","description":"This is where they post things!","canonicalUrl":"https://your-site.io","image":"images/logo.png","author":{"name":"Siva Kannan"},"organization":{"name":"Siva Kannan","url":"https://your-site.io","logo":"images/logo.png"},"social":{"twitter":"@_siva_kannan","fbAppID":""}}}}}')},wtQ5:function(e,t,a){"use strict";var i=a("eXD+"),r=a("33yf"),n=a.n(r),o=a("q1tI"),s=a.n(o),d=a("TJpk"),l=a.n(d),c=a("Wbzz"),u=(a("pJf4"),a("qKvR")),f=s.a.memo((function(e){var t=e.author,a=e.canonicalUrl,i=e.datePublished,r=e.defaultTitle,n=e.description,o=e.image,s=e.isBlogPost,d=e.organization,c=e.title,f=e.url,p=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:c,alternateName:r}],g=s?[].concat(p,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":f,name:c,image:o}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:c,alternateName:r,headline:c,image:{"@type":"ImageObject",url:o},description:n,author:{"@type":"Person",name:t.name},publisher:{"@type":"Organization",url:d.url,logo:d.logo,name:d.name},mainEntityOfPage:{"@type":"WebSite","@id":a},datePublished:i}]):p;return Object(u.d)(l.a,null,Object(u.d)("script",{type:"application/ld+json"},JSON.stringify(g)))})),p=a("6v7h"),g=a.n(p),m=function(e){var t=e.postData,a=e.frontmatter,r=void 0===a?{}:a,o=e.postImage,d=e.isBlogPost;return Object(u.d)(c.StaticQuery,{query:"3550155404",render:function(e){var a=e.site.siteMetadata,i=r||t.childMarkdownRemark.frontmatter||{},c=d?i.title:g.a.siteTitle,p=i.description||a.description,m=o?""+a.canonicalUrl+o:a.image,h=i.slug?""+a.canonicalUrl+n.a.sep+i.slug:a.canonicalUrl,b=!!d&&i.datePublished;return Object(u.d)(s.a.Fragment,null,Object(u.d)(l.a,null,Object(u.d)("title",null,c),Object(u.d)("meta",{name:"description",content:p}),Object(u.d)("meta",{name:"image",content:m}),Object(u.d)("meta",{property:"og:url",content:h}),d?Object(u.d)("meta",{property:"og:type",content:"article"}):null,Object(u.d)("meta",{property:"og:title",content:c}),Object(u.d)("meta",{property:"og:description",content:p}),Object(u.d)("meta",{property:"og:image",content:m}),Object(u.d)("meta",{property:"fb:app_id",content:a.social.fbAppID}),Object(u.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(u.d)("meta",{name:"twitter:creator",content:a.social.twitter}),Object(u.d)("meta",{name:"twitter:title",content:c}),Object(u.d)("meta",{name:"twitter:description",content:p}),Object(u.d)("meta",{name:"twitter:image",content:m})),Object(u.d)(f,{isBlogPost:d,url:h,title:c,image:m,description:p,datePublished:b,canonicalUrl:a.canonicalUrl,author:a.author,organization:a.organization,defaultTitle:a.title}))},data:i})};m.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};t.a=m}}]);
//# sourceMappingURL=component---src-templates-blog-js-27508ba694e18f69686a.js.map