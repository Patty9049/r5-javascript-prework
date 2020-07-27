function getMoveName(randomNumber, playerInput){
  if(randomNumber, playerInput == 1) {
    printMessage('kamień');
  } else if (randomNumber, playerInput  == 2) {
    printMessage('papier');
  } else if (randomNumber, playerInput  == 3) {
    printMessage('nożyce');
  } else {
    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }
}
function displayResult(argComputerMove,argPlayerMove){
if( computerMove == 'kamień' && playerMove == 'papier'){
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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber) ;

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput) ;

printMessage('Twój ruch to: ' + playerMove);

let computerMove = argComputerMove

let playerMove = argPlayerMove

let displayResult

/*
if( computerMove == 'kamień' && playerMove == 'papier'){
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
}*/
