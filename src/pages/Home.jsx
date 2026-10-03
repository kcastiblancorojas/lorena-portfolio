import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  // The contact form redirects here with this flag after a message is sent
  const location = useLocation()
  const messageSent = location.state?.messageSent

  return (
    <section className="hero">
      {messageSent && (
        <p className="notice">
          Thanks for reaching out! Your email app should have opened with your
          message ready to send. I'll get back to you soon.
        </p>
      )}

      <p className="eyebrow">Hi, I'm</p>
      <h1>Lorena</h1>
      <p className="lead">
        I'm in my third semester of Software Engineering with AI at Centennial
        College. This is where I share the projects I've built so far. Take a
        look around, I hope you like them!
      </p>

      <div className="mission">
        <h2>My mission</h2>
        <p>
          I want to build technology that feels simple and friendly for the
          people using it. I'm always learning, I care about the details, and I
          believe the best work comes from listening to people first.
        </p>
      </div>

      <div className="hero-actions">
        <Link to="/about" className="btn">About me</Link>
        <Link to="/projects" className="btn btn-outline">View projects</Link>
        <Link to="/contact" className="btn btn-outline">Contact me</Link>
      </div>
    </section>
  )
}
