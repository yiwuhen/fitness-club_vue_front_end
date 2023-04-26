<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
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
<style>
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
