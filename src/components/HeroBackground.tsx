"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ShaderPlane } from "@/components/ui/background-paper-shaders";

export default function HeroBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.55,
      }}
    >
      <Canvas
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1], fov: 90 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ShaderPlane
            position={[0, 0, 0]}
            color1="#1a0e04"
            color2="#0d0d0d"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
