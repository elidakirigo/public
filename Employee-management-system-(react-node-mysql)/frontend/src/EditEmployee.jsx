import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function EditEmployee() {
	const [data, setData] = useState({ name: '', email: '', address: '', salary: '' })
	const navigate = useNavigate()
	const { id } = useParams()
	useEffect(() => {
		Axios.get('http://localhost:8081/get/' + id)
			.then((res) => {
				setData({ ...data, name: res.data.Result[0].name, email: res.data.Result[0].email, address: res.data.Result[0].address, salary: res.data.Result[0].salary })
				console.log(res)
			})
			.catch((err) => console.log(err))
	}, [])

	const handleSubmit = (event) => {
		event.preventDefault()

		Axios.put('http://localhost:8081/update/' + id, data)
			.then((res) => {
				if (res.data.Status === 'Success') {
					navigate('/employee')
				}
			})
			.catch((err) => console.log(err))
	}
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Employee</h2>
			<form className='row g-3 w-50' onSubmit={handleSubmit}>
				<div className='col-12'>
					<label htmlFor='inputname4' className='form-label'>
						Name
					</label>
					<input type='Name' className='form-control' id='inputname4' placeholder='Enter name' onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
				</div>
				<div className='col-12'>
					<label htmlFor='inputEmail4' className='form-label'>
						Email
					</label>
					<input type='email' className='form-control' id='inputEmail4' placeholder='Enter Email' onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} />
				</div>
				<div className='col-12'>
					<label htmlFor='inputAddress' className='form-label'>
						Address
					</label>
					<input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' onChange={(e) => setData({ ...data, Address: e.target.value })} value={data.address} />
				</div>
				<div className='col-12'>
					<label htmlFor='inputSalary' className='form-label'>
						Salary
					</label>
					<input type='text' className='form-control' id='inputSalary' placeholder='Enter salary' onChange={(e) => setData({ ...data, salary: e.target.value })} value={data.salary} />
				</div>
				<div className='col-12'>
					<button type='submit' className='btn btn-primary'>
						Update
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditEmployee
