import './App.css';
import {useEffect} from 'react';
import AOS from 'aos';
import About from './components/About';
import Skills from './components/Skills';
import Honors from './components/Honors';
import Cert from './components/Cert';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'aos/dist/aos.css';

function App(){
  useEffect(()=>{
    document.title = 'Ratin Zaman';
    AOS.init({
      once: false,
    });
  }, []);
  return(
    <div className='px-6 lg:px-20  xl:px-36 bg-dark-500'>
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Honors />
      <Cert />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;