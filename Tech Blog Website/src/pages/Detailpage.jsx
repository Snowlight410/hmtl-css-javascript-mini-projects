import React from 'react'
import '../styles/detailpage.scss'
import blogpost from '../assets/bg.jpg'
const Detailpage = () => {
  return (
    <section id='detailspage'>
        <div className='inner-container'>
        <p>11 December 2021 / 16:54
</p>
<h1>Our company in significant <br />
numbers</h1>
<img src={blogpost} alt="detailpage" />
<p>We focus on and take care of the development of our articles,
 taking care of the highest level. Meet our creators and their
 biographies. In this section you will find all the latest articles
 added by our blog specialists. We invite you to read.
 Get to know our office and where to visit us. This is just an 
example of information about our activities. Visit our 
website every day and it will certainly be a useful and
 pleasant time for you. Use the navigation to find the 
articles.
</p>
<h2>Employed People</h2>
<p>In this section you will find all the latest articles added by our blog specialists.We invite you to read.Visit our website every day and it will cartainly be a usefull and pleesant time for you.</p>
<div>
    <button><img src={blogpost} alt='23'/> left button</button>
    <button><img src={blogpost} alt='23'/>  right button</button>
</div>
        </div>
    </section>
  )
}

export default Detailpage