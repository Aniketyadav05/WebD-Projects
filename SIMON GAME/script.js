let highest_score = 0;
let gameseq = [];
let userseq = [];
let h2 = document.querySelector('h2');

 
let btns = ["btn-1" , "btn-2" , "btn-3" , "btn-4"];
let gamestart = false;
let level = 0;


let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(gamestart==false){
        
        gamestart = true;
        levelUp();
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
 
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    level++;
    userseq =[];
    h3.innerText = `LEVEL ${level}`;
    

    let index = Math.floor(Math.random(btns) * 4);
    let color = btns[index];
    let randbtn = document.querySelector(`.${color}`);
    gameseq.push(color);
    btnflash(randbtn);
    let score = level;
    
    if(score>highest_score){
        highest_score = score;
        h2.innerText = `HIGHEST SCORE: ${highest_score * 2}`;
        
    }
    else {
        console.log(`highest score ${highest_score}`);
        h2.innerText = `HIGHEST SCORE: ${highest_score * 2}`;
    }
    
}

function checked(idx) {
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,500);
        }
        
    }
    else {
        h3.innerHTML = `GAME OVER! YOUR SCORE WAS <b>${level * 2}</b> <br> PRESS ANY KEY TO START AGAIN`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout( function (){
            document.querySelector('body').style.backgroundColor = 'aqua';
        }, 100)
        reset();
    }
        
}

function pressed(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checked(userflash.length-1);
}

let allbtn = document.querySelectorAll('.btn');

for( btn of allbtn) {
    btn.addEventListener("click", pressed);
}

function reset() {
    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0;
}