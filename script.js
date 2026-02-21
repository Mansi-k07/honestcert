function generateCert(){

let name=document.getElementById("userName").value;

if(name=="") name="Imandar Insaan";

nameBox.classList.add("hidden");
certBox.classList.remove("hidden");

confetti();

let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

let img=new Image();

img.onload=function(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.drawImage(img,0,0,900,600);

ctx.font="bold 40px Cinzel";
ctx.fillStyle="#000";
ctx.textAlign="center";

ctx.fillText(name,450,300);

let certNo="MK-"+Math.floor(Math.random()*1000000);

ctx.font="20px Cinzel";

ctx.fillText("Certificate No: "+certNo,200,520);

let date=new Date().toLocaleDateString();

ctx.fillText("Date: "+date,200,550);

ctx.font="50px Great Vibes";

ctx.fillText("Mansi Kashyap",700,530);

let seal=new Image();

seal.onload=function(){

ctx.drawImage(seal,390,350,120,120);

};

seal.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gold_Seal.png/240px-Gold_Seal.png";

};

img.src="certificate.jpg";

}
