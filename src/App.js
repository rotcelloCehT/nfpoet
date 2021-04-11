import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// LAZY LOADING THE VIEW (increase mobile speed)
import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

// PLAY ME WHAT YOU LOVE
import PlayMeWhatYouLove from './images/PlayMeWhatYouLove.svg';
// CHILDREN OF SPAIN
import ChildrenOfSpain from './images/ChildrenOfSpain.svg';
// LIFE ITSELF
import LifeItself from './images/LifeItself.svg';

// HEADER COMPONENT
const  Header = React.lazy(() => import('./components/Header'));
// INTRO COMPONENT
const  Intro = React.lazy(() => import('./components/Intro'));
// GALLERY COMPONENT
const  Gallery = React.lazy(() => import('./components/Gallery'));
// FOOTER COMPONENT
const  Footer = React.lazy(() => import('./components/Footer'));
// VIEW PAGE
// import View from './components/View';
const  View = React.lazy(() => import('./components/View'));


// POEM LIST
const poemList = [
  {
      key: 0,
      title: 'Play Me What You Love',
      date: '2020-03-24',
      source: PlayMeWhatYouLove,
      link: "/playmewhatyoulove",
      opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/14995722904351388118911188875872629950668797404550306159985107662425320062977",
      poem: <p>Lessons hidden to the reader,<br/>
      Peeled in layers by the listener.<br/>
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
      source: ChildrenOfSpain,
      link: "/childrenofspain",
      opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/14995722904351388118911188875872629950668797404550306159985107663524831690753",
      poem:
      <p>
      Tuesday strolling through a plaza. <br/>
      Enveloped in its light.<br/>
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
      source: LifeItself,
      link: "/lifeitself",
      opensea: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/14995722904351388118911188875872629950668797404550306159985107665723854946305",
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
          Changing its appearance. <br/>
          Still unknown, the reason, <br/>
          Why it continues to love.</p>
  }
];


function App() {
  // Animation framwork AOS
  AOS.init();
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <HelmetProvider>
      <div className="App">
      <Helmet>
        <title>nfpoet</title>
      </Helmet>
        <Switch>
          <Route exact path="/">
            <Header />
            <div data-aos="fade-down" data-aos-duration="1500" ><Intro /></div>
            <Gallery poemList={poemList}/>
            <Footer/>
          </Route>
          { poemList.map((poem, index) => (
            <Route key={poem.key} exact path={poem.link}>  
            {/* Lazy loading the view component */}
                <View poemList={poemList} index={index}/>
            </Route>
          ))} 
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>  
      </div>
      <script> if (!crossOriginIsolated) SharedArrayBuffer = ArrayBuffer </script>
      </HelmetProvider>
      </Suspense>
    </BrowserRouter>
    
  );
}
export default App;
