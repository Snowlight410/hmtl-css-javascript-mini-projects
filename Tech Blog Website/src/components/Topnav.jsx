import React from 'react'
import '../styles/topnav.scss'
import socialImage from '../assets/bg.jpg'
const Topnav = () => {
  return (
   <>
   <header className='firstnav'>
   <nav className='topnav'> 
   <p>Tech and code with news around the world</p>
   <div>
   <a href="#">Contact</a>
   <a href="#">privacy policy</a>
   </div>
   </nav>
   </header>
   <header className='mainnav'>
  <h2>TechSimply.</h2>
  <nav>
    <ul><li><a href='/'>HomePage</a></li>
    <li><a href='/about'>About us</a></li>
    <li><a href='/blog'>Blog</a></li></ul>
  </nav>
  <div className='social-icons'>
    <img src={socialImage} alt="" />
    <img src={socialImage} alt="" />
    <img src={socialImage} alt="" />
    <img src={socialImage} alt="" />
  </div>
   </header>
   </>
  )
}

export default Topnav