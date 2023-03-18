import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieSearch = () => {
    const param = useParams()
    const movieurl = `
    https://api.themoviedb.org/3/search/movie?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&query=${param.query}&page=1&include_adult=false`
    const [movieresult, setmovieresult] = useState(null)
    const [tvresult, settvresult] = useState(null)
    const [peopleresult, setpeopleresult] = useState(null)

    const loadmovieApi = async () => {
        const fetchapi = await fetch(movieurl)
        const response = await fetchapi.json()
        setmovieresult(response.results)
    }

    const tvurl = `
    https://api.themoviedb.org/3/search/tv?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&query=${param.query}&page=1&include_adult=false`

    const loadtvApi = async () => {
        const fetchapi = await fetch(tvurl)
        const response = await fetchapi.json()
        settvresult(response.results)
    }

    const peopleurl = `
    https://api.themoviedb.org/3/search/person?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&query=${param.query}&page=1&include_adult=false`

    const loadpeopleApi = async () => {
        const fetchapi = await fetch(peopleurl)
        const response = await fetchapi.json()
        setpeopleresult(response.results)
    }

    useEffect(() => {
        loadmovieApi()
        loadtvApi()
        loadpeopleApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>

            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <div className="d-flex align-items-start">
                            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Movies</button>
                                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">TV</button>

                                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">People</button>

                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                    {movieresult && movieresult.map((e) => {
                                        return (
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-1">
                                                        <img src={e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-11">
                                                        <div className="card-body">
                                                            <h5 className="card-title mb-0">{e.original_title}</h5>
                                                            <p className="card-text mb-1"><small className="text-muted">{new Date(e.release_date).toDateString()}</small></p>
                                                            <p style={{ fontSize: "14px" }} className="card-text">{e.overview.slice(0, 250) + "...."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                {tvresult && tvresult.map((e) => {
                                        return (
                                            <div className="card mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-1">
                                                        <img src={e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`} className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-11">
                                                        <div className="card-body">
                                                            <h5 className="card-title mb-0">{e.original_name}</h5>
                                                            <p className="card-text mb-1"><small className="text-muted">{new Date(e.first_air_date).toDateString()}</small></p>
                                                            <p style={{ fontSize: "14px" }} className="card-text">{e.overview.slice(0, 250) + "...."}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                                {peopleresult && peopleresult.map((e) => {
                                        return (
                                            <div className="mb-3">
                                                <div className="row g-0">
                                                    <div className="col-md-2">
                                                        <img width="100%" src={e.profile_path?`https://image.tmdb.org/t/p/w100_and_h100_face${e.profile_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} className="img-fluid rounded-3" alt="..." />
                                                    </div>
                                                    <div className="col-md-10 ps-3">
                                                        <div className="card-body">
                                                            <h5 className="card-title mb-0">{e.name}</h5>
                                                            <p className="card-text mb-1"><small className="text-muted">{e.known_for_department}</small></p>
                                                            <p style={{ fontSize: "14px" }} className="card-text">{
                                                                e.known_for.map((el, index)=>{return(
                                                                    <span>{index===0?"":", "}
                                                                        {el.original_name?el.original_name:el.original_title}
                                                                    </span>
                                                                )})
                                                            }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieSearch