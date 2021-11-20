import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Rendering from './Pages/ConditionalRendering/Rendering'
import ListRender from './Pages/ListRendering/ListRendering'
import Navbar from './Components/Navbar/Navbar'

// import context
// import AppContext from './Context/AppContext'

// styling
import './App.css'

function App() {
  const [modeStyle, setModeStyle] = useState(false)

  const handleClick = () => {
    setModeStyle(!modeStyle)
  }

  return (
    <>
      {' '}
      <BrowserRouter>
        {/* <AppContext> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/about'
            element={<About modeStyle={modeStyle} handleClick={handleClick} />}
          />
          <Route
            path='/rendering'
            element={
              <Rendering modeStyle={modeStyle} handleClick={handleClick} />
            }
          />
          <Route
            path='/listrendering'
            element={
              <ListRender modeStyle={modeStyle} handleClick={handleClick} />
            }
          />
        </Routes>
        {/* </AppContext> */}
      </BrowserRouter>
    </>
  )
}

export default App
