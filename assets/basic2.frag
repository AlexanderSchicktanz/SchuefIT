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
    vec2 fragCoord = vTexCoord;
    vec2 uv = fragCoord/iResolution.xy;
    uv = rotate(vTexCoord*2.-vec2(0.,.3+custom/2.),(.5+sin(iTime/9.)/.5)*9.);
    uv = rotate(uv,sin(iTime/5.));
    uv = rotate(uv,tan(iTime/5.)/5.);
    uv+=vec2(sin(iTime/5.)/4.);
    if(length(uv-vec2(1.+sin(iTime),1.+tan(iTime*50.)))>.3){
        gl_FragColor = vec4(0.);
        return;
    }
    // Time varying pixel color
    vec3 col = vec3(1.);
    if(length(uv-vec2((.5+sin(iTime/1.5)/2.),.5))<.2){
        col = vec3(.25+sin(iTime+custom)/4.,.25+cos(iTime+custom/2.)/4.,.25+tan(iTime)/4.);
    }
    gl_FragColor = vec4(col,1.0);
}
