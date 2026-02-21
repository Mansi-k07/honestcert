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


/* USER NAME — exact center line par */

ctx.font="bold 38px Cinzel";

ctx.fillStyle="#000";

ctx.textAlign="center";

/* Y position adjusted to match line exactly */

ctx.fillText(name,450,255);


/* CERTIFICATE NUMBER */

let certNo="MK-"+Math.floor(Math.random()*1000000);

ctx.font="18px Cinzel";

ctx.textAlign="left";

ctx.fillText("Certificate No: "+certNo,90,500);


/* DATE */

let date=new Date().toLocaleDateString();

ctx.fillText("Date: "+date,90,530);


/* GOLD SEAL */

let seal=new Image();

seal.onload=function(){

ctx.drawImage(seal,390,320,120,120);

};

seal.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Gold_Seal.png/240px-Gold_Seal.png";

};

/* certificate background */

img.src="certificate.jpg";

}
