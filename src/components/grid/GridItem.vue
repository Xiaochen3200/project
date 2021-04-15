<template>
  <div id="GridItem">
    <van-grid :column-num="4">
      <van-grid-item
        v-for="value in bigbox"
        :key="value.id"
        :icon="value.coverImg"
        :text="value.productCategory.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name:"GrideItem",
  props:{
    bigbox:{
      type:Array,
    },
    itemname:{

    }
  },
  data(){
    return{
      img:[],
      name:[]
    }
  },
  methods:{
    onload(){
      if(this.bigox===""){
        console.log(this.bigbox,1);
      }else{
        console.log(this.bigbox,2);
      }
    }
  },
  created(){
    this.onload()
  },
}
</script>

<style>
  #GrideItem{
    flex: 1;
    overflow-y: auto;
  }
</style>  