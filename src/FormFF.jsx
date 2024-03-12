import React, { useRef } from "react";
import "./styles.css";
import emailjs from '@emailjs/browser';
import ImageCarousel from "./ImageCarousel.jsx";
import { SliderData } from './SliderData.js';


export default function FormFF() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rzf3wyq', 'template_580ys5t', form.current, 'LryYLoFGJRa0MFCDB')
        .then((result) => {
            console.log(result.text);
            alert("Email sent");
        }, (error) => {
            console.log(error.text);
            alert("Error sending email. Please contact me via instagram.")
        });
    };

    return (
        <div className="form-div">
        

            <p className="content">
          
                £50 per head - please make payment via the PayPal link below.
            </p>
        

            <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="user_name"></input>
            </div>

            <div className="form-row">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="user_email"></input>
            </div>

            <div className="form-row">
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="user_phone"></input>
            </div>

            <div className="form-row">
                <label htmlFor="phone">Age of attendee:</label>
                <input type="text" id="age" name="user_age"></input>
            </div>

            <div className="form-row">
                <label htmlFor="consent">Consent to appear promotional content:</label>
                <input type="text" id="consent" name="user_consent"></input>
            </div>
            
            <div className="form-row">
                <label htmlFor="medical">Medical Conditions:</label>
                <textarea id="medical" rows="3" name="user_medicals"></textarea>
            </div>

            <div className="form-row">
                <input className="btn" type="submit" value="Send" />
            </div>

            </form>

            <ImageCarousel slides={SliderData} />       

            <div className="paypal-container">
                <button className="pp-btn">
                <a href="https://www.paypal.com/paypalme/DavidForsythe9?country.x=GB&locale.x=en_GB">
                    PayPal
                </a>
                </button>
                <p>** Please make the £50 payment through PayPal if possible, otherwise cash is preferred. **</p>
            </div>

        </div>
    )
}
