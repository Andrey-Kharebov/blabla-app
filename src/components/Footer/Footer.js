import React from 'react'
import classes from './Footer.module.sass'

function Footer() {
  return (
    <div className={ classes.footer }>
      <div className={ classes.copyright}>
        <span><i className="far fa-copyright"></i> Copyright 2021 Bla Bla Studio | One Page Flat Template</span>
      </div>
      <div className={ classes.arrowUp }>
        <i className="fas fa-chevron-up"></i>
      </div>
    </div>
  )
}

export default Footer
