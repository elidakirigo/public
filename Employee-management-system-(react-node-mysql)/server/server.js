import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'

const app = express()
app.use(cors({ origin: ['http://localhost:5173'], methods: ['PUT', 'POST', 'GET'], credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'signup',
})

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/images')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
	},
})

const upload = multer({ storage: storage })

con.connect(function (err) {
	if (err) {
		console.log('Error in Connection')
	} else {
		console.log('Connected')
	}
})

app.get('/getEmployee', (req, res) => {
	const sql = 'SELECT * FROM employee'
	con.query(sql, (err, result) => {
		if (err) return res.json({ Error: 'Get employee error in sql' })
		return res.json({ Status: 'success', Result: result })
	})
})

app.get('/get/:id', (req, res) => {
	const id = req.params.id
	const sql = 'SELECT * FROM employee where id = ?'
	con.query(sql, [id], (err, result) => {
		if (err) return res.json({ Error: 'Get employee error in sql' })
		return res.json({ Status: 'success', Result: result })
	})
})

app.put('/update/:id', (req, res) => {
	// console.log(req.body);
	const id = req.params.id
	const sql = 'UPDATE employee set salary = ? WHERE id = ?'
	con.query(sql, [req.body.salary, id], (err, result) => {
		if (err) return res.json({ Error: 'Update employee error in sql' })
		return res.json({ Status: 'Success' })
	})
})

app.delete('/delete/:id', (req, res) => {
	const id = req.params.id
	const sql = 'Delete FROM employee WHERE id = ?'
	con.query(sql, [id], (err, result) => {
		if (err) return res.json({ Error: 'delete employee error in sql' })
		return res.json({ Status: 'Success' })
	})
})

const verifyUser = (req, res, next) => {
	const token = req.cookies.token
	if (!token) {
		return res.json({ Error: 'you are not authenticated' })
	} else {
		jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
			if (err) return res.json({ Error: 'Token wrong' })
			req.role = decoded.role
			req.id = decoded.id
			next()
		})
	}
}

app.get('/dashboard', verifyUser, (req, res) => {
	return res.json({ Status: 'Success', role: req.role, id:req.id })
})

app.post('/login', (req, res) => {
	const sql = 'SELECT * FROM admin WHERE email = ? AND password = ?'
	con.query(sql, [req.body.email, req.body.password], (err, result) => {
		if (err) return res.json({ status: 'Error in Server', Error: 'Error in running query' })
		if (result.length > 0) {
			// const id = result[0].id
			const token = jwt.sign({ role: 'admin' }, 'jwt-secret-key', { expiresIn: '6000000' })
			res.cookie('token', token)
			return res.json({ Status: 'success' })
		} else {
			return res.json({ Status: 'error', Error: 'wrong Email or password' })
		}
	})
})

app.post('/employeelogin', (req, res) => {
	const sql = 'SELECT * FROM employee WHERE email = ? '
	con.query(sql, [req.body.email], (err, result) => {
		if (err) return res.json({ status: 'Error in Server', Error: 'Error in running query' })

		if (result.length > 0) {
			bcrypt.compare(res.body.password.toString(), resuit[0].password, (err, response) => {
				if (err) return res.json({ Error: 'password error' })

				// const id = result[0].id
				const token = jwt.sign({ role: 'employee' , id: result[0].id}, 'jwt-secret-key', { expiresIn: '6000000' })
				res.cookie('token', token)
				return res.json({ Status: 'success' , id: result[0].id})
			})
		} else {
			return res.json({ Status: 'error', Error: 'wrong Email or password' })
		}
	})
})

// app.get('/employee/:id', (req, res) => {
// 	const id = req.params.id
// 	const sql = 'SELECT * FROM employee where id = ?'
// 	con.query(sql, [id], (err, result) => {
// 		if (err) return res.json({ Error: 'Get employee error in sql' })
// 		return res.json({ Status: 'success', Result: result })
// 	})
// })

app.get('/adminCount', (req, res) => {
	const sql = 'SELECT count(id) as admin FROM users'
	con.query(sql, (err, result) => {
		if (err) return res.json({ Error: 'Error in running query' })
		return res.json(result)
	})
})

app.get('/employeeCount', (req, res) => {
	const sql = 'SELECT count(id) as employee FROM employee'
	con.query(sql, (err, result) => {
		if (err) return res.json({ Error: 'Error in running query' })
		return res.json(result)
	})
})

app.get('/salary', (req, res) => {
	const sql = 'SELECT sum(salary) as SumOfSalary FROM employee'
	con.query(sql, (err, result) => {
		if (err) return res.json({ Error: 'Error in running query' })
		return res.json(result)
	})
})

app.get('/logout', (req, res) => {
	res.clearCookie('token')
	return res.json({ Status: 'success' })
})

app.post('/create', upload.single('image'), (req, res) => {
	// console.log(req.body)
	// console.log(req.file)
	const sql = 'INSERT INTO employee (`name`, `email`, `password`, `address`,`image`, `salary`) VALUES (?)'
	bcrypt.hash(req.body.password.toString(), 10, (err, hash) => {
		if (err) return res.json({ Error: 'Error in hashing password' })
		const values = [req.body.name, req.body.email, hash, req.body.address, req.file.filename, req.body.salary]
		con.query(sql, [values], (err, result) => {
			if (err) return res.json({ Error: 'Inside signup query' })
			return res.json({ Status: 'Success' })
		})
	})
})

app.listen(8081, () => {
	console.log('Running')
})
