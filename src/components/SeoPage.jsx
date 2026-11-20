import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThingsToDo from './ThingsToDo';
import Contact from './Contact';
import Rooms from './Rooms';
import Events from './Events';
import Gallery from './Gallery';
import './SeoPage.css';

function SeoFAQ({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="seo-faq section">
      <div className="container">
        <div className="seo-faq__header text-center">
          <div className="section-tag">Common Questions</div>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
        </div>
        <div className="seo-faq__list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`seo-faq__item ${openIdx === idx ? 'active' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div className="seo-faq__question">
                <h3>{faq.q}</h3>
                <span className="seo-faq__toggle">{openIdx === idx ? '−' : '+'}</span>
              </div>
              <div className="seo-faq__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SeoPage({
  title,
  subtitle,
  image,
  description,
  isEventPage,
  // Enhanced SEO props
  metaTitle,
  metaDescription,
  introHeading,
  introParagraphs,
  whyChooseHeading,
  whyChoosePoints,
  featuresHeading,
  features,
  ctaHeading,
  ctaText,
  faqs,
  nearbyAttractions,
  internalLinks,
  slug,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = metaTitle || `${title} | Palm Resort`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDescription) {
      metaDesc.setAttribute('content', metaDescription);
    }

    // Add/update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://thepalmresort.in/${slug || ''}`);

    // Add FAQ structured data
    if (faqs && faqs.length > 0) {
      let faqScript = document.getElementById('seo-faq-schema');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'seo-faq-schema';
        faqScript.type = 'application/ld+json';
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      });
    }

    // Add LocalBusiness schema
    let bizScript = document.getElementById('seo-biz-schema');
    if (!bizScript) {
      bizScript = document.createElement('script');
      bizScript.id = 'seo-biz-schema';
      bizScript.type = 'application/ld+json';
      document.head.appendChild(bizScript);
    }
    bizScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Resort",
      "name": "Palm Resort",
      "description": metaDescription || description,
      "url": `https://thepalmresort.in/${slug || ''}`,
      "telephone": "+91-9997742709",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Garh Ganga, Garhmukteshwar",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "244235",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.7865",
        "longitude": "78.1385"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Swimming Pool" },
        { "@type": "LocationFeatureSpecification", "name": "Event Hall" },
        { "@type": "LocationFeatureSpecification", "name": "Open Lawn" },
        { "@type": "LocationFeatureSpecification", "name": "Restaurant" },
        { "@type": "LocationFeatureSpecification", "name": "AC Rooms" },
        { "@type": "LocationFeatureSpecification", "name": "Parking" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "reviewCount": "120"
      }
    });

    return () => {
      // Cleanup schemas on unmount
      const faqS = document.getElementById('seo-faq-schema');
      const bizS = document.getElementById('seo-biz-schema');
      const can = document.querySelector('link[rel="canonical"]');
      if (faqS) faqS.remove();
      if (bizS) bizS.remove();
      if (can) can.remove();
    };
  }, [title, metaTitle, metaDescription, slug, faqs, description]);

  return (
    <div className="seo-page">
      {/* Hero Header */}
      <section className="seo-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)), url(${image})` }}>
        <div className="container text-center">
          <h1 className="seo-hero__title">{title}</h1>
          <p className="seo-hero__subtitle">{subtitle}</p>
          <div className="seo-hero__actions">
            <a href="https://wa.me/919997742709" className="btn btn-primary" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Book on WhatsApp
            </a>
            <a href="https://share.google/FRxCyu2MGq6Fb6MA7" className="btn btn-outline-white" target="_blank" rel="noreferrer">
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      <main>
        {/* Breadcrumb */}
        <nav className="seo-breadcrumb" aria-label="Breadcrumb">
          <div className="container">
            <Link to="/">Home</Link>
            <span className="seo-breadcrumb__sep">›</span>
            <span>{title}</span>
          </div>
        </nav>

        {/* Intro Section */}
        <section className="seo-intro section">
          <div className="container">
            <div className="seo-intro__content text-center">
              <h2 className="section-title">{introHeading || <>Welcome to <span>Palm Resort</span></>}</h2>
              <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
              {introParagraphs && introParagraphs.length > 0 ? (
                introParagraphs.map((p, i) => (
                  <p key={i} className="seo-intro__desc">{p}</p>
                ))
              ) : (
                <p className="seo-intro__desc">{description}</p>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        {whyChoosePoints && whyChoosePoints.length > 0 && (
          <section className="seo-why section bg-cream">
            <div className="container">
              <div className="text-center">
                <div className="section-tag">Why Palm Resort</div>
                <h2 className="section-title">{whyChooseHeading || <>Why Choose <span>Palm Resort</span>?</>}</h2>
              </div>
              <div className="seo-why__grid">
                {whyChoosePoints.map((point, i) => (
                  <div key={i} className="seo-why__card">
                    <span className="seo-why__icon">{point.icon}</span>
                    <h3 className="seo-why__title">{point.title}</h3>
                    <p className="seo-why__text">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Conditionally show Rooms or Events */}
        {isEventPage ? <Events /> : <Rooms />}

        {/* Features List */}
        {features && features.length > 0 && (
          <section className="seo-features section">
            <div className="container">
              <div className="seo-features__inner">
                <div className="seo-features__content">
                  <div className="section-tag">What We Offer</div>
                  <h2 className="section-title">{featuresHeading || <>Our <span>Amenities</span> & Services</>}</h2>
                  <ul className="seo-features__list">
                    {features.map((f, i) => (
                      <li key={i}>
                        <span className="seo-features__check">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="seo-features__image">
                  <img src="/images/IMG_6.png" alt="Palm Resort swimming pool and amenities" loading="lazy" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Nearby Attractions */}
        {nearbyAttractions && nearbyAttractions.length > 0 && (
          <section className="seo-nearby section bg-cream">
            <div className="container">
              <div className="text-center">
                <div className="section-tag">Location & Connectivity</div>
                <h2 className="section-title">Nearby <span>Attractions</span></h2>
              </div>
              <div className="seo-nearby__grid">
                {nearbyAttractions.map((place, i) => (
                  <div key={i} className="seo-nearby__card">
                    <div className="seo-nearby__distance">{place.distance}</div>
                    <h3 className="seo-nearby__name">{place.name}</h3>
                    <p className="seo-nearby__desc">{place.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="seo-cta section">
          <div className="container">
            <div className="seo-cta__banner">
              <h2 className="seo-cta__heading">{ctaHeading || 'Ready to Book?'}</h2>
              <p className="seo-cta__text">{ctaText || 'Get in touch with us today to plan your perfect experience at Palm Resort.'}</p>
              <div className="seo-cta__actions">
                <a href="https://wa.me/919997742709" className="btn btn-primary" target="_blank" rel="noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  WhatsApp Us Now
                </a>
                <a
                  href="https://forms.gle/hu8JG3iNqpQXKxju7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Submit Enquiry Form
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Page-specific FAQs */}
        {faqs && faqs.length > 0 && <SeoFAQ faqs={faqs} />}

        {/* Gallery */}
        <Gallery />

        {/* Internal Links */}
        {internalLinks && internalLinks.length > 0 && (
          <section className="seo-internal section bg-cream">
            <div className="container text-center">
              <div className="section-tag">Explore More</div>
              <h2 className="section-title">Discover <span>More</span> at Palm Resort</h2>
              <div className="seo-internal__grid">
                {internalLinks.map((link, i) => (
                  <Link key={i} to={link.href} className="seo-internal__link">
                    <span className="seo-internal__arrow">→</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Things To Do & Contact */}
        <ThingsToDo />
        <Contact />
      </main>
    </div>
  );
}
