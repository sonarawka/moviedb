import React from 'react'
import Recommendationitem from './Recommendationitem'


const Recommendationcontainer = (props) => {
  const {results}=props.Recommendation;
  return (
        <div className='scrollmenu'>
            <h5 className='my-3'><b>Recommendation</b></h5>
            {results.map((e)=>{return (<div key={e.id} style={{width:'25%'}} className='scrollmenuitem mx-2 my-2'> 
                <Recommendationitem id={e.id} original_name={e.original_title} profile_path={e.backdrop_path}/>
            </div>)})}
            
        </div>
  )
}

export default Recommendationcontainer