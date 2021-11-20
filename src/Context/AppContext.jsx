import React, { useState, createContext } from 'react'

export const ModeContext = createContext()

const AppContext = props => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('mode'))
  )

  return (
    <ModeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ModeContext.Provider>
  )
}

export default AppContext
