$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getcategorybyid",
    
    dataType: "json",
    success: function (res) {
        console.log(res.result);
        
    }
});