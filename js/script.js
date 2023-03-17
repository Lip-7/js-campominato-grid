document.getElementById('levelForm').addEventListener('submit', play)


function drawSquare(content, width){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${width})`;
    square.style.height = `calc(100% / ${width})`;
    square.innerHTML = content;
    return square;
}
function generateBombs(nBombs, squareNumber){
    const bombsArray = []
    while (bombsArray.length <= nBombs){
        const bomb = randomNumber(squareNumber);
        if (!bombsArray.includes(bomb)) {
            bombsArray.push(bomb);
        }
    }
    return bombsArray
}

function play(e) {
    e.preventDefault();
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    const level = document.getElementById('level').value; /* easy = 100 ,medium = 81, hard = 49 */
    let squareNumber;
    const nBombs = 16;
    
    switch(level){
        case 'easy':
            squareNumber = 100;
            break;
        case 'medium':
            squareNumber = 81;
            break;
        case 'hard':
            squareNumber = 49;
            break;
    }
    let squarePerRow = Math.sqrt(squareNumber);
    const bombs = generateBombs(nBombs, squareNumber)
    for (let i = 1; i <= squareNumber; i++){
        const square = drawSquare(i, squarePerRow);
        square.addEventListener('click', function(){
            square.classList.add('safe')
        })
        playGround.appendChild(square);
    }
}