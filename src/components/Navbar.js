import React from 'react'
import PropTypes from 'prop-types'

//props => properties

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.navTitle}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={props.hrefVal}>{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}

//These are the datatypes for the props inside the component.
Navbar.propTypes = {
  navTitle : PropTypes.string.isRequired,
  home : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired,
}

//defaultProps are the default values to be set on the props.
Navbar.defaultProps = {
  navTitle : 'Title comes here',
  home : 'home comes here',
  aboutText : 'aboutText'
}
