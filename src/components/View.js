import './View.css';
import React, { useState, Suspense } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Share } from 'react-twitter-widgets';

import arrow from '../images/arrow.svg';
function View ({props, index}) {
    const [current, setCurrent] = useState(index);
    const length = props.length;

    function nextSlide () {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    function prevSlide () {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return(
        <div className="main-container">
            <Redirect to={props[current].link} />
            <div className="nav-container">
                <div className="home-container"><Link to="/"><div className="home-button"></div></Link></div> 
                <div className="title">{props[current].title}</div>
                <div className="filler"></div>
            </div>
            <div className="view-container" >
                <div className="poem-text-container">
                    <div id="scroll-style" className="poem-text">
                    {props[current].poem}
                    </div>
                    <div className="poem-date">
                        {props[current].date}
                    </div>
                </div>
                <div className="nft-container">
                    <a target="__blank" href="https://opensea.io/">
                        <img src={props[current].source} alt=""/>
                    </a>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className="share-container">
                        <Share options={{text: '#nfpoem', via: 'nfpoet'}}/>
                    </div>
                </Suspense>
            </div>
            <div onClick={nextSlide} className="previous-container">
                <img src={arrow} alt=""/>
            </div>
            <div onClick={prevSlide} className="next-container">
                <img src={arrow} alt=""/>
            </div>
        </div>
    );
}

export default View;