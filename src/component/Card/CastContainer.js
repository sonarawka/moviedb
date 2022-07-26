import React from 'react'
import Castitems from './Castitem'

const CastContainer = (props) => {

  return (
        <div className='scrollmenu'>
            <h5 className='my-3'><b>Top Billed Cast</b></h5>
            {props.cast.slice(0,9).map((e)=>{return (<div key={e.id} style={{width:'12%'}} className='scrollmenuitem mx-2 my-2'> 
                <Castitems id={e.id} original_name={e.original_name} profile_path={e.profile_path} character={e.character}/>
            </div>)})}
            
        </div>
  )
}

export default CastContainer