window.onload= function(){
    addColor();
}
for (let i =0; i<9;i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);

}
const btn = document.querySelector('.btn')
const boxes = document.querySelectorAll('.box')

function HexColor () {
    const chars = '1234567890abcdef';
    var colorLength = 6;
    var color =''

    for(var i=0;i<colorLength; i++) {
        var randomColor = Math.floor(Math.random() * chars.length)
        color += chars.substring(randomColor, randomColor+1);
    }
    return '#' + color;
}
function addColor() {
    boxes.forEach(e=> {
        var newColor = HexColor();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}

btn.addEventListener('click', addColor);