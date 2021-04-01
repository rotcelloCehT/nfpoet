import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className="header-container">
            <div className="image-container">
                <Link to="/playmewhatyoulove"><div className="profile-container"></div></Link>
            </div>
            <a target="_blank"  rel="noreferrer"href="https://twitter.com/nfpoet?s=20" className="twitter-handle">@nfpoet</a>
            <div className="delimiter"></div>
        </div>
    );
}

export default Header;