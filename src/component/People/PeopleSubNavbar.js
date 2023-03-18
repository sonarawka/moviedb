import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Movie.module.css'

const PeopleSubNavbar = (props) => {
    const {profile_path, name, id} = props

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
  return (
    <div>
            <div className='d-flex justify-content-center my-2'>

                <div className="dropdown mx-4">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Overview
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={{ pathname: `/person/${id}` }} state={{ profile_path: profile_path, name:name }}>Main</Link></li>
                        
                        <li>
                            <Link className={`${classes.Fullcastcrew} dropdown-item`} to={{ pathname: `/person/${id}/translations` }} state={{ profile_path: profile_path, name:name }}>Translations</Link>
                        </li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Media
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={{ pathname: `/person/${id}/images` }} state={{ profile_path: profile_path, name:name }}>Profiles</Link></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Share
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item active" href="/" data-bs-toggle="modal" data-bs-target="#shareLink">Share Link</a></li>
                        <li><a className="dropdown-item" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https://themoviedb.com/person/${id}`} target="_blank">Facebook</a></li>
                        <li><a className="dropdown-item" rel="noreferrer" href={`https://twitter.com/intent/tweet?url=https://themoviedb.com/person/${id}&text=The%20Boys%20@themoviedb&related=themoviedb`} target="_blank">Tweet</a></li>
                    </ul>
                </div>
            </div>
            <div className="modal fade" id="shareLink" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Share {name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='mb-0 text-secondary'>URL</p>
                            <input value={`http://localhost:3000/person/${id}`} className='w-100 text-secondary px-2 py-1' id='myInput' onClick={onSelectHandler} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default PeopleSubNavbar