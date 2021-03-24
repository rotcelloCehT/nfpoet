import './App.css';
import Header from './components/Header';
import Intro from './components/Intro'
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Gallery />
      <Footer/>
    </div>
  );
}
export default App;
