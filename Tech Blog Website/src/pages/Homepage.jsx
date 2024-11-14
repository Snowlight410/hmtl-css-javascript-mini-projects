import React from 'react'
import Banner from '../components/Banner'
import '../styles/banner.scss'
import '../styles/gridlayout.scss'
import Gridlayout from '../components/Gridlayout'
const Homepage = () => {
  return (
  <div id='maincontainer'>
  {/* banner  */}
    <Banner/>
    {/* GridLayout */}
    <Gridlayout/>
  </div>
    )
}

export default Homepage