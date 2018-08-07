/* 滚动出顶部区域后显示返回顶部按钮 */
$(window).on('scroll', function (e) {
    // console.log($(window).scrollTop());
    // console.log($(document).height()-$(window).height());
    if ($(window).scrollTop() == ($(document).height() - $(window).height()) || $(window).scrollTop() == 0) {
        $('.back_top_btn').show().css({right:'-40px',transform:'rotate(-360deg)'});
        // $('.back_top_btn').hide();
    } else {
        // $('.back_top_btn').show();
        $('.back_top_btn').show().css({right:'10px',transform:'rotate(360deg)'});
    }
});
//search
// if($(".search buton"))
// var button = $(".search_box button")[0];
// var flag;
// button.touchstart = function(e){
//     flag=true;
//     //求出鼠标的相对位置
//    temp= e.pageY-outer.offsetTop-slider.offsetTop;
// }
// document.ontouchend=function(){
//     flag=false;
// }
// document.ontouchmove=function(e){
//     if(flag){
//       //求出滚轮对于盒子顶部的距离
//         var y= e.pageY-outer.offsetTop-temp;
//         if(y<0)y=0;
//         var maxY=outer.offsetHeight-slider.offsetHeight-2;
//         if(y>maxY)y=maxY;
//         slider.style.top=y+"px";
//         //-----------------------
//         //求出内容最大距离  ==  内容高度-容器高度
//         var neirong=inner.offsetHeight-outer.offsetHeight;
//         var innerH=y*neirong/maxY;
//         inner.style.top=-innerH+"px";
//     }
// }


// console.log($(".search buton").pageY);
