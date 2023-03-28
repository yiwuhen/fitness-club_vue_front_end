<template>
  <div id="app">

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
    <!--导航结束-->
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


    <div style="width: 1200px;margin: 0 auto;margin-top: 15px">
      <el-breadcrumb separator="/"style="margin-bottom: 10px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">后台</a></el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加用户</el-breadcrumb-item>
      </el-breadcrumb>

      <!--内容-->
      <el-main style=" width:1200px;margin: 0 auto">
        <!--gutter设置间距-->
        <el-row gutter="30">
          <el-col span="6">

            <!--左边两个div内容填充-->
            <el-card >
              <div style="width: 200px;height: 200px; background: #bdbdbd; margin-left: 10px">

              </div>
              <div >
                <el-aside width="250px" style="background-color: rgb(238, 241, 246);overflow: hidden">
                  <!--分组，看实际需求进行调整-->
                  <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                      <template slot="title"><i class="el-icon-message"></i>个人中心</template>
                      <el-menu-item-group>
                        <el-menu-item index="1-1">我的信息</el-menu-item>
                        <el-menu-item index="1-2">我的订单</el-menu-item>
                        <el-menu-item index="1-2">我的收藏</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title"><i class="el-icon-menu"></i>资料管理</template>
                      <el-menu-item-group>
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="2-1">个人资料</el-menu-item>
                        <el-menu-item index="2-2">我的地址</el-menu-item>
                        <el-menu-item index="2-3">安全设置</el-menu-item>
                        <el-menu-item index="2-4">我的足迹</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                  </el-menu>
                </el-aside>
              </div>

            </el-card>
            <!--左边内容填充结束-->
          </el-col>
          <!--右边内容-->
          <el-col span="18">
            <el-card>
              <div style="height: 600px">
                <!-- 右边内容1 -->
                <div style="width: 100%;height: 150px;
                  animation: changeBg 20s infinite;
                  background-color: #ED5564;
                  background-size: cover;
                  /*background-image: image('../images/img_bg.png');*/
                  width: 100%;
                  position: relative;
                  padding: 20px 10px;"

                >
                  <div >
                    <div style="margin-left: 20px">
                      <el-avatar :size="100" src="user-avatar.png" ></el-avatar>
                      <div style="margin-left: 20px;color: #fff8f8">
                        <span>123456</span>
                      </div>
                    </div>
                    <div style="margin:  -100px 50px 5px 144px;width: 70px;">
                      <p href="javascript:;" style="text-decoration: none;color: #fff8f8;margin-top: -5px;margin-bottom: 1px"> 修改头像</p><br>
                      <p href="" style="text-decoration: none;color: #fff8f8;margin-top: -5px;margin-bottom: 1px"> 修改资料</p><br>
                      <p href="" style="text-decoration: none;color: #fff8f8;margin-top: -5px;margin-bottom: 1px"> 我的地址</p><br>
                    </div>
                    <ul class="user-base-icon">
                      <li>
                        <a href="http://106.55.25.190:8011/?s=order/index.html">
                          <p>0</p>
                          <p>订单总数</p>
                        </a>
                      </li>
                      <li>
                        <a href="http://106.55.25.190:8011/?s=usergoodsfavor/index.html">
                          <p>0</p>
                          <p>商品收藏</p>
                        </a>
                      </li>
                      <li>
                        <a href="http://106.55.25.190:8011/?s=usergoodsbrowse/index.html">
                          <p>0</p>
                          <p>我的足迹</p>
                        </a>
                      </li>
                      <li>
                        <a href="http://106.55.25.190:8011/?s=userintegral/index.html">
                          <p>0</p>
                          <p>我的积分</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
                <!--右边我的订单-->


                <div class="order-nav">
                  <a href="">
                    <span class="nav-name" >
                        <i class="el-icon-s-order"></i>
                        我的订单
                    </span>
                    <span class="am-fr icon-tips">
                        查看全部订单
                        <i class="el-icon-arrow-right"></i>
                    </span>
                  </a>
                </div>

                <!--右边订单图标-->
                <ul class="order-base">
                  <li>
                    <a href="">
                      <i class="el-icon-edit-outline" style="font-size: 40px;margin-left: 5px;margin-bottom: 1px"></i>
                      <p style="margin-top: 1px">待付款</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="el-icon-box" style="font-size: 40px;margin-left: 5px;margin-bottom: 1px"></i>
                      <p>待发货</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="el-icon-truck" style="font-size: 40px;margin-left: 5px;margin-bottom: 1px"></i>
                      <p>待收货</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="el-icon-edit-outline" style="font-size: 40px;margin-left: 5px;margin-bottom: 1px"></i>
                      <p>待评价</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="el-icon-truck" style="font-size: 40px;margin-left: 5px;margin-bottom: 1px"></i>
                      <p>退款/售后</p>
                    </a>
                  </li>
                </ul>
                <!--右边内容结束-->
              </div>

            </el-card>
            <!--在上一个布局里面嵌套一个新的布局仍然是24分栏-->
            <el-row gutter="20">

            </el-row>

          </el-col>
        </el-row>
      </el-main>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      emp:{user:"",name:"",number:"",role:"",money:""},
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      fits: [ 'cover'],
      url: 'https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg',
      userArr:[
        {user: '待添加', name: '待添加', number: '15818881888', role: '程序员', money: '100',},
        {user: '待添加1', name: '待添加2', number: '16818881688', role: '程序员', money: '100', },
        {user: '待添加2', name: '待添加3', number: '18818881668', role: '程序员', money: '100',}],
    }

  },
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
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
  color: #d52f04;
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
ul.order-base{
  margin-bottom: 10px;
  border-bottom: 1px solid #f1f1f1;
  padding: 13px 0 5px 0;
}
ul.user-base-icon li {

  float: left;
  padding: 5px 20px;
  text-align: center;
  list-style-type:none;
}
ul.user-base-icon p {

  color: #fff8f8;
}
ul.user-base-icon {
  background: rgba(0,0,0,0.1);
  position: absolute;
  bottom: 20px;
  right: 10px;
}
.order-nav {
  padding: 10px 5px;
  border-bottom: 1px solid #f1f1f1;
  color: #797979;
}
.am-fr {
  float: right;
  color: #797979;
}
.nav-name{
  color: #797979;
}
.order-base{
  text-decoration: none;  /*去掉前面的圆点*/
  border-bottom:0px solid #ffffff;
  list-style: none;


}

ul.order-base{
  border-bottom:0px solid #ffffff;
}
.order-base li{
  float: left;/*横向排列li*/
  margin-left: 40px;
}
.order-base li i{
  color: #797979;
}
.order-base li p{
  color: #797979;
}
</style>