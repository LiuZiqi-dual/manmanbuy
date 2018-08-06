$.ajax({
    url:'http://193.112.55.79:9090/api/getbrandtitle',
    type:'get',
    dataType:'json',
    success:function(res){
        var listarr = res.result;
        var htmlStr = template('listTmp',{data:listarr});
        var ul = document.querySelector('.listbrand ul');
        ul.innerHTML = htmlStr;
    }
})