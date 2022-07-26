import React from 'react'
import classes from './Fullcastcrew.module.css'
const Crew = (props) => {
    const {crew, department} = props;
  return (
    <div>
        <p><b>{department}</b></p>
                {crew && crew.filter((e)=> {return (e.department===department)}).map((e)=>{return(
                    <div key={e.credit_id} className="d-flex flex-row mb-2">
                    <div className={`p-2 ${classes.profileImg}`}><img src={e.profile_path?`https://image.tmdb.org/t/p/w185${e.profile_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`}/></div>
                    <div className={`p-2 ${classes.profileName}`}>
                        <p><b>{e.original_name}</b></p>
                        <p>{e.job}</p>
                    </div>
                </div>
                )})}
    </div>
  )
}

export default Crew