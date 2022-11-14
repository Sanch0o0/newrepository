const arr = ['rock', 'scissors', 'paper'];
let userName, cont;
let userCount = 0,
    botCount = 0;


const startGame = () => {
    const start = confirm('Hello! Ready to game rock, paper, scissors?');
    if (start) runGame();
}

const runGame = () => {
    userName = prompt('Please, enter your name');
    if (!userName) userName = 'User';
    userChoiceFunc();
}

const userChoiceFunc = () => {
    const userChoice = prompt('Rock, Scissors, Paper... Please make your move');
    if (userChoice === null) return alert('You aborted this game. To start new game just refresh the page.');
    (arr.includes(userChoice.toLocaleLowerCase())) ? compareResult(userChoice): userChoiceFunc();
}

const compareResult = (choice) => {
    const randPosition = arr[Math.floor(Math.random() * 3)];
    console.log(randPosition);
    if (choice === randPosition) {
        alert('You take same move');
        return userChoiceFunc()
    } else if (choice === 'rock' && randPosition === 'scissors' || choice === 'scissors' && randPosition === 'paper' || choice === 'paper' && randPosition === 'rock') {
        return counter(1);
    } else return counter(0);
}

const counter = (num) => {

    if (num) {
        ++userCount;
        alert(`You won!!! ${userName} - ${userCount} , Bot - ${botCount} `);
    } else {
        ++botCount;
        alert(`You lost!!! ${userName} - ${userCount} , Bot - ${botCount} `);
    }

    (userCount === 3 || botCount === 3) ? outputFunc(): userChoiceFunc();
}

const outputFunc = () => {
    if (userCount === 3) {
        alert(`Congratulations. You won this game. Count - You: ${userCount} : Computer ${botCount}`);
        cont = confirm('Do you want to start new game?');
        console.log(cont);
        if (cont) {
            userCount = 0;
            botCount = 0;
            return userChoiceFunc();
        }
    } else if (botCount === 3) {
        alert(`Sorry. You lost this game. Count - You: ${userCount} : Computer ${botCount}`);
        cont = confirm('Do you want to start new game?');
        if (cont) {
            userCount = 0;
            botCount = 0;
            return userChoiceFunc();
        }
    }
}


startGame();