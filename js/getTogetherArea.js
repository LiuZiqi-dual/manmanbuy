$(function () {
    // 凑单品下拉列表区域信息
    $.ajax({
        url: 'http://193.112.55.79:9090/api/getgsshoparea',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            // console.log(res.result);
            var htmlStr2 = template("select2Tmp", {data:res.result});
            // console.log(htmlStr2);
            $('.select2 ul').html(htmlStr2);
            getParm1();
        }
    })
})

function getParm1() {
    $(".select2 ul li a").on("click", function () {
        // console.log($(this));
        var getPar1 = $(this).text().split('（')[0];
        console.log(getPar1);
        
        // console.log(getPar);
        $('.list-t .menu0:eq(1) a').html(getPar1 + '<span class="glyphicon glyphicon-triangle-bottom .glyphicon" aria-hidden="true"></span>');
        return getPar1;

    })
}