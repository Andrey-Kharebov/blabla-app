import React from 'react'
import { Link } from 'react-scroll'
import classes from './Footer.module.sass'

function Footer() {
  return (
    <div className={ classes.footer }>
      <div className={ classes.copyright}>
        <span><i className="far fa-copyright"></i> Copyright 2021 Bla Bla Studio | One Page Flat Template</span>
      </div>
      <Link to="top" smooth={true}>
        <div className={ classes.arrowUp }>
          <i className="fas fa-chevron-up"></i>
        </div>
      </Link>
    </div>
  )
}

export default Footer
