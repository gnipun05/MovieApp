import React, {useState} from 'react'
import { getAllMovies, getAllshows, getProcessing } from '../../features/movies/movieSlice'
import { useSelector } from 'react-redux'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"
import Slider from "react-slick";
import { settings } from '../../common/settings'

const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllshows)
  const processingState = useSelector(getProcessing);

  let renderMovies = "", renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
    ) : (
      <div className="movies-error">
      <h3> {movies.Error} </h3>
    </div>
    ) 

  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
    ) : (
      <div className="shows-error">
      <h3> {shows.Error} </h3>
    </div>
    ) 

  return (
    <div className="movie-wrapper">
      { processingState === true ? ( 
        <div className="loading"> Loading... </div>
      ) : (
      <>
        <div className="movie-list">
          <h2> Movies </h2>
          <div className="movie-container">
            <Slider {...settings}>{renderMovies}</Slider>
          </div>
        </div>
        
        <div className="show-list">
          <h2> Shows </h2>
          <div className="shows-container">
            <Slider {...settings}>{renderShows}</Slider>
          </div>
        </div> 
      </>)}
    </div> 
  )
}

export default MovieListing