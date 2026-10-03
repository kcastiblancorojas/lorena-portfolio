import profile from '../assets/profile.jpg'

// Matches the Technical Skills section of the resume
const skills = [
  'HTML / CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'Java',
  'C#',
  'SQL',
  'Git / GitHub',
  'Canva',
  'Photoshop',
]

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p className="legal-name">Karen Lorena Castiblanco Rojas</p>
      <div className="about">
        <img className="profile-photo" src={profile} alt="Lorena" />
        <div>
          <p>
            I'm Lorena. I love people, and I think you can learn something from
            pretty much everyone you meet. Hearing someone's story or finding
            out how things work in another culture is one of my favourite
            things.
          </p>
          <p>
            When I'm not studying, I'm usually dancing to music, watching a
            movie, doing yoga or out for a walk. I'm also into art, and I enjoy
            networking because every new connection teaches me something.
          </p>
          <h2>Skills</h2>
          <ul className="tags">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          {/* Resume PDF lives in /public, so Vite serves it from the site root */}
          <p>
            <a
              href="/Resume.pdf"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my resume (PDF)
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
