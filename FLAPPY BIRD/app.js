let board;
let boardwidth = 360;
let boardheight = 640;
let context;

let birdWidth = 34;
let birdHeight = 24;
let birdX = boardwidth/8;
let birdY = boardheight/2;

let birdImg;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}
let pipes = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardwidth;
let pipeY = 0;

let pipeTopImg;
let pipeBottomImg;

let velocityX = -2;
let velocityY = 0;
let gravity = 0.4;

let gameOver = false;

let score = 0;
window.onload = function(){
    board = document.getElementById('board');
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");

    birdImg = new Image();
    birdImg.src = 'flappybird.png';
    birdImg.onload = function(){
        context.drawImage(birdImg,bird.x , bird.y , bird.width , bird.height);
    }
    pipeTopImg = new Image();
    pipeTopImg.src = 'toppipe.png'

    pipeBottomImg = new Image();
    pipeBottomImg.src = 'bottompipe.png';
    requestAnimationFrame(Update);
    setInterval(placePipes,1500);

    document.addEventListener("keydown",moveBird);
}

function Update() {
    requestAnimationFrame(Update)
    if(gameOver){
        return;
    }

    context.clearRect(0,0, board.width,board.height)

    velocityY +=gravity;
    bird.y = Math.max(bird.y + velocityY , 0);
    context.drawImage(birdImg,bird.x , bird.y , bird.width , bird.height);

    if(bird.y > board.height) {
        gameOver = true
    }
    for(let i =0; i<pipes.length; i++){
        let pipe = pipes[i];
        pipe.x+=velocityX;
        context.drawImage(pipe.img , pipe.x , pipe.y , pipe.width , pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width) {
            score+=5;
            pipe.passed = true;
        }

        if(Colission(bird, pipe)) {
            gameOver = true;
        }
    }
    while(pipes.length >0 && pipes[0].x < -pipeWidth){
        pipes.shift();
    }
    context.fillStyle = "red";
    context.font = "45px Verdana";
    context.fillText(score, 5, 45);

    if(gameOver) {
        context.fillText("GAME OVER",  50, 250)
    }

}

function placePipes(){
    if(gameOver){
        return;
    }
    let randomPipeY = pipeY-pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = board.height/4;

    let toppipe = {
        img : pipeTopImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height :pipeHeight,
        passed : false
    }
    pipes.push(toppipe);

    let bottompipe = {
        img : pipeBottomImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + openingSpace,
        width : pipeWidth,
        height : pipeHeight,
        passed : false
    }
    pipes.push(bottompipe)
}

function moveBird(e) {
    if(e.code == "Space" || e.code =="ArrowUp" || e.code == "keyX"){
        velocityY = -6;
    }

    if(gameOver) {
        bird.y = birdY;
        pipes = [];
        score =0;
        gameOver = false;
    }

}

function Colission(a,b) {
    return a.x < b.x + b.width && 
           a.x + a.width > b.x &&
           a.y < b.y +b.height &&
           a.y +a.height >b.y
}