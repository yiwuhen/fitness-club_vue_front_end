<template>
  <div id="app">
    <el-container >
      <el-header style="  ">
        <!--顶部 logo 搜索 登录注册-->
        <div  style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
    <span>
      <a href="/">
          <img src="https://www.jianshen8.com/templets/jianshen8/images/logo.png" alt="">
        </a>
      <el-input v-model="input" class="el-input__icon "
                suffix-icon="el-icon-search"
                placeholder="请输入内容"
                style="width:400px;
                    position: absolute;
                    top: 0;
                    bottom: 20px;
                    margin: 0px   15% 0;"></el-input>
      <a href="/login"  style="float: right;" class="user">登录</a>
      <a href="/reg"  style="float: right" class="user">注册</a>
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
      </el-header>
      <el-main style="height:2000px ">
        <div  style="width: 1000px; margin: 0 auto ;">
          <div style="text-align: left">
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin: 5px auto;margin-left: 60px">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>饮食</el-breadcrumb-item>
              <el-breadcrumb-item>健身食谱</el-breadcrumb-item>

            </el-breadcrumb>
            <div class="hot" >
              <ol>
                <li v-for="(c,index) in categoryArr">
                  <!--左边数字-->
                  <div class="hotItem">{{index+1}}</div>
                  <!--中间文字-->
                  <div class="hotContent">
                    <!--最上边标题-->
                    <h2><a href="#">{{c.title}}</a></h2>
                    <!--内容简介-->
                    <p><a href="#">
                      {{c.description}}
                      <!--我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么
                      我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么
                      我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，-->不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么
                    </a></p>
                    <!--热度和日期-->
                    <div class="tools">
                      <!--浏览量-->
                      <i class="el-icon-view" style="margin-left: 15px"></i>
                      <span style="color: #f17656;">{{c.pageView}}</span>人浏览
                      <!--日期-->
                      <span style="margin-left: 300px">{{c.date}}</span>
                    </div>
                  </div>
                  <!--右边图片-->
                  <div class="hotImg">
                    <a href="#"><img :src="c.url" alt="健身使用哪些补剂和补剂的正确方法"></a>
                  </div>
                </li>
              </ol>
            </div>
            <div style="text-align: center">
              <el-pagination style="padding-top: 10px;"
                             background
                             layout="prev, pager, next"
                             :total="53"
                             :page-size="4"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer  >
        <!--底部-->
        <div style="background: #555;height: 112px;padding-top:5px">
          <template>
            <div  class="butten">

              <span><a href="/fuwu/about/abouts" rel="nofollow">网站简介</a></span>
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
            <p style=" color:#b3b3b3;">Copyright © 2011 健身吧 www. jianshen .com . 版权所有 <a href="http://beian.miit.gov.cn/" rel="nofollow">
              京ICP备2022036109号-1</a></p>
          </div>

        </div>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import img from '@/images/tu01.png'
export default {
  data() {

    return {
      input:'',
      activeIndex2:'',
      wd:"",
      categoryArr:[
        {
          title:"健身使用哪些补剂和补剂的正确方法,",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"

        },{
          title:"健身使用哪些补剂和补剂的正确方法,健身到一定的时候就会适量的补充一些补剂来帮助自己健身",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"
        },{
          title:"健身使用哪些补剂和补剂的正确方法,健身到一定的时候就会适量的补充一些补剂来帮助自己健身",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"
        },
        {
          title:"健身使用哪些补剂和补剂的正确方法,健身到一定的时候就会适量的补充一些补剂来帮助自己健身",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"
        },
        {
          title:"健身使用哪些补剂和补剂的正确方法,",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"

        },
        {
          title:"健身使用哪些补剂和补剂的正确方法,",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"

        },
        {
          title:"健身使用哪些补剂和补剂的正确方法,",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"

        },
        {
          title:"健身使用哪些补剂和补剂的正确方法,",
          description:"我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，不太清楚该怎么选择。那么你知道健身要使用那些补剂以及使用这些补剂的正确方法是什么\n" +
              "        我们健身到一定的时候就会适量的补充一些补剂来帮助自己健身。现在市面上的健身补剂市场也比较大，很多人面对这些健身补剂的时候也犯了难，",
          url:img,
          pageView:2041,
          date:"2021-04-20"

        }


      ]

    }
  },
  methods: {
    handleSelect:function () {

    }
  },
  created:function () {

  }
}
</script>

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