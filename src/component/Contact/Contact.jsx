import s from '../Global.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillTelephoneForwardFill, BsTelegram } from "react-icons/bs";
import { ContactContainer, ContactOptions, ContactSprite, ContactIcon, ContactLink, ContactForm, ContactInput, ContactTextarea } from './Contact.styles';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2spt6k8', 'template_5lrurpw', form.current, 'moXuMtvas6DUih4Bs')
      e.target.reset()
  };
  const classTwo = s.btn + ' ' + s.btnPrimary;
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <ContactContainer className={s.container}>
        <ContactSprite>
          <ContactOptions>
            <ContactIcon>
              <MdOutlineEmail />
            </ContactIcon>
            <h4>Email</h4>
            <h5>igorek.klimuch@mail.com</h5>
            <ContactLink href="mailto:igorek.klimuch@mail.com" target='_blank' rel="noreferrer">Send a message</ContactLink>
          </ContactOptions>

          <ContactOptions>
            <ContactIcon>
              <BsTelegram />
            </ContactIcon>
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <ContactLink href="https://t.me/jwigor097" target='_blank' rel="noreferrer">Send a message</ContactLink>
          </ContactOptions>

          <ContactOptions>
            <ContactIcon>
              <BsFillTelephoneForwardFill />
            </ContactIcon>
            <h4>Telephone</h4>
            <h5>0986795230</h5>
            <ContactLink href="0986795230" target='_blank' className=''>Send a message</ContactLink>
          </ContactOptions>
        </ContactSprite>

        <ContactForm  ref={form} onSubmit={sendEmail}>
          <ContactInput type="text" name='name' placeholder='Your Full Name' required />
          <ContactInput type="email" name='email' placeholder='Your Email' required />
          <ContactTextarea name="message" rows="7" placeholder='Your Message' required></ContactTextarea>
          <button type='submit' className={classTwo}>Send Message</button>
        </ContactForm>
      </ContactContainer>
    </section>
  )
}

export default Contact