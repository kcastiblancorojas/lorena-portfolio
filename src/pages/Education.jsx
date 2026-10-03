const education = [
  {
    period: 'Expected graduation: 2028',
    title: 'Software Engineering Technology – Artificial Intelligence',
    institution: 'Centennial College · Toronto, Canada',
    description:
      "I'm in my third semester, learning how to design, build and test software, with a focus on artificial intelligence. So far I've worked on web development with HTML, CSS and JavaScript, and on database design with Oracle SQL.",
  },
  {
    period: 'Graduated 2023',
    title: 'High School Diploma',
    institution: 'Colegio Bolívar · Soacha, Colombia',
    description:
      'Where I finished my secondary education and first got curious about technology.',
  },
]

export default function Education() {
  return (
    <section>
      <h1>Education</h1>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.title}>
            <span className="period">{e.period}</span>
            <h3>{e.title}</h3>
            <p className="institution">{e.institution}</p>
            <p>{e.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
