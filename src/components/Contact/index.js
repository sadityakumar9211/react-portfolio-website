import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4fy0rbw',
        'template_e5edd96',
        form.current,
        'xWPoePw29KdUqJurl'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        })
      .catch((e) => {
        console.log(e)
        alert('Failed to send the message, please try again')
      })

  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in internship and freelance opportunities. You can contact me using the below form.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
          <div className="info-map">
            Aditya Kumar Singh,
            <br />
            student@ABV-IIITM,
            <br />
            Morena Link Road Gwalior - 474015 <br />
            Madhya Pradesh <br />
            <br />
            <span>sadityakumar9211@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[26.25086065947548, 78.17461966961183]} zoom={14}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[26.25086065947548, 78.17461966961183]}>
                <Popup>ABV-IIITM Gwalior</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
