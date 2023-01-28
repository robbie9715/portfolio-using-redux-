import React  from 'react'
import Pnavbar from '../components/Pnavbar/Pnavbar'
import Portfolio from '../pages/Portfolio/Portfolio'
import Footer from '../components/Footer/Footer'
// import Login from '../pages/Login'
import Routers from '../Router/Routers'
// import Routes from '../Routes/Routes'
import '../assets/scss/main.scss'



const Layout = () => {
  
  return (
    <div className="main">  
   
        <Pnavbar/>
        <Routers/>
        <Footer/> 
    </div>
  )
}

export default Layout