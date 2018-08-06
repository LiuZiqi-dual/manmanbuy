// var titleid = location.search.substr(9);
// console.log(titleid);
/* 请求比价分类信息数据 */
$.ajax({
    type: 'get',
    url: 'http://193.112.55.79:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (res) {
        console.log(res.result);
        // console.log(template('category_template', {
        //     res: res.result
        // }));
        $('.category_container').html(template('category_template', {
            res: res.result
        }))
        var tapEvent = $('.panel-heading');
        tapEvent.each(function (index, ele) {
            // console.log(this);
            itcast(this).tap(function (e) {
                // console.log(e.path);
                // console.log(index);
                $.get("http://193.112.55.79:9090/api/getcategory", 'titleid=' + index,
                    function (data) {
                        console.log(data.result);
                        // console.log(titleid-1+2);
                        // var listNum = $('.panel-body:nth-child('+(titleid-1+2)+')');
                        $('.panel-body').html(template('category_detail_template', {
                            data: data.result
                        }));
                    },
                    "json"
                );

            })
        })

    }
})
// .category_container ul li:nth-child('+(titleid-1))


/* 点击分类后请求详细信息具体数据 */

// $.get("http://193.112.55.79:9090/api/getcategory", 'titleid='+titleid,
//     function (data) {
//         console.log(data);
//         // console.log(titleid-1+2);
//         // var listNum = $('.panel-body:nth-child('+(titleid-1+2)+')');

//         // listNum.append(template('category_detail_template',{
//         //     data:data.result
//         // }));



//     },
//     "json"
// );