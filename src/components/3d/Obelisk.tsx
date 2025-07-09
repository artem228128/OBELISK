'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

const ObeliskMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // Create obelisk geometry
  const geometry = new THREE.ConeGeometry(0.5, 4, 4)
  
  return (
    <group>
      {/* Main Obelisk */}
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial
          color={hovered ? "#8b5cf6" : "#00ffff"}
          emissive={hovered ? "#8b5cf6" : "#00ffff"}
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Glow effect */}
      <mesh geometry={geometry} scale={1.2}>
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Runic symbols */}
      {[0, 1, 2, 3].map((i) => (
        <Text
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2) * 0.7,
            0,
            Math.sin((i * Math.PI) / 2) * 0.7,
          ]}
          rotation={[0, (i * Math.PI) / 2, 0]}
          fontSize={0.3}
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Bold.woff"
        >
          {['◊', '◈', '◇', '◆'][i]}
        </Text>
      ))}
    </group>
  )
}

export const Obelisk = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-full bg-gradient-to-br from-cyber-dark to-cyber-graphite" />
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#ffd700"
        />
        
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
        />
        
        <ObeliskMesh />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
} 