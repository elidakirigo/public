import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
function Employee() {
	const [data, setData] = useState([])
	useEffect(() => {
		Axios.get('http://localhost:8081/getEmployee')
			.then((res) => {
				if (res.data.Status === 'success') {
					setData(res.data.Result)
				} else alert('error')
			})
			.catch((err) => console.log(err))
	}, [])

	const handleDelete = (id)=>{
		Axios.delete('http://localhost:8081/delete/'+ id).then((res) => {
			if (res.data.Status === 'Success') {
				// NEW
				window.location.reload(true);
			} else alert('error')
		})
	}
	return (
		<div className='px-5 py-3'>
			<div className='d-flex justify-content-center'>
				<h3>Employee List</h3>
			</div>
			<Link to='/create' className='btn btn-success'>
				Add Employee
			</Link>
			<div className='mt-3'>
				<table className='table table-responsive'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Image</th>
							<th>Email</th>
							<th>Salary</th>
							<th>Address</th>
							<th>Call to Action</th>
							{/* <th>Delete</th> */}
						</tr>
					</thead>
					<tbody>
						{data.map((employee, index) => (
							<tr key={index}>
								<td>{employee.name}</td>
								<td>{<img src={`http://localhost:8081/images/` + employee.image} className='employee_image' />}</td>
								<td>{employee.email}</td>
								<td>{employee.salary}</td>
								<td>{employee.address}</td>
								<td>
									<Link to={`/employeeEdit/` + employee.id} className='btn btn-primary me-2 btn-sm'>
										edit
									</Link>
									<button className='btn btn-danger btn-sm' onClick={(e) => handleDelete(employee.id)}>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Employee
