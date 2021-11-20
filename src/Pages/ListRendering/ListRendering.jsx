import React from 'react'

// components
import Card from '../../Components/Card/Card'

// import styling
import './ListRendering.css'

const ListRender = props => {
  // test 1
  const names = ['kennard', 'jokowi', 'indonesia']

  //   test 2
  const siswa = [
    { name: 'ken', gender: 'laki-laki', usia: 12 },
    { name: 'jokowi', gender: 'laki-laki', usia: 12 },
    { name: 'naruto', gender: 'Hokage', usia: 12 },
    { name: 'luffy', gender: 'pirate king', usia: 12 },
    { name: 'eren', gender: 'founding titan', usia: 12 },
  ]

  return (
    <>
      <div className={props.modeStyle ? 'container-dark' : 'container-light'}>
        <button onClick={() => props.handleClick()}>
          {props.modeStyle ? 'Light Mode' : 'Dark Mode'}
        </button>
        {names.map(item => (
          <h1 className='ListRender-center'>{item}</h1>
        ))}

        {siswa.map(item => (
          <Card name={item.name} gender={item.gender} usia={item.usia} />
        ))}
      </div>
    </>
  )
}

export default ListRender
