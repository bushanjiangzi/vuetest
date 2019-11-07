<template>
    <div>
      <div class="wrap" id="wrap">
        <div class="wrap2" id="wrap2">
          <div class="page">我是第一屏内容</div>
          <div class="page" style="background-color:#ccc;">我是第二屏内容</div>
          <div class="page">我是第三屏内容</div>
          <div class="page" style="background-color:#ccc;">我是第四屏内容</div>
          <div class="page">我是第五屏内容</div>
          <div class="page" style="background-color:#ccc;">我是第六屏内容</div>
        </div>
      </div>
    </div>
</template>

<script>
  import rong from "../../js/rong.js"
    export default {
        name: "slider",
      data(){
          return {

          }
      },
      created(){

      },
      mounted(){
        rong.touchPages( 'wrap','wrap2',6, 0 )
      }
    }
</script>

<style scoped>
  *{
    padding:0;
    margin:0;
    touch-action: pan-y;
  }
  body,html{
    height:100%;
    background-color:#000
  }
  .wrap{
    width:100%;
    height:100%;
    overflow:hidden
  }
  .wrap2{
    width:100%;
    height:1000%;
    transition:.3s linear
  }
  .page{
    width:100%;
    height:10%;
    background-color:#fdfdfd;
    font-size:100px;
    line-height:400px;
    text-align:center;
    font-weight:700
  }
</style>
