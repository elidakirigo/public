import { Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import Office from './Office'
import { motion } from 'framer-motion-3d'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { framerMotionConfig } from '../config'

export const Experience = (props) => {
	const { section, menuOpened } = props
	const { viewport } = useThree()

	const cameraPositionX = useMotionValue()
	const cameraLookAtX = useMotionValue()

	useEffect(() => {
		animate(cameraPositionX, menuOpened ? -5 : 0, { ...framerMotionConfig })
		animate(cameraLookAtX, menuOpened ? 5 : 0)
	}, [menuOpened])

	useFrame((state) => {
		state.camera.position.x = cameraPositionX.get()
		state.camera.lookAt(cameraLookAtX.get(), 0, 0)
	})

	return (
		<>
			{/* <OrbitControls /> */}
			{/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
			<ambientLight intensity={1} />
			<motion.group position={[1.5, 2, 3]} scale={[0.9, 0.9, 0.9]} rotate-y={-Math.PI / 4} animate={{ y: section === 0 ? 0 : -1 }}>
				<Office section={section} />
			</motion.group>

			{/* skills */}
			<motion.group position={[0, -1.5, -10]} animate={{ z: section === 1 ? 0 : -10, y: section === 1 ? -visualViewport.height : -1.5 }}>
				<directionalLight position={[-5, 3, 5]} intensity={0.4} />
				<Float>
					<mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
						<sphereGeometry />
						<MeshDistortMaterial opacity={0.8} transparent distort={0.4} speed={4} color={'red'} />
					</mesh>
				</Float>
				<Float>
					<mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
						<sphereBufferGeometry />
						<MeshDistortMaterial opacity={0.8} transparent distort={1} speed={5} color='yellow' />
					</mesh>
				</Float>
				<Float>
					<mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
						<boxGeometry />
						<MeshWobbleMaterial opacity={0.8} transparent factor={1} speed={5} color={'blue'} />
					</mesh>
				</Float>
				<group scale={[2, 2, 2]} position-y={-1.5}>
					<Avatar animation={section === 0 ? 'Falling' : 'Standing'} />
				</group>
			</motion.group>
		</>
	)
}
