import React from 'react';
import classes from './BrandSection.module.sass'

function BrandSection() {
  return (
    <div className={ classes.brandSection }>
      <h1>We Build <span>Brand</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur 
        adipiscing elit sed diam nonummy nibh 
        euismod tincidunt ut laoreet dolore magna
        aliquam erat volutpat.</p>   
      <button className={ classes.learnMore }>LEARN MORE</button>
      <div className={ classes.arrowDown }>
        <i className="fas fa-chevron-circle-down"></i>
      </div>
    </div>
  )
}

export default BrandSection
