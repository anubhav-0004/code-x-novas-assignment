import React from 'react'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-br from-red-800 to-red-200 md:px-[126px] py-4'>
      <Navbar />
      <div className='border-t-2 mt-3 border-white text-2xl poppins text-white'>No Page Found</div>
    </div>
  )
}

export default NotFound
