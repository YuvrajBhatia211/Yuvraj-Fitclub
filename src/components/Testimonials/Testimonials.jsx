
import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftarrow from '../../assets/leftArrow.png'
import rightarrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonials = () => {
  const [selected , setSelected] = useState(0);
  const tlength = testimonialsData.length;
  const transition = {type:'spring' , duration:3}
  return (
    <div className='Testimonials'>
      <div className='left-t'>
        <span>Testimonials</span>
        <span className='stroke-txt'>What they</span>
        <span>say about us</span>
        <motion.span
        key={selected}
        initial={{opacity:0 , x:100}}
        animate={{opacity:1 , x:0}}
        exit={{opacity:0 , x:-100}}
        transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color:'orange'}}>
            {testimonialsData[selected].name}
            </span>{" "}
             - {testimonialsData[selected].status}
        </span>
           
      </div>
      <div className='right-t'>
      <motion.div
      initial={{opacity:0 , x:-100}}
      transition={{...transition , duration:2}}
      whileInView={{opacity:1 , x:0}}
      ></motion.div>
      <motion.div
      initial={{opacity:0 , x:100}}
      transition={{...transition , duration:2}}
      whileInView={{opacity:1 , x:0}}
      ></motion.div>
      
        <motion.img 
        key={selected}
        initial={{opacity:0 , x:100}}
        animate={{opacity:1 , x:0}}
        exit={{opacity:0 , x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} alt=''/>
        <div className='arrows'>
            <img 
            onClick={()=>{
             selected ===0?setSelected(tlength-1):
             setSelected((prev)=>prev-1);
            }}
            src={leftarrow} alt=""/>
            <img 
            onClick={()=>{
              selected===tlength-1?setSelected(0):setSelected((prev)=>prev+1);
            }}
             src={rightarrow} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
