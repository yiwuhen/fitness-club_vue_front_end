$(function() {



    $('.search-but').click(function(e) {
        // e.preventDefault()
        var searchinfo = $('#search-info').val();
        location.href = 'http://so.jianshen8.com/cse/search?q='+encodeURIComponent(searchinfo)+'&s=2723595119741193104&nsid=0';
    });


   $('#search-info').keyup(function(event) {
     if (event.keyCode == 13)
        {
           $('.search-but').click()
        }
   });


    // 训练下滑弹出
    $('.training-slide').click(function(e) {
        // e.preventDefault()
        $('.training-slide-item').slideToggle('fast')
    });

    $(".back-top").click(function() {

        $('html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(window).scroll(function() {




        if ($(window).scrollTop() > 600) {
            $(".back-top").fadeIn()
        } else {
            $(".back-top").fadeOut()
        }


        // sidebar下滑到一定距离固定
        // var sidebaRight = ($(window).width() - 1200) / 2 ;
        //     if ($(window).scrollTop() >3100 && $(window).scrollTop() < 4000) {
        //     $(".sidebar >* ").not('.secondwh-wrapper,.jr-sort').hide()
        //     $('.picSidebar').next().show()
        //     $('.sidebar').css({
        //         position: 'fixed',
        //         top: '0',
        //         right:sidebaRight,
        //     });
        //     $('.article .sidebar').css('marginTop','0')
        // } else {
        //       $(".sidebar >* ").not('.secondwh-wrapper,.jr-sort').show()
        //         $('.sidebar').css({
        //         position: 'initial',
        //         top: 'none',
        //         right:'none'
        //     });
        //          $('.article .sidebar').css('marginTop','163px')
        // }


    })

    // 返回顶部根据不同屏幕定位
    var right = ($(window).width() - 1200) / 2 - 80
    $('.tool').css('right', right)
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.header').height()+$('.slider').height()){
            console.log('yes')
            $('.tool').css('display','block')
        }else{
            $('.tool').css('display','none')
        }
    });

// 图片懒加载
if(location.pathname=='/'){
       $("img.lazy").lazyload({
     placeholder : "//www.jianshen8.com/templets/jianshen8/images/default.jpg",//用图片提前占位
     effect: "fadeIn",
         threshold :500// 提前开始加载
    });

}



// 淘宝




    /*https://www.1diandian.net/11/1.gif*/
 // $("body").prepend('<div style="position:fixed;bottom:0;right:0;left:0;z-index:9999999;text-align:center;' +
 //     'background:#ca3a8d url() no-repeat center center"><a href="https://s.click.taobao.com/RkVoqKw" ' +
 //     'target="_blank"  style="display:inline-block;width:1150px;height:50px;">' +
 //     '</a><i class="top-close" style="position: absolute;top:5px;right:20px;font-size:24px; color:#fff;cursor:pointer">×</i>' +
 //     '</div>');
 //
 //
 //    $(".top-close").on("click",function(){
 //
 //        $(this).parent().hide();
 //
 //
 //    });



   //   var styleEle = '<style type="text/css">'+
   //            '.tmhb{position:fixed;z-index:999;top:15%;width:160px;height: 170px;margin-bottom:-180px;}' +
   //            '.tmhb .close{position: absolute;top: 0;left: 0;display: block;width: 20px;height: 20px; background: #ccc url(https://www.1diandian.net/11/2.png) no-repeat center center;-webkit-border-radius: 100%; border-radius: 100%; cursor: pointer;}'+
   //    '</style>';
   //    $("body").prepend(styleEle);
   //    $("body").append('<div class="tmhb"><a href="https://s.click.taobao.com/RkVoqKw" target="_blank"><img width="160" height="170" src="https://www.1diandian.net/11/3.gif"></a><i class="close"></i></div>');
   //      var $elems =$(".tmhb");
   //      $elems.css({
   //            "right":($(document).width()-1200)/2-170
   //
   //      });
   // $(".tmhb .close").on("click",function(){
   //      $(this).parent().remove();
   //
   //  });


// 淘宝end

})
