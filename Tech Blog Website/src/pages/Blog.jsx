import React from 'react'
import '../styles/blog.scss'
import Imagedata from '../components/Imagedata'
import blogimage from '../assets/bg.jpg'
import blogdata from '../blogs/blogsdata.js'
const Blog = () => {
  return (
    <section id='blog'>
        <div>
        <h1>Latest post</h1>
        <h3>We have a modern STUDIO platform.where we can 
edit content and adjust our content for optimal
display on any desktop and mobile device . This page 
loading speed is also optimized. Get to know our 
office and where to visit us. </h3>
        </div>
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
 <h5>About NewsPaper</h5>
 <p>Visit our website every day and it will certainly be a useful
 and pleasant time for you. Use the navigation to find 
the articles.
</p>
  </div>
</div>
<div className='right-container'>
  <div className='inner-left-container'> 
  <h3>Modern post</h3>
  <Imagedata title={blogdata[0].title} description={blogdata[0].description}/>
 <Imagedata title={blogdata[1].title} description={blogdata[1].description}/>
  </div>   
</div>
    </section>
    </section>
  )
}

export default Blog