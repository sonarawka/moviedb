import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SubNavbar from './SubNavbar'
import classes from './AllReview.module.css'

const MovieTranslation = () => {
    const param = useParams()
    const location = useLocation()
    const { imgurl, title, release_date } = location.state
    const [result, setresult] = useState(null)
    const url = `https://api.themoviedb.org/3/movie/${param.id}/translations?api_key=c725cd6e0711c581df4c197979bb6a39`

    const loadApi = async () => {
        const fetchapi = await fetch(url)
        const response = await fetchapi.json()
        setresult(response.translations)

    }

    useEffect(() => {
        loadApi()
    }, [])


    return (
        <div>
            <SubNavbar />
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

            {result && <div className='container'>{result.map((e)=>{return(
            <div className="card mb-4">
                <div className="card-header">
                    {e.english_name} <span>({e.iso_639_1}-{e.iso_3166_1})</span>
                </div>
                <div className="card-body">
                    <p className="card-text">{e.data.title}</p>
                    <hr className='my-1'/>
                    <p className="card-text">{e.data.overview}</p>
                </div>
            </div>
            )})}</div>}
        </div>
    )
}

export default MovieTranslation