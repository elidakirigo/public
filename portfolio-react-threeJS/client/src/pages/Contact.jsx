import { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Fox from '../models/Fox'
import Loader from '../components/Loader'
import UseAlert from '../hooks/UseAlert'
import Alert from '../components/Alert'

const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [isLoading, setIsLoading] = useState(false)
	const [currentAnimation, setCurrentAnimation] = useState('idle')

	const { alert, showAlert, hideAlert } = UseAlert()

	const handlechange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const handleFocus = () => setCurrentAnimation('walk')

	const handleBlur = () => {}

	const handleSubmit = (e) => {
		e.preventDefault()
		setCurrentAnimation('hit')
		setIsLoading(true)
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Elida',
					from_email: form.email,
					to_email: 'contact@example.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(() => {
				setIsLoading(false)
				// TODO: show success message
				showAlert({ show: true, text: 'Message sent successfully', type: 'success' })
				// TODO: Hide an alert

				setTimeout(() => {
					hideAlert()
					setCurrentAnimation('idle')
					setForm({ name: '', email: '', message: '' })
				}, [3000])

				setForm({ name: '', email: '', message: '' })
			})
			.catch((error) => {
				setIsLoading(false)
				setCurrentAnimation('idle')
				showAlert({ show: true, text: 'I didnt recieve your message', type: 'danger' })
				console.log(error)
				// TODO: show error message
			})
	}

	return (
		<section className='relative flex lg:flex-row flex-col max-container'>
			{alert.show && <Alert {...alert} />}
			<div className='flex-1 min-w-[50%] flex flex-col'>
				<h1 className='head-text'>Get in touch</h1>

				<form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
					<label className='text-black-500 font-semibold'>
						name
						<input type='text' name='name' className='input' placeholder='john' required value={form.name} onChange={handlechange} onFocus={handleFocus} onBlur={handleBlur} />
					</label>
					<label className='text-black-500 font-semibold'>
						Email
						<input type='email' name='email' className='input' placeholder='elida@gmail.com' required value={form.email} onChange={handlechange} onFocus={handleFocus} onBlur={handleBlur} />
					</label>
					<label className='text-black-500 font-semibold'>
						Your message
						<textarea name='message' className='textarea' placeholder='let me know how i can help you!' required value={form.message} onChange={handlechange} onFocus={handleFocus} onBlur={handleBlur}></textarea>
					</label>
					<button type='submit' className='btn' onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
						{isLoading ? 'Sending...' : 'Send Message'}
					</button>
				</form>
			</div>
			<div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
				<Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
					<directionalLight intensity={2.5} position={[0, 0, 1]} />
					<ambientLight intensity={0.5} />
					<Suspense fallback={<Loader />}>
						<Fox position={[0.5, 0.35, 0]} rotation={[12.6, -0.6, 0]} scale={[0.5, 0.5, 0.5]} currentAnimation={currentAnimation} />
					</Suspense>
				</Canvas>
			</div>
		</section>
	)
}

export default Contact
