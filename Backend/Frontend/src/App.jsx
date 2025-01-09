import React from 'react'
import Logoutbtn from './components/mostleft/logoutbtn'
import Left from './components/left/left'
import Right from './components/right/right'

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
