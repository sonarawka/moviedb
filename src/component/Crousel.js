import React from 'react'

const Crousel = () => {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className='crousel-css'><img src="https://www.themoviedb.org/t/p/original/rcA17r3hfHtRrk3Xs3hXrgGeSGT.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block text-light">
                            <h5>Stranger Things (2016)</h5>
                            <p>Every ending has a beginning.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='crousel-css'><img src="https://www.themoviedb.org/t/p/original/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Spider-Man: No Way Home (2021)</h5>
                            <p>The Multiverse unleashed.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='crousel-css'><img src="https://www.themoviedb.org/t/p/original/czffzEgaBko4mXW84B1J1EnQBzo.jpg" className="d-block w-100" alt="..." /></div>
                        <div className="carousel-caption d-none d-md-block text-light">
                        <h5>The Boys (2019)</h5>
                        <p>Never meet your heroes.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}

        </div>


    )
}

export default Crousel