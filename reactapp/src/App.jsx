import React, { useState } from 'react'
import './App.css'
import List from './component/Menu'
import Article from './component/Article'
import Homepage from './Homepage'

function App() {

  return (
    <>
    <Homepage/>
      <List/>
      <Article/>
    </>
  )
}

export default App