import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Images Grid */}
          <div className="about__images">
            <div className="about__img-main">
              <img src="/images/IMG_6.png" alt="Palm Resort swimming pool" loading="lazy" />
              <div className="about__img-badge">
                <span className="about__img-badge-icon">🌴</span>
                <span>Est. 2020</span>
              </div>
            </div>
            <div className="about__img-secondary">
              <img src="/images/IMG_4.png" alt="Palm Resort luxury room" loading="lazy" />
            </div>
            <div className="about__img-tertiary">
              <img src="/images/IMG_3.png" alt="Palm Resort event decoration" loading="lazy" />
            </div>
            <div className="about__floating-card">
              <div className="about__floating-icon">⭐</div>
              <div>
                <div className="about__floating-num">4.9/5</div>
                <div className="about__floating-label">Guest Rating</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="about__content">
            <div className="section-tag">About Palm Resort</div>
            <h2 className="section-title">
              A Legacy of <span>Warmth</span>,<br />
              Luxury & Celebration
            </h2>
            <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
            <p className="about__text">
              Nestled in the peaceful surroundings of Garh Ganga, Uttar Pradesh, 
              Palm Resort is more than a destination — it's an experience. Founded 
              with a vision to create a sanctuary where nature meets luxury, our 
              resort has become the preferred venue for celebrations, corporate 
              gatherings, and peaceful getaways.
            </p>
            <p className="about__text">
              From intimate family gatherings to grand weddings, we bring your 
              dreams to life with personalized attention, exquisite spaces, and 
              warm Uttar Pradesh hospitality. Every corner of Palm Resort tells 
              a story of care, elegance, and dedication.
            </p>

            {/* Founders */}
            <div className="about__founders">
              <h3 className="about__founders-title">Our Leadership</h3>
              <div className="about__founders-grid">
                <div className="about__founder">
                  <div className="about__founder-avatar">
                    <span>JKG</span>
                  </div>
                  <div>
                    <div className="about__founder-name">Jitendra Kumar Gupta</div>
                    <div className="about__founder-role">Founder & Visionary</div>
                  </div>
                </div>
                <div className="about__founder">
                  <div className="about__founder-avatar about__founder-avatar--2">
                    <span>RG</span>
                  </div>
                  <div>
                    <div className="about__founder-name">Reyansh Gupta</div>
                    <div className="about__founder-role">Co-Founder & Director</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about__actions">
              <a
                href="https://forms.gle/hu8JG3iNqpQXKxju7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="about-enquiry-btn"
              >
                Plan Your Event
              </a>
              <a
                href="https://wa.me/919997742709"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="about-book-btn"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
