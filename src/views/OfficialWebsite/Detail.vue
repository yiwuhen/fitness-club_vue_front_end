<template>
  <div style="margin: 0 auto">

    <!--  上中下-->
    <el-container style="  width:1200px ;margin: 0 auto;height: auto">
      <!-- 上面：表格-->
      <el-header style="padding: 10px 20px">
        <!--导航-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品</el-breadcrumb-item>
          <el-breadcrumb-item>蛋白粉</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <!--中间图片显示-->
      <el-divider></el-divider>
      <el-main>
        <!--左右结构-->
        <el-container style="height: 500px;">
          <!--左边部分-->
          <el-aside width="500px" style="border: 1px solid #ffffff;text-align: center;box-shadow: 0 0 10px #ccc">

            <img src="https://pixl.decathlon.com.cn/p2134129/k$ac78aaf8814ddc6b024b2f1925557c72/sq/900.jpg" style="margin: 40px ;width: 400px;height: 400px">

          </el-aside>
          <el-main style=" width:700px; overflow-y:hidden">
            <!--标题-->
            <div class="tilte"><span>分离乳清蛋白粉 900 克 巧克力味</span></div>
            <el-divider></el-divider>

            <div style="background: #f5f5f5;padding: 5px 0px">
              <p style="font-size: 20px;font-weight: bold ;line-height: 1;margin-left: 10px">现价:<span
                  style="color: #ca141d;margin-left: 5px">￥2500.00</span></p>
              <p style="font-size: 20px;font-weight: bold;line-height: 1;margin-left: 10px">原价:<span
                  style="color: #909399;margin-left: 5px"><s>￥3000.00</s></span></p>
              <p style="font-size: 20px;font-weight: bold;margin-left: 10px">销售类型:
                <el-tag style="margin-left: 10px"
                        type="danger"
                        effect="plain">
                  现货速发
                </el-tag>
              </p>
            </div>
            <div>


            </div>
            <el-divider ></el-divider>
            <div style="height: 260px">
              <div style="float:left">
                <span style="font-size: 20px;font-weight: bold">选择规格</span>
              </div>
              <template >
                <div style="height: 160px; ">
                  <el-radio size="small" v-model="radio" :label="index"
                            v-for="(item,index) in radioArr" @change="getValue"
                            style="margin-left: 10px ;margin-top: 10px" border>
                    {{item}}
                  </el-radio>

                  <el-divider style="margin-top: 10px"></el-divider>
                </div>
              </template>

              <div style="margin-top: 10px;height: 50px;">
                <template>
                  <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1"
                                   :max="10" style="margin-left: 20px"></el-input-number>
                </template>
                <button id="el-button" style="margin-left: 180px">立刻下单</button>
              </div>
            </div>




          </el-main>
        </el-container>

      </el-main>
      <!--下部分页列表-->
      <el-divider></el-divider>
      <el-footer style="height: auto;text-align: center">
        <a style="margin-left: 10px;text-decoration: none;color: #1a1a1a" href="javascript:void(0);"@click="setDisplay"><span style="text-align: center;font-size: 20px;font-weight: bold" >商品详情</span></a>
        <a style="margin-left: 10px;text-decoration: none;color: #1a1a1a" href="javascript:void(0);"@click="setHide"><span style="text-align: center;font-size: 20px;font-weight: bold" >商品评论</span></a>

        <ul v-if="show" >
          <li style="list-style: none;margin-bottom: 5px" v-for="item in product" >
            <img :src="item.url"style="display: block;margin: 0 auto">
          </li>

        </ul>
        <!--用户评论-->
        <div v-else style="margin-top: 20px">
          <div style="line-height: 2;text-align: center">
            <!--输入框-->
            <!--                     <el-input-->
            <!--                             type="textarea"-->
            <!--                             autosize-->
            <!--                             placeholder="请输入内容"-->
            <!--                             v-model="textarea1"-->

            <!--                             style="width: 60%;height: 40px"-->
            <!--                               >-->
            <!--                     </el-input>-->
            <!--textarea
                    autocomplete="off"
                    placeholder="请输入内容"
                    class="el-textarea__inner"
                    style="min-height: 33px;
                           height: 40px;
                           width: 60%;
                           display: inline-block;">

            </textarea>-->
            <el-input v-model="textarea1" placeholder="请输入内容" style="border: 1px solid silver;height: 30px;width: 80%" id="input_pinlun" ></el-input>
            <!--按钮-->
            <el-button type="primary" style="padding: 20px ">发布</el-button>
          </div>
          <!--分割线-->
          <el-divider></el-divider>
          <div>
            <!--评论列表-->
            <div style="height: 500px;width: 90%">
              <ul style="list-style: none">
                <li style="text-align: left" v-for="i in pinglun">
                  <div style="height: auto;margin-left: 40px">
                    <div ><p style="padding-left:0;font-size: 15px;font-weight:bold">{{i.name}}说</p></div>
                    <div style="margin-left: 60px">
                      <p >{{i.content}}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      pinglun:[
        {name:'jack',content:'的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多 ' +
              '多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n'},
        {name:'Bom',content:'的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多 ' +
              '多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n'},
        {name:'qin',content:'的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多 ' +
              '多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n'},
        {name:'yyyy',content:'的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多 ' +
              '多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 的点点滴滴多多多多多多多多多多多多多多多多多多多多多多多\n' +
              ' 多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多\n'},
      ],
      textarea1:'',
      product:[
        {id:1,url:"https://pixl.decathlon.com.cn/s935553/k$6453ec01d505a96a65e5d72063c4e214/s935553.jpg"},
        {id:1,url:"https://pixl.decathlon.com.cn/s935558/k$c234465e91d6bfc98e109b09bb9aab66/s935558.jpg"},
        {id:1,url:"https://pixl.decathlon.com.cn/s935556/k$1e31a04f7f5bf19a4adf146636b769c0/s935556.jpg"},
        {id:1,url:"https://pixl.decathlon.com.cn/s935557/k$a7239c46cc81e2a89ab506d8c5abc010/s935557.jpg"},
        {id:1,url:"https://pixl.decathlon.com.cn/s935554/k$38198bac17edc71ed3f5ebfe23a07adf/s935554.jpg"},
      ],
      show:true,
      el_input: '',
      activeIndex2: "",
      radio: "radio1",
      num: 1,
      radioArr: [
        "700ml",
        "500ml",
        "600ml",
        "400ml",
        "1000ml",
        "1200ml",
        "2000ml",


      ]

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