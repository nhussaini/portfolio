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
                <div className="image-box--wrapper row justify-content-center">
                    <img src={essentailWords} alt="essential words ..." className="portfolio-img" />
                </div>

                <div className="image-box--wrapper row justify-content-center">
                    <img src={schedular} alt="schedular..." className="portfolio-img" />
                </div>

                <div className="image-box--wrapper row justify-content-center">
                    <img src={trek} alt="trek..." className="portfolio-img" />
                </div>

                <div className="image-box--wrapper row justify-content-center">
                    <img src={tweeter} alt="tweeter..." className="portfolio-img" />
                </div>

            </div>
            
        </div>
    )
}

export default Portfolio
