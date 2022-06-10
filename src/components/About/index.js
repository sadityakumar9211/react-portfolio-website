import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGithubSquare,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page" id="page-container">
        <div className="text-zone">
          <div className="animated-letter">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
          </div>
          <div className="text-content">
            <p>
              I'm a full stack web developer with MERN tech stack who likes to explore and learn new things, technology is no exception.
              I am a passionate C/C++ and Python programmer, a cyber Security enthusiast and currently learning Blockchain Technology.
            </p>
            <p align="LEFT">
              I'm quietly confident, naturally curious, and continuously working on
              improving myself and my skills.
            </p>
            <p>
              Apart from technology I am interested in Psychology, Astronomy and Linguistics. In my free time I like to read books and enjoy music and write occasionally.
            </p>
          </div>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaPython />
            </div>
            <div className="face2">
              <FaReact />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>

            <div className="face3">
              <FaNodeJs />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithubSquare} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
