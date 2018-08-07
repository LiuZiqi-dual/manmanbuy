//pageid=5   刷新到第几页  41-50   最多到14

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    } 
})(jQuery);
//接受id
var pageid = $.getUrlParam('nameId');
ajax();
//接受位置
 var pageY = $.getUrlParam('pageY');
 pageY = pageY || 0;
pageY = pageY - 1 + 1;
var ress;
function ajax() {
    $.get("http://193.112.55.79:9090/api/getmoneyctrl", 'pageid=' + pageid, function (res) {
        var num = [];
        var num2 = [];
        res.totalCount = Math.floor(res.totalCount / 10);
        for (var i = 0; i < res.result.length; i++) {
            num.push(parseInt(res.result[i].productComCount.replace(/[^0-9]/ig, "")));
            res.result[i].productComCount = num[i];
        }
        for (var e = 0; e < res.totalCount + 1; e++) {
            num2.push(res.totalCount);
        }
        
        //点进去传入id  出来的时候返回
        for (var i = 0; i < res.result.length; i++) {
            res.result[i]['name'] = pageid;
            res.result[i]['scrollTop'] = pageY;
        }
        ress = res.result;
        //基本数据渲染页面
        var html = template("template", {
            data: res.result
        });
        $('.shangping ul').html(html);
        // 分页渲染
        var foot_nav = template("template2", {
            data: num2
        });
        $('#select').html(foot_nav);
        $('#select option').eq(pageid).prop("selected", true).siblings().prop('selected', false);

        //进来的时候  页面的pageY位置
        $(window).scrollTop(pageY);
    }, 'json');
}

//点击下一页
var next = $(".foot_next .next")[0];
var prev = $(".foot_next .prev")[0];
itcast(next).tap(function () {
    //判断如果等于最后一页  就不再加载
    if (pageid == $('#select option').length - 1) {
        layer.msg('已经是最后一页了哦');
        return;
    }else{
        pageid ++;
        ajax();    
    }
})
itcast(prev).tap(function () {
    //判断如果等于第一页  就不再加载
    if (pageid == 0) {
        layer.msg('这是第一页了哦');
        return;
    }else{
        pageid-- ;
        ajax();
    }
})
//下拉菜单获取数据
$("#select").on('change', function () {
    var val = this.value - 1;
    pageid = val;
    ajax();
    //调到顶部
    $(window).scrollTop(0);


})
//滚动改变位置参数
window.onscroll = function () {
    pageY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    for (var i = 0; i < ress.length; i++) {
        ress[i]['scrollTop'] = pageY;
    }
    var html = template("template", {
        data: ress
    });
    $('.shangping ul').html(html);

}