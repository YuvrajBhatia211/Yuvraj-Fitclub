
import React from 'react'
import './Footer.css'
import gihub from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkdin from '../../assets/linkedin.png'
import logo from '../../assets/logo2.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr/>
<div className='footer'>
  <div className='socil-links'>
        <img src={gihub} alt=''/>
        <img src={instagram} alt=''/>
        <img src={linkdin} alt=''/>
       </div>
    <div className='logo-f'>
    <img src={logo} alt=''/>
    </div>
    <div className='blur blur-f-1'></div>
    <div className='blur blur-f-2'></div>
   </div>
</div>
  )
}

export default Footer
