/* npm install @react-three/fiber @react-three/drei three */

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const starsEffect = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "120vh", overflow: "hidden" }}>
      <Canvas
        style={{
          width: "100vw",
          height: "120vh",
        }}
        camera={{ position: [0, 0, 1] }}
      >
        <Stars radius={200} depth={50} count={5000} factor={4} fade />
      </Canvas>
    </div>
  );
};
export default starsEffect;
