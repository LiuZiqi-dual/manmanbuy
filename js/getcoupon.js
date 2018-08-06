$(function () {
    $.ajax({
        url:'http://193.112.55.79:9090/api/getcoupon',
        type:'get',
        dataType:'json',
        success:function(res){
            console.log(res.result);
            var htmlStr = template('getcoupontitleTmp',{data:res.result})
            console.log(htmlStr);
            $('.view ul').html(htmlStr)
        }
    })
    
})