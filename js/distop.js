var locastr = location.search;
var arr = locastr.split('=');
var locaId = arr[1];
var rackul = document.querySelector('.rack ul');
var allbrands = document.querySelector('.allbrands');
var comment = document.querySelector('.comment');


//获取评论图片
var commentimgs = document.querySelector('.commentimgs');
var commenttitle = document.querySelector('.commenttitle');
var commentfoot = document.querySelector('.commentfoot');
// 先获取当前ID的类型


// 调用layer的加载部分
var index = layer.msg('加载中',{
    time: 10*1000,
    shade:0.5,
    shadeClose:false,
    offset: 'auto',
    area: '150px'
}); 

$.ajax({
    url:'http://193.112.55.79:9090/api/getbrandtitle',
    type:'get',
    dataType:'json',
    success:function(res){
        var listarr = res.result;
        for(var i=0; i<listarr.length; i++){
            if(listarr[i].brandTitleId==locaId) {
                var brandname = listarr[i].brandTitle;
                break;
            }
        }
        var listname = document.querySelector('.listname');
        var rackhead = document.querySelector('.rackhead');
        var detailhead = document.querySelector('.detailhead');
        rackhead.innerHTML = brandname+ '那个牌子好';         
        listname.innerHTML = brandname;
        detailhead.innerHTML = brandname +'产品销售排行';
        comment.innerHTML = brandname+'最有用的用户评论';
    }
})


//十大品牌
$.ajax({
    url:'http://193.112.55.79:9090/api/getbrand',
    type:'get',
    data:{brandtitleid:locaId},
    dataType:'json',
    success:function(res){
        var arr = res.result;
        // console.log(arr);
        var htmlStr = template('racktmp',{data:arr});
        rackul.innerHTML = htmlStr;
        layer.close(index);
    }
})

//商品详情
var productid = 0;
$.ajax({
    url:'http://193.112.55.79:9090/api/getbrandproductlist',
    type:'get',
    data:{
        brandtitleid:locaId,
    },
    dataType:'json',
    success:function(res){
        var arr = res.result;
        // console.log(arr);
        productid = arr[0].productId;
        commentimgs.innerHTML = arr[0].productImg;
        commenttitle.innerHTML = arr[0].productName;
        var htmlStr = template('allbrands',{data:arr});
        allbrands.innerHTML = htmlStr;

        // console.log(productid);
        //在后面获取
        //商品评论
        $.ajax({
    url:'http://193.112.55.79:9090/api/getproductcom',
    type:'get',
    dataType:'json',
    data:{'productid':productid},
    success:function(res){
        
        var arr = res.result;
        var htmlStr = template('talkcomment',{data:arr});
        // console.log(htmlStr);
        commentfoot.innerHTML = htmlStr;
    }
        })

    }
})



// 字体操作
changesize();
function changesize(){
    var htmlsize = 100;
    var htmlwidth = 500;
    var newwidth = document.querySelector('html').offsetWidth;
    var newsize = newwidth*htmlsize/htmlwidth;
    document.querySelector('html').style.fontSize = newsize+'px';
    // console.log(newsize);
    }

window.onresize = function(){
    changesize();
}