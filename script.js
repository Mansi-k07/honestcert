/* UPI */

let upi="7858980950@pthdfc";

document.getElementById("upiLink").href=
`upi://pay?pa=${upi}&pn=Imandar Award&am=30&cu=INR`;


/* moving no button */

function move(btn){

btn.style.position="relative";

btn.style.left=(Math.random()*200-100)+"px";

btn.style.top=(Math.random()*200-100)+"px";

}

noBtn.onmouseover=()=>move(noBtn);
noBtn2.onmouseover=()=>move(noBtn2);


/* flow */

function showReady(){

q1.classList.add("hidden");
ready.classList.remove("hidden");

}

function showQR(){

ready.classList.add("hidden");
payment.classList.remove("hidden");

}

function paid(){

payment.classList.add("hidden");
nameBox.classList.remove("hidden");

}


/* generate certificate using JPG template */

function generateCert(){

let name=document.getElementById("userName").value;

if(name=="") name="Imandar Insaan";

nameBox.classList.add("hidden");
certBox.classList.remove("hidden");

confetti();

let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let img=new Image();

/* IMPORTANT: using JPG template */

img.src="certificate.jpg";

img.onload=function(){

ctx.drawImage(img,0,0,900,600);

/* name */

ctx.font="40px Cinzel";
ctx.fillStyle="black";
ctx.textAlign="center";

ctx.fillText(name,450,300);


/* certificate number */

let certNo="MK-"+Math.floor(Math.random()*1000000);

ctx.font="20px Cinzel";

ctx.fillText("Certificate No: "+certNo,180,520);


/* date */

let date=new Date().toLocaleDateString();

ctx.fillText("Date: "+date,180,550);


/* signature */

ctx.font="50px Great Vibes";

ctx.fillText("Mansi Kashyap",700,530);


/* gold seal */

let seal=new Image();

seal.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gold_Seal.png/240px-Gold_Seal.png";

seal.onload=function(){

ctx.drawImage(seal,390,350,120,120);

};

};

}


/* download as JPG */

function downloadCert(){

let canvas=document.getElementById("canvas");

let link=document.createElement("a");

link.download="Imandar-Certificate.jpg";

link.href=canvas.toDataURL("image/jpeg",1);

link.click();

}


/* confetti */

function confetti(){

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";
c.style.height="8px";

c.style.background=
`hsl(${Math.random()*360},100%,50%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

document.body.appendChild(c);

let fall=setInterval(()=>{

let top=parseInt(c.style.top);

if(top>window.innerHeight){

clearInterval(fall);
c.remove();

}

c.style.top=top+5+"px";

},15);

}

}
