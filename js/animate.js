// module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Bodies = Matter.Bodies,
Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.getElementById("preBack"),
engine: engine,
options: {
    height: window.innerHeight,
    width: window.innerWidth,
    background: 'transparent',
    wireframeBackground: 'transparent'
}
});

// create two boxes and a ground
var boxA = Bodies.rectangle(620, 550, 80, 180);
var boxB = Bodies.rectangle(730, 550, 80, 180);
var ground = Bodies.rectangle(800, 610, 810, 60, { isStatic: true });
var fixed = Bodies.rectangle(560, 550, 60, 60);
var circle = Bodies.circle(670, 250, 80, 180);

// add all of the bodies to the world
Composite.add(engine.world, [fixed,boxA, boxB, ground,circle]);
document.body.addEventListener("keydown",(e)=>{
if(e.key=="k"){
    Composite.add(engine.world,[Bodies.circle(670, 100, 80, 180)]);
}
if(e.key=="r"){
    Composite.add(engine.world,[Bodies.rectangle(670, 100, 60, 60)]);
}
});
// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
function updateRotation() {
Matter.Body.setAngle(ground, ground.angle + .01);
requestAnimationFrame(updateRotation);
}
window.requestAnimationFrame(updateRotation);