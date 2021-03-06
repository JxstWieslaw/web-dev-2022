/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/nose_01_1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.nose_05.geometry} material={materials.aiStandardSurface1} />
    </group>
  )
}

useGLTF.preload('/nose_01_1.glb')
