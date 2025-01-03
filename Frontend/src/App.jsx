import React from 'react'
import Left from './components/left/left'
import Right from './components/right/right'
import Logoutbtn from './components/mostleft/logoutbtn'

function App() {
  return (
    <div className='h-screen flex w-full'>
     <Logoutbtn/>
     <Left/>
     <Right/>
    </div>
  )
}

export default App
