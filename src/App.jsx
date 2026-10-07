import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Events from './components/Events';
import Experience from './components/Experience';
import Dining from './components/Dining';
import Gallery from './components/Gallery';
import ThingsToDo from './components/ThingsToDo';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeoPage from './components/SeoPage';
import './App.css';

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Events />
      <Experience />
      <Dining />
      <Gallery />
      <ThingsToDo />
      <FAQ />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* SEO Pages */}
          <Route 
            path="/resort-near-garh-ganga" 
            element={<SeoPage 
              title="Resort Near Garh Ganga" 
              subtitle="Experience luxury and tranquility just 5 minutes away from the holy Garh Ganga." 
              description="Looking for a resort near Garh Ganga? Palm Resort offers premium AC and non-AC rooms, a beautiful swimming pool, and lush green lawns. Whether you're visiting for a spiritual retreat, family vacation, or event, our resort is the perfect destination."
              image="/images/IMG_6.png"
              isEventPage={false}
            />} 
          />
          <Route 
            path="/resort-near-garhmukteshwar" 
            element={<SeoPage 
              title="Resort Near Garhmukteshwar" 
              subtitle="The premier destination for families, couples, and groups visiting Garhmukteshwar." 
              description="Palm Resort is widely recognized as the best resort near Garhmukteshwar. Located just a short drive away, we provide a peaceful escape with our private pool, extensive dining options, and luxury accommodations."
              image="/images/IMG_4.png"
              isEventPage={false}
            />} 
          />
          <Route 
            path="/resort-near-gajraula" 
            element={<SeoPage 
              title="Resort in Gajraula" 
              subtitle="Luxury stays, corporate events, and grand weddings just 20 minutes from Gajraula." 
              description="If you are searching for a resort near Gajraula, Palm Resort is your ultimate choice. We offer exceptional hospitality, grand event venues, and relaxing pool experiences for both business and leisure travelers."
              image="/images/IMG_16.JPG"
              isEventPage={false}
            />} 
          />
          <Route 
            path="/birthday-party-venue-gajraula" 
            element={<SeoPage 
              title="Birthday Party Venue near Gajraula" 
              subtitle="Celebrate your special day with exclusive poolside parties and lush garden setups." 
              description="Make your birthday unforgettable at the best birthday party venue near Gajraula. From theme decorations to customized catering and private pool access, we handle everything to make your celebration perfect."
              image="/images/IMG_10.png"
              isEventPage={true}
            />} 
          />
          <Route 
            path="/wedding-venue-gajraula" 
            element={<SeoPage 
              title="Wedding Venue near Gajraula" 
              subtitle="Turn your dream wedding into reality at our grand event hall and spacious lawn." 
              description="Palm Resort is the most sought-after wedding venue near Gajraula and Garh Ganga. Our all-inclusive wedding packages feature stunning mandap decorations, grand entrances, dedicated event staff, and massive open spaces."
              image="/images/IMG_12.jpg"
              isEventPage={true}
            />} 
          />
          <Route 
            path="/private-pool-resort-near-garhmukteshwar" 
            element={<SeoPage 
              title="Private Pool Resort near Garhmukteshwar" 
              subtitle="Dive into exclusivity with our private pool bookings." 
              description="Seeking a private pool resort near Garhmukteshwar or Gajraula? We offer exclusive access to our private pool for couples, families, and private gatherings, ensuring complete privacy and luxury."
              image="/images/IMG_5.png"
              isEventPage={false}
            />} 
          />
          <Route 
            path="/corporate-events-gajraula" 
            element={<SeoPage 
              title="Corporate Events near Gajraula" 
              subtitle="Host productive offsites, meetings, and team-building events." 
              description="Our versatile event spaces are perfect for corporate events near Gajraula. With projector setups, customized catering, and relaxing resort amenities, your team will experience the perfect blend of work and relaxation."
              image="/images/IMG_8.png"
              isEventPage={true}
            />} 
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
