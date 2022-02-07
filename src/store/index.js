import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'dark',
    showAside: true,
    showMask: false,
    tabs: [
      {
        text: '上传图片',
      },
      {
        text: '合成预览',
      },
      {
        text: '代码预览',
      },
    ],
    current: 0,
    fileList: []
  },
  mutations: {
    setMode: (state, mode) => {
      state.mode = mode
    },
    toggleMode: (state) => {
      if (state.mode === 'dark') {
        localStorage.setItem('mode', 'light')
        state.mode = 'light'
        document.body.classList.remove('dark')
      } else {
        localStorage.setItem('mode', 'dark')
        state.mode = 'dark'
        document.body.classList.add('dark')
      }
    },
    tabChange: (state, index) => {
      state.current = index
    },
    toggleMask: (state) => {
      state.showMask = !state.showMask
    },
    toggleAside: (state) => {
      state.showAside = !state.showAside
    },
    emptyFileList: (state) => {
      state.fileList = []
    }
  },
})
