import './Gallery.css';
import { Link } from 'react-router-dom';

function Gallery (props) {
    console.log(props.props)
    return(
        <div className="gallery-container">
            <div className="gallery-list">
                { props.props.map((poem, index) => (
                    <div key={ poem.key } className="poem-container" data-aos="fade-in" data-aos-duration="3000">
                        <img src={poem.smallSrc} alt="test"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;