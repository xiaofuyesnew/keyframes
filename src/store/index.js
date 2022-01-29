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
        text: '图片排序',
      },
      {
        text: '合成预览',
      },
      {
        text: '代码预览',
      },
    ],
    current: 0,
  },
  mutations: {
    tabChange: (state, index) => {
      state.current = index
    },
    toggleMask: (state, payload) => {
      state.showMask = !state.showMask
    },
    toggleAside: (state, payload) => {
      state.showAside = !state.showAside
    },
    toggleMode: (state, mode) => {
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
    setMode: (state, mode) => {
      state.mode = mode
    },
  },
})
