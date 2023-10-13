import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import "./Header.scss"
import { useDispatch } from 'react-redux'
import { fetchAsyncshows, fetchAsyncMovies } from '../../features/movies/movieSlice'

const Header = () => {
  const [term, setTerm]=useState('Friends')
  const dispatch = useDispatch()

  const getSearchTerm = () => {
    if(term === '') 
      return alert('Please Enter the Data to Search')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncshows(term))
    setTerm('')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    getSearchTerm()
  }

  useEffect(() => {
    getSearchTerm()
  }, []) 

  return (
    <div className='header'>
      <div className='Logo'>
        <Link to="/MovieApp"> Movie App </Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            value={ term } 
            placeholder='Search Movies or Shows' 
            onChange={(e) => setTerm(e.target.value)}/>
  
            <button type="submit">
              <i className='fa fa-search'></i>
            </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt='user' /> 
      </div>
    </div>
  )
} 

export default Header 