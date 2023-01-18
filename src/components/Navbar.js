import React from 'react';
import '../components/Navbar.css';
import Button from '../components/Button';

let activeButton = document.querySelector('.nav-link')

const setActive = () => {
  console.log('Hello')
}

function Navbar () {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">GLF <img id='glf-logo' src='/images/glf-logo.jpg' /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"> 
           <a class="nav-link" aria-current="page" href="/" onClick={setActive}>Home</a> 
        </li> 
        <li class="nav-item">
          <a class="nav-link" href="/success-stories">Success Stories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/history">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">Contact Us</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/notice">Notice</a></li>
            <li><a class="dropdown-item" href="/executives">Executives</a></li>
            {/* <li><hr class="dropdown-divider"/></li> */}
            <li><a class="dropdown-item" href="/donate">Donate</a></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Button />
    </div>
  </div>
</nav>
    )
}

export default Navbar;