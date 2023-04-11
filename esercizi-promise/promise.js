"use strict";
// Implementare la seguente funzione che restituisce una Promise di un numero casuale tra 1 e 10.
// Utilizzo del metodo then() per stampare il numero in console.
// console.log("-----!ESERCIZIO 1!-----")
function getRandomNumber01() {
    return new Promise((resolve, reject) => {
        let a = 1 + 1;
        if (a = 2) {
            resolve(Math.floor(Math.random() * 10));
        }
        else {
            reject('errore');
        }
    });
}
let promise = getRandomNumber01();
promise.then((numero) => { console.log('numero random: ' + numero); });
// Con riferimento all'esercizio precedente, modificare l'implementazione della funzione
// in modo tale che se il numero casuale è minore o uguale a 5 la Promise viene risolta
// con il numero stesso, altrimenti viene rifiutata con un messaggio di errore.
// Utilizzo del metodo then() per stampare il numero in console o il metodo catch() per
// stampare il messaggio di errore.
console.log("-----!ESERCIZIO 2!-----");
function getRandomNumber02() {
    return new Promise((resolve, reject) => {
        let a = Math.floor(Math.random() * 10);
        if (a <= 5) {
            resolve(a);
        }
        else {
            reject('errore');
        }
    });
}
let promise_2 = getRandomNumber02();
promise_2.then((numero) => { console.log("il numero random minore di 5 è: " + numero); })
    .catch((messaggio) => { console.log(messaggio); });
// La funzione fornita qui sotto esegue una richiesta HTTP GET a un endpoint API REST
// restituendo Una Promise di un oggetto JSON che rappresenta una pagina di elenco utenti.
// Estraete dalla Promise l'elenco degli utenti in un array di oggetti "User"
// per stamparne il contenuto in console.
console.log("-----!ESERCIZIO 3!-----");
function getUserList() {
    return fetch('https://reqres.in/api/users')
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
let promise_3 = getUserList();
promise_3.then((risultato) => {
    console.log(risultato.data);
});
// Nell'esercizio precedente 'promise-03.ts' la funzione fornita recuperava una singola pagina
// di elenco utenti dal servizio API REST, recuperate ora l'intero elenco degli utenti
// estraendo l'elenco degli utenti da tutte le pagine per stamparne il contenuto in console.
console.log("-----!ESERCIZIO 4!-----");
function getUserList2(page = 5) {
    return fetch('https://reqres.in/api/users?page=' + page)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}
let promise_4 = getUserList2();
promise_4.then((risultato) => {
    console.log(risultato.data);
});
