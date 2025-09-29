import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Html } from '@react-three/drei';
import { ModelViewerProps, InfoPoint } from '../types';
import * as THREE from 'three';

interface ModelProps {
    modelPath: string;
    infoPoints?: InfoPoint[];
    onInfoPointToggle?: (id: string) => void;
}

const Model: React.FC<ModelProps> = ({
    modelPath,
    infoPoints = [],
    onInfoPointToggle,
}) => {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef<THREE.Group>(null);
    const { camera } = useThree();

    useEffect(() => {
        if (scene && modelRef.current) {
            // Calcular bounding box do modelo
            const box = new THREE.Box3().setFromObject(scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            // Centralizar o modelo na origem
            scene.position.copy(center).multiplyScalar(-1);

            // Ajustar escala se necessário (opcional)
            const maxDimension = Math.max(size.x, size.y, size.z);
            if (maxDimension > 10) {
                const scale = 10 / maxDimension;
                scene.scale.setScalar(scale);
            }

            // Posicionar câmera para uma vista adequada
            const distance = Math.max(size.x, size.y, size.z) * 1.5;
            camera.position.set(distance * 0.5, distance * 0.3, distance * 0.8);
            camera.lookAt(0, 0, 0);
        }
    }, [scene, camera]);

    return (
        <group ref={modelRef}>
            <primitive object={scene} />
            {infoPoints.map(point => (
                <Html
                    key={point.id}
                    position={point.position}
                    distanceFactor={10}
                    occlude
                >
                    <div
                        className={`bg-cyan-400 text-black px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                            point.visible
                                ? 'scale-110 shadow-lg'
                                : 'hover:scale-105'
                        }`}
                        onClick={() => onInfoPointToggle?.(point.id)}
                    >
                        <span className="text-sm font-semibold">ℹ️</span>
                    </div>
                    {point.visible && (
                        <div className="bg-black/80 text-white p-4 rounded-lg mt-2 max-w-xs">
                            <h4 className="font-semibold mb-2">
                                {point.title}
                            </h4>
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
    onInfoPointToggle,
}) => {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{
                    position: [5, 3, 8],
                    fov: 60,
                    near: 0.1,
                    far: 1000,
                }}
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.2,
                }}
                style={{ background: 'transparent' }}
            >
                {/* Iluminação melhorada para ambientes internos */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.2}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />
                <pointLight position={[-10, 5, -5]} intensity={0.8} />
                <pointLight position={[10, -5, 5]} intensity={0.6} />

                <Suspense fallback={<LoadingSpinner />}>
                    <Model
                        modelPath={modelPath}
                        infoPoints={infoPoints}
                        onInfoPointToggle={onInfoPointToggle}
                    />
                    <Environment preset="apartment" />
                </Suspense>

                <OrbitControls
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={2}
                    maxDistance={50}
                    autoRotate={false}
                    autoRotateSpeed={0.5}
                    target={[0, 0, 0]}
                    enableDamping={true}
                    dampingFactor={0.05}
                    screenSpacePanning={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI}
                />
            </Canvas>
        </div>
    );
};

export default ModelViewer;
