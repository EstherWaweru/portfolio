import './app.scss';
import Topbar from './components/topbar/Topbar.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Intro from './components/intro/Intro.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Testmonials from './components/testimonials/Testimonials.jsx';
import Menu from './components/menu/Menu.jsx';
import { useState } from 'react';

function App() {
  // creating state variable
  const[menuOpen,setMenuOpen] = useState(false); 
  return (
    <div className="App">
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
     <Menu open = {menuOpen} setOpen = {setMenuOpen}/>
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
