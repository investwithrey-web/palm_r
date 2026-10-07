import { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 1, src: '/images/img_overall.png', alt: 'Palm Resort Aerial Night View', category: 'resort', span: 'large' },
  { id: 2, src: '/images/IMG_3.png', alt: 'Wedding Decoration Entrance', category: 'events' },
  { id: 3, src: '/images/IMG_6.png', alt: 'Swimming Pool Daytime', category: 'pool' },
  { id: 4, src: '/images/IMG_4.png', alt: 'Luxury Room with Pool View', category: 'rooms' },
  { id: 5, src: '/images/IMG_5.png', alt: 'Pool Nighttime View', category: 'pool' },
  { id: 6, src: '/images/IMG_7.png', alt: 'Comfort Room Interior', category: 'rooms' },
  { id: 7, src: '/images/IMG_8.png', alt: 'Resort Lawn Area', category: 'resort', span: 'wide' },
  { id: 8, src: '/images/IMG_9.png', alt: 'Garden Area', category: 'resort' },
  { id: 9, src: '/images/IMG_10.png', alt: 'Event Setup', category: 'events' },
  { id: 10, src: '/images/IMG_13.png', alt: 'Wedding Ceremony', category: 'events' },
  { id: 11, src: '/images/IMG_19.png', alt: 'Sangeet Night', category: 'events' },
  { id: 12, src: '/images/IMG_21.png', alt: 'Celebration Decoration', category: 'events' },
  { id: 13, src: '/images/IMG_22.png', alt: 'Event Lighting', category: 'events' },
  { id: 14, src: '/images/IMG_15.JPG', alt: 'Resort Grounds', category: 'resort' },
  { id: 15, src: '/images/IMG_16.JPG', alt: 'Special Occasion', category: 'events' },
  { id: 16, src: '/images/IMG_17.JPG', alt: 'Resort Features', category: 'resort' },
  { id: 17, src: '/images/Img_2.png', alt: 'Resort Overview', category: 'resort', span: 'tall' },
  { id: 18, src: '/images/img_11.png', alt: 'Celebration Night', category: 'events' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'events', label: 'Events' },
  { id: 'pool', label: 'Pool' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'resort', label: 'Resort' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter);

  const openLightbox = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    const idx = filtered.findIndex((g) => g.id === lightbox.id);
    const newIdx = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="gallery__header text-center">
          <div className="section-tag">Photo Gallery</div>
          <h2 className="section-title">Moments <span>Captured</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into the world of Palm Resort — from grand celebrations to serene escapes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery__filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`gallery__filter ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
              id={`gallery-filter-${f.id}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gallery__grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`gallery__item ${item.span ? `gallery__item--${item.span}` : ''}`}
              onClick={() => openLightbox(item)}
              id={`gallery-item-${item.id}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <div className="gallery__item-zoom">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
                <p className="gallery__item-caption">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox} id="gallery-lightbox">
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={() => navigate(-1)} aria-label="Previous">‹</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <button className="lightbox__nav lightbox__nav--next" onClick={() => navigate(1)} aria-label="Next">›</button>
            <p className="lightbox__caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
