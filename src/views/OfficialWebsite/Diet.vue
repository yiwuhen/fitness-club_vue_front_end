<template>
  <div class="Classification">
    <ul style="padding: 1px 20px;" >
      <div>
        <div>
          <!--    一级分类        -->
          <li style="padding: 10px 30px 10%;margin: 0 auto;">
            <span style="width: 144px;font-size: 18px;font-weight: bold;color: rgb(213, 47, 4) ">饮食</span>
          </li>
        </div>

        <div style="width: 900px;margin: 0 auto;margin-left: 170px;margin-top: 1px">
          <ul style="padding: 10px ;width: 900px ;padding-top: 5px">
            <li v-for="c in categoryChildrenArr">
              <el-button style="width: 100px" @click="LoadSubCategoryArticles(c.id)">
                <span style="font-size: 16px;">{{c.name}}</span>
              </el-button>
            </li>
          </ul>
        </div>


        <el-divider></el-divider>

      </div>

    </ul>

    <div class="hot" >
      <ol>
        <li v-for="(a,index) in articleArr">
          <!--左边数字-->
          <div class="hotItem">{{index+1}}</div>
          <!--中间文字-->
          <div class="hotContent">
            <!--最上边标题-->
            <h2><a :href="'/article?id='+a.id">{{a.title}}</a></h2>
            <!--内容简介-->
            <p><a href="#">
              {{a.description}}
            </a></p>
            <!--热度和日期-->
            <div class="tools">
              <br>
              <br>
              <br>
              <!--浏览量-->
              <i class="el-icon-view" style="margin-left: 15px"></i>
              <span style="color: #f17656;">{{a.viewCount}}</span>人浏览
              <!--日期-->
              <span style="margin-left: 300px">{{a.date}}</span>
            </div>
          </div>
          <!--右边图片-->
          <div class="hotImg">
            <a href="#"><img :src="a.url" alt="健身使用哪些补剂和补剂的正确方法"></a>
          </div>
        </li>
      </ol>
    </div>
    <div style="text-align: center">
      <el-pagination style="padding-top: 10px;"
                     background
                     layout="prev, pager, next"
                     :total=total
                     :page-size=pageSize
                     @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      pageSize:10,
      page:1,
      total:1,
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      fits: ['cover'],
      url: 'https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg',
      eatData: [],
      tableData: [],
      articleArr:[],
      categoryChildrenArr:[],
      categoryArr:[]
    }


  },
  methods: {
    //加载子分类文章
    LoadSubCategoryArticles(id){
      console.log(id)
      let url = 'http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId='+id+'&page=1&pageSize=5';
      console.log('url = ' + url);

      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        this.articleArr = responseBody.data.list;
        console.log()
      });
    },
    //分页
    pageChange(page) {
      console.log(page) // 控制台输出当前页码
      let url = 'http://localhost:10001/articles/listAll-by-Page?page='+page+'&pageSize='+this.pageSize;
      console.log('url = ' + url);

      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        console.log(responseBody)
        this.total = responseBody.data.totalCount;
        this.pageSize = responseBody.data.pageSize;
        this.articleArr =responseBody.data.list
      });

    },
    //文章
    loadArticleList(){
      let url = 'http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId=4&page='+this.page+'&pageSize='+ this.pageSize+'';
      console.log('url = ' + url);

      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        this.articleArr = responseBody.data.list;
        this.total = responseBody.data.totalCount;
        console.log()
      });

    },
    //类别
    loadCategoryList(){
      let url = 'http://localhost:10001/articleCategories/list-children-by-parent';
      console.log('url = ' + url);

      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        this.categoryArr = responseBody.data;

        for (var i in this.categoryArr) {  //遍历数组
          if(this.categoryArr[i].name == "饮食")
            this.categoryChildrenArr = (this.categoryArr[i].children
            )
        }
      });
    },
  },
  mounted() {
    //启动时加载文章列表
    this.loadArticleList();
    //启动时加载类别列表
    this.loadCategoryList();

  }
}
</script>

<style>
.Classification{
  width: 1100px;
  margin: 0 auto;
}

a{
  text-decoration: none;/*无下划线*/
}
.el-header a{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
}
ul{
  list-style-type:none; /*删除无序列表的项目符号*/

}
ul li{
  display:inline;  /*横向排序*/

}
.user{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
  display:block;
  margin-top:17px;
  margin-right: 15px;
}
.butten{
  height: 30px;
  display: flex;/*设置为弹性容器*/
  align-items: center; /*定义div1的元素垂直居中*/
  justify-content: center; /*定义div1的里的元素水平居中*/
  margin-top: 20px;
  margin-bottom: 1px;

}
.butten a{
  text-decoration: none;/*无下划线*/
  font-size: 16px;
  color: #b3b3b3;


}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-table th.el-table__cell{
  background-color: #F5F7FA;
}
table_1_column_2{
  background-color: #FFF;
}
.el-divider--horizontal{
  margin:0px
}
.el-input-group__append button {
  border-radius: 0px;
  color: white;
}
.el-icon-search:before{
  color: white;
}
.el-input-group__append{
  margin: 0px;
  border-radius: 0px;
  border-color:#d52f04 ;
  padding-bottom: 1px;

}
/*搜索框属性*/
.el-input__inner {
  border-radius: 0px;
  color: #d52f04;
  border:1px;

}
.but{
  border-radius:0;
}
.el-divider--horizontal{
  margin-left: 10px;
}
.el-button:focus{
  background: rgb(213, 47, 4);
  color: #fff8f8;
}
.el-button:hover{
  border: 1px solid #ffa1a1;
  background: #fff8f8;
  color:rgb(213, 47, 4);
}
.el-card__body, .el-main{
  padding: 10px 35px;
}

/**-***************************/

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {

}
.bg-purple {

}
. {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  height: 300px;
  border: 1px
}


.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-col{
  border: 1px solid rgb(210, 210, 210);
  padding-left: 0;
  padding-right: 0;
}
.el-col:hover{
  border: 1px solid rgb(213, 47, 4)
}
.TradeName {
  text-decoration: none;/*无下划线*/
  font-size: 12px;
  color: #333334;
  margin:0 auto;
}
.TradeName:hover {
  color: #d52f04;
}
.sales{
  font-size: 12px;
  color: #a1a1a1;
  padding-left: 10px
}
.Price{
  padding-left: 10px;
  font-size: 16px;
  color: #d52f04;
  font-weight:bold;
  margin-top: 5px;
}
</style>
<style>

.el-header{
  padding: 0 10px;
}
.el-footer{
  padding: 0 10px;
}
body,h2,p {
  margin: 0;
}
/*设置ol标签*/
ol {
  list-style: none;
  padding-top: 0px;
  margin: 0;
}
/*设置a标签*/
a{
  text-decoration: none;
}

/*设置li标签*/
.hot li{

  padding: 30px 16px 30px 0;
  /*加下面实线*/
  border-bottom: 1px solid #ededed;
  /*让li标签变成弹性模型，为了方便子元素并列排*/
  display: flex;
}
/*设置显示的数字*/
.hot .hotItem {
  width: 57px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color:#ff9607;
}
/*设置文本*/
.hot .hotContent{
  flex : 1 1;  /*设置子元素的弹性尺寸*/
}
/*设置文本中的h2*/
.hot .hotContent h2{
  font-size: 30px;
  line-height: 32px;
  /*多出来的变成省略号*/
  display: -webkit-box;
  -webkit-line-clamp: 1;/*显示1行*/
  -webkit-box-orient: vertical;/*让子元素竖着排*/
  overflow: hidden;
}
/*设置文本中的p*/
.hot .hotContent p{
  font-size:  15px;
  line-height: 25px;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 3;/*显示1行*/
  -webkit-box-orient: vertical;/*让子元素竖着排*/
  overflow: hidden;

}
.hot .hotContent p a{
  color: #909399;
}
.hot .hotContent h2 a{
  color: #1a1a1a;
}
.hot .hotContent h2 a:hover{
  color: #d52f04;
}
.hot .tools{
  margin-top: 10px;
}
.hot .tools span{
  font-size: 14px;

}
/*设置图片那一层*/
.hot .hotImg{
  margin-left: 16px;
}
/*设置图片*/
.hot .hotImg img{
  width: 266px;
  height: 144px;
  border-radius: 4px;
}
.el-input__inner{
  border: 1px  solid #ebebeb;
  border-radius:0px;
}
.el-button{
  border-radius: 0;
}

.el-input-group__append{
  border: 0;
  border-radius: 0;
}
.el-pagination.is-background .btn-next{
  width: 60px;
  height: 60px;
  line-height: 60px;

  text-align: center;
}
.el-pagination.is-background .btn-prev{
  width: 60px;
  height: 60px;
  line-height: 60px;

  text-align: center;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover{
  color: #ffffff;
  background-color: #d52f04;
}
.el-pagination.is-background .el-pager li:not(.disabled){
  width: 60px;
  height: 60px;
  line-height: 60px;

  text-align: center;
}
/*修改分页下标背景色*/
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #d52f04;   /* 进行修改选中项背景和字体*/
  color: #fff;
}
.el-breadcrumb__inner.is-link:hover {
  color: #d52f04;
}
.el-breadcrumb{
  font-size: 22px;
  line-height: 1.5;
}
.user{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
  display:block;
  margin-top:17px;
  margin-right: 15px;
}
.butten{
  height: 30px;
  display: flex;/*设置为弹性容器*/
  align-items: center; /*定义div1的元素垂直居中*/
  justify-content: center; /*定义div1的里的元素水平居中*/
  margin-top: 20px;
  margin-bottom: 1px;

}
.butten a{
  text-decoration: none;/*无下划线*/
  font-size: 16px;
  color: #b3b3b3;

}
</style>
