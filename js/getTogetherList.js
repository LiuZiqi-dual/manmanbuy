$(function () {



    // (function ($) {
    //     $.getUrlParam = function (name) {
    //         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //         var r = window.location.search.substr(1).match(reg);
    //         if (r != null) return unescape(r[2]);
    //         return null;
    //     }
    // })(jQuery);
    // // 获取id值，调用函数值为要被调取的参数
    // var shopid = $.getUrlParam('');
    // var areaid = $.getUrlParam('');


    $.ajax({

        url: 'http://193.112.55.79:9090/api/getgsproduct',
        type: 'get',
        dataType: 'json',
        data: {
            shopid: 0,
            areaid: 0
        },
        success: function (res) {
            // console.log(res);
            console.log(res.result);
            var htmlStr = template("shopListTmp", {
                data: res.result
            });
            // console.log(htmlStr);
            $('.list-b ul').html(htmlStr);
        }
    })


})