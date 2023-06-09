document.getElementById('levelForm').addEventListener('submit', play)

function play(e) {
    e.preventDefault();
    const playGround = document.getElementById('playground');
    playGround.innerHTML = '';
    document.querySelector('h3').innerHTML = `Select the difficulty and press Play!`
    const level = document.getElementById('level').value; /* easy = 100 ,medium = 81, hard = 49 */
    let squareNumber;
    const nBombs = 16;
    let userScore = 0;
    const bombAudio = new Audio('./audio/bLungo.mp3');
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
            square.addEventListener('click', () => {
                if (!document.querySelector('.bomb')){bombAudio.play();}
                square.classList.add('bomb');
                const userResult = userScore;
                const allSquares = document.querySelectorAll('.square')
                clickAll(allSquares);
                document.querySelector('h3').innerHTML = `You have achieved a score of ${userResult}`;
            })
        }else{
            square.addEventListener('click', () => {
                if (!this.classList.contains('safe')){
                    square.classList.add('safe');
                    if (!document.querySelector('.bomb')){
                        userScore ++
                        document.querySelector('h3').innerHTML = `Your score is: ${userScore}`
                        square.style.animation = 'boing 0.4s ease-in-out'
                    }else{
                        square.style.backgroundColor = 'var(--primary-color)'
                    }
                }
            })
        }
        playGround.appendChild(square);
    }
}
