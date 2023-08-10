import React, { useRef } from 'react'
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight, } from '@react-three/drei';
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0 ]}
      position={[ 0, 0, -0.14  ]}
    >

    <RandomizedLight 
      amount={4}
      radius={10}
      intensity={2}
      ambient={0.25}
      position={[5, 15, -20]}
    />
    <RandomizedLight 
      amount={5}
      radius={10}
      intensity={1}
      ambient={0.25}
      position={[-5, 14, -5]}
    />




    </AccumulativeShadows>
  )
}

export default Backdrop
