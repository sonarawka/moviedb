import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import AllReview from './component/Moviedetail/AllReview'
import Fullcastcrew from './component/Fullcastcrew'
import Home from './component/Home'
import Movie from './component/Movie'
import Navbar from './component/Navbar'
import Tv from './component/Tv'
import Footer from './component/Footer'
import TvFullcastcrew from './component/Tvdetails/TvFullcastcrew'
import TvAllReview from './component/Tvdetails/TvAllReview'
import Videos from './component/Tvdetails/Videos'
import Images from './component/Tvdetails/Images'
import MovieImages from './component/Moviedetail/Images'
import AlternativeTitle from './component/Tvdetails/AlternativeTitle'
import Translation from './component/Tvdetails/Translation'
import TvSeasons from './component/Tvdetails/TvSeasons'
import Episodes from './component/Tvdetails/Episodes'
import MovieVideos from './component/Moviedetail/MovieVideos'
import MovieAlternativeTitle from './component/Moviedetail/MovieAlternativeTitle'
import MovieTranslation from './component/Moviedetail/MovieTranslation'
import People from './component/People/People'
import MovieSearch from './component/Search/MovieSearch'
import NavMovie from './component/NavContent/NavMovie'
import NavTv from './component/NavContent/NavTv'
import NavPerson from './component/NavContent/NavPerson'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<NavMovie />} />
          <Route path="/tvs" element={<NavTv/>} />
          <Route path="/persons" element={<NavPerson/>} />

          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/cast" element={<Fullcastcrew />} />
          <Route path="/movies/:id/review" element={<AllReview />} />
          <Route path="/movies/:id/images" element={<MovieImages/>} />
          <Route path="/movies/:id/videos" element={<MovieVideos/>} />
          <Route path="/movies/:id/titles" element={<MovieAlternativeTitle/>} />
          <Route path="/movies/:id/translations" element={<MovieTranslation/>} />
          <Route path="/search/:query" element={<MovieSearch/>} />
          <Route path="/person/:id" element={<People />} />
          <Route path="/tv/:id/review" element={<TvAllReview />} />
          <Route path="/tv/:id" element={<Tv />} />
          <Route path="/tv/:id/cast" element={<TvFullcastcrew/>} />
          <Route path="/tv/:id/videos" element={<Videos/>} />
          <Route path="/tv/:id/images" element={<Images/>} />
          <Route path="/tv/:id/titles" element={<AlternativeTitle/>} />
          <Route path="/tv/:id/translations" element={<Translation/>} />
          <Route path="/tv/:id/seasons" element={<TvSeasons/>} />
          <Route path="/tv/:id/episodes" element={<Episodes/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App