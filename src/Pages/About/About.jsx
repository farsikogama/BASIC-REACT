import React from 'react'

// import component

// import styling
import './About.css'

const About = props => {
  let greetingsLoggedIn = <h1>Dark Mode!</h1>
  let greetingsLoggedOut = <h1>Light Mode!</h1>

  return (
    <>
      <div className={props.modeStyle ? 'container-dark' : 'container-light'}>
        <h1>Halaman About</h1>

        {props.modeStyle ? greetingsLoggedIn : greetingsLoggedOut}

        <button onClick={() => props.handleClick()}>
          {props.modeStyle ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  )
}

export default About
