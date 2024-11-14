import React from 'react'
import blogimage from '../assets/bg.jpg'
const Imagedata = ({title,description}) => {
  return (
    <section className='img-with-text'>
    <img src={blogimage} alt="blogImage" />
    <p>11 December 2023</p>
    <h4>{title}</h4>
    <p>{description}</p>
    <button type='submit' ><a href='/detailpage'>Learn more</a></button>
     </section>
  )
}

export default Imagedata