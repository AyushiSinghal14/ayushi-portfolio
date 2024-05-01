import React from 'react'
import './About.css'
import ME from '../../assets/my-passport-photo.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Hackathons</h5>
              <small>75+ Hackathons</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>7+ Completed Projects</small>
            </article>
          </div>

          <p>Hello, I'm Ayushi Singhal, a driven technologist with expertise in web development and problem-solving. Proficient in programming languages like C, C++, JavaScript, React JS and Python, I specialize in crafting dynamic and user-friendly web applications.

My journey is marked by a passion for innovation. Projects like 'tie-NOT-women,' empowering athletes, and 'Doctor At Doorstep,' utilizing machine learning for healthcare, highlight my ability to find practical solutions to complex challenges.

I'm a continuous learner, with training in Data Science, Machine Learning, and blockchain. Leadership roles, including Technical Head at Enterpreneurship Cell, have honed my teamwork and communication skills.

My portfolio reflects my dedication to transforming ideas into impactful technology. Explore my work to see how I shape the future of tech.</p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About