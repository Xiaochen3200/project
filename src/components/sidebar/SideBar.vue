<template>
  <div id="SideBar">
    <van-sidebar v-model="activeKey" @change="onChange" >
      <van-sidebar-item v-for="value in shopingname" :key="value.id" :title="value" @click="itemcliick(value)"/>
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  props:[
    "shopingname"
  ],
  data() {
    return {
      activeKey:"",
    };
  },  
  methods: {
    onChange(index) {
     console.log(index);
    },
    mrcliick(){
      
    },
    itemcliick(value){
      this.$emit("vuelname",value)
      console.log(value);
    }
  },
}
</script>

<style>
  #SideBar{
    display: flex;
  }
  .van-sidebar-item--select{
    color: red;
  }
</style>