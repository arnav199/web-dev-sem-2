import React, { useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Article from './component/Article'
import Homepage from './component/Homepage'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/Profile'

function App() {
  const[data,setData]=useState("Sample data")
  return (
    <>
      <routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
      </routes>
    </>
  )
}

export default App
