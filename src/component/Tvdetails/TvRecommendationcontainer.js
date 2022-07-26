import React from 'react'
import TvRecommendationitem from './TvRecommendationitem'


const TvRecommendationcontainer = (props) => {
  const {results}=props.Recommendation;
  
  return (
        <div className='scrollmenu'>
            <h5 className='my-3'><b>Recommendation</b></h5>
            {results.map((e)=>{return (<div key={e.id} style={{width:'25%'}} className='scrollmenuitem mx-2 my-2'> 
                <TvRecommendationitem id={e.id} original_name={e.original_name} profile_path={e.backdrop_path}/>
            </div>)})}
            
        </div>
  )
}

export default TvRecommendationcontainer