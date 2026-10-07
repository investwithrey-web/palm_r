import './Events.css';

const categories = [
  {
    id: 'wedding',
    icon: '💒',
    title: 'Wedding & Reception',
    description: 'Create your perfect fairytale wedding with our stunning venues, professional decor, and all-inclusive packages.',
    features: ['Grand Entrance Setup', 'Mandap Decoration', 'Stage & Backdrop', 'Photo-Booth Corner', 'Floral Arrangements'],
  },
  {
    id: 'ceremony',
    icon: '💍',
    title: 'Engagement & Ring Ceremony',
    description: 'Celebrate the beginning of a beautiful journey with intimate and grand engagement setups tailored to you.',
    features: ['Ring Exchange Setup', 'Floral Arch', 'Customized Backdrop', 'Cake Table', 'Photo-Ready Decor'],
  },
  {
    id: 'birthday',
    icon: '🎂',
    title: 'Birthday Parties',
    description: 'From children\'s parties to milestone birthdays, we create celebrations that are uniquely yours.',
    features: ['Theme Decoration', 'DJ Setup Available', 'Cake Station', 'Kids Play Area', 'Balloon Decor'],
  },
  {
    id: 'anniversary',
    icon: '💝',
    title: 'Anniversary Celebrations',
    description: 'Rekindle romance with our elegantly crafted anniversary setups and intimate dining arrangements.',
    features: ['Romantic Decor', 'Candlelight Dinner', 'Couple\'s Stage', 'Flower Wall', 'Private Setup'],
  },
  {
    id: 'haldi',
    icon: '🌼',
    title: 'Haldi & Mehendi',
    description: 'Honor tradition with vibrant, joyful Haldi and Mehendi ceremonies set in our beautiful open spaces.',
    features: ['Traditional Setup', 'Marigold Decor', 'Open Lawn', 'Traditional Seating', 'Colorful Backdrop'],
  },
  {
    id: 'sangeet',
    icon: '🎶',
    title: 'Sangeet & Cultural Events',
    description: 'Let the music flow in our spacious halls with professional sound and lighting for unforgettable performances.',
    features: ['DJ & Sound System', 'Dance Floor', 'Stage Lighting', 'LED Backdrop', 'Live Band Option'],
  },
  {
    id: 'family',
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Functions',
    description: 'Reunite, celebrate and create lasting memories in our family-friendly resort environment.',
    features: ['Garden Setup', 'Kids Activities', 'Family Seating', 'Custom Menus', 'Fun Zones'],
  },
  {
    id: 'corporate',
    icon: '💼',
    title: 'Corporate & Private Events',
    description: 'Host productive corporate events, team outings, and private parties in our versatile event spaces.',
    features: ['Conference Setup', 'Projector & AV', 'Team Activities', 'Poolside Events', 'Catering Services'],
  },
];

export default function Events() {
  return (
    <section className="events section" id="events">
      <div className="events__bg-pattern"></div>
      <div className="container">
        <div className="events__header text-center">
          <div className="section-tag">Events & Celebrations</div>
          <h2 className="section-title">Every Occasion, <span>Perfectly</span> Curated</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From intimate gatherings to grand celebrations — our expert team handles every detail 
            so you can focus on making memories.
          </p>
        </div>

        {/* Static Featured Image */}
        <div className="events__featured">
          <div className="events__featured-img">
            <img src="/images/IMG_12.jpg" alt="Palm Resort Event Hall" />
            <div className="events__featured-overlay">
              <div className="events__featured-icon">🎉</div>
            </div>
          </div>
          <div className="events__featured-info">
            <div className="section-tag">🏛️ Our Event Venue</div>
            <h3 className="events__featured-title">Grand Event Hall & Lawn</h3>
            <p className="events__featured-desc">
              Our elegantly designed event hall and expansive lawn make the perfect backdrop 
              for weddings, receptions, and all special occasions. With customizable décor, 
              professional lighting, and dedicated support — every event is executed to perfection.
            </p>
            <ul className="events__featured-features">
              {['Grand Entrance Setup', 'Mandap Decoration', 'Stage & Backdrop', 'Customized Seating', 'Professional Lighting', 'Dedicated Event Team'].map((f) => (
                <li key={f}>
                  <span className="events__check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://forms.gle/hu8JG3iNqpQXKxju7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="event-enquiry-btn-main"
            >
              Enquire for Your Event
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Event Types Grid — static display only */}
        <div className="events__grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="event-tile"
              id={`event-tile-${cat.id}`}
            >
              <span className="event-tile__icon">{cat.icon}</span>
              <span className="event-tile__title">{cat.title}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="events__bottom-cta text-center">
          <p>Ready to plan your perfect event? Fill out our enquiry form and our team will reach out within 24 hours.</p>
          <a
            href="https://forms.gle/hu8JG3iNqpQXKxju7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            id="events-main-enquiry-btn"
          >
            Submit Event Enquiry Form
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
