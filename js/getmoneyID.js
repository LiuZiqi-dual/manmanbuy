(function ($) {
    $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
    }
    })(jQuery);
//截取问号之后的数据 moneyID=20
//  var name = location.search.substr(7);   //带回去的页码数
 var nameId =  $.getUrlParam('fenye');
nameId =  nameId - 1 +1;
//获取位置
var pageY =    $.getUrlParam('scrollTop');
pageY = pageY -1 + 1;

 //渲染的一个数据
    // 获取id值，调用函数值为要被调取的参数 
 var productid = $.getUrlParam('productid');
productid  = productid - 1 +1;
    getMoney();
 function getMoney(){
     $.get("http://193.112.55.79:9090/api/getmoneyctrlproduct",'productid='+productid,function(res){
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
 
 $('#backTop a').on('click',function(){
     location.href = "./moneyctrl.html?nameId="+nameId+"&pageY="+pageY;
 })


    