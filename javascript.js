let mais = document.getElementById("mais");
let menos = document.getElementById("menos");

let cards = document.querySelector(".cards");

for(let i = 0; i < 10; i++) {
    addCard();
}

var cardCount = 10; 
let intervalId; 

function addCard() {
    let newCard = document.createElement("div");
    newCard.className = "card";
    cards.appendChild(newCard);
    cardCount++;
}

function removeCard() {
    if (cardCount > 0) { 
        cards.removeChild(cards.lastChild);
        cardCount--;
    }
}

function startAdding() {
    intervalId = setInterval(addCard, 100); 
}

function stopAdding() {
    clearInterval(intervalId); 
}

function startRemoving() {
    intervalId = setInterval(removeCard, 100); 
}

function stopRemoving() {
    clearInterval(intervalId); 
}

mais.addEventListener("click", addCard);
mais.addEventListener("mousedown", startAdding);
mais.addEventListener("mouseup", stopAdding);
mais.addEventListener("mouseout", stopAdding); 

menos.addEventListener("click", removeCard);
menos.addEventListener("mousedown", startRemoving);
menos.addEventListener("mouseup", stopRemoving);
menos.addEventListener("mouseout", stopRemoving); 

