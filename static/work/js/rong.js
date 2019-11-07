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
  },

  /*fileUp(id,n):
  *限制文件上传格式及大小的方法
  *id为选择文件标签的id,n为选择上传的文件类型
  * 该方法需在input标签onchange事件触发时调用
  */
  fileUp(id,n) {
    let target=document.querySelector('#'+id);
    // console.log('target',target);
    let fileSize = 0;
    let filepath = target.value;
    let filetypes = [];
    if(n===1){
      filetypes =[".rar",".txt",".zip",".doc",".ppt",".pdf",".docx"];
    }else if(n===2){
      filetypes =[".mp3",".mpn4",".avi",".png",".jpg",".jpeg",".gif"];
    }
    // console.log('target.value',target.value);
    let filemaxsize = 1024*20;//20M
    if(filepath){
      let isnext = false;
      let fileend = filepath.substring(filepath.indexOf("."));
      if(filetypes && filetypes.length>0){
        for(let i =0; i<filetypes.length;i++){
          if(filetypes[i]==fileend){
            isnext = true;
            break;
          }
        }
      }
      if(!isnext){
        alert("不接受此文件类型！");
        target.value ="";
        return false;
      }
    }else{
      return false;
    }
    if (isIE && !target.files) {
      let filePath = target.value;
      let fileSystem = new ActiveXObject("Scripting.FileSystemObject");
      if(!fileSystem.FileExists(filePath)){
        alert("附件不存在，请重新输入！");
        return false;
      }
      let file = fileSystem.GetFile (filePath);
      fileSize = file.Size;
    } else {
      fileSize = target.files[0].size;
    }

    let size = fileSize / 1024;
    if(size>filemaxsize){
      alert("附件大小不能大于"+filemaxsize/1024+"M！");
      target.value ="";
      return false;
    }
    if(size<=0){
      alert("附件大小不能为0M！");
      target.value ="";
      return false;
    }
  }
};
