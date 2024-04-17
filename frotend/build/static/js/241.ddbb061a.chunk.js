"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[241],{46627:function(e,t,n){var r=n(4942),o=(n(72791),n(38596)),a=n(26513),i=n(98008),s=n(67025),l=n(91523),d=n(80184),c=(0,o.Z)((function(e){var t,n;return{navbar:(0,r.Z)({display:"flex",alignItems:"center",justifyContent:"space-between",zIndex:999,background:"#ffffff",width:"100%",padding:"1.5rem 1rem 1rem 1rem",boxShadow:"1px 1px 2px rgba(0, 0, 0, 0.1), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.3)"},e.breakpoints.between("999"),{flexDirection:"row",alignItems:"center",padding:"1rem"}),menuIcon:(0,r.Z)({display:"none"},e.breakpoints.down("999"),{display:"block",fontSize:"2rem","& svg":{fontSize:"2rem","&:hover":{color:"#ed1c24"}},"&:hover":{transform:"scale(1.1)"}}),dashboardHead:(t={fontSize:"2rem",fontWeight:900,color:"black",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.1)"},(0,r.Z)(t,e.breakpoints.down("sm"),{fontSize:"1.5rem",marginBottom:"0.5rem"}),(0,r.Z)(t,e.breakpoints.down("999"),{fontSize:"1.8rem",marginBottom:0}),(0,r.Z)(t,e.breakpoints.down("xs"),{marginRight:"1.5rem",fontSize:"1.8rem"}),t),contactButton:(n={padding:"10px 30px",borderRadius:"20px",boxShadow:"0px 2px 8px 0px #0000000a",cursor:"pointer",fontWeight:600,fontSize:"16px",color:"#fff",letterSpacing:"1px",background:"#414141",transition:"background-color 0.3s",marginRight:"2rem"},(0,r.Z)(n,e.breakpoints.down("sm"),{fontSize:"14px",padding:"8px 14px"}),(0,r.Z)(n,e.breakpoints.between("sm","md"),{fontSize:"14px",padding:"7px 15px"}),(0,r.Z)(n,e.breakpoints.down("xs"),{display:"none"}),(0,r.Z)(n,"&:hover",{background:"#ed1c24"}),n),headerBottom__logo_main:{height:"3.5rem",alignSelf:"center",paddingLeft:"25px","& img":{height:"100%",width:"auto"}}}}));t.Z=function(e){var t=e.toggleHandler,r=c();return(0,d.jsxs)("nav",{className:r.navbar,children:[(0,d.jsx)(s.Z,{className:r.menuIcon,onClick:t,children:(0,d.jsx)(i.Z,{fontSize:"2rem"})}),(0,d.jsx)("div",{className:r.dashboardHead,children:(0,d.jsx)(l.rU,{to:"/admin/dashboard",style:{textDecoration:"none",color:"none",width:"100%",height:"100%"},children:(0,d.jsx)("img",{src:n(23830),alt:"logo",className:r.headerBottom__logo_main})})}),(0,d.jsx)(l.rU,{to:"/contact",style:{textDecoration:"none",color:"none"},children:(0,d.jsx)(a.Z,{className:r.contactButton,children:"Contact Us"})})]})}},97736:function(e,t,n){n(72791);var r=n(64880),o=n(91523),a=n(60220),i=n(4567),s=n(5849),l=n(97235),d=n(32338),c=n(59140),m=n(42419),h=n(41992),p=n(15776),u=n(74865),x=n(37541),g=n(68535),f=n(59434),v=n(80184),b=(0,l.Z)((function(e){return{sidebar:{backgroundColor:"#fff",padding:"2rem 0",boxShadow:"2px 10px 6px rgba(0, 0, 0, 0.4)",borderRadius:"5px",margin:"0 auto",width:"100%"},avatar11:{width:"80px",height:"80px",border:"5px solid #414141",margin:"0 auto",marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},name:{fontWeight:"500",textAlign:"center",fontSize:"1rem"},email:{color:"#414141",marginBottom:"1.5rem",textAlign:"center",fontSize:"0.9rem"},divider:{height:"2px",width:"75%",backgroundColor:"#414141",margin:"2rem"},button:{marginLeft:"2rem !important",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#292929 !important",color:"white   !important",width:"70%     !important",padding:"0.8rem 2rem   !important",borderRadius:"4px !important","&:hover":{backgroundColor:"#ed1c24 !important",color:"white !important"}},sideBarMenu:{listStyleType:"none",padding:0,margin:"3rem  10px",width:"100%"},sideBarMenuItem:{display:"flex",alignItems:"center",padding:"0.9rem 1rem",borderRadius:"2px",marginTop:"1.3rem",width:"75%",boxShadow:" 4px 4px 8px rgba(0, 0, 0, 0.3)","&:hover":{backgroundColor:"#ed1c24",boxShadow:"2px 2px 6px rgba(0, 0, 0, 0.4)","& svg":{color:"white"},"& span":{color:"white !important"}},"& svg":{color:"#414141",fontSize:"26px",margin:"0 20px  0 "},"& span":{color:"#414141",fontSize:"1rem",fontWeight:"500",marginLeft:"1rem",textDecoration:"none",textDecorationLine:"none",transition:"color 0.3s ease"}}}}));t.Z=function(){var e=b(),t=(0,f.v9)((function(e){return e.userData})),n=t.user,l=t.loading,j=(0,r.k6)();return(0,v.jsx)(v.Fragment,{children:!l&&(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:e.sidebar,children:[(0,v.jsx)(a.Z,{src:n&&n.avatar.url,alt:"User Avatar",className:e.avatar11}),(0,v.jsx)(i.Z,{variant:"subtitle1",className:e.name,children:n&&n.name}),(0,v.jsx)(i.Z,{variant:"subtitle2",className:e.email,children:n&&n.email}),(0,v.jsx)("div",{className:e.divider}),(0,v.jsxs)("ul",{className:e.sideBarMenu,children:[(0,v.jsx)(o.rU,{to:"/admin/dashboard",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(d.Z,{fontSize:"large"}),(0,v.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Dashboard"]})]})}),(0,v.jsx)(o.rU,{to:"/",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(x.Z,{fontSize:"large"}),(0,v.jsx)("span",{className:e.sideBarMenuItem_text,children:"Home"})]})}),(0,v.jsx)(o.rU,{to:"/admin/products",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(c.Z,{fontSize:"large"}),(0,v.jsxs)("span",{className:e.sideBarMenuItem_text,children:[" ","Products"]})]})}),(0,v.jsx)(o.rU,{to:"/admin/new/product",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(m.Z,{fontSize:"large"}),(0,v.jsx)("span",{className:e.sideBarMenuItem_text,children:"Add Product"})]})}),(0,v.jsx)(o.rU,{to:"/admin/orders",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(h.Z,{fontSize:"large"}),(0,v.jsx)("span",{className:e.sideBarMenuItem_text,children:"Orders"})]})}),(0,v.jsx)(o.rU,{to:"/admin/reviews",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(p.Z,{fontSize:"large"}),(0,v.jsx)("span",{className:e.sideBarMenuItem_text,children:"Reviews"})]})}),(0,v.jsx)(o.rU,{to:"/contact",style:{color:"inherit",textDecoration:"none"},children:(0,v.jsxs)("li",{className:e.sideBarMenuItem,children:[(0,v.jsx)(g.Z,{fontSize:"large"}),(0,v.jsx)("span",{className:e.sideBarMenuItem_text,children:"Contact"})]})})]}),(0,v.jsx)("div",{className:e.divider}),(0,v.jsxs)(s.Z,{className:e.button,onClick:function(){j.push("/account")},variant:"contained",children:[(0,v.jsx)(u.Z,{fontSize:"large",style:{marginRight:"10px"}}),"Account"]})]})})})}},13241:function(e,t,n){n.r(t);var r=n(29439),o=n(4942),a=n(72791),i=n(56534),s=n(99225),l=n(59434),d=n(86549),c=n(46627),m=n(97736),h=n(50202),p=n(97979),u=n(89307),x=n(64880),g=n(38596),f=n(85545),v=n(70272),b=n(38302),j=n(93188),Z=n(44279),z=n(54470),w=n(55471),M=n(26513),S=n(80184),k=(0,g.Z)((function(e){return{updateUser1:{display:"flex",alignItems:"flex-start",backgroundColor:"#f1f1f1",justifyContent:"center",width:"100%",gap:"1rem",overflow:"hidden",margin:"-1.1rem 0 0 0",padding:0},firstBox_01:(0,o.Z)({width:"20%",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block"},e.breakpoints.down("999"),{display:"none"}),toggleBox_01:{width:"16rem",margin:"0rem",height:"fit-content",backgroundColor:"white",borderRadius:"5px",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)",display:"block",zIndex:"100",position:"absolute",top:"58px",left:"17px"},secondBox_01:(0,o.Z)({width:"75%",height:"fit-content",display:"flex",flexDirection:"column",margin:"-0.5rem 0 0 0",gap:"10px",justifyContent:"center"},e.breakpoints.down("999"),{width:"100%"}),navBar_01:{margin:"0rem"},formSection:{width:"100%",margin:"auto",borderRadius:"5px",height:"100vh",backgroundColor:"white",padding:"1rem 2rem"},form:{width:"350px",margin:"-1rem auto 0 auto",borderRadius:"5px",padding:"2rem"},avatar:{margin:" 8px auto",backgroundColor:"black"},textField:{marginBottom:e.spacing(2),"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input":{color:"black",padding:"12px 14px"},"& .MuiInputLabel-root":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiInputLabel-root.Mui-focused":{color:"black",fontSize:"14px",textAlign:"center"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"black",color:"black"},"& .MuiOutlinedInput-input":{padding:"13px 8px"},"&.Mui-focused fieldset":{borderColor:"black",color:"black",outline:"none"}}},heading:{textAlign:"center",marginBottom:e.spacing(3),color:"#414141",fontWeight:"bold"},nameInput:{position:"relative","& > label":{left:".2rem"},padding:"4px 0px",fontSize:"1rem",width:"100%",marginBottom:e.spacing(5.5),height:".7rem"},loginButton:{color:"#fff",backgroundColor:"#000",border:"2px solid #000",margin:"".concat(e.spacing(3),"px 0"),marginTop:"1rem","&:disabled":{backgroundColor:"#444444",color:"#FFFFFF",borderColor:"#444444"},"&:hover":{backgroundColor:"#ed1c24",color:"#fff",borderColor:"#ed1c24"}},select:{width:"100%",padding:"8px",marginBottom:e.spacing(2),fontSize:"14px",borderRadius:"4px",border:"1px solid rgba(0, 0, 0, 0.267)","&:focus":{outline:"none",border:"none"},"& .MuiList-root .MuiMenuItem-root:hover":{backgroundColor:"#ed1c24",color:"#fff"}},selectMenuPaper:{"& .MuiMenuItem-root:hover":{backgroundColor:"#ed1c24",color:"#fff"}}}}));t.default=function(){var e=(0,l.I0)(),t=(0,i.VY)(),n=(0,x.$B)().params.id,o=(0,x.k6)(),g=k(),N=(0,l.v9)((function(e){return e.userDetails})),y=N.loading,B=N.error,I=N.user,C=(0,l.v9)((function(e){return e.profileData})),H=C.loading,_=C.error,D=C.isUpdated,L=(0,a.useState)(""),U=(0,r.Z)(L,2),R=U[0],V=U[1],A=(0,a.useState)(""),F=(0,r.Z)(A,2),E=F[0],P=F[1],W=(0,a.useState)(""),O=(0,r.Z)(W,2),T=O[0],q=O[1],$=(0,a.useState)(!1),Y=(0,r.Z)($,2),G=Y[0],J=Y[1];return(0,a.useEffect)((function(){I&&I._id!==n?e((0,p.M_)(n)):(V(I.name),P(I.email),q(I.role)),B&&(t.error(B),e((0,p.b9)())),_&&(t.error(_),e((0,p.b9)())),D&&(t.success("User Updated Successfully"),o.push("/admin/users"),e({type:h.u6}))}),[e,t,B,o,D,_,I,n]),(0,S.jsx)(S.Fragment,{children:y?(0,S.jsx)(u.Z,{}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(d.Z,{title:"Update User"}),(0,S.jsxs)("div",{className:g.updateUser1,children:[(0,S.jsx)("div",{className:"".concat(G?g.toggleBox_01:g.firstBox_01),children:(0,S.jsx)(m.Z,{})}),(0,S.jsxs)("div",{className:g.secondBox_01,children:[(0,S.jsx)("div",{className:g.navBar_01,children:(0,S.jsx)(c.Z,{toggleHandler:function(){console.log("toggle"),J(!G)}})}),(0,S.jsx)("div",{className:g.formSection,children:(0,S.jsxs)("form",{className:"".concat(g.form," "),onSubmit:function(t){t.preventDefault();var r=new FormData;r.set("name",R),r.set("email",E),r.set("role",T),e((0,p.Nq)(n,r))},children:[(0,S.jsx)(v.Z,{className:g.avatar,children:(0,S.jsx)(f.Z,{})}),(0,S.jsx)(b.Z,{variant:"h5",component:"h1",className:g.heading,children:"Update Role"}),(0,S.jsx)(j.Z,{variant:"outlined",fullWidth:!0,className:"".concat(g.nameInput," ").concat(g.textField),label:"Product Name",required:!0,value:R,onChange:function(e){return V(e.target.value)}}),(0,S.jsx)(j.Z,{variant:"outlined",fullWidth:!0,className:"".concat(g.nameInput," ").concat(g.textField),label:"Email",required:!0,value:E,onChange:function(e){return P(e.target.value)},InputProps:{endAdornment:(0,S.jsx)(Z.Z,{position:"end",children:(0,S.jsx)(s.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,S.jsxs)("div",{style:{position:"relative"},children:[(0,S.jsx)("label",{htmlFor:"role_field",style:{marginLeft:"10px",fontSize:"12px",width:"300px",color:"#414141"},children:"Role*"}),(0,S.jsxs)(z.Z,{value:T,onChange:function(e){return q(e.target.value)},className:g.select,MenuProps:{classes:{paper:g.selectMenuPaper},anchorOrigin:{vertical:"bottom",horizontal:"left"},getContentAnchorEl:null},children:[(0,S.jsx)(w.Z,{value:"",children:(0,S.jsx)("em",{style:{background:"inherit",color:"#414141"},children:"Choose Role"})}),(0,S.jsx)(w.Z,{value:"admin",children:"Admin"}),(0,S.jsx)(w.Z,{value:"user",children:"User"})]})]}),(0,S.jsx)(M.Z,{id:"createProductBtn",type:"submit",fullWidth:!0,variant:"contained",className:g.loginButton,disabled:!!H||""===T,children:"Update"})]})})]})]})]})})}},44279:function(e,t,n){var r=n(87462),o=n(45987),a=n(72791),i=n(28182),s=n(38302),l=n(38317),d=n(9856),c=a.forwardRef((function(e,t){var n=e.children,l=e.classes,c=e.className,m=e.component,h=void 0===m?"div":m,p=e.disablePointerEvents,u=void 0!==p&&p,x=e.disableTypography,g=void 0!==x&&x,f=e.position,v=e.variant,b=(0,o.Z)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),j=(0,d.Y)()||{},Z=v;return v&&j.variant,j&&!Z&&(Z=j.variant),a.createElement(d.Z.Provider,{value:null},a.createElement(h,(0,r.Z)({className:(0,i.Z)(l.root,c,"end"===f?l.positionEnd:l.positionStart,u&&l.disablePointerEvents,j.hiddenLabel&&l.hiddenLabel,"filled"===Z&&l.filled,"dense"===j.margin&&l.marginDense),ref:t},b),"string"!==typeof n||g?n:a.createElement(s.Z,{color:"textSecondary"},n)))}));t.Z=(0,l.Z)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(c)},99225:function(e,t,n){var r=n(64836),o=n(75263);t.Z=void 0;var a=o(n(72791)),i=(0,r(n(44894)).default)(a.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");t.Z=i},85545:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");t.Z=i},42419:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},32338:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"}),"Dashboard");t.Z=i},37541:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");t.Z=i},41992:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"}),"ListAlt");t.Z=i},74865:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)([(0,a.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,a.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"ManageAccounts");t.Z=i},98008:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=i},59140:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)([(0,a.jsx)("path",{d:"M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"},"0"),(0,a.jsx)("path",{d:"M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z"},"1")],"PostAdd");t.Z=i},15776:function(e,t,n){var r=n(64836);t.Z=void 0;var o=r(n(45649)),a=n(80184),i=(0,o.default)((0,a.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"}),"RateReview");t.Z=i}}]);
//# sourceMappingURL=241.ddbb061a.chunk.js.map