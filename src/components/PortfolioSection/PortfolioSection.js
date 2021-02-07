import React, { useState } from 'react';
import classes from './PortfolioSection.module.sass';
import cameraImg from '../../assets/portfolioSection/camera.png';
import musicImg from '../../assets/portfolioSection/music.png';
import settingsImg from '../../assets/portfolioSection/settings.png';
import safariImg from '../../assets/portfolioSection/safari.png';
import phoneImg from '../../assets/portfolioSection/phone.png';
import bubblesImg from '../../assets/portfolioSection/bubbles.png';
import filterPortfolio from '../../helpers/filterPortfolio';

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all'); 
  const [portfolio] = useState([
    {
      id: 1,
      title: 'camera',
      img: cameraImg,
      category: 'graphic'
    },
    {
      id: 2,
      title: 'music',
      img: musicImg,
      category: 'web'
    },
    {
      id: 3,
      title: 'setting',
      img: settingsImg,
      category: 'flat'
    },
    {
      id: 4,
      title: 'safari',
      img: safariImg,
      category: 'web'
    },
    {
      id: 5,
      title: 'phone',
      img: phoneImg,
      category: 'flat'
    },
    {
      id: 6,
      title: 'bubble',
      img: bubblesImg,
      category: 'graphic'
    },
    {
      id: 7,
      title: 'camera',
      img: cameraImg,
      category: 'graphic'
    },
    {
      id: 8,
      title: 'music',
      img: musicImg,
      category: 'web'
    }
  ])
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);

  const categoryHandler = (category) => {
    setFilteredPortfolio(filterPortfolio(portfolio, category));
    setActiveCategory(category)
  }

  return (
    <div id='portfiolio' className={ classes.portfolioSection }>
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>   
      <div className={ classes.portfolioMenu }>
        <ul>
          <li className={ activeCategory === 'all' ? classes.active : null } onClick={ () => categoryHandler('all') }>ALL</li>
          <li className={ activeCategory === 'web' ? classes.active : null } onClick={ () => categoryHandler('web') }>WEB DESIGN</li>
          <li className={ activeCategory === 'graphic' ? classes.active : null } onClick={ () => categoryHandler('graphic') }>GRAPHIC DESIGN</li>
          <li className={ activeCategory === 'flat' ? classes.active : null } onClick={ () => categoryHandler('flat') }>FLAT DESIGN</li>
        </ul>
      </div>
      <div className={ classes.portfolioMenuCircles }>
        <ul>
          {portfolio && filteredPortfolio.map(work => {
            return (
              <li key={ work.id }>
                <img src={ work.img } alt={ work.title }></img>
                <div className={ classes.divForHover }>
                  <div className={ classes.zoomCircle }>
                    <i className="fas fa-search"></i>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PortfolioSection;
