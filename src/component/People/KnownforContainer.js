import React, { useEffect, useState } from 'react'

const KnownforContainer = (props) => {
  const {id} =props
    const moviecredit = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
    const tvcredit = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US`
    const [result, setresult] = useState([])

    const loadMovieApi = async () => {
      const fetchmovieapi = await fetch(moviecredit)
      const response1 = await fetchmovieapi.json()
      setresult(result.concat(response1.cast))
      }

      const loadTvApi = async () => {
        const fetchtvapi = await fetch(tvcredit)
        const response2 = await fetchtvapi.json()
        setresult(result.concat(response2.cast))
        }

    useEffect(() => {
      loadMovieApi().then(()=>{
        loadTvApi()
      })
      
      }, [])
      console.log(result)
      
  return (
    <div>KnownforContainer</div>
  )
}

export default KnownforContainer