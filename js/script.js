{
const rock = 'kamień';
      paper = 'papier';
      scissors = 'nożyce';
      computerMove = getMoveName(randomNumber);
      playerMove = getMoveName(playerInput) ;


const displayResult = function(computerMove, playerMove){
            if ( computerMove == rock && playerMove == paper){
            printMessage('Ty wygrywasz!');
          } else if ( computerMove == paper && playerMove == scissors){
            printMessage('Ty wygrywasz!');
          } else if ( computerMove == scissors && playerMove == rock){
            printMessage('Ty wygrywasz!');
          } else if( computerMove == rock && playerMove == rock){
            printMessage('Remis. Zagraj jeszcze raz.');
          } else if ( computerMove == paper && playerMove == paper){
            printMessage('Remis. Zagraj jeszcze raz.');
          } else if ( computerMove == scissors && playerMove == scissors){
            printMessage('Remis. Zagraj jeszcze raz.');
          } else {
            printMessage('Przegrana. Spróbuj jeszcze raz:(')
          }
        }

const playGame = function(playerInput){
	clearMessages()

	const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

	const getMoveName = function(moveNumber){
	    if(moveNumber == 1) {
	    return(rock);
	  } else if (moveNumber == 2) {
	    return(paper);
	  } else if (moveNumber == 3) {
	    return(scissors);
	  } else {
	    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
	console.log(typeof randomNumber);
	    return 'nieznany ruch';
	  }
	}

	//const computerMove = getMoveName(randomNumber) ;

        printMessage('Mój ruch to: ' + computerMove);


        console.log('Gracz wpisał: ' + playerInput);

        //const playerMove = getMoveName(playerInput) ;

        printMessage('Twój ruch to: ' + playerMove);

	displayResult()
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
}

