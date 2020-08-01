{
const playGame = function(playerInput){
	clearMessages()

	const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

	const getMoveName = function(moveNumber){
	    if(moveNumber == 1) {
	    return('kamień');
	  } else if (moveNumber == 2) {
	    return('papier');
	  } else if (moveNumber == 3) {
	    return('nożyce');
	  } else {
	    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
	console.log(typeof randomNumber);
	    return 'nieznany ruch';
	  }
	}

	const computerMove = getMoveName(randomNumber) ;

        printMessage('Mój ruch to: ' + computerMove);


        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput) ;

        printMessage('Twój ruch to: ' + playerMove);

	const displayResult = function(computerMove, playerMove){
	    if ( computerMove == 'kamień' && playerMove == 'papier'){
	    printMessage('Ty wygrywasz!');
	  } else if ( computerMove == 'papier' && playerMove == 'nożyce'){
	    printMessage('Ty wygrywasz!');
	  } else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
	    printMessage('Ty wygrywasz!');
	  } else if( computerMove == 'kamień' && playerMove == 'kamień'){
	    printMessage('Remis. Zagraj jeszcze raz.');
	  } else if ( computerMove == 'papier' && playerMove == 'papier'){
	    printMessage('Remis. Zagraj jeszcze raz.');
	  } else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
	    printMessage('Remis. Zagraj jeszcze raz.');
	  } else {
	    printMessage('Przegrana. Spróbuj jeszcze raz:(')
	  }
	}
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
