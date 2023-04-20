import React, { useEffect, useState } from 'react'
import './Nav.css';

export function Nav(props) {

	const [show, handleShow] = useState(false)

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar)
		// clean up functionality
		return () => window.removeEventListener('scroll', transitionNavBar)
	}, [])
	return (
		<div className='nav nav__black'>
			<div className='nav__contents'>
				<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fnetflix-logo-drawing-png-19.png&f=1&nofb=1&ipt=72b0eb3a46dca78ff9c7521a6ecc7d766018fcfe9177fe03404431edaafe74d8&ipo=images" className='nav__logo' alt="" />
				<img src="https://i2.wp.com/dumbosdiary.com/wp-content/uploads/2017/04/digital-painting-profile-pic.jpg?w=579&h=579&crop=1&ssl=1" className='nav__avatar' alt="" />
			</div>
		</div>
	)
}
