window.addEventListener('load',init);

//Global variables

//all available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}


//to change level
let currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let highestScore =  0;
let isPlaying;

//DOM elements
const level = document.querySelector('.level-choice')
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const highscoreDisplay = document.querySelector('#highscore');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'manifest',
    'soliloquy',
    'pulchitrudinous',
    'humble',
    'vigorous',
    'loquacious'
  ];


function init() {
    
    //show number of seconds
    seconds.innerHTML = currentLevel;
    //load a word from list of words
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch);
    //call countdown every second
    setInterval(countdown, 1000);
    //check the status of the game
    setInterval(checkStatus, 50);
}

//start match
function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel+1;
        showWord(words);
        wordInput.value='';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    } else{
        scoreDisplay.innerHTML = score;
    }
    //if this is the highest score so far update the score
    if(score > highestScore){
        highestScore = score;
        highscoreDisplay.innerHTML = highestScore;
    }
}

//match the current word to the word input
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'Correct!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;
    }
}
//pick and show a random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown(){
    //make sure time is not run out
    if(time > 0){
       time--;
    } 
    else if(time === 0){
        //Game over
        isPlaying = false;
    }
    //display time
    timeDisplay.innerHTML = time;
}

//check status of the game
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over!!';
        score = -1;
    }
}