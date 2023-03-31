import React, { useState } from 'react'
import {images} from '../../constants'
import  './Navbar.scss'

import {HiOutlineMenuAlt3 } from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Kishan Verma" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a> 
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
      <HiOutlineMenuAlt3 onClick={() => setToggle(true)}/>

      {toggle && (
        <motion.div
        whileInView={{x: [300,0]}}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        
        >
          
        <IoCloseSharp onClick={()=> setToggle(false)} />
          <ul>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li key = {item}>
              <a href={`#${item}`} onClick={()=> setToggle(false)}>
                {item}
                </a> 
            </li>
          ))}
        </ul>
        </motion.div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
