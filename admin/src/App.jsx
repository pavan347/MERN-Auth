import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<></>}/>
      </Routes>
    </div>
  )
}

export default App