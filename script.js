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
     console.log("Benvenuto alla festa! La tua email è nella lista degli invitati. :)");
} else {
    console.log("Ci dispiace, la tua email non è nella lista. Non puoi accedere. :( ");


}
