import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Home = () => {

    const {userData} = useContext(AppContext);

  return (
   <div className='w-full py-40 text-4xl  font-medium flex items-center justify-center'>
        <h1>Welcome {userData? userData.name : "Developer"}! </h1>
   </div>
  )
}

export default Home