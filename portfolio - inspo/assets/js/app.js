$(document).ready(function () {
	'use strict'

	// Sticky Menu
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 100) {
			$('.navbar').addClass('fixed-top')
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top')
		}
	})

	// Scroll back to top
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById('progress')
		let progressValue = document.getElementById('progress-value')
		let pos = document.documentElement.scrollTop
		let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
		let scrollValue = Math.round((pos * 100) / calcHeight)
		if (pos > 100) {
			scrollProgress.style.display = 'grid'
		} else {
			scrollProgress.style.display = 'none'
		}
		scrollProgress.addEventListener('click', () => {
			document.documentElement.scrollTop = 0
		})
		scrollProgress.style.background = `conic-gradient(#eb4a4a ${scrollValue}%, #171f38 ${scrollValue}%)`
	}

	window.onscroll = calcScrollValue
	window.onload = calcScrollValue

	// Hamburger Menu Trigger
	const trigger = document.getElementById('js-nav-trigger')
	trigger.addEventListener(
		'click',
		function (e) {
			e.preventDefault()
			trigger.classList.toggle('is-active')
		},
		false,
	)

	// Add smooth scrolling to all links
	$('.navbar-nav .nav-link').click(function () {
		$('html, body').animate(
			{
				scrollTop: $('#' + $(this).data('value')).offset().top - 89,
			},
			100,
		)
	})

	// kursor
	new kursor({
		type: 1,
		color: '#eb4a4a',
	})

	// mixitup
	var containerEl = document.querySelector('.auction-filter')
	var mixer = mixitup(containerEl)
})
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light')
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line')

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})
