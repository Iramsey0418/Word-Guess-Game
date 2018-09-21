// Array of Words\
var wweSuperstars = ['therock','kurtangle','goldberg','tripleh','kane','bigshow']
//Random Generator* Global Vars*
var randomWord = Math.floor(Math.random() * wweSuperstars.length );
var choosenWord = wweSuperstars[randomWord]; 
var rightWord =[];
var wrongWord=[];
var underScore = [];  
//DOM
var underSdoc = document.getElementsByClassName('underscores');
var rightGuessdoc = document.getElementsByClassName('rightGuess');
var wrongGuessdoc = document.getElementsByClassName('wrongGuess');


console.log(choosenWord)

var generateUnderscores = () => {
for (var i = 0; i < choosenWord.length; i++) {
    underScore.push('_'); 
    }
    return underScore;
}

document.addEventListener("keypress", (event) => {
var keyword = String.fromCharCode(event.keyCode);

if(choosenWord.indexOf(keyword) > -1){
    rightWord.push(keyword);
    underScore[choosenWord.indexOf(keyword)] = keyword;
    underSdoc[0].innerHTML = underScore.join(' ');
    rightGuessdoc[0].innerHTML = rightWord;

    if(underScore.join('') == choosenWord){
        alert('YOU WIN CHAMP!');
    }
   

}   
else{
    wrongWord.push(keyword);
    wrongGuessdoc[0].innerHTML = wrongWord;
    
}

});

underSdoc[0].innerHTML = generateUnderscores().join(' ');
//check if right guess
// check if right guess to array
//check if wrong guess to array


