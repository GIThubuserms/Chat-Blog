import React from 'react'
import Logoutbtn from './components/mostleft/Logoutbtn.jsx'
import Left from './components/left/Left.jsx'
import Right from './components/right/Right.jsx'

function App() {
  return (
    <div className='w-full flex h-screen'>
      <Logoutbtn/>
        <Left/>
        <Right/>
    </div>
  )
}

export default App
