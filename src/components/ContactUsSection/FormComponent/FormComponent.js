import React from 'react';
import classes from './FormComponent.module.sass';

function FormComponent() {
  return (
    <div className={ classes.contactForm }>
      <form>
        <div>
          <input id='name' type='text' placeholder='Your name' name='name' />
        </div>
        <div>
          <input id='emailame' type='text' placeholder='Your email' name='email' />
        </div>
        <div>
          <textarea id='message' type='text' placeholder='Your message' name='message' />
        </div>
        <div>
          <button type='submit'>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default FormComponent;
