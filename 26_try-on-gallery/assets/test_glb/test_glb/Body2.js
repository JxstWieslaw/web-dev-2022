/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/body2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.24, 0]}>
        <group position={[0, 0.24, 0]}>
          <mesh geometry={nodes.polySurface8.geometry} material={materials.pasted__lambert11} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/body2.glb')
