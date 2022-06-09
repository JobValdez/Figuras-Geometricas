const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
console.log("ctx", ctx);


// BUTTONS
const circle = document.getElementById("circle");
const squared = document.getElementById("squared");
const rectangle = document.getElementById("rectangle");
const oval = document.getElementById("oval");
const triangle = document.getElementById("triangle");


circle.addEventListener("click", function(){
    ctx.beginPath();
    // ctx.arc(x1, y1, r, starAngle, endAngle);
    ctx.arc(80,70,60,0,2*Math.PI);
    ctx.fillStyle =("blue");
    ctx.fill();

    console.log("circle");
});

squared.addEventListener("click", function(){
    console.log("squared");

    ctx.fillStyle = "#4DFF00";
    //fillRect(x1,y1,x2,y2);
    ctx.fillRect(230,17,100,100);
});

rectangle.addEventListener("click", function(){
    console.log("rectangle");

    ctx.fillStyle = "#890489";
    //fillRect(x1,y1,x2,y2);
    ctx.fillRect(420,17,180, 80);
});

oval.addEventListener("click", function(){
    console.log("oval");

    ctx.beginPath();
    ctx.moveTo(850, 80); 
    // ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    ctx.bezierCurveTo(850, 0, 650, 0, 650, 80);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(850, 80); 
    // ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    ctx.bezierCurveTo(850, 160, 650, 160, 650, 80);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
});

triangle.addEventListener("click", function(){
    console.log("triangle");

    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(850, 150);
    // lineTo(x2, y2);
    ctx.lineTo(960, 150);
    ctx.lineTo(900, 20);
    ctx.lineTo(852, 150);

    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle =("orange");
    ctx.fill();
});

