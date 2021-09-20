import React from "react";
import myImage from "../myPic.jpg";

function AboutMe() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={myImage} alt="nasrullah..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            An enthusiastic software engineer with a Master’s degree in software
            engineering experienced in applying coding to business technology
            needs. As an experienced consultant, instructor and employee, I have
            used my strong technical skills in frontend and backend application
            development to engage clients and meet their software needs. Strong
            interpersonal and collaboration abilities allow me to work
            effectively with my clients and with professionals from other
            disciplines. My natural curiosity and desire to learn motivates me
            to constantly expand my understanding and capacity in applying
            cutting edge technology to support your business and meet the
            challenges presented by our everchanging world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
