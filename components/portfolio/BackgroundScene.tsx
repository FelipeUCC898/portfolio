"use client";

import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.06;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.4}>
      <MeshDistortMaterial
        color="#05DFD7"
        emissive="#040404"
        emissiveIntensity={0.15}
        roughness={0.35}
        metalness={0.55}
        distort={0.38}
        speed={1.8}
      />
    </Sphere>
  );
}

export function BackgroundScene() {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 8, 8]} intensity={1.1} color="#05DFD7" />
      <pointLight position={[-6, -4, -4]} intensity={0.45} color="#16213e" />
      <DistortedSphere />
    </Canvas>
  );
}
