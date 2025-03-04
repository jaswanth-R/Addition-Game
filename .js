let firstNumberinput = Math.ceil(Math.random()*100);
let secondNumberinput = Math.ceil(Math.random()*100);
document.getElementById("firstNumber").textContent = firstNumberinput;
document.getElementById("secondNumber").textContent = secondNumberinput;
function checkResult(){
    let userInputNumber = document.getElementById("userInput").value;
    if ((firstNumberinput + secondNumberinput) === parseInt(userInputNumber)){
        document.getElementById("gameResult").textContent= "Congratulations! You got it right";
        document.getElementById("gameResult").style.backgroundColor="green";
        document.getElementById("gameResult").style.color="white";
    }
    else{
        document.getElementById("gameResult").textContent= "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor="blue";
        document.getElementById("gameResult").style.color="white";
    }
}
function restartGame(){
    firstNumberinput = Math.ceil(Math.random()*100);
    secondNumberinput = Math.ceil(Math.random()*100);
    document.getElementById("firstNumber").textContent = firstNumberinput;
    document.getElementById("secondNumber").textContent = secondNumberinput;
    document.getElementById("gameResult").textContent= "";
    document.getElementById("gameResult").style.backgroundColor="";
    document.getElementById("userInput").value = "";
}