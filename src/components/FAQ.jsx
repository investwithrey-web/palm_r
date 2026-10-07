import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Is there a resort near Garh Ganga?',
    a: 'Yes, Palm Resort is located just a 5-minute drive from Garh Ganga. It is the perfect peaceful retreat for families and groups visiting the holy river.'
  },
  {
    q: 'Which resort is near Garhmukteshwar?',
    a: 'Palm Resort is one of the premium resorts near Garhmukteshwar (approx 15 mins away), offering luxury rooms, swimming pools, and grand event spaces.'
  },
  {
    q: 'Does Palm Resort have a private pool?',
    a: 'Yes! We offer both a large main swimming pool and an exclusive private pool area that can be reserved for couples, families, or private parties.'
  },
  {
    q: 'Is Palm Resort suitable for birthday parties?',
    a: 'Absolutely. We are a popular birthday party venue near Gajraula and Garh Ganga, offering customized decoration, catering, and access to our pool and lawns.'
  },
  {
    q: 'Can I book Palm Resort for a wedding?',
    a: 'Yes, Palm Resort is a premier wedding venue near Gajraula and Brijghat. We feature a spacious event hall, a grand open lawn, and curated wedding packages including décor and catering.'
  },
  {
    q: 'Does the resort have parking?',
    a: 'Yes, we provide ample, secure on-site parking for all our guests and event attendees.'
  },
  {
    q: 'Does Palm Resort have a restaurant?',
    a: 'Yes, our on-site restaurant serves a delicious multi-cuisine menu with a focus on fresh ingredients and local flavors, available for both room service and dining in.'
  },
  {
    q: 'How far is Palm Resort from Gajraula?',
    a: 'We are conveniently located just 20 minutes from Gajraula city center, making it an ideal weekend getaway or corporate event venue.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq__header text-center">
          <div className="section-tag">Common Questions</div>
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about your stay, events, and facilities at Palm Resort.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq__item ${openIdx === idx ? 'active' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div className="faq__question">
                <h3>{faq.q}</h3>
                <span className="faq__toggle">{openIdx === idx ? '−' : '+'}</span>
              </div>
              <div className="faq__answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
