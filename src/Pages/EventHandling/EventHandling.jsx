import React from 'react'

// components
import ClickButton from '../../Components/Click/Click'
import { useEffect, useState } from 'react'

// styling

const EventHandling = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const textAlert = name => {
    alert(`ini alert dari child dengan value ${name}`)
  }

  const updateWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('i rendered')
  })

  // component did mount
  useEffect(() => {
    console.log('Component didmount')
  }, [])

  // component did update
  useEffect(() => {
    console.log('Component did update name')
  }, [name])

  // component did update
  useEffect(() => {
    console.log('Component did update email')
  }, [email])

  // component will unmount using clean up
  // useEffect(() => {
  //   window.addEventListener('resize', updateWindow)

  //   // clean up code or the event listener
  //   return () => {
  //     window.removeEventListener('resize', updateWindow)
  //   }
  // })

  // component will unmount (clean up not used anymore) more simple
  useEffect(() => {
    window.addEventListener('resize', updateWindow)

    // clean up code or the event listener
  }, [])

  return (
    <>
      {/* tes useEffect */}
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='enter a name'
      />
      <br />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder='enter an Email'
      />

      {/* tes useEffect */}

      <h1>window width : {windowWidth}</h1>
      {/* <Card name='Ken' gender='laki-laki' usia='12' />
      <Card name='Gama' gender='laki-laki' usia='31' /> */}
      <ClickButton handleClick={textAlert} />
    </>
  )
}

export default EventHandling
