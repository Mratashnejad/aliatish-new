'use client'
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Animated flame component
function AnimatedFlame() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    // @ts-ignore
    if (meshRef.current.material) {
      // @ts-ignore
      meshRef.current.material.emissiveIntensity = 0.8 + Math.sin(time * 2) * 0.2;
    }
  });

  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]} ref={meshRef}>
      <MeshDistortMaterial
        color="#ff3b30"
        emissive="#ff9500"
        emissiveIntensity={0.8}
        roughness={0.2}
        metalness={0.2}
        speed={3}
        distort={0.5}
        wireframe={false}
      />
    </Sphere>
  );
}

// Small animated particles to create the illusion of fire embers
function FireParticles({ count = 20 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  useEffect(() => {
    if (!mesh.current) return;
    for (let i = 0; i < count; i++) {
      const matrix = new THREE.Matrix4();
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      );
      const scale = Math.random() * 0.2 + 0.05;
      matrix.compose(
        position,
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, scale)
      );
      mesh.current.setMatrixAt(i, matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const time = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const matrix = new THREE.Matrix4();
      mesh.current.getMatrixAt(i, matrix);
      const position = new THREE.Vector3();
      const rotation = new THREE.Quaternion();
      const scale = new THREE.Vector3();
      matrix.decompose(position, rotation, scale);
      position.y += 0.01 + Math.sin(time + i) * 0.005;
      position.x += Math.sin(time * 0.5 + i) * 0.003;
      position.z += Math.cos(time * 0.5 + i) * 0.003;
      if (position.y > 1.5) {
        position.y = -1.5;
        position.x = (Math.random() - 0.5) * 2;
        position.z = (Math.random() - 0.5) * 2;
      }
      matrix.compose(position, rotation, scale);
      mesh.current.setMatrixAt(i, matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial color="#ffcc00" />
    </instancedMesh>
  );
}

type Flame3DProps = {
  className?: string;
  autoRotate?: boolean;
  size?: number;
};

export default function Flame3D({ className = "", autoRotate = true, size = 200 }: Flame3DProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        margin: "0 auto",
      }}
    >
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedFlame />
        <FireParticles count={15} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}