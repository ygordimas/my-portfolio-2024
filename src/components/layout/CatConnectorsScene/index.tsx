import * as THREE from 'three';
import { useRef, useReducer, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { BallCollider, Physics, RigidBody } from '@react-three/rapier';
import { easing } from 'maath';
import CatHeadModel from './CatHeadModel';
import Pointer from './Pointer';
import Effects from './Effects';

const accents = ['#ffec82', '#ffcc00', '#93ffd0', '#002aff'];
const shuffle = (accent = 0) => [
  { color: '#9c9c9c', roughness: 0.1, metalness: 1 },
  { color: '#9c9c9c', roughness: 0.1, metalness: 1 },
  { color: '#9c9c9c', roughness: 0.1, metalness: 1 },
  { color: 'white', roughness: 0.1, metalness: 1 },
  { color: 'white', roughness: 0.1, metalness: 1 },
  { color: 'white', roughness: 0.1, metalness: 1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: '#c0c0c0', roughness: 0.1 },
  { color: '#c0c0c0', roughness: 0.3 },
  { color: '#c0c0c0', roughness: 0.3 },
  { color: 'white', roughness: 0.1 },
  { color: 'white', roughness: 0.2 },
  { color: 'white', roughness: 0.1 },
  {
    color: accents[accent],
    roughness: 0.1,
    accent: true,
    // transparent: true,
    // opacity: 0.5,
    metalness: 0.8,
  },
  { color: accents[accent], roughness: 0.3, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

export default function CatConnectorsScene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Canvas
      flat
      shadows
      onClick={click}
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 30], fov: 20, near: 10, far: 100 }}
      {...props}
    >
      <directionalLight
        castShadow
        position={[5, 5, 5]} // Position of the light
        intensity={0.5} // Brightness of the light
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <color attach="background" args={['#f3e1e1']} />
      <Physics timeStep="vary" gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <CatHeadModel key={i} {...props} />
        ))}
      </Physics>
      <Environment resolution={256} preset="warehouse"></Environment>
      <Effects />
    </Canvas>
  );
}