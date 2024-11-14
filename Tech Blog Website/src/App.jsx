
import './styles/utilsClasses.scss'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import HomePage from './pages/Homepage.jsx'
import Topnav from './components/Topnav'
import Footer from './components/Footer'
import Detailpage from './pages/Detailpage'
import Aboutus from './pages/Aboutus'
import Blog from './pages/Blog'
function App() {

  return (
    <>
  <Router>
    <Topnav/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/detailpage' element={<Detailpage/>}/>
      <Route path='/about' element={<Aboutus/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    <Footer/>
  </Router>
    </>
  )
}

export default App
