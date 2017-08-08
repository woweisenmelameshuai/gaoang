window.onload = function () {
    var box = document.getElementById("box");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var img = document.getElementById("img")
    var ul = img.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");

    //鼠标经过box时 让箭头渐渐的显示
    box.onmouseover = function () {
        animate(arrow,{"opacity":1});
    };
    //鼠标离开box时 让箭头渐渐隐藏
    box.onmouseout = function () {
        animate(arrow,{"opacity":0});
    }

    //设置图片的位置
    var config = [
        {
            "width":400,
            "top":20,
            "left":50,
            "opacity":0.2,
            "zIndex":2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ]; //一个配置单 规定了每张图片的大小位置层级和透明度

    //获取页面上所有的li 让他们从当前的位置 以动画的效果到指定的位置
    function assign() {
        for(var i=0; i<lis.length; i++){
            animate(lis[i],config[i],function () {
                flag=true;//动画执行完毕之后重新打开阀门
            })
        }
    }
    assign();


    //点击右箭头时
    arrRight.onclick = function () {
        if(flag){
            flag=false;
            //把开始的放到最后
            config.push(config.shift());
            assign();
        }
    };
   //点击左箭头时
    arrLeft.onclick = function () {
        if(flag){
            flag=false;
             //把最后的元素放到开始
            config.unshift(config.pop());
            assign();
        }
    };
    //添加节流阀
    var flag = true; //默认是打开的
};