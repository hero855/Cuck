import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";


const map = (val: number, [A, B]: [number, number], [a, b]: [number, number]) => (val - A) * (b - a) / (B - A) + a;

export const use3DAnimationOnScroll = <TAction extends string>(
    actionName: TAction,
    scrollElement: HTMLElement,
    { group, animations, nodes }:
        {
            group: React.RefObject<THREE.Group>,
            animations: THREE.AnimationClip[],
            nodes: {
                [name: string]: THREE.Object3D<THREE.Object3DEventMap>;
            }
        },
    { scrollStart, scrollEnd }: { scrollStart: number, scrollEnd: number }
) => {
    const { actions } = useAnimations(animations, group) as unknown as {
        actions: {
            [key: string]: THREE.AnimationAction;
        };
    };

    // useEffect(() => void (actions[actionName].play().paused = true), [actions]);

    // if (!scrollElement) return;

    // const getTime = (x: number) => map(
    //     x,
    //     [0, scrollElement.scrollHeight],
    //     [scrollStart, scrollEnd]
    // );

    // useFrame((_, delta) => {
    //     const scrollTime = scrollElement.scrollTop / scrollEnd * actions[actionName].getClip().duration;
    //     // console.log(scrollTime / actions[actionName].getClip().duration)

    //     actions[actionName].time = THREE.MathUtils.damp(actions[actionName].time, scrollTime, 100, delta);
    //     requestAnimationFrame(() =>
    //         Object.values(nodes).forEach(
    //             (node) => (node.receiveShadow = node.castShadow = true)
    //         )
    //     );
    // });
};

/* 

currentPercent * max / 100 = currentValue 


*/