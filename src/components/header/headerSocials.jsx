import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const headerSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ayushi-singhal-9a4a4720a/.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/AyushiSinghal14" target='_blank'><FaGithub /></a>
        <a href="https://leetcode.com/u/ayushi_singhal_/" target='_blank'><SiLeetcode /></a>
    </div>
  )
}

export default headerSocials