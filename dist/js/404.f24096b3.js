"use strict";(self["webpackChunkfitness_thousand_strategies"]=self["webpackChunkfitness_thousand_strategies"]||[]).push([[404],{4404:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-main",[e("el-card",{staticClass:"box-card",staticStyle:{width:"300px",height:"400px",margin:"0 auto","margin-top":"100px"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("p",{staticStyle:{"text-align":"center","font-size":"25px","margin-top":"5px","margin-bottom":"5px"}},[t._v("欢迎登录")])]),e("div",{staticClass:"demo-input-suffix"},[e("el-input",{staticClass:"input_login",attrs:{placeholder:"请输入账号","suffix-icon":"el-icon-user-solid"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}}),e("el-input",{staticClass:"input_login",attrs:{placeholder:"请输入密码","suffix-icon":"el-icon-lock","show-password":""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),e("a",{staticStyle:{"font-size":"10px","text-decoration":"none","margin-left":"5px",color:"#409EFF"},attrs:{href:""}},[t._v("忘记密码?")])],1),e("el-row",{staticStyle:{"text-align":"center"}},[[e("el-button",{staticStyle:{"margin-top":"20px","margin-bottom":"0px"},attrs:{plain:!0,type:"primary"},on:{click:t.login}},[t._v("登录")])],e("p",[e("a",{staticStyle:{"font-size":"8px","text-decoration":"none",margin:"0 auto",color:"#797979"},attrs:{href:"reg"}},[t._v("没有账号?去注册")])])],2)],1)],1)],1)],1)},i=[],n={data(){return{user:{username:"",password:""},radio:"1",dialogVisible:!1,activeIndex:"5",activeIndex2:"",input:""}},methods:{login(){axios.post("/login",v.user).then((function(t){if(1!=t.data)return 2==t.data?(alert("密码错误!"),location.href="/login.html"):(alert("用戶名不存在"),location.href="/login.html");alert("登录成功!"),location.href="/."}))},handleSelect(t,e){console.log(t,e)}}},o=n,r=a(1001),l=(0,r.Z)(o,s,i,!1,null,null,null),c=l.exports}}]);
//# sourceMappingURL=404.f24096b3.js.map