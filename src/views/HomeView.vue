<template>
  <div id="app" style="margin: 0 auto">
    <!--顶部 logo 搜索 登录注册-->
    <div style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
      <span>
        <a href="/">
          <img src="https://www.jianshen8.com/templets/jianshen8/images/logo.png" alt="">
        </a>

        <div style="float: right;position: relative;top: 12px;right: 400px ;width: 400px">
          <el-input placeholder="请输入搜索的内容" style="border: 1px solid #d52f04 ;border-radius: 0px;padding: 0px">
            <!--slot="append"作用是把按钮追加在文本框里面-->
            <el-button slot="append" icon="el-icon-search" style="background: #d52f04;border-radius: 0px"></el-button>
          </el-input>
        </div>
        <a href="/login" style="float: right;position: relative;top: -1px;right: -250px;
 font-size: 24px;
  color: #333334;
  display: block;
  margin-top: 17px;
  margin-right: 15px;" class="user">登录</a>
        <a href="/reg" style="float: right;position: relative;top: -1px;right: -230px;
 font-size: 24px;
  color: #333334;
  display: block;
  margin-top: 17px;
  margin-right: 15px;" >注册</a>
        <a href="/usercontrol" style="float: right;position: relative;top: -1px;right: -530px; font-size: 24px;
  color: #333334;
  display: block;
  margin-top: 17px;
  margin-right: 15px;" >用户中心</a>
      </span>
    </div>
    <!--导航菜单-->
    <el-menu
        router
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"

    >
      <el-menu-item index="/officialWebsite/index" style="margin: 0 0 0 20% ; color: #fff8f8;font-size: 24px" @click="refresh">首页</el-menu-item>
      <el-menu-item index="/officialWebsite/train" style="color: #fff8f8;font-size: 24px">器械</el-menu-item>
      <el-menu-item index="/officialWebsite/muscle" style="color: #fff8f8;font-size: 24px">肌肉</el-menu-item>
      <el-menu-item index="/officialWebsite/diet" style="color: #fff8f8;font-size: 24px">饮食</el-menu-item>
      <el-menu-item index="/list_page" style="color: #fff8f8;font-size: 24px">资讯</el-menu-item>
      <el-menu-item index="/officialWebsite/shooping" style="color: #fff8f8;font-size: 24px">商城</el-menu-item>
    </el-menu>
    <!--中间部分由其他页面展示-->
    <div>
      <router-view/>
    </div>

    <!--底部-->
    <div style="background: #555;
        height: 112px;
        width: 100%;
        padding-top:5px;
        float : right ;
        bottom : 0px ;">
      <template>
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
      tableData: []
    }


  },
  methods: {
    // 强制点击首页刷新
    refresh(){
      this.$router.push('/officialWebsite/index')
      this.$router.go(0)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    viewDetails(row) {
      // 获取点击表格的信息
      console.log('表格被点击了');
      console.log(this.eatData);
      console.log(this.eatData.id);
      // 跳转到信息对应文章详情
      //this.$router.push('/articles/'+5)
    },

  },

}
</script>
<style type="text/css">
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


</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>