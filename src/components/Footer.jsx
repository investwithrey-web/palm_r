import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-text">Palm Resort</span>
              </div>
              <p className="footer__tagline">
                Where Every Moment Becomes a Memory
              </p>
              <p className="footer__address">
                Near Garh Ganga, Uttar Pradesh<br />
                PIN: 244235, India
              </p>
              <div className="footer__social">
                <a href="https://wa.me/919997742709" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp" id="footer-whatsapp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="https://forms.gle/hu8JG3iNqpQXKxju7" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Enquiry Form" id="footer-form">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </a>
                <a href="https://share.google/FRxCyu2MGq6Fb6MA7" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Google Maps" id="footer-maps">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {[
                  ['Home', '/'],
                  ['About Us', '/#about'],
                  ['Rooms', '/#rooms'],
                  ['Events', '/#events'],
                  ['Gallery', '/#gallery'],
                  ['Contact', '/#contact'],
                ].map(([label, path]) => (
                  <li key={path}>
                    <a href={path} className="footer__link" id={`footer-link-${label}`}>
                      <span>›</span> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events */}
            <div className="footer__col">
              <h4 className="footer__col-title">Events We Host</h4>
              <ul className="footer__links">
                {[
                  'Wedding & Reception',
                  'Engagement Ceremony',
                  'Birthday Parties',
                  'Anniversary',
                  'Haldi & Mehendi',
                  'Sangeet Night',
                  'Family Functions',
                  'Corporate Events',
                ].map((item) => (
                  <li key={item}>
                    <span className="footer__list-item">
                      <span>›</span> {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations & Venues */}
            <div className="footer__col">
              <h4 className="footer__col-title">Locations</h4>
              <ul className="footer__links">
                <li><a href="/resort-near-garh-ganga" className="footer__link"><span>›</span> Resort near Garh Ganga</a></li>
                <li><a href="/resort-near-garhmukteshwar" className="footer__link"><span>›</span> Resort near Garhmukteshwar</a></li>
                <li><a href="/resort-near-gajraula" className="footer__link"><span>›</span> Resort in Gajraula</a></li>
                <li><a href="/birthday-party-venue-gajraula" className="footer__link"><span>›</span> Birthday Party Venue</a></li>
                <li><a href="/wedding-venue-gajraula" className="footer__link"><span>›</span> Wedding Venue Gajraula</a></li>
                <li><a href="/private-pool-resort-near-garhmukteshwar" className="footer__link"><span>›</span> Private Pool Resort</a></li>
                <li><a href="/corporate-events-gajraula" className="footer__link"><span>›</span> Corporate Events</a></li>
              </ul>
            </div>

            {/* Contact & Book */}
            <div className="footer__col">
              <h4 className="footer__col-title">Book & Connect</h4>
              <div className="footer__ctas">
                <a
                  href="https://wa.me/919997742709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__cta-btn footer__cta-btn--wa"
                  id="footer-book-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book Room on WhatsApp
                </a>
                <a
                  href="https://forms.gle/hu8JG3iNqpQXKxju7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__cta-btn footer__cta-btn--gold"
                  id="footer-enquiry-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                  </svg>
                  Event Enquiry Form
                </a>
              </div>
              <div className="footer__info">
                <div className="footer__info-item">
                  <span>Near Garh Ganga, UP 244235</span>
                </div>
                <div className="footer__info-item">
                  <span>Open 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p>© {year} Palm Resort, Garh Ganga. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919997742709"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <div className="floating-wa__pulse"></div>
      </a>
    </footer>
  );
}
