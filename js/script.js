document.getElementById('levelForm').addEventListener('submit', play)




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
    const bombsArray = generateBombs(nBombs, squareNumber)
    for (let i = 1; i <= squareNumber; i++){
        const square = drawSquare(i, squarePerRow);
        if (bombsArray.indexOf(i) >= 0) {
            square.addEventListener('click', function(){
                square.classList.add('bomb');
            })
        }else{
            square.addEventListener('click', function(){
                square.classList.add('safe');
            })
        }
        console.log(square);
        playGround.appendChild(square);
    }
}
