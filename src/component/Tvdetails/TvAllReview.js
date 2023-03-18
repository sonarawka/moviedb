import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SubNavbar from '../SubNavbar'
import classes from './TvAllReview.module.css'


const TvAllReview = () => {
    
    const location = useLocation()
    const { imgurl, title, release_date, id } = location.state
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div>
            <SubNavbar/>
            {result && <div>
            <div className={`${classes.ccbanner}`}>
                <div className='container'>
                    <div className={`row mb-4`}>
                        <div className='col-md-1'>
                            <img width='64px' src={imgurl ? `https://image.tmdb.org/t/p/w185${imgurl}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} alt=""/>
                        </div>
                        <div className='col-md-11'>
                            <h2><b>{title}</b> ({release_date})</h2>
                            <p><Link className={classes.backtomain} to={`/tv/${id}`}>← Back to main</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>WRITE REVIEW</div>
                    <div className='col-md-10'>
                        {result && result.results.map((e) => {
                            return (
                                <div className='card mb-5'>
                                    <div className='row mt-4'>
                                        <div className={`col-md-1`}>
                                            <img className={`${classes.reviewsImg} mx-3`} src={`https://image.tmdb.org/t/p/w300${e.author_details.avatar_path}`} alt=""/>
                                        </div>
                                        <div className='col-md-11 ps-4'>
                                            <h5 className={classes.reviewsAuthor}><b>A review by {e.author_details.name} 6.0</b></h5>
                                            <p className={classes.reviewsDate}>Written by {e.author_details.name} on {new Date(e.updated_at).toString().slice(4, 15)}</p>
                                            <p className={`my-4 ${classes.reviewsContent}`}>{e.content}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

            </div>}

        </div>
    )
}

export default TvAllReview