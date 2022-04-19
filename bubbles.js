let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let color = "#0095DD"
let fps = 15;
let ang = 0;

let brickRowCount = 5;
let brickColumnCount = 20;
let brickPadding = 12;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bubbles = [];
for(c=0; c<brickColumnCount; c++) {
    bubbles[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bubbles[c][r] = { x: 0, y: 0, status: 1, value: 1 };
    }
}
console.log(bubbles)
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawBubbles() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bubbles[c][r].status == 1) {

                n = 0;
                let bubble = bubbles[c][r];
                

                let brickX = (c*(ballRadius+brickPadding))+brickOffsetLeft;
                let brickY = (r*(ballRadius+brickPadding))+brickOffsetTop;
                bubbles[c][r].x = brickX;
                bubbles[c][r].y = brickY;
                ctx.beginPath();
                ctx.arc(brickX, brickY, ballRadius, 0, Math.PI*2);
                ctx.fillStyle = color;
	            ctx.Stroke=10
                ctx.fill();
                ctx.closePath();
                
            }
            
        }
        
    }
}


function draw() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBubbles();
    drawBall();
}

draw();