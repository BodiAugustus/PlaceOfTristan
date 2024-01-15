import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const sphereGeometry = new THREE.SphereGeometry(0.9, 32, 32); // Reusable sphere geometry
const saturnMaterial = new THREE.MeshStandardMaterial({ color: "blue" });
const moonMaterial = new THREE.MeshStandardMaterial({ color: "gray" });
const textureLoader = new THREE.TextureLoader();

function Saturn() {
  const saturnRef = useRef();
  useFrame(() => {
    saturnRef.current.rotation.y -= 0.005; // Adjust the speed of rotation as needed
  });
  const saturnTexture = new THREE.TextureLoader().load("/defi7.jpg");
  const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });

  return (
    <mesh
      ref={saturnRef}
      geometry={sphereGeometry}
      material={saturnMaterial}
      scale={[3, 3, 3]}
    />
  );
}

const moonTextures = [
  textureLoader.load("/eth.avif"),
  textureLoader.load("/sol.avif"),
  textureLoader.load("/avax.avif"),
  textureLoader.load("/dot.webp"),
  textureLoader.load("/ftm.jpeg"),
  textureLoader.load("/celestia.webp"),
  textureLoader.load("/atom.avif"),
  textureLoader.load("/binance.avif"),
];

function Moon({ radius, speed, angle, texture }) {
  const moonRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = Math.sin(time * speed + angle) * radius;
    const z = Math.cos(time * speed + angle) * radius;
    const y = Math.sin(time * speed) * (radius / 4);
    moonRef.current.position.set(x, y, z);
    moonRef.current.rotation.y -= 0.005;
  });

  return (
    <mesh
      ref={moonRef}
      geometry={sphereGeometry}
      material={new THREE.MeshStandardMaterial({ map: texture })}
      scale={[0.5, 0.5, 0.5]}
    />
  );
}

export default function SaturnWithMoons() {
  const moons = useMemo(() => {
    return moonTextures.map((texture, i) => (
      <Moon
        key={i}
        radius={3.2 + i * 0.4}
        speed={0.1 + Math.random() * 0.2}
        angle={Math.random() * Math.PI * 2}
        texture={texture}
      />
    ));
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} />
      <Saturn />
      {moons}
    </Canvas>
  );
}
