import profile from '../assets/profile.jpg'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Responsive Web Design',
  'Oracle SQL',
  'Database Design (ERD, 3NF)',
  'Teamwork',
]

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
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
        </div>
      </div>
    </section>
  )
}
