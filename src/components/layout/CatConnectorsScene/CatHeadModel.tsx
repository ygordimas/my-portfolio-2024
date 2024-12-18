import * as THREE from 'three';
import { useRef, useReducer, useMemo, forwardRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { BallCollider, Physics, RigidBody } from '@react-three/rapier';
import { easing } from 'maath';

function CatHeadModel({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = 'white',
  ...props
}) {
  const api = useRef();
  const ref = useRef();
  const ref2 = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  const headScale = 2;

  const CatHeadBase = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF(
      '/GLTF/cathead-lowpoly/cathead-lowpoly-base.glb'
    );
    return (
      <mesh
        ref={ref}
        receiveShadow
        geometry={nodes['cathead-lowpoly-base'].geometry}
        scale={headScale}
      >
        <meshStandardMaterial toneMapped={false} {...props} />
        {children}
      </mesh>
    );
  });

  const CatHeadDetail = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF(
      '/GLTF/cathead-lowpoly/cathead-lowpoly-extras.glb'
    );
    return (
      <mesh
        ref={ref}
        receiveShadow
        geometry={nodes['cathead-lowpoly-extras'].geometry}
        scale={headScale}
        material={materials['cathead-lowpoly-extras']}
      >
        {children}
      </mesh>
    );
  });

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(1)
    );
    easing.dampC(ref.current.material.color, color, 0.2, delta);
    // easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[headScale]} />

      <CatHeadBase ref={ref} {...props} />
      <CatHeadDetail ref={ref2} />
    </RigidBody>
  );
}

useGLTF.preload('/GLTF/CatHead/CatHeadDetail.glb');
useGLTF.preload('/GLTF/CatHead/CatHeadBase.glb');

export default CatHeadModel;
