/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score , roundscore , activePlayer , gamePlaying ;            // OR var score1 = 0 ; var score2 = 0 ;

init() ; 

//dice = Math.floor(Math.random() * 6) + 1 ;
//console.log(dice);

// object that will give us access to the DOM is the Document Object . 

// document.querySelector('#current-' + activePlayer).textContent = dice ;  // SETTER , sts the value
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>' ;

/* It is a getter ,  var x = document.querySelector('#score-0').textContent ;
console.log(x);  */


/* function btn() {
    // Do 
}
btn();   */

document.querySelector('.btn-roll').addEventListener('click' , function() {

    if(gamePlaying)   {           // gamePlaying variable is already true or false
    
    // 1. Random Number 
    var dice = Math.floor(Math.random() * 6) + 1 ;

    // 2. Display the Result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block' ;
    diceDOM.src = 'dice-' + dice + '.png' ;  // E.g : when dice gets 4 then it becomes dice-4.png , 

    // 3.

    if(dice !== 1 ) {  // if dice is different to one // !== doesnot perform type coercion 
        // Add score
        roundscore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundscore ;  // display the roundscore
  
    } else {
        // Next player
       nextPlayer(); 
    }
}
 } ) ;


 document.querySelector('.btn-hold').addEventListener('click' , function() {

    if(gamePlaying)  {

          // add CURRENT score to GLOBAL score
    score[activePlayer] += roundscore ; 

    //Upade the UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer] ;

    // Check if the player won the game 
    if(score[activePlayer] >= 30) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER' ;
        document.querySelector('.dice').style.display = 'none' ;
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying  = false ;
        
    } else {
         // Next player
     nextPlayer(); 
    }
   }
     }) ;

   // Next player
 function nextPlayer() 
{ 
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundscore = 0 ; // roundscore is reset to zero

        document.getElementById('current-0').textContent = '0' ;
        document.getElementById('current-1').textContent = '0' ;

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
   
        document.querySelector('.dice').style.display = 'none';
     }


     document.querySelector('.btn-new').addEventListener('click' , init) ;

     function init ()  {
         score = [0 , 0] ;
         activePlayer = 0 ;
         roundscore = 0 ;
         gamePlaying = true ;
         document.querySelector('.dice').style.display = 'none' ; 

         document.getElementById('score-0').textContent = '0' ;
         document.getElementById('score-1').textContent = '0' ;
         document.getElementById('current-0').textContent = '0' ;
         document.getElementById('current-1').textContent = '0' ;     
         document.getElementById('name-0').textContent = 'PLAYER 1' ;
         document.getElementById('name-1').textContent = 'PLAYER 2' ;
     
         document.querySelector('.player-1-panel').classList.remove('winner');
         document.querySelector('.player-0-panel').classList.remove('winner');
         document.querySelector('.player-0-panel').classList.remove('active');
         document.querySelector('.player-1-panel').classList.remove('active');
         document.querySelector('.player-0-panel').classList.add('active');

}