import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SubNavbar from '../SubNavbar'
import classes from './TvAllReview.module.css'

const Episodes = () => {
  const param = useParams()
  const location = useLocation()
  const { imgurl, title, release_date, season_no } = location.state
  const [result, setresult] = useState(null)
  const url = `https://api.themoviedb.org/3/tv/${param.id}/season/${season_no}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

  const loadApi = async () => {
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setresult(response.episodes)

  }
  console.log(url)
  useEffect(() => {
    loadApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <SubNavbar />
      <div className={`${classes.ccbanner}`}>
        <div className='container'>
          <div className={`row mb-2`}>
            <div className='col-md-1'>
              <img width='64px' src={imgurl ? `https://image.tmdb.org/t/p/w185${imgurl}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} alt=""/>
            </div>
            <div className='col-md-11'>
              <h2><b>{title}</b> ({release_date})</h2>
              <p><Link className={classes.backtomain} to={`/tv/${param.id}/seasons`} state={{ imgurl: imgurl, title: title, release_date: release_date }}>← Back to main</Link></p>
            </div>
          </div>
        </div>
      </div>

      {result && <div className='container'>
        <h5>Episodes</h5>
        {result.map((e, index) => {
          return (

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={`https://image.tmdb.org/t/p/w300${e.still_path}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{index + 1 + "  " + e.name}</h5>
                    <p className="card-text">{e.overview}</p>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <div className="accordion-header text-center" id="headingOne">
                    <p className={`${classes.accHeader}`} data-bs-toggle="collapse" data-bs-target={`#collapseOne${e.id}`} aria-expanded="true" aria-controls="collapseOne"><i className="fa-solid fa-angle-down"></i> Expand</p>
                  </div>
                  <div id={`collapseOne${e.id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-3'><b>Crew</b>
                          <p className={`mb-0 ${classes.epCrewHead}`}><b>Directed by:</b> {e.crew.filter((el) => el.job === "Director").map((ele, index) => { return (<span>{index !== 0 && <span>, </span>}{ele.original_name}</span>) })}</p>
                          <p className={`${classes.epCrewHead}`}><b>Written by:</b> {e.crew.filter((el) => el.job === "Writer").map((ele, index) => { return (<span>{index !== 0 && <span>, </span>}{ele.original_name}</span>) })}</p>
                        </div>
                        <div className='col-md-8'>Guest Stars
                        <div className='row'>
                          {e.guest_stars.map((el)=>{return(
                            
                            <div className='col-md-6'>
                              <div className='d-flex flex-row mb-2'>
                              <div className={`p-2 ${classes.profileImg}`}><img src={el.profile_path?`https://image.tmdb.org/t/p/w185${el.profile_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} alt=""/></div>
                              <div className={`p-2 ${classes.profileName}`}>
                                  <p>{el.original_name}</p>
                                  <p>{el.character}</p>
                                </div>
                              </div>
                            </div>
                          
                          )})
                            }</div>
                        </div>
                        <Link to={{pathname:`/tv/${param.id}/cast`}} className={`col-md-1 ${classes.epFullCastCrewHead}`} state={{ imgurl: imgurl, title: title, release_date: release_date }}>Full Cast &amp; Crew</Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          )
        })}</div>

      }

    </div>
  )
}

export default Episodes