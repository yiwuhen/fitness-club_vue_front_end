<template>
  <div id="app" style="margin: 0 auto">

    <!-- 首页主banner -->
    <div style="margin: 0 auto;">
      <template>
        <el-carousel ndicator-position="outside" style="height: 400px;">
          <el-carousel-item v-for="item in 4" :key="item" style="margin: 0 auto;height: 400px">
            <img src="https://www.jianshen8.com/uploads/181015/banner2(1).jpg" alt="" width="1600px" height="400px">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!-- 第一部分内容-->
    <div style=" background-color: #eaeaea;height: 730px;margin: 0 auto">
      <!--嵌套剧中div-->
      <div style="width: 1200px;height: 730px; margin: 0 auto;padding-top: 10px">
        <!--标题分类-->
        <div>
          <H3 CLASS="H3"><i class="el-icon-tableware"></i> 饮食</H3>
        </div>
        <hr>
        <!--剧中div分栏-->
        <el-row>
          <!--左侧div-->
          <el-col :span="12">
            <div class="grid-content bg-purple" style="height: 630px;">
              <!--内部继续分为三部分-->
              <el-row :gutter="11" style="padding-top: 10px;margin-bottom: 13px">
                <!--左边顶部第一个-->
                <el-col :gutter="24" style="width: 500px;">
                  <el-card style="width: 590px;padding: 1px;padding-bottom: 25px">
                    <div class="item">
                      <div class="item-image">
                        <img :src=Articles1.url
                             style="width: 550px;height: 335px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles1.id">
                            <h2 class="item-text-title">{{ Articles1.title }}</h2>
                          </a>

                          <p class="item-text-dek">{{ Articles1.description }}</p>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <!--左下两个-->
              <el-row :gutter="14">
                <!--左下1-->
                <el-col :span="12">
                  <el-card class="box-card" style="width:284px;padding: 1px;padding-bottom: 25px">
                    <div class="item" style="height: 152px">
                      <div class="item-image">
                        <img :src=Articles2.url
                             style="width: 250px;height: 152px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles2.id">
                            <h2 class="item-text-title">{{ Articles2.title}}</h2>
                          </a>

                          <p class="item-text-dek">{{Articles2.description}}</p>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
                <!--左下2-->
                <el-col :span="12">
                  <el-card class="box-card" style="width:284px;padding: 1px;padding-bottom: 25px">
                    <div class="item" style="height: 152px">
                      <div class="item-image">
                        <img :src=Articles3.url
                             style="width: 250px;height: 152px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles3.id">
                            <h2 class="item-text-title">{{ Articles3.title }}</h2>
                            <p class="item-text-dek">我是内容</p>
                          </a>

                        </div>
                      </div>
                    </div>
                  </el-card>

                </el-col>
              </el-row>
            </div>
          </el-col>
          <!--右侧div-->
          <el-col :span="12">
            <div class="grid-content bg-purple-light" style="height: 630px;">
              <!--内部继续分为2部分-->
              <!--顶部图文-->
              <el-row :gutter="14" style="padding-left: 5px;padding-top: 10px">
                <el-col :span="24">
                  <div>
                    <el-card class="box-card" style="width: 590px;padding: 1px">
                      <el-row :gutter="5">
                        <el-col :span="12">
                          <a :href="'/article?id='+Articles7.id">
                            <img :src=Articles7.url
                                 style="width: 250px;height: 152px;">
                          </a>
                        </el-col>
                        <el-col :span="12">
                          <p><a :href="'/article?id='+Articles7.id" style=" font-size: 20px;color: #1a1a1a; ">{{ Articles7.title}}</a></p>
                          {{ Articles7.description}}
                        </el-col>
                      </el-row>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="11" style="padding-top: 10px;margin-bottom: 13px">
                <!--文章列表-->
                <el-col :gutter="24" style="width: 500px;padding-left: 10px;">
                  <div>
                    <el-card class="box-card" style=" padding-top: 10px;width: 593px;height: 375px;">
                      <div>
                        <template >
                          <el-table
                              :data="eatData"
                              @row-click="viewDetails"
                              height="350"
                              style="width: 100%">
                            <el-table-column
                                prop="title"
                                label="文章名"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="gmtModified"
                                label="更新时间"
                                width="180" style="float: right">
                            </el-table-column>
                          </el-table>
                        </template>
                      </div>

                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 第二部分内容-->
    <div style=" background-color: #ffffff;height: 730px;margin: 0 auto">
      <!--嵌套剧中div-->
      <div style="width: 1200px;height: 730px; margin: 0 auto;padding-top: 10px">
        <!--标题分类-->
        <div>
          <H3 CLASS="H3"><i class="el-icon-trophy"></i> 训练</H3>
        </div>
        <hr>
        <!--剧中div分栏-->
        <el-row>
          <!--左侧div-->
          <el-col :span="12">
            <div class="grid-content bg-purple-light" style="height: 630px;">
              <!--内部继续分为2部分-->
              <!--顶部图文-->
              <el-row :gutter="14" style=";padding-top: 10px">
                <el-col :span="24">
                  <div>
                    <el-card class="box-card" style="width: 590px;padding: 1px">
                      <el-row :gutter="5">
                        <el-col :span="12">
                          <a :href="'/article?id='+Articles8.id">
                            <img :src=Articles8.url
                                 style="width: 250px;height: 152px;">
                          </a>
                        </el-col>
                        <el-col :span="12">
                          <p><a :href="'/article?id='+Articles8.id" style=" font-size: 20px;color: #1a1a1a; ">{{ Articles8.title }}</a></p>
                          {{ Articles8.description}}
                        </el-col>
                      </el-row>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="11" style="padding-top: 10px;margin-bottom: 13px">
                <!--文章列表-->
                <el-col :gutter="24" style="width: 500px;">
                  <div>
                    <el-card class="box-card" style=" padding-top: 10px;width: 593px;height: 375px;">
                      <div>
                        <template>
                          <el-table
                              :data="tableData"
                              height="350"
                              @row-click="viewDetails"
                              style="width: 100%">
                            <el-table-column
                                prop="title"
                                label="文章名">
                            </el-table-column>
                            <el-table-column
                                prop="gmtModified"
                                label="更新时间"
                                width="180" style="float: right">
                            </el-table-column>
                          </el-table>
                        </template>
                      </div>

                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <!--右侧div-->
          <el-col :span="12">
            <div class="grid-content bg-purple" style="height: 630px;">
              <!--内部继续分为三部分-->
              <el-row :gutter="11" style="padding-top: 10px;margin-bottom: 13px">
                <!--第二部分右边顶部第一个-->
                <el-col :gutter="24" style="width: 500px;">
                  <el-card style="width: 590px;padding: 1px ;padding-bottom: 25px">
                    <div class="item">
                      <div class="item-image">
                        <img :src=Articles4.url
                             style="width: 550px;height: 335px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles4.id">
                            <h2 class="item-text-title">{{ Articles4.title }}</h2>
                            <p class="item-text-dek">{{ Articles4.description }}</p>

                          </a>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <!--左下两个-->
              <el-row :gutter="14">
                <!--左下1-->
                <el-col :span="12">
                  <el-card class="box-card" style="width:284px;padding: 1px;padding-bottom: 25px">
                    <div class="item" style="height: 152px">
                      <div class="item-image">
                        <img :src=Articles5.url
                             style="width: 250px;height: 152px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles5.id">
                            <h2 class="item-text-title">{{ Articles5.title }}</h2>
                            <p class="item-text-dek">{{ Articles5.description }}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </el-card>

                </el-col>
                <!--左下2-->
                <el-col :span="12">
                  <el-card class="box-card" style="width:284px;padding: 1px;padding-bottom: 25px">
                    <div class="item" style="height: 152px">
                      <div class="item-image">
                        <img :src=Articles6.url
                             style="width: 250px;height: 152px;">
                      </div>
                      <div class="item-text">
                        <div class="item-text-wrapper">
                          <a :href="'/article?id='+Articles6.id">

                            <h2 class="item-text-title">{{ Articles6.title }}</h2>
                            <p class="item-text-dek">{{ Articles6.description }}</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-col>

        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      fits: ['cover'],
      url: 'https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg',
      eatData: [],
      tableData: [],
      Articles1:[],
      Articles2:[],
      Articles3:[],
      Articles4:[],
      Articles5:[],
      Articles6:[],
      Articles7:[],
      Articles8:[],
    }


  },
  methods: {
    loadCategoryList() {
      let url = 'http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId=4&page=1&pageSize=5';
      console.log('url = ' + url);

      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let article = response.data;
        //获取状态
        console.log('state=' + article.state);
        //获取后端传来的信息
        console.log('message=' + article.message);
        this.eatData = article.data.list;

      });
    },
    loadCategoryListXl() {
      let url = 'http://localhost:10001/articles/list-by-categoryIdAndPage?categoryId=3&page=1&pageSize=5';
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.tableData = responseBody.data.list;


        console.log("时间显示测试：");
       /* console.log(this.tableData[1]);*/

        console.log(this.eatData);

      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    viewDetails(row) {
      // 获取点击表格的信息
      console.log('表格被点击了');
      console.log(row.id);
      console.log(row.title);
      let id = row.id;
      let title =row.title
      this.$router.push(
          {
            //添加需要传值到那个页面的路径
            path:'/article',
            //携带需要传递的参数
            query:{
              id:id,
              title:title
            }

          })

    },
    GetArticles1(){
      let url = 'http://localhost:10001/articles/picture/' + 13;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles1 = responseBody.data;

      });
    },
    GetArticles2(){
      let url = 'http://localhost:10001/articles/picture/' + 16;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles2 = responseBody.data;

      });
    },
    GetArticles3(){
      let url = 'http://localhost:10001/articles/picture/' + 17;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles3 = responseBody.data;

      });
    },
    GetArticles4(){
      let url = 'http://localhost:10001/articles/picture/' + 10;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles4 = responseBody.data;

      });
    },
    GetArticles5(){
      let url = 'http://localhost:10001/articles/picture/' + 18;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles5 = responseBody.data;

      });
    },
    GetArticles6(){
      let url = 'http://localhost:10001/articles/picture/' + 19;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles6 = responseBody.data;

      });
    },
    GetArticles7(){
      let url = 'http://localhost:10001/articles/picture/' + 33;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles7 = responseBody.data;

      });
    },
    GetArticles8(){
      let url = 'http://localhost:10001/articles/picture/' + 28;
      console.log('url = ' + url);
      this.axios
          .create({'headers': {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let responseBody = response.data;
        //获取状态
        console.log('state=' + responseBody.state);
        //获取后端传来的信息
        console.log('message=' + responseBody.message);
        this.Articles8 = responseBody.data;

      });
    },

  },
  mounted() {
    //启动时加载饮食文章列表
    this.loadCategoryList();
    //启动时加载器械文章列表
    this.loadCategoryListXl();
    //获取第1部分大图信息
    this.GetArticles1();
    this.GetArticles2();
    this.GetArticles3();
    this.GetArticles4();
    this.GetArticles5();
    this.GetArticles6();
    this.GetArticles7();
    this.GetArticles8();
  }
}
</script>
<style type="text/css">

/* 大盒子 */
.item-grid {
  max-width: 1000px;
  margin: 100px auto;
  position: relative;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

/* 小盒子 */
.item {
  position: relative;
  float: left;
  width: 100%;
  height: 335px;
  background-color: #000;
  overflow: hidden;
}

.item::after {
  content: " ";
  display: block;
  background-color: inherit;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* 没悬浮的时候，隐藏在图片下方 */
  transform: translateY(100%);
  transition: transform 0.3s;
}

/* 悬浮后覆盖在图片上面*/
.item:hover:after {
  transform: translateY(0%);

}


.item:hover .item-image {
  transform: scale(1.1);
}

.item:hover .item-text {
  opacity: 1;
  transform: translateY(0%);
}

.item-image {
  height: auto;
  backface-visibility: hidden;
  transition: transform 1.2s;
}

.item-image::before {
  content: "";
  display: block;
  padding-top: 75%;
  overflow: hidden;


}

.item-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.item-text {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  cursor: pointer;
  text-align: center;
  z-index: 1;
  color: #fff;
  transition: transform 1s;
  /* 文字初始的位置 */
  transform: translateY(45%);
}

.item-text-wrapper {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

}

.item-text-title {
  font-size: 36px;
  padding: 0 15px;
  margin: 5px 0 0 0;
}

.item-text-dek {
  font-size: 16px;
  opacity: 0.7;
  margin: 0;
}
</style>
<style>
a {
  text-decoration: none; /*无下划线*/
}

.el-header a {
  text-decoration: none; /*无下划线*/
  font-size: 24px;
  color: #333334;
}

.el-header a {
  text-decoration: none; /*无下划线*/
  font-size: 24px;
  color: #333334;
}

.el-menu-item a {
  text-decoration: none; /*无下划线*/
  font-size: 24px;
}

.user {
  text-decoration: none; /*无下划线*/
  font-size: 24px;
  color: #333334;
  display: block;
  margin-top: 17px;
  margin-right: 15px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  height: 500px;
}

.el-carousel__item:nth-child(2n+1) {
  height: 500px;
}

.butten {
  height: 30px;
  display: flex; /*设置为弹性容器*/
  align-items: center; /*定义div1的元素垂直居中*/
  justify-content: center; /*定义div1的里的元素水平居中*/
  margin-top: 20px;
  margin-bottom: 1px;

}

.butten a {
  text-decoration: none; /*无下划线*/
  font-size: 16px;
  color: #b3b3b3;

}

.H3 {
  float-offset: 50px;
  font-size: 28px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;

}

.el-input-group__append button {
  border-radius: 0px;
  color: white;
}

.el-icon-search:before {
  color: white;
}

.el-input-group__append {
  margin: 0px;
  border-radius: 0px;
  border-color: #d52f04;
  padding-bottom: 1px;

}

/*搜索框属性*/
.el-input__inner {
  border-radius: 0px;
  color: #d52f04;
  border: 1px;

}

</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>