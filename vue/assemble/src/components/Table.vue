<template>
  <div class="tab-wap">
    <div class="tab-head">
      <div class="check-box check-all"></div>
      <div class="com-name">商品名称</div>
      <div class="com-price">商品价格</div>
      <div class="com-count">商品数量</div>
      <div class="operation">操作</div>
    </div>
    <div class="tab-body"></div>
    <div class="tab-total"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comList: []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      getData() {
        this.$ajaxGet('/data/comList').then((res) => {
          console.log(res)
          let data = res.data
          this.comList = data.data
        })
      }
    }
  }
</script>
