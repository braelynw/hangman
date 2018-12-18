// create a drop down that selects a categoy. When you select a category a set of dashes will
// appear on the screen. Have the code select a random word from an array when they choose the
// categoy. Then have a drop down so you can choose a letter from it. When you press select the
// code will search the word letter by letter and put it in if it is there
var animal = ["zebra", "alpaca", "hippopotamus", "giraffe", "lynx", "orangatang", "dolphin"];
var presidents = ["nixon", "johnson", "obama", "trump", "washington","bush", "adams", "jefferson", "madison"];
var food = ["grape", "orange", "avacado", "peach", "papaya"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var word = "";
var lives = 6;
var graveyard = [];
var picked = [];

function resetVars() {
    lives = 6;
    graveyard= [];
    picked = [];
    makeButtons();
    document.getElementById("word").innerHTML="";


}

function startGame(category){

    resetVars();

    var category = document.getElementById("category").value;
    console.log(category);
    category = parseInt(category);
    if (category == 1){
        word = animal[Math.floor(Math.random() * animal.length)];
    }
    if (category == 2){
        word = presidents[Math.floor(Math.random() * presidents.length)];
    }
    if (category == 3){
        word = food[Math.floor(Math.random() * food.length)];
    }
    console.log(word);

    document.getElementById("lives").innerHTML = lives;
    document.getElementById("graveyard").innerHTML = graveyard;

    makeButtons();
    printWord();
    document.getElementById("note").innerHTML = "NOTE: Press 'PLAY!' at any time to restart game";

}

function makeButtons(){
    var make= "";
    console.log(picked);

    for (var i=0; i<alphabet.length; i++){
        if(picked.indexOf(alphabet[i]) > -1){
            make += "<button value= '" + alphabet[i] + "' id = '" + alphabet[i]
            + "' onclick = 'guessLetter(this.id)' disabled='true'>" + alphabet[i] + "</button>";
        }else{
            make += "<button value= '" + alphabet[i] + "' id = '" + alphabet[i]
                + "' onclick = 'guessLetter(this.id)'>" + alphabet[i] + "</button>";
        }
    }
    document.getElementById("coolButtons").innerHTML = make;

}


function printWord() {
    var answer = "";
    if (lives > 0) {
        for (var i = 0; i < word.length; i++) {
            if (picked.indexOf(word[i]) > -1) {
                answer += word[i]
            } else {
                answer += " _"
            }
        }

    }

    if(answer == word) {
        document.getElementById("word").innerHTML = "Good Job, you got the word! Select a category and press play to play again!"
    }

    document.getElementById("blank").innerHTML = answer;

    if (lives==6){
        document.getElementById("image").src = "img/Hangman-0.png";
    }
    if (lives==5){
        document.getElementById("image").src = "img/Hangman-1.png";
    }
    if (lives==4){
        document.getElementById("image").src = "img/Hangman-2.png";
    }
    if (lives==3){
        document.getElementById("image").src = "img/Hangman-3.png";
    }
    if (lives==2){
        document.getElementById("image").src = "img/Hangman-4.png";
    }
    if (lives==1){
        document.getElementById("image").src = "img/Hangman-5.png";
    }
    if (lives==0){
        document.getElementById("image").src = "img/Hangman-6.png";
    }
}


function guessLetter(letter){
    console.log(letter);
    picked.push(letter);
    document.getElementById(letter).disabled=true;



    if(word.indexOf(letter) == -1){
        lives = lives - 1;
        graveyard.push(letter);

        document.getElementById("graveyard").innerHTML = graveyard;
        document.getElementById("lives").innerHTML = lives;
    }
    if (lives==0){
        document.getElementById("lives").innerHTML = "Oh no! You ran out of lives. Click 'PLAY!' to play again!";
        for (var i=0; i<alphabet.length; i++) {
            document.getElementById(alphabet[i]).disabled = true;
        }
    }

    printWord();

}