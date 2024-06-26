const allstacks = {
	HTML: { link: 'https://en.wikipedia.org/wiki/HTML', name: 'HTML' },
	BOOTSTRAP: {
		link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
		name: 'Bootstrap 5',
	},
}

const { HTML, BOOTSTRAP } = allstacks

const allPosts = [
	{
		topic: 'feature',
		link: 'https://pw-food-a.netlify.app/?',
		title: 'Shopping + NextAuth',
		content: ``,
		stacks: ['NextJS', 'nodeJS', 'Tailwind CSS', 'planetScale', 'stripe', 'NextAuth'],
		live: [true, 'https://pw-food-a.netlify.app/?'],
		source: [true, 'https://github.com/elidakirigo/progressive-web-app'],
		image: './assets/img/screenshots/ecommerce.png',
	},
	// ChickChickGo-🐔
	{
		topic: 'feature',
		link: 'https://pw-food-a.netlify.app/?',
		title: 'chickchickGo Browser Engine',
		content: ``,
		stacks: ['React', 'Tailwind CSS', 'Google API'],
		live: [true, 'https://pw-food-a.netlify.app/?'],
		source: [true, 'https://github.com/elidakirigo/progressive-web-app'],
		image: './assets/img/screenshots/ChickChickGo-🐔.png',
	},
	// Angular e-commerce store
	{
		topic: 'feature',
		link: 'https://pw-food-a.netlify.app/?',
		title: 'Shopping & Apparel App',
		content: ``,
		stacks: ['Angular 14', 'node JS', 'Tailwind CSS', 'Material UI', 'stripe'],
		live: [true, 'https://pw-food-a.netlify.app/?'],
		source: [true, 'https://github.com/elidakirigo/progressive-web-app'],
		image: './assets/img/screenshots/AngularStore.png',
	},
	// IP address tracker
	{
		topic: 'responsive',
		link: 'https://elidakirigo.github.io/real-estate/index.html',
		title: 'GeoLocation - IP tracker',
		content: ``,
		stacks: ['vueJS', 'TailwindCSS'],
		live: [true, 'https://elidakirigo.github.io/real-estate/index.html'],
		source: [true, 'https://github.com/elidakirigo/real-estate'],
		image: './assets/img/screenshots/IP-address-Tracker.png',
	},
	// Wordle Game
	{
		topic: 'feature',
		// link: 'https://github.com/elidakirigo/rails-api-authentication-crud',
		title: 'Wordle Game - Basic',
		content: ``,
		stacks: ['html', 'javascript', 'scss'],
		live: [true, 'https://worddle-2.netlify.app/'],
		source: [true, 'https://github.com/elidakirigo/wordle-game'],
		image: './assets/img/screenshots/Wordle-example-2.png',
	},
	// Electron App Desktop App
	{
		topic: 'feature',
		link: 'https://github.com/elidakirigo/hotel-booking-backend',
		title: 'Desktop App - Image Resizer ',
		content: ``,
		stacks: ['electron js'],
		live: [true, 'https://image-resizer-electron.netlify.app/renderer/'],
		source: [true, 'https://github.com/elidakirigo/electronApp'],
		image: './assets/img/screenshots/image-resizer.png',
	},
	// // Todo app
	{
		topic: 'responsive',
		link: 'https://elidakirigo.vercel.app/',
		title: 'Todos',
		content: ``,
		stacks: ['svelte', 'sveltekit', 'tailwind css'],
		live: [true, 'https://elidakirigo.vercel.app/'],
		source: [true, 'https://github.com/elidakirigo/elidakirigo-v1'],
		image: './assets/img/screenshots/todo-svelte.png',
	},

	// personal  portfolio
	{
		topic: 'feature',
		link: 'https://github.com/elidakirigo/Rails-Blog',
		title: 'Responsive Portfolio',
		content: ``,
		stacks: ['HTML', 'CSS', 'JS'],
		live: [true, 'https://github.com/elidakirigo/Rails-Blog'],
		source: [true, 'https://github.com/elidakirigo/Rails-Blog'],
		image: './assets/img/screenshots/Responsive-Portfolio-Website.png',
	},
	// // Youtube clone
	// {
	// 	topic: 'web',
	// 	link: 'https://elidakirigo.github.io/youtube_player_app/',
	// 	title: 'Youtube clone',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/youtube_player_app/'],
	// 	source: [true, 'https://github.com/elidakirigo/youtube_player_app'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209709562-40608166-33c0-435e-ad68-beba52c1164f.png',
	// },
	// // Math magician
	// {
	// 	topic: 'feature',
	// 	link: 'https://chriscacl.netlify.app/',
	// 	title: 'Math magician',
	// 	content: ``,
	// 	stacks: [
	// 		{
	// 			link: 'https://reactjs.org/docs/getting-started.html',
	// 			name: 'Reactjs',
	// 		},
	// 		{ link: 'https://en.wikipedia.org/wiki/HTML', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 	],
	// 	live: [true, 'https://chriscacl.netlify.app/'],
	// 	source: [true, 'https://github.com/elidakirigo/Math-magicians'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209716069-062bb3a5-1ea6-4a8b-86a2-7892ac029808.png',
	// },
	// // Recipe App
	// {
	// 	topic: 'feature',
	// 	link: 'https://github.com/elidakirigo/Recipe-app',
	// 	title: 'Recipe App',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.ruby-lang.org/es/', name: 'Ruby' },
	// 		{ link: 'https://guides.rubyonrails.org/', name: 'Rails' },
	// 		{ link: 'https://en.wikipedia.org/wiki/HTML', name: 'HTML' },
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 	],
	// 	live: [true, 'https://github.com/elidakirigo/Recipe-app'],
	// 	source: [true, 'https://github.com/elidakirigo/Recipe-app'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png',
	// },
	// // Portfolio website
	// {
	// 	topic: 'web',
	// 	link: 'https://elidakirigo.netlify.app/',
	// 	title: 'Portfolio website',
	// 	content: ``,
	// 	stacks: [
	// 		{
	// 			link: 'https://reactjs.org/docs/getting-started.html',
	// 			name: 'Reactjs',
	// 		},
	// 		{ link: 'https://redux.js.org/', name: 'Redux' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.netlify.app/'],
	// 	source: [true, 'https://github.com/elidakirigo/my-portfolio'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657844-94b71a71-f467-45e5-87f0-1f2e65c9642f.png',
	// },
	// // Budget App
	// {
	// 	topic: 'feature',
	// 	link: 'https://github.com/elidakirigo/Budget-app',
	// 	title: 'Recipe App',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.ruby-lang.org/es/', name: 'Ruby' },
	// 		{ link: 'https://guides.rubyonrails.org/', name: 'Rails' },
	// 		{ link: 'https://en.wikipedia.org/wiki/HTML', name: 'HTML' },
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 	],
	// 	live: [true, 'https://github.com/elidakirigo/Budget-app'],
	// 	source: [true, 'https://github.com/elidakirigo/Budget-app'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png',
	// },
	// // Napses Clone
	// {
	// 	topic: 'web',
	// 	link: 'https://elidakirigo.github.io/napses_clone/',
	// 	title: 'Napses Desktop clone',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/napses_clone/'],
	// 	source: [true, 'https://github.com/elidakirigo/napses_clone'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209715163-7875f85e-9b5c-4475-b71c-da59195c0bb2.png',
	// },
	// // .Leader-board
	// {
	// 	topic: 'feature',
	// 	link: 'https://elidakirigo.github.io/Leaderboard/dist/',
	// 	title: 'Leader-board',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/Leaderboard/dist/'],
	// 	source: [true, 'https://github.com/elidakirigo/Leaderboard/'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209706512-3513086d-bee8-4da8-8cdc-f312fd497357.png',
	// },
	// // Rest API TDD
	// {
	// 	topic: 'feature',
	// 	link: 'https://github.com/elidakirigo/tdd-rest-api',
	// 	title: 'TDD Rest-API',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.ruby-lang.org/es/', name: 'Ruby' },
	// 		{ link: 'https://guides.rubyonrails.org/', name: 'Rails' },
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 	],
	// 	live: [true, 'https://github.com/elidakirigo/tdd-rest-api'],
	// 	source: [true, 'https://github.com/elidakirigo/tdd-rest-api'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png',
	// },
	// // Personal website
	// {
	// 	topic: 'responsive',
	// 	link: 'https://github.com/elidakirigo/elidakirigo',
	// 	title: 'Personal Website',
	// 	content: ``,
	// 	stacks: [
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/elidakirigo/'],
	// 	source: [true, 'https://github.com/elidakirigo/elidakirigo'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657843-5270123e-d89b-4480-98d4-84d6a7a1a074.png',
	// },
	// // Portfolio mobile
	// {
	// 	topic: 'responsive',
	// 	link: 'https://elidakirigo.github.io/Portfolio-mobile/',
	// 	title: 'Mobile Portfolio',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/Portfolio-mobile/'],
	// 	source: [true, 'https://github.com/elidakirigo/Portfolio-mobile'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657847-0fece210-73f2-4e07-81ea-e5cbe391ccc9.png',
	// },
	// // House rental 2
	// {
	// 	topic: 'responsive',
	// 	link: 'https://elidakirigo.github.io/house_rental/',
	// 	title: 'House Renatl',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/house_rental/'],
	// 	source: [true, 'https://github.com/elidakirigo/house_rental'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209699847-d943b478-51d5-4413-b613-90a424c159a1.png',
	// },
	// // Catalog of things
	// {
	// 	topic: 'feature',
	// 	link: 'https://github.com/elidakirigo/Catalog-of-things',
	// 	title: 'TDD Rest-API',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.ruby-lang.org/es/', name: 'Ruby' },
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 	],
	// 	live: [true, 'https://github.com/elidakirigo/Catalog-of-things'],
	// 	source: [true, 'https://github.com/elidakirigo/Catalog-of-things'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209710207-edf76c66-5034-4cf0-aae4-6b1479663456.png',
	// },
	// // SpaceX
	// {
	// 	topic: 'feature',
	// 	link: 'https://space-x-traveler.netlify.app/',
	// 	title: 'SpaceX Traveler',
	// 	content: ``,
	// 	stacks: [
	// 		{
	// 			link: 'https://reactjs.org/docs/getting-started.html',
	// 			name: 'Reactjs',
	// 		},
	// 		{ link: 'https://redux.js.org/', name: 'Redux' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{
	// 			link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
	// 			name: 'Bootstrap 5',
	// 		},
	// 	],
	// 	live: [true, 'https://space-x-traveler.netlify.app/'],
	// 	source: [true, 'https://github.com/elidakirigo/Bookstore-CMS'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657850-efc6e2d6-249c-4e1e-84ad-d8adebabe9f2.png',
	// },
	// // .Todo list app
	// {
	// 	topic: 'feature',
	// 	link: 'https://elidakirigo.github.io/To-Do-List/dist',
	// 	title: 'Todo-list App',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/To-Do-List/dist'],
	// 	source: [true, 'https://github.com/elidakirigo/To-Do-List'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657853-1b59a194-c885-49ce-9729-5dcd47010347.png',
	// },
	// // web conferencing
	// {
	// 	topic: 'web',
	// 	link: 'https://elidakirigo.github.io/Conferencing-webiste/',
	// 	title: 'Web Conferencing',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/Conferencing-webiste/'],
	// 	source: [true, 'https://github.com/elidakirigo/capstone_project_one'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657842-eb0095ed-e8af-48f8-ac47-277991121ec7.png',
	// },
	// // Book store cms
	// {
	// 	topic: 'feature',
	// 	link: 'https://storebookcms.netlify.app/',
	// 	title: 'BookStore CMS',
	// 	content: ``,
	// 	stacks: [
	// 		{
	// 			link: 'https://reactjs.org/docs/getting-started.html',
	// 			name: 'Reactjs',
	// 		},
	// 		{ link: 'https://redux.js.org/', name: 'Redux' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 	],
	// 	live: [true, 'https://storebookcms.netlify.app/'],
	// 	source: [true, 'https://github.com/elidakirigo/Bookstore-CMS'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657836-0965c8de-8869-4308-b779-405bfa55cdc1.png',
	// },
	// // Breakout Game
	// {
	// 	topic: 'feature',
	// 	link: 'https://elidakirigo.github.io/100-days-of-javascript/breakout_game/dist/',
	// 	title: 'Breakout Game',
	// 	content: ``,
	// 	stacks: [
	// 		{ link: 'https://www.learn-html.org/', name: 'HTML' },
	// 		{ link: 'https://en.wikipedia.org/wiki/CSS', name: 'CSS' },
	// 		{ link: 'https://www.javascript.com/', name: 'JavaScript' },
	// 		{ link: 'https://webpack.js.org/', name: 'Webpack' },
	// 	],
	// 	live: [true, 'https://elidakirigo.github.io/100-days-of-javascript/breakout_game/dist/'],
	// 	source: [true, 'https://github.com/elidakirigo/100-days-of-javascript/tree/main/breakout_game'],
	// 	image: 'https://user-images.githubusercontent.com/101924220/209657840-44b0c28a-ddba-41d2-ace1-ac6b9be60c06.png',
	// },
]
