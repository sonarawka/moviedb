import React, { useEffect, useState } from 'react'
import Carditems from './Carditems'

const TvCardContainer = (props) => {
    const [results, setResults] = useState([])
    const api = props.api
    const loadpopular=async ()=> {
        const fetchApi = await fetch(api)
        const response = await fetchApi.json()
        const fetchresult = response.results 
        setResults(fetchresult)
    
    }

    useEffect(() => {
        loadpopular()
    }, [])
    
   
    // const fetchApi = 
  return (
        <div className='scrollmenu'>
            <h3 className='my-3'>{props.title}</h3>
            {results.map((result)=>{return (<div key={result.id} style={{width:'12%'}} className='scrollmenuitem mx-2 my-2'> 
                <Carditems id={result.id} title={result.title} release_date={result.release_date} rating={result.vote_average} poster={result.poster_path} first_air_date={result.first_air_date} name={result.name}/>
            </div>)})}
            
        </div>
  )
}

export default TvCardContainer