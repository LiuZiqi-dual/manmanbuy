$(function () {
    $.ajax({
      type: 'GET',
      url: "http://193.112.55.79:9090/api/getinlanddiscount",
      dataType: 'json',
      success: function (res) {
        var data = template("temp", res);
        var getinlanddiscount=document.querySelector(".getinlanddiscount");
        $(".getinlanddiscount ul").html(data);
        $("li").eq(15).nextAll().hide();
        itcast(getinlanddiscount).tap(function(e){
          $("li").eq(15).nextAll().show();
        })
      }
    });
  })