$.ajax({
    type: 'get',
    url: 'http://193.112.55.79:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (res) {
        console.log(res.result);
        console.log();
        $('.category_container ul').html(template('category_template', {
            res: res.result
        }))
    }
})