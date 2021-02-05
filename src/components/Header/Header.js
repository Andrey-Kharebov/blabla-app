import React from 'react';
import classes from './Header.module.sass';

function Header() {
  return (
    <div className={ classes.header }>
      <div className={ classes.headerLogoSection }> 
        <div className={ classes.headerLogo }>
          <img src='./assets/header-assets/logo.png'></img>
        </div>
        <div className={ classes.headerTitle}> 
          <h1>BLA BLA</h1>
          <p>One Page Flat Template</p>  
        </div>
      </div>
      <div className={ classes.headerMenu }>
        <ul>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
