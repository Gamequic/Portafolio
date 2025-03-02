'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

import config from './../next.config.mjs';

function Model({ url }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef();

    // Precarga el modelo con la ruta correcta
    useGLTF.preload(url);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.scale.x = 2;
            modelRef.current.scale.y = 2;
            modelRef.current.scale.z = 2;
            modelRef.current.rotation.y += 0.0005;
            modelRef.current.rotation.x += 0.0005;
        }
    });

    return <primitive ref={modelRef} object={scene} />;
}

export default function Ilustration() {
    const modelPath = process.env.NODE_ENV === 'production'
        ? `${config.basePath}/lost_programmer/scene.gltf`
        : '/lost_programmer/scene.gltf';

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} />
            <Canvas style={{ position: 'relative', zIndex: 0 }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
                <Model url={modelPath} />
            </Canvas>
        </div>
    );
}
