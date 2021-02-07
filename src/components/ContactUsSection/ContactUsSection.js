import React from 'react'
import classes from './ContactUsSection.module.sass';
import FormComponent from './FormComponent/FormComponent';
import MapComponent from './MapComponent/MapComponent';

function ContactUsSection() {
  
  return (
    <div id='contact' className={ classes.contactUsSection }>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        <div className={ classes.formAndMapSection }>
          <FormComponent />
          <MapComponent />
        </div> 
    </div>
  )
}

export default ContactUsSection
