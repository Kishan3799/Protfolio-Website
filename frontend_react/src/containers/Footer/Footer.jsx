import React, { useState } from 'react'

import {images} from '../../constants'
import {AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import  './Footer.scss'

const Footer = () => {
  const [formData , setFormData] = useState({name: '', email: '', message:'' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {username, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: username,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(()=> {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err))
  };

  return (
    <>
      <h2 className="head-text">Let's connect and make something great. Contact me now</h2>
 
      <div className="app__footer-cards">
       <div className="app__footer-card">
         <img src={images.email} alt="email" />
         <a href="mailto:kishanverma371997@gmail.com" className="p-text">kishanverma371997@gmail.com</a>
       </div>
       <div className="app__footer-card">
         <img src={images.phone} alt="phone" />
           <a href="tel:+918130905701" className="p-text">+91 8130905701</a>
         </div>
      </div>
      {!isFormSubmitted ? (
       <div className='app__footer-form app__flex'>
         <div className="app__flex">
         <input type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
         </div>
         <div className="app__flex">
           <input  type="email" name="email" placeholder='Your Email' value={email} onChange={handleChangeInput}  />
         </div>
         <div>
           <textarea 
           name="message" 
           placeholder='Your Message'
           value={message}
           onChange={handleChangeInput}/>
         </div>  
         <button type='button' className='p-text' onClick={handleSubmit}>{!loading ? 'Send Message': 'Sending...'}</button>
       </div>
      ) : (
       <div>
         <h3 className='head-text'>
           Thank You for Contact Me.
         </h3>
       </div>
      )}
     </>
   )

}

  

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__darkerBlue'
)