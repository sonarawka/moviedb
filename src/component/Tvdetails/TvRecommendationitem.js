import React from 'react'
import { Link } from 'react-router-dom'

const TvRecommendationitem = (props) => {
    const { id, original_name, profile_path} = props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`
    return (
        <div>
            <div className="card border-0">

                <Link to={`/movies/${props.id}`}>

                {profile_path && <img src={imageUrl} className="card-img-top" alt="..." />}
                {!profile_path && <div><img src="https://www.kindpng.com/picc/m/576-5764514_unavailable-icon-hd-png-download.png" className="card-img-top" alt="..." /></div>}
                

                </Link>
                <div className="card-body">
                    <h5 className="card-title text-wrap fs-6 fw-bold">{original_name}</h5>
                </div>

            </div>

        </div>
    )
}

export default TvRecommendationitem;