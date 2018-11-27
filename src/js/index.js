const canvas = document.getElementById('cvs')


const app = new Vue({
  el: '#app',
  data: {
    imgList: [],
    sizeType: '1',
    canvasData: {
      width: 640,
      height: 480
    },
    frameData: {
      row: 1,
      col: 1,
      prewidth: 640,
      preheight: 480
    },
    cssStr: ''
  },
  methods: {

  }
})