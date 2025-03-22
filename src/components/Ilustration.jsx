import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function Model({ url }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef();

    useGLTF.preload(url); // Precarga el modelo

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.scale.set(2, 2, 2);
            modelRef.current.rotation.y += 0.0005;
            modelRef.current.rotation.x += 0.0005;
        }
    });

    return <primitive ref={modelRef} object={scene} />;
}

export default function Ilustration({ children }) {
    const modelPath = `public/lost_programmer/scene.gltf`

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* Ilustración en el fondo */}
            <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
                <Model url={modelPath} />
            </Canvas>
        </div>
    );
}
