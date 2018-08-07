var backtop = document.querySelector('.backup');



$.ajax({
    url:'http://193.112.55.79:9090/api/getbrandtitle',
    type:'get',
    dataType:'json',
    success:function(res){
        var listarr = res.result;
        var htmlStr = template('listTmp',{data:listarr});
        var ul = document.querySelector('.listbrand ul');
        ul.innerHTML = htmlStr;
        var lis = document.querySelectorAll('.listbrand li');
        setTimeout(function(){
            for(var i=0; i<lis.length; i++) {
                lis[i].className = '';
            }
        },300)
       
    }
})


//返回顶部
backtop.addEventListener('click',function(){
    // console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop = 0;
    // $(window).scrollTop(0);
})