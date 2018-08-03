//将两个封装成为函数 itcast(dom).tap(console.log(123))
function itcast(dom){
    var obj = {
        tap:function(callback){
            var statrTime;
            var statrX,statrY;
            dom.addEventListener("touchstart",function(e){
              if(e.touches.length > 1){
                  //手指不能大于1
                  return;
              }
              //获取时间和坐标值
               statrTime = Date.now();   //1970到现在的毫秒值
               statrX = e.touches[0].clientX;
               statrY = e.touches[0].clientY;
            })
            //离开的逻辑
            dom.addEventListener("touchend",function(e){
                //先判断离开时候的手指
                if(e.changedTouches.length > 1){
                    return;
                }
                //进行时间对比
                var endTime = Date.now();
                if(endTime - statrTime > 300){
                    return;
                }
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;
                if(Math.abs(endX-statrX)>5||Math.abs(endY-statrY)>5){
                    return;
                }
                callback && callback(e);
            })
        },
        swpie:function(callback){
            var statrTime;
            var statrX,statrY;
            //手指点击的时候
            dom.addEventListener("touchstart",function(e){
             //    console.log(e);
             if(e.touches.length > 1){
                 return;
             }
                //获取时间   离开时候对比，不能太长  800
              statrTime = Date.now();
              //获取坐标
              statrX = e.touches[0].clientX;
              statrY = e.touches[0].clientY;
            })
            //手指离开的时候
            dom.addEventListener("touchend",function(e){
                //离开的手指 》 1
                if(e.changedTouches.length > 1){
                    return;
                }
                //获取现在的时间，和之前的对比  因为滑动的，比点击多一点时间
                var endTime = Date.now();
                if(endTime - statrTime > 800){
                    return;
                }
                //获取离开的坐标，判断不能和之前靠太近
                var weizhi;
                var endX= e.changedTouches[0].clientX;
                var endY= e.changedTouches[0].clientY;
              // 先判断距离
              if (Math.abs(endX - statrX) > 5) {
                 // 在水平方向上发生了移动
                 weizhi = endX > statrX ? "right" : "left";
               } else if (Math.abs(endY - statrY) > 5) {
                 // 在垂直方向上发生了移动 
                 weizhi = endY > statrY ? "down" : "up";
               } else {
                 // 没有发生移动
                 return;
               }
             callback && callback(weizhi);
                
            })
        }
    }
    return obj;
}