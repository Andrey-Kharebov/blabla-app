import React from 'react';
import { Link } from 'react-scroll';
import headerLogo from '../../assets/header/logo.png';
import classes from './Header.module.sass';

function Header() {
  return (
    <div className={ classes.header }>
      <div className={ classes.headerLogoSection }> 
        <div className={ classes.headerLogo }>
          <img src={ headerLogo } alt='headerLogo'></img>
        </div>
        <div className={ classes.headerTitle}> 
          <h1>BLA BLA</h1>
          <p>One Page Flat Template</p>  
        </div>
      </div>
      <div className={ classes.headerMenu }>
        <ul>
          <Link
             to="brand"
             smooth={true}
          ><li>HOME</li></Link>
          <Link
             to="portfiolio"
             smooth={true}
          ><li>PORTFOLIO</li></Link>
          <Link
             to="about"
             smooth={true}
          ><li>ABOUT</li></Link>
          <Link
             to="contact"
             smooth={true}
          ><li>CONTACT</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
