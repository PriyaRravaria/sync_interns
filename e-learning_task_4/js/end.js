const  finalScore = document.querySelector('#finalScore')
const winner = document.querySelector('#winner') 
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

if(mostRecentScore==400)
{
  winner.innerHTML="You have won the game 👑"
}