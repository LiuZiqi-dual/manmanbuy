//pageid=5   刷新到第几页  41-50
$.get("http://193.112.55.79:9090/api/getmoneyctrl",'',function(res){
    var num = [];
    for(var i = 0;i<res.result.length;i++){
         num.push(parseInt(res.result[i].productComCount.replace(/[^0-9]/ig,"")));
         res.result[i].productComCount = num[i];
    }      
    var html = template("template",{data:res.result});     
    $('.shangping ul').html(html);    
},'json')




