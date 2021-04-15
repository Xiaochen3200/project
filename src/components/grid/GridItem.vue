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
  props:[
    "bigbox",
    "itemname"
  ],
  data(){
    return{
      img:[],
      name:[]
    }
  },
  methods:{
    onloadstart(){
      console.log(this.bigbox);
    }
  },
  updated(){
    this.onloadstart(1)  
  }
}
</script>

<style>
  #GrideItem{
    flex: 1;
    overflow-y: auto;
  }
</style>  