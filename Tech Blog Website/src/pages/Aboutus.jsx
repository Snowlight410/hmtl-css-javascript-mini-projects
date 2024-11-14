import React from 'react'
import blogimage from '../assets/bg.jpg'
import '../styles/about.scss'
const Aboutus = () => {
  return (
    <section id="aboutus">
        <h1>About Us</h1>
        <div className='inner-about'>
<div>
  <img src={blogimage} alt="#" />
  <div>
    <p>our mission</p>
<h2>We always look 
to the future</h2>
<p>We focus on and take care of the development of our aritcles.
taking care of the highest level. Meet our creators and their
biographics.</p>
  </div>
</div>     
<div>
  <div>
    <p>our mission</p>
<h2>We always look 
to the future</h2>
<p>We focus on and take care of the development of our aritcles.
taking care of the highest level. Meet our creators and their
biographics.</p>
  </div>
  <img src={blogimage} alt="#" />
</div>  
<div>
  <img src={blogimage} alt="#" />
  <div>
    <p>our mission</p>
<h2>We always look 
to the future</h2>
<p>We focus on and take care of the development of our aritcles.
taking care of the highest level. Meet our creators and their
biographics.</p>
  </div>
</div>    
        </div>
    </section>
  )
}

export default Aboutus