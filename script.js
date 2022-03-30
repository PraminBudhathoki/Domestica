let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

// context.fillStyle = "blue";
// context.fillRect(100, 100, 400, 400);

context.beginPath();
context.lineWidth = 4;
context.rect(100, 100, 400, 400);
// context.stroke();

context.beginPath();
context.arc(300, 300, 100, 0, Math.PI * 2);
// context.stroke();
