var guestList = ["Idris", "Bayo", "Biggie", "Usman", "Gerrard"];

let guestName = prompt("What is your name ?");

if (guestList.includes(guestName)) {
    alert("Welcome to my party !!!");
} else {
    alert("Sorry couldn't find your name, type again please.")
}