import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

class Header extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

        <Link to="/" className="navbar-brand">Shopx</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse space" id="navbarSupportedContent">
        <div className="input-group w-25 mr-2">
    <input type="text" className="form-control" placeholder="Pakistan" aria-label="Text input with dropdown button" />
    <div className="input-group-append">
      <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
      <div className="dropdown-menu">
        <a className="dropdown-item alert alert-info" href="#">Use current Location</a>
        <div role="separator" className="dropdown-divider" />
        <a className="dropdown-item" href="#">Punjab</a>
        <a className="dropdown-item" href="#">Islamabad</a>
        <a className="dropdown-item" href="#">Sindh</a>
        <a className="dropdown-item" href="#">Khyber Pakhtunkhwa</a>
      </div>
    </div>
  </div>
        
        <form className="form-inline my-2 my-lg-0 space">
            <input className="form-control input-search" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
          </form>
        
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item space">
            <a className="nav-link login" href="#">Login</a>
            </li>
            <li className="nav-item space">
              <button className="sellBtn"><span className="plus">+</span>SELL</button>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    )
  }
}



export default Header;