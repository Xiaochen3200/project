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
    "bigbox"
  ],
  data() {
    return {
      activeKey:"",
      shopingname:[]
    };
  },
  methods: {
    async onload(){
      console.log(
        1
      );
    let newArr={}
    await this.bigbox.forEach((v,i) => {
        console.log(v.productCategory.name);
        newArr[v.productCategory.name]= v.productCategory.name[i]
      });
      console.log(newArr);
      for(let i in newArr){
        console.log(i);
        this.shopingname.push(i)
      }
      // console.log(this.shopingname);

    },
    onChange(index) {
     console.log(index,);
    },
    itemcliick(value){
      this.$emit("vuelname",value)
      console.log(value);
    }
  },
  updated(){
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