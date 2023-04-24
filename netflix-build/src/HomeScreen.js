import React from 'react'
import './HomeScreen.css';
import { Nav } from './Nav';
import  Row  from './Row';
import  Banner from './Banner';
import requests from './request'

export function HomeScreen() {
	return (
		<div className='homescreen'>
			{/* nav */}
			<Nav />
			{/* banner */}
			<Banner />
			{/* row */}
			<Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
			<Row title='trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.RomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
		</div>
	)
}
// export default HomeScreen;