import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Castitem.module.css'

const Castitem = (props) => {
    const { original_name, profile_path, character} = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`
    return (
        <div>
            <div className="card border-0">
                <Link to={`/person/${props.id}`}><img src={imageUrl} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title text-wrap fs-6 fw-bold">{original_name}</h5>
                    <p className={`card-text text-wrap ${classes.character}`}>{character}</p>
                </div>

            </div>

        </div>
    )
}

export default Castitem;