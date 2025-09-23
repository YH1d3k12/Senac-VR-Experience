import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import { ModelViewerProps, InfoPoint } from '../types';
import * as THREE from 'three';

interface ModelProps {
  modelPath: string;
  infoPoints?: InfoPoint[];
  onInfoPointToggle?: (id: string) => void;
}

const Model: React.FC<ModelProps> = ({ modelPath, infoPoints = [], onInfoPointToggle }) => {
  const { scene } = useGLTF(modelPath);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      // Subtle rotation animation
      modelRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={1} />
      {infoPoints.map((point) => (
        <Html
          key={point.id}
          position={point.position}
          distanceFactor={10}
          occlude
        >
          <div
            className={`bg-cyan-400 text-black px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              point.visible ? 'scale-110 shadow-lg' : 'hover:scale-105'
            }`}
            onClick={() => onInfoPointToggle?.(point.id)}
          >
            <span className="text-sm font-semibold">ℹ️</span>
          </div>
          {point.visible && (
            <div className="bg-black/80 text-white p-4 rounded-lg mt-2 max-w-xs">
              <h4 className="font-semibold mb-2">{point.title}</h4>
              <p className="text-sm">{point.description}</p>
            </div>
          )}
        </Html>
      ))}
    </group>
  );
};

const LoadingSpinner: React.FC = () => (
  <Html center>
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
      <p className="text-white mt-4">Carregando modelo 3D...</p>
    </div>
  </Html>
);

const ModelViewer: React.FC<ModelViewerProps> = ({ 
  modelPath, 
  infoPoints = [], 
  onInfoPointToggle 
}) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 5, 10], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Model 
            modelPath={modelPath} 
            infoPoints={infoPoints}
            onInfoPointToggle={onInfoPointToggle}
          />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={3}
          maxDistance={20}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;

