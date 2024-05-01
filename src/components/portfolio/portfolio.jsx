import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/w.jpg'
import IMG2 from '../../assets/d.jpg'
import IMG3 from '../../assets/f.webp'
import IMG4 from '../../assets/m.jpg'
import IMG5 from '../../assets/s.jpg'
import IMG6 from '../../assets/c.avif'

//DO NOT USE THE IMAGES IN PRODUCTION

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'Charts templates & infographics in Figma',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Crypto Currency Dashboard & Financial Visualization',
//     github: "https://github.com",
//     demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
//   }
// ]

// const portfolio = () => {
//   return (
//     <section id='portfolio'>
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio_container">
        {/* <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}

        {/* {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        } */}




function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG1} alt="" />
          </div>
          <h3>tie-NOT-women</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/AyushiSinghal14/tie-NOT-women" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AyushiSinghal14/tie-NOT-women" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG2} alt="" />
          </div>
          <h3>Doctor at door steps</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/AyushiSinghal14/doctor-at-doorsteps" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AyushiSinghal14/doctor-at-doorsteps" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG3} alt="" />
          </div>
          <h3>JS Quiz Game</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/AyushiSinghal14/js_quiz_game" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AyushiSinghal14/js_quiz_game" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG4} alt="" />
          </div>
          <h3>Bribe diminution in land registry system</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/AyushiSinghal14/Bribe-Diminution-in-Land-Registry-System" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AyushiSinghal14/Bribe-Diminution-in-Land-Registry-System" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG5} alt="" />
          </div>
          <h3>Gender Classification</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={IMG6} alt="" />
          </div>
          <h3>iCoder</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com/AyushiSinghal14/iCoder" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AyushiSinghal14/iCoder" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

         
           
         
 
      </div>
    </section>
  )
}

export default portfolio