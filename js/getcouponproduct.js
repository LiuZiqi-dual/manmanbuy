$(function () {
    (function ($) {
        $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
        }
        })(jQuery);
        // 获取id值，调用函数值为要被调取的参数
        var id = $.getUrlParam('couponId');

    $.ajax({
        url: 'http://193.112.55.79:9090/api/getcouponproduct',
        type: 'get',
        dataType: 'json',
        data: {
            couponid: id
        },
        success: function (res) {
            console.log(res);
            var htmlStr = template('getcouponproductTmp', {
                data: res.result
            });
            console.log(htmlStr);
            $('.view ul').html(htmlStr);
        }
    })

})