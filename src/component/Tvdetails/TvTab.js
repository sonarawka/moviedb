import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './TvTab.module.css'

const TvTab = (props) => {
    const {id, imgurl, title, release_date} =props

    const [result, setresult] = useState(null)
    // SimpleDateFormat df = new SimpleDateFormat("dd-MM-yyyy, hh:mm a")
    const url =`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US&page=1`

    const loadApi = async ()=>{
        const fetchapi = await fetch(url)
        const response = await fetchapi.json()
        setresult(response)
      }

    useEffect(() => {
        loadApi()
    }, [])

    return (
        <div>
        {result && result.results && result.results[0] && <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <h4 className="py-2">Social</h4>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link ms-4 text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Reviews</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-dark" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false"> Discussions</button>
                </li>
            
            </ul>
            <div className="tab-content" id="myTabContent">
                
                <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                    <div className='card'>
                        <div className='row mt-4'>
                            <div className={`col-md-1`}>
                                <img className={`${classes.reviewsImg} mx-3`} src={`https://image.tmdb.org/t/p/w300${result.results[0].author_details.avatar_path}`}/>
                                </div>
                            <div className='col-md-11 ps-4'>
                                <h5 className={classes.reviewsAuthor}><b>A review by {result.results[0].author_details.name} 6.0</b></h5>
                                <p className={classes.reviewsDate}>Written by {result.results[0].author_details.name} on {new Date(result.results[0].updated_at).toString().slice(4,15)}</p>
                                <p className={`my-4 ${classes.reviewsContent}`}>{result.results[0].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">contact</div>
                
            </div>
        </div>}
        <p className='my-3'><Link className={`${classes.AllReview}`} to={{pathname:`/tv/${id}/review`}} state={{imgurl:imgurl, title:title, release_date:release_date, result:result, id:id}}>Read All Reviews</Link></p>
        </div>
    )
}

export default TvTab