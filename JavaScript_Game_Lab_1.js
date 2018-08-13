"use strict";
{
  const startGame = prompt ("Do you want to play?");
  let userHealth = 40;
  let grantHealth = 10;
  const grant = "Grant the Mighty Chicken";
  let wins = 0;
 
  if (startGame === "yes") {
    const name = prompt("What is your name?");{
    startCombat();
  }
    function startCombat () {
      let userWon = (`${name} wins!!!!!!!!!!`);
        while (userHealth > 0 && wins < 3) {
         grantHealth-=getDamage(1, 5);
         userHealth-=getDamage(1, 5);
           const result = `${grant} has ${grantHealth} left. ${name} has ${userHealth} left.`;
           const action = prompt("attack or quit? (enter 'a' or 'q' for your choice)")
            if (action !== "a") {
                console.log ("Thank you for playing today!");
                break;
             } 
            console.log (result);
            if (grantHealth <= 0) {
              grantHealth = 10;
              wins++;
            }
            if (wins === 3) {
               console.log (userWon);
              }
           }
            if (userHealth < 0 && wins <3) {
            console.log(`${grant} won!!`);
            }
          }
}
    function getDamage(min, max) {
      return Math.floor(min + Math.random()*(max+1 - min))

      }
}
  

