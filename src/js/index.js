import '../styles/Main.less'

import React from 'react'
import { render } from 'react-dom'

import RootRouter from './router'

render(
  <RootRouter />,
  document.querySelector('#root')
)
