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
})