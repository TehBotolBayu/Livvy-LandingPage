import React from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const Header = () => {
  const [side, setSide] = useState('hidden');
  const [sidelogo, setSidelogo] = useState(menu);

  const handleSidebar = () => {
    if(sidelogo == menu){
      setSidelogo(close);
      setSide('sidebar md:hidden');
    } else {
      setSidelogo(menu);
      setSide('hidden');
    }
  }

  return (
    <div className="bg-white flex flex-row justify-between fixed top-0 w-screen px-10 items-center">
        <img src={Logo} width={'150px'}/>
        <div className="md:flex md:flex-row hidden">
            <p className='headnav' onClick={() => document.location.href = "/"}>Home</p>
            <p className='headnav' onClick={() => document.location.href = "/kalkulator"}>Kalkulator</p>
        </div>
        <div className={side}>
              <p onClick={() => document.location.href = "/"}>Home</p>
              <p onClick={() => document.location.href = "/kalkulator"}>Kalkulator</p>
        </div>
        <div onClick={handleSidebar} className="z-[1] cursor-pointer md:hidden "><img className='w-8' src={sidelogo}/></div>
    </div>
  )
}

export default Header