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
let brickColumnCount = 10;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bubbles = [];
for(c=0; c<brickColumnCount; c++) {
    bubbles[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bubbles[c][r] = { x: 0, y: 0, status: 1 };
        brickRowCount -= 2;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = color;
	ctx.Stroke="10"
    ctx.fill();
    ctx.closePath();
}

function drawBubbles() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(bubbles[c][r].status == 1) {
                let brickX = (c*ballRadius)+brickOffsetLeft;
                let brickY = (r*ballRadius)+brickOffsetTop;
                bubbles[c][r].x = brickX;
                bubbles[c][r].y = brickY;
                console.log(brickX)
                ctx.beginPath();
                ctx.arc(brickX, brickY, ballRadius, 0, Math.PI*2);
                ctx.fillStyle = color;
	            ctx.Stroke="10"
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBubbles();
    drawBall();
}

setInterval(draw, fps);