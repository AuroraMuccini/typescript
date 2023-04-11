console.log("---ESERCIZIO 1---");
var Persona1 = {
    nome: "aurora",
    eta: 23,
    indirizzo: {
        strada: "via ionio",
        citta: "riccione",
        stato: "italia",
    }
};
function stampaPersone(Persona1) {
    return Persona1.nome;
}
console.log(stampaPersone(Persona1));
console.log("---ESERCIZIO 2---");
var giornoSettimana;
(function (giornoSettimana) {
    giornoSettimana[giornoSettimana["Lunedi"] = 0] = "Lunedi";
    giornoSettimana[giornoSettimana["Martedi"] = 1] = "Martedi";
    giornoSettimana[giornoSettimana["Mercoledi"] = 2] = "Mercoledi";
    giornoSettimana[giornoSettimana["Giovedi"] = 3] = "Giovedi";
    giornoSettimana[giornoSettimana["Venerdi"] = 4] = "Venerdi";
    giornoSettimana[giornoSettimana["Sabato"] = 5] = "Sabato";
    giornoSettimana[giornoSettimana["Domenica"] = 6] = "Domenica";
})(giornoSettimana || (giornoSettimana = {}));
;
var giorno = giornoSettimana.Mercoledi;
function stampaFrase(giorno) {
    if (giorno === giornoSettimana.Lunedi) {
        return "è lunedì";
    }
    else if (giorno === giornoSettimana.Martedi) {
        return "è martedì";
    }
    else if (giorno === giornoSettimana.Mercoledi) {
        return "è mercoledi";
    }
    else if (giorno === giornoSettimana.Giovedi) {
        return "è giovedi";
    }
    else if (giorno === giornoSettimana.Martedi) {
        return "è venerdi";
    }
    else if (giorno === giornoSettimana.Martedi) {
        return "è sabato";
    }
    else {
        return "è domenica";
    }
}
stampaFrase(giorno);
// Crea un'interfaccia per rappresentare un prodotto con le seguenti proprietà: 
// nome (stringa), prezzo (numero) e disponibilità (booleano). Crea una funzione che accetta 
// un array di prodotti come parametro e restituisce 
// un nuovo array contenente solo i prodotti disponibili.
console.log("---ESERCIZIO 3---");
var prodotto1 = {
    nome: "L'alchimista",
    prezzo: 20,
    disponbilita: true,
};
var prodotto2 = { nome: "La casta", prezzo: 15, disponbilita: true };
var prodotto3 = {
    nome: "Fatto in casa da Benedetta",
    prezzo: 20,
    disponbilita: false,
};
var prodotto4 = { nome: "1984", prezzo: 16, disponbilita: false };
var listaProdotti = [prodotto1, prodotto2, prodotto3, prodotto4];
function prodottoDisponibile(listaProdotti) {
    var vuoto = [];
    for (var i = 0; i < listaProdotti.length; i++) {
        if (listaProdotti[i].disponbilita == true) {
            vuoto.push(listaProdotti[i]);
        }
    }
    return vuoto;
}
var c = prodottoDisponibile(listaProdotti);
console.log(c);
// Definisci un tipo di dato per rappresentare un numero di telefono. L'input dovrebbe essere una stringa con il formato 
// "xxx-xxx-xxxx", dove "x" rappresenta un cifra numerica. Crea una funzione che accetta un numero di telefono come 
// parametro e restituisce true se il formato è corretto e false altrimenti.
console.log("---ESERCIZIO 4---");
var numero = { input: "348-426-4473" };
function validazioneNumero(numero) {
    var numero_intero = numero.input;
    if ((numero_intero.substring(3, 4) == "-") &&
        (numero_intero.substring(7, 8) == "-") &&
        (numero_intero.length == 12) &&
        (numero_intero.substring(0, 3).match("[0-9]{3}")) &&
        (numero_intero.substring(4, 7).match("[0-9]{3}")) &&
        (numero_intero.substring(8, 12).match("[0-9]{4}"))) {
        return true;
    }
    else {
        return false;
    }
}
console.log(validazioneNumero(numero));
// Definisci un tipo di dato per rappresentare un punteggio. Il punteggio dovrebbe essere un numero compreso tra 0 e 100.
//  Crea una funzione che accetta un punteggio come parametro e restituisce una 
// stringa che indica se il punteggio è insufficiente, sufficiente, buono o eccellente.
console.log("---ESERCIZIO 5---");
var valutazione = Math.floor(Math.random() * 101);
console.log(valutazione);
function calcolaPunteggio(valutazione) {
    if (valutazione < 60) {
        return "il punteggio è insufficiente";
    }
    else if (valutazione > 60 && valutazione < 70) {
        return "il punteggio è sufficiente";
    }
    else if (valutazione > 70 && valutazione < 80) {
        return "il punteggio è buono";
    }
    else {
        return "il punteggio è eccellente";
    }
}
console.log(calcolaPunteggio(valutazione));
// Crea un'interfaccia per rappresentare un libro con le seguenti proprietà: 
// titolo (stringa), autore (stringa), anno di pubblicazione (numero) e genere (stringa). 
// Crea un array di libri e scrivi una funzione che accetta un genere come parametro e 
// restituisce un nuovo array contenente solo i libri del genere specificato.
console.log("---ESERCIZIO 6---");
var libro1 = {
    titolo: "l'alchimista",
    autore: "alfredo",
    anno_pubblicazione: 2013,
    genere: "teatrale"
};
var libro2 = {
    titolo: "uno nessuno centomila",
    autore: "Pirandello",
    anno_pubblicazione: 1900,
    genere: "teatrale"
};
var libro3 = {
    titolo: "1984",
    autore: "Orwell",
    anno_pubblicazione: 1900,
    genere: "thriller"
};
var elencoLibri = [libro1, libro2, libro3];
function genereLibro(genere) {
    var genereLibri = [];
    for (var i = 0; i < elencoLibri.length; i++) {
        if (elencoLibri[i].genere == genere) {
            genereLibri.push(elencoLibri[i]);
        }
    }
    return genereLibri;
}
console.log(genereLibro('teatrale'));
// Definisci un tipo di dato primitivo per rappresentare un'ora del giorno. 
// L'input dovrebbe essere una stringa con il formato "hh:mm", dove "hh" rappresenta le ore e "mm" 
// rappresenta i minuti. Crea una funzione che accetta un'ora del giorno come parametro e restituisce una stringa che indica se 
// l'ora è del mattino, del pomeriggio o della sera.
console.log("---ESERCIZIO 7---");
var ora = {
    input: "24:35"
};
function validaOra(ora) {
    if ((ora.input.substring(2, 3) == ":") && (ora.input.substring(0, 2).match("[0-24]{2}") && (ora.input.substring(3, 5).match("[0-60]{2}")))) {
        return true;
    }
    else {
        return false;
    }
}
function mattinoPomeriggioSera(ora) {
    var numero = parseInt(ora.input);
    if (numero <= 7) {
        return "è mattino";
    }
    else if (numero <= 17) {
        return "è pomeriggio";
    }
    else {
        return "è sera";
    }
}
console.log(validaOra(ora));
console.log(mattinoPomeriggioSera(ora));
// Crea un'interfaccia per rappresentare un animale con le seguenti proprietà: nome (stringa), 
// specie (stringa) e numero di zampe (numero). Crea una funzione che accetta un array di animali 
// come parametro e restituisce un nuovo array contenente solo gli animali che hanno quattro zampe.
console.log("---ESERCIZIO 8---");
var cane = {
    nome: "Sergio",
    specie: "cane",
    numero_zampe: 4
};
var gatto = {
    nome: "Sedano",
    specie: "gatto",
    numero_zampe: 4
};
var fenicottero = {
    nome: "Rosa",
    specie: "fenicottero",
    numero_zampe: 2
};
var animali = [cane, gatto, fenicottero];
function animaliQuattroZampe(animali) {
    var animali_quattro_zampe = [];
    for (var i = 0; i < animali.length; i++) {
        if (animali[i].numero_zampe == 4) {
            animali_quattro_zampe.push(animali[i]);
        }
    }
    return animali_quattro_zampe;
}
console.log(animaliQuattroZampe(animali));
// Definisci un tipo di dato primitivo per rappresentare un indirizzo email. 
// L'input dovrebbe essere una stringa con il formato "nomeutente@dominio.com". 
// Crea una funzione che accetta un indirizzo email come parametro e restituisce true se 
// il formato è corretto e false altrimenti.
console.log("---ESERCIZIO 9---");
var email;
function validaEmail(email) {
    if (email.match("[@]") && (email.match("[.]"))) {
        return true;
    }
    else {
        return false;
    }
}
email = "auroramuccinigmail.com";
console.log(validaEmail(email));
