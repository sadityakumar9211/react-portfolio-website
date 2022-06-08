import { useEffect, useRef } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import mypic from '../../../assets/images/mypic.jpg'

const Logo = () => {
  return (
    <img id="mypic" src={mypic} alt="Aditya's Picture" title="Aditya Kumar Singh" />
  )
}

export default Logo
