import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from './Movie.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CastContainer from './Card/CastContainer';
import TvTab from './Tvdetails/TvTab';
import TvMedia from './Tvdetails/TvMedia';
import TvRecommendationcontainer from './Tvdetails/TvRecommendationcontainer';
import SubNavbar from './SubNavbar';


const Tv = () => {
  const param = useParams()
  const [keyword, setkeyword] = useState(null)
  const [result, setresult] = useState(null)
  const [cast, setcast] = useState(null)
  const [crew, setcrew] = useState(null)
  const [social, setSocial] = useState(null)
  const url = `https://api.themoviedb.org/3/tv/${param.id}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

  const getKeyword = async () => {
    const url = `https://api.themoviedb.org/3/tv/${param.id}/keywords?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setkeyword(response)
  }

  const getSocialApi = async () => {
    const url = `https://api.themoviedb.org/3/tv/${param.id}/external_ids?api_key=184d4ae5b2d8ff18eca3972237dc1b9f`
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setSocial(response)
  }

  const [Recommendation, setRecommendation] = useState(null)
  const loadApi = async () => {
    const fetchapi = await fetch(url)
    const response = await fetchapi.json()
    setresult(response)
  }

  const getCastCrew = async () => {
    const CCapi = `https://api.themoviedb.org/3/tv/${param.id}/credits?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

    const fetchCCapi = await fetch(CCapi)
    const CCresponse = await fetchCCapi.json()
    setcast(CCresponse.cast)
    setcrew(CCresponse.crew)
  }

  const getRecommendation = async () => {
    const Rapi = `https://api.themoviedb.org/3/tv/${param.id}/recommendations?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

    const fetchCCapi = await fetch(Rapi)
    const Rresponse = await fetchCCapi.json()
    setRecommendation(Rresponse)

  }

  useEffect(() => {
    loadApi()
    getCastCrew()
    getRecommendation()
    getSocialApi()
    getKeyword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (

    <div className="">
      {result && keyword && crew && social && cast && <div>
      <SubNavbar/>

      {result &&
        <div>
          <div className={classes.bgImg} style={{ backgroundImage: `linear-gradient(#333333cc, #333333ee), url('https://image.tmdb.org/t/p/w1280${result.backdrop_path}')` }}>
            <div className={`row ${classes.bannerContainer}`}>
              <div className='col-md-3'>
                <img className={classes.moviePoster} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}`} alt=""/>

              </div>
              <div className='col-md-9 text-white py-5'>
                <h2 className={classes.movieTitle}><b>{result.original_name}</b> ({result.first_air_date.slice(0, 4)})</h2>
                <p> <span className={classes.movieRating}>TV-14</span> 02/04/2022 (US) &#9679;
                  {(result.genres.map((e) => e.name + ', '))}
                  &#9679; {Math.floor(result.last_episode_to_air.runtime / 60) + 'h ' + (result.last_episode_to_air.runtime % 60) + 'm'}
                </p>


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

                <p className='my-3'><Link className={`${classes.Fullcastcrew}`} to={{ pathname: `/tv/${param.id}/cast` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.first_air_date.slice(0, 4) }}>Full Cast &amp; Crew</Link></p>

                <hr />

                <TvTab id={param.id} imgurl={result.poster_path} title={result.original_name} release_date={result.first_air_date.slice(0, 4)} />

                <hr />
                <TvMedia id={param.id} />
                {Recommendation && <TvRecommendationcontainer Recommendation={Recommendation} />}
              </div>
              <div className='col-md-3'>
                {social && <div className='fs-2'>
                  <a href={`https://www.facebook.com/${social.imdb_id}`}><i className="fa-brands fa-imdb mx-2"></i></a>
                  <a href={`https://www.facebook.com/${social.facebook_id}`}><i className="fa-brands fa-facebook mx-2"></i></a>
                  <a href={`https://www.facebook.com/${social.instagram_id}`}><i className="fa-brands fa-instagram mx-2"></i></a>
                  <a href={`https://www.facebook.com/${social.twitter_id}`}><i className="fa-brands fa-twitter mx-2"></i></a>
                </div>}

                <p className='mt-2'><b>Status</b><br />{result.status}</p>
                <p className='mt-2'><b>Original Language</b><br />{result.original_language.toUpperCase()}</p>
                <p className='my-2'><b>Keywords</b></p>
                <div>{keyword && keyword.results.slice(0, 21).map((e) => {
                  return (
                    <p className='mx-1 my-1' style={{ padding: "3px 8px", fontSize: "12px", backgroundColor: "rgba(0,0,0,0.1)", display: "inline-block" }}>{e.name}</p>
                  )
                })}</div>

                <hr className='mt-4' />
              </div>
            </div>
          </div>
        </div>}
        </div>}

    </div>



  )
}

export default Tv