var categoryid = location.search.substr(12);
$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getcategorybyid",
    data: "categoryid=" + categoryid,
    dataType: "json",
    success: function (res) {
        $('.menutree .menu .temp_category a').html(
            template(
                'menutree_template', {
                    res: res.result
                }
            )
        );
    }
});

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
})(jQuery);
//接受id
var pageid = $.getUrlParam('pageid');
pageid = pageid || 1;
ajax();



function ajax() {
    $.ajax({
        type: "get",
        url: "http://193.112.55.79:9090/api/getproductlist",
        data: "categoryid=" + categoryid + "&pageid=" + pageid,
        dataType: "json",
        success: function (data) {
            var num2 = [];
            $('.container ul').html(template(
                'productlist_template', {
                    data: data.result
                }
            ));
            data.totalCount = Math.ceil(data.totalCount / data.pagesize);
            for (var e = 0; e < data.totalCount; e++) {
                //总页数
                num2.push(data.totalCount);     
            }

            // 分页渲染
            var foot_nav = template("template2", {
                data: num2
            });
            $('#select').html(foot_nav);
            $('#select option').eq(pageid-1).prop("selected", true).siblings().prop('selected', false);

        }
    });
}


//点击下一页
var next = $(".foot_next .next")[0];
var prev = $(".foot_next .prev")[0];
itcast(next).tap(function () {
    //判断如果等于最后一页  就不再加载
    if (pageid == $('#select option').length ) {
        layer.msg('已经是最后一页了哦');
        return;
    }
    pageid += 1;
    ajax();
})
itcast(prev).tap(function () {
    //判断如果等于最后一页  就不再加载
    if (pageid == 1) {
        layer.msg('这是第一页了哦');
        return;
    }
    pageid -= 1;
    ajax();
})

//下拉菜单获取数据
$("#select").on('change', function () {
    var val = this.value ;
    pageid = val;
    ajax();
    //调到顶部
    $(window).scrollTop(0);


})