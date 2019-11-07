const rong = {
  /*touchPages(wrap,wrap2,len,n):
  *移动端滑屏方法
  *参数说明，wrap：最外层id；wrap：第二层id；len：一共有几页；n：页面一打开默认在第几页？第一页就是0，第二页就是1
  * 样式参数，所有标签设置：touch-action: pan-y;最外层height：100%；overflow：hidden；第二层：height:1000%;transition
  * 第三层每页page的height:10%;
  */
  touchPages(wrap,wrap2,len,n){
    //重要！禁止移动端滑动的默认事件
    document.body.addEventListener('touchmove', function(event) {
      event = event ? event : window.event;
      if(event.preventDefault) {
        event.preventDefault()
      } else {
        event.returnValue = false
      }
    }, false)

    let box = document.getElementById(wrap);
    let box2 = document.getElementById(wrap2);
    let startY, moveY, cliH;
    //获取屏幕高度
    let getH = function() {
      cliH = document.body.clientHeight
    };
    getH();
    window.addEventListener('resize', getH, false);

    box2.style.transform = 'translateY(' + (-n * 10) + '%)'; //初始化页面
    //touchStart
    let touchstart = function(event) {
      if(!event.touches.length) {
        return;
      }
      startY = event.touches[0].pageY;
      moveY = 0;
    };
    //touchMove
    let touchmove = function(event) {
      if(!event.touches.length) {
        return;
      }
      moveY = event.touches[0].pageY - startY;
      box2.style.transform = 'translateY(' + (-n * cliH + moveY) + 'px)'; //根据手指的位置移动页面
    };
    //touchEnd
    let touchend = function(event) {
      //位移小于+-50的不翻页
      if(moveY < -50) n++;
      if(moveY > 50) n--;
      //最后&最前页控制
      if(n < 0) n = 0;
      if(n > len - 1) n = len - 1;
      //重定位
      box2.style.transform = 'translateY(' + (-n * 10) + '%)'; //根据百分比位置移动页面
      // console.log(n)
    };
    //touch事件绑定
    box.addEventListener("touchstart", function(event) {
      touchstart(event)
    },false);
    box.addEventListener("touchmove", function(event) {
      touchmove(event)
    },false);
    box.addEventListener("touchend", function(event) {
      touchend(event)
    },false);
  }
};

export default rong
