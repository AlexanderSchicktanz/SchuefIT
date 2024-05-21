/*
The result of this shader looks really nice but is a bit jagged at times.
Can you make it smoother?
*/
precision mediump float;

// this is the same variable we declared in the vertex shader
// we need to declare it here too!
varying vec2 vTexCoord;
uniform float iTime;
uniform float custom;
uniform vec2 iMouse;
uniform vec2 iResolution;

vec2 rotate(vec2 uv, float angle){
    vec2 sol;
    uv-=vec2(.5,.5);
    angle *= (1.-length(uv-vec2(.5)));
    sol.x = uv.x*cos(angle)-uv.y*sin(angle);
    sol.y = uv.y*cos(angle)+uv.x*sin(angle);
    sol+=vec2(.5,.5);
    return sol;
}


void main() {
    vec2 uv = vTexCoord/iResolution.xy;
    uv = rotate(vTexCoord,mod(iTime,9.)/1.);
    // Time varying pixel color
    vec3 col = vec3(1.);
    if(length(uv-vec2(mod(iTime,1.5),.5))<.2){
        col = vec3(.25+sin(iTime)/4.,.25+cos(iTime)/4.,.25+tan(iTime)/4.);
    }
    // Output to screen
    gl_FragColor = vec4(col,1.);
}
