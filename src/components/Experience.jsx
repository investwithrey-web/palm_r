import './Experience.css';

const experiences = [
  {
    icon: '🏊',
    title: 'Swimming Pool',
    description: 'Dive into our stunning main swimming pool — perfect for relaxation and fun for the entire family.',
    image: '/images/IMG_6.png',
    cta: 'Main Pool',
  },
  {
    icon: '🛁',
    title: 'Private Pool',
    description: 'Enjoy exclusive access to our private pool — ideal for romantic getaways, intimate celebrations, or private parties.',
    image: '/images/IMG_5.png',
    cta: 'Private Pool',
  },
  {
    icon: '🌿',
    title: 'Lush Garden',
    description: 'Stroll through our beautifully manicured garden and lawns, perfect for morning walks and outdoor photography.',
    image: '/images/IMG_16.JPG',
    cta: 'Gardens',
  },
  {
    icon: '🏟️',
    title: 'Spacious Lawn',
    description: 'Our vast open lawn accommodates large gatherings, outdoor events, and provides ample space for all celebrations.',
    image: '/images/IMG_22.png',
    cta: 'Open Lawn',
  },
];

const eventSpaces = [
  {
    icon: '🌳',
    title: 'Spacious Lawn',
    desc: 'Grand open lawn for weddings, events and outdoor celebrations',
  },
  {
    icon: '🏛️',
    title: 'Event / Function Hall',
    desc: 'Elegant indoor hall with customizable setup and professional décor',
  },
  {
    icon: '🏊',
    title: 'Poolside Venue',
    desc: 'Exclusive poolside celebrations with stunning backdrop',
  },
  {
    icon: '🚗',
    title: 'Ample Parking',
    desc: 'Large dedicated parking space for all guests and vehicles',
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        {/* Header */}
        <div className="experience__header text-center">
          <div className="section-tag">Resort Experience</div>
          <h2 className="section-title">Live the <span>Palm Resort</span> Life</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From splashing in our pools to unwinding in lush gardens — every moment at Palm Resort 
            is designed to refresh your spirit.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience__grid">
          {experiences.map((exp, idx) => (
            <div className="exp-card" key={exp.title} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="exp-card__img">
                <img src={exp.image} alt={exp.title} loading="lazy" />
                <div className="exp-card__overlay">
                  <span className="exp-card__icon">{exp.icon}</span>
                </div>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">{exp.title}</h3>
                <p className="exp-card__desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event Spaces */}
        <div className="event-spaces">
          <div className="event-spaces__header">
            <div className="section-tag">Our Venues</div>
            <h3 className="event-spaces__title">Event <span>Spaces</span></h3>
          </div>
          <div className="event-spaces__grid">
            {eventSpaces.map((space) => (
              <div key={space.title} className="space-card">
                <div className="space-card__icon">{space.icon}</div>
                <h4 className="space-card__title">{space.title}</h4>
                <p className="space-card__desc">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width image banner */}
        <div className="experience__banner">
          <img src="/images/img_overall.png" alt="Palm Resort aerial night view" loading="lazy" />
          <div className="experience__banner-overlay">
            <h3>Experience Palm Resort from Above</h3>
            <p>A stunning aerial view of our fully lit resort during a grand celebration night</p>
            <a
              href="https://forms.gle/hu8JG3iNqpQXKxju7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              id="experience-enquiry-btn"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
