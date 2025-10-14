import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { Computer } from "./Computer";

const ContainerComputer = () => {
  return (
<Canvas>
  <Suspense fallback="...loading">
    <Stage environment="studio" intensity={0.5}>
      <Computer />
    </Stage>
    <OrbitControls 
      enableZoom={false} 
      autoRotate={true}       
      autoRotateSpeed={1}    
    />
    <PerspectiveCamera makeDefault position={[0, 3, 15]} zoom={0.7} />
  </Suspense>
</Canvas>
  )
  }
export default ContainerComputer