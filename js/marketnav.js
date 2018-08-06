//导航的获取
var ul = document.querySelector('nav ul');
$.ajax({
    url:'http://193.112.55.79:9090/api/getsitenav',
    type:'get',
    dataType:'json',
    success:function(res){
       var arr = res.result;
       var htmlStr = template('navlis',{data:arr});
       ul.innerHTML = htmlStr;
    }
})