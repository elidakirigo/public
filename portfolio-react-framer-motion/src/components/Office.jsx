// https://github.com/pmndrs/gltfjsx
import { motion } from 'framer-motion-3d'
import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from 'three'

export default function Office(props) {
	const { section } = props
	const { nodes, materials } = useGLTF('models/scene.gltf')
	const texture = useTexture('textures/baked.jpg')
	texture.flipY = false
	texture.encoding = THREE.sRGBEncoding

	const textureMaterial = new THREE.MeshStandardMaterial({ map: texture })

	const textureGlassMaterial = new THREE.MeshStandardMaterial({ map: texture, transparent: true, opacity: 0.42 })

	return (
		<group {...props} dispose={null}>
			<group name='Desk' position={[-0.07, 0, -1.52]} rotation={[0, -Math.PI / 2, 0]}>
				<mesh name='Plane001_Plane002_BlackWood001' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />

				<mesh name='Plane001_Plane002_BlackWood001_1' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />

				<mesh name='Plane001_Plane002_BlackWood001_2' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />

				<mesh name='Plane001_Plane002_BlackWood001_3' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
			</group>
			<group>
				<mesh name='Plane001_Plane002_BlackWood001_3' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
				
				<mesh name='Plane001_Plane002_BlackWood001_3' geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={textureMaterial} />
			</group>
		</group>
	)
}
