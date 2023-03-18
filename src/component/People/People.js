import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import KnownforContainer from './KnownforContainer'
import PeopleSubNavbar from './PeopleSubNavbar'


const People = () => {
    const param = useParams()
    const url = `https://api.themoviedb.org/3/person/${param.id}?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
    const [result, setresult] = useState(null)

    const loadApi = async () => {
        const fetchapi = await fetch(url)
        const response = await fetchapi.json()
        setresult(response)
      }

    useEffect(() => {
        loadApi()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

     
  return (
    <div>
        {result && <div>
        <PeopleSubNavbar name={result.name} profile_path={result.profile_path} id={result.id}/>
        <div className='container'>
            <div className='row'>
            <div className='col-md-3'>
                <img style={{borderRadius:"10px"}} width="100%" src={`https://image.tmdb.org/t/p/w342${result.profile_path}`} alt=""/>
            </div>
            <div className='col-md-9'>
                <h4 className='mb-4'><b>{result.name}</b></h4>
                <h5>Biography</h5>
                <p className='mb-3'>{result.biography}</p>
                <h5>Known For</h5>
                <KnownforContainer id={result.id}/>
            </div>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default People