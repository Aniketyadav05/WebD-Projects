
let currentMoleTIle;
let currentPlantTile;
let score = 0;
let gameOver = false;
function gameend(score) {
    document.getElementById("finalScore").innerText = score;
    document.getElementById("gameOverModal").style.display = "block";
}

function closeModal() {
    document.getElementById("gameOverModal").style.display = "none";
    gameOver = false;
    score = 0;
    document.getElementById('score').innerText = score.toString();
}



window.onload = function(){
    setGame();
}

function setGame() {
    for(let i =0; i<9; i++){
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener('click',selectTile);
        document.getElementById('board').appendChild(tile);
    }
    setInterval(setMole, 2000);
    setInterval(setPlant,1000);

}
function  getRandomTile() {
    let num = Math.floor(Math.random()*9);
    return num.toString();
}
function setMole() {
    if(gameOver) {
        return;
    }
    
    if(currentMoleTIle){
        currentMoleTIle.innerHTML = "";
    }

    let mole = document.createElement('img');
    mole.src = 'mole.png';

    let num = getRandomTile();
    if(currentPlantTile && currentPlantTile.id == num){
        return;
    }
    currentMoleTIle = document.getElementById(num);
    currentMoleTIle.appendChild(mole);
}
function setPlant(){
    if(gameOver){
        gameend(score);
        return;
    }
    if(currentPlantTile){
        currentPlantTile.innerHTML = "";
    }
    let plant = document.createElement('img');
    plant.src = "plant.png";
    let num = getRandomTile();
    if(currentMoleTIle && currentMoleTIle.id == num){
        return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}
function selectTile() {
    if(gameOver){
        return;
    }
    if(this == currentMoleTIle) {
        score+=10;
        document.getElementById('score').innerText = score.toString();
    }
    else if(this == currentPlantTile) {
        document.getElementById('score').innerText = "GAME-OVER" + score.toString();
        gameOver = true;
    }
}
