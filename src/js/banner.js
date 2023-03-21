$(function() {

   // 首页轮播

     $(".index-banner").slide({
    titCell:".hd ul", 
    mainCell:".bd ul", 
    effect:"fold",
    autoPlay:true, 
    autoPage:true,
    interTime: 6000
    // trigger:"click"
  });
 

	$(".slider").hover(function() {

	  $('.slider .bd li').length!==1&&$(".arrow").stop(true, true).fadeTo("show", 0.8)
	}, function() {
		 $('.slider .bd li').length!==1&&$(".arrow").fadeOut()
	});

    $('.slider .bd li').length==1&&$('.index-banner .hd,.arrow').hide()


	// 热点推荐下轮播
	$(".hot-banner").slide({
		titCell: ".bor_slide li",
		mainCell: ".main_content",
		effect: "top",
		autoPlay: true,
		interTime: 4000
	});

	// 热点推荐左右轮播
	/*鼠标移过，左右按钮显示*/
	$(".hot-banner1").hover(function() {
		$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.8)
	}, function() {
		$(this).find(".prev,.next").fadeOut()
	});
	/*SuperSlide图片切换*/
	$(".hot-banner1").slide({
		mainCell: ".pic",
		effect: "fold",
		autoPlay: true,
		delayTime: 600
	});




	// 图片页轮播
	$(".image-detaile-banner").slide({
		titCell: ".smallImg li",
		mainCell: ".bigImg",
		effect: "fold",
		prevCell: ".prev",
		nextCell: ".next",
		delayTime: 200,
		startFun: function(i, p) {
			//控制小图自动翻页
			if (i == 0) {
				$(".image-detaile-banner .sPrev").click()
			} else if (i % 6 == 0) {
				$(".image-detaile-banner .sNext").click()
			}
		}
	});

	//小图左滚动切换

	$(".image-detaile-banner .smallScroll").slide({
		mainCell: "ul",
		delayTime: 100,
		vis: 6,
		scroll: 6,
		effect: "left",
		autoPage: true,
		prevCell: ".sPrev",
		nextCell: ".sNext",
		pnLoop: false
	});
	//图片数量和当前页显示

	function showNum() {

		$('.js-image-length').html($('.pageState').html());
	}

	setInterval(showNum, 0);





})