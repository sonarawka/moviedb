import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div style={{backgroundImage: "radial-gradient(at 30% top, #031d33 0%, rgba(3,37,65,1) 70%)"  }} className="text-white">
  <footer className="py-5 mt-5 border-top">
      <div className="d-flex">
        <div className="p-2 d-flex justify-content-end " style={{flex:"2"}}>
          <div className='d-flex flex-column '>
          <img width="150px" src='https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg' alt=''/>
          <button style={{color:"rgb(30,213,169)", borderRadius:"10px", padding:"10px 20px"}}><b>JOIN THE COMMUNITY</b></button>
          </div>
        </div>
        <div className="p-2 d-flex" style={{flex:"4"}}>
        <div className="mx-4 px-5">
          <h5>THE BASICS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">About TMDB</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Contact Us</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Support Forums</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">API</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">System Status</Link></li>
            </ul>
        </div>

        <div className="mx-4 px-5">
          <h5>GET INVOLVED</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Contribution Bible</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Add New Movie</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Add New TV Show</Link></li>
            </ul>
        </div>

        <div className="mx-4 px-5">
          <h5>LEGAL</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Terms of Use</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">API Terms of Use</Link></li>
              <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Privacy Policy</Link></li>
            </ul>
        </div>
        </div>
      </div>
    {/* <div className="col mb-3">
      <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img className="bi me-2" width="40" height="32"/>
      </Link>
      <p className="text-secondary">&copy; 2022</p>
    </div>

    <div className="">
      <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">About</Link></li>
        </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">About</Link></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">About</Link></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-secondary">About</Link></li>
      </ul>
    </div> */}
  </footer>
</div>
    </div>
  )
}

export default Footer