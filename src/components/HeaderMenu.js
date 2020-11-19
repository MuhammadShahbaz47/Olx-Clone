import React from 'react';
import './HeaderMenu.css';

class Header2 extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            <nav className="nav nav-shadow">
            <ul className="nav navbar-nav">
        <li className="dropdown ">
          <a href="#" className="dropdown-toggle nav-link links active" data-toggle="dropdown">All Categories<b className="caret" /></a>
          <ul className="dropdown-menu multi-column columns-3">
            <div className="row">
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider" />
                  <li><a href="#">Separated link</a></li>
                  <li className="divider" />
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider" />
                  <li><a href="#">Separated link</a></li>
                  <li className="divider" />
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </div>
              <div className="col-sm-4">
                <ul className="multi-column-dropdown">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider" />
                  <li><a href="#">Separated link</a></li>
                  <li className="divider" />
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </div>
            </div>
          </ul>
        </li>
      </ul>
            <a className="nav-link  links" href="#">Mobile Phones</a>
            <a className="nav-link links" href="#">Cars</a>
            <a className="nav-link links" href="#">Motorcycles</a>
            <a className="nav-link links" href="#">Houses</a>
            <a className="nav-link links" href="#">TV audio-video</a>
            <a className="nav-link links" href="#">Tablets</a>
            <a className="nav-link links" href="#">Land & Plots</a>

            
          </nav>
          </div>
        )
    }
}

export default Header2;