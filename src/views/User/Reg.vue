<template>
  <div >
    <el-container>

      <el-main >
        <!--卡片-->
        <el-card class="box-card" style="width: 340px; height: 450px;margin: 0 auto;margin-top:100px ">
          <div slot="header" class="clearfix" >
            <p style="text-align: center;font-size: 25px;margin-top: 5px;margin-bottom: 5px" >欢迎注册</p>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div class="demo-input-suffix">
            <el-input
                placeholder="请输入手机号"
                suffix-icon="el-icon-mobile-phone"
                v-model="input1"  class="input_login">
            </el-input>
            <el-input
                placeholder="请输入用户名"
                v-model="user.username" class="input_login">
            </el-input>
          </div>
          <div class="demo-input-suffix">
            <el-input
                placeholder="请输入密码"
                v-model="user.password"  class="input_login" show-password>
              <i slot="suffix" class="el-input__icon el-icon-lock"></i>
            </el-input>
            <!--下拉-->
            <template>
              <el-select v-model="value" placeholder="请选择" style="width: 300px">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </template>
            <template>
              <!--单选框-->
              <el-checkbox v-model="checked" >
                我已阅读并同意  <el-button type="text" @click="dialogVisible = true">注册协议</el-button>
              </el-checkbox>
              <!--提示注册协议-->
              <el-dialog
                  title="注册协议"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose">
                <span>暂无注册协议，就是随便的</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">拒 绝</el-button>

    <el-button type="primary" @click="dialogVisible = false">接 受</el-button>
  </span>
              </el-dialog>
            </template>
            <el-row style="text-align: center">
              <el-button type="primary" style="margin-top: 20px;margin-bottom: 0px" @click="reg()">注册</el-button>
            </el-row>

          </div>
        </el-card>

      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      input:'',
      input1:'',
      activeIndex2:'',
      wd:"",
      user:{username:"",password:""},
      options: [{
        value: '选项1',
        label: '设计市'
      }, {
        value: '选项2',
        label: '程序源'
      }, {
        value: '选项3',
        label: '前端'
      }],
      input4: '',
      radio: '1',
      dialogVisible: false,
      activeIndex: '6',
      checked: false,
      value: ''
    }

  },
  methods:{
    reg(){
      axios.post("/reg",v.user).then(function (response) {
        if (response.data==1){
          alert("注册成功!");
          location.href = "/";
        }else{
          alert("用户名已存在!");
        }
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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