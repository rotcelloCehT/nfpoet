import './View.css';
import { Link } from 'react-router-dom';

import { Share } from 'react-twitter-widgets'

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
                <div className="share-container">
                <Share options={{text: '#nfpoem', via: 'nfpoet'}}/>
                </div>
            </div>
            
        </div>
    );
}

export default View;