import React from 'react';
import essentailWords from '../images/essential-words.PNG';
import schedular from '../images/schedular.png';
import trek from '../images/trek.png';
import tweeter from '../images/tweeter.png';


function Portfolio() {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper">
                    <div className="portfolio-image-box">
                      <img src={essentailWords} alt="essential words ..." className="portfolio-image" />
                    </div>
                

                
                    <div className="portfolio-image-box">
                      <img src={schedular} alt="schedular..." className="portfolio-image" />
                    </div>
                

                    <div className="portfolio-image-box">
                      <img src={trek} alt="trek..." className="portfolio-image" />
                    </div>
                

                    <div className="portfolio-image-box">
                      <img src={tweeter} alt="tweeter..." className="portfolio-image" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Portfolio
