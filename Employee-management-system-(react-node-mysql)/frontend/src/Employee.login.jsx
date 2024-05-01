import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function EmployeeLogin() {
	const [values, setValues] = useState({ email: '', password: '' })
	const [error, setError] = useState('')

	axios.defaults.withCredentials = true

	const navigate = useNavigate()

	axios.defaults.withCredentials = true

	const handleSubmit = (event) => {
		event.preventDefault()
		Axios.post('http://localhost:8081/employeelogin', values)
			.then((res) => {
				if (res.data.Status === 'success') {
					const id = res.data.id
					navigate('/employeeDetail' + id)
				} else {
					setError(res.data.Error)
				}
			})
			.catch((err) => console.log(err))
	}

	return (
		<div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
			<div className=' p-3 rounded w-25 border loginForm'>
				<div className='text-danger'>{error && error}</div>
				<h2>Employee Login</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-3'>
						<label htmlFor='email'>
							<strong>Email</strong>
						</label>
						<input type='email' placeholder='Enter Email' name='email' className='form-control rounded-0' onChange={(e) => setValues({ ...values, email: e.target.value })} />
					</div>
					<div className='mb-3'>
						<label htmlFor='password'>
							<strong>Password</strong>
						</label>
						<input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e) => setValues({ ...values, password: e.target.value })} />
					</div>
					<button type='submit' className='btn btn-success w-100 rounded-0'>
						Log in
					</button>
					<p>You agree to our terms and policies</p>
				</form>
			</div>
		</div>
	)
}

export default EmployeeLogin
