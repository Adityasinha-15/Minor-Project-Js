let userScore=0;
let compScore= 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, UserChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You Win! Your ${UserChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose. Your ${compChoice} beats ${UserChoice} `;
        msg.style.backgroundColor = "Red";
    }
}
 
const playGame = (UserChoice) => {
    console.log("user choice = ", UserChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);


    if (UserChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(UserChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(UserChoice==="paper"){
            compChoice==="scissors" ? false : true;
        }else{
            compChoice==="rock" ? false : true;
        }
        showWinner(userWin, UserChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const UserChoice = choice.getAttribute("id");
        
        playGame(UserChoice);
    });
}); 