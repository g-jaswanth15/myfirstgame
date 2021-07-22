var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -40;

const line1 = {
    x:20,
    y:canvas.height/2 +70,
    dx:2
}

const line2 = {
    y:canvas.height/2 +30,
    dx:2
}
const circle = {
    x:600,
    y:canvas.height/2+50,
    dy:2
}
const triangle2 = {
    x:20,
    y:canvas.height/4 +50,
    dx:2
}
const rectangle1 = {
    x:10,
    y:canvas.height/2 +70,
    dx:0.1
}
const rectangle2 = {
    x:10,
    y:canvas.height/4,
    dx:5
}

function player(){

ctx.fillStyle = "pink"
ctx.fillRect(10,canvas.height/4 + 70,canvas.width-20,(canvas.height/2 +70 -canvas.height/4  ))
    
ctx.fillStyle = 'black'
ctx.fillRect(rectangle1.x,rectangle1.y,canvas.width-20,70);

ctx.fillStyle = 'black'
ctx.fillRect(rectangle2.x,rectangle2.y,canvas.width-20,70);

ctx.beginPath()
ctx.fillStyle = "rgb(27, 92, 27)"
ctx.arc(circle.x,circle.y,20,0,2* Math.PI)
ctx.fill()

ctx.beginPath()
ctx.fillStyle = "rgb(0,0,255)"
ctx.moveTo(line1.x,line1.y)
ctx.lineTo(line1.x+20,line2.y)
ctx.lineTo(line1.x+40,line1.y)
ctx.fill()
}
var x = canvas.height/2 +70;
function increment(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    line1.x += line1.dx
    player();

    

    if(circle.y + 20 >= canvas.height/2 +70 || circle.y-20 <=canvas.height/4 +70){
        circle.dy = -circle.dy
    }
    circle.y += circle.dy
    
    animateid =requestAnimationFrame(increment);
   let dist2 =1 
    if(dist2 ==1){

let imgdata1 = ctx.getImageData(circle.x ,circle.y-20,1,2)
let imgdata2 = ctx.getImageData(circle.x -20 ,circle.y, 20,1)
let imgdata3 = ctx.getImageData(circle.x,circle.y,20,1)
//let imgdata4 = ctx.getImageData(circle.x ,circle.y+18,1,2)

// let imgdata1 = ctx.getImageData(circle.x-20 ,circle.y-20,40,40)

red1 = imgdata1.data[0];
green1 = imgdata1.data[1];
blue1 = imgdata1.data[2];

red2 = imgdata2.data[0];
green2 = imgdata2.data[1];
blue2 = imgdata2.data[2];

red3 = imgdata3.data[0];
green3 = imgdata3.data[1];
blue3 = imgdata3.data[2];

// red4= imgdata4.data[0];
// green4 = imgdata4.data[1];
// blue4 = imgdata4.data[2];

let trdata1 =  ctx.getImageData(line1.x ,line2.y,20,20)

// let trdata2 =  ctx.getImageData(line1.x+30,line2.y+20,1,2)
// let trdata3 =  ctx.getImageData(line1.x+10 ,line2.y+20,1,2)
//  r1 = trdata1.data[0];
//  g1 = trdata1.data[1];
//  b1 = trdata1.data[2];

 if(red1 == 0 && green1==0 && blue1 == 255){
     cancelAnimationFrame(animateid)
     console.log("1")
 }
 if(red2 == 0 && green2==0 && blue2 == 255){
    cancelAnimationFrame(animateid)
    console.log("2")
 }
 if(red3 == 0 && green3==0 && blue3 == 255){
    cancelAnimationFrame(animateid)
    console.log("3")
 }

// ctx.putImageData(imgdata1,circle.x-100 ,circle.y-20)
// ctx.putImageData(imgdata2,circle.x-120 ,circle.y)
// ctx.putImageData(imgdata3,circle.x -100,circle.y)
// ctx.putImageData(imgdata4,circle.x-100 ,circle.y+18)
}
}

increment()

addEventListener('click',()=>{

    if(line1.y == canvas.height/2+70){
        line1.y = canvas.height/4 +70;
        line2.y = canvas.height/4 +110
    }
    else if(line1.y == canvas.height/4+70){
        line1.y = canvas.height/2+70;
        line2.y = canvas.height/2 +30
    }
})

addEventListener('keydown',()=>{

    if(line1.y == canvas.height/2+70){
        line1.y = canvas.height/4 +70;
        line2.y = canvas.height/4 +110
    }
    else if(line1.y == canvas.height/4+70){
        line1.y = canvas.height/2+70;
        line2.y = canvas.height/2 +30
    }
})