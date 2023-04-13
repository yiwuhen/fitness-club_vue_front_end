<template>
  <div style="margin: 0 auto">
    <!--  上中下-->
    <el-container style="width:1200px ;margin: 0 auto;height: auto">
      <!--文章详情内容 -->
      <el-main>
        <div >
          <!-- 标题 -->
          <p style="font-size: 40px;font-weight: bold;margin-bottom: 1px;">{{ tableData.title }} </p>
          <!-- 时间 -->
          <div style="text-align: left;margin-top: 10px;margin-bottom: -20px;margin-left: 10px">
            <b style="font-size: 14px;text-align:right;color: #404040">浏览量:&nbsp; {{tableData.viewCount}}</b>
          </div>
          <div style="text-align: right">

            <b style="font-size: 12px;text-align:right;color: #636363">发布时间:&nbsp; {{tableData.gmtModified}}</b>
          </div>
          <hr>
          <!-- 文章详情 -->
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
    /*获取单选框选中的值*/
    getValue(index) {
      console.log(index);
    },
    loadArticleList() {
      //接受上级页面传来的id参数
      let id = this.$route.query.id;

      console.log(this.$route)
      console.log("文章id:"+id)

      let url = 'http://localhost:10001/articles/front/'+ id ;
      console.log('url = ' + url);

      this.axios
          .get(url).then((response) => {
        let responseBody = response.data;
        this.tableData = responseBody.data;
        console.log("文章标题:"+this.tableData.title)
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