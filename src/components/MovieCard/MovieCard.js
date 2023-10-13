import React from 'react'
import "./MovieCard.scss"
import { Link } from 'react-router-dom'

export const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to = {`/movie/${data.imdbID}`}>
        <div className="class-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title.length >= 40 ? data.Title.substr(0,40) + "..." : data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard