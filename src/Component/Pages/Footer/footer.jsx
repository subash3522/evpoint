import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='custom-footer'>
      <div className='custom-container'>

      <div className='fottext'>
          <p>Get in Touch</p>
          <p className='mid'>Social Media</p>
          <p>Useful Links</p>
        </div>
        <section className='social-icons'>

            
          <a className='social-icon facebook' href='#!'>
            <FaFacebookF />
          </a>

          <a className='social-icon twitter' href='#!'>
            <FaTwitter />
          </a>

          <a className='social-icon google' href='#!'>
            <FaGoogle />
          </a>

          <a className='social-icon instagram' href='#!'>
            <FaInstagram />
          </a>

          <a className='social-icon linkedin' href='#!'>
            <FaLinkedinIn />
          </a>

          <a className='social-icon github' href='#!'>
            <FaGithub />
          </a>
        </section>
        
      </div>

      <div className='copyright'>
        ©  Copyright 2023 © EVPOINT: All rights reserved 
       
      </div>
    </footer>
  );
}
