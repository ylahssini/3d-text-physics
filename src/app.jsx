import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Wrapper from "./wrapper";

const App = () => {
  return (
    <Canvas shadows camera={{ fov: 30, zoom: 2.5, position: [-750, 50, 500] }}>
      <React.Suspense fallback={null}>
        <Wrapper text="Youssef" />
        <OrbitControls />
      </React.Suspense>
    </Canvas>
  );
};

export default App;
