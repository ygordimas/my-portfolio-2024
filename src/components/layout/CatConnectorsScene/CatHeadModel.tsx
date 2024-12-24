import * as THREE from 'three';
import { useRef, useMemo, forwardRef } from 'react';
import { useFrame, MeshStandardMaterialProps } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { BallCollider, RigidBody, RapierRigidBody } from '@react-three/rapier';
import { easing } from 'maath';

type CatHeadModelProps = {
  position?: [number, number, number];
  children?: React.ReactNode;
  vec?: THREE.Vector3;
  scale?: number;
  r?: (range: number) => number; // randFloatSpread function type
  accent?: boolean;
  color?: string;
} & JSX.IntrinsicElements['mesh']; // Allow passing props specific to a <mesh>

type CatHeadBaseProps = JSX.IntrinsicElements['mesh'] & {
  children?: React.ReactNode; // Include children if used
  materialProps?: MeshStandardMaterialProps; // Allow separate material props
};

function CatHeadModel({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  color = 'white',
  ...props
}: CatHeadModelProps) {
  const api = useRef<RapierRigidBody>(null);
  const ref = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  // const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  const pos = useMemo(() => {
    const defaultPosition = position || [r(10), r(10), r(10)];
    return new THREE.Vector3(...defaultPosition);
  }, [position]);
  const headScale = 2;

  const CatHeadBase = forwardRef<THREE.Mesh, CatHeadBaseProps>((props, ref) => {
    const { nodes, materials } = useGLTF(
      '/GLTF/cathead-lowpoly/cathead-lowpoly-base.glb'
    ) as unknown as {
      nodes: Record<string, THREE.Mesh>;
      materials: Record<string, THREE.Material>;
    };

    const { materialProps, children, ...meshProps } = props;
    return (
      <mesh
        ref={ref}
        receiveShadow
        geometry={nodes['cathead-lowpoly-base'].geometry}
        scale={headScale}
        {...meshProps}
      >
        <meshStandardMaterial toneMapped={false} {...materialProps} />
        {children}
      </mesh>
    );
  });

  const CatHeadDetail = forwardRef<THREE.Mesh, CatHeadBaseProps>(
    (props, ref) => {
      const { nodes, materials } = useGLTF(
        '/GLTF/cathead-lowpoly/cathead-lowpoly-extras.glb'
      ) as unknown as {
        nodes: Record<string, THREE.Mesh>;
        materials: Record<string, THREE.Material>;
      };
      const { materialProps, children, ...meshProps } = props;
      return (
        <mesh
          ref={ref}
          receiveShadow
          geometry={nodes['cathead-lowpoly-extras'].geometry}
          scale={headScale}
          material={materials['cathead-lowpoly-extras']}
          {...meshProps}
        >
          {children}
        </mesh>
      );
    }
  );

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    if (api.current) {
      api.current.applyImpulse(
        vec.copy(api.current.translation()).negate().multiplyScalar(1),
        true
      );
    }
    easing.dampC(
      (ref.current!.material as THREE.MeshStandardMaterial).color,
      color,
      0.2,
      delta
    );
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
