"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[600],{600:(C,g,c)=>{c.r(g),c.d(g,{AddPageModule:()=>j});var m=c(177),d=c(4341),r=c(7896),p=c(4964),e=c(3953),u=c(8079);let _=(()=>{var i;class s{constructor(o){this.firestore=o}addTest(o){return this.firestore.collection("tests").add(o)}addPack(o){return this.firestore.collection("packs").add(o)}}return(i=s).\u0275fac=function(o){return new(o||i)(e.KVO(u.Qe))},i.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"}),s})();function M(i,s){if(1&i){const t=e.RV6();e.j41(0,"form",5),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.addTest())}),e.j41(1,"ion-item")(2,"ion-label",6),e.EFF(3,"Nom"),e.k0s(),e.j41(4,"ion-input",7),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.test.name,n)||(a.test.name=n),e.Njj(n)}),e.k0s()(),e.j41(5,"ion-item")(6,"ion-label",6),e.EFF(7,"Description"),e.k0s(),e.j41(8,"ion-input",8),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.test.description,n)||(a.test.description=n),e.Njj(n)}),e.k0s()(),e.j41(9,"ion-item")(10,"ion-label",6),e.EFF(11,"Prix"),e.k0s(),e.j41(12,"ion-input",9),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.test.price,n)||(a.test.price=n),e.Njj(n)}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-label",6),e.EFF(15,"Dur\xe9e"),e.k0s(),e.j41(16,"ion-input",10),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.test.time,n)||(a.test.time=n),e.Njj(n)}),e.k0s()(),e.j41(17,"ion-button",11),e.EFF(18,"Ajouter le test"),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(4),e.R50("ngModel",t.test.name),e.R7$(4),e.R50("ngModel",t.test.description),e.R7$(4),e.R50("ngModel",t.test.price),e.R7$(4),e.R50("ngModel",t.test.time)}}function f(i,s){if(1&i){const t=e.RV6();e.j41(0,"form",5),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.addPack())}),e.j41(1,"ion-item")(2,"ion-label",6),e.EFF(3,"Nom"),e.k0s(),e.j41(4,"ion-input",12),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.name,n)||(a.pack.name=n),e.Njj(n)}),e.k0s()(),e.j41(5,"ion-item")(6,"ion-label",6),e.EFF(7,"Description"),e.k0s(),e.j41(8,"ion-input",13),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.description,n)||(a.pack.description=n),e.Njj(n)}),e.k0s()(),e.j41(9,"ion-item")(10,"ion-label",6),e.EFF(11,"Instruction"),e.k0s(),e.j41(12,"ion-input",14),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.instruction,n)||(a.pack.instruction=n),e.Njj(n)}),e.k0s()(),e.j41(13,"ion-item")(14,"ion-label",6),e.EFF(15,"Liste des tests"),e.k0s(),e.j41(16,"ion-input",15),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.listTest,n)||(a.pack.listTest=n),e.Njj(n)}),e.k0s()(),e.j41(17,"ion-item")(18,"ion-label",6),e.EFF(19,"Prix"),e.k0s(),e.j41(20,"ion-input",16),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.price,n)||(a.pack.price=n),e.Njj(n)}),e.k0s()(),e.j41(21,"ion-item")(22,"ion-label",6),e.EFF(23,"Dur\xe9e"),e.k0s(),e.j41(24,"ion-input",17),e.mxI("ngModelChange",function(n){e.eBV(t);const a=e.XpG();return e.DH7(a.pack.time,n)||(a.pack.time=n),e.Njj(n)}),e.k0s()(),e.j41(25,"ion-button",11),e.EFF(26,"Ajouter le pack"),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(4),e.R50("ngModel",t.pack.name),e.R7$(4),e.R50("ngModel",t.pack.description),e.R7$(4),e.R50("ngModel",t.pack.instruction),e.R7$(4),e.R50("ngModel",t.pack.listTest),e.R7$(4),e.R50("ngModel",t.pack.price),e.R7$(4),e.R50("ngModel",t.pack.time)}}const h=[{path:"",component:(()=>{var i;class s{constructor(o){this.firebaseService=o,this.selectedSegment="test",this.test={name:"",description:"",price:0,time:""},this.pack={name:"",description:"",instruction:"",listTest:"",price:0,time:""}}onSegmentChange(){this.test={name:"",description:"",price:0,time:""},this.pack={name:"",description:"",instruction:"",listTest:"",price:0,time:""}}addTest(){this.firebaseService.addTest(this.test).then(()=>{alert("Test ajout\xe9 avec succ\xe8s")}).catch(o=>{console.error("Erreur lors de l'ajout du test:",o)})}addPack(){this.firebaseService.addPack(this.pack).then(()=>{alert("Pack ajout\xe9 avec succ\xe8s")}).catch(o=>{console.error("Erreur lors de l'ajout du pack:",o)})}}return(i=s).\u0275fac=function(o){return new(o||i)(e.rXU(_))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-add"]],decls:14,vars:4,consts:[[1,"ion-padding",3,"fullscreen"],[3,"ngModelChange","ionChange","ngModel"],["value","test"],["value","pack"],[3,"ngSubmit",4,"ngIf"],[3,"ngSubmit"],["position","floating"],["type","text","name","testName",3,"ngModelChange","ngModel"],["type","text","name","testDescription",3,"ngModelChange","ngModel"],["type","number","name","testPrice",3,"ngModelChange","ngModel"],["type","text","name","testTime",3,"ngModelChange","ngModel"],["expand","block","type","submit"],["type","text","name","packName",3,"ngModelChange","ngModel"],["type","text","name","packDescription",3,"ngModelChange","ngModel"],["type","text","name","packInstruction",3,"ngModelChange","ngModel"],["type","text","name","packListTest",3,"ngModelChange","ngModel"],["type","number","name","packPrice",3,"ngModelChange","ngModel"],["type","text","name","packTime",3,"ngModelChange","ngModel"]],template:function(o,n){1&o&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Ajouter un test ou un pack"),e.k0s()()(),e.j41(4,"ion-content",0)(5,"ion-segment",1),e.mxI("ngModelChange",function(l){return e.DH7(n.selectedSegment,l)||(n.selectedSegment=l),l}),e.bIt("ionChange",function(){return n.onSegmentChange()}),e.j41(6,"ion-segment-button",2)(7,"ion-label"),e.EFF(8,"Test"),e.k0s()(),e.j41(9,"ion-segment-button",3)(10,"ion-label"),e.EFF(11,"Pack"),e.k0s()()(),e.DNE(12,M,19,4,"form",4)(13,f,27,6,"form",4),e.k0s()),2&o&&(e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(),e.R50("ngModel",n.selectedSegment),e.R7$(7),e.Y8G("ngIf","test"===n.selectedSegment),e.R7$(),e.Y8G("ngIf","pack"===n.selectedSegment))},dependencies:[m.bT,d.qT,d.BC,d.cb,d.vS,d.cV,r.Jm,r.W9,r.eU,r.$w,r.uz,r.he,r.Gp,r.eP,r.BC,r.ai,r.su,r.Je,r.Gw],styles:["ion-header[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-primary-contrast)}ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]{margin:1rem}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:1rem}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:1rem}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:1rem}"]}),s})()}];let k=(()=>{var i;class s{}return(i=s).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.iI.forChild(h),p.iI]}),s})(),j=(()=>{var i;class s{}return(i=s).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[m.MD,d.YN,r.bv,k]}),s})()}}]);