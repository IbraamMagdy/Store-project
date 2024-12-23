import React from 'react'
import './ContactStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone,faLocationDot,faClock} from '@fortawesome/free-solid-svg-icons';

const ContactBody2 = () => {
  return (
    <div>
      <div className='contactheader'>
        <h1>Get In Touch With Us</h1>
        <h5 className='p1'>For More Information About Our Product & Services. Please Feel Free To Drop Us</h5>
        <h5>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h5>
      </div>
      <div className='contactcontainer'>
        <div className='contactdata'>
            <div className='contactdata1'>
              <FontAwesomeIcon className='iconcon' icon={faLocationDot} />
              <div>
                <h1>Address</h1>
                <h4>236 5th SE Avenue, New York NY10000, United States</h4>
              </div>             
            </div>
           <div className='contactdata1'>
            <FontAwesomeIcon className='iconcon' icon={faPhone} />
            <div>
              <h1>Phone</h1>
              <h4>
                <span>Mobile: +(84) 546-6789</span><br/>
                <span>Hotline: +(84) 456-6789</span>
              </h4>
              </div>
           </div>
           <div className='contactdata1'>
            <FontAwesomeIcon className='iconcon' icon={faClock}/>
            <div>
              <h1>Working Time</h1>
              <h4>
                <span>Monday-Friday: 9:00 - 22:00</span><br/>
                <span>Saturday-Sunday: 9:00 - 21:00</span>
              </h4>
            </div>
           </div>
           
        </div>
        <div className='contactf'>
            <form>
                <h1>Your name</h1>
                <input type="text" placeholder="Abc" required />
                <h1>Email address</h1>
                <input type="email" placeholder="Abc@def.com" required />
                <h1>Subject</h1>
                <input type="text" placeholder="This is an optional" required />
                <h1>Message</h1>
                <textarea placeholder="Hi! i’d like to ask about" required></textarea><br/>
                <button type="submit">Submit</button>
 
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactBody2
