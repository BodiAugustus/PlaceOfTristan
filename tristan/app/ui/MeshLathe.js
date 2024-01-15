import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend, Canvas } from "@react-three/fiber";

extend({
  OrbitControls: require("three/examples/jsm/controls/OrbitControls")
    .OrbitControls,
});

function LatheGeometryExample() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  const points = [];
  for (let i = 0; i < 10; i++) {
    const x = Math.sin(i * 0.3) * 5;
    const y = i - 4;
    points.push(new THREE.Vector2(x, y));
  }

  const latheGeometry = new THREE.LatheGeometry(points, 64);

  return (
    <mesh ref={meshRef} scale={[0.2, 0.6, 0.8]}>
      <primitive object={latheGeometry} attach="geometry" />
      <meshStandardMaterial attach="material" color="#ff006e" />
    </mesh>
  );
}

export default function MeshLathe() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <LatheGeometryExample />
    </Canvas>
  );
}
