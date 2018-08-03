 //截取问号之后的数据 moneyID=20
 var productid =  location.search.substr(11); 
 console.log(productid);
 
 getMoney();
 function getMoney(){
     $.get("http://193.112.55.79:9090/api/getmoneyctrlproduct",'productid='+productid,function(res){
            // console.log(res.result[0].productCity);
            //用模板渲染数据
            var html = template("item",{data:res.result});
            $(".view").html(html);
            
     },'json')
 }