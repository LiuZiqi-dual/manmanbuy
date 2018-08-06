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
 var productId =  $.getUrlParam('productId');
 productId = productId - 1 + 1;
 productId = productId || 0;
 getproductId();
 function getproductId(){
    $.get("http://193.112.55.79:9090/api/getproduct","productid="+productId,function(res){
        //  console.log(res.result[0]);
         
     })
 }
