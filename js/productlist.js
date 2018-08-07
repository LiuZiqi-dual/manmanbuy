var categoryid = location.search.substr(12);
console.log(categoryid);

$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getcategorybyid",
    data:"categoryid="+categoryid,
    dataType: "json",
    success: function (res) {
        console.log(res.result);
        $('.menutree .menu .temp_category a').html(
            template(
                'menutree_template',{
                    res:res.result
                }
            )
        );
    }
});
$.ajax({
    type: "get",
    url: "http://193.112.55.79:9090/api/getproductlist",
    data: "categoryid="+categoryid,
    dataType: "json",
    success: function (data) {
        console.log(data.result);
        $('.container ul').html(template(
            'productlist_template',{
                data:data.result
            }
        ));
    }
});