import { atom } from 'nanostores';

export const $slideOffset = atom(0)
export const $lastSlideUpdate = atom(0)
export const $autoplayTimeout = atom(0)
export const $isPlaying = atom(true)

export const $wavePosX = atom(0)
export const $wavePosY = atom(0)
export const $waveDist = atom(1)
export const $waveScale = atom(0.03)
export const $waveCircleLimit = atom(3)
export const $waveFogOfWar = atom(0.7)
export const $waveVertAnimationSpeed = atom(0.225)
export const $waveHorizAnimationSpeed = atom(0.5)
export const $waveInterference = atom(0)
export const $waveFading = atom(0)
export const $waveCutX = atom(7)
export const $waveCutY = atom(10)
export const $waveCutXDir = atom(0)
export const $waveCutYDir = atom(0)

import { create } from 'zustand';

type State = {
    uniforms: {
        u_time: number,
        u_resolution: [number, number],
        u_pos_x: number,
        u_pos_y: number,
        u_distortion_iterations: number,
        u_scale: number,
        u_circle_limit: number,
        u_fog_of_war: number,
        u_vertical_animation_speed: number,
        u_horizontal_animation_speed: number,
        u_interference: number,
        u_fading: number,
        u_cut_x: number,
        u_cut_y: number,
        u_top: boolean,
        u_left: boolean
    }
}

type Actions = {
    setUniforms: (uniforms: State) => void
}

export const useShaderStore = create<State & Actions>((set) => ({
    uniforms: {
        u_time: 0,
        u_resolution: [0, 0],
        u_pos_x: 0,
        u_pos_y: 0,
        u_distortion_iterations: 0,
        u_scale: 0,
        u_circle_limit: 0,
        u_fog_of_war: 0,
        u_vertical_animation_speed: 0,
        u_horizontal_animation_speed: 0,
        u_interference: 0,
        u_fading: 0,
        u_cut_x: 0,
        u_cut_y: 0,
        u_top: false,
        u_left: false,
    },
    setUniforms: (uniforms: State) => set((state) => ({ uniforms: { ...state.uniforms, ...uniforms } })),
}));
