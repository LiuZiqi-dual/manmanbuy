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
            $('.select2').html(htmlStr2);
        }
    })
})