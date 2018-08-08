

    // 凑单品店铺信息
    $.ajax({
        url: 'http://193.112.55.79:9090/api/getgsshop',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            // console.log(res);
            // console.log(res.result);
            var htmlStr1 = template("select1Tmp", {
                data: res.result
            });
            // console.log(htmlStr1);
            $('.select1 ul').html(htmlStr1);
            getParm();
            // $('.list-t .menu0:eq(0) a').on('click',function () {
                // console.log($('.list-t .menu0:eq(0) a').html());
                // $('.list-t .menu0:eq(0) a').html(getPar);

            // })
            // getParm1();
        }
    })


    function getParm() {
        $(".select1 ul li a").on("click", function () {
            // console.log($(this));
            var getPar = $(this).text();
            // console.log(getPar);
            $('.list-t .menu0:eq(0) a').html(getPar+'<span class="glyphicon glyphicon-triangle-bottom .glyphicon" aria-hidden="true"></span>');
            return getPar;


        })

        // function getParm1() {
        //     $(".select2 ul li a").on("click", function () {
        //         // console.log($(this));
        //         var getPar1 = $(this).text();
        //         // console.log(getPar);
        //         $('.list-t .menu0:eq(1) a').html(getPar1+'<span class="glyphicon glyphicon-triangle-bottom .glyphicon" aria-hidden="true"></span>');
        //         return getPar1;
    
    
        //     })


    }




