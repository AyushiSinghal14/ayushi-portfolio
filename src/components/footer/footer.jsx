import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { SiCodechef } from "react-icons/si";

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ayushi Singhal</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ayushi-singhal-9a4a4720a/"><BsLinkedin/></a>
        <a href="https://github.com/AyushiSinghal14"><IoLogoGithub/></a>
        <a href="https://www.codechef.com/users/ayushisinghal5"><SiCodechef/></a>
      </div>

      <div className="footer_copyright">
        <small>Made By Ayushi Singhal</small>
      </div>
    </footer>
  )
}

export default footer