var isMobile = false,
	w_width =  0,
	w_height = 0,
	$mtoph = 0,
	ST = 0,
	navItem = 0,
	$menuBtn=$('.menu-handler'),
	$menuBox=$(".menuBox");

//移动端事件和PC事件的切换
var _mousemove;
var _click;
var _mousedown;
var _mouseup;
if (Modernizr.touch) {
    _mousemove = "touchmove";
    _click = "touchend";
    _mousedown = "touchstart";
    _mouseup = "touchend";
} else {
    _mousemove = "mousemove";
    _click = "click";
    _mousedown = "mousedown";
    _mouseup = "mouseup";
};

function pageBox() {
   	w_width = $(window).width();
    w_height = $(window).height();
	$mtoph = $('.header').height();
    if (w_width <= 1024) {
        isMobile = true;
    } else if (w_width > 1024) {
        isMobile = false;
    };
	if(isMobile){
		var danNum=0;
		$('.pnav ul').css('display','none');
		$('.pnav').bind('click',function(){
			if(danNum==1){
				$(this).removeClass('show');
				$(this).find('ul').stop().fadeOut();
				danNum = 0;
			}else{
				$(this).addClass('show');
				$(this).find('ul').stop().fadeIn();
				danNum = 1;
			}
		});
	}else{
		$('.pnav').removeClass('show');
		$('.pnav ul').css('display','block');
		$('.pnav').unbind('click');
	}
};

pageBox();
$(window).resize(function () {
    pageBox();
});
$(function () {
	/* var _str = $('.header .h-phone'),
		 _str_word = _str.text().split('');
		 _str.text('');
	for (var i in _str_word) {
		_str.append('<i style=" animation-delay: ' + (100 + (i * 100)) + 'ms">' + _str_word[i] + '</i>');
	} */
	/* $menuBtn.bind(_click, function () {
		$('.content').addClass('active');
		$menuBox.addClass('menuShow');
		$('.menuBlack').addClass('show');
    });
	$('.menuBlack,.menuClose').click(function(){
		$('.content').removeClass('active');
		$menuBox.removeClass('menuShow');
		$('.menuBlack').removeClass('show');
	}); */
	/* $('.navMobile dd p a').click(function(e){
		if($(this).parent().next('.mtnav').size() >= 1){
			if(!$(this).hasClass('act')){
				e.preventDefault();
				$('.navMobile dd p a').removeClass('act');
				$('.mtnav').stop().slideUp(300);
				$(this).addClass('act');
				$(this).parent().next('.mtnav').stop().slideDown(300);
			}else{
				$(this).removeClass('act');
				$(this).parent().next('.mtnav').stop().slideUp(300);
			}
		}
	}); */
	/* function changeHeader(){
		var ST = $(window).scrollTop();
		if($('.mtop').size()==0){
			if( ST > w_height - $headerh ){
				$('.header').addClass('sheader');
			}else{
				$('.header').removeClass('sheader');
			}
		}else{
			return;
		}
	};
	changeHeader();
	if($('.mtop').size()!=0){
		$('.header').addClass('sheader');
	} */
	$(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		if (windowTop < w_height && !isMobile) {
			$('.pbanner .pic2').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
		};
    });
	/*
    var $pbanner=jQuery(".pbanner");
    if($pbanner.length>=1){
	    setTimeout(function() {
	      $pbanner.addClass('trans-1');
	      $pbanner.removeClass('picw');
	    }, 100);
    }; */
	/* $(document).on('click','.depbox,.depclose',function(e){
		if ($(e.target).hasClass('depbox')||$(e.target).hasClass('depclose')) {
			if(!$('.depbox').hasClass('hide')){
				$('.depbox').addClass('hide');
			}else{
				$('.depbox').removeClass('show');
			}
			$('html').removeClass('open');
			setTimeout(function(){
				$('.depbox').remove();
			},600);
		}
	}); */
	/* function gotoAbDetail(item,address){
		$.ajax({
			url: address,
			dataType: "html",
			success: function (data) {
				if (data == "" || data == null) {
					return;
				}
				else {
					if($('.depbox').size()!=0){
						$('.depbox').remove();
						$('.content').after(data);
						$('.depbox').removeClass('hide');
						$('html').addClass('open');
					}else{
						$('.content').after(data);
						setTimeout(function(){
							$('html').addClass('open');
							$('.depbox').addClass('show');
						},100);
					}
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				$('.depbox').remove();
			}
		});
	}; */
	/* $(document).on('click','.adBtn',function(e){
		e.preventDefault();
		var $this = $(this);
		gotoAbDetail($this, $this.attr("chref"));
	}); */


	/* $('.mtnav a').click(function(){
		var mhash = $(this).attr('href').split("#")[1];
        if (mhash) {
			$('.content').removeClass('active');
			$menuBox.removeClass('menuShow');
			$('.menuBlack').removeClass('show');
            jQuery("html,body").animate({ scrollTop: jQuery("#"+mhash).offset().top-$headerh},800,'easeInOutExpo');
        }
	});	 */
	//weixin
	/* setPopUp($('.weixin'), "官方微信");
	function setPopUp(obj, title) {
		obj.click(function () {
			var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
		$("body").append(str);
		jQuery(".popUpblack").fadeIn();
		jQuery(".popUp").animate({marginTop:"-127"},400);
		$(".popUp .close").click(function () {
			$(".popUpblack").remove();
		});
		jQuery(".popUpblack").click(function(){$(".popUpblack").remove();});
			return false;
		});
	};  */

	function setScroll(anchorCur){
		if(jQuery(anchorCur).length>=1){
			jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top-$mtoph}, 0);
		}
	};
	window.onload = function () {
		var hash = location.href.split("#")[1];
		if (hash) {
			setScroll("#" + hash);
		}
	};
	jQuery(".pnav a").click(function(){
		var $this=jQuery(this);
		var hash = $this.attr("href").split("#")[1];
		if(hash && jQuery("#"+hash).length>=1){
			jQuery("html,body").animate({ scrollTop: jQuery("#"+hash).offset().top-$mtoph},800,'easeInOutExpo');
		}
	});
	$('.viBtn').click(function () {
		Video.load({
			vcontainer: 'videobox',
			vfimg: jQuery(this).attr("data-video-image"),
			vfiles: jQuery(this).attr("data-video-url"),
			isautoplay: 'true'
		});
		$(".vwrap").fadeIn();
	});
	$(".vwrap .close,.vwrap .videobtg").click(function () {
		 objplay.stop();
		$(".vwrap").hide();
		$('#videobox').html("");
	});
	$('.banner-box .mouse').click(function(){
		jQuery("html,body").animate({ scrollTop:w_height-$mtoph}, 800);
	});

	$('#top').click(function(){
		$('html,body').stop().animate({scrollTop:0},500,"easeInOutExpo");
	});
	var isopen = 0;
	$('.flinkmore').mouseenter(function(){
		if(isopen==0){
			isopen = 1;
			$('.flinkmore .b').stop().slideDown(300);
		}
	}).mouseleave(function(){
		isopen = 0;
		$('.flinkmore .b').stop().slideUp(300);
	});
	$menuBtn.bind(_click, function () {
        if (navItem == 0) {
            jQuery(this).addClass("active");
            $menuBox.show().stop(false,false).animate({top:0});
            navItem = 1;
        } else {
            $(this).removeClass("active");
            $menuBox.stop(false,false).animate({top:-100+"%"},function(){
                $(this).hide();
            });
            navItem = 0;
        };
    });
	$('.navMobile dd p a').click(function(e){
		if($(this).parent().next('.mtnav').size() >= 1){
			if(!$(this).hasClass('act')){
				e.preventDefault();
				$('.navMobile dd p a').removeClass('act');
				$('.mtnav').stop().slideUp(300);
				$(this).addClass('act');
				$(this).parent().next('.mtnav').stop().slideDown(300);
			}else{
				$(this).removeClass('act');
				$(this).parent().next('.mtnav').stop().slideUp(300);
			}
		}
	});

/*	$('.f-wx').mouseenter(function(){
		$(this).find('.t').addClass('act');
		var b = $(this).find('.b');
		b.show(function(){
			b.addClass('show');
		})
	}).mouseleave(function(){
		var b = $(this).find('.b');
		b.removeClass('show',function(index, class) {
            $(this).hide();
        });
	});*/
});
/* $(document).on('click','.overlayClose',function(){
 	$('.imgShowBox').removeClass('img-show');
    jQuery('html').removeClass('openImg');
    setTimeout(function () { jQuery('.imgShowBox').remove(); }, 800);
}); */
/* function openshowImg(num,maxnum) {
    $('html').addClass('openImg');
    jQuery("body").append('<div class="imgShowBox"><ul class="imgstools clearfix"><li><div class="imgPrev"></div></li><li><div class="snumBox"><span class="actnum">0</span>/<span class="allnum">0</span></div></li><li><div class="imgNext"></div></li><li class="lastItem"><a class="overlayClose"><i></i></a></li></ul><div class="imgShowDemo"></div></div>');
    $(".imgstools .snumBox .actnum").html(num);
    $(".imgstools .snumBox .allnum").html(maxnum);
    for(var i = 1 ; i <= maxnum ; i++){
		$('.imgShowDemo').append('<div class="item"><div class="txt"><div class="i"></div></div><img src="" class="img"/></div>');
		var imgurl = $("[data-num="+i+"]").attr('data-img');
		var imgtitle = $("[data-num="+i+"]").attr('data-title');
		$('.imgShowDemo .item').eq(i-1).find(".img").attr("src",imgurl);
		$('.imgShowDemo .item').eq(i-1).find('.i').html(imgtitle);
	}
    $(".imgShowBox").css({ height: w_height });
    $('.imgShowDemo').css({ height: w_height });
    $('.imgShowDemo .item').css({ height: w_height });

    jQuery(window).resize(function(){
		$(".imgShowBox").css({ height: w_height });
        $('.imgShowDemo').css({ height: w_height });
        $('.imgShowDemo .item').css({ height: w_height });
    });

	var imgowl=$('.imgShowDemo').slick({fade:true}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".imgstools .snumBox .actnum").html(nextSlide+1);
	});
	$('.imgstools .imgPrev').click(function(e){
		e.preventDefault();
		imgowl.slick('slickPrev');
	});
	$('.imgstools .imgNext').click(function(e){
		e.preventDefault();
		imgowl.slick('slickNext');
	});
  	$('.imgShowDemo').slick('slickGoTo',num-1);
  	$('.imgShowBox').addClass('img-show');
}; */
function setImgMax(img, imgW, imgH, tW, tH) {
    var tWidth = tW || w_width;
    var tHeight = tH || w_height;
    var coe = imgH / imgW;
    var coe2 = tHeight / tWidth;
    if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
    } else {
        var imgHeight = tWidth * coe;
        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
    };
};
var objplay;
var Video = {
	load: function (objs) {
		objplay = jwplayer(objs.vcontainer).setup({
			flashplayer: 'js/video/flashplay.swf',
			html5player: 'js/video/html5player.js',
			file: objs.vfiles,
			image: objs.vfimg,
			width: '100%',
			height: '100%',
			aspectratio: '16:9',
			stretching: 'fill',
			controls: 'true',
			autostart: objs.isautoplay
		});
		return objplay;
	}
};

