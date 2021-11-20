import React from 'react'

// import component

// import styling
import './Click.css'

const ClickButton = props => {
  const clickMe = () => {
    console.log('button sudah diklik')
  }

  // cara tulisnya onClick = {clickMe} atau onClick= {()=> clickMe()}.
  //   Kalau langsung onClick = {clickMe()} maka fungsi akan langsung terpanggil ketika komponen dirender.
  return (
    <>
      <div className='click'>
        <h3>Click Me</h3>
        <button onClick={clickMe}>click me</button>
        <h3>Click Me dari parent</h3>
        <button onClick={() => props.handleClick('ken')}>click me 2</button>
      </div>
    </>
  )
}

export default ClickButton
