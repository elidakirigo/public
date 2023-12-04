const Section = (props) => {
	const { children } = props

	return <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>{children}</section>
}
export const Interface = () => {
	return (
		<div className='flex flex-col items-center w-screen'>
			<AboutSection/>
			<SkillsSection/>
			<Section>
				<h1>Projects</h1>
			</Section>
			<Section>
				<h1>Contacts</h1>
			</Section>
		</div>
	)
}

const AboutSection = () => {
	return (
		<Section>
			<h1 className='text-6xl font-extrabold leading-snug'>
				Hi, I'm <br />
				<span className='bg-white px-1 italic'>Elida wanjiku</span>
			</h1>
			<p className='text-lg text-gray-600 mt-4'>I Make Youtube videos to help developers</p>
		</Section>
	)
}

const skills = [
	{}
]
const SkillsSection = ()=>{

}