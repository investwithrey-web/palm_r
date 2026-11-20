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
import seoPages from './data/seoPages';
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

// Helper to render an SEO page from the data
function SeoRoute({ slug }) {
  const data = seoPages[slug];
  if (!data) return null;

  return (
    <SeoPage
      slug={data.slug}
      title={data.h1}
      subtitle={data.heroSubtitle}
      image={data.heroImage}
      description={data.introParagraphs?.[0] || ''}
      isEventPage={data.isEventPage}
      metaTitle={data.metaTitle}
      metaDescription={data.metaDescription}
      introHeading={data.introHeading}
      introParagraphs={data.introParagraphs}
      whyChooseHeading={data.whyChooseHeading}
      whyChoosePoints={data.whyChoosePoints}
      featuresHeading={data.featuresHeading}
      features={data.features}
      ctaHeading={data.ctaHeading}
      ctaText={data.ctaText}
      faqs={data.faqs}
      nearbyAttractions={data.nearbyAttractions}
      internalLinks={data.internalLinks}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ═══ WEDDING PAGES ═══ */}
          <Route path="/wedding-venue-gajraula" element={<SeoRoute slug="wedding-venue-gajraula" />} />
          <Route path="/destination-wedding-near-delhi-ncr" element={<SeoRoute slug="destination-wedding-near-delhi-ncr" />} />
          <Route path="/affordable-wedding-venue-garh-mukteshwar" element={<SeoRoute slug="affordable-wedding-venue-garh-mukteshwar" />} />
          <Route path="/marriage-hall-gajraula" element={<SeoRoute slug="marriage-hall-gajraula" />} />

          {/* ═══ HOTEL & RESORT PAGES ═══ */}
          <Route path="/resort-in-garh-mukteshwar" element={<SeoRoute slug="resort-in-garh-mukteshwar" />} />
          <Route path="/hotel-for-wedding-gajraula" element={<SeoRoute slug="hotel-for-wedding-gajraula" />} />
          <Route path="/resort-with-swimming-pool-near-delhi-ncr" element={<SeoRoute slug="resort-with-swimming-pool-near-delhi-ncr" />} />

          {/* ═══ EVENT PAGES ═══ */}
          <Route path="/birthday-party-venue-gajraula" element={<SeoRoute slug="birthday-party-venue-gajraula" />} />
          <Route path="/corporate-event-near-delhi-ncr" element={<SeoRoute slug="corporate-event-near-delhi-ncr" />} />
          <Route path="/pool-party-venue-gajraula" element={<SeoRoute slug="pool-party-venue-gajraula" />} />
          <Route path="/event-venue-near-garh-ganga" element={<SeoRoute slug="event-venue-near-garh-ganga" />} />

          {/* ═══ LEGACY SEO ROUTES (kept for backward compatibility) ═══ */}
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
            path="/best-banquet-in-gajraula"
            element={<SeoPage
              title="Best Banquet in Gajraula"
              subtitle="Grand banquet hall with open lawn and swimming pool for dream weddings and parties."
              description="Palm Resort is known as the best banquet in Gajraula and Garh Ganga. Featuring an air-conditioned banquet hall, lush party lawn, and private swimming pool, it offers an all-in-one venue with catering, decor, and luxury rooms."
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
