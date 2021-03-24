import './Gallery.css';
// PLAY ME WHAT YOU LOVE
import PlayMeWhatYouLove from '../images/PlayMeWhatYouLove.jpg';
import PlayMeWhatYouLoveLarge from '../images/PlayMeWhatYouLove.jpg';
// CHILDREN OF SPAIN
import ChildrenOfSpain from '../images/ChildrenOfSpain.jpg';
import ChildrenOfSpainLarge from '../images/ChildrenOfSpain.jpg';
// LIFE ITSELF
import LifeItself from '../images/LifeItself.jpg';
import LifeItselfLarge from '../images/LifeItself.jpg';

const poemList = [
    {
        key: 1,
        title: 'Play Me What You Love',
        date: '2020-03-24',
        smallSrc: PlayMeWhatYouLove,
        largeSrc: PlayMeWhatYouLoveLarge,
        poem: <p>Lessons hidden to the reader,<br/>
        Pealed in layers by the listener.<br/>
        Live a moment, pure and teaching,<br/>
        Older records gain new meaning. <br/>
        
        When you play me what you love,<br/>
        When you show me how you think,<br/>
        When you let me get in tune,<br/>
        With the melodies you sing.<br/>
        
        I see through the years of pain. <br/>
        What you live for remains. <br/>
        
        Play me what you love,<br/>
        I will know what you are.</p>

    },
    {
        key: 2,
        title: 'Children Of Spain',
        date: '2021-02-12',
        smallSrc: ChildrenOfSpain,
        largeSrc: ChildrenOfSpainLarge,
        poem: 
            <p>We are it, <br/>
            Showing itself to itself. <br/>
            Stemming from a root, <br/>
            Leaves of the cell. <br/>
            
            The tree above remains, <br/>
            A branch of the main. <br/>
            I below remain, <br/>
            A branch of the main. <br/>
            
            Dissolving to evolve, <br/>
            Changing it’s appearance. <br/>
            Still unknown, the reason, <br/>
            Why it continues to love.</p>
    },
    {
        key: 3,
        title: 'Life Itself',
        date: '2021-03-13',
        smallSrc: LifeItself,
        largeSrc: LifeItselfLarge,
        poem: 
            <p>We are it, <br/>
            Showing itself to itself. <br/>
            Stemming from a root, <br/>
            Leaves of the cell. <br/>
            
            The tree above remains, <br/>
            A branch of the main. <br/>
            I below remain, <br/>
            A branch of the main. <br/>
            
            Dissolving to evolve, <br/>
            Changing it’s appearance. <br/>
            Still unknown, the reason, <br/>
            Why it continues to love.</p>
    }
];

function Gallery () {
    return(
        <div className="gallery-container">
            <div className="gallery-list">
                { poemList.map((poem, index) => (
                    <div key={ poem.key } className="poem-container">
                        <img src={poem.smallSrc} alt="test"/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;