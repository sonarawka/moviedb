import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SubNavbar from '../SubNavbar'
import classes from './TvAllReview.module.css'

const TvSeasons = () => {
    const param = useParams()
    const location = useLocation()
    const { imgurl, title, release_date } = location.state
    const [seasons, setseasons] = useState(null)
    const url = `https://api.themoviedb.org/3/tv/${param.id}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
    const loadApi = async () => {
        const fetchapi = await fetch(url)
        const response = await fetchapi.json()
        setseasons(response.seasons)
    }
    useEffect(() => {
      loadApi()
    }, [])
    
  return (
    <div>
        <SubNavbar/>
        <div className={`${classes.ccbanner}`}>
                <div className='container'>
                    <div className={`row mt-2 mb-4`}>
                        <div className='col-md-1'>
                            <img width='64px' src={imgurl ? `https://image.tmdb.org/t/p/w185${imgurl}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} />
                        </div>
                        <div className='col-md-11'>
                            <h2><b>{title}</b> ({release_date})</h2>
                            <p><Link className={classes.backtomain} to={`/tv/${param.id}`}>← Back to main</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            {seasons && <div className='container'>{seasons.map((e)=>{return(
                <div className="mb-3">
                <div className="row g-0">
                  <div className="col-md-1">
                  <Link to={{ pathname: `/tv/${param.id}/episodes`}} state={{ imgurl: imgurl, title: title, release_date: release_date, season_no: e.season_number }}> <img style={{borderRadius:"8px"}} width="100px" src={`https://image.tmdb.org/t/p/w130_and_h195_bestv2/${e.poster_path}`} className="img-fluid rounded-start" alt="..."/></Link>
                    
                  </div>
                  <div className="col-md-11 ps-3 pt-4">
                    <div className="card-body">
                      <p className="card-title">
                      <Link style={{textDecoration:"none", color:"black"}} to={{ pathname: `/tv/${param.id}/episodes`}} state={{ imgurl: imgurl, title: title, release_date: release_date, season_no: e.season_number }}> <span className={`h4 fw-bold me-2 ${classes.season}`}>{e.name}</span></Link>
                        <span style={{fontSize:"14px", fontWeight:"bold"}}>{e.air_date.slice(0,4)} | {e.episode_count} Episodes </span></p>
                      <p className="card-text">{e.name} of {title} premiered on {new Date(e.air_date).toDateString()}.</p>
                      
                      <p className="card-text">{e.overview}</p>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>
            )})}</div>}
    </div>
  )
}

export default TvSeasons