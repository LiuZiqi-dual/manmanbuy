 //截取问号之后的数据 moneyID=20
 var moneyID =  location.search.substr(9); 
 getMoney();
 function getMoney(){
     $.get("http://193.112.55.79:9090/api/getmoneyctrlproduct",'productid='+moneyID,function(res){
            console.log(res.result[0].productComment);
     },'json')
 }