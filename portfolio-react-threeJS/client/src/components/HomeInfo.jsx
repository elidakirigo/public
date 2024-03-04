import { Link } from 'react-router-dom'

const InfoBox = ({ text, link, btnText }) => (
	<div className='info-box'>
		<p className='font-medium sm:text-xl text-center'>{text} </p> <Link to={link}>{btnText}</Link>
	</div>
)

const renderContent = {
	1: (
		<h1 className='sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
			hi i am <span className='font-semibold'>Elida</span> 🖐 <br /> A software Engineer from kenya🏁
		</h1>
	),
	2: <InfoBox text='worked with many companies and picked up many skills along the way' link={'/about'} btnText='Learn more' />,
	3: <h1 className='sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>3</h1>,
	4: <h1 className='sm-text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>4</h1>,
}
// NEW
const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null
}

export default HomeInfo
