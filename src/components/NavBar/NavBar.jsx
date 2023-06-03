import React, { useState } from 'react';
import "./NavBar.css";
import { menuicon,vector } from '../../assets';

const NavBar = () => {
    const[isActive,setIsActive]= useState(false);
  return (
    <>
    <nav>
        <a href='#' className='logo'>
            Film<span className='red'>Art</span>
        </a>
        
        <ul>
        <li>
                <a href='#topics'></a>
            </li>
        <li>
                <a href='#topics'>Courses</a>
            </li>
            <li>
                <a href='#info'>About</a>
            </li>
            <li>
                <a href='#blog'>Blog</a>
            </li>
            <li>
                <a href='#testimonials'>Testimonials</a>
            </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menuicon">
            <img src={menuicon} alt=""></img>
        </div>
    </nav>

    <div className={`smartphone-menu-container ${ isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false) } className='close-icon'>
            <img src={vector} alt=""/>

        </div>
        <ul className='menu-items'>
            <li>
                <a href='#topics' onClick={() => setIsActive(false) }>Courses</a>
            </li>
            <li>
                <a href='#info' onClick={() => setIsActive(false) }>About</a>
            </li>
            <li>
                <a href='#blog' onClick={() => setIsActive(false) }>Blog</a>
            </li>
            <li>
                <a href='#testimonials' onClick={() => setIsActive(false) }>Testimonials</a>
            </li>
        </ul>

    </div>
    </>
  );
};

export default NavBar;