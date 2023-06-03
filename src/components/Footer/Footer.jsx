import React from 'react';
import "./Footer.css";
import { insta,facebook,twitter } from '../../assets';

const Footer = () => {
  return (
    <footer className='black'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='links'>
            <a href='#' className='logo'>
              FILM<span className='red'>ART</span>
            </a>

            <div className='social-icons'>
              <a href='#'>
                 <img src={facebook} alt=""></img>
              </a>

              <a href='#'>
                 <img src={twitter} alt=""></img>
              </a>

              <a href='#'>
                 <img src={insta} alt=""></img>
              </a>

              <div className='copyright'>
              This website is designed by RishavCanCode Ⓒ 2023
              </div>
            </div>

            <div className='links'>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href='#'>Blog</a>
                </li>

                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className='links'>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href='#'>youcanmail@google.com</a>
                </li>

                <li>
                  <a href='#'>+91 727 727 4565</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
       </footer>
  )
}

export default Footer;