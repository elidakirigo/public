import React from 'react'
import './Banner.css'

export function Banner() {

	function trancate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string
	}
	return (
		<header className="Banner" style={{
			backgroundSize: 'cover',
			backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3321103.jpg&f=1&nofb=1&ipt=dd0c1b963fc934dff4a0bfda5c7a7ab7dfa4380ca443695b50558e4f5fc34ddf&ipo=images")`,
			backgroundPosition: 'center center'
		}}>
			<div className="banner__contents">
				<h1 className='banner__title'>movie name</h1>
				<div className='banner__buttons'>
					<button className='banner__button'>play</button>
					<button className='banner__button'>My List</button>
				</div>
				<h1 className='banner__description'>{trancate(' this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.this is a test description.', 150)}</h1>
			</div>
			<div className='banner--fadebutton' />
		</header>  
	)
}

// export default Banner;