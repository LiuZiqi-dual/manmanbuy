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
var button = $(".search_box button")[0];
button.addEventListener('touchmove',function(e){
    var maxWidth = $(".search_box input")[0].offsetWidth;
    $(".search_box input").attr("placeholder",'');
    if(e.changedTouches[0].clientX<=30){
          //在原点的时候
          $(".search_box")[0].style.paddingLeft = 66+'px';
    $(".search_box input").attr("placeholder",'>>>滑动我有惊喜哦');     
    }else if(e.changedTouches[0].clientX>=maxWidth+40){
         //到最后的时候
        $(".search_box input").attr("placeholder",'搜索您心仪的商品，会有惊喜哦！'); 
        $(".search_box")[0].style.paddingLeft = 0;
        $(".search_box")[0].style.paddingRight = 66+'px';
    }else{
        button.style.marginLeft = (e.changedTouches[0].clientX-32)+'px';
    }
   
})
