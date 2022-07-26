import React from 'react'
import Crousel from './Crousel'
import CardContainer from './Card/CardContainer'
import TvCardContainer from './Tvdetails/TvCardContainer'
import LatestTrailer from './LatestTrailer'

const Home = () => {
    return (
        <div>
            <Crousel />
            <div className='container'>
                
                <TvCardContainer key="4" title="Tv Trending" api='https://api.themoviedb.org/3/tv/popular?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US&page=1' />
                
                <CardContainer key="1" title="Now Playing" api='https://api.themoviedb.org/3/movie/now_playing?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US&page=1' />
                <CardContainer key="2" title="What's Popular" api='https://api.themoviedb.org/3/movie/popular?api_key=184d4ae5b2d8ff18eca3972237dc1b9f&language=en-US&page=1' />

                <LatestTrailer/>

                <CardContainer key="3" title="Trending" api='https://api.themoviedb.org/3/trending/all/day?api_key=184d4ae5b2d8ff18eca3972237dc1b9f' />
               
            </div>
        </div>
    )
}

export default Home