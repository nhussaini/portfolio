import React from 'react';
import essentailWords from '../images/essential-words.PNG';
import schedular from '../images/schedular.png';
import trek from '../images/trek.png';
import tweeter from '../images/tweeter.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//react popupbox
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';



function Portfolio() {
    //essential words
    const openPopupboxEssentialWords =()=>{
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={essentailWords} alt="essential words ..."/>
                <p>This app is for those who want to improve their vocabulary to be further ready to take the TOEFL test. It has two parts. A user can either use the Learn Mode,
                   which lets learn new words, or the user can use the Quiz Mode which lets take a quiz and finally get a score.
                </p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nhussaini/essential-words-toefl")}>https://github.com/nhussaini/essential-words-toefl</a><br/>
                <b>Live Demo:</b> <a className="hyper-link" onClick={()=> window.open("https://essential-words-for-toefl.web.app/")}>https://essential-words-for-toefl.web.app/</a>

            </>
        )
      

        PopupboxManager.open({content})
    }

    const popupboxConfigEssentialWords ={
        titleBar: {
            enable: true,
            text: 'Essential'
        },
        fadeIn:true,
        fadeInSpeed: 500

    }

     //Schedular
     const openPopupboxSchedular =()=>{
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={schedular} alt="Schedular..."/>
                <p>
                    Interview Scheduler is a Single Page Application(SPA) to track students interviews. The App
                    allows users to add, edit and delete appointments in real time. 
                </p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nhussaini/lighthouse-labs-scheduler")}>https://github.com/nhussaini/lighthouse-labs-scheduler</a><br/>
            </>
        )
      

        PopupboxManager.open({content})
    }

    const popupboxConfigSchedular ={
        titleBar: {
            enable: true,
            text: 'Schedular'
        },
        fadeIn:true,
        fadeInSpeed: 500

    }

     //Trek
     const openPopupboxTrek =()=>{
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={trek} alt="trek..."/>
                <p>
                TREK is a travel planning app inspired by the growing need to travel after months of lockdown. It allows users to explore any city they type in and shows local attractions, weather and images of the location.
                 This app also lets a user create a plan of their trip by adding attractions and tasks to a personalized to-do list.
                </p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nhussaini/Travel_planner")}>https://github.com/nhussaini/Travel_planner</a><br/>
            </>
        )
      

        PopupboxManager.open({content})
    }

    const popupboxConfigTrek ={
        titleBar: {
            enable: true,
            text: 'TREK'
        },
        fadeIn:true,
        fadeInSpeed: 500

    }


    //Twitter
    const openPopupboxTweeter =()=>{
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={tweeter} alt="trek..."/>
                <p>
                Tweeter is a simple, single-page Twitter clone that uses jQuery, AJAX, HTML5, SASS and CSS3. It lets the user post new Tweets. When a user submits a tweet, the list of tweets is refreshed, displaying the new tweets on the top of the list.
                </p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nhussaini/tweeter")}>https://github.com/nhussaini/tweeter</a><br/>
            </>
        )
      

        PopupboxManager.open({content})
    }

    const popupboxConfigTweeter = {
        titleBar: {
            enable: true,
            text: 'Tweeter Clone'
        },
        fadeIn:true,
        fadeInSpeed: 200

    }
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper">
                    <div className="portfolio-image-box" onClick={openPopupboxEssentialWords}>
                      <img src={essentailWords} alt="essential words ..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                

                
                    <div className="portfolio-image-box"onClick={openPopupboxSchedular}>
                      <img src={schedular} alt="schedular..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                

                    <div className="portfolio-image-box" onClick={openPopupboxTrek}>
                      <img src={trek} alt="trek..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                

                    <div className="portfolio-image-box" onClick={openPopupboxTweeter}>
                      <img src={tweeter} alt="tweeter..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigEssentialWords}/>
            <PopupboxContainer {...popupboxConfigSchedular}/>
            <PopupboxContainer {...popupboxConfigTrek}/>
            <PopupboxContainer {...popupboxConfigTweeter}/>


            
        </div>
    )
}

export default Portfolio
