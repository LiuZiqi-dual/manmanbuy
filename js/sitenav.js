//导航的获取
var ul = document.querySelector('.navlis ul');
var backbtn = document.querySelector('.backbtn');
var backtop = document.querySelector('.backup');
$.ajax({
    url:'http://193.112.55.79:9090/api/getsitenav',
    type:'get',
    dataType:'json',
    success:function(res){
       var arr = res.result;
       var htmlStr = template('navlis',{data:arr});
       ul.innerHTML = htmlStr;
       var lis = document.querySelectorAll('.navlis li');
       setTimeout(function(){
           for(var i=0; i<lis.length; i++) {
               lis[i].className = '';
           }
       },300)
    }
})

// 后退按钮
backbtn.addEventListener('click',function(){
    history.back();
})

//返回顶部
backtop.addEventListener('click',function(){
    // console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop = 0;
    // $(window).scrollTop(0);
})