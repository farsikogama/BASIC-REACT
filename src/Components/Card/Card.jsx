import React from 'react'

// components

// styling
import './Card.css'

const Card = props => {
  return (
    <>
      <div className='card'>
        <h3>ini komponen card</h3>
        <p>Name: {props.name}</p>
        <p>Gender: {props.gender}</p>
        <p>Usia: {props.usia}</p>
      </div>
    </>
  )
}

export default Card
