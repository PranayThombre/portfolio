import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Earth sphere component with rotation and texture
function EarthSphere() {
  const ref = React.useRef();
  const [texture] = React.useState(() =>
    new THREE.TextureLoader().load("/images/earth.jpg")
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005; // Slow rotation
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// Main Earth component wrapped in Canvas
const Earth = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 3, 5]} intensity={1} />
        <Suspense
          fallback={
            <Html>
              <p style={{ color: "white" }}>Loading...</p>
            </Html>
          }
        >
          <EarthSphere />
          <OrbitControls enableZoom={false} />
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Earth;