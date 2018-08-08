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
        touchmove(e)

    })
    //清楚定时器
    function touchmove(e) {
        clearInterval(timer);
        var maxWidth = $(".search_box input")[0].offsetWidth;
        $(".search_box input").attr("placeholder", '');
        //========================
        if (e.changedTouches[0].clientX <= 30) {
            //在原点的时候
            $(".search_box button").css('fontSize', '16px')
            button.style.left = 0;
            $(".search_box")[0].style.paddingLeft = 66 + 'px';
            $(".search_box button").text('搜索');
            $(".search_box input").val('');
            timer = setInterval(function () {
                $(".search_box input").attr("placeholder", ' >>>向右滑动有惊喜哦').fadeOut(500).fadeIn(500);
                //搜索框有内容 ，清楚定时器
                if ($(".search_box input").val() != '') {
                    //清楚定时器
                    clearInterval(timer);
                }
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
            button.style.left = (e.changedTouches[0].clientX - 32) + 'px';

        }
    }
    //===========================
    button.addEventListener('touchend', function (e) {
        var maxWidth = $(".search_box input")[0].offsetWidth / 2;
        //因为有时向右会停在中间，需要开一个一次性的定时器
        if (parseInt(button.style.left) > maxWidth) {
            setTimeout(function () {
                button.style.left = $(".search_box input")[0].offsetWidth + 'px';
            }, 0)
            //=======
            //到最后的时候
            $(".search_box")[0].style.paddingLeft = 0;
            $(".search_box")[0].style.paddingRight = 66 + 'px';
            $(".search_box button").text('不要点我');
            $(".search_box button").css('fontSize', '12px')
            timer = setInterval(function () {
                $(".search_box input").attr("placeholder", '  千万别点右边按钮啊!求你了').fadeOut(500).fadeIn(500);
                //  button.style.left = $(".search_box input")[0].offsetWidth+'px';    
                //搜索框有内容 ，清楚定时器
                if ($(".search_box input").val() != '') {
                    //清楚定时器
                    clearInterval(timer);
                }
            }, 500)
            $(".search_box button").addClass("active_btn");
            //判断button是否到达右边，以开启游戏
            var aBtn = $('.search_box .active_btn')[0]; //点击按钮
            // console.log(aBtn);
            var exitBtn = $('.cover .close')[0];
            var cover = $('.cover'); //弹出的遮罩层
            var flag = 0;　　　　　　 //标识，初始为0
            console.log(flag);
            
            itcast(aBtn).tap(
                function () {
                    cover.css('display', 'block'); //显示遮罩
                    // $('html').css('overflow', 'hidden');
                    // $('body').css('overflow', 'hidden');
                    flag = 1;
                });
                itcast(exitBtn).tap(function () {
                    cover.css('display', 'none');　　　　 //隐藏遮罩
                })
            document.addEventListener('touchmove', function (event) {　　 //监听滚动事件
                if (flag == 1) {　 //判断是遮罩显示时执行，禁止滚屏
                    if (event.cancelable) {
                        // 判断默认行为是否已经被禁用
                        if (!event.defaultPrevented) {
                            event.preventDefault();
                        }
                    }
                    // event.preventDefault();　　　　　　　　　　　　　　　　　　　//最关键的一句，禁止浏览器默认行为
                } 
                else{

                }  
            })
            
        } else {
            button.style.left = 0 + 'px';
            //======
            //在原点的时候
            $(".search_box button").css('fontSize', '16px')
            $(".search_box")[0].style.paddingLeft = 66 + 'px';
            $(".search_box button").text('搜索');
            $(".search_box input").val('');
            timer = setInterval(function () {
                $(".search_box input").attr("placeholder", ' >>>向右滑动有惊喜哦').fadeOut(500).fadeIn(500);
                //搜索框有内容 ，清楚定时器
                if ($(".search_box input").val() != '') {
                    //清楚定时器
                    clearInterval(timer);
                }
            }, 1000);
            $(".search_box button").removeClass("active_btn");
        }



    })
}

//设置定时器  获取初始闪烁效果
var timer = setInterval(function () {
    $(".search_box input").attr("placeholder", '>>>向右滑动有惊喜哦').fadeOut(500).fadeIn(500);
    //搜索框有内容 ，清楚定时器
    if ($(".search_box input").val() != '') {
        //清楚定时器
        clearInterval(timer);
    }
}, 1000);