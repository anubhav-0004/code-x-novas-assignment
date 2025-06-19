import React from 'react'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <div className='bg-white'>
      <img src={logo} alt="logo" className="absolute w-[89px] h-[30.95px] left-[126px] top-[61px]"  />
    </div>
  )
}

export default Logo
