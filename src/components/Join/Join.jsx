import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z73sm04', 'template_nzvuirb', form.current, {
        publicKey: 'QkqWl3QDe3OyuwRKQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Join' id='join'>
      <div className='left-j'>
       <hr/>
        <div>
            <span>ready to</span>
            <span className='stroke-txt'> better your</span>
        </div>

        <div>
            <span>lifestyle</span>
            <span className='stroke-txt'> with us?</span>
        </div>

      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
            <input type ="email" name ="user_email" placeholder = "Enter your Email address"/>
            <button className='btn btn-j' type = "submit">Join now</button>
  
        </form>
      </div>
    </div>
  )
}

export default Join



