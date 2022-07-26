import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">Moviedb</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/movies">Movies</Link>
                                
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/tvs">TV SHOW</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/persons">People</Link>
                            </li>

                            
                        </ul>
                        <ul className='navbar-nav mb-2 mb-lg-0 d-flex'>

                        
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Login</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Join Moviedb</Link>
                            </li>
                        </ul>
                        <Searchbar/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar