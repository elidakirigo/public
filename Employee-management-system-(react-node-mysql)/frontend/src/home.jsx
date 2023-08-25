import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Home() {
	const [adminCount, setAdminCount] = useState()
	const [employeeCount, setemployeeCount] = useState()
	const [salary, setSalary] = useState()

	useEffect(() => {
		axios
			.get('http://localhost:8081/adminCount')
			.then((res) => {
				setAdminCount(res.data[0].admin)
				// console.log(res);
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:8081/employeeCount')
			.then((res) => {
				setemployeeCount(res.data[0].employee)
				// console.log(res); 
			})
			.catch((err) => console.log(err))

		axios
			.get('http://localhost:8081/salary')
			.then((res) => {
				setSalary(res.data[0].SumOfSalary)
				// console.log(res);
			})
			.catch((err) => console.log(err))
	})
	return (
		<div>
			<div className='p-3 d-flex justify-content-around'>
				<div className='p-3 border shadow-sm w-25'>
					<div className='text-center pb-1'>
						<h4>Admin</h4>
					</div>
					<hr />
					<div className='text-center'>
						<h5>Total : {adminCount}</h5>
					</div>
				</div>
				<div className='p-3 border shadow-sm w-25'>
					<div className='text-center pb-1'>
						<h4>Employee</h4>
					</div>
					<hr />
					<div className='text-center'>
						<h5>Total : {employeeCount}</h5>
					</div>
				</div>
				<div className='p-3 border shadow-sm w-25'>
					<div className='text-center pb-1'>
						<h4>Salary</h4>
					</div>
					<hr />
					<div className='text-center'>
						<h5>Total : {salary}</h5>
					</div>
				</div>
			</div>
			{/* list of admin */}
			<div className='mt-4 px-5 pt-3'>
				<h3>List of Admin</h3>
				<table className='table'>
					<thead>
						<tr>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Admin</td>
							<td>Admin</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Home
