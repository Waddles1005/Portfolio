import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Swindle-Shop-logo.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            
          </div>
          <h3> This is a portfolio item title</h3>
          <a href='https://github.com/JustynSubrai/Road-Buddy' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/JustynSubrai/Road-Buddy' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        </div>
      </section>
  )
}

export default portfolio