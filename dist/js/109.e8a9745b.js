"use strict";(self["webpackChunkcurrency_exchanger"]=self["webpackChunkcurrency_exchanger"]||[]).push([[109],{4381:function(n,t,e){e.d(t,{Z:function(){return o}});var a=e(3396);const c={class:"base-warning"};function i(n,t){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a.WI)(n.$slots,"default",{},void 0,!0)])}var s=e(89);const r={},l=(0,s.Z)(r,[["render",i],["__scopeId","data-v-3d99b0b5"]]);var o=l},7109:function(n,t,e){e.r(t),e.d(t,{default:function(){return C}});e(7658);var a=e(3396),c=e(4870),i=e(9242),s=e(970),r=e(4381);const l={class:"warning-wrapper"};var o={__name:"AuthPage",props:{isFailed:{type:Boolean,default:!1}},emits:["setConnection"],setup(n,{emit:t}){function e(){t("setConnection")}return(t,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,c.SU)(s.Z),{title:"Login","class-name":"big",onClick:e}),(0,a._)("div",l,[(0,a.Wm)(i.uT,{name:"base-warning-transition"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)((0,c.SU)(r.Z),null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Auth failed! Try again. ")])),_:1},512),[[i.F8,n.isFailed]])])),_:1})])],64))}},u=e(89);const d=(0,u.Z)(o,[["__scopeId","data-v-50016ffc"]]);var f=d,v=e(7584),w=e(9998);class g{static async ConnectWallet(n){const t=w.Z.GetWalletConnection(n);await t.getAccount()}}var p=e(2483),_={__name:"AuthPageController",setup(n){const t=(0,c.iH)(!1),e=(0,p.tv)();async function i(){try{await g.ConnectWallet(v.S.MetaMask),await e.push("/wallet")}catch{t.value=!0}}return(n,e)=>((0,a.wg)(),(0,a.j4)((0,c.SU)(f),{"is-failed":t.value,onSetConnection:i},null,8,["is-failed"]))}};const h=_;var C=h}}]);
//# sourceMappingURL=109.e8a9745b.js.map