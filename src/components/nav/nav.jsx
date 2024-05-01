import React from 'react'
import './nav.css'
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
// import { useState } from 'react'
// 1:18::00 in video

// onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}

// onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}

// onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}

// onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}

// onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}

const nav = () => {
  // const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" ><TiHomeOutline /></a>
      <a href="#about" ><FaRegUser /></a>
      <a href="#experience" ><FaBook /></a>
      <a href="#services"><LuHeartHandshake /></a>
      <a href="#contact" ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default nav