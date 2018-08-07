const ask = prompt ("Do you want to play?");
let userHealth = 40;
let grantHealth = 10;
const grant = "The Almighty Grant";
let wins = 0;



if (ask === "yes") {
  const name = ("What is your name?");
  const userName = prompt(name);
  let userWon = (`${userName} wins!!!!!!!!!!`);
while (userHealth > 0 && wins < 3) {
  grantHealth-=genRanInt(1, 2);
  userHealth-=genRanInt(1, 2);
  const result = `${grant} has ${grantHealth} left. ${userName} has ${userHealth} left.`;
  console.log (result)
    if (grantHealth <= 0) {
      grantHealth = 10;
      wins++;
      if (wins === 3) {
        console.log (userWon);
      }
}
function genRanInt(min, max) {
  return Math.floor(min + Math.random()*(max+1 - min))
}
}
}

