import './View.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Share } from 'react-twitter-widgets';

import arrow from '../images/arrow.svg';
function View ({props, key}) {
    const [current, setCurrent] = useState(0);
    const length = props.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    console.log(props[0])
    return(
        <div className="main-container">
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
                        <img src={props[current].largeSrc} alt=""/>
                    </a>
                </div>
                <div className="share-container">
                    <Share options={{text: '#nfpoem', via: 'nfpoet'}}/>
                </div>
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