//渲染页面
$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getindexmenu",
    // data: "data",
    dataType: "json",
    success: function (res) {
        console.log(res.result);
        $('.cat_nav').html(template('cat_nav_template',{
            res:res.result
        }));
    }
});
$.get("http://193.112.55.79:9090/api/getmoneyctrl",'',function(res){
    var num = [];
    for(var i = 0;i<res.result.length;i++){
        num.push(parseInt(res.result[i].productComCount.replace(/[^0-9]/ig,"")));
        res.result[i].productComCount = num[i];
    };
    var html = template("template",{data:res.result});  
    $('.shangping ul').html(html);    
    // console.log(res);
    
},'json')

//隐藏第三行效果
$('.cat_nav div').on('click',function(){
    console.log(123);
    
});;
