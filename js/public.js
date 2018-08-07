/* 滚动出顶部区域后显示返回顶部按钮 */
$(window).on('scroll', function (e) {
    // console.log($(window).scrollTop());
    // console.log($(document).height()-$(window).height());
    if ($(window).scrollTop() == ($(document).height() - $(window).height()) || $(window).scrollTop() == 0) {
        $('.back_top_btn').show().css({
            right: '-40px',
            transform: 'rotate(-360deg)'
        });
        // $('.back_top_btn').hide();
    } else {
        // $('.back_top_btn').show();
        $('.back_top_btn').show().css({
            right: '10px',
            transform: 'rotate(360deg)'
        });
    }
});



//search   滚动搜索框
var button = $(".search_box button")[0];
//有的页面没有button  需要判断一下
if (button) {
    button.addEventListener('touchmove', function (e) {
        //清楚定时器
        clearInterval(timer);
        var maxWidth = $(".search_box input")[0].offsetWidth;
        $(".search_box input").attr("placeholder", '');
        //========================
        if (e.changedTouches[0].clientX <= 30) {
            //在原点的时候
            $(".search_box button").css('fontSize', '16px')
            button.style.marginLeft = 0;
            $(".search_box")[0].style.paddingLeft = 66 + 'px';
            $(".search_box button").text('搜索');
            $(".search_box input").val('');
            timer = setInterval(function () {
                $(".search_box input").attr("placeholder", ' >>>向右滑动有惊喜哦').fadeOut(500).fadeIn(500);
            }, 1000);
            //===================================
        } else if (e.changedTouches[0].clientX >= maxWidth + 40) {
            //到最后的时候
            $(".search_box")[0].style.paddingLeft = 0;
            $(".search_box")[0].style.paddingRight = 66 + 'px';
            $(".search_box button").text('不要点我');
            $(".search_box button").css('fontSize', '12px')
            timer = setInterval(function () {
                $(".search_box input").attr("placeholder", '  千万别点右边按钮啊!求你了').fadeOut(500).fadeIn(500);
                //搜索框有内容 ，清楚定时器
                if ($(".search_box input").val() != '') {
                    //清楚定时器
                    clearInterval(timer);
                }
            }, 500)
            //=====================================
        } else {
            button.style.marginLeft = (e.changedTouches[0].clientX - 32) + 'px';
        }
    })
}

//设置定时器  获取效果
var timer = setInterval(function () {
    $(".search_box input").attr("placeholder", '>>>向右滑动有惊喜哦').fadeOut(500).fadeIn(500);
    //搜索框有内容 ，清楚定时器
    if ($(".search_box input").val() != '') {
        //清楚定时器
        clearInterval(timer);
    }
}, 1000);