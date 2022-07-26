import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import classes from './AllReview.module.css'
import SubNavbar from './SubNavbar'

const MovieVideos = () => {
    const [videoResult, setVideoResult] = useState(null)
    const param = useParams()
    const location = useLocation()
    const { imgurl, title, release_date } = location.state

    const videoApi = async () => {
        const url = `https://api.themoviedb.org/3/movie/${param.id}/videos?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`
        const fetchApi = await fetch(url)
        const reponse = await fetchApi.json()
        setVideoResult(reponse)
    }

    useEffect(() => {
        videoApi()
    }, [])

    return (
        <div>
            <SubNavbar/>
            <div className={`${classes.ccbanner}`}>
                <div className='container'>
                    <div className={`row mt-2 mb-5`}>
                        <div className='col-md-1'>
                            <img width='64px' src={imgurl ? `https://image.tmdb.org/t/p/w185${imgurl}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                        </div>
                        <div className='col-md-11'>
                            <h2><b>{title}</b> ({release_date})</h2>
                            <p><Link className={classes.backtomain} to={`/movies/${param.id}`}>← Back to main</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>


                {videoResult && videoResult.results.map((e) => {
                    return (
                        <div class="card mb-3 my-3">
                            <div class="row g-0">
                                <div class="col-md-3">
                                    <img width="" src={`https://img.youtube.com/vi/${e.key}/mqdefault.jpg`} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-9">
                                    <div class="card-body">
                                        <h5 class="card-title">{e.name}</h5>
                                        <p class="card-text">{e.type} <span style={{ fontSize: "12px" }}> &#9679; {e.published_at.slice(11, 19)} &#9679; {new Date(e.published_at).toDateString().slice(3)} </span></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieVideos