import './App.css';
import { Introduction } from './components/introduction' 
import { AboutMe } from './components/aboutMe'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { ContactForm } from './components/contactForm'
import { Before } from './components/before'
import { Nav } from './components/nav'
import { useEffect, useState } from 'react';
import { ContentContext } from './context/context'

function App() {

  const [animate, setAnimate] = useState(true);

  const { loadingState } = ContentContext();

  useEffect(() => {

    setTimeout(() => {
      setAnimate(false);
    }, 4000)
  }, [])

  return (
    <div className="App">
      {((loadingState===false) && (animate===false))?
      <div className="pageMain">
        <Nav />
        <Introduction />
        <AboutMe />
        <Projects />
        <ContactForm />
        <Contact />
      </div>
      :
      <Before />
      }
    </div>
  );
}

export default App;
