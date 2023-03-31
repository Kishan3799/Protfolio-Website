import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const SocialMedia = () => {

  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/KishanVerma03" target='_blank' rel="noreferrer" >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kishan-verma-167076253/" target='_blank' rel="noreferrer">
            <FaLinkedinIn/>
          </a>
        </div>
        <div>
          <a href="https://github.com/Kishan3799" target='_blank' rel='noreferrer'>
            <FaGithub/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
