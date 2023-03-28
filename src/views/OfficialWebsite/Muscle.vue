<template>

  <div id="app">
    <!--顶部 logo 搜索 登录注册-->
    <div style="width: 1200px;height: 70px;margin: 0 auto;align-content: center;position: relative; ">
    <span>
      <img src="https://www.jianshen8.com/templets/jianshen8/images/logo.png" alt="">
      <el-input v-model="el_input" class="el-input__icon "
                suffix-icon="el-icon-search"
                placeholder="请输入内容"
                style="width:400px;
                    position: absolute;
                    top: 0;
                    bottom: 20px;
                    margin: 0px   15% 0;"></el-input>
      <a href="/login.html" style="float: right;" class="user">登录</a>
      <a href="/reg.html" style="float: right" class="user">注册</a>
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
      <el-menu-item index="1" style="margin: 0 0 0 20% ">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">器械</template>
        <el-menu-item index="2-1">器械1</el-menu-item>
        <el-menu-item index="2-2">器械2</el-menu-item>
        <el-menu-item index="2-3">器械3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">器械4</template>
          <el-menu-item index="2-4-1">器械4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">训练</template>
        <el-menu-item index="3-1">训练1</el-menu-item>
        <el-menu-item index="3-2">训练2</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">饮食</template>
        <el-menu-item index="4-1">饮食1</el-menu-item>
        <el-menu-item index="4-2">饮食2</el-menu-item>
      </el-submenu>
      <el-menu-item index="5" disabled>资讯</el-menu-item>
      <el-menu-item index="6"><a href="https://baidu.com" target="_blank">商城</a></el-menu-item>
    </el-menu>
    <div id="jr-top">
      <div id="jr-left">
        <img src="picture/blank-muscle-anatomy.jpg" alt="">
      </div>
      <div id="jr-right">
        <div id="jr-right-div">
          <ul style="padding: 50px 10px;background-color: #f3f3f3">
            <!--颈部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">颈部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">斜方肌</li>
                <li class="jr-right-li-detail">胸锁乳突肌</li>
              </ul>
            </li>
            <!--肩部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">肩部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">前束</li>
                <li class="jr-right-li-detail">中束</li>
                <li class="jr-right-li-detail">后束</li>
              </ul>
            </li>
            <!--胸部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">胸部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">胸大肌</li>
                <li class="jr-right-li-detail">胸小肌</li>
                <li class="jr-right-li-detail">胸肌中缝</li>
              </ul>
            </li>
            <!--臂部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">臂部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">肱二头肌</li>
                <li class="jr-right-li-detail">肱三头肌</li>
                <li class="jr-right-li-detail">前臂</li>
              </ul>
            </li>
            <!--背部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">背部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">背阔肌</li>
                <li class="jr-right-li-detail">菱形肌</li>
              </ul>
            </li>
            <!--腹部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">腹部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">腹外斜肌</li>
                <li class="jr-right-li-detail">腹直肌</li>
                <li class="jr-right-li-detail">六块腹肌</li>
              </ul>
            </li>
            <!--腰部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">腰部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">竖脊肌</li>
                <li class="jr-right-li-detail">髂肌</li>
                <li class="jr-right-li-detail">腰大肌</li>
              </ul>
            </li>
            <!--臀部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">臀部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">臀大肌</li>
                <li class="jr-right-li-detail">臀中肌</li>
                <li class="jr-right-li-detail">髋外展肌</li>
              </ul>
            </li>
            <!--腿部-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">腿部</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">股二头肌</li>
                <li class="jr-right-li-detail">股四头肌</li>
                <li class="jr-right-li-detail">小腿三头肌</li>
                <li class="jr-right-li-detail">大腿内收肌</li>
              </ul>
            </li>
            <!--全身训练-->
            <li>
              <ul class="jr-right-ul">
                <!--左侧分类-->
                <li class="jr-right-li"><span class="jr-right-span">全身训练</span></li>
                <!--右侧详细分类-->
                <li class="jr-right-li-detail">心肺</li>
                <li class="jr-right-li-detail">燃脂运动</li>
                <li class="jr-right-li-detail">肌肉解剖</li>
                <li class="jr-right-li-detail">肌肉拉伸</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--中间的-->
    <div id="jr-middle">
      <div>
        <span id="jr-middle-title">文章列表</span>
      </div>
      <ul class="jr-middle-list">
        <li>
          <a target="_blank" href="">
            <img src="picture/28_210114135624_1-lp.jpg">
            <h4>瘦腿健身动作介绍 一周变漫画腿不是梦</h4>
          </a>
        </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210115135045_1-lp.jpg">
          <h4>瘦腰健身动作大全 在家简单练出小蛮腰</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210115160837_1-lp.jpg">
          <h4>腰部塑形训练  轻松拥有小蛮腰</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210115170815_1-lp.jpg">
          <h4>背肌训练的黄金动作有哪些 助你练出倒三角</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210116142722_1-lp.jpg">
          <h4>练腹肌的健身动作 打造性感腹肌</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210116170133_1-lp.jpg">
          <h4>腰部肌肉器械锻炼方法 强化你的腰肌</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210116171106_1-lp.jpg">
          <h4>徒手背肌训练方法图解 让你的后背更有力</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210116172051_1-lp.jpg">
          <h4>慢跑减肥可以瘦大腿肌肉吗 慢跑和快跑哪个更瘦腿</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210118165030_1-lp.jpg">
          <h4>肩部肌肉器械锻炼方法 更深层的锻炼肩部肌肉</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210118170117_1-lp.jpg">
          <h4>新手背肌训练方法有哪些 高效提升背肌</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210119141140_1-lp.jpg">
          <h4>女性健身背部肌肉锻炼的动作有哪些</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210119165040_1-lp.jpg">
          <h4>背肌训练和胸肌训练能一起吗 胸和背一起练塑形效果怎么样</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210120145230_1-lp.jpg">
          <h4>女性健身腿部塑形的动作有哪些</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210120153304_1-lp.jpg">
          <h4>男士健身练腿的好处 这四点好处让你不得不练腿</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210120172246_1-lp.jpg">
          <h4>背肌训练要注意什么 练背动作要注意什么</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210122165427_1-lp.jpg">
          <h4>为什么背肌训练没有感觉 怎样合理安排背部训练</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210125152119_1-lp.jpg">
          <h4>女生健身举哑铃会让手臂变粗吗</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210125165718_1-lp.jpg">
          <h4>器械锻炼手臂力量的方法 强化手臂肌肉</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210125172508_1-lp.jpg">
          <h4>下背肌肉训练动作有哪些 四大运动方法练出完美背部</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210128143113_1-lp.jpg">
          <h4>提高腿部爆发力的健身动作 千万别错过</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210128160717_1-lp.jpg">
          <h4>男士健身练腰的动作 让你腰力十足</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210128171429_1-lp.jpg">
          <h4>背肌力量训练动作 很快练出雄壮背肌</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210130115451_1-lp.jpg">
          <h4>练背的健身动作有哪些 让你的背部快速升级</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210129163302_1-lp.jpg">
          <h4>居家背肌训练动作 帮你在家训练背部</h4>
        </a>
      </li><li>
        <a target="_blank" href="">
          <img src="picture/28_210129144517_1-lp.jpg">
          <h4>男士健身练胸肌的动作 这四种动作练出完美胸肌</h4>
        </a>
      </li>
      </ul>
    </div>
    <!--底部-->
    <div style="background: #555;
        height: 112px;
        width: 100%;
        padding-top:5px;
        float : right ;
        bottom : 0px ;">
      <div  class="button">
        <span><a href="/fuwu/about/abouts.html" rel="nofollow" >网站简介丨</a></span>

        <span> <a href="/fuwu/about/ads.html" rel="nofollow">商务合作丨</a></span>

        <span> <a href="/fuwu/about/cooperate.html" rel="nofollow">战略合作丨</a></span>

        <span>  <a href="/fuwu/about/contact.html" rel="nofollow">联系我们丨</a></span>

        <span>   <a href="/nav.html">网站导航</a></span>
      </div>
      <div class="button" >
        <p style="color:#b3b3b3;">Copyright © 2011 健身吧 www. jianshen .com . 版权所有 <a href="http://beian.miit.gov.cn/" rel="nofollow">
          京ICP备2022036109号-1</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {el_input:'',
      activeIndex2:''};
  },
  methods: {
    handleSelect:function () {

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

.el-breadcrumb {
  font-size: 20px;
  line-height: 2;
}

.el-divider--horizontal {
  margin: 5px 0;
}

.el-card__body {
  text-align: center;
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

#el-button {

  background: #d52f04;
  color: #ffffff;
  width: 200px;
  height: 50px;
  border: none;
  font-size: 18px;

}

#el-button:hover {
  visibility: visible;
}


.el-card__body {
  width: 400px;
}

.el-input-number__increase {
  background: #d52f04;
  color: #ffffff;
  width: 50px;
  font-size: 15px;
  line-height: 25px;
}
.el-input-number__increase:hover{
  color: #ffffff;
}
.el-input-number__decrease:hover{
  color: #ffffff;
}
.el-input-number__decrease {
  background: #d52f04;
  width: 50px;
  color: #ffffff;
  font-size: 15px;

}

.el-input-number__decrease.is-disabled {
  color: #ffffff;
  cursor: not-allowed;
}

.el-input-number.is-controls-right .el-input-number__increase{
  line-height: 25px;

}
.el-input-number.is-controls-right .el-input-number__decrease{
  line-height: 25px;

}

.el-input__inner {
  font-size: 15px;
  height: 50px;
  border: #d52f04 1px solid;
}

.el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: #d52f04;
}
.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: #d52f04;
}
.el-input__inner:hover {
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

.el-input__inner, .el-textarea__inner {
  background-image: none;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.el-color-picker__color, .el-input__inner, .el-textarea__inner, .el-transfer-panel {
  -webkit-box-sizing: border-box;
}




</style>
<script>
import "@/css/jirou.css";
</script>
<style scoped>

</style>