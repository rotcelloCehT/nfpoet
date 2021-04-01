import './Footer.css'
import Twitter from '../images/twitter.svg'

function Footer () {
    return (
        <div  className="footer-container">
            <a className="twitter-link" target="_blank"  rel="noreferrer"href="https://twitter.com/nfpoet?s=20">
                <div className="twitter-text"><p>Share If You Enjoyed</p></div>
                <div className="bounce twitter-image"><img src={Twitter} alt=""/></div>
            </a>
        </div>
    );
}

export default Footer;