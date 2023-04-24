import React from 'react'
import './HomeScreen.css';
import { Nav } from './Nav';
import { Banner } from './Banner';

export function HomeScreen() {
	return (
		<div className='homescreen'>
			{/* nav */}
			<Nav />
			{/* banner */}
			<Banner />
			{/* row */}
		</div>
	)
}
// export default HomeScreen;