<template>
  <div id="app" style="margin: 0 auto">
    <!--顶部 logo 搜索 登录注册-->
    <div  style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
      <span>
        <img src="https://www.jianshen8.com/templets/jianshen8/images/logo.png" alt="">
        <div style="float: right;position: relative;top: 12px;right: 400px ;width: 400px">
          <el-input placeholder="请输入搜索的内容" style="border: 1px solid #d52f04 ;border-radius: 0px;padding: 0px">
            <!--slot="append"作用是把按钮追加在文本框里面-->
            <el-button slot="append" icon="el-icon-search" style="background: #d52f04;border-radius: 0px"></el-button>
          </el-input>
        </div>
        <a href="/login"  style="float: right;position: relative;top: -1px;right: -250px" class="user">登录</a>
        <a href="/reg"  style="float: right;position: relative;top: -1px;right: -230px" class="user">注册</a>
        <a href="/usercontrol"  style="float: right;position: relative;top: -1px;right: -530px" class="user">用户中心</a>
      </span>
    </div>
    <!--导航菜单-->
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"

    >
      <el-menu-item index="index"  style="margin: 0 0 0 20% " ><a href="/" >首页</a></el-menu-item>
      <el-submenu index="train">
        <template slot="title"><a href="train" target="_blank" style="color: #fff8f8;font-size: 24px">器械</a></template>
        <el-menu-item index="2-1">器械1</el-menu-item>
        <el-menu-item index="2-2">器械2</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><a href="train" target="_blank" style="color: #fff8f8;font-size: 24px">饮食</a></template>
        <el-menu-item index="4-1">饮食1</el-menu-item>
        <el-menu-item index="4-2">饮食2</el-menu-item>
      </el-submenu>
      <el-menu-item index="5" ><a href="/list_page" style="color: #fff8f8;font-size: 24px">资讯</a></el-menu-item>
      <el-menu-item index="6"><a href="/shooping" >商城</a></el-menu-item>
    </el-menu>
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
          <H3 CLASS="H3"><i class="el-icon-tableware"></i>    饮食</H3>
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
                  <div>

                    <el-card class="box-card"style="width: 590px;padding: 1px" >
                      <a href="">
                        <img src="https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg" style="width: 550px;height: 335px;">

                      </a>
                    </el-card>
                  </div>
                </el-col>
              </el-row>
              <!--左下两个-->
              <el-row :gutter="14">
                <!--左下1-->
                <el-col :span="12">
                  <div>
                    <el-card class="box-card" style="width:284px;padding: 1px" >
                      <a href="">
                        <img src="https://www.jianshen8.com/uploads/allimg/200619/5_200619094741_1.jpg" style="width: 250px;height: 152px;">
                      </a>
                    </el-card>
                  </div>
                </el-col>
                <!--左下2-->
                <el-col :span="12">
                  <div>
                    <el-card class="box-card"style="width: 284px;padding: 1px" >
                      <a href="">
                        <img src="https://www.jianshen8.com/uploads/allimg/200619/5_200619095208_1.jpg" style="width: 250px;height: 152px;" >
                      </a>
                    </el-card>
                  </div>
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
                    <el-card class="box-card"style="width: 590px;padding: 1px" >
                      <el-row :gutter="5">
                        <el-col :span="12">
                          <a href="">
                            <img src="https://www.jianshen8.com/uploads/allimg/200602/24_200602102425_1-lp.jpg" style="width: 250px;height: 152px;" >
                          </a>
                        </el-col>
                        <el-col :span="12">
                          <p><a href=""  style=" font-size: 20px;color: #1a1a1a; ">增肌吃什么水果合适</a></p>
                          我们都知道一个人经常健身的话，对身体是有帮助的，如增肌、减肥等等。一个人怎么增肌，其实是有很多增肌方...
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
                    <el-card class="box-card" style=" padding-top: 10px;width: 593px;height: 375px;" >
                      <div>
                        <template>
                          <el-table
                              :data="eatData"
                              style="width: 100%">
                            <el-table-column
                                prop="address"
                                label="文章名"
                                @select="viewDetails()"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="date"
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
          <H3 CLASS="H3"><i class="el-icon-trophy"></i>    训练</H3>
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
                    <el-card class="box-card"style="width: 590px;padding: 1px" >
                      <el-row :gutter="5">
                        <el-col :span="12">
                          <img src="https://www.jianshen8.com/uploads/allimg/200801/24_200801095432_1-lp.jpg" style="width: 250px;height: 152px;" >
                        </el-col>
                        <el-col :span="12">
                          <p><a href="" style=" font-size: 20px;color: #1a1a1a; ">女生睡前减肥瘦身动作大全</a></p>
                          一个人该如何减肥瘦身，是有许多减肥方法的，可是想要减肥瘦身不是一件生...
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
                    <el-card class="box-card" style=" padding-top: 10px;width: 593px;height: 375px;" >
                      <div>
                        <template>
                          <el-table
                              :data="tableData"
                              style="width: 100%">
                            <el-table-column
                                prop="address"
                                label="文章名">
                            </el-table-column>
                            <el-table-column
                                prop="date"
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
                <!--左边顶部第一个-->
                <el-col :gutter="24" style="width: 500px;">
                  <div>
                    <el-card class="box-card" style="width: 590px;padding: 1px;" >
                      <img src="https://www.jianshen8.com/uploads/allimg/200805/24_200805093957_1-lp.jpg" style="width: 550px;height: 335px;">
                    </el-card>
                  </div>
                </el-col>
              </el-row>
              <!--左下两个-->
              <el-row :gutter="14">
                <!--左下1-->
                <el-col :span="12">
                  <div>
                    <el-card class="box-card"style="width:284px;padding: 1px" >
                      <img src="https://www.jianshen8.com/uploads/allimg/200807/24_200807100033_1-lp.jpg" style="width: 250px;height: 152px;">
                    </el-card>
                  </div>
                </el-col>
                <!--左下2-->
                <el-col :span="12">
                  <div>
                    <el-card class="box-card"style="width: 284px;padding: 1px" >
                      <img src="https://www.jianshen8.com/uploads/allimg/200805/24_200805105338_1-lp.jpg" style="width: 250px;height: 152px;" >
                    </el-card>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>

        </el-row>
      </div>
    </div>
    <!--底部-->
    <div style="background: #555;
        height: 112px;
        width: 100%;
        padding-top:5px;
        float : right ;
        bottom : 0px ;">
      <template>
        <div  class="butten">

          <span><a href="/fuwu/about/abouts" rel="nofollow" >网站简介</a></span>
          <el-divider direction="vertical"></el-divider>
          <span> <a href="/fuwu/about/ads" rel="nofollow">商务合作</a></span>
          <el-divider direction="vertical"></el-divider>
          <span> <a href="/fuwu/about/cooperate" rel="nofollow">战略合作</a></span>
          <el-divider direction="vertical"></el-divider>
          <span>  <a href="/fuwu/about/contact" rel="nofollow">联系我们</a></span>
          <el-divider direction="vertical"></el-divider>
          <span>   <a href="/nav">网站导航</a></span>

        </div>
      </template>

      <div class="butten" >
        <p style="color:#b3b3b3;">Copyright © 2011 健身吧 www. jianshen .com . 版权所有 <a href="http://beian.miit.gov.cn/" rel="nofollow">
          京ICP备2022036109号-1</a></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      fits: [ 'cover'],
      url: 'https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg',
      eatData: [{
        date: '2016-05-02',
        address: '健身使用哪些补剂和补剂的正确方法'
      }, {
        date: '2016-05-04',
        address: '健康低脂食物有哪些 这些食物能帮我们减肥'
      }, {
        date: '2016-05-01',
        address: '初次辟谷减肥的正确方法 初次辟谷要注意什么 '
      }, {
        date: '2016-05-03',
        address: '汤类低脂食物 清肠排毒速瘦 '
      }],
      tableData: [{
        date: '2016-05-02',
        address: '最简单的瑜伽瘦身动作有哪些'
      }, {
        date: '2016-05-04',
        address: '腹部减肥五天狂瘦十斤的方法有哪些'
      }, {
        date: '2016-05-01',
        address: '健身房初学者减脂计划表'
      }, {
        date: '2016-05-03',
        address: '五个简单瘦身动作 让你轻松瘦身'
      }]
    }


  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    viewDetails(){
      this.$router.push('/')

    }
  }
}
</script>

<style>
a{
  text-decoration: none;/*无下划线*/
}
.el-header a{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
}
.el-header a{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
}

.el-menu-item a {
  text-decoration: none;/*无下划线*/
  font-size: 24px;
}
.user{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
  display:block;
  margin-top:17px;
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
  height:500px ;
}

.el-carousel__item:nth-child(2n+1) {
  height:500px ;
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

.H3{
  float-offset: 50px;
  font-size: 28px;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight:bold;

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

</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>