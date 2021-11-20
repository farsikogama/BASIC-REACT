import React from 'react'

// import component

// import styling
import './Rendering.css'

// const Rendering = () => {
//   const [login, setLogin] = useState(false)

//   // Cara 1 (ga bisa ditaruh di dalam JSX)
//   // if (login) {
//   //   return <h1>Welcome To our Web!</h1>
//   // } else {
//   //   return <h1>Login First!</h1>
//   // }

//   // Cara 2 store value di dalam java script
//   //   let greetings
//   //   if (login) {
//   //     greetings = <h1>Welcome To our Web!</h1>
//   //   } else {
//   //     greetings = <h1>Login First!</h1>
//   //   }
//   let greetingsLoggedIn = <h1>Welcome To our Web!</h1>
//   let greetingsLoggedOut = <h1>Login First!</h1>

//   // Cara 3 Ternary conditional operator
//   //   di dalam JSX

//   // Cara 4 Shortcut circuit operator
//   // di dalam JSX

//   return (
//     <>
//       <div className='container-rendering'>
//         {/* Cara 2 */}
//         {/* <div>{greetings}</div> */}

//         {/* Cara 3 Ternary Conditional Operator */}
//         {login ? greetingsLoggedIn : greetingsLoggedOut}

//         {/* Cara 4 Shortcut circuit operator*/}
//         {login && greetingsLoggedIn}

//         <button onClick={() => setLogin(!login)}>
//           {login ? 'sign out' : 'sign in'}
//         </button>
//       </div>
//     </>
//   )
// }

const Rendering = props => {
  let greetingsLoggedIn = <h1>Dark Mode!</h1>
  let greetingsLoggedOut = <h1>Light Mode!</h1>

  return (
    <>
      <div className={props.modeStyle ? 'container-dark' : 'container-light'}>
        <h1>Halaman Rendering</h1>

        {props.modeStyle ? greetingsLoggedIn : greetingsLoggedOut}

        <button onClick={() => props.handleClick()}>
          {props.modeStyle ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  )
}

export default Rendering
