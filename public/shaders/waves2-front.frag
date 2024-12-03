#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926538
#define ITERATION_MAX 20

uniform vec2 uf_resolution;
uniform float uf_time;
uniform vec3 uf_colors[3];

uniform float uf_offset_x;
uniform float uf_offset_y;
uniform int uf_distortion_iterations;
uniform float uf_scale;
uniform float uf_circle_limit;
uniform float uf_fog_of_war;
uniform float uf_vertical_animation_speed;
uniform float uf_horizontal_animation_speed;
uniform float uf_interference;
uniform float uf_fading;
uniform float uf_cut_x;
uniform float uf_cut_y;
uniform int uf_top;
uniform int uf_left;

vec3 color1 = vec3(0.5, 0.8, 1.0);
vec3 color2 = vec3(0.1, 0.4, 0.8);
vec3 color3 = vec3(0.9, 0.9, 1.0);

void main() {
    vec2 coord = 1.0 / uf_scale * (gl_FragCoord.xy - uf_resolution / 2.0) / min(uf_resolution.y, uf_resolution.x);
    float initialLen = length(coord);

    float len;
    float interference_accamulator = uf_interference;

    for (int i = 0; i < ITERATION_MAX; i++) {
        len = length(vec2(
            coord.x - cos(uf_time * uf_vertical_animation_speed) + uf_offset_x / 1000.0,
            coord.y - sin(uf_time * uf_horizontal_animation_speed) + uf_offset_y / 1000.0
        ));

        coord.x = coord.x - cos(coord.y + sin(len)) + cos(uf_time * uf_vertical_animation_speed);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(uf_time * uf_horizontal_animation_speed);

        if (i >= uf_distortion_iterations) {
            break;
        }
    }

    vec3 baseColor = mix(color1, color2, cos(len));
    baseColor = mix(baseColor, color3, 0.0);

    float alpha = exp(-(len - uf_circle_limit * PI) * uf_fog_of_war);

    if ((coord.y > -uf_cut_y) == (uf_top == 1) && (coord.x < uf_cut_x) == (uf_left == 1)) {
        alpha = min(max(exp(-(coord.y + uf_cut_y) * 0.8) * 4.0, exp((coord.x - uf_cut_x) * 0.8)), alpha);
    }
   
    gl_FragColor = vec4(baseColor, alpha);
}