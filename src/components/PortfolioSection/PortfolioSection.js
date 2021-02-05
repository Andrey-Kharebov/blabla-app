import React from 'react';
import classes from './PortfolioSection.module.sass';
import cameraImg from '../../assets/portfolioSection/camera.png';
import musicImg from '../../assets/portfolioSection/music.png';
import settingsImg from '../../assets/portfolioSection/settings.png';
import safariImg from '../../assets/portfolioSection/safari.png';
import phoneImg from '../../assets/portfolioSection/phone.png';
import bubblesImg from '../../assets/portfolioSection/bubbles.png';
// import hoveredBG from '../../assets/portfolioSection/hoveredBg.png';

function PortfolioSection() {
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
          <li><img src={ cameraImg } alt='cameraImg'></img></li> 
          <li><img src={ musicImg } alt='musicImg'></img></li>
          <li><img src={ settingsImg } alt='settingsImg'></img></li>
          <li><img src={ safariImg } alt='safariImg'></img></li>
          <li><img src={ phoneImg } alt='phoneImg'></img></li>
          <li><img src={ bubblesImg } alt='bubblesImg'></img></li>
          <li><img src={ cameraImg } alt='cameraImg'></img> </li> 
          <li><img src={ musicImg } alt='musicImg'></img></li>
        </ul>
      </div>
    </div>
  )
}

export default PortfolioSection;
