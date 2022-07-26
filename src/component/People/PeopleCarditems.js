import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const PeopleCarditems = (props) => {
    const { title, poster, name } = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`
    return (
        <div>
            <div className="card border-0">
                <Link to={`/person/${props.id}`}><img src={imageUrl} className="card-img-top" alt="..." /></Link>
               
                <div className="card-body">
                    <h5 className="card-title text-wrap fs-6 fw-bold">{name}</h5>
                    <p className="card-text fs-6 text-secondary">{title}</p>
                </div>

            </div>

        </div>
    )
}

export default PeopleCarditems;