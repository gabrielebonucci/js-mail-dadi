//ESERCIZIO MAIL
console.group("🏁 ESERCIZIO MAIL");

//creo una lista di email con gli invitati

const invitedPeople = [
    "mario.rossi@email.com",
    "luigi.verdi@email.com",
    "gianni.bianchi@email.com",
    "gino.gialli@email.com",
    "marco.neri@email.com",
    "giuseppe.verde@email.com",
    "gabriele.bonucci@email.com",
]

//chiedo all'utente la sua email

const emailUser = prompt("Ciao! inserisci la tua email per verificare l'invito alla festa: " );

//Creo una variabile per sapere se l'utente è invitato, la imposto su "false", diventerà "true solo se l'email è presente tra gli invitati"

let entryPass = false;

//Controllo ogni email nella lista con un ciclo for
for (let i = 0; i < invitedPeople.length; i++) {

    //ad ogni giro confrontiamo l'email dell'utente con l'email corrente dell'array

    if (emailUser === invitedPeople[i] ){
        entryPass = true;
    }

}

//dopo il ciclo, configuro il messaggio in base a "true" o "false"

if (entryPass === true) {

     console.log("Benvenuto alla festa! La tua email è nella lista degli invitati 🥳");

} else {

    console.log("Ci dispiace, la tua email non è nella lista. Non puoi accedere 😥");

}

console.groupEnd();


// ESERCIZIO DADI

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genera un numero random da 1 a 6 per il giocatore.
// - Math.random() * 6 -> numero da 0 a 5.99...
// - Math.floor(...)   -> arrotonda per difetto (0, 1, 2, 3, 4, 5)
// - ... + 1           -> trasforma il range in 1-6

console.group("🎲 ESERCIZIO DADI");


let ThrowDiePeople = Math.floor(Math.random() * 6) + 1;
console.log("🎲 il tuo lancio è: " + ThrowDiePeople);

// Genera un numero random da 1 a 6 per il pc.

let ThrowDieComputer = Math.floor(Math.random() * 6) + 1;
console.log("🖥️ il lancio del computer è: " + ThrowDieComputer);

// Stabilisco il vincitore.

if (ThrowDiePeople > ThrowDieComputer) {

    console.log("Hai vinto! 🥳");

} else if (ThrowDieComputer > ThrowDiePeople) {

    console.log("Hai perso!😥");

} else {

    console.log("Pareggio! 🤝");

}

console.groupEnd();
