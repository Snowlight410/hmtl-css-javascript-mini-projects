import React from 'react'
import Imagedata from './Imagedata'
import blogimage from '../assets/bg.jpg'
import Titledata from './Titledata'
import blogdata from '../blogs/blogsdata.js'
const Gridlayout = () => {
  return (
    <section id='gridlayout'>
<div className='left-container'>
  <div className='inner-left-container'>
  <h3>Tech Category</h3>
 <Imagedata title={blogdata[0].title} description={blogdata[0].description}/>
 <Imagedata title={blogdata[1].title} description={blogdata[1].description}/>
  </div>
</div>
<div className='center-container'>
<div className='inner-left-container'>
  <h3>Modern Post</h3>
  <p> this section you will find all the latest articles added by our
 blog specialists. We invite you to read.</p>
 <img src={blogimage} alt="blogImage" />
 <Titledata/>
 <Titledata/>
 <Titledata/>
 <h5>About NewsPaper</h5>
 <p>Visit our website every day and it will certainly be a useful
 and pleasant time for you. Use the navigation to find 
the articles.
</p>
  </div>
</div>
<div className='right-container'>
  <div className='inner-left-container'> 
<h4>Newspaper from scratch</h4>
<h2>Our company <br/> creates 
with a hobby</h2>
<h5>Employed people</h5>
<p>We focus on and take care of the development of our articles, 
taking care of the highest level. Meet our creators and their
 biographies.</p>
 <div>
  <img src={blogimage} alt="blogimage" />
  <h4>Backend deleveloper</h4>
  <h4>nove ling</h4>
  <p>Tech is my favorite hobby, so I like to discover news 
from the world and describe my work experiences.</p>
 </div>
 <div  >
  <img src={blogimage} alt="blogimage" />
  <h4>Backend deleveloper</h4>
  <h4>nove ling</h4>
  <p>Tech is my favorite hobby, so I like to discover news 
from the world and describe my work experiences.</p>
 </div>
 <img src={blogimage} alt="#" />
 <h1>About us</h1>
 <p>Get to know our office and where to visit us. This is just
 an example of information about our activities.We are
 a company that has been operating on the market for
 over 20 years.
 <br/>
 <br/>
 We have created many startup projects
 during this time. Our office is a process that we
 create all the time.
 </p>
 <button>Learn More</button>
  </div>   
</div>
    </section>
  )
}

export default Gridlayout