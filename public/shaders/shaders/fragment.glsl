#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 12;

void main() {
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);

    float len;

    for (int i = 0; i < AMOUNT; i++) {
        len = length(vec2(coord.x, coord.y));
        
        coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 6.0);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 4.0);
    }

    float pattern = cos(len) * 0.5 + 0.5;
    
    gl_FragColor = vec4(vec3(cos(len)), pattern);
}