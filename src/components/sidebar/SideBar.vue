<template>
  <div id="SideBar">
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item v-for="value in shopingname" :key="value.id" :title="value"/>
    </van-sidebar>
  </div>
</template>

<script>
export default {
  name:'SideBar',
  props:[
    "bigbox"
  ],
  data() {
    return {
      activeKey: 12,
      shopingname:[]
    };
  },
  methods: {
    onload(){
      let newArr={}
      this.bigbox.forEach((v,i) => {
        console.log(v.productCategory.name);
        newArr[v.productCategory.name]= v.productCategory.name[i]
      });
      console.log(newArr);
      for(let i in newArr){
        console.log(i);
        this.shopingname.push(i)
      }
      console.log(this.shopingname);

    },
    onChange(index) {
      console.log(
        index
      );
    },
  },
  created(){
        this.onload(1)
        
    }
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