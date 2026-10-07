import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header text-center">
          <div className="section-tag">Get In Touch</div>
          <h2 className="section-title">We'd Love to <span>Hear</span> from You</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Whether you're planning a wedding, booking a room, or exploring event options — 
            our team is here to help.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Cards */}
          <div className="contact__cards">
            {/* WhatsApp */}
            <div className="contact-card contact-card--primary">
              <div className="contact-card__icon-wrap contact-card__icon-wrap--wa">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <h3 className="contact-card__title">Book a Room</h3>
                <p className="contact-card__desc">
                  Reach us directly on WhatsApp to check availability and book your stay instantly.
                </p>
                <a
                  href="https://wa.me/919997742709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id="contact-whatsapp-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Event Enquiry */}
            <div className="contact-card contact-card--gold">
              <div className="contact-card__icon-wrap contact-card__icon-wrap--gold">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <h3 className="contact-card__title">Event & Dining Enquiry</h3>
                <p className="contact-card__desc">
                  Planning an event or need custom catering? Fill our enquiry form and we'll get back to you within 24 hours.
                </p>
                <a
                  href="https://forms.gle/hu8JG3iNqpQXKxju7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  id="contact-form-btn"
                >
                  Fill Enquiry Form
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-card">
              <div className="contact-card__icon-wrap contact-card__icon-wrap--green">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-card__body">
                <h3 className="contact-card__title">Visit Us</h3>
                <p className="contact-card__desc">
                  Palm Resort, Near Garh Ganga,<br />
                  Uttar Pradesh — 244235, India
                </p>
                <a
                  href="https://share.google/FRxCyu2MGq6Fb6MA7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  id="contact-maps-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="contact__map">
            <div className="contact__map-wrap">
              <iframe
                title="Palm Resort Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.64!2d78.75!3d29.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGarh+Ganga%2C+UP+244235!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact__map-info">
              <div className="contact__map-info-item">
                <span>📍</span>
                <span>Near Garh Ganga, UP 244235</span>
              </div>
              <div className="contact__map-info-item">
                <span>🕐</span>
                <span>Open 24/7 for Guests</span>
              </div>
              <div className="contact__map-info-item">
                <span>🚗</span>
                <span>Ample Parking Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
