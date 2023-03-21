<template>
  <!--肌肉九宫格-->
  <div id="app">
    <div id="jr-9">
      <span style="font-size: 30px">肌肉分类</span>
      <!--图片九宫格-->
      <div id="jr-box">
        <img :src="imgs1" alt="">
        <span id="jr-jingbu">颈部</span>
        <img :src="imgs2" alt="">
        <span id="jr-jianbu">肩部</span>
        <img :src="imgs3" alt="">
        <span id="jr-xiongbu">胸部</span>
        <img :src="imgs4" alt="">
        <span id="jr-bibu">臂部</span>
        <img :src="imgs5" alt="">
        <span id="jr-beibu">背部</span>
        <img :src="imgs6" alt="">
        <span id="jr-fubu">腹部</span>
        <img :src="imgs7" alt="">
        <span id="jr-yaobu">腰部</span>
        <img :src="imgs8" alt="">
        <span id="jr-tunbu">臀部</span>
        <img :src="imgs9" alt="">
        <span id="jr-tuibu">腿部</span>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/picture/jr-jingbu.png'
import img2 from '@/picture/jr-jianbu.png'
import img3 from '@/picture/jr-xiongbu.png'
import img4 from '@/picture/jr-bibu.png'
import img5 from '@/picture/jr-beibu.png'
import img6 from '@/picture/jr-fubu.png'
import img7 from '@/picture/jr-yaobu.png'
import img8 from '@/picture/jr-tunbu.png'
import img9 from '@/picture/jr-tuibu.png'
export default {
  data: function () {
    return {
      imgs1: img1,
      imgs2: img2,
      imgs3: img3,
      imgs4: img4,
      imgs5: img5,
      imgs6: img6,
      imgs7: img7,
      imgs8: img8,
      imgs9: img9,
    }
  },
  methods: {}
}
</script>

<style>
#jr-9{
  padding-top: 13px;
  padding-left: 10px;
  border:solid;
  border-width: 3px 0 0 0;
  border-color: red;
  background: #eaeaea;
  width: 320px;
  height: 400px;
}
#jr-box {
  width: 310px;
  height: 310px;
  margin: 20px 0px 0px 0px;
  display: flex;
  flex-direction: row;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(228, 226, 226);
}

#jr-box > img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

#jr-box:after {
  content: '';
  display: block;
  width: 100px;
}
#jr-box>span{
  font-size: 28px;
  color: white;
  position:absolute;
}
#jr-jingbu{
  top:30px;
  left:20px;
}
#jr-jianbu{
  top:30px;
  left:130px;
}
#jr-xiongbu{
  top:30px;
  left:230px;
}
#jr-bibu{
  top:130px;
  left:20px;
}
#jr-beibu{
  top:130px;
  left:130px;
}
#jr-fubu{
  top:130px;
  left:230px;
}
#jr-yaobu{
  top:230px;
  left:20px;
}
#jr-tunbu{
  top:230px;
  left:130px;
}
#jr-tuibu{
  top:230px;
  left:230px;
}
</style>