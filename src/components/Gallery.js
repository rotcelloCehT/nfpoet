import './Gallery.css';
import { Link } from 'react-router-dom';

function Gallery ( {poemList} ) {
    return(
        <div className="gallery-container">
            <div className="gallery-list">
                { poemList.map((poem, index) => (
                    <div key={ poem.key } className="poem-container" data-aos="fade-in" data-aos-duration="3000">
                        <Link to={poem.link}><img src={poem.source} alt={poem.title} width="100px" height="100px" /></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;