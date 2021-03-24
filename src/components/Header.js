import './Header.css';

function Header() {
    return(
        <div className="header-container">
            <div className="image-container">
                <div className="profile-container"></div>
            </div>
            <a target="_blank"  rel="noreferrer"href="https://twitter.com/nfpoet?s=20" className="twitter-handle">@nfpoet</a>
            <div className="delimiter"></div>
        </div>
    );
}

export default Header;