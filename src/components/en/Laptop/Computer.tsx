

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_8: THREE.Mesh
    Object_6: THREE.Mesh
  }
  materials: {
    MacBookPro: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Computer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/computer.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh geometry={nodes.Object_6.geometry} material={materials.MacBookPro} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.MacBookPro} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.MacBookPro} />
    </group>
  )
}

useGLTF.preload('/computer.glb')
