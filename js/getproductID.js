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
 getproductPinglun();
 function getproductId(){
    $.get("http://193.112.55.79:9090/api/getproduct","productid="+productId,function(res){
         console.log(res.result[0]);
        //渲染数据 电视广告
        var banner_img = template("banner_img",{data:res.result[0]})
         $(".banner").html(banner_img);

         //截取做三级动态标题
      var productName = res.result[0].productName;
      var  arr = productName.split(' ');
      //动态生成第三个标题
         $(".head").append("<a href='#'>"+arr[0]+"</a>");
         $(".table_content").html(res.result[0].bjShop)
     })
 }
//  发送ajax   获取评论的数据

 function getproductPinglun(){
    $.get("http://193.112.55.79:9090/api/getproductcom","productid="+productId,function(res){      
    var Net_firend_html = template("Net_firend",{data:res.result});
      $(".Net_firend").html(Net_firend_html);
  console.log(res);
  
    
    })
 }
