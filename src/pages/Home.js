import React from 'react'
import Header from '../components/Header'
import Header2 from '../components/HeaderMenu'
import Banner from '../Images/hero_bg_pk.jpg'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Header2/>
        <img src={Banner} className="img-fluid" alt="Responsive img"></img>
      </div>
    )
  }
}

export default Home;