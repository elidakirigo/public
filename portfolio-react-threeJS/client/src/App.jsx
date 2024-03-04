import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
	return (
		<main className=' bg-slate-300/20'>
			<Router>
				Navbar
				<Routes>
					<Route path='/' element={'Home'} />
					<Route path='/about' element={'About'} />
					<Route path='/project' element={'Project'} />
					<Route path='/contact' element={'Contact'} />
				</Routes>
			</Router>
		</main>
	)
}

export default App
