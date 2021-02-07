import React, { useState } from "react";
import classes from "./AboutUsSection.module.sass";

// ava
import ava1 from "../../assets/aboutUsSection/ava-1.png";
import ava2 from "../../assets/aboutUsSection/ava-2.png";
import ava3 from "../../assets/aboutUsSection/ava-3.png";

// socials

import facebook from '../../assets/aboutUsSection/socials/facebook.png';
import twitter from '../../assets/aboutUsSection/socials/twitter.png';
import google from '../../assets/aboutUsSection/socials/google.png';
import basket from '../../assets/aboutUsSection/socials/basket.png';

function AboutUsSection() {
  const [persons] = useState([
    {
      id: 1,
      name: 'Melannie Doe',
      position: 'Project Manager',
      description: 'Ut wisi enim ad minim veniam, quits nostrud exerci tation',
      photo: ava1
    },
    {
      id: 2,
      name: 'Jhonnie Doe',
      position: 'Graphic Designer',
      description: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      photo: ava2
    },
    {
      id: 3,
      name: 'Daniel Doe',
      position: 'Web Designer',
      description: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo',
      photo: ava3
    }
  ])
  return (
    <div className={classes.aboutUsSection}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <div className={classes.employeeSection}>
        { persons && persons.map(person => {
          return (
            <div className={classes.employeeCard}>
              <div className={classes.employeePhoto}>
                <img src={ person.photo } alt={ person.name }></img>
              </div>
              <div className={classes.employeeInfo}>
                <h2>{ person.name }</h2>
                <span>{ person.position }</span>
                <p>{ person.description }</p>
              </div>
              <div className={ classes.socials }>
                <ul>
                  <li><img src={ facebook } alt='facebook'></img></li>
                  <li><img src={ twitter } alt='twitter'></img></li>
                  <li><img src={ google } alt='google'></img></li>
                  <li><img src={ basket } alt='basket'></img></li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default AboutUsSection;
