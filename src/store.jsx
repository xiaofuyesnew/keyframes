import { createContext, useReducer } from 'react'

const initialState = {
  imgList: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        ...action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const Context = createContext({
  state: initialState,
  dispatch: () => null,
})

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default Provider
