import React, { useEffect, useState } from 'react'
import  './About.scss'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../../wrapper'
import {urlFor, client} from '../../client';
import { LazyLoadImage } from "react-lazy-load-image-component"


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(()=> {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data)=>{
      setAbouts(data);
    });
    
  },[]);

  return (
    <>
      <h2 className='head-text'>About Me</h2>

        {abouts.map((about)=>(
          <div className="app__profile app__flex" key={about}>
           <motion.div
           initial={{ opacity: 0, scale: 0 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{
             duration: 0.8,
             delay: 0.5,
             ease: [0, 0.71, 0.2, 1.01]
           }}
           className='app__profile-picture app__flex'
         
           >
            <LazyLoadImage src= {urlFor(about.imgUrl).url()}
            alt="Kishan Verma"/>
             {/* <img src={urlFor(about.imgUrl).url()} alt="Kishan Verma"/> */}
           </motion.div>
   
           <motion.div 
           whileInView={{x:[0], opacity:[0,1]}}
           transition={{duration:1}}
           className='app__profile-bio app__flex'
    
           >
             <p className='p-text'>{about.description}</p>
           </motion.div>
           </div>
        ))}   
  </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about'
)
