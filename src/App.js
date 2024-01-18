import './App.css';
import About from './components/About/About.jsx';
import Main from './components/Main/Main.jsx';
import Programs from './components/Programs/Programs.jsx';
import Movie from './components/Movie/Movie.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Team from './components/Team/Team.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div className="App">
    <Main/>
    <About/>
    <Programs/>
    <Movie/>
    <Gallery/>
    <Pricing/>
    <Team/>
    <Feedback/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
