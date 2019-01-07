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
    $(".header .search-img").click(function(){
        $(".header .search-con").stop(true).slideToggle('fast');
    })

    //鼠标移动
    $(".header .con .nav-search > ul > li").hover(function (event) { 
        console.log($(this).offsetTop);
    })
})