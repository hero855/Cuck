import { type TinySliderInfo } from 'tiny-slider'

export { };

declare global {
  interface Window {
    particlesInit: any;
    particlesLoaded: any;
  }
  interface TinySliderInfo extends TinySliderInfo { displayIndex: number };
}

