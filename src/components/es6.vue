<template>
<div>
  <div>es6语法练习</div>
  <input type="text" ref="input1">
</div>
</template>

<script>
  export default {
    name: "es6",
    data(){
      return {

      }
    },
    mounted(){
      //symbol
      var mySymbol=Symbol();
      var a={
        //[mySymbol]:'hello symbol'
      };
       a[mySymbol]='hello symbol';
      console.log(a[mySymbol]);

      //this.$refs获取元素
      this.$refs.input1.value='jiangzi';
      this.$refs.input1.style.color='red';
      this.$refs.input1.onkeydown=function () {
        console.log('按下键盘了')
      };

      //声明字符串
      const aoo='a1';
      const boo=`a2`;
      const coo=`1${aoo}a2`;
      console.log(aoo);
      console.log(boo);
      console.log(coo);

      var fun1=function () {
        console.log("fun1");
      };
      var fun2=function () {
        console.log("fun2");
      };
      function* generator() {
        fun1();
        yield "why?";
        fun2();
        yield "what?";

      }
      var obj=generator();
      console.log("第一次调用next():");
      obj.next();
      console.log("第二次调用next():");
      obj.next();

      console.log("next方法参数foo：")
      function* foo(x) {
        var y=2*(yield(x+1));
        var z=yield(y/3);
        return (x+y+z);
      }
      var a=foo(5);
      a.next();
      console.log("y:"+a.y);
      a.next(12);
      console.log("z:"+a.z);
      a.next(13);

      function *foo1() {
        yield 11;
        yield 22;
        yield 33;
        yield 44;
        yield 55;
        return 66;
      }
      for (let v of foo1()) {
        console.log(v);
      }


    }
  }
</script>

<style scoped>

</style>
