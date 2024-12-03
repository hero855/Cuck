#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 12;

vec3 color1 = vec3(0.5, 0.8, 1.0);
vec3 color2 = vec3(0.1, 0.4, 0.8);
vec3 color3 = vec3(0.9, 0.9, 1.0);

void main() {
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
    float initialLen = length(coord);

    float len;
    float interference = 0.0;
    vec2 lastCoord = coord;

    for (int i = 0; i < AMOUNT; i++) {
        len = length(vec2(coord.x, coord.y));
        lastCoord = coord;
        
        coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 9.0);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 12.0);
        
        float wave = sin(len * 0.3 - float(i) * 0.5) * cos(len * 0.2);
        interference += wave / (1.0 + initialLen * 0.15);
    }

    interference = abs(interference) / float(AMOUNT);
    float pattern = cos(len);

    vec3 baseColor = mix(color1, color2, pattern);
    baseColor = mix(baseColor, color3, interference);

    float alpha = pattern * interference * (1.0 / (1.0 + length(coord) * 0.2));
    
    gl_FragColor = vec4(baseColor, alpha);
} 