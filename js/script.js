document.getElementById('levelForm').addEventListener('submit', play)




function play(e) {
    e.preventDefault();
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    document.querySelector('h3').innerHTML = `Seleziona la difficoltà e premi play!`
    const level = document.getElementById('level').value; /* easy = 100 ,medium = 81, hard = 49 */
    let squareNumber;
    const nBombs = 16;
    let userScore = 0
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
    const bombsArray = generateBombs(nBombs, squareNumber)
    for (let i = 1; i <= squareNumber; i++){
        const square = drawSquare(i, squarePerRow);
        if (bombsArray.indexOf(i) >= 0) {
            square.addEventListener('click', function(){
                square.classList.add('bomb');
                const squares = document.getElementById('playground').querySelectorAll('div');
                for (let j = 0; j < squares.length; j++){
                    squares[j].removeEventListener('click')
                }
            })
        }else{
            square.addEventListener('click', function(){
                square.classList.add('safe');
                userScore ++
                document.querySelector('h3').innerHTML = `Your score is: ${userScore}`
            })
        }
        playGround.appendChild(square);
    }
}
