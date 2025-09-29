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
            const box = new THREE.Box3().setFromObject(scene);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());

            scene.position.copy(center).multiplyScalar(0);

            const maxDimension = Math.max(size.x, size.y, size.z);
            if (maxDimension > 10) {
                const scale = 10 / maxDimension;
                scene.scale.setScalar(scale);
            }

            const distance = Math.max(size.x, size.y, size.z) * 1.5;
            camera.position.set(distance * 0.5, distance * 0.3, distance * 0.8);
            camera.lookAt(0, 0, 0);
        }
    }, [scene, camera]);

    return (
        <group ref={modelRef}>
            <primitive object={scene} />
            {infoPoints.map(point => (
                <Html key={point.id} position={point.position} occlude>
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

const CameraLimiter: React.FC<{ controls: React.RefObject<any> }> = ({
    controls,
}) => {
    useFrame(() => {
        if (controls.current) {
            const t = controls.current.target;
            t.x = THREE.MathUtils.clamp(t.x, -0.2, 0.2);
            t.y = THREE.MathUtils.clamp(t.y, 0, 2);
            t.z = THREE.MathUtils.clamp(t.z, -0.2, 0.2);
        }
    });
    return null;
};

const ModelViewer: React.FC<ModelViewerProps> = ({
    modelPath,
    infoPoints = [],
    onInfoPointToggle,
}) => {
    const controls = useRef<any>(null);

    return (
        <div className="w-full h-full">
            <Canvas
                camera={{
                    position: [0, 0, 0],
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
                {/* Iluminação */}
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

                {/* OrbitControls + Clamp */}
                <OrbitControls
                    ref={controls}
                    enablePan={true}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={0}
                    maxDistance={0.8}
                    autoRotate={false}
                    autoRotateSpeed={0.5}
                    target={[0, 0.4, 0]}
                    enableDamping={true}
                    dampingFactor={0.05}
                    screenSpacePanning={false}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI}
                />
                <CameraLimiter controls={controls} />
            </Canvas>
        </div>
    );
};

export default ModelViewer;
