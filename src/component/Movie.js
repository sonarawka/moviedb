import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './Movie.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CastContainer from './Card/CastContainer';
import Tab from './Moviedetail/Tab';
import Media from './Moviedetail/Media';
import Recommendationcontainer from './Moviedetail/Recommendationcontainer';
import SubNavbar from './Moviedetail/SubNavbar';


const Movie = (props) => {
  const param = useParams()

  const [result, setresult] = useState(null)
  const [cast, setcast] = useState(null)
  const [crew, setcrew] = useState(null)
  const [social, setsocial] = useState(null)
  const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
 
  const getSocialApi = async ()=>{
    const url =`https://api.themoviedb.org/3/movie/${param.id}/external_ids?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setsocial(response)
  }

  const [Recommendation, setRecommendation] = useState(null)
  const loadApi = async () => {
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setresult(response)
  }

  const getCastCrew = async () => {
    const CCapi = `https://api.themoviedb.org/3/movie/${param.id}/credits?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

    const fetchCCapi = await fetch(CCapi)
    const CCresponse = await fetchCCapi.json()
    setcast(CCresponse.cast)
    setcrew(CCresponse.crew)
  }

  const getRecommendation = async () => {
    const Rapi = `https://api.themoviedb.org/3/movie/${param.id}/recommendations?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

    const fetchCCapi = await fetch(Rapi)
    const Rresponse = await fetchCCapi.json()
    setRecommendation(Rresponse)

  }
  
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    loadApi()
    getCastCrew()
    getRecommendation()
    getSocialApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <SubNavbar/>
      {result && social && crew && cast &&
        <div>
          
          <div className={classes.bgImg} style={{ backgroundImage: `linear-gradient(#333333cc, #333333ee), url('https://image.tmdb.org/t/p/w1280${result.backdrop_path}')` }}>
            <div className={`row ${classes.bannerContainer}`}>
              <div className='col-md-3'>
                <img className={classes.moviePoster} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`} alt=""/>

              </div>
              <div className='col-md-9 text-white py-5'>
                <h2 className={classes.movieTitle}><b>{result.original_title}</b> ({result.release_date.slice(0, 4)})</h2>
                <p> <span className={classes.movieRating}>TV-14</span> 02/04/2022 (US) &#9679; {(result.genres.map((e) => e.name + ', '))} &#9679; {Math.floor(result.runtime / 60) + 'h ' + (result.runtime % 60) + 'm'}</p>


                <div className="d-flex flex-row mb-3">
                  <div className={`p-2 ${classes.progressbar}`}><CircularProgressbar styles={buildStyles({ backgroundColor: "black", pathColor: "yellow", textColor: "white", textSize: "30px", trailColor: "#4d4d00" })} background backgroundPadding={6} value={Math.round(result.vote_average * 10)} text={`${Math.round(result.vote_average * 10)}%`} /></div>
                  <div className="p-2">User <br /> Score</div>
                  <div className={`p-2 mx-3 bg-dark ${classes.iconborder}`}><i className="fa-solid fa-list"></i></div>
                  <div className={`p-2 mx-3 bg-dark ${classes.iconborder}`}> <i className="fa-solid fa-heart"></i></div>
                  <div className={`p-2 mx-3 bg-dark ${classes.iconborder}`}><i className="fa-solid fa-bookmark"></i></div>
                  <div className={`p-2 mx-3 bg-dark ${classes.iconborder}`}><i className="fa-solid fa-star"></i></div>
                  <div className={`p-2 mx-3`}><i className="fa-solid fa-play"></i> Play trailer</div>
                </div>

                <p><i>{result.tagline}</i></p>
                <h5>Overview</h5>
                <p>{result.overview}</p>

                <div className='row'>
                  {crew && crew.filter((e) => e.job === 'Writer' || e.job === 'Director' || e.job === 'Screenplay').map((e) => {
                    return (
                      <div className='col-md-4'>
                        <h6><b>{e.original_name}</b></h6>
                        <p>{e.job}</p>
                      </div>
                    )
                  })}

                </div>

              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-md-9'>
                {cast && <CastContainer cast={cast} />}

                <p className='my-3'><Link className={`${classes.Fullcastcrew}`} to={{ pathname: `/movies/${param.id}/cast` }} state={{ imgurl: result.poster_path, title: result.original_title, release_date: result.release_date.slice(0, 4) }}>Full Cast &amp; Crew</Link></p>

                <hr />

                <Tab id={param.id} imgurl={result.poster_path} title={result.original_title} release_date={result.release_date.slice(0, 4)} />

                <hr />
                <Media id={param.id} />
                {Recommendation && <Recommendationcontainer Recommendation={Recommendation} />}
              </div>
              <div className='col-md-3'>
                <div className="fs-2">
                  {" "}
                  <a
                    href={`https://www.imdb.com/title/${social.imdb_id}`}
                    target="_blank" rel="noreferrer"
                  >
                    <i className="iconhover fa-brands fa-imdb mx-1"></i>
                  </a>{" "}
                  <a
                    href={`https://www.facebook.com/${social.facebook_id}`}
                    target="_blank" rel="noreferrer"
                  >
                    <i className="iconhover fa-brands fa-facebook mx-1"></i>
                  </a>{" "}
                  <a
                    href={`https://www.instagram.com/${social.instagram_id}`}
                    target="_blank" rel="noreferrer"
                  >
                    <i className="iconhover fa-brands fa-instagram mx-1"></i>
                  </a>{" "}
                  <a
                    href={`https://twitter.com/${social.twitter_id}`}
                    target="_blank" rel="noreferrer"
                  >
                    <i className="iconhover fa-brands fa-twitter mx-1"></i>
                  </a>{" "}
                </div>
                <p style={{ margin: "0" }}>
                  <strong>Status</strong>
                </p>
                <p>{result.status}</p>
                <p style={{ margin: "0" }}>
                  <strong>Original Language</strong>
                </p>
                <p>{result.original_language.toUpperCase()}</p>
                <p style={{ margin: "0" }}>
                  <strong>Budget</strong>
                </p>
                <p>{formatter.format(result.budget)}</p>
                <p style={{ margin: "0" }}>
                  <strong>Revenue</strong>
                </p>
                <p>{formatter.format(result.revenue)}</p>
              </div>
            </div>
          </div>
        </div>}

    </div>



  )
}

export default Movie