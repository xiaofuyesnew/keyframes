const canvas = document.getElementById('cvs')

const app = new Vue({
  el: '#app',
  data: {
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
    fileList: [],
    imgLoading: false,
    cssStr: ''
  },
  computed: {
    canvas: function () {
      if (this.sizeType === '1') {
        return {
          width: +this.canvasData.width,
          height: +this.canvasData.height
        }
      } else if (this.sizeType === '2') {
        return {
          width: this.frameData.col * this.frameData.prewidth,
          height: this.frameData.row * this.frameData.preheight
        }
      }
    }
  },
  methods: {
    fileChange: function (file, fileList) {
      this.fileList = fileList
    },
    fileRemove: function (file, fileList) {
      this.fileList = fileList
    },
    // fileToObj: function (fileArray, tmpNum, imgList) {
    //   let that = this
    //   let imgList = imgList
    //   if (imgList === undefined) {
    //     imgList = []
    //   }
    //   let tmp = tmpNum
    //   if (tmp === undefined) {
    //     tmp = 0
    //   }
    //   let reader = new FileReader()
    //   reader.onload = function (e) {
    //     console.log(e)
    //     tmp++
    //     if (fileArray.length < tmp + 1) {
    //       that.fileToObj(fileArray, tmp, imgList)
    //     }
    //     if (fileArray.length === tmp + 1) {
    //       that.imgList = imgList
    //     }
    //   }
    //   reader.readAsDataURL(fileArray[tmp])
    // }
  }
})