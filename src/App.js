import './app.scss';
import Topbar from './components/topbar/Topbar.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Intro from './components/intro/Intro.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Testmonials from './components/testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className = "sections">
       <About/>
       <Contact/>
       <Intro/>
       <Portfolio/>
       <Projects/>
       <Skills/>
       <Testmonials/>
     </div>
    </div>
  );
}

export default App;
