
// 2017双11ad
// document.writeln("<style>");
// document.writeln("    .r-close-small1 {");
// document.writeln("        width: 20px;");
// document.writeln("        height: 20px;");
// document.writeln("        position: absolute;");
// document.writeln("        right: 10px;");
// document.writeln("        top: 10px;");
// document.writeln("        background: url(//sports.eastday.com/jscss/v4/img/ssy/r_close.png) no-repeat;");
// document.writeln("        background-size: 100%;");
// document.writeln("        z-index: 9999995;");
// document.writeln("    }");
// document.writeln("");
// document.writeln("");
// document.writeln("    .r-banner-small1 {");
// document.writeln("        width: 1200px;");
// document.writeln("        height: 44px;");
// document.writeln("        margin: 0 0 0 -600px;");
// document.writeln("    }");
// document.writeln("");
// document.writeln("    .r-banner-small1 {");
// document.writeln("        position: fixed;");
// document.writeln("        left: 50%;");
// document.writeln("        bottom: 0px;");
// document.writeln("        z-index: 999999;");
// document.writeln("        background: url(//www.1diandian.net/11/1.gif) top center no-repeat;");
// document.writeln("    }");
// document.writeln("");
// document.writeln("    .r-banner-small1 a {");
// document.writeln("        width: 100%;");
// document.writeln("        height: 100%;");
// document.writeln("        display: block;");
// document.writeln("    }");
// document.writeln("");
// document.writeln("    .r-no {");
// document.writeln("        display: none;");
// document.writeln("    }");
// document.writeln("</style>");


     // 底部
   // var adlinks = 'https://s.click.taobao.com/RkVoqKw';
   //  var ahtml = '<div class="r-banner-small1"><span class="r-close-small1" ></span><a  href="' + adlinks + '" target="_blank" id="index_ad_3" ></a></div>';
   //  $('body').append(ahtml)
   //  $('.r-close-small1').click(function() {
   //      $('.r-banner-small1').fadeOut(500)
   //  })


// 2017双11ad end

// 二维码弹出
 

        var jsb_link = location.pathname


        // 遮罩层和弹出框
        function jsbPopup() {

            // 创建二维码图



            var jsb_ewm_wrap = document.createElement('div')
            jsb_ewm_wrap.style.cssText = "background: rgb(255, 255, 255); width: 590px;  position: fixed; left: 50%; margin-left: -295px; z-index: 1000000; top: 50%; margin-top: -170px;"

            jsb_ewm_wrap.innerHTML = ' <img src="//www.jianshen8.com/blgg/img/jsb_erm_close.png" class="jsb_erm_close"  style="position:absolute;right: -42px;top: -32px" ;> <img class="jsb_ewm_pic"  src="" >'

            document.body.appendChild(jsb_ewm_wrap)

            if (jsb_link.indexOf('jirou') >= 0 || jsb_link.indexOf('plan') >= 0) {
                // 健身二维码
                document.querySelector('.jsb_ewm_pic').src = '//www.jianshen8.com/blgg/img/jsb_ewm_popup.jpg'
            } else if (jsb_link.indexOf('yingyang') >= 0) {
                // 饮食二维码
                document.querySelector('.jsb_ewm_pic').src = '//www.jianshen8.com/blgg/img/jsb_ewm_popup1.jpg'
            }



            // 获取页面的高度和宽度
            var sWidth = document.body.clientWidth;
            var sHeight = document.body.clientHeight;
           
            var o_mask = document.createElement('div')

            o_mask.style.cssText = " background-color: #000; opacity: 0.8; filter: alpha(opacity=80);position: absolute;left: 0;top: 0;z-index: 10000;"
            o_mask.style.height = sHeight + 'px'
            o_mask.style.width = sWidth + 'px';
            document.body.appendChild(o_mask)

            // document.body.style.overflow='hidden'

            // 点击遮罩部分也关闭
            document.querySelector('.jsb_erm_close').onclick = o_mask.onclick =
                function() {
                    document.body.removeChild(o_mask);
                    jsb_ewm_wrap.style.display = 'none'
                }
        }






        // localStorage,一天内弹出一次
        if (jsb_link.indexOf('jirou') >= 0 || jsb_link.indexOf('plan') >= 0 ) {
            if (localStorage.firstPopup) {
                console.log(new Date().getTime() - localStorage.firstPopup +'time0')
                if (new Date().getTime() - localStorage.firstPopup > 0) {
                    // 过期重新设置 localStorage  
                    var out_time = new Date().getTime() + 1000 * 60*60*24;
                    localStorage.setItem("firstPopup", out_time);

                    // 弹出二维码
                    jsbPopup()
                }


            } else {

                var out_time = new Date().getTime() + 1000 * 60*60*24;

                localStorage.setItem("firstPopup", out_time);

                // 弹出二维码
                jsbPopup()

            }

        }else if(jsb_link.indexOf('yingyang') >= 0){

            if (localStorage.firstPopup1) {
                console.log(new Date().getTime() - localStorage.firstPopup1+'time1')
                if (new Date().getTime() - localStorage.firstPopup1 > 0) {
                    // 过期重新设置 localStorage  
                    var out_time1 = new Date().getTime() + 1000 * 60*60*24;
                    localStorage.setItem("firstPopup1", out_time1);

                    // 弹出二维码
                    jsbPopup()
                }


            } else {

                var out_time1 = new Date().getTime() + 1000 * 60*60*24;

                localStorage.setItem("firstPopup1", out_time1);

                // 弹出二维码
                jsbPopup()

            }




        }



        // 健身之星

// $(function(){

 // $('<img src="http://www.jianshen8.com/blgg/img/jsbs.png" style="display: block" >').prependTo($('body'));



   //      var jsb_link1 = location.href


   //      // 遮罩层和弹出框
   //      function jszxPopup() {

   //          // 创建二维码图

   //          var jsb_ewm_wrap = document.createElement('div')
   //          jsb_ewm_wrap.style.cssText = "background: rgb(255, 255, 255); width: 590px;  position: fixed; left: 50%; margin-left: -295px; z-index: 1000000; top: 50%; margin-top: -170px;"

   //          jsb_ewm_wrap.innerHTML = ' <img src="http://www.jianshen8.com/blgg/img/jsb_erm_close.png" class="jsb_erm_close"  style="position:absolute;right: -42px;top: -32px" ;> <img class="jsb_ewm_pic"  src="" >'

   //          document.body.appendChild(jsb_ewm_wrap)

   //          if (jsb_link1=="http://www.jianshen8.com/") {
   //              // 健身二维码
   //              document.querySelector('.jsb_ewm_pic').src = 'http://www.jirou.com/uploads/171130/143-1G1301FS4U4.jpg';
   //              document.querySelector('.jsb_ewm_pic').style.display='block'
   //          } 



   //          // 获取页面的高度和宽度
   //          var sWidth = document.body.clientWidth;
   //          var sHeight = document.body.clientHeight;
   //          console.log(sHeight)
   //          var o_mask = document.createElement('div')

   //          o_mask.style.cssText = " background-color: #000; opacity: 0.8; filter: alpha(opacity=80);position: absolute;left: 0;top: 0;z-index: 10000;"
   //          o_mask.style.height = sHeight + 'px'
   //          o_mask.style.width = sWidth + 'px';
   //          document.body.appendChild(o_mask)

   //          // document.body.style.overflow='hidden'

   //          // 点击遮罩部分也关闭
   //          document.querySelector('.jsb_erm_close').onclick = o_mask.onclick =
   //              function() {
   //                  document.body.removeChild(o_mask);
   //                  jsb_ewm_wrap.style.display = 'none'
   //              }
   //      }

   //    // 大图弹出
   //  if(localStorage.jszxFirst){
  
     
   //  }else{
   //     if (jsb_link1=="http://www.jianshen8.com/") {
   //          jszxPopup()
   //          } 
      
   //  }
  
   // localStorage.setItem("jszxFirst",'true');



// })
