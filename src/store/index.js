import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'dark',
    showAside: true,
    showMask: false,
  },
  mutations: {
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
