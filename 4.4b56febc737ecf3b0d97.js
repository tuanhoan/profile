(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{X3zk:function(n,o,r){"use strict";r.r(o),r.d(o,"LoginModule",(function(){return g}));var t=r("ofXK"),e=r("3Pt+"),i=r("fXoL"),a=r("ocnv"),s=r("B+r4"),m=r("PTRe"),c=r("OzZK"),l=r("RwU8"),u=r("C2AL");let b=(()=>{class n{constructor(n){this.fb=n,this.user={username:"admin",password:"admin",email:"ntanh.hutech@gmail.com",title:"H\u1ecdc l\u1eadp tr\xecnh v\u1edbi JSON"}}submitForm(){for(const n in this.validateForm.controls)this.validateForm.controls[n].markAsDirty(),this.validateForm.controls[n].updateValueAndValidity()}login(n){this.validateForm.value.userName==this.user.username&&this.validateForm.value.password==this.user.password?alert("sucess!"):alert("fail")}ngOnInit(){this.validateForm=this.fb.group({userName:[null,[e.o.required]],password:[null,[e.o.required]],remember:[!0]})}}return n.\u0275fac=function(o){return new(o||n)(i.Ob(e.d))},n.\u0275cmp=i.Ib({type:n,selectors:[["app-login"]],decls:22,vars:4,consts:[["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userName","placeholder","Username"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType","click"]],template:function(n,o){1&n&&(i.Ub(0,"form",0),i.cc("ngSubmit",(function(){return o.submitForm()})),i.Ub(1,"nz-form-item"),i.Ub(2,"nz-form-control",1),i.Ub(3,"nz-input-group",2),i.Pb(4,"input",3),i.Tb(),i.Tb(),i.Tb(),i.Ub(5,"nz-form-item"),i.Ub(6,"nz-form-control",4),i.Ub(7,"nz-input-group",5),i.Pb(8,"input",6),i.Tb(),i.Tb(),i.Tb(),i.Ub(9,"div",7),i.Ub(10,"div",8),i.Ub(11,"label",9),i.Ub(12,"span"),i.Hc(13,"Remember me"),i.Tb(),i.Tb(),i.Tb(),i.Ub(14,"div",8),i.Ub(15,"a",10),i.Hc(16,"Forgot password"),i.Tb(),i.Tb(),i.Tb(),i.Ub(17,"button",11),i.cc("click",(function(n){return o.login(n)})),i.Hc(18,"Log in"),i.Tb(),i.Hc(19," Or "),i.Ub(20,"a"),i.Hc(21," register now! "),i.Tb(),i.Tb()),2&n&&(i.nc("formGroup",o.validateForm),i.Ab(10),i.nc("nzSpan",12),i.Ab(4),i.nc("nzSpan",12),i.Ab(3),i.nc("nzType","primary"))},directives:[e.p,e.l,a.b,e.g,s.c,a.c,s.a,a.a,m.c,m.b,e.c,e.k,e.f,c.a,l.a,u.a],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}[nz-form][_ngcontent-%COMP%]{max-width:600px}button[_ngcontent-%COMP%]{margin-left:8px}"]}),n})();var p=r("dEAy"),f=r("tyNb");const d=[{path:"",component:b}];let g=(()=>{class n{}return n.\u0275mod=i.Mb({type:n}),n.\u0275inj=i.Lb({factory:function(o){return new(o||n)},providers:[],imports:[[f.g.forChild(d),t.c,a.d,e.h,e.n,c.c,m.e,p.a]]}),n})()}}]);