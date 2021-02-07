import React, { useState } from 'react';
import classes from './PortfolioSection.module.sass';
import cameraImg from '../../assets/portfolioSection/camera.png';
import musicImg from '../../assets/portfolioSection/music.png';
import settingsImg from '../../assets/portfolioSection/settings.png';
import safariImg from '../../assets/portfolioSection/safari.png';
import phoneImg from '../../assets/portfolioSection/phone.png';
import bubblesImg from '../../assets/portfolioSection/bubbles.png';

function PortfolioSection() {
  const [portfolio] = useState([
    {
      title: 'camera',
      img: cameraImg
    },
    {
      title: 'music',
      img: musicImg
    },
    {
      title: 'setting',
      img: settingsImg
    },
    {
      title: 'safari',
      img: safariImg
    },
    {
      title: 'phone',
      img: phoneImg
    },
    {
      title: 'bubble',
      img: bubblesImg
    },
    {
      title: 'camera',
      img: cameraImg
    },
    {
      title: 'music',
      img: musicImg
    }
  ])
  return (
    <div className={ classes.portfolioSection }>
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>   
      <div className={ classes.portfolioMenu }>
        <ul>
          <li>ALL</li>
          <li>WEB DESIGN</li>
          <li>GRAPHIC DESIGN</li>
          <li>FLAT DESIGN</li>
        </ul>
      </div>
      <div className={ classes.portfolioMenuCircles }>
        <ul>
          {portfolio && portfolio.map(work => {
            return (
              <li>
                <img src={ work.img } alt={ work.title }></img>
                <div className={ classes.divForHover }>
                  <div className={ classes.zoomCircle }>
                    <i class="fas fa-search"></i>
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
