const luckyNumber = Math.floor(Math.random() * 20);

console.log("Lucky Number= "+luckyNumber);

const userInput = document.getElementById('guessing');
const message = document.getElementById('message');
const checkBtn = document.getElementById('check');
const main = document.querySelector('main');
//hjruigjrjgvituobitohbuvfhfi
function CheckNum(){
    const userGuess= Number(userInput.value);

    if(userGuess === luckyNumber){
        message.innerHTML="you guessed it right!!! 🎉🎉";
        main.style.backgroundColor = 'green';
    } else {
        main.style.backgroundColor = 'red';
        if(userGuess > luckyNumber){
            message.textContent="your guess is higher 😢";
        } else{
            message.textContent="your guess is lower 😢";
        }
    }
}

checkBtn.addEventListener('click', CheckNum);

