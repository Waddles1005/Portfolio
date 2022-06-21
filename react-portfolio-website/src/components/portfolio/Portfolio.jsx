import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Swindle-Shop-logo.png'
import IMG2 from '../../assets/Swindle-Shop-logo.png'
import IMG3 from '../../assets/Swindle-Shop-logo.png'
import IMG4 from '../../assets/Swindle-Shop-logo.png'
import IMG5 from '../../assets/Swindle-Shop-logo.png'
import IMG6 from '../../assets/Swindle-Shop-logo.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Swindle-Shop -JavaScript -Node.js -Express.js -Handlebars.js -Cloudinary -HTML -CSS -MySQL',
    github: 'https://github.com',
    demo: 'https://swindle-shop.herokuapp.com/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio