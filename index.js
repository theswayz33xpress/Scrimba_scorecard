let homeCounter = document.getElementById("home-counter");
let guestCounter = document.getElementById("guest-counter");

let homeScore = 0;
let guestScore = 0;

function homeOne() {
    homeScore ++;
    homeCounter.textContent = homeScore;
}

function homeTwo() {
    homeScore += 2;
    homeCounter.textContent = homeScore;
}

function homeThree() {
    homeScore += 3;
    homeCounter.textContent = homeScore;
}

function guestOne() {
    guestScore ++;
    guestCounter.textContent = guestScore;
}

function guestTwo() {
    guestScore += 2;
    guestCounter.textContent = guestScore;
}

function guestThree() {
    guestScore += 3;
    guestCounter.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeCounter.textContent = homeScore;
    guestCounter.textContent = guestScore;
}