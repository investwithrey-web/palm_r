import './Dining.css';

const menuHighlights = [
  { icon: '🍛', name: 'Traditional Indian Cuisine', desc: 'Authentic flavors of UP and North India' },
  { icon: '🍰', name: 'Celebration Cakes & Desserts', desc: 'Custom cakes for every occasion' },
  { icon: '🥗', name: 'Fresh Salads & Starters', desc: 'Light, fresh appetizers & accompaniments' },
  { icon: '🍹', name: 'Welcome Drinks & Mocktails', desc: 'Refreshing beverages for all ages' },
  { icon: '🍲', name: 'Custom Event Menus', desc: 'Tailored menus for every celebration' },
  { icon: '☕', name: 'Café & Snacks', desc: 'All-day café service for guests' },
];

export default function Dining() {
  return (
    <section className="dining section" id="dining">
      <div className="container">
        <div className="dining__grid">
          {/* Images */}
          <div className="dining__images">
            <div className="dining__img-main">
              <img src="/images/IMG_20.JPG" alt="Dining at Palm Resort" loading="lazy" />
            </div>
            <div className="dining__img-side">
              <img src="/images/IMG_14.JPG" alt="Food arrangements" loading="lazy" />
            </div>
            <div className="dining__badge">
              <span>🍽️</span>
              <div>
                <div className="dining__badge-title">Custom Menus</div>
                <div className="dining__badge-sub">For Every Occasion</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="dining__content">
            <div className="section-tag">Food & Dining</div>
            <h2 className="section-title">A Culinary <span>Journey</span><br />to Remember</h2>
            <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
            <p className="dining__text">
              At Palm Resort, dining is not just a meal — it's an experience. Our 
              restaurant and café serve authentic North Indian cuisine with a touch 
              of modern flair. For events, our expert culinary team crafts customized 
              menus tailored to your occasion and guest preferences.
            </p>

            <div className="dining__menu-grid">
              {menuHighlights.map((item) => (
                <div key={item.name} className="dining__menu-item">
                  <span className="dining__menu-icon">{item.icon}</span>
                  <div>
                    <div className="dining__menu-name">{item.name}</div>
                    <div className="dining__menu-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dining__cta">
              <a
                href="https://forms.gle/hu8JG3iNqpQXKxju7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="dining-enquiry-btn"
              >
                Enquire About Catering
              </a>
              <a
                href="https://wa.me/919997742709"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="dining-whatsapp-btn"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
