(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{qgsh:function(n,i,t){"use strict";t.r(i),t.d(i,"TuanHoanModule",(function(){return v}));var o=t("tyNb"),e=t("Etcd"),c=t("ofXK"),a=t("3Pt+"),s=t("OzZK"),r=t("bE2y"),d=t("ZE2D"),b=t("JA5x"),g=t("B+r4"),u=t("FwiY"),l=t("fXoL"),p=t("RwU8"),h=t("C2AL");function z(n,i){if(1&n&&l.Pb(0,"img",6),2&n){const n=l.fc();l.oc("src",n.image,l.yc)}}const m=function(){return{xs:8,sm:16,md:24,lg:32}};let T=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=l.Ib({type:n,selectors:[["app-card"]],inputs:{image:"image",tittle:"tittle",description:"description"},decls:7,vars:5,consts:[["nz-row","","nzAlign","middle",3,"nzGutter"],["nz-col","",1,"gutter-row",3,"nzSpan"],[1,"inner-box"],["nzHoverable","",2,"width","240px",3,"nzCover"],["nzTitle","{tittle}",3,"nzDescription"],["coverTemplate",""],["alt","qrcode",3,"src"]],template:function(n,i){if(1&n&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"nz-card",3),l.Pb(4,"nz-card-meta",4),l.Tb(),l.Fc(5,z,1,1,"ng-template",null,5,l.Gc),l.Tb(),l.Tb(),l.Tb()),2&n){const n=l.vc(6);l.nc("nzGutter",l.pc(4,m)),l.Ab(1),l.nc("nzSpan",6),l.Ab(2),l.nc("nzCover",n),l.Ab(1),l.oc("nzDescription",i.description)}},directives:[g.c,g.a,b.a,b.b],styles:[""]}),n})();const f=function(){return{xs:8,sm:16,md:24,lg:32}};let w=(()=>{class n{constructor(){this.img="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/120093975_2941610089272845_4973677147199946437_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=6NjUaZMKUVEAX-rm7ox&_nc_oc=AQn_EcBFbtXSUr6sJf5cpIN1QBakqgEzzoiYgjvB4o804_0xfazK_DOvBTdOqOCGVX8&_nc_ht=scontent.fvca1-2.fna&oh=43b173089fa70cca4fd69a01e60f60c8&oe=5F90C4C8",this.tittle="Tu\u1ea5n Ho\xe0n",this.description="this is my profile",this.facebook="fb://profile/100015369369316",this.zalo="https://zalo.me/84948502258",this.instagram="instagram://user?username=tuanhoanmd",this.tiktok="#",this.gmail="#",this.skype="#",this.twitter="twitter://profile/tuanhoan",this.isLoadingOne=!1,this.isLoadingTwo=!1,this.isLoadingThree=!1,this.isLoadingFour=!1,this.isLoadingFive=!1,this.isLoadingSix=!1,this.isLoadingSeven=!1,this.isLoadingEight=!1}loadFacebook(){this.isLoadingOne=!0,setTimeout(()=>{this.isLoadingOne=!1},5e3),window.open(this.facebook)}loadZalo(){this.isLoadingTwo=!0,setTimeout(()=>{this.isLoadingTwo=!1},5e3),window.open(this.zalo)}loadInstagram(){this.isLoadingThree=!0,setTimeout(()=>{this.isLoadingThree=!1},5e3),window.open(this.instagram)}loadTiktok(){this.isLoadingFour=!0,setTimeout(()=>{this.isLoadingFour=!1},5e3),window.open(this.tiktok)}loadSkype(){this.isLoadingFive=!0,setTimeout(()=>{this.isLoadingFive=!1},5e3),window.open(this.skype)}loadWechat(){this.isLoadingSix=!0,setTimeout(()=>{this.isLoadingSix=!1},5e3),window.open("#")}loadGmail(){this.isLoadingSeven=!0,setTimeout(()=>{this.isLoadingSeven=!1},5e3),window.open(this.gmail)}loadTwitter(){this.isLoadingEight=!0,setTimeout(()=>{this.isLoadingEight=!1},5e3),window.open(this.twitter)}ngOnInit(){}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=l.Ib({type:n,selectors:[["app-tuanhoan"]],decls:25,vars:15,consts:[["nz-row","",3,"nzGutter"],["nz-col","",1,"gutter-row",3,"nzSpan"],[1,"inner-box"],["nz-button","","nzType","primary","nzBlock","",3,"nzLoading","click"],["nz-icon","","nzType","facebook","nzTheme","outline"],["nz-icon","","nzType","instagram","nzTheme","outline"],["nz-icon","","nzType","send","nzTheme","outline"],["nz-icon","","nzType","skype","nzTheme","outline"],["nz-icon","","nzType","camera","nzTheme","outline"],["nz-icon","","nzType","twitter","nzTheme","outline"],["nz-row","","nzAlign","middle",3,"nzGutter"],[3,"image","tittle","description"]],template:function(n,i){1&n&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"button",3),l.cc("click",(function(){return i.loadFacebook()})),l.Pb(4,"i",4),l.Hc(5,"Facebook"),l.Tb(),l.Ub(6,"button",3),l.cc("click",(function(){return i.loadInstagram()})),l.Pb(7,"i",5),l.Hc(8,"Instagram"),l.Tb(),l.Ub(9,"button",3),l.cc("click",(function(){return i.loadZalo()})),l.Pb(10,"i",6),l.Hc(11,"Zalo"),l.Tb(),l.Tb(),l.Tb(),l.Ub(12,"div",1),l.Ub(13,"div",2),l.Ub(14,"button",3),l.cc("click",(function(){return i.loadSkype()})),l.Pb(15,"i",7),l.Hc(16,"Skype"),l.Tb(),l.Ub(17,"button",3),l.cc("click",(function(){return i.loadTiktok})),l.Pb(18,"i",8),l.Hc(19,"TikTok"),l.Tb(),l.Ub(20,"button",3),l.cc("click",(function(){return i.loadTwitter()})),l.Pb(21,"i",9),l.Hc(22,"Twitter"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(23,"div",10),l.Pb(24,"app-card",11),l.Tb()),2&n&&(l.nc("nzGutter",l.pc(13,f)),l.Ab(1),l.nc("nzSpan",12),l.Ab(2),l.nc("nzLoading",i.isLoadingOne),l.Ab(3),l.nc("nzLoading",i.isLoadingTwo),l.Ab(3),l.nc("nzLoading",i.isLoadingThree),l.Ab(3),l.nc("nzSpan",12),l.Ab(2),l.nc("nzLoading",i.isLoadingFour),l.Ab(3),l.nc("nzLoading",i.isLoadingFive),l.Ab(3),l.nc("nzLoading",i.isLoadingSix),l.Ab(3),l.nc("nzGutter",l.pc(14,f)),l.Ab(1),l.nc("image",i.img)("tittle",i.tittle)("description",i.description))},directives:[g.c,g.a,s.a,p.a,h.a,u.a,T],styles:["[nz-button][_ngcontent-%COMP%]{margin-right:8px;margin-bottom:12px}nz-divider[_ngcontent-%COMP%]{color:#333;font-weight:400}.inner-box[_ngcontent-%COMP%]{background:#fff;padding:8px 0}"]}),n})();var L=t("Lewy");const k=[{path:"",component:w}];let v=(()=>{class n{}return n.\u0275mod=l.Mb({type:n}),n.\u0275inj=l.Lb({factory:function(i){return new(i||n)},imports:[[o.g.forChild(k),e.a,c.c,a.f,s.c,r.d,d.b,b.c,g.b,u.b,b.c,L.a],o.g]}),n})()}}]);