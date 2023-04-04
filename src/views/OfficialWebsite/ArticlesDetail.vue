<template>
  <div style="margin: 0 auto">
    <!--顶部 logo 搜索 登录注册-->
    <div style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
    <span>
      <img src="https://www.jianshen8.com/templets/jianshen8/images/logo.png" alt="">
      <a href="/login" style="float: right;" class="user">登录</a>
      <a href="/reg" style="float: right" class="user">注册</a>
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
      <el-menu-item index="6"><a href="/shooping" target="_blank">商城</a></el-menu-item>
    </el-menu>
    <!--  上中下-->
    <el-container style="width:1200px ;margin: 0 auto;height: auto">
      <!-- 上面：表格-->
      <el-header style="padding: 10px 20px">
      </el-header>
      <!--文章详情内容 -->
      <el-main>
        <div >
          <p style="font-size: 40px;font-weight: bold">{{ tableData.title }}</p>
          <hr>
          <p v-html =" tableData.content"></p>
        </div>
      </el-main>
      <!--下部分页列表-->
      <el-divider></el-divider>
      <el-footer style="height: auto;text-align: center">
        <a style="margin-left: 10px;text-decoration: none;color: #1a1a1a" href="javascript:void(0);"@click="setDisplay">
          <span style="text-align: center;font-size: 20px;font-weight: bold" ></span></a>


      </el-footer>
      <!--底部-->
      <div style="background: #555;
        height: 112px;
        width: 100%;
        padding-top:5px;
        float : right ;
        bottom : 10px ;">
        <template>
          <!--导航-->
          <div class="butten">
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
        <div class="butten">
          <p style="color:#b3b3b3;">Copyright © 2011 健身吧 www. jianshen .com . 版权所有 <a href="http://beian.miit.gov.cn/"
                                                                                      rel="nofollow">
            京ICP备2022036109号-1</a></p>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>

export default {

  data() {
    return {
      tableData: [],
      textarea1:'',
      show:true,
      activeIndex2: "",
    }
  },
  methods: {
    setDisplay:function () {
      this.show=true;
    },
    setHide:function () {
      this.show=false;
    },
    handleChange: function () {

    },
    /*获取单选框选中的值*/
    getValue(index) {
      console.log(index);
    },
    inputRadio: function () {
      console.log(this.radio.label)
    },
    handleSelect: function () {

    },
    loadArticleList() {
      let url = 'http://localhost:10001/articles/8';
      console.log('url = ' + url);

      this.axios
          .get(url).then((response) => {
        let responseBody = response.data;
        this.tableData = responseBody.data;
      });
    }

  },
  created() {

  },
  mounted() {
    this.loadArticleList();
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
.user {
  text-decoration: none; /*无下划线*/
  font-size: 24px;
  color: #333334;
  display: block;
  margin-top: 17px;
  margin-right: 15px;
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

.tilte span {
  line-height: 2;
  font-size: 20px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1; /*显示1行*/
  -webkit-box-orient: vertical; /*让子元素竖着排*/
  overflow: hidden;
}

.el-input-number.is-controls-right .el-input-number__increase{
  line-height: 25px;

}
.el-input-number.is-controls-right .el-input-number__decrease{
  line-height: 25px;

}


.el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: #d52f04;
}
.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: #d52f04;
}

{
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #FFF;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}


</style>