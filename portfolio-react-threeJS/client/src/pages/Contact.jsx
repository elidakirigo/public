import { useRef, useState } from 'react'

const Contact = () => {
	const formRef = useRef(null)
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [isLoading, setIsLoading] = useState(false)

	const handlechange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleFocus = () => {}

	const handleBlur = () => {}

	const handleSubmit = () => {}

	return (
		<section className='relative flex lg:flex-row flex-col max-container'>
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
						{isLoading ? 'Sending...' : 'Sending Message'}
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact
