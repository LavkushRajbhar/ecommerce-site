import React from 'react'
import Nav from './Com/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './Com/Rout'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  )
}

export default App