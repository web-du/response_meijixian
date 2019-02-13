// 实时获取屏幕的大小
window.onresize = function(){
    var swc = document.documentElement.clientWidth;
    if(swc == 0){
        swc = document.body.clientWidth;
    }
    if(swc == 0){
        swc = window.screen.width;
    }

    document.documentElement.style.fontSize = swc / 19.2 + "px";
}

var swc = document.documentElement.clientWidth;
if(swc == 0){
    swc = document.body.clientWidth;
}
if(swc == 0){
    swc = window.screen.width;
}

document.documentElement.style.fontSize = swc / 19.2 + "px";


$(function(){
    
    var nowIndexL = {};
    //移动的对象
    var moveObj = $(".header .con .nav-search > ul .move");
    //头部nav
    var headerNav = $(".header .con .nav-search>ul>li");
    //头部搜索按钮
    $(".header .search-img").click(function(){
        $(".header .search-con").stop(true).slideToggle('fast');
    });
    $('.search-con .sure').click(function(){ 
        $(".header .search-con").stop(true).slideToggle('fast');
    })


    //鼠标移动
    var fW = (function(){
        //默认获取第一个有on类的link
        var nowdefault = {};
        headerNav.each(function(){
            if($(this).find(".on").length){
                nowdefault.l = $(this).position().left;
                nowdefault.w = $(this).find("a").width();
            }
        })
        moveObj.css({'width':nowdefault.w,"left":nowdefault.l})
        return nowdefault;
    }());

    headerNav.hover(function(i){
        var W = $(this).find("a").width(); 
        var L = $(this).position().left;
        nowIndexL.w = W;
        nowIndexL.l = L;
        moveObj.css({'left':L,'width':W});
    },function(){
        nowIndexL.w = fW.w;
        nowIndexL.l = fW.l;
        setTimeout(function(){
            moveObj.css({'left':nowIndexL.l,'width':nowIndexL.w});
        },150)
    })



    //返回顶部
    $(".Totop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $(".Totop").show();
        }else{
            $(".Totop").hide();
        }

        if($(this).scrollTop()>100){
            $(".header").addClass("on");
            $(".menu-handler .burger").css("background-color","#000");
        }else{
            $(".header").removeClass("on");
            $(".menu-handler .burger").css("background-color","#fff");
        }
    })
    $(".Totop").click(function(){
        $('html,body').animate({
            scrollTop:0},300);
    })



    //点击免费咨询
    $(".new-zx").click(function(){
        $(".new-zx-box").show();
    })
    $(".new-zx-box .zy>img").click(function(){
        $(".new-zx-box").hide();
    })
})