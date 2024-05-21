let stri = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
let strings = ["let","int","Math","print","input","I/O","smooth","Marketing","Javascript","shader","glsl","Programmieren"];
let run = 0;
function choose(){
    if(Math.random()<.2){
        return strings[Math.floor(Math.random()*strings.length)];
    }
    return stri[Math.floor(Math.random()*(stri.length-1))];
}
function chooseString(num){
    let str = "";
    for(let i = 0; i < num; i++){
        str += choose();
    }
    return str;
}
document.getElementById("digi").addEventListener("mousemove",()=>{
    if(run>3){
        document.getElementById("digital").innerText = chooseString(2000);
        run = 0;
    }else{
        run++;
    }
});
document.getElementById("digital").innerText = chooseString(2000);

//Shader

let theShader;
let myPTag;
let custom = 0;
function preload(){
  theShader = loadShader('../assets/basic.vert', '../assets/basic2.frag');
}

function setup() {
  let shader = createCanvas(document.getElementById('art').offsetWidth, document.getElementById("art").offsetHeight, WEBGL);
  shader.parent("art");
  custom = Math.random();
}
function windowResized() {
    resizeCanvas(document.getElementById('art').offsetWidthWidth, document.getElementById('art').offsetHeight);
  }
function draw() {
  shader(theShader);
  theShader.setUniform('iTime', frameCount * 0.01);
  theShader.setUniform('custom', custom);
  theShader.setUniform('iResolution', [width, height]);
  theShader.setUniform('iMouse', [mouseX,mouseY]);
  rect(0,0,document.getElementById('art').offsetWidth, document.getElementById("art").offsetHeight);
}

//let fin = document.getElementById("fin");
//fin.innerHTML = "Hallo";

function email(Name, Klasse){
  window.open(`mailto:handel.schuelerfirma@gmail.de?subject=Bestellung&body=Sehr geehrte Schülerfirma,%0D%0A%0D%0AIch würde gerne bei euch mitmachen.%0D%0A%0D%0AMit freundlichen Grüßen,%0D%0A${Name}`);
}