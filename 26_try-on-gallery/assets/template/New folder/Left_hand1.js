/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/left_hand1.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.polySurface1.geometry} material={nodes.polySurface1.material} />
    </group>
  )
}

useGLTF.preload('/left_hand1.glb')
