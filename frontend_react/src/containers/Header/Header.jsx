import React from 'react'
import  './Header.scss'
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper'
import Resume from '../../assets/Kishan.pdf'
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{z:[-100,0], opacity: [0,1]}}
        transition={{ duration: 1 }}
        className="app__header-tagline"
      >
          <p className='p-text'>Hi, I am Kishan Verma</p>
          <h3 className='head-text'>Frontend Web & Android App Developer</h3>
          <a href={Resume} download= "resume.pdf" type='button' className='app__btn'>Download Resume</a>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');