import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

 function Banner() {

	const [movie, setMovie] = useState([])

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals)
			setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])

			return request
		}
		fetchData()
	}, [])

	function trancate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string
	}
	return (
		<header className="Banner" style={{
			backgroundSize: 'cover',
			backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			backgroundPosition: 'center center'
		}}>
			<div className="banner__contents">
				<h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>{trancate(movie?.overview, 150)}</h1>
			</div>
			<div className='banner--fadebutton' />
		</header>
	)
}

export default Banner;