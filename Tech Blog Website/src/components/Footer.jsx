import React from 'react'
import '../styles/footer.scss'
const Footer = () => {
  return (
    <section id='footer'>
<div className='inner-footer'>
<div className='left-footer'>
    <h1>Techsimply</h1>
    <p>Daily newspaper magazine with interesting scientific
 articles and guides on modern technology
 and fashion.
</p>
</div>
<div className='center-footer'>
    <h2>Company</h2>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>BlogSimgple</li>
    </ul>
</div>
<div className='right-footer'>
<h2>Category</h2>
    <ul>
        <li>Privery Policy</li>
        <li>Terms and Condition</li>
        <li>Contact</li>
    </ul>
</div>
</div>
<div className='email-x-reserved'>
<h4>ABNC@gmail.com</h4>
<h4>Copyright © 2021 Newspaper Magazine. All right reserved.</h4>
</div>

    </section>
  )
}

export default Footer