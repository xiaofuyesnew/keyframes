import { StrictMode } from 'react'
import { render } from 'react-dom'
import './tailwind.css'
import 'antd/dist/antd.css'

import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
