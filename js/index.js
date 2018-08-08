//渲染页面
$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getindexmenu",
    // data: "data",
    dataType: "json",
    success: function (res) {
        console.log(res.result);
        $('.cat_nav').html(template('cat_nav_template', {
            res: res.result
        }));
        $('.cat_nav div:nth-last-child(-n+4)').hide();
    }
    
});
$.get("http://193.112.55.79:9090/api/getmoneyctrl", '', function (res) {
    var num = [];
    for (var i = 0; i < res.result.length; i++) {
        num.push(parseInt(res.result[i].productComCount.replace(/[^0-9]/ig, "")));
        res.result[i].productComCount = num[i];
    };
    var html = template("template", {
        data: res.result
    });
    $('.shangping ul').html(html);
    // console.log(res);
   
}, 'json')
//隐藏第三行效果
$('.cat_nav').on('click', "div:nth-child(8)", function (event) {
    //阻止默认行为  不让他跳到顶部
    event.preventDefault();
    $('.cat_nav div:nth-last-child(-n+4)').fadeToggle(500);
});;

//游戏退出按钮
// var exitBtn = $('.cover .close')[0];
// var cover = $('.cover');
// itcast(exitBtn).tap(function () {  
//     cover.css('display','none'); 　　　　//隐藏遮罩
//     flag=0;　　　　　　　　　　　　　　　　　//重置为0
// })
// //遮罩层禁止滑动效果
// if ($('.search_box button').hasClass('active_btn')) {
//     console.log(123);
    
//     var aBtn = $('.search_box .active_btn')[0]; //点击按钮
//     console.log(aBtn);

//     var cover = $('.cover'); //弹出的遮罩层
//     var flag = 0;　　　　　　 //标识，初始为0
//     itcast(aBtn).tap(
//         function () {
//             cover.css('display', 'block'); //显示遮罩
//             $('html').css('overflow', 'hidden');
//             $('body').css('overflow', 'hidden');
//             flag = 1;
//         });
//     document.addEventListener('touchmove', function () {　　 //监听滚动事件
//         if (flag == 1) {　　　　　　　　　　　　　　　　　　　　　　　　　　　　 //判断是遮罩显示时执行，禁止滚屏
//             if (event.cancelable) {
//                 // 判断默认行为是否已经被禁用
//                 if (!event.defaultPrevented) {
//                     event.preventDefault();
//                 }
//             }
//             // event.preventDefault();　　　　　　　　　　　　　　　　　　　//最关键的一句，禁止浏览器默认行为
//         }
//     })
// }
// cover.tap(function(){
//     cover.css('display','none'); 　　　　//隐藏遮罩
//     flag=0;　　　　　　　　　　　　　　　　　//重置为0
// });