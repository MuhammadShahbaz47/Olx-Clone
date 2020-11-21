import React from 'react';
import {connect} from 'react-redux';
import {set_data,facebook_login} from '../store/action';
import {Link} from "react-router-dom";
import './Header.css'
import slide1 from '../Images/1.PNG'
import slide2 from '../Images/2.PNG'
import slide3 from '../Images/3.PNG'

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
            <a data-toggle="modal" data-target=".bd-example-modal-sm" className="nav-link login " href="#">Login</a>
            </li>
            <li className="nav-item space">
              <button className="sellBtn"><span className="plus">+</span>SELL</button>
            </li>
          </ul>
        </div>
        </div>

        {/* LOGIN MODAL FORM START */}

        <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header text-center">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
              <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-1z" data-slide-to={0} className="active" />
          <li data-target="#carousel-example-1z" data-slide-to={1} />
          <li data-target="#carousel-example-1z" data-slide-to={2} />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block w-100 slide1" src={slide1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 slide2" src={slide2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 slide3" src={slide3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
              <div className="modal-body mx-3">
                <div className="md-form mb-2">
                <button className="btn btn-lg btn-block login-btns">Continue with phone</button>
                </div>
                <div className="md-form mb-2">
                <button onClick={() => this.props.facebook_login()} className="btn btn-lg btn-block login-btns">Continue with facebook</button>
                </div>
                <div className="md-form mb-2">
                <button className="btn btn-lg btn-block login-btns">Continue with google</button>
                </div>
                <div className="md-form mb-2">
                <button className="btn btn-lg btn-block login-btns">Continue with email</button>
                </div>
              </div>
              <div>
                <p className="modal-text-1">We won't share your personal details with anyone</p>
                <p className="modal-text-2">If you continue, you are accepting <a href="#">OLX Terms and Conditions and Privacy Policy</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* LOGIN MODAL FORM END */}

      </nav>
    )
  }
}

const mapStateToProps=(state)=>({
  users:state.users
})
const mapDispatchToProp=(dispatch)=>({
    set_data: (data) => dispatch(set_data(data)),
    facebook_login: () => dispatch(facebook_login())
})

export default connect(mapStateToProps,mapDispatchToProp) (Header);