"use strict";(self.webpackChunklazy_loading_recipes_angular=self.webpackChunklazy_loading_recipes_angular||[]).push([[961],{7961:(L,T,c)=>{c.r(T),c.d(T,{DashboardModule:()=>k});var n=c(9808),C=c(3954),_=c(4100);function S(l,u,m,p,f,M,y){try{var v=l[M](y),i=v.value}catch(o){return void m(o)}v.done?u(i):Promise.resolve(i).then(p,f)}function x(l){return function(){var u=this,m=arguments;return new Promise(function(p,f){var M=l.apply(u,m);function y(i){S(M,p,f,y,v,"next",i)}function v(i){S(M,p,f,y,v,"throw",i)}y(void 0)})}}var d=c(5e3),A=c(3752),D=c(9224),b=c(7423);const G=["container"],w=[{path:"",component:(()=>{class l{constructor(){}addBarComponent(){var m=this;return x(function*(){m.container.clear(),m.container.createComponent(A.u)})()}showWeatherComponent(){var m=this;return x(function*(){m.container.clear();const p=yield Promise.all([c.e(30),c.e(238)]).then(c.bind(c,3238)).then(M=>M.WeatherDashboardComponent);m.container.createComponent(p).instance.headingStart="Something Funny "})()}ngOnInit(){}}return l.\u0275fac=function(m){return new(m||l)},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-dashboard"]],viewQuery:function(m,p){if(1&m&&d.Gf(G,5,d.s_b),2&m){let f;d.iGM(f=d.CRH())&&(p.container=f.first)}},decls:14,vars:0,consts:[["cols","2"],["mat-button","",3,"click"],["container",""]],template:function(m,p){1&m&&(d.TgZ(0,"mat-grid-list",0),d.TgZ(1,"mat-grid-tile"),d.TgZ(2,"mat-card"),d._UZ(3,"app-bar-chart"),d.qZA(),d.qZA(),d.TgZ(4,"mat-grid-tile"),d.TgZ(5,"mat-card"),d._UZ(6,"app-bar-chart"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(7,"button",1),d.NdJ("click",function(){return p.addBarComponent()}),d._uU(8," Show Barchart Component\n"),d.qZA(),d.TgZ(9,"button",1),d.NdJ("click",function(){return p.showWeatherComponent()}),d._uU(10," Show Weather Component\n"),d.qZA(),d.TgZ(11,"mat-card"),d.GkF(12,null,2),d.qZA())},directives:[C.Il,C.DX,D.a8,A.u,b.lW],styles:[""]}),l})()}];let H=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[_.Bz.forChild(w)],_.Bz]}),l})();var F=c(80);const E=[C.N6,D.QW,b.ot];let k=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[[...E,n.ez,H,F.m]]}),l})()},9224:(L,T,c)=>{c.d(T,{a8:()=>f,QW:()=>v,$j:()=>w,n5:()=>I});var n=c(5e3),C=c(6360),_=c(508);const S=["*",[["mat-card-footer"]]],x=["*","mat-card-footer"];let I=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275dir=n.lG2({type:i,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),i})(),w=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275dir=n.lG2({type:i,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),i})(),f=(()=>{class i{constructor(s){this._animationMode=s}}return i.\u0275fac=function(s){return new(s||i)(n.Y36(C.Qb,8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(s,r){2&s&&n.ekj("_mat-animation-noopable","NoopAnimations"===r._animationMode)},exportAs:["matCard"],ngContentSelectors:x,decls:2,vars:0,template:function(s,r){1&s&&(n.F$t(S),n.Hsn(0),n.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),i})(),v=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[_.BQ],_.BQ]}),i})()},3954:(L,T,c)=>{c.d(T,{Il:()=>i,N6:()=>o,DX:()=>w});var n=c(5e3),C=c(508),_=c(3191),S=c(226);const x=["*"];class b{constructor(){this.columnIndex=0,this.rowIndex=0}get rowCount(){return this.rowIndex+1}get rowspan(){const e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(a=>this._trackTile(a))}_trackTile(e){const t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new G(this.rowIndex,t)}_findMatchingGap(e){let t=-1,a=-1;do{this.columnIndex+e>this.tracker.length?(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),a=this._findGapEndIndex(t)):(t=this.tracker.indexOf(0,this.columnIndex),-1!=t?(a=this._findGapEndIndex(t),this.columnIndex=t+1):(this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),a=this._findGapEndIndex(t)))}while(a-t<e||0==a);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(0!=this.tracker[t])return t;return this.tracker.length}_markTilePosition(e,t){for(let a=0;a<t.colspan;a++)this.tracker[e+a]=t.rowspan}}class G{constructor(e,t){this.row=e,this.col=t}}const I=new n.OlP("MAT_GRID_LIST");let w=(()=>{class r{constructor(t,a){this._element=t,this._gridList=a,this._rowspan=1,this._colspan=1}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round((0,_.su)(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round((0,_.su)(t))}_setStyle(t,a){this._element.nativeElement.style[t]=a}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(n.SBq),n.Y36(I,8))},r.\u0275cmp=n.Xpm({type:r,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,a){2&t&&n.uIk("rowspan",a.rowspan)("colspan",a.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:x,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(t,a){1&t&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],encapsulation:2,changeDetection:0}),r})();const l=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;class u{constructor(){this._rows=0,this._rowspan=0}init(e,t,a,h){this._gutterSize=y(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=a,this._direction=h}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return 0===t?"0":M(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,a){let h=100/this._cols,g=(this._cols-1)/this._cols;this.setColStyles(e,a,h,g),this.setRowStyles(e,t,h,g)}setColStyles(e,t,a,h){let g=this.getBaseTileSize(a,h);e._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(g,t)),e._setStyle("width",M(this.getTileSize(g,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}}class m extends u{constructor(e){super(),this.fixedRowHeight=e}init(e,t,a,h){super.init(e,t,a,h),this.fixedRowHeight=y(this.fixedRowHeight),l.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",M(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",M(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}class p extends u{constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,a,h){this.baseTileHeight=this.getBaseTileSize(a/this.rowHeightRatio,h),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",M(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",M(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){const t=e.split(":");this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}}class f extends u{setRowStyles(e,t){let g=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);e._setStyle("top",this.getTilePosition(g,t)),e._setStyle("height",M(this.getTileSize(g,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}}function M(r){return`calc(${r})`}function y(r){return r.match(/([A-Za-z%]+)$/)?r:`${r}px`}let i=(()=>{class r{constructor(t,a){this._element=t,this._dir=a,this._gutter="1px"}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round((0,_.su)(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${null==t?"":t}`}get rowHeight(){return this._rowHeight}set rowHeight(t){const a=`${null==t?"":t}`;a!==this._rowHeight&&(this._rowHeight=a,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new f:t&&t.indexOf(":")>-1?new p(t):new m(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new b);const t=this._tileCoordinator,a=this._tiles.filter(g=>!g._gridList||g._gridList===this),h=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,a),this._tileStyler.init(this.gutterSize,t,this.cols,h),a.forEach((g,R)=>{const z=t.positions[R];this._tileStyler.setStyle(g,z.row,z.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(n.SBq),n.Y36(S.Is,8))},r.\u0275cmp=n.Xpm({type:r,selectors:[["mat-grid-list"]],contentQueries:function(t,a,h){if(1&t&&n.Suo(h,w,5),2&t){let g;n.iGM(g=n.CRH())&&(a._tiles=g)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,a){2&t&&n.uIk("cols",a.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[n._Bn([{provide:I,useExisting:r}])],ngContentSelectors:x,decls:2,vars:0,template:function(t,a){1&t&&(n.F$t(),n.TgZ(0,"div"),n.Hsn(1),n.qZA())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}\n"],encapsulation:2,changeDetection:0}),r})(),o=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[C.uc,C.BQ],C.uc,C.BQ]}),r})()}}]);