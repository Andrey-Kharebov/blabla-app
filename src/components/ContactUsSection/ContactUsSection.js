import React from 'react'
import classes from './ContactUsSection.module.sass';

function ContactUsSection() {
  return (
    <div className={ classes.contactUsSection }>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className={ classes.formAndMapSection }>
          <div className={ classes.contactForm }>
            <form>
              <div>
                <input id="name" type="text" placeholder="Your name" name="name" />
              </div>
              <div>
                <input id="emailame" type="text" placeholder="Your email" name="email" />
              </div>
              <div>
                <textarea id="message" type="text" placeholder="Your message" name="message" />
              </div>
              <div>
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
          <div className={ classes.map }>
            <div className={ classes.address }>
              <span><i className="fas fa-map-marker-alt"></i> Bla Bla Company 125009 Moscow, Red Square 1</span>
            </div>
            <div className={ classes.mapBlock }>
              <h3>Map</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactUsSection
