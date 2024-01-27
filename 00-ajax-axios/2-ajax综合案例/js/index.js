/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const app = new Vue({
  el: '#app',
  data: {
    booksList: [],
    newBook: {
      bookname: '',
      author: '',
      publisher: '',
    },
    bookname : ''
  },
  methods: {
    add() {
      console.log(this.newBook);
      console.log(1);
    }
  },
  created() {
    axios({
      url: 'http://hmajax.itheima.net/api/books',
      params: {
        creator: '范乐今'
      }
    }).then(res => this.booksList = res.data.data)
  }
})
