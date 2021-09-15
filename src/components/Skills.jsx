import React from "react";

function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-container">
        <div className="skill-development-conainter">
          <h2>Development</h2>

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
          <h2>Test</h2>
          <p>Mocha and Chai</p>
          <p>Jest</p>
          <p>Cypress</p>
          <p>Selenium</p>
        </div>
        <div className="skill-tools">
          <h2>Tools</h2>
          <p>Git + Github</p>
          <p>Bitbucket</p>
          <p>Command Line</p>
          <p>Chrome DevTools</p>
          <p>Postman and Rested</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
