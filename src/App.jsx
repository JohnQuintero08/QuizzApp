import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Game from './pages/Game'
import Results from './pages/Results'
import Settings from './pages/Settings'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='game' element={<Game/>} />
            <Route path='results' element={<Results/>} />
            <Route path='settings' element={<Settings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
