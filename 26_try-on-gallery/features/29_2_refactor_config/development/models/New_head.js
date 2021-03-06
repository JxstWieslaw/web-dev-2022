/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/new_head.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes._polySurface14.geometry} material={materials.lambert39} />
    </group>
  )
}

useGLTF.preload('/new_head.glb')
