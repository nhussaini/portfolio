import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMicroscope,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-container">
        <div className="skill-development-conainter">
          <h4>
            <FontAwesomeIcon icon={faCode} className="mx-1" />
            Development
          </h4>

          <div className="developments">
            <div className="development">
              <p>JavaScript</p>
            </div>
            <div className="development">
              <p>React</p>
            </div>
            <div className="development">
              <p>HTML</p>
            </div>
            <div className="development">
              <p>NodeJs</p>
            </div>
            <div className="development">
              <p>SASS</p>
            </div>
            <div className="development">
              <p>Bootstrap</p>
            </div>
            <div className="development">
              <p>Material UI</p>
            </div>
            <div className="development">
              <p>MySQL</p>
            </div>
            <div className="development">
              <p>Postgres</p>
            </div>
            <div className="development">
              <p>MongoDB</p>
            </div>
            <div className="development">
              <p>Java</p>
            </div>
            <div className="development">
              <p>Ruby</p>
            </div>
          </div>
        </div>
        <div className="skill-tests">
          <h4>
            <FontAwesomeIcon icon={faMicroscope} className="mx-1" />
            Test
          </h4>

          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Mocha and Chai
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Jest
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Cypress
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Selenium
          </p>
        </div>
        <div className="skill-tools">
          <h4>
            <FontAwesomeIcon icon={faTools} className="mx-1" />
            Tools
          </h4>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Git + Github
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Bitbucket
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Command Line
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Chrome DevTools
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className="mx-1" />
            Postman and Rested
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
