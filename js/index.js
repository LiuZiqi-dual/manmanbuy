$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getindexmenu",
    // data: "data",
    dataType: "json",
    success: function (res) {
        console.log(res.result);
        $('.cat_nav').html(template('cat_nav_template',{
            res:res.result
        }));
    }
});

