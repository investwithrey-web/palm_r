import './Rooms.css';

const rooms = [
  {
    id: 1,
    title: 'Deluxe AC Room',
    type: 'AC',
    image: '/images/IMG_4.png',
    description: 'Spacious air-conditioned rooms with pool view, perfect for families seeking comfort and privacy.',
    amenities: ['Air Conditioning', 'Pool View', 'Attached Bathroom', 'TV', 'WiFi', 'Room Service'],
    badge: 'Most Popular',
  },
  {
    id: 2,
    title: 'Comfort Room',
    type: 'Non-AC',
    image: '/images/IMG_7.png',
    description: 'Well-appointed non-AC rooms with modern furnishings, ideal for budget-conscious guests without compromising quality.',
    amenities: ['Ceiling Fan', 'Attached Bathroom', 'TV', 'Natural Ventilation', 'Wardrobe'],
    badge: null,
  },
  {
    id: 3,
    title: 'Event Guest Suite',
    type: 'AC',
    image: '/images/IMG_12.jpg',
    description: 'Curated packages for wedding and event guests with special rates for group bookings and extended stays.',
    amenities: ['Air Conditioning', 'Group Package', 'Event Access', 'Attached Bathroom', 'Special Rates'],
    badge: 'Event Special',
  },
];

export default function Rooms() {
  return (
    <section className="rooms section" id="rooms">
      <div className="container">
        <div className="rooms__header text-center">
          <div className="section-tag">Accommodation</div>
          <h2 className="section-title">Rooms & <span>Stay</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Retreat into comfort with our thoughtfully designed rooms, offering a peaceful 
            sanctuary amidst the lush surroundings of Palm Resort.
          </p>
        </div>

        <div className="rooms__grid">
          {rooms.map((room, idx) => (
            <div className="room-card" key={room.id} style={{ animationDelay: `${idx * 0.12}s` }}>
              <div className="room-card__img">
                <img src={room.image} alt={room.title} loading="lazy" />
                {room.badge && (
                  <div className="room-card__badge">{room.badge}</div>
                )}
                <div className="room-card__type">{room.type}</div>
              </div>
              <div className="room-card__body">
                <h3 className="room-card__title">{room.title}</h3>
                <p className="room-card__desc">{room.description}</p>
                <div className="room-card__amenities">
                  {room.amenities.map((am) => (
                    <span key={am} className="room-card__amenity">
                      <span className="room-card__amenity-dot">✓</span>
                      {am}
                    </span>
                  ))}
                </div>
                <a
                  href="https://wa.me/919997742709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary room-card__btn"
                  id={`room-book-btn-${room.id}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Book on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="rooms__cta">
          <div className="rooms__cta-content">
            <h3>Group Booking for Weddings & Events?</h3>
            <p>We offer exclusive room packages for event guests with special rates and personalized arrangements.</p>
          </div>
          <a
            href="https://forms.gle/hu8JG3iNqpQXKxju7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            id="rooms-event-enquiry-btn"
          >
            Enquire for Group Booking
          </a>
        </div>
      </div>
    </section>
  );
}
