var app = new Vue({
  el: '#app',
  data() {
    return {
      list: [
        {
          id: 1,
          name: 'iphone6',
          price: '6100',
          count: 1
        },
        {
          id: 2,
          name: 'iphone7',
          price: '6200',
          count: 10
        },
        {
          id: 3,
          name: 'iphone8',
          price: '6300',
          count: 12
        },
        {
          id: 4,
          name: 'iphone9',
          price: '6400',
          count: 14
        }
      ]
    }
  },
  computed: {

  },
  methods: {

  }
})