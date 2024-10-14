import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    useGLTF,
    PerspectiveCamera,
    Html,
    Environment,
    useAnimations,
} from "@react-three/drei";
import { useProgress } from "@react-three/drei";
import * as THREE from "three";
import { OrthographicCamera } from '@react-three/drei'

import type { GLTF } from "three-stdlib";

import { use3DAnimationOnScroll } from "@/lib/use3DAnimationAcrossPage";


export default function CubeScene() {
    // const onWindowResize = () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    // };
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 50 }}
            style={{ pointerEvents: "none" }}
        >
            <Suspense fallback={<Loader />}>
                <Environment preset="forest" />
                <Scene />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
            </Suspense>
        </Canvas>
    );
}

function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export const LoadingScreen = ({
    started,
    onStarted,
}: {
    started: boolean;
    onStarted: () => void;
}) => {
    const { progress } = useProgress();
    return (
        <div
            className=" group fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center bg-gradient-to-r from-teal-100 to-green-500 transition-[opacity] duration-[8000ms]"
            data-started={started}
        >
            <div className="absolute bottom-0 left-0 w-full h-3">
                <div
                    className="absolute left-0 top-0 bottom-0 bg-opacity-50 transition-[width] duration-300"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
            <div className="group-data-[started=true]:opacity-0 p-16 bg-green-500 bg-opacity-45 border-r-[24px] text-center border-dashed border-8 border-opacity-15 transition-opacity duration-500">
                <h1 className="m-0 mb-2 text-6xl text-opacity-50">Please help me!</h1>
                <button
                    className="px-8 py-2 text-4xl font-bold text-white transition-colors duration-300 bg-opacity-25 border-r-8 border-none"
                    disabled={progress < 100}
                    onClick={onStarted}
                >
                    Start
                </button>
            </div>

        </div>
    );
};

type GLTFCUCK2Result = GLTF & {
    nodes: {
        Vine: THREE.Mesh
        Leaf: THREE.Mesh
        CUCKmber: THREE.Mesh
        Icosphere: THREE.Mesh
        Icosphere001: THREE.Mesh
        Icosphere002: THREE.Mesh
        Icosphere003: THREE.Mesh
        Icosphere004: THREE.Mesh
        Icosphere005: THREE.Mesh
        Icosphere006: THREE.Mesh
        Icosphere007: THREE.Mesh
        Icosphere008: THREE.Mesh
        Icosphere009: THREE.Mesh
        Icosphere010: THREE.Mesh
    }
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial
    }
}

type ActionCUCK2Name =
    | 'ConeAction'
    | 'CubeAction'
    | 'Цилиндр.001Action.003'
    | 'IcosphereAction.001'
    | 'Icosphere.001Action.001'
    | 'Icosphere.002Action.001'
    | 'Icosphere.003Action.001'
    | 'Icosphere.004Action.001'
    | 'Icosphere.005Action.001'
    | 'Icosphere.006Action.001'
    | 'Icosphere.007Action.001'
    | 'Icosphere.008Action.001'
    | 'Icosphere.009Action.001'
    | 'Icosphere.010Action.001'
type GLTFCUCK2Actions = Record<ActionCUCK2Name, THREE.AnimationAction>

export function CUCK2(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null);
    const { nodes, materials, animations } = useGLTF("/models/BIG CUCK1.glb") as GLTFCUCK2Result;
    const modelInfo = { nodes, animations, group };
    const timeline = { scrollStart: 0, scrollEnd: window.innerHeight * 1 };
    const scrollElement = document.body;

    use3DAnimationOnScroll<ActionCUCK2Name>("ConeAction", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("CubeAction", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Цилиндр.001Action.003", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("IcosphereAction.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.001Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.002Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.003Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.004Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.005Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.006Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.007Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.008Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.009Action.001", scrollElement, modelInfo, timeline);
    use3DAnimationOnScroll<ActionCUCK2Name>("Icosphere.010Action.001", scrollElement, modelInfo, timeline);

    useFrame(({ camera }) => {
        camera.position.set(7.35889, 6.92579, 4.95831);
        camera.lookAt(0, 0, 0)
    });

    return (

        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <PerspectiveCamera
                    name="Camera"
                    makeDefault={false}
                    far={100}
                    near={0.1}
                    fov={22.895}
                    position={[7.359, 4.958, 6.926]}
                    rotation={[-0.627, 0.71, 0.441]}
                />
                <mesh
                    name="Vine"
                    castShadow
                    receiveShadow
                    geometry={nodes.Vine.geometry}
                    material={nodes.Vine.material}
                    position={[0.038, -2.126, 0.935]}
                    rotation={[-Math.PI, 0.307, -Math.PI]}
                    scale={0.271}
                />
                <mesh
                    name="Leaf"
                    castShadow
                    receiveShadow
                    geometry={nodes.Leaf.geometry}
                    material={nodes.Leaf.material}
                    position={[0.531, 0.053, -2.155]}
                    rotation={[3.108, 1.131, 1.294]}
                    scale={2.458}
                />
                <mesh
                    name="CUCKmber"
                    castShadow
                    receiveShadow
                    geometry={nodes.CUCKmber.geometry}
                    material={nodes.CUCKmber.material}
                    position={[1.799, 1.055, -0.242]}
                    rotation={[2.87, 1.112, 1.631]}
                    scale={[1.857, 0.578, 0.578]}
                />
                <directionalLight
                    name="Sun_UPPER"
                    intensity={683}
                    decay={2}
                    position={[-1.339, 16.835, -0.65]}
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <group position={[0, 0, -1]} />
                </directionalLight>
                <directionalLight
                    name="Sun_DOWNER"
                    intensity={683}
                    decay={2}
                    position={[-1.628, -9.797, 2.098]}
                    rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, 0, -1]} />
                </directionalLight>
                <mesh
                    name="Icosphere"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere.geometry}
                    material={materials['Material.001']}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere001.geometry}
                    material={materials['Material.001']}
                    position={[2.515, 1.03, -2.26]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere002.geometry}
                    material={materials['Material.001']}
                    position={[4.155, -1.48, -1.218]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere003"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere003.geometry}
                    material={materials['Material.001']}
                    position={[-0.109, -0.294, 0.295]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere004.geometry}
                    material={materials['Material.001']}
                    position={[-0.467, -0.005, 1.526]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere005.geometry}
                    material={materials['Material.001']}
                    position={[1.776, 0.706, 2.509]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere006.geometry}
                    material={materials['Material.001']}
                    position={[0.067, 1.88, 1.295]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere007"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere007.geometry}
                    material={materials['Material.001']}
                    position={[2.949, 1.323, -0.41]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere008.geometry}
                    material={materials['Material.001']}
                    position={[3.406, 0.205, -0.599]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere009"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere009.geometry}
                    material={materials['Material.001']}
                    position={[2.082, -0.54, 1.269]}
                    scale={0.166}
                />
                <mesh
                    name="Icosphere010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere010.geometry}
                    material={materials['Material.001']}
                    position={[1.808, 1.356, 1.23]}
                    scale={0.166}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/BIG CUCK1.glb')

function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/LCB0iCzduGXLMKYX/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#74757a']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          <group name="BIG CUCK2" scale={8.6}>
            <mesh
              name="Vine"
              geometry={nodes.Vine.geometry}
              material={nodes.Vine.material}
              castShadow
              receiveShadow
              position={[0.04, -2.13, 0.93]}
              rotation={[-Math.PI, 0.31, -Math.PI]}
              scale={0.27}
            />
            <mesh
              name="Leaf"
              geometry={nodes.Leaf.geometry}
              material={nodes.Leaf.material}
              castShadow
              receiveShadow
              position={[0.53, 0.05, -2.16]}
              rotation={[3.11, 1.13, 1.29]}
              scale={2.46}
            />
            <mesh
              name="CUCKmber"
              geometry={nodes.CUCKmber.geometry}
              material={nodes.CUCKmber.material}
              castShadow
              receiveShadow
              position={[1.8, 1.05, -0.24]}
              rotation={[2.87, 1.11, 1.63]}
              scale={[1.86, 0.58, 0.58]}
            />
            <group name="Sun_UPPER" position={[-1.34, 16.84, -0.65]} rotation={[-Math.PI / 2, 0, 0]} />
            <group name="Sun_DOWNER" position={[-1.63, -9.8, 2.1]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh
              name="Icosphere"
              geometry={nodes.Icosphere.geometry}
              material={nodes.Icosphere.material}
              castShadow
              receiveShadow
              scale={0.17}
            />
            <mesh
              name="Icosphere001"
              geometry={nodes.Icosphere001.geometry}
              material={nodes.Icosphere001.material}
              castShadow
              receiveShadow
              position={[2.51, 1.03, -2.26]}
              scale={0.17}
            />
            <mesh
              name="Icosphere002"
              geometry={nodes.Icosphere002.geometry}
              material={nodes.Icosphere002.material}
              castShadow
              receiveShadow
              position={[4.16, -1.48, -1.22]}
              scale={0.17}
            />
            <mesh
              name="Icosphere003"
              geometry={nodes.Icosphere003.geometry}
              material={nodes.Icosphere003.material}
              castShadow
              receiveShadow
              position={[-0.11, -0.29, 0.3]}
              scale={0.17}
            />
            <mesh
              name="Icosphere004"
              geometry={nodes.Icosphere004.geometry}
              material={nodes.Icosphere004.material}
              castShadow
              receiveShadow
              position={[-0.47, -0.01, 1.53]}
              scale={0.17}
            />
            <mesh
              name="Icosphere005"
              geometry={nodes.Icosphere005.geometry}
              material={nodes.Icosphere005.material}
              castShadow
              receiveShadow
              position={[1.78, 0.71, 2.51]}
              scale={0.17}
            />
            <mesh
              name="Icosphere006"
              geometry={nodes.Icosphere006.geometry}
              material={nodes.Icosphere006.material}
              castShadow
              receiveShadow
              position={[0.07, 1.88, 1.3]}
              scale={0.17}
            />
            <mesh
              name="Icosphere007"
              geometry={nodes.Icosphere007.geometry}
              material={nodes.Icosphere007.material}
              castShadow
              receiveShadow
              position={[2.95, 1.32, -0.41]}
              scale={0.17}
            />
            <mesh
              name="Icosphere008"
              geometry={nodes.Icosphere008.geometry}
              material={nodes.Icosphere008.material}
              castShadow
              receiveShadow
              position={[3.41, 0.21, -0.6]}
              scale={0.17}
            />
            <mesh
              name="Icosphere009"
              geometry={nodes.Icosphere009.geometry}
              material={nodes.Icosphere009.material}
              castShadow
              receiveShadow
              position={[2.08, -0.54, 1.27]}
              scale={0.17}
            />
            <mesh
              name="Icosphere010"
              geometry={nodes.Icosphere010.geometry}
              material={nodes.Icosphere010.material}
              castShadow
              receiveShadow
              position={[1.81, 1.36, 1.23]}
              scale={0.17}
            />
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="3" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
