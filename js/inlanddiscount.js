$(function () {
    $.ajax({
      type: 'GET',
      url: "http://193.112.55.79:9090/api/getinlanddiscount",
      dataType: 'json',
      success: function (res) {
        // 接收模板
        var data = template("temp", res);
        // 添加模板
        $(".getinlanddiscount ul").html(data);
        // 演示下拉刷新功能
         $("li").eq(15).nextAll().hide();
         // 思路： 判断 滚动条滑动距离到底部XX距离的时候调用ajax方法=>{scrollTop()>=$(document).height()-$(window).height() }，然后添加到容器最下面（append() ）
         $(window).scroll(function(){
          　　var scrollTop = $(this).scrollTop();
          　　var scrollHeight = $(document).height();
          　　var windowHeight = $(this).height();
          　　if(scrollTop + windowHeight == scrollHeight){
          　　 nearbyData();//加载数据的函数
          　　}
          });
          // 当页面到达底部的时候,再次加载数据
          function nearbyData(){
            // $(".dvg").hide();
            setTimeout(function(){
              $("li").eq(15).nextAll().show();
              $(".dvg").hide()
            }, 500);
          }
      //  点击事件,商品页跳转回主页
        $(".logo").on('click',function(){
          location.href="index.html";
        })
      }
    });
  });

  
