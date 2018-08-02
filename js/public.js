/* 滚动出顶部区域后显示返回顶部按钮 */
$(window).on('scroll', function (e) {
    // console.log($(window).scrollTop());
    // console.log($(document).height()-$(window).height());
    if ($(window).scrollTop() == ($(document).height() - $(window).height()) || $(window).scrollTop() == 0) {
        $('.back_top_btn').show().css({right:'-80px',transform:'rotate(-360deg)'});
        // $('.back_top_btn').hide();
    } else {
        // $('.back_top_btn').show();
        $('.back_top_btn').show().css({right:'85%',transform:'rotate(360deg)'});
    }
});