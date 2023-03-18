import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import classes from '../Movie.module.css'

const SubNavbar = () => {
    const [result, setresult] = useState(null)
    const param = useParams()
    const url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
    const loadApi = async () => {
        const fetchapi = await fetch(url)
        const response = await fetchapi.json()
        setresult(response)
    }

    const onSelectHandler = (event) => {
        var copyText = document.getElementById("myInput");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
    }

    useEffect(() => {
        loadApi()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {result && <div className='d-flex justify-content-center my-2'>

                <div className="dropdown mx-4">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Overview
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={{ pathname: `/movies/${param.id}` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4), type: "backdrops" }}>Main</Link></li>
                        <li>
                            <Link className={`${classes.Fullcastcrew} dropdown-item`} to={{ pathname: `/movies/${param.id}/titles` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4) }}> Altenative Titles</Link>
                        </li>
                        <li>
                            <Link className={`${classes.Fullcastcrew} dropdown-item`} to={{ pathname: `/movies/${param.id}/cast` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4) }}> Cast Crew</Link>
                        </li>
                    
                        <li>
                            <Link className={`${classes.Fullcastcrew} dropdown-item`} to={{ pathname: `/movies/${param.id}/translations` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4) }}>Translations</Link>
                        </li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Media
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={{ pathname: `/movies/${param.id}/images` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4), type: "backdrops" }}>Backdrop</Link></li>

                        <li><Link className="dropdown-item" to={{ pathname: `/movies/${param.id}/images` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4), type: "logos" }}>Logos</Link></li>

                        <li><Link className="dropdown-item" to={{ pathname: `/movies/${param.id}/images` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4), type: "posters" }}>Posters</Link></li>

                        <li><Link className="dropdown-item" to={{ pathname: `/movies/${param.id}/videos` }} state={{ imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4) }}>Videos</Link></li>
                    </ul>
                </div>

                <div className="dropdown mx-4">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fandom
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <Link className={`${classes.AllReview} dropdown-item active`} to={{ pathname: `/movies/${param.id}/review` }} state={{ id: param.id, imgurl: result.poster_path, title: result.original_name, release_date: result.release_date.slice(0, 4) }}>Reviews</Link>
                        </li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Share
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item active" href="/" data-bs-toggle="modal" data-bs-target="#shareLink">Share Link</a></li>
                        <li><a className="dropdown-item" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://themoviedb.com/movies/${param.id}`} target="_blank">Facebook</a></li>
                        <li><a className="dropdown-item" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=https://themoviedb.com/movies/${param.id}&text=The%20Boys%20@themoviedb&related=themoviedb`} target="_blank">Tweet</a></li>
                    </ul>
                </div>
            </div>}
            {result && <div className="modal fade" id="shareLink" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Share {result.original_name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='mb-0 text-secondary'>URL</p>
                            <input value={`http://localhost:3000/movies/${param.id}`} className='w-100 text-secondary px-2 py-1' id='myInput' onClick={onSelectHandler} />
                        </div>

                    </div>
                </div>
            </div>}
        </div>
    )
}

export default SubNavbar