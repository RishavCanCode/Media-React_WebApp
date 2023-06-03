import React, { useState } from 'react';
import "./Topics.css";
import {rectangle13,rectangle14,rectangle15,
    rectangle16,rectangle17,rectangle18,Group7} from "../../assets";

const Topics = () => {

    const [currentImage,setCurrentImage] = useState(rectangle13);
  return (
    <section id ="topics" className="black" >
        <div className="wrapper">
            <h2>What Will You Learn?</h2>
             <div className='content-container'>
                <ul className='topics-list'>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle14)}> Videography  </li>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle16)}> Photography  </li>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle17)}> Audio Processing  </li>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle15)}> Editing  </li>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle18)}> Direction  </li>
                    <li onMouseEnter={ ()=> setCurrentImage(rectangle13)}> Mastering  </li>
                </ul>

                <div className='topic-image'>
                    <img src={currentImage} alt=''></img>
                </div>
             </div>
             <img src={Group7} className='group7'></img>
            </div>
    </section>
  )
  }

export default Topics;