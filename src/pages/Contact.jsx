import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CONTACT_EMAIL = 'kcastibl@my.centennialcollege.ca'
const GITHUB_URL = 'https://github.com/kcastiblancorojas'

const initialForm = { firstName: '', lastName: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const fullName = `${form.firstName} ${form.lastName}`
    const subject = `Portfolio message from ${fullName}`
    const contactLines = [fullName, form.email, form.phone].filter(Boolean).join('\n')
    const body = `${form.message}\n\n${contactLines}`

    // Opens the visitor's email app with the message ready to send
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Send the visitor back to the Home page, which shows a thank-you notice
    navigate('/', { state: { messageSent: true } })
  }

  return (
    <section>
      <h1>Contact</h1>
      <p className="lead">Have a project in mind, or just want to say hi? Get in touch.</p>

      <div className="contact-layout">
        <aside className="contact-panel">
          <h2>Contact info</h2>
          <dl>
            <dt>Email</dt>
            <dd><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></dd>
            <dt>Phone</dt>
            <dd><a href="tel:+14374738628">(437) 473-8628</a></dd>
            <dt>GitHub</dt>
            <dd><a href={GITHUB_URL} target="_blank" rel="noreferrer">kcastiblancorojas</a></dd>
            <dt>Location</dt>
            <dd>Toronto, Canada</dd>
          </dl>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First name
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Contact number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn">Send message</button>
        </form>
      </div>
    </section>
  )
}
