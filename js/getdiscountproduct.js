// get接受api
$(function () {
    // 获取url选择的参数即后面productid=2，获取2，参数写productid就可以获取，利用沙盒，以防命名重复
    (function ($) {
        $.getUrlParam = function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        }
    })(jQuery);
    // 获取id值，调用函数值为要被调取的参数
    var id = $.getUrlParam('productid');
    // console.log(id);
    // 接收api
    $.get("http://193.112.55.79:9090/api/getdiscountproduct?productid=" + id + "", function (res) {
        // 设置模板
        var data = template("temp", res);
        // // 把模板追加到盒子去
        $(".getdiscountproduct").html(data);
    }, "json");
    $(".logo").on("click",function(){
        // window.
        location.href="inlanddiscount.html"
    })
})