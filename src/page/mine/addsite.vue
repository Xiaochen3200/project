<template>
  <!-- 添加地址 -->
  <div class="addsite">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";

import { Toast } from "vant";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      searchResult: [],
      areaList,
      // areaList: {
      //   province_list: {
      //     110000: "北京市",
      //     120000: "天津市",
      //   },
      //   city_list: {
      //     110100: "北京市",
      //     120100: "天津市",
      //   },
      //   county_list: {
      //     110101: "东城区",
      //     110102: "西城区",
      //     // ....
      //   },
      // },
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style scoped></style>
