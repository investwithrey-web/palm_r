import './ThingsToDo.css';

const attractions = [
  {
    title: 'Garh Ganga',
    desc: 'The holy river Ganges is just a few minutes away. Experience the spiritual ambiance and serene sunrise at the riverbank.',
    icon: '🌊',
  },
  {
    title: 'Garhmukteshwar',
    desc: 'An ancient town with deep historical roots, featuring numerous old temples and local markets to explore.',
    icon: '🏛️',
  },
  {
    title: 'Brijghat',
    desc: 'A famous pilgrimage site known for its beautiful ghats. Just a short drive from our resort.',
    icon: '🙏',
  },
  {
    title: 'Ganga Aarti',
    desc: 'Witness the mesmerizing evening Ganga Aarti, a spiritual ritual that attracts visitors from all over.',
    icon: '🪔',
  },
  {
    title: 'Local Temples',
    desc: 'Visit the revered Mukteshwar Mahadev Temple, Vedant Mandir, and other historic spiritual sites nearby.',
    icon: '⛩️',
  },
  {
    title: 'Shopping & Dining',
    desc: "Just minutes away on the highway, you will find major factory outlets like Nike and Adidas, along with popular food chains including McDonald's and Burger King.",
    icon: '🍔',
  },
];

export default function ThingsToDo() {
  return (
    <section className="things-to-do section" id="attractions">
      <div className="container">
        <div className="things-to-do__header text-center">
          <div className="section-tag">Explore The Area</div>
          <h2 className="section-title">Things to do near <span>Palm Resort</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Perfectly situated near Garh Ganga, Garhmukteshwar, and Gajraula. Make the most of your stay by exploring these local attractions.
          </p>
        </div>

        <div className="things-to-do__grid">
          {attractions.map((item, idx) => (
            <div className="attraction-card" key={idx}>
              <div className="attraction-card__icon">{item.icon}</div>
              <h3 className="attraction-card__title">{item.title}</h3>
              <p className="attraction-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
