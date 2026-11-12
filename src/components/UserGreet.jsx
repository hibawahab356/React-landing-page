import React from 'react'

const UserGreet = ({name,stdClass,phoneNum:stdPhoneNum}) => {
    
  return (
    <div>
      <h1 className='bg-success'>Hello {name} {stdClass} {stdPhoneNum}</h1>
    </div>
  )
}

export default UserGreet
