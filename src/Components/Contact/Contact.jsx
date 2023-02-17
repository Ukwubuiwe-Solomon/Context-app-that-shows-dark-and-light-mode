import React, { useContext } from 'react'
import "./Contact.css"
import phone from "../../images/call.jpg"
import email from "../../images/email.jpg"
import address from "../../images/address.jpg"
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { ThemeContext } from '../../Context'

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_nx3x7a5', 'template_0af2wjj', formRef.current, 'j84U74EatuUshc4Uq')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className='c-title'>
                    Let discuss your Business.
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone}
                    alt="" className="c-icon" />
                    +2348116805399
                    </div>
                    <div className="c-info-item">
                        <img src={email}
                    alt="" className="c-icon" />
                    uku.ceo@gmail.com
                    </div>
                     <div className="c-info-item">
                        <img src={address}
                    alt="" className="c-icon" />
                     Emma Street Lagos, Nigeria.
                    </div>
                   
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story like? </b> 
                    Get in touch. always freelancing if the right
                    project comes along.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Name' name='user_name' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Subject' name='user_subject' />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder='Email' name='user_email' />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='message' name='message'/>
                    <button>Submit</button>
                    {done && "Thank You..."}
                </form>
            </div>
        </div>

        </div>
  )
}

export default Contact