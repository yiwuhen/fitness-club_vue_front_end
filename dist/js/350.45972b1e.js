"use strict";(self["webpackChunkfitness_thousand_strategies"]=self["webpackChunkfitness_thousand_strategies"]||[]).push([[350],{2350:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"Classification"},[t._l(t.categoryChildrenArr,(function(e){return a("ul",{staticStyle:{padding:"1px 20px"}},[a("div",[a("div",[a("li",{staticStyle:{padding:"10px 30px 10%",margin:"0 auto"}},[a("span",{staticStyle:{width:"144px","font-size":"18px","font-weight":"bold",color:"rgb(213, 47, 4)"}},[t._v(t._s(e.name))])])]),a("div",{staticStyle:{width:"900px",margin:"0 auto","margin-left":"170px","margin-top":"1px"}},[a("ul",{staticStyle:{padding:"10px",width:"900px","padding-top":"5px"}},t._l(e.children,(function(e){return a("li",[a("el-button",{staticStyle:{width:"100px"},on:{click:function(a){return t.LoadSubCategoryArticles(e.id)}}},[a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.name))])])],1)})),0)]),a("el-divider")],1)])})),a("div",{staticClass:"hot"},[a("ol",t._l(t.articleArr,(function(e,i){return a("li",[a("div",{staticClass:"hotItem"},[t._v(t._s(i+1))]),a("div",{staticClass:"hotContent"},[a("h2",[a("a",{attrs:{href:"/article?id="+e.id}},[t._v(t._s(e.title))])]),a("p",[a("a",{attrs:{href:"/article?id="+e.id}},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"tools"},[a("br"),a("br"),a("br"),a("i",{staticClass:"el-icon-view",staticStyle:{"margin-left":"15px"}}),a("span",{staticStyle:{color:"#f17656"}},[t._v(t._s(e.viewCount))]),t._v("人浏览 "),a("span",{staticStyle:{"margin-left":"300px"}},[t._v(t._s(e.date))])])]),a("div",{staticClass:"hotImg"},[a("a",{attrs:{href:"/article?id="+e.id}},[a("img",{attrs:{src:e.url,alt:"健身使用哪些补剂和补剂的正确方法"}})])])])})),0)]),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{staticStyle:{"padding-top":"10px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.pageSize},on:{"current-change":t.pageChange}})],1)],2)},l=[],o={data:function(){return{pageSize:5,page:1,total:1,activeIndex:"1",activeIndex2:"1",input:"",fits:["cover"],url:"https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg",eatData:[],tableData:[],articleArr:[],categoryChildrenArr:[],categoryArr:[],categoryId:3}},methods:{LoadSubCategoryArticles(t){console.log(t);let a="http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId="+t+"&page="+this.page+"&pageSize="+this.pageSize;console.log("url = "+a),this.categoryId=t,console.log("测试："+this.categoryId),this.axios.create({headers:{Authorization:localStorage.getItem("jwt")}}).get(a).then((t=>{let a=t.data;this.total=a.data.totalCount,this.pageSize=a.data.pageSize,this.articleArr=a.data.list,console.log()}))},pageChange(t){console.log("当前页："+t),console.log("当前categoryId："+this.categoryId);let a="http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId="+this.categoryId+"&page="+t+"&pageSize="+this.pageSize;console.log("url = "+a),this.axios.create({headers:{Authorization:localStorage.getItem("jwt")}}).get(a).then((t=>{let a=t.data;console.log(a),this.total=a.data.totalCount,this.pageSize=a.data.pageSize,this.articleArr=a.data.list}))},loadArticleList(){let t="http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId="+this.categoryId+"&page="+this.page+"&pageSize="+this.pageSize;console.log("url = "+t),this.axios.create({headers:{Authorization:localStorage.getItem("jwt")}}).get(t).then((t=>{let a=t.data;this.articleArr=a.data.list,this.total=a.data.totalCount,this.pageSize=a.data.pageSize,console.log()}))},loadCategoryList(){let t="http://localhost:10001/articleCategories/list-children-by-parent";console.log("url = "+t),this.axios.create({headers:{Authorization:localStorage.getItem("jwt")}}).get(t).then((t=>{let a=t.data;for(var e in this.categoryArr=a.data,this.categoryArr)"器械"==this.categoryArr[e].name&&(this.categoryChildrenArr=this.categoryArr[e].children)}))}},mounted(){this.loadArticleList(),this.loadCategoryList()}},r=o,s=e(1001),n=(0,s.Z)(r,i,l,!1,null,null,null),c=n.exports}}]);
//# sourceMappingURL=350.45972b1e.js.map