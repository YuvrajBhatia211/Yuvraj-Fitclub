import React from 'react'
import './Hero.css'
import Header from '../Header/Header';
import hero_img from '../../assets/hero_image.png'
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter';
const Hero = () => {
  const transition ={type:'spring' , duration:3}
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className='hero' id='home'>
    <div className='blur hero-blur'></div>
        <div className='left-h'>
          <Header/>
          {/*the best ad */}
          <div className='the-best-ad'>
            <motion.div 
             initial ={{left:mobile ? "120px": '238px'}}
             whileInView={{left:'8px'}}
             transition={{...transition , type:'tween'}}>
            </motion.div>
            <span>we will change your life</span>
          </div>

          <div className='hero-txt'>
             <div>
              <span className='stroke-txt'>Shape </span>
              <span>Your</span>
             </div>
             <div>
              <span>Ideal Body</span>
             </div>
             <div>
              <span>Caution , if you join us then we will make the best version of yourself</span>
             </div>
          </div>
         {/* figures */}
         <div className='figures'>
          <div>
            <span>
            <NumberCounter end={140} start ={100} delay='4' preFix='+'/>
             </span>
            <span>expertCoaches</span>
          </div>

          <div>
             <span>
             <NumberCounter end={1000} start ={800} delay='4' preFix='+'/>
              </span>
             <span>proud members</span>
          </div>

          <div>
            <span><NumberCounter end={40} start ={20} delay='3' preFix='+'/> </span>
            <span>Fitness regimes</span>
          </div>

         </div> 

         {/* hero buttons */}
         <div className='hero-bttn'>
          <buttons className='btn'>Get Started</buttons>
          <buttons className ='btn'>Learn More</buttons>
         </div>
        </div>
        <div className='right-h'>
          <button className='btn'>Join Now</button>

          <motion.div
          initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={{transition}}
           className='heart-rate'>
            <img src={heart} alt=""/>
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

{/* hero images */}

        <img src={hero_img} alt="" className='hero-img'/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={{...transition}}
        src={hero_image_back} alt=""className='hero-img-back'/>

        {/*calories*/}
        <motion.div 
        initial={{right:"50rem"}}
        whileInView={{right:"28rem"}}
        transition={{...transition}}
        className='calories'>
          <img src={calories} alt=""/>
          <div>
          <span>Calories burned</span>
          <span>226 kcal</span>
          </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Hero
