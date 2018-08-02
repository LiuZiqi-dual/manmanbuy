//pageid=5   刷新到第几页  41-50   最多到14
$.get("http://193.112.55.79:9090/api/getmoneyctrl",'',function(res){
 
    var num = [];
    var num2 = [];
    res.totalCount = Math.floor(res.totalCount/10);
    for(var i = 0;i<res.result.length;i++){
         num.push(parseInt(res.result[i].productComCount.replace(/[^0-9]/ig,"")));
         res.result[i].productComCount = num[i];
    }      
    for(var e = 0;e<res.totalCount;e++){
        num2.push(res.totalCount);
    }
    //基本数据渲染页面
    var html = template("template",{data:res.result});     
    $('.shangping ul').html(html);    
    // 分页渲染
    
    var foot_nav = template("template2",{data:num2});
    $('#select').html(foot_nav)
   
},'json')




