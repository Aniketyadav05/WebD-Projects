var timer = 60;
var score = 0;
var hitrn = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#Score").textContent = score;
}
function getHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#Hitvalue").textContent = hitrn;
}
function makeBubble(){
    var bubbles = ""
    for(var i =1;i<=168;i++){
        var rn = Math.floor(Math.random()*10)
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = bubbles
}
function runTimer(){
    var timeKaint=setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else{
            clearInterval(timeKaint);
            
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over Your score was: ${score} </h1> <button onclick="restartTimer()" id="restartBtn" class="button-3">Restart</button>`;

            

        }
        
    },1000)
}
function restartTimer(){
    location.reload();
};
document.querySelector("#pbottom").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent)
    if(clickedNum == hitrn){
        increaseScore();
        getHit();
        makeBubble();
    }
})
runTimer();
makeBubble();
getHit();