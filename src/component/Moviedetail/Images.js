import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SubNavbar from './SubNavbar'
import classes from './AllReview.module.css'

const Images = () => {
    const param = useParams()
    const location = useLocation()
    const { imgurl, title, release_date, type } = location.state
    const [result, setresult] = useState(null)

    const imageApi = async () => {
        const url = `https://api.themoviedb.org/3/movie/${param.id}/images?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`

        const fetchApi = await fetch(url)
        const reponse = await fetchApi.json()
        setresult(reponse)
    }


    useEffect(() => {
        imageApi()
    }, [])
    return (
        <div>
            <SubNavbar/>
            <div className={`${classes.ccbanner}`}>
                <div className='container'>
                    <div className={`row mb-2`}>
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
            {result && <div className='container'>
            <div className='row'>
                {result[type].map((e)=>{return(
                    <div className='col-md-3 my-3'>
                    <div className="card">
                        <img src={`https://image.tmdb.org/t/p/w500${e.file_path}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><span className={classes.starRating}>&#9733; &#9733; &#9733; &#9733; &#9733;</span> {e.vote_average}/10 ( {e.vote_count} votes )</p>
                            
                        </div>
                    </div>
                    </div>
                )})}
            </div>
            </div>}
        </div>
    )
}

export default Images