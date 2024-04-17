"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[339],{67339:function(e,t,n){n.r(t);var a=n(93433),r=n(29439),s=n(72791),o=n(59434),c=n(56534),i=n(86549),l=n(89307),u=n(73401),d=n(14325),m=n(70272),p=n(38302),f=n(93188),h=n(66828),x=n(26513),g=n(97736),j=n(37487),v=n(64880),Z=n(28021),N=n(44279),C=n(63144),S=n(8755),y=n(52417),P=n(76082),F=n(62149),b=n(31334),I=n(54470),A=n(25878),k=n(55471),w=n(46627),z=n(94575),B=n(80184);t.default=function(){var e=(0,o.I0)(),t=(0,v.k6)(),n=(0,c.VY)(),D=(0,z.Z)(),E=(0,v.$B)().params.id,U=(0,o.v9)((function(e){return e.productDetails})),W=U.error,q=U.product,O=(0,o.v9)((function(e){return e.deleteUpdateProduct})),T=O.loading,R=O.error,L=O.isUpdated,M=(0,s.useState)(""),G=(0,r.Z)(M,2),H=G[0],K=G[1],V=(0,s.useState)(0),Y=(0,r.Z)(V,2),$=Y[0],_=Y[1],J=(0,s.useState)(""),Q=(0,r.Z)(J,2),X=Q[0],ee=Q[1],te=(0,s.useState)(""),ne=(0,r.Z)(te,2),ae=ne[0],re=ne[1],se=(0,s.useState)(!1),oe=(0,r.Z)(se,2),ce=oe[0],ie=oe[1],le=(0,s.useState)(0),ue=(0,r.Z)(le,2),de=ue[0],me=ue[1],pe=(0,s.useState)([]),fe=(0,r.Z)(pe,2),he=fe[0],xe=fe[1],ge=(0,s.useState)(""),je=(0,r.Z)(ge,2),ve=je[0],Ze=je[1],Ne=(0,s.useState)([]),Ce=(0,r.Z)(Ne,2),Se=Ce[0],ye=Ce[1],Pe=(0,s.useState)([]),Fe=(0,r.Z)(Pe,2),be=Fe[0],Ie=Fe[1],Ae=(0,s.useRef)(),ke=(0,s.useState)(!1),we=(0,r.Z)(ke,2),ze=we[0],Be=we[1];return(0,s.useEffect)((function(){q&&q._id!==E?e((0,j.KL)(E)):(K(q.name),ee(q.description),_(q.price),re(""),Ze(q.info),me(q.Stock),Ie(q.images)),W&&(n.error(W),e((0,j.b9)())),R&&(n.error(R),e((0,j.b9)())),L&&(n.success("Product Updated Successfully"),t.push("/admin/products"),e({type:Z.Ab}))}),[e,n,W,t,L,E,q,R]),(0,B.jsx)(B.Fragment,{children:T?(0,B.jsx)(l.Z,{}):(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(i.Z,{title:"Create Product"}),(0,B.jsxs)("div",{className:D.updateProduct,children:[(0,B.jsx)("div",{className:"".concat(ze?D.toggleBox1:D.firstBox1),children:(0,B.jsx)(g.Z,{})}),(0,B.jsxs)("div",{className:D.secondBox1,children:[(0,B.jsx)("div",{className:D.navBar1,children:(0,B.jsx)(w.Z,{toggleHandler:function(){console.log("toggle"),Be(!ze)}})}),(0,B.jsx)("div",{className:"".concat(D.formContainer," ").concat(D.formContainer2),children:(0,B.jsxs)("form",{className:"".concat(D.form," ").concat(D.form2),encType:"multipart/form-data",children:[(0,B.jsx)(m.Z,{className:D.avatar,children:(0,B.jsx)(F.Z,{})}),(0,B.jsx)(p.Z,{variant:"h5",component:"h1",className:D.heading,children:"Create Product"}),(0,B.jsx)(f.Z,{variant:"outlined",fullWidth:!0,className:"".concat(D.nameInput," ").concat(D.textField),label:"Product Name",required:!0,value:H,onChange:function(e){return K(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(N.Z,{position:"end",children:(0,B.jsx)(S.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Price",value:$,required:!0,fullWidth:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return _(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(N.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(P.Z,{})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Stock",value:de,required:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return me(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(N.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(d.Z,{})})}}),(0,B.jsx)(f.Z,{variant:"outlined",label:"Prodcut Info",value:ve,required:!0,className:"".concat(D.passwordInput," ").concat(D.textField),onChange:function(e){return Ze(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(N.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,B.jsx)(A.Z,{})})}}),(0,B.jsxs)("div",{className:D.selectOption,children:[!ce&&(0,B.jsx)(p.Z,{variant:"body2",className:D.labelText,children:"Choose Category"}),(0,B.jsx)(h.Z,{className:D.formControl,children:(0,B.jsxs)(I.Z,{variant:"outlined",fullWidth:!0,value:ae,onChange:function(e){re(e.target.value),ie(!0)},className:D.select,inputProps:{name:"category",id:"category-select"},MenuProps:{classes:{paper:D.menu},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},children:[!ae&&(0,B.jsx)(k.Z,{value:"",children:(0,B.jsx)("em",{children:"Choose Category"})}),["Electronics","Bags","Grocery","Furniture","Toys","Foods and beverages","Cosmetics","Shoes","Clothing","Accessories"].map((function(e){return(0,B.jsx)(k.Z,{value:e,children:e},e)}))]})})]}),(0,B.jsx)(f.Z,{variant:"outlined",fullWidth:!0,className:D.descriptionInput,label:"Product Description",multiline:!0,rows:1,value:X,onChange:function(e){return ee(e.target.value)},InputProps:{endAdornment:(0,B.jsx)(N.Z,{position:"end",children:(0,B.jsx)(u.Z,{className:D.descriptionIcon})})}}),(0,B.jsxs)("div",{className:D.root,children:[(0,B.jsx)("div",{className:D.imgIcon,children:(0,B.jsx)(b.Z,{fontSize:"large",style:{fontSize:40}})}),(0,B.jsx)("input",{type:"file",name:"avatar",className:D.input,accept:"image/*",onChange:function(e){var t=Array.from(e.target.files);xe([]),ye([]),Ie([]),t.forEach((function(e){var t=new FileReader;t.onload=function(){2===t.readyState&&(ye((function(e){return[].concat((0,a.Z)(e),[t.result])})),xe((function(e){return[].concat((0,a.Z)(e),[t.result])})))},t.readAsDataURL(e)}))},multiple:!0,style:{display:"none"},ref:Ae}),(0,B.jsx)("label",{htmlFor:"avatar-input",children:(0,B.jsx)(x.Z,{variant:"contained",color:"default",className:D.uploadAvatarButton,startIcon:(0,B.jsx)(y.Z,{style:{color:"#FFFFFF"}}),onClick:function(){Ae.current.click()},children:(0,B.jsx)("p",{className:D.uploadAvatarText,children:"Upload Images"})})})]}),Se.length>0?(0,B.jsx)(C.Z,{className:D.imageArea,children:Se&&Se.map((function(e,t){return(0,B.jsx)("img",{src:e,alt:"Product Preview",className:D.image},t)}))}):(0,B.jsx)(C.Z,{className:D.imageArea,children:be&&be.map((function(e,t){return(0,B.jsx)("img",{src:e.url,alt:"Old Product Preview",className:D.image},t)}))}),(0,B.jsx)(x.Z,{variant:"contained",className:D.loginButton,fullWidth:!0,onClick:function(t){t.preventDefault();var n=new FormData;n.set("name",H),n.set("price",$),n.set("description",X),n.set("category",ae),n.set("Stock",de),n.set("info",ve),he.forEach((function(e){n.append("images",e)})),e((0,j.nM)(E,n))},disabled:!!T,children:"Create"})]})})]})]})]})})})}}}]);
//# sourceMappingURL=339.9b747fd3.chunk.js.map