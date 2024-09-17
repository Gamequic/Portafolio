'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Model({ url }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef();

    useFrame(() => {
        modelRef.current.scale.x = 2
        modelRef.current.scale.y = 2
        modelRef.current.scale.z = 2
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.0005;
            modelRef.current.rotation.x += 0.0005;
        }
    });

    return <primitive ref={modelRef} object={scene} />;
}

export default function Ilustration() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
            <Model url="/lost_programmer/scene.gltf" />
        </Canvas>
    );
}
