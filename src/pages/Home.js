import React from 'react'
import Header from '../components/Header'
import Header2 from '../components/HeaderMenu'
import Banner from '../Images/hero_bg_pk.jpg'
import Footer from '../components/Footer'
import AppBanner from '../Images/phone-app.png'
import Content from '../components/Content'
import './Home.css'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Header2/>
        <img src={Banner} className="img-fluid" alt="Responsive img"></img>
        <Content/>
        <div className="container-fluid AppBanner">
          <div className="row">
            <div className="col-sm-5">
          <img src={AppBanner} className="img-fluid" alt="Responsive img"></img>
            </div>
            <div className="col-sm-4">
              <h1 className="app-heading">TRY THE OLX APP</h1>
              <p className="app-text">Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home;