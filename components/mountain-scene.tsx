"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Cloud, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Animated Mountain Component
function Mountain({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <coneGeometry args={[1, 2, 4]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.8} 
        metalness={0.2}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

// Floating Hemp Leaf
function FloatingLeaf({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#059669"
          emissiveIntensity={0.3}
          roughness={0.5}
        />
      </mesh>
    </Float>
  );
}

// Prayer Flag
function PrayerFlag({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[0.3, 0.2]} />
      <meshStandardMaterial 
        color={color} 
        side={THREE.DoubleSide}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Glowing Orb (representing products/energy)
function GlowingOrb({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <MeshDistortMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Terrain/Ground
function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 50, 50);
    const positions = geo.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.5) * Math.cos(y * 0.5) * 0.5;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <meshStandardMaterial 
        color="#166534" 
        roughness={0.9}
        metalness={0.1}
        wireframe={false}
      />
    </mesh>
  );
}

// Main Scene Component
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 5, -5]} intensity={0.5} color="#10b981" />
      <pointLight position={[10, 5, -5]} intensity={0.5} color="#fbbf24" />
      
      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Clouds */}
      <Cloud position={[-4, 2, -8]} speed={0.2} opacity={0.3} color="#e0f2fe" />
      <Cloud position={[4, 3, -6]} speed={0.3} opacity={0.25} color="#dbeafe" />
      <Cloud position={[0, 4, -10]} speed={0.15} opacity={0.2} color="#f0f9ff" />
      
      {/* Mountains - Layered for depth */}
      <Mountain position={[0, -1, -5]} scale={2.5} color="#047857" />
      <Mountain position={[-3, -1.2, -4]} scale={2} color="#059669" />
      <Mountain position={[3, -1.3, -4.5]} scale={2.2} color="#065f46" />
      <Mountain position={[-5, -1.5, -6]} scale={1.8} color="#064e3b" />
      <Mountain position={[5, -1.4, -6.5]} scale={1.9} color="#10b981" />
      
      {/* Terrain */}
      <Terrain />
      
      {/* Prayer Flags */}
      {[-3, -2, -1, 0, 1, 2, 3].map((x, i) => (
        <PrayerFlag 
          key={i} 
          position={[x * 0.8, 2, -2]} 
          color={['#3b82f6', '#ffffff', '#ef4444', '#10b981', '#fbbf24'][i % 5]}
        />
      ))}
      
      {/* Floating Leaves */}
      <FloatingLeaf position={[-2, 1, 0]} />
      <FloatingLeaf position={[2, 1.5, -1]} />
      <FloatingLeaf position={[0, 2, 1]} />
      <FloatingLeaf position={[-3, 1.2, -2]} />
      <FloatingLeaf position={[3, 1.8, -1.5]} />
      
      {/* Glowing Orbs */}
      <GlowingOrb position={[-1.5, 0.5, 2]} />
      <GlowingOrb position={[1.5, 0.8, 2.5]} />
      <GlowingOrb position={[0, 1, 3]} />
    </>
  );
}

// Main Export Component
export function MountainScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
