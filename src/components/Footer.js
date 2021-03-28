import './Footer.css'
import Twitter from '../images/twitter.svg'

function Footer () {
    return (
        <div data-aos="fade-down" data-aos-duration="1500" ata-aos-easing="ease-in-out" className="footer-container">
            <a className="twitter-link" target="_blank"  rel="noreferrer"href="https://twitter.com/nfpoet?s=20">
                <div className="twitter-text"><p>Share If You Enjoyed</p></div>
                <div className="bounce twitter-image"><img src={Twitter} alt=""/></div>
            </a>
        </div>
    );
}

export default Footer;