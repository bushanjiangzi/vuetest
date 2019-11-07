<template>
    <div>
      <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "tab-nav",
        data(){
          return {

          }
        },
        props: ['title']
    }
</script>

<style scoped>
div{
  color: red;
}
</style>
