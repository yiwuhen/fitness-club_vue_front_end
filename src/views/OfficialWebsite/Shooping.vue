<template>
  <div id="app" style="margin: 0 auto">
    <!--顶部 logo 搜索 登录注册-->
    <div  style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
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
    <!--  上中下-->
    <el-container style="  width:1200px ;margin: 0 auto">
      <!-- 上面：表格-->
      <div style="margin: 1px 1px -11px 1px;display: inline-block">
        <div style="width: 1200px;
  height: 30px;
  background-color: #F5F7FA;
  padding: 10px 20px;margin: 10px" >

          <span style="font-size: 20px">查询数据条件9条</span>
          <div style="text-align: right;margin: -25px auto ;"><a href="" style="color: red">清除</a></div>
        </div>

        <ul style="padding: 1px 20px">
          <li>
            <div>
              <ul style="padding: 10px ;width: 1100px">
                <li style="padding: 30px 30px 13px;background-color: #f3f3f3;margin: 0 auto;"><span style="margin-bottom: 20px">品牌</span></li>
                <li><el-button style="padding: 1px 1px ; margin: 0px 5px;margin-bottom: 2px"><img src="http://106.55.25.190:8011/static/upload/images/brand/2019/02/25/1551064260180298.jpeg" style="margin: 0px 0px;width: 120px" alt=""></el-button></li>
                <li><el-button style="padding: 2px 2px ;margin: 5px 5px;margin-bottom: 2px"><img src="http://106.55.25.190:8011/static/upload/images/brand/2019/02/25/1551064277207182.jpeg" style="margin: 0px 0px; width: 120px" alt=""></el-button></li>
                <li><el-button style="padding: 2px 2px ;margin: 5px 5px;margin-bottom: 2px"><img src="http://106.55.25.190:8011/static/upload/images/brand/2019/02/25/1551064260180298.jpeg" style="margin: 0px 0px; width: 120px" alt=""></el-button></li>
                <li><el-button style="padding: 2px 2px ;margin: 5px 5px;margin-bottom: 2px"><img src="http://106.55.25.190:8011/static/upload/images/brand/2019/02/25/1551064277207182.jpeg" style="margin: 0px 0px; width: 120px" alt=""></el-button></li>
              </ul>
              <el-divider></el-divider>
            </div>
          </li>
          <li>
            <div>
              <ul style="padding: 10px ;width: 1100px">
                <li style="padding: 12px 30px 17px;background-color: #f3f3f3;margin: 0 auto;">分类</li>
                <li><el-button  size="mini">分类1</el-button></li>
                <li><el-button  size="mini">分类2</el-button></li>
                <li><el-button  size="mini">分类3</el-button></li>
                <li><el-button  size="mini">分类4</el-button></li>
                <li><el-button  size="mini">分类5</el-button></li>
                <li><el-button  size="mini">分类6</el-button></li>
                <li><el-button  size="mini">分类7</el-button></li>
                <li><el-button  size="mini">分类8</el-button></li>
              </ul>
              <el-divider></el-divider>
            </div>
          </li>
          <li>
            <div>
              <ul style="padding: 10px ;width: 1100px">
                <li style="padding: 12px 30px 17px;background-color: #f3f3f3;margin: 0 auto;">价格</li>
                <li><el-button  size="mini">100以下</el-button></li>
                <li><el-button  size="mini">100~300</el-button></li>
                <li><el-button  size="mini">300~600</el-button></li>
                <li><el-button  size="mini">600~1000</el-button></li>
                <li><el-button  size="mini">1000~1500</el-button></li>
                <li><el-button  size="mini">1500~2000</el-button></li>
                <li><el-button  size="mini">2000~3000</el-button></li>
                <li><el-button  size="mini">3000~4000</el-button></li>
                <li><el-button  size="mini">4000~5000</el-button></li>
                <li><el-button  size="mini">5000以上</el-button></li>
              </ul>
              <el-divider></el-divider>
            </div>
          </li>

        </ul>
      </div>

      <!--中间推荐内容显示-->

      <el-main style="margin: 0px;width: 1300px">
        <div>
          <el-button size="mini" round  style="border-radius:0px;margin: -5px">综合</el-button>
          <el-button size="mini" round style="border-radius:0px;margin: -5px">销量</el-button>
          <el-button size="mini" round style="border-radius:0px;margin: -5px">价格  </el-button>
          <el-button size="mini" round style="border-radius:0px;margin: -5px">最新</el-button>
        </div>
        <div style="width: 1180px;margin-top: 5px;padding-top: 1px;margin-right: 1px;">
          <el-row  :gutter="7" style="padding: 20px 20px 20px 20px;margin: 0 auto">
            <el-col :span="4" style="padding-left: 0;padding-right: 0;margin:0px 10px 10px 10px; width:205px ;">
              <div class="grid-content bg-purple">
                <a href="" class="TradeName">
                  <img src="	http://106.55.25.190:8011/static/upload/images/goods/2019/01/14/1547455566118614.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> 夏季复古ins风格网红SP同款 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>

                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>
            <el-col :span="4" style="padding-left: 0;padding-right: 0; margin:0px 10px 10px 10px; width:205px ;">
              <div class="grid-content ">
                <a href="" class="TradeName">
                  <img src="http://106.55.25.190:8011/static/upload/images/goods/2019/01/14/1547451909951171.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> Samsung/三星 SM-G8508S GALAXY 新品 闪耀白 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>
                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>
            <el-col :span="4" style="padding-left: 0;padding-right: 0; margin:0px 10px 10px 10px; width:205px ;">
              <div class="grid-content bg-purple">
                <a href="" class="TradeName">
                  <img src="http://106.55.25.190:8011/static/upload/images/goods/2019/01/15/1547540603500383.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> 纽芝兰包包女士2018新款潮百搭韩版时尚单肩斜挎包少女小挎包链条 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>
                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>
            <el-col :span="4" style="padding-left: 0;padding-right: 0; margin:0px 10px 10px 10px; width:205px ;">
              <div class="grid-content ">
                <a href="" class="TradeName">
                  <img src="	http://106.55.25.190:8011/static/upload/images/goods/2019/01/14/1547455566118614.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> 夏季复古ins风格网红SP同款 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>
                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>
            <el-col :span="4" style="padding-left: 0;padding-right: 0; margin:0px 10px 10px 10px; width:205px ;">
              <div class="grid-content bg-purple">
                <a href="" class="TradeName">
                  <img src="	http://106.55.25.190:8011/static/upload/images/goods/2019/01/14/1547455566118614.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> 夏季复古ins风格网红SP同款 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>
                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>
            <el-col :span="4" style="padding-left: 0;padding-right: 0; margin:10px 10px 10px 10px; width:205px ;">
              <div class="grid-content bg-purple">
                <a href="" class="TradeName">
                  <img src="	http://106.55.25.190:8011/static/upload/images/goods/2019/01/14/1547455566118614.jpg"  style="width: 100%" alt="">
                  <div style="height: 32px;">
                    <p style="padding-left: 10px"> 夏季复古ins风格网红SP同款 </p>
                  </div>
                </a>
                <p style="margin-top: 1px">
                  <span class="sales" style="float: left;text-decoration:line-through">￥0.00-422.00</span>
                  <span class="sales" style="float: right">销量 200011</span>
                </p>
                <p style="margin-top: 1px">
                  <span class="Price" style="float: left;">￥120.00</span>
                </p>
              </div>
            </el-col>

          </el-row>
        </div>



      </el-main>
      <!--下部分页列表 分割线-->

      <el-footer>
        <div style="text-align: center;">
          <el-pagination style="padding-top: 10px;"
                         background
                         layout="prev, pager, next"
                         :total="53"
                         :page-size="4">
          </el-pagination>
        </div>
      </el-footer>
    </el-container>
    <!--底部-->
    <div style="background: #555;
        height: 112px;
        width: 100%;
        padding-top:5px;
        float : right ;
        bottom : 0px ;">
      <template>
        <!--底部导航-->
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
        <p style="color:#b3b3b3;">Copyright © 2011 健身吧 www. jianshen .com . 版权所有 <a href="http://beian.miit.gov.cn/" rel="nofollow">
          京ICP备2022036109号-1</a></p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      input: '',
      fits: [ 'cover'],
      url: 'https://www.jianshen8.com/uploads/allimg/200619/5_200619094307_1.jpg',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, ]
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {

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