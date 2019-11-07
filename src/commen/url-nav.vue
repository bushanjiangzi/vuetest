<template>
    <div>
      <div>{{url}}</div>
    </div>
</template>

<script>
    export default {
        name: "url-nav",
        data(){
          return {
            //urlName: this.url
          }
        },
        props: ['url'],
      created(){
          //this.urlName=this.url;
      },
      mounted(){
          console.log(this.url);
      }
    }
</script>

<style scoped>
div{
  color: blue;
}
</style>
