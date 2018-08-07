$(function () {
    // 凑单品店铺信息
    $.ajax({
        url:'http://193.112.55.79:9090/api/getgsshop',
        type:'get',
        dataType:'json',
        success:function (res) {
            // console.log(res);
            console.log(res.result);
            var htmlStr1 = template("select1Tmp",{data:res.result});
            // console.log(htmlStr1);
            $('.select1 ul').html(htmlStr1);
        }
    })
    

})