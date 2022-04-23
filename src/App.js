import './App.css';
import { Router, Link } from '@reach/router';
import Homepage from './views/homepage';
import Projects from './views/projects'
import Contact from './views/contact'
import Resume from './views/resume'
import useLocalStorage from "use-local-storage-state"
import NavBar from "./components/general/navbar"



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light"
      setTheme(newTheme) 
      console.log(newTheme)
  }

  return (
    <>
    <NavBar theme={theme} switchTheme={switchTheme}/>
    <div id="container" data-theme={theme}>
      <Router>
        <Homepage path="/"/> 
        <Projects path="/projects"/>
        <Resume path="/resume"/>
        <Contact path="/contact"/>
      </Router>
    </div>
    </>
  );
}

export default App;
