<template>
  <div class="tab-wap">
    <div class="item" @click="openUrl">Table</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  },
  mounted() {
    this.gteList()
  },
  methods: {
    gteList() {
      this.$ajaxGet('/data/findIndustry').then((data) => {
        console.log(data)
      })
    },
    openUrl() {
      let routeData = this.$router.resolve({
      name: "Table"
      });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
