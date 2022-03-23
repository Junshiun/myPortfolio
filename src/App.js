import './App.css';
import { Introduction } from './components/introduction' 
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { ContactForm } from './components/contactForm'
import { Before } from './components/before'
import { Nav } from './components/nav'
import { useEffect, useState } from 'react';

function App() {

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 4000)
  }, [])

  return (
    <div className="App">
      {animate?
      <Before />
      :
      <div className="pageMain">
      <Nav />
      <Introduction />
      <Projects />
      <ContactForm />
      <Contact />
      </div>
      }
    </div>
  );
}

export default App;
