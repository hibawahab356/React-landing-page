import React from 'react'

import "./Header.css"
import  carImage  from "../assets/car.jfif"


const Header = () => {
  
  return (
    <div>
      <h1 className='heading'>Me header hon </h1>
      <img src={carImage} alt="" />
    </div>
  )
}

export default Header
