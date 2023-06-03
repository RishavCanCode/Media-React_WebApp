import React from 'react';
import "./Testimonials.css";
import { testi1,testi2,testi3 } from '../../assets';

const Testimonials = () => {
  return (
   <section id="testimonials" className='dark-gray'>
    <div className='wrapper'>
      <h2>What Learners say?</h2>

      <div className='content-container'>
        <div className='testimonial'>
          <img src={testi1} alt=""/>
          <div className='reviewer-details'>
            <div className='name'>Bryce Kane</div>
            <div className='course-name'>Video Editing Masterclass</div>
            <div className='review'>
              This course helped me achieve great success.loved it.
            </div>
          </div>
        </div>

        <div className='testimonial'>
          <img src={testi2} alt=""/>
          <div className='reviewer-details'>
            <div className='name'>William Arta</div>
            <div className='course-name'>Animation and VFX</div>
            <div className='review'>
              A complete tutorial and guide was all i needed and got.Best place to learn VFX.
            </div>
          </div>
        </div>

        <div className='testimonial'>
          <img src={testi3} alt=""/>
          <div className='reviewer-details'>
            <div className='name'>Diana</div>
            <div className='course-name'>Audio Processing Masterclass</div>
            <div className='review'>
              Awesome Tutors with great content
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Testimonials;