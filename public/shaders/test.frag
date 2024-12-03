#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 12;

vec3 color1 = vec3(0.2, 0.5, 0.8);
vec3 color2 = vec3(0.1, 0.3, 0.7);
vec3 color3 = vec3(0.9, 0.7, 0.5);

void main() {
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
    float initialLen = length(coord);

    float len;
    float interference = 0.0;
    vec2 lastCoord = coord;

    for (int i = 0; i < AMOUNT; i++) {
        len = length(vec2(coord.x, coord.y));
        lastCoord = coord;
        
        coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 15.0);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 18.0);
        
        float wave = sin(len * 0.25 - float(i) * 0.5) * cos(len * 0.3);
        interference += wave / (1.0 + initialLen * 0.1);
        
        // Add some randomness to the waves
        coord.x += sin(u_time * 0.01 + float(i)) * 0.05;
        coord.y += cos(u_time * 0.02 + float(i)) * 0.03;
    }

    interference = abs(interference) / float(AMOUNT);
    float pattern = cos(len);

    // Capture environment color
    vec3 envColor = texture2D(envTexture, coord).rgb;

    // Calculate edge distance
    float edgeDistance = length(coord) / 10.0;

    // Blend colors
    vec3 baseColor = mix(color1, color2, pattern);
    baseColor = mix(baseColor, color3, interference);

    // Apply edge transparency
    float alpha = max(pattern * interference * (edgeDistance * 0.5), 0.1);

    // Combine with environment color
    gl_FragColor = vec4(mix(baseColor, envColor, alpha), alpha);
}

