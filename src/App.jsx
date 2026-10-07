import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Events from './components/Events';
import Experience from './components/Experience';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Events />
        <Experience />
        <Dining />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
