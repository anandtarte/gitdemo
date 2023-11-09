import React from 'react'
import './Header.css'
function Header() {
  return (
    //<p className='classic' style={{color:"red", fontSize:"50px"}}>Hello,this is header component</p>
    <div className='Header'>
        <span>All</span>
        <span>Orders</span>
        <span>Products</span>
        <span>Account</span>
    </div>
  )
}

export default Header