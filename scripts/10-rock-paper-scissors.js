let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElement();

/*if (!score) {
  score = {
    wins:0,
    losses:0,
    ties:0
  }
}
*/

function play(playerMove){
  const computerMove = pickComputerMove();  
  let result ='';
  if(playerMove==='Scissors') {
    if(computerMove==='Rock') {
      result='You lose';
    }
    else if(computerMove==='Scissors') {
      result='Tie';
    }
    else {
      result='You win';
    }
  }
  else if (playerMove==='Paper') {
    if(computerMove==='Rock') {
      result='You win';
    }
    else if(computerMove==='Scissors') {
      result='You lose';
    }
    else {
      result='Tie';
    }
  }
  else{
    if(computerMove==='Rock') {
      result='Tie';
    }
    else if(computerMove==='Scissors') {
      result='You win';
    }
    else {
      result='You lose';
    }
  }

  if(result==='You win') {
    score.wins++;
  }
  else if(result==='You lose') {
    score.losses++;
  }
  else if(result==='Tie') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You
  <img class="move-icon" src="images/${playerMove}-emoji.png" alt="">
  <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
  Computer`;

  
}

function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function pickComputerMove(){
  const randomNum = Math.random();

  let computerMove = '';

  if(randomNum>=0 && randomNum<1/3){
    computerMove = 'Rock';
  }
  else if(randomNum>=1/3 && randomNum<2/3){
    computerMove = 'Paper';
  }
  else {
    computerMove = 'Scissors';
  }
  return computerMove;
}