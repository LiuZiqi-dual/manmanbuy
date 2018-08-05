 //截取问号之后的数据 moneyID=20
 var productid =  location.search.substr(11); 
//  console.log(productid);
 
 getMoney();
 function getMoney(){
     $.get("http://193.112.55.79:9090/api/getmoneyctrlproduct",'productid='+productid,function(res){
            // console.log(res.result[0].productComment);
            //用模板渲染数据
            var html = template("item",{data:res.result});
            $(".view").html(html);
            // 动态渲染标题
            var title = template("title",{data:res.result[0].productName});
            $('head').append(title);
            // 评论模板
            var pinglun = template("pinglun",{data:res.result[0].productComment});
            $(".pinglun").append(pinglun);
            //评论
            
             //评论功能
    var input =  document.querySelector('.ctrl input');
    itcast(input).tap(function(e){
        //获取上面输入的内容   判断不能为空

        
    })
     },'json')
 }

