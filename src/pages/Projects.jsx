import columbusBakery from '../assets/projects/columbus-bakery.jpg'
import crepesWaffles from '../assets/projects/crepes-waffles.jpg'
import warehouseDb from '../assets/projects/warehouse-db.jpg'

const projects = [
  {
    title: 'Website Repair Project',
    description:
      'Collaborated with a peer to diagnose and fix layout issues and broken links, focusing on user-centered design while independently building the functional menu, ordering, and checkout pages.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    image: columbusBakery,
    link: 'https://kcastiblancorojas.github.io/columbus_bakery/home.html',
    linkLabel: 'View live site',
  },
  {
    title: 'Crepes and Waffles Website',
    description:
      'Designed and developed a fully responsive restaurant web application as a semester final project, applying modern layout techniques and interactive features inspired by a real-world establishment.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    image: crepesWaffles,
    link: 'https://kcastiblancorojas.github.io/Creps_and_wafles/index.html',
    linkLabel: 'View live site',
  },
  {
    title: 'Warehouse Inventory Database System',
    description:
      'Engineered a comprehensive relational database system in Oracle SQL to track warehouse inventory, suppliers, and shipments, translating business rules into normalized schemas through Third Normal Form (3NF) to eliminate data redundancy.',
    tags: ['Oracle SQL', 'ERD', '3NF'],
    image: warehouseDb,
    link: 'https://github.com/kcastiblancorojas/warehouse-inventory-database/blob/main/README.md',
    linkLabel: 'View on GitHub',
  },
]

export default function Projects() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <img className="card-image" src={p.image} alt={`${p.title} screenshot`} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a href={p.link} className="card-link" target="_blank" rel="noreferrer">
              {p.linkLabel} →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
