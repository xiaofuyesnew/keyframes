const canvas = document.getElementById('cvs')
const ctx = canvas.getContext('2d')

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
    cssStr: '',
    imgStr: '',
    btnText: '开始生成',
    btnLoading: false
  },
  computed: {
    canvas: function() {
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
    fileChange: function(file, fileList) {
      this.fileList = fileList
    },
    fileRemove: function(file, fileList) {
      this.fileList = fileList
    },
    startDealing: function(tmp) {
      let self = this
      let myTmp = tmp
      let img = new Image()
      let reader = new FileReader()
      this.btnText = '生成中'
      this.btnLoading = true
      img.onload = function() {
        // 绘制对应的图形
        console.log(self.fileList[myTmp].name)
        let row = 1
        let col = 1
        switch (self.sizeType) {
          case '1':
          col = +self.canvasData.width / +self.frameData.prewidth
          row = +self.canvasData.height / +self.frameData.preheight
          break
          case '2':
          col = +self.frameData.col
          row = +self.frameData.row
          break
        }
        ctx.drawImage(img, )
        myTmp++
        if (self.fileList.length > myTmp) {
          setTimeout(function() {
            self.startDealing(myTmp)
          }, 1000)
        } else {
          self.btnText = '开始生成'
          self.btnLoading = false
          self.$message.success('图片生成完成');
        }
      }
      reader.onload = function(e) {
        // console.log(e.target.result)
        img.src = e.target.result
      }
      reader.readAsDataURL(this.fileList[myTmp].raw)
    }
  }
})
