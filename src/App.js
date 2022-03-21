import './App.css';
import { Introduction } from './components/introduction' 
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { ContactForm } from './components/contactForm'

function App() {
  return (
    <div className="App">
      <Introduction />
      <Projects />
      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
