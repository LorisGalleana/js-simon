const page = document.querySelector(".page");
const congratulation = document.querySelector(".congratulation");
const rightAnswer = document.querySelector(".chosen-number");


//generare 5 numeri casuali
let randomNumber = genSequenzaNumRandom(1, 100, 5);
console.log(randomNumber);
    //visualizzare in pagina 5 numeri casuali
    page.innerHTML = randomNumber;
   

//far partire un timer di 30 secondi
let secondi = 2;

let countDown = setTimeout(rovescio, secondi * 1000);


//dopo 30 secondi far sparire i numeri
function rovescio() {
    page.style.display = "none";
    let littleDelay = setTimeout(after30Second, 1);
    
}

    

function after30Second() {
    //chiedere i 5 numeri tramite prompt

    let chosenNumber = [];
    for (let i = 0 ; i < randomNumber.length; i++ ) {
        let number = parseInt(prompt("inserisci i numeri"));
        chosenNumber.push(number)
        console.log(chosenNumber);
    }

    //comunicare all'utente quanti e quali dei numeri da indovinare sono stati individuati

        //confrontare numeri generati con numeri inseriti
    let y = 0;
    let rightNumber = []
    for (let x = 0; x < chosenNumber.length; x++) {
        //segnalare quali numeri inseriti sono corretti
        if (chosenNumber[x] === randomNumber[x]) {
            console.log( "true");
            rightOrWrong = true;
            y++
            rightNumber.push(chosenNumber[x])
        }
    }
    //comunicare all'utente quanti e quali sono corretti
    congratulation.innerHTML = "Congratulazioni, hai indovinato " + y + " numeri!";
    rightAnswer.innerHTML = "I numeri indovinati sono: " + rightNumber;
    }





