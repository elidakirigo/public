import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
		<>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
				<color attach='background' args={['#ececec']} />
				<Experience />
			</Canvas>
		</>
  )  
}

export default App;
