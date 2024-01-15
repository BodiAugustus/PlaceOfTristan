import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, extend, Canvas } from "@react-three/fiber";

extend({
  OrbitControls: require("three/examples/jsm/controls/OrbitControls")
    .OrbitControls,
});

function TubeGeometryExample() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x = meshRef.current.rotation.z += 0.01;
    meshRef.current.rotation.x = meshRef.current.rotation.x += 0.01;
  });

  const path = [];
  for (let i = 0; i < 15; i++) {
    path.push(new THREE.Vector3(i, Math.sin(i), 0));
  }

  // Create the tube geometry
  const tubeGeometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(path),
    64,
    0.2, // Radius
    4, // Number of radial segments
    false
  );

  // Wireframe material with neon electric blue color
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: "#7DF9FF", // Bright blue color
    wireframe: true, // Enable wireframe
  });

  return (
    <mesh ref={meshRef} material={wireframeMaterial}>
      <primitive object={tubeGeometry} attach="geometry" />
    </mesh>
  );
}

export default function MeshTube() {
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <spotLight position={[10, 10, 10]} angle={0.55} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <TubeGeometryExample />
    </Canvas>
  );
}
