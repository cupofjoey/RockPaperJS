//Here is a little Rock, Paper, Scissors game

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
console.log("Rock")
}
else if (computerChoice >= 0.67){
    console.log("Scissors")
}
else {
    console.log("Paper")
};
console.log(computerChoice)
