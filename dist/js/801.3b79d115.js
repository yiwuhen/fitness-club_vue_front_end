"use strict";(self["webpackChunkfitness_thousand_strategies"]=self["webpackChunkfitness_thousand_strategies"]||[]).push([[801],{1801:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{margin:"0 auto"}},[e("el-container",{staticStyle:{width:"1200px",margin:"0 auto",height:"auto"}},[e("el-main",[e("div",[e("p",{staticStyle:{"font-size":"40px","font-weight":"bold","margin-bottom":"1px"}},[t._v(t._s(t.tableData.title)+" ")]),e("div",{staticStyle:{"text-align":"left","margin-top":"10px","margin-bottom":"-20px","margin-left":"10px"}},[e("b",{staticStyle:{"font-size":"14px","text-align":"right",color:"#404040"}},[t._v("浏览量:  "+t._s(t.tableData.viewCount))])]),e("div",{staticStyle:{"text-align":"right"}},[e("b",{staticStyle:{"font-size":"12px","text-align":"right",color:"#636363"}},[t._v("发布时间:  "+t._s(t.tableData.gmtModified))])]),e("hr"),e("p",{domProps:{innerHTML:t._s(t.tableData.content)}})])]),e("el-divider"),e("el-footer",{staticStyle:{height:"auto","text-align":"center"}},[e("a",{staticStyle:{"margin-left":"10px","text-decoration":"none",color:"#1a1a1a"},attrs:{href:"javascript:void(0);"},on:{click:t.setDisplay}},[e("span",{staticStyle:{"text-align":"center","font-size":"20px","font-weight":"bold"}})])])],1)],1)},l=[],o={data(){return{tableData:[],textarea1:"",show:!0,activeIndex2:""}},methods:{setDisplay:function(){this.show=!0},setHide:function(){this.show=!1},getValue(t){console.log(t)},loadArticleList(){let t=this.$route.query.id;console.log(this.$route),console.log("文章id:"+t);let e="http://localhost:10001/articles/front/"+t;console.log("url = "+e),this.axios.get(e).then((t=>{let e=t.data;this.tableData=e.data,console.log("文章标题:"+this.tableData.title)}))}},created(){},mounted(){this.loadArticleList()}},s=o,n=a(1001),r=(0,n.Z)(s,i,l,!1,null,null,null),c=r.exports}}]);
//# sourceMappingURL=801.3b79d115.js.map