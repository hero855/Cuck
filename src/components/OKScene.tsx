import { Canvas, events, useFrame } from "@react-three/fiber";
import { Suspense, useRef, version } from "react";

import type * as THREE from "three";
import type { Group } from "three";
import type React from "react";
import {
  AccumulativeShadows,
  Center,
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  PointerLockControls,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import type { GLTF } from "three-stdlib";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

interface IMyScene {
  className?: string;
}


const eventManagerFactory: Parameters<typeof Canvas>[0]['events'] = (state) => ({
  // Default configuration
  ...events(state),

  // Determines if the event layer is active
  enabled: true,

  // Event layer priority, higher prioritized layers come first and may stop(-propagate) lower layer
  priority: 1,
})

export const OKScene: React.FC<IMyScene> = () => {
  return (
    <Canvas  shadows camera={{ position: [0, 0, 20], fov: 25 }}>
      <Suspense>
        <ambientLight />
        <group position={[0, -2.5, 0]}>
          <Center top>
            <Model />
          </Center>
        </group>
        <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr"
        />
      </Suspense>
    </Canvas>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube_1: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube006_1: THREE.Mesh;
  };
  materials: {
    ["Glass Shader"]: THREE.MeshPhysicalMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/OK7.gltf") as GLTFResult;
  const modelRef = useRef<Group>(null);

  useFrame(({ mouse, viewport }) => {
    const model = modelRef.current;
    if (!model) return;
    const x = (mouse.x * viewport.width);
    const y = (mouse.y * viewport.height);
    model.quaternion.x = lerp(model.quaternion.x, -y / 20, 0.01) / model.quaternion.length();
    model.quaternion.y = lerp(model.quaternion.y, x / 20, 0.01) / model.quaternion.length();
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group position={[0, 1.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Glass Shader"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
        >
          <MeshTransmissionMaterial
            distortionScale={0.3}
            temporalDistortion={0.5}
          />
        </mesh>
      </group>
      <group position={[0, -1.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Glass Shader"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={nodes.Cube006_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/OK7.gltf");
