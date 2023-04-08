<template>
  <div id="app">
    <el-container>

      <!--登录-->
      <el-main >
        <!--卡片-->
        <el-card class="box-card" style="width: 300px; height: 400px;margin: 0 auto;margin-top: 100px">
          <div slot="header" class="clearfix" >
            <p style="text-align: center;font-size: 25px;margin-top: 5px;margin-bottom: 5px" >欢迎登录</p>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div class="demo-input-suffix">
            <el-input
                placeholder="请输入账号"
                suffix-icon="el-icon-user-solid"
                v-model="user.username"  class="input_login">
            </el-input>
            <el-input
                placeholder="请输入密码"
                suffix-icon="el-icon-lock"
                v-model="user.password" class="input_login" show-password>
            </el-input>
            <a href="" style="font-size: 10px;text-decoration: none;margin-left: 5px;color: #409EFF">忘记密码?</a>
          </div>

          <el-row style="text-align: center">
            <template><el-button :plain="true" type="primary" style="margin-top: 20px;margin-bottom: 0px"  @click="login">登录</el-button></template>

            <p><a href="reg" style="font-size: 8px;text-decoration: none;margin:0 auto;color: #797979">没有账号?去注册</a></p>

          </el-row>


        </el-card>

      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {username: "", password: ""},
      radio: '1',
      dialogVisible: false,
      activeIndex: '5',
      activeIndex2:'',
      input:'',
    }

  },
  methods:{


    login(){
      axios.post("/login",v.user).then(function (res) {

        if (res.data==1){//判断是否登录成功
          alert("登录成功!");
          location.href = "/.";


        }
        else if(res.data==2){
          alert("密码错误!");
          return location.href = "/login.html";
        } else{
          alert("用戶名不存在");
          return location.href = "/login.html";
        }
        //location.href = "/";//登录成功返回首页
      })




    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>


<style>
.el-header a{
  text-decoration: none;/*无下划线*/
  font-size: 24px;
  color: #333334;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;

}
.input_login{
  margin-top: 5px;
  margin-bottom: 5px
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-checkbox__input.is-checked+.el-checkbox__label{


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