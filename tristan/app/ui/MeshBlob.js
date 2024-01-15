import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame, extend, Canvas } from "@react-three/fiber";

extend({
  OrbitControls: require("three/examples/jsm/controls/OrbitControls")
    .OrbitControls,
});

function Blob() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry attach="geometry" args={[2, 6]} />
      <meshStandardMaterial attach="material" color="#ff006e" />
    </mesh>
  );
}

export default function MeshBlob() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Blob />
    </Canvas>
  );
}
