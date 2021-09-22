import React from 'react';
import essentailWords from '../images/essential-words.PNG';
import schedular from '../images/schedular.png';
import trek from '../images/trek.png';
import tweeter from '../images/tweeter.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//react popupbox
import {PopupboxManager,PopupboxContainer} from 'react-popupbox'



function Portfolio() {
    //essential words
    const openPopupboxEssentialWords =()=>{
        const content = (
            <>
                <img src={essentailWords} alt="essential words ..."/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint eos magni quia voluptatem odit sapiente deleniti accusamus temporibus aspernatur architecto.</p>
                <b>Github:</b> <a className="hyper-link" onClick={()=> window.open("https://github.com/nhussaini/essential-words-toefl")}>https://github.com/nhussaini/essential-words-toefl</a>
            </>
        )
      

        PopupboxManager.open({content})
    }

    const popupboxConfigEssentialWords ={

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
                

                
                    <div className="portfolio-image-box">
                      <img src={schedular} alt="schedular..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                

                    <div className="portfolio-image-box">
                      <img src={trek} alt="trek..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                

                    <div className="portfolio-image-box">
                      <img src={tweeter} alt="tweeter..." className="portfolio-image" />
                      <div className="overflow"></div>
                      <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>

                    </div>
                </div>

            </div>
            <PopupboxContainer {...popupboxConfigEssentialWords}/>
            
        </div>
    )
}

export default Portfolio
