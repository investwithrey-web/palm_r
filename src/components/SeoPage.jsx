import { useEffect } from 'react';
import FAQ from './FAQ';
import ThingsToDo from './ThingsToDo';
import Contact from './Contact';
import Rooms from './Rooms';
import Events from './Events';
import './SeoPage.css';

export default function SeoPage({ title, subtitle, image, description, isEventPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} | Palm Resort`;
  }, [title]);

  return (
    <div className="seo-page">
      {/* SEO Hero Header */}
      <div className="seo-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${image})` }}>
        <div className="container text-center">
          <h1 className="seo-hero__title">{title}</h1>
          <p className="seo-hero__subtitle">{subtitle}</p>
          <div className="seo-hero__actions">
            <a href="https://wa.me/919997742709" className="btn btn-primary" target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
            <a href="https://share.google/FRxCyu2MGq6Fb6MA7" className="btn btn-outline-white" target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <main>
        {/* SEO Intro Text */}
        <section className="seo-intro section">
          <div className="container text-center">
            <h2 className="section-title">Welcome to <span>Palm Resort</span></h2>
            <p className="seo-intro__desc">{description}</p>
          </div>
        </section>

        {/* Conditionally show Rooms or Events based on the page focus */}
        {isEventPage ? <Events /> : <Rooms />}

        {/* Reused SEO Sections */}
        <ThingsToDo />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
