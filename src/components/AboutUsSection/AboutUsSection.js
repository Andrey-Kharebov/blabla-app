import React from "react";
import classes from "./AboutUsSection.module.sass";
import ava1 from "../../assets/aboutUsSection/ava-1.png";
import ava2 from "../../assets/aboutUsSection/ava-2.png";
import ava3 from "../../assets/aboutUsSection/ava-3.png";

function AboutUsSection() {
  return (
    <div className={classes.aboutUsSection}>
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <div className={classes.employeeSection}>
        <div className={classes.employeeCard}>
          <div className={classes.employeePhoto}>
            <img src={ava1} alt='melannie'></img>
          </div>
          <div className={classes.employeeInfo}>
            <h2>Melannie Doe</h2>
            <span>Project Manager</span>
            <p>Ut wisi enim ad minim veniam, quits nostrud exerci tation</p>
          </div>
        </div>
        <div className={ classes.employeeCard }>
          <div className={ classes.employeePhoto }>
            <img src={ ava2 } alt='jhonnie'></img>
          </div>
          <div className={ classes.employeeInfo }>
            <h2>Jhonnie Doe</h2>
            <span>Graphic Designer</span>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className={classes.employeeCard}>
          <div className={classes.employeePhoto}>
            <img src={ava3} alt='daniel'></img>
          </div>
          <div className={classes.employeeInfo}>
            <h2>Daniel Doe</h2>
            <span>Web Designer</span>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
