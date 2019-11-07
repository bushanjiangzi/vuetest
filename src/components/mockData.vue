<template>
  <div>
    <!-- <router-view></router-view> -->
    <ul>
      <li v-for="(item,key) in userDdata">
        <span>id: {{item.id}}</span>
        <span>用户名：{{item.username}}，</span>
        <span>密码：{{item.password}}</span>
      </li>
    </ul>
    <ul>
      <li v-for="(item,key) in goods">
        <span>商品名：{{ item.name }}，</span>
        <span>价格：{{ item.price }}</span>
      </li>
    </ul>

  </div>
</template>
<style scoped>
  li{
    list-style: none;
  }
</style>
<script>
  // import $ from 'jquery'
  import axios from 'axios'
  export default{
    name: "mock-data",
    data(){
      return{
        userDdata:[],
        goods: []
      }
    },
    mounted: function(){
      axios.get('/data').then(res=>{
        console.log(res.data);
        this.userDdata = res.data.data;
        this.goods = res.data.goods;
        console.log(this.userDdata)
      });

      // axios.get('/api/goods').then(res=>{
      //   console.log(res.goods);
      //   // this.goods = res.goods.goods;
      //   // console.log(this.goods)
      // })


      // $.getJSON('/api/data').then(res=>{
      //   this.data = res.data;
      //   console.log(data)
      // })

    }
  }
</script>
