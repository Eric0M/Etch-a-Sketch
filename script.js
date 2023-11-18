let color = 'black'
let click = true;


function populateBoard(size){
    
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size
    for(let i = 0; i<amount;i++){
        let square = document.createElement("div");
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement('beforeend', square);
    }
}

function changeColor(Choice){
    color = Choice;
    
}

function colorSquare(){
    if (click) {
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%, 1)`;
        }
        else{this.style.backgroundColor = color};
    }
}

function reset(){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}
populateBoard(16)
function changeSize(input){
    if(input >= 2 && input <= 100){
        populateBoard(input)}
    else{
        console.log('Too many squares');
    }
};

document.querySelector(".board").addEventListener("click", () => {
    click = !click
        if(click){
            document.querySelector('.mode').textContent = 'Mode: Coloring';
        }
        else{
    document.querySelector('.mode').textContent = 'Mode: Not Coloring';
        }
})
