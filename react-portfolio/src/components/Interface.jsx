const Section = (props) => {
	const { children } = props

	return <section>{children}</section>
}
export const Interface = () => {
	return (
		<>
			<Section>
				<h1>About</h1>
			</Section>
			<Section>
				<h1>Skills</h1>
			</Section>
			<Section>
				<h1>Projects</h1>
			</Section>
			<Section>
				<h1>Contacts</h1>
			</Section>
		</>
	)
}
