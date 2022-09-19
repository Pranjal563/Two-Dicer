console.log("Ram Ram ji, I am praticing JavaScript");

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

function setDice1() {
    var count = Math.floor(Math.random() * 6 + 1);
    var attVal = "images/dice" + count + ".png";
    dice1.setAttribute("src", attVal);
    // switch (count) {
    //     case 1:
    //         dice1.setAttribute("src", "images/dice1.png");
    //         break;
    //     case 2:
    //         dice1.setAttribute("src", "images/dice2.png");
    //         break;
    //     case 3:
    //         dice1.setAttribute("src", "images/dice3.png");
    //         break;
    //     case 4:
    //         dice1.setAttribute("src", "images/dice4.png");
    //         break;
    //     case 5:
    //         dice1.setAttribute("src", "images/dice5.png");
    //         break;
    //     case 6:
    //         dice1.setAttribute("src", "images/dice6.png");
    //         break;
    //     default:
    //         break;
    // }
    return count;
}

function setDice2() {
    var count = Math.floor(Math.random() * 6 + 1);
    var attVal = "images/dice" + count + ".png";
    dice2.setAttribute("src", attVal);
    // switch (count) {
    //     case 1:
    //         dice2.setAttribute("src", "images/dice1.png");
    //         break;
    //     case 2:
    //         dice2.setAttribute("src", "images/dice2.png");
    //         break;
    //     case 3:
    //         dice2.setAttribute("src", "images/dice3.png");
    //         break;
    //     case 4:
    //         dice2.setAttribute("src", "images/dice4.png");
    //         break;
    //     case 5:
    //         dice2.setAttribute("src", "images/dice5.png");
    //         break;
    //     case 6:
    //         dice2.setAttribute("src", "images/dice6.png");
    //         break;
    //     default:
    //         break;
    // }
    return count;
}

var count1 = setDice1();
var count2 = setDice2();

var heading = document.querySelector("h1");

if(count1 === count2)
    heading.textContent = "🚩DRAW🚩";
else if(count1 > count2)
    heading.textContent = "🚩 YOU WON";
else
    heading.textContent = "I WON 🚩";

setTimeout(() => {
    heading.textContent = "REFRESH ME🔃";
    // if(count1 === count2)
    //     heading.textContent = "🚩Draw🚩";
    // else if(count1 > count2)
    //     heading.textContent = "Player 1 Won 🚩";
    // else
    //     heading.textContent = "Player 2 Won 🚩";
}, 3000);




