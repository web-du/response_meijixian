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
    //头部搜索按钮
    var nowIndexL = {};
    $(".header .search-img").click(function(){
        $(".header .search-con").stop(true).slideToggle('fast');
    });

    //鼠标移动
    var fW = (function(){
        //默认获取第一个有on类的link
        var nowdefault = {};
        $(".header .con .nav-search>ul>li").each(function(){
            if($(this).find(".on").length){
                nowdefault.l = $(this).position().left;
                nowdefault.w = $(this).find("a").width();
            }
        })
        $(".header .con .nav-search > ul .move").css({'width':nowdefault.w,"left":nowdefault.l})
        return nowdefault;
    }());

    $(".header .con .nav-search > ul > li").hover(function(i){
        var W = $(this).find("a").width(); 
        var L = $(this).position().left;
        nowIndexL.w = W;
        nowIndexL.l = L;
        $(".header .con .nav-search > ul .move").css({'left':L,'width':W});
        
    },function(){
        nowIndexL.w = fW.w;
        nowIndexL.l = fW.l;
        setTimeout(function(){
            $(".header .con .nav-search > ul .move").css({'left':nowIndexL.l,'width':nowIndexL.w});
        },150)
    })
})