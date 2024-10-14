import * as THREE from "three";
import { Suspense, useEffect, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Sky,
  useScroll,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    Object224_normal_0: THREE.SkinnedMesh;
    Object224_metalmat_0: THREE.SkinnedMesh;
    Object688_normal_0: THREE.SkinnedMesh;
    Object687_normal_0: THREE.SkinnedMesh;
    Object697_normal_0: THREE.SkinnedMesh;
    Object698_normal_0: THREE.SkinnedMesh;
    Object699_normal_0: THREE.SkinnedMesh;
    Object700_normal_0: THREE.SkinnedMesh;
    Object078_Plastic_Soft_0: THREE.Mesh;
    body_normal_0: THREE.Mesh;
    leaf_normal_0: THREE.Mesh;
    hand2_normal_0: THREE.Mesh;
    hand1_normal_0: THREE.Mesh;
    foot2_normal_0: THREE.Mesh;
    foot1_normal_0: THREE.Mesh;
    Object608_metalmat_0: THREE.Mesh;
    Object608_paintmat_0: THREE.Mesh;
    Object649_normal_0: THREE.Mesh;
    Object649_paintmat_0: THREE.Mesh;
    Object649_metalmat_0: THREE.Mesh;
    Object649_Plastic_Soft_0: THREE.Mesh;
    Object649_alpha_glass_0: THREE.Mesh;
    Object649_glassmat_0: THREE.Mesh;
    ["Object649_Material_#5511_0"]: THREE.Mesh;
    ["Object649_Material_#5512_0"]: THREE.Mesh;
    Object649_glass_transp_0: THREE.Mesh;
    Object649_interiors_0: THREE.Mesh;
    Object649_alpha_0: THREE.Mesh;
    wire7_normal_0: THREE.Mesh;
    Object674_outline_0: THREE.Mesh;
    Object674_outline_0_1: THREE.Mesh;
    Object675_metalmat_0: THREE.Mesh;
    Object675_paintmat_0: THREE.Mesh;
    Object675_glassmat_0: THREE.Mesh;
    Object675_outline_0: THREE.Mesh;
    Object680_metalmat_0: THREE.Mesh;
    Object681_metalmat_0: THREE.Mesh;
    Object532_normal_0: THREE.Mesh;
    Object531_normal_0: THREE.Mesh;
    Object689_metalmat_0: THREE.Mesh;
    Plane001_normal_0: THREE.Mesh;
    Plane003_normal_0: THREE.Mesh;
    Plane104_normal_0: THREE.Mesh;
    Plane103_normal_0: THREE.Mesh;
    Plane105_normal_0: THREE.Mesh;
    Plane106_normal_0: THREE.Mesh;
    Plane108_normal_0: THREE.Mesh;
    Plane107_normal_0: THREE.Mesh;
    Plane109_normal_0: THREE.Mesh;
    Plane110_normal_0: THREE.Mesh;
    Plane111_normal_0: THREE.Mesh;
    Plane112_normal_0: THREE.Mesh;
    Object704_Plastic_Soft_0: THREE.Mesh;
    Object704_metalmat_0: THREE.Mesh;
    wire1_Plastic_Soft_0: THREE.Mesh;
    wire2_Plastic_Soft_0: THREE.Mesh;
    Object081_normal_0: THREE.Mesh;
    Object332_normal_0: THREE.Mesh;
    Object682_normal_0: THREE.Mesh;
    wire3_normal_0: THREE.Mesh;
    wire4_normal_0: THREE.Mesh;
    wire5_normal_0: THREE.Mesh;
    ["Object705_Material_#5516_0"]: THREE.Mesh;
    Object619_alpha_0: THREE.Mesh;
    Object620_alpha_0: THREE.Mesh;
    Object621_alpha_0: THREE.Mesh;
    Object622_alpha_0: THREE.Mesh;
    ["Object706_Material_#5518_0"]: THREE.Mesh;
    ["Object707_Material_#5518_0"]: THREE.Mesh;
    ["Object708_Material_#5518_0"]: THREE.Mesh;
    ["Object709_Material_#5518_0"]: THREE.Mesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    normal: THREE.MeshStandardMaterial;
    metalmat: THREE.MeshStandardMaterial;
    Plastic_Soft: THREE.MeshStandardMaterial;
    paintmat: THREE.MeshStandardMaterial;
    alpha_glass: THREE.MeshStandardMaterial;
    glassmat: THREE.MeshStandardMaterial;
    Material_5511: THREE.MeshStandardMaterial;
    Material_5512: THREE.MeshStandardMaterial;
    glass_transp: THREE.MeshStandardMaterial;
    interiors: THREE.MeshStandardMaterial;
    alpha: THREE.MeshStandardMaterial;
    outline: THREE.MeshStandardMaterial;
    Material_5516: THREE.MeshStandardMaterial;
    alpha_0: THREE.MeshStandardMaterial;
    Material_5518: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 001";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function TokioScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.03} />
      <fog attach="fog" args={["#ff5020", 5, 18]} />
      <spotLight
        angle={0.14}
        color="#ffd0d0"
        penumbra={1}
        position={[25, 50, -20]}
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
        castShadow
      />
      <Sky scale={1000} sunPosition={[2, 0.4, 10]} />
      <Suspense fallback={null}>
        <LittlestTokyo scale={0.02} position={[0, 2.5, 0]} />
      </Suspense>
    </Canvas>
  );
}

function LittlestTokyo({ ...props }) {
  // This hook gives you offets, ranges and other useful things
  const { scene, nodes, animations } = useGLTF(
    "/models/LittlestTokyo-transformed.glb"
  );
  const { actions } = useAnimations(animations, scene) as unknown as {
    actions: GLTFActions;
  };
  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );
  useEffect(() => void (actions["Take 001"].play().paused = true), [actions]);
  useFrame((state, delta) => {
    const action = actions["Take 001"];
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const scrollElement = document.querySelector("main");
    if (!scrollElement) return;
    const offset =
      1 - (scrollElement.scrollTop - document.body.offsetHeight) / 100;
    // console.log(offset);
    action.time = THREE.MathUtils.damp(
      action.time,
      (action.getClip().duration / 2) * offset,
      100,
      delta
    );
    state.camera.position.set(
      Math.sin(offset) * -10,
      Math.atan(offset * Math.PI * 2) * 5,
      Math.cos((offset * Math.PI) / 3) * -10
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <primitive object={scene} {...props} />;
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload("/models/LittlestTokyo-transformed.glb");
