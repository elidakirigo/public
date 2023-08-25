import { useState } from 'react'
import './App.css'
import Login from './login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Profile from './Profile'
import Home from './home'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import Start from './start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './Employee.login'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard />}>
					<Route path='/home' element={<Home />}></Route>
					<Route path='/profile' element={<Profile />}></Route>
					<Route path='/create' element={<AddEmployee />}></Route>
					<Route path='/employee' element={<Employee />}></Route>
					<Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
				</Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/employeelogin' element={<EmployeeLogin />}></Route>
				<Route path='/start' element={<Start />}></Route>
				<Route path='/employeeDetail/:id' element={<EmployeeDetail />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
