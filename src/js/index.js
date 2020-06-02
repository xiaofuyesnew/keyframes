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
    cssAttr: {
      unit: '1',
      design: '640',
      name: 'keys',
      loop: false,
      loopNum: 0,
      time: 1,
      delay: 0
    },
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
    dealCss: function(row, col) {
      let data = this.cssAttr
      let unit = ''
      let wUnit = 0
      let hUnit = 0
      switch (data.unit) {
        case '1':
          unit = 'px'
          wUnit = +this.frameData.prewidth
          hUnit = +this.frameData.preheight
          break
        case '2':
          unit = 'rem'
          wUnit = +this.frameData.prewidth / 100
          hUnit = +this.frameData.preheight / 100
          break
        case '3':
          unit = 'vw'
          wUnit = +this.frameData.prewidth / +data.design * 100
          hUnit = +this.frameData.preheight / +data.design * 100
          break
      }
      let step = (100 / this.fileList.length).toFixed(2)
      let animClass = `.${data.name} {\n  width: ${wUnit}${unit};\n  height: ${hUnit}${unit};\n  background-size: ${`${(col * wUnit).toFixed(2)}${unit} ${(row * hUnit).toFixed(2)}${unit}`};\n}\n\n.${data.name}.anim {\n  animation: ${data.name} ${data.time}s${
        +data.delay ? ` ${data.delay}s  ` : ' '
      }steps(1, end) forwords${
        data.loop ? (+data.loopNum ? ` ${data.loopNum}` : ' infinite') : ''
      };\n}`
      // console.log(ani mClass)
      let frames = ''
      for (let i = 0; i < this.fileList.length; i++) {
        if (i === 0) {
          frames = `  0% { background-position: 0 0; }`
        } else if (i === this.fileList.length - 1) {
          frames = `${frames}\n  100% { background-position: ${`${-(i % col)* wUnit + unit} ${-Math.floor(i / col) * hUnit + unit}`}; }`
        } else {
          frames = `${frames}\n  ${(step * i).toFixed(
            2
          )}% { background-position: ${`${-(i % col)* wUnit + unit} ${-Math.floor(i / col) * hUnit + unit}`}; }`
        }
      }
      frames = `@keyframes ${data.name} {\n${frames}\n}`
      // console.log(frames)
      this.cssStr = `${animClass}\n\n${frames}`
    },
    startDealing: function(tmp) {
      let canvas = document.getElementById('cvs')
      if (tmp === 0) {
        canvas.height = canvas.height
      }
      let ctx = canvas.getContext('2d')
      let self = this
      let myTmp = tmp
      let img = new Image()
      let reader = new FileReader()
      this.btnText = '生成中'
      this.btnLoading = true
      img.onload = function() {
        // 绘制对应的图形
        // console.log(self.fileList[myTmp].name)
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
        if (myTmp === 0) {
          self.dealCss(row, col)
        }
        // console.log((myTmp % col) * +self.frameData.prewidth)
        // console.log(Math.floor(myTmp / col) * +self.frameData.preheight)
        ctx.drawImage(
          img,
          (myTmp % col) * +self.frameData.prewidth,
          Math.floor(myTmp / col) * +self.frameData.preheight,
          +self.frameData.prewidth,
          +self.frameData.preheight
        )
        myTmp++
        if (self.fileList.length > myTmp) {
          setTimeout(function() {
            self.startDealing(myTmp)
          }, 1000)
        } else {
          // console.log(canvas.toDataURL('image/png'))
          self.imgStr = canvas.toDataURL('image/png')
          self.btnText = '开始生成'
          self.btnLoading = false
          self.$message.success('图片生成完成')
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
