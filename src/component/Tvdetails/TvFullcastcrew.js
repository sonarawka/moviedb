import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import SubNavbar from '../SubNavbar'
import TvCrew from './TvCrew'
import classes from './TvFullcastcrew.module.css'

const TvFullcastcrew = (props) => {
    const param = useParams()
    const location = useLocation()

    const { imgurl, title, release_date } = location.state

    const [cast, setcast] = useState(null)
    const [crew, setcrew] = useState(null)

    const getCastCrew = async () => {
        const CCapi = `https://api.themoviedb.org/3/tv/${param.id}/credits?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`

        const fetchCCapi = await fetch(CCapi)
        const CCresponse = await fetchCCapi.json()
        setcast(CCresponse.cast)
        setcrew(CCresponse.crew)
    }
    // const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`

    useEffect(() => {
        getCastCrew()
    }, [])


    return (
        <div>
            <SubNavbar/>
            <div className={`${classes.ccbanner}`}>
                <div  className='container'>
                    <div className={`row mb-3`}>
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

            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4>Cast <span className='text-secondary'>{cast && cast.reduce((count, e) => count + 1, 0)}</span></h4>

                        {cast && cast.map((cast) => {
                            return (<div key={cast.credit_id} className="d-flex flex-row mb-2">
                                <div className={`p-2 ${classes.profileImg}`}><img src={cast.profile_path ? `https://image.tmdb.org/t/p/w185${cast.profile_path}` : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} /></div>
                                <div className={`p-2 ${classes.profileName}`}>
                                    <p><b>{cast.original_name}</b></p>
                                    <p>{cast.character}</p>
                                </div>
                            </div>)
                        })}

                    </div>
                    <div className='col-md-6'>
                        <h4>Crew <span className='text-secondary'>{crew && crew.reduce((count, e) => count + 1, 0)}</span></h4>
                        <TvCrew key='Art' crew={crew} department='Art' />
                        <TvCrew key='Directing' crew={crew} department='Directing' />
                        <TvCrew key='Editing' crew={crew} department='Editing' />
                        <TvCrew key='Production' crew={crew} department='Production' />
                        <TvCrew key='Sound' crew={crew} department='Sound' />
                        <TvCrew key='Visual' crew={crew} department='Visual Effects' />
                        <TvCrew key='Writing' crew={crew} department='Writing' />

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TvFullcastcrew