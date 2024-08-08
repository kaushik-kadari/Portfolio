import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tkp84rq', 'template_gzdkiar', form.current, {
        publicKey: 'AFDm5amSpzDdAu2EK',
      })
      .then(
        () => {
          console.log('Email sent!');
          toast.success('Your message has been sent!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(error.text);
        },
      );
  };

  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.1015664696365!2d78.58507377473516!3d17.262320506396794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba14774487ced%3A0x8900a67df73cda09!2sRagannaguda%20Village%20Rd%2C%20Ragannaguda%2C%20Telangana%20501510!5e0!3m2!1sen!2sin!4v1720968001988!5m2!1sen!2sin" 
            width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={sendEmail} ref={form}>

          <div className="input-wrapper">
            <input type="text" name="from_name" className="form-input" placeholder="Full name" required data-form-input autoComplete='off'/>

            <input type="email" name="from_email" className="form-input" placeholder="Email address" required data-form-input autoComplete='off'/>
          </div>

          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;