import './View.css';
import { Link } from 'react-router-dom';
import { FacebookButton, FacebookCount } from "react-social";

import Twitter from '../images/twitter.svg'

function View (props) {
    console.log(props.props)
    return(
        <div className="main-container">
            <div className="nav-container">
                <div className="home-container"><Link to="/"><div className="home-button"></div></Link></div> 
                <div className="title">{props.props[0].title}</div>
                <div className="filler"></div>
            </div>
            <div className="view-container" >
                <div className="poem-text-container">
                    <div id="scroll-style" className="poem-text">
                    {props.props[0].poem}
                    </div>
                    <div className="poem-date">
                        {props.props[0].date}
                    </div>
                </div>
                <div className="nft-container">
                    <img src={props.props[0].largeSrc} alt="I fucked up"/>
                </div>
                <div data-aos="fade-in" data-aos-duration="1500" ata-aos-easing="ease-in" className="share-container">
                <FacebookButton url={url} appId={appId}>
                    <FacebookCount url={url} />
                    {" Share " + url}
                </FacebookButton>
                </div>
            </div>
            
        </div>
    );
}

export default View;