// Each service has a simple line icon (inline SVG paths, 24x24 viewBox)
const services = [
  {
    title: 'Websites for small businesses',
    description:
      "Got a bakery, a café or a small shop that needs a home online? I'll build you a clean site that looks good on phones and laptops, with your menu, your story and an easy way for people to order or reach you.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 21h8M12 18v3" />
      </>
    ),
  },
  {
    title: 'Fixing and refreshing existing sites',
    description:
      "If your site has broken links, pages that fall apart on mobile, or a layout that just feels off, I can track down what's wrong, fix it, and leave it easier for your visitors to use.",
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />
    ),
  },
  {
    title: 'Database design',
    description:
      "Keeping track of stock, suppliers or orders in a pile of spreadsheets? I can turn that into an organized SQL database that's easy to search, so your information stays accurate and nothing gets duplicated.",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  },
]

export default function Services() {
  return (
    <section>
      <h1>Services</h1>
      <p className="lead">
        I'm still a student, but I already enjoy building things for real
        people. Here's where I can help.
      </p>
      <div className="grid">
        {services.map((service) => (
          <article key={service.title} className="card">
            <svg
              className="service-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {service.icon}
            </svg>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
