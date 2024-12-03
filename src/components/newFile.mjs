import { initShader } from "./WaveEffect.astro.inline.mjs";

initShader()
    .then(({ cleanup, gl }) => {
        const offsetXLocation = gl.getUniformLocation('u_offset_x');
        const offsetYLocation = gl.getUniformLocation('u_offset_y');
        window.addEventListener('unload', cleanup);
        window.addEventListener('mousemove', event => {
            console.log(event.clientX - window.innerWidth / 2);
            // gl.uniform1f(offsetXLocation, event.clientX)
        });
    })
    .catch(err => {
        console.error('Shader initialization failed:', err);
    });
