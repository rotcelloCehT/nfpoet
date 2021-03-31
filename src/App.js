import './App.css';
import Header from './components/Header';
import Intro from './components/Intro'
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import View from './components/View';


import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// PLAY ME WHAT YOU LOVE
import PlayMeWhatYouLove from './images/PlayMeWhatYouLove.jpg';
import PlayMeWhatYouLoveLarge from './images/PlayMeWhatYouLove.jpg';
// CHILDREN OF SPAIN
import ChildrenOfSpain from './images/ChildrenOfSpain.jpg';
import ChildrenOfSpainLarge from './images/ChildrenOfSpain.jpg';
// LIFE ITSELF
import LifeItself from './images/LifeItself.jpg';
import LifeItselfLarge from './images/LifeItself.jpg';


// POEM LIST
const poemList = [
  {
      key: 0,
      title: 'Play Me What You Love',
      date: '2020-03-24',
      smallSrc: PlayMeWhatYouLove,
      largeSrc: PlayMeWhatYouLoveLarge,
      poem: <p>Lessons hidden to the reader,<br/>
      Pealed in layers by the listener.<br/>
      Live a moment, pure and teaching,<br/>
      Older records gain new meaning.<br/><br/>
      
      When you play me what you love,<br/>
      When you show me how you think,<br/>
      When you let me get in tune,<br/>
      With the melodies you sing.<br/><br/>
      
      I see through the years of pain. <br/>
      What you live for remains. <br/><br/>
      
      Play me what you love,<br/>
      I will know what you are.</p>

  },
  {
      key: 1,
      title: 'Children Of Spain',
      date: '2021-02-12',
      smallSrc: ChildrenOfSpain,
      largeSrc: ChildrenOfSpainLarge,
      poem:
      <p>
      Tuesday strolling through a plaza. <br/>
      Enveloped in it’s light.<br/>
      Sit for a meal, <br/>
      To gaze around the night.<br/><br/>
      
      I lay in lassitude,<br/>
      Like a moon in placid skies.<br/>
      Yet warm air from morning,<br/>
      left streets bellow revived.<br/><br/>
      
      The crowd reveals a playground,<br/>
      Around which play the children.<br/>
      Of parents and their friends,<br/>
      Drinking close conversing. <br/><br/>
      
      I knew it when I saw one,<br/>
      Run back to loving smiles.<br/>
      I need not give up living,<br/>
      When time comes for a child.<br/><br/>
      
      They played along till Wednesday,<br/>
      The parents mingled on. <br/>
      At end of night united,<br/>
      For each had lived their song.
      </p>
  },
  {
      key: 2,
      title: 'Life Itself',
      date: '2021-03-13',
      smallSrc: LifeItself,
      largeSrc: LifeItselfLarge,
      poem: 
          <p>We are it, <br/>
          Showing itself to itself. <br/>
          Stemming from a root, <br/>
          Leaves of the cell. <br/><br/>
          
          The tree above remains, <br/>
          A branch of the main. <br/>
          I below remain, <br/>
          A branch of the main. <br/><br/>
          
          Dissolving to evolve, <br/>
          Changing it’s appearance. <br/>
          Still unknown, the reason, <br/>
          Why it continues to love.</p>
  }
];



var key = 1;
function App() {
  AOS.init();
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <div data-aos="fade-down" data-aos-duration="1500" ><Intro /></div>
            <Gallery props={poemList}/>
            <Footer/>
          </Route>
          <Route exact path="/view">   
            <View props={poemList} key={key}/>
          </Route>
        </Switch>

        
      </div>
    </BrowserRouter>
    
  );
}
export default App;
