import React from 'react';
import "./Info.css";
import { flatcoloricons,notoStudent, Group7} from '../../assets';

const Info = () => {
  return (
    <section id= "info" className='dark-gay'>
        <div className='wrapper'>
            <div className='content-container'>
            <div className='info-content'>
        <img src={notoStudent}/>
        <div className='amount'>1 lakh+</div>
        <div className='type'>Learners</div>
        </div>
        <div className='info-content'>
        <img src={flatcoloricons}/>
        <div className='amount'>100+ Hrs</div>
        <div className='type'>Video Content</div>
        </div>
        </div>
        <img className='Group7' src={Group7} alt=""/>
        </div>
        </section>
  )
}

export default Info;