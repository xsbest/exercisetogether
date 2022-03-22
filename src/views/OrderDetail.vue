<template>
  <div class="about">
    <div class="image">
        <img :src="detail.url" alt="">
    </div>
    <div class="desc">
        <div>运动：{{detail.type}}</div>
        <div>区域：{{detail.area}}</div>
    </div>

  </div>
</template>
<script>
export default {
    mounted(){
       this.detail = this.$route.params;
        console.log(this.detail);
    },
    data(){
        return{
            detail:{}
        }   
    }   
}
</script>
<style lang="less">
    .image{
        img{
            width: 90vw;
        }
    }
    
</style>