import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Game from './pages/Game'
import Results from './pages/Results'
import Settings from './pages/Settings'

function App() {
  const [gameProps, setGameProps] = React.useState({
    fullName: "",
    difficulty: "Medium",
    numberOfQuestions: '5',
    isChecked: false,
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='game' element={<Game setting={gameProps}/>} />
            <Route path='results' element={<Results setting={gameProps}/>} />
            <Route path='settings' element={<Settings gamingProps={(gameProperties)=> {
              return setGameProps(gameProperties)
            }}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
