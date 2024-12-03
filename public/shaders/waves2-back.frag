#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926538
#define ITERATION_MAX 20

uniform vec2 ub_resolution;
uniform float ub_time;
uniform vec3 ub_colors[3];

uniform float ub_offset_x;
uniform float ub_offset_y;
uniform int ub_distortion_iterations;
uniform float ub_scale;
uniform float ub_circle_limit;
uniform float ub_fog_of_war;
uniform float ub_vertical_animation_speed;
uniform float ub_horizontal_animation_speed;
uniform float ub_interference;
uniform float ub_fading;

vec3 color1 = vec3(0.5, 0.8, 1.0);
vec3 color2 = vec3(0.1, 0.4, 0.8);
vec3 color3 = vec3(0.9, 0.9, 1.0);

void main() {
    vec2 coord = 1.0 / ub_scale * (gl_FragCoord.xy - ub_resolution / 2.0) / min(ub_resolution.y, ub_resolution.x);
    float initialLen = length(coord);

    float len;
    float interference_accamulator = ub_interference;

    for (int i = 0; i < ITERATION_MAX; i++) {
        len = length(vec2(
            coord.x - cos(ub_time * ub_vertical_animation_speed) + ub_offset_x / 1000.0,
            coord.y - sin(ub_time * ub_horizontal_animation_speed) + ub_offset_y / 1000.0
        ));

        coord.x = coord.x - cos(coord.y + sin(len)) + cos(ub_time * ub_vertical_animation_speed);
        coord.y = coord.y + sin(coord.x + cos(len)) + sin(ub_time * ub_horizontal_animation_speed);

        if (i >= ub_distortion_iterations) {
            break;
        }
    }

    vec3 baseColor = mix(color1, color2, cos(len));
    baseColor = mix(baseColor, color3, 0.0);

    float alpha = exp(-(len - ub_circle_limit * PI) * ub_fog_of_war);
   
    gl_FragColor = vec4(baseColor, alpha);
}