function getComputerChoice(){
    const randomNumber= Math.random()*3;

    switch (Math.floor(randomNumber)){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        
    }
}
function startGame(Hand){
    const computerChoice = getComputerChoice();
    const userChoice = Hand;
    
    let result = '';
    if (userChoice === computerChoice){
        result= 'It is a tie';
    }
    else if (userChoice === 'rock'){
        if (computerChoice === 'paper'){
            result= 'Sorry! You lost';
        }else{
            result= 'Congratulations! You won';
        }
    }
    else if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            result= 'Sorry! You lost';
        }else{
           result= 'Congratulations! You won';
        }
    }
    else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            result= 'Sorry! You lost';
        }else{
            result='Congratulations! You won';
        }
        
    }
    showResults(result);
    showComputerChoice(computerChoice);  
}
function showResults(resultText){
    let resultBox = document.getElementById('result-box');
    resultBox.innerHTML = resultText;
    resultBox.classList.remove("hidden");
    setTimeout(() => {
        resultBox.classList.add("hidden");
    }
    , 3000); 
   

}
function showComputerChoice(computerChoice){
   
    let icon='';
        switch(computerChoice){
            case 'rock':
                icon = '<img src="images/rock.png" alt="rock" width="200px" height="100px">';
                break;
            case 'paper':
                icon = '<img src="images/paper.png" alt="paper" width="200px" height="100px">';
                break;
            case 'scissors':
                icon = '<img src="images/scissors.png" alt="scissors" width="200px" height="100px">';
                break;
                default:
                icon="Error :Invalid choice";
                }
    let computerChoiceBox = document.getElementById('computer-box');
    computerChoiceBox.innerHTML = icon;
    computerChoiceBox.classList.remove("hidden");
    setTimeout(() => {
        computerBox.classList.add("hidden");
    }
    , 3000);   

}
function scrollGame(){
    let gameSection = document.getElementById("game").scrollIntoView({behavior: "smooth"});
    
}
    