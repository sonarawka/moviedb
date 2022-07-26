import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Carditems from '../Card/Carditems'

const NavMovie = () => {
    const [pageno, setpageno] = useState(1)

    const [page, setpage] = useState(1)
    const [results, setResults] = useState([])
    const loadpopular = async () => {
        let api = `https://api.themoviedb.org/3/movie/popular?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US&page=${pageno}`
        const fetchApi = await fetch(api)
        const response = await fetchApi.json()
        const fetchresult = response
        setResults(results.concat(fetchresult.results))
        setpageno(pageno + 1)
        setpage(fetchresult.total_pages)
    }

    useEffect(() => {
        loadpopular()

    }, [])

    return (
        <div className='container'>
            <InfiniteScroll
                dataLength={results.length}
                next={loadpopular}
                hasMore={pageno < page ? true : false}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
>
                
                <div className='row'>
                    <h3 className='my-3'>Popular Movies</h3>
                    {results.map((result) => {
                        return (<div key={result.id} style={{ width: '12%' }} className='col-md-2 mx-2 my-2'>
                            <Carditems id={result.id} title={result.title} release_date={result.release_date} rating={result.vote_average} poster={result.poster_path} first_air_date={result.first_air_date} name={result.name} />
                        </div>)
                    })}

                </div>
            </InfiniteScroll>
        </div>
    )
}

export default NavMovie