"use strict"; // Paul Slaymaker, paul25882@gmail.com
const body=document.getElementsByTagName("body").item(0);
body.style.background="#000";
const EM=location.href.endsWith("em");
const TP=2*Math.PI;
const CSIZE=400;

const ctx=(()=>{
  let d=document.createElement("div");
  d.style.textAlign="center";
  body.append(d);
  let c=document.createElement("canvas");
  c.width=c.height=2*CSIZE;
  d.append(c);
  return c.getContext("2d");
})();
ctx.translate(CSIZE,CSIZE);

onresize=()=>{ 
  let D=Math.min(window.innerWidth,window.innerHeight)-40; 
  ctx.canvas.style.width=ctx.canvas.style.height=D+"px";
}

const getRandomInt=(min,max,low)=>{
  if (low) return Math.floor(Math.random()*Math.random()*(max-min))+min;
  else return Math.floor(Math.random()*(max-min))+min;
}

function Color() {
  const CBASE=159
  const CT=255-CBASE;
  this.RK1=80+80*Math.random();
  this.GK1=80+80*Math.random();
  this.BK1=80+80*Math.random();
  this.RK2=TP*Math.random();
  this.GK2=TP*Math.random();
  this.BK2=TP*Math.random();
  this.set=()=>{
    let red=Math.round(CBASE+CT*Math.cos(this.RK2+t/this.RK1));
    let grn=Math.round(CBASE+CT*Math.cos(this.GK2+t/this.GK1));
    let blu=Math.round(CBASE+CT*Math.cos(this.BK2+t/this.BK1));
    this.v="rgb("+red+","+grn+","+blu+")";
  }
  this.set();
}

var stopped=true;
var start=()=>{
  if (stopped) { 
    stopped=false;
    requestAnimationFrame(animate);
  } else {
    stopped=true;
  }
}
ctx.canvas.addEventListener("click", start, false);

var t=0;
var animate=(ts)=>{
  if (stopped) return;
  t++;
  R3=R2-0.7*R2*Math.pow(Math.sin(t/210),2);
//d=D*Math.pow(Math.sin(t/400),2);
  f=Math.pow(Math.cos(t/400),2);
  k=-(2*Math.PI/8-Math.PI/4*Math.cos(t/100));
  color.set();
  draw();
  requestAnimationFrame(animate);
}

var color=new Color();

onresize();

ctx.lineWidth=2;
var R2=100;
var R3=R2;
var k=-Math.PI/8;
var f=1;

var draw=()=>{
  let z=-TP*t/4000;
  let z2=-3.9*z;
  for (let i=0; i<3; i++) {
    let zz=z+i*TP/3;
    let x=200*(f*Math.cos(zz)+(1-f)*Math.cos(2*zz));
    let y=200*(f*Math.sin(zz)-(1-f)*Math.sin(2*zz));
    for (let j=0; j<3; j++) {
      let z3=z2+j*TP/3;
      let x2=x+R2*Math.cos(z3);
      let y2=y+R2*Math.sin(z3);
      ctx.beginPath();
ctx.ellipse(x2,y2,R2,R3,z3,Math.PI,TP+k);
      ctx.lineCap="round";
      ctx.lineWidth=10;
      ctx.strokeStyle="#0000000C";
      ctx.stroke();
      ctx.lineCap="butt";
      ctx.lineWidth=2;
      ctx.strokeStyle=color.v;
      ctx.stroke();
    }
  }
}

start();