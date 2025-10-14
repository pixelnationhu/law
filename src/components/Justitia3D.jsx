import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Justitia3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <mesh rotation={[0.5, 0.5, 0]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial color="#8C6B5E" metalness={0.5} roughness={0.4} />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
