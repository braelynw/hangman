// create a drop down that selects a categoy. When you select a category a set of dashes will
// appear on the screen. Have the code select a random word from an array when they choose the
// categoy. Then have a drop down so you can choose a letter from it. When you press select the
// code will search the word letter by letter and put it in if it is there
var animal = ["zebra", "alpaca", "hippopotamus", "giraffe", "lynx", "orangatang", "dolphin"];
var presidents = ["Nixon", "Johnson", "Obama", "Trump", "Washington","Bush", "Adams", "Jefferson", "Madison"];
var food = ["grape", "orange", "avacado", "peach", "papaya"];
var alphabet = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var word = "";
var lives = 6;
var graveyard = [];
var picked = [];


function giveWord(category){
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
    document.getElementById("blank").innerHTML = printWord(word);
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

function guessLetter(letter){
    whatLives = lives;
    picked.push(letter);
    document.getElementById("blank").innerHTML = printWord(word);
    document.getElementById("lives").innerHTML = lives;

    if (whatLives != lives){
        graveyard.push(letter);
    }

    document.getElementById("graveyard").innerHTML = graveyard;

}

function printWord(){
    var answer = "";
    if(lives>0){
        for (var i = 0; i < word.length; i++){
            if (picked.indexOf(word[i]) > -1){
                answer += word[i]
            }else{
                answer += " _"
            }
        }

    }
    return answer;
}

