import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const sphereGeometry = new THREE.SphereGeometry(0.9, 32, 32);

function Saturn() {
  const saturnRef = useRef();
  useFrame(() => {
    saturnRef.current.rotation.y -= 0.005;
  });
  const saturnTexture = useLoader(THREE.TextureLoader, "/defi7.jpg");
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

function Moon({ radius, speed, angle, texturePath }) {
  const moonRef = useRef();
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = Math.sin(time * speed + angle) * radius;
    const z = Math.cos(time * speed + angle) * radius;
    const y = Math.sin(time * speed) * (radius / 4);
    moonRef.current.position.set(x, y, z);
    moonRef.current.rotation.y -= 0.005;
  });
  const texture = useLoader(THREE.TextureLoader, texturePath);

  return (
    <mesh
      ref={moonRef}
      geometry={sphereGeometry}
      material={new THREE.MeshStandardMaterial({ map: texture })}
      scale={[0.5, 0.5, 0.5]}
    />
  );
}

const moonTextures = [
  "/eth.avif",
  "/sol.avif",
  "/avax.avif",
  "/dot.webp",
  "/ftm.jpeg",
  "/celestia.webp",
  "/atom.avif",
  "/binance.avif",
];

export default function SaturnWithMoons() {
  const moons = useMemo(() => {
    return moonTextures.map((texturePath, i) => (
      <Moon
        key={i}
        radius={3.2 + i * 0.4}
        speed={0.1 + Math.random() * 0.2}
        angle={Math.random() * Math.PI * 2}
        texturePath={texturePath}
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
