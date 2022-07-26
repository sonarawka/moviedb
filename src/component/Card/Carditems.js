import React from 'react'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Carditems = (props) => {
    const { title, release_date, rating, poster, first_air_date, name } = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster}`
    const ratingInt = Math.round(rating * 10)
    const date =  release_date ? new Date(release_date).toDateString().slice(3) : new Date(first_air_date).toDateString().slice(3)
    const newtitle = title ? title : name

    return (
        <div>
            <div className="card border-0">
                <Link to={`/movies/${props.id}`}><img src={imageUrl} className="card-img-top" alt="..." /></Link>
                <div style={{height:"45px", width:"45px", position:"absolute", top:"200px", left:"5px"}}>
                    <CircularProgressbar styles={buildStyles({ backgroundColor: "black", pathColor: "green", textColor: "white", textSize: "30px", trailColor: "black" })} background backgroundPadding={6} value={ratingInt} text={`${ratingInt}%`} />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-wrap fs-6 fw-bold">{newtitle}</h5>
                    <p className="card-text fs-6 text-secondary">{date}</p>
                </div>

            </div>

        </div>
    )
}

export default Carditems;