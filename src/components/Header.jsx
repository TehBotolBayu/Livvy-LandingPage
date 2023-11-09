import React from 'react'
import Logo from '../assets/logo.jpg'

const HeadNav = () => {
    return (
        <div className="flex flex-row [&>p]:headnav">
            <p onClick={() => document.location.href = "#hero"}>Home</p>
            <p onClick={() => document.location.href = "#about"}>About Us</p>
        </div>
    )
}

const Header = () => {
  return (
    <div className="bg-gray-50 flex flex-row justify-between fixed top-0 w-screen px-5 items-center">
        <img src={Logo} width={'200px'}/>
        <HeadNav />
    </div>
  )
}

export default Header
