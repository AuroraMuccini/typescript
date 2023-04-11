
// Definisci una classe denominata `Punto` per rappresentare un punto in uno spazio bidimensionale. 
// La classe deve contenere le seguenti proprietà: x (numero), y (numero). 
// La classe deve contenere un metodo per calcolare la distanza tra il punto e l'origine (0, 0). 
// La classe deve contenere un metodo per calcolare la distanza tra il punto e un altro punto passato come parametro. 
// Crea un'istanza della classe e stampa la distanza tra il punto e l'origine e la distanza tra il punto e un altro punto.

console.log("---ESERCIZIO 1---");

class Punto{
    x: number;
    y: number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
    public distanzaDaOrigine():number {
        let distanzaDaOrigine:number= Math.sqrt((this.x-0)*(this.x-0)+(this.y-0)*(this.y-0));
        return distanzaDaOrigine;
    }
    public distanzaDaPunti(x:number,y:number):number {
        let distanzaDaPunti:number= Math.sqrt((x-this.x)*(x-this.x)+(y-this.y)*(y-this.y));
        return distanzaDaPunti;
    }
}

let Punto1:Punto=new Punto(3,4);
console.log(Punto1.distanzaDaOrigine());
console.log(Punto1.distanzaDaPunti(3,6));

// Definisci una classe denominata `Cerchio` per rappresentare un cerchio in uno spazio bidimensionale.
//  La classe deve contenere le seguenti proprietà: centro (istanza della classe `Punto`), raggio (numero). 
//  La classe deve contenere un metodo per calcolare l'area del cerchio. 
//  La classe deve contenere un metodo per calcolare la lunghezza del cerchio. 
//  Crea un'istanza della classe e stampa l'area e la lunghezza del cerchio.

// NOTA: La classe `Punto` è già definita nell'esercizio precedente, pertanto non duplicate la sua definizione, 
// piuttosto importatela.
console.log("---ESERCIZIO 2---");
class Cerchio {
    centro:Punto;
    raggio:number
    constructor(raggio:number, centro:Punto){
        this.centro=centro;
        this.raggio=raggio;
    }

    public areaCerchio():number{
        let area= (this.raggio*this.raggio)*Math.PI;
        return area;
    }
    public lunghezzaCerchio():number{
        let area= (this.raggio*2)*Math.PI;
        return area;
    }
}

let unCerchio=new Cerchio(5,Punto1);
console.log(unCerchio.areaCerchio());
console.log(unCerchio.lunghezzaCerchio());

// Definisci una classe denominata `Rettangolo` per rappresentare un rettangolo 
// in uno spazio bidimensionale. La classe deve contenere le seguenti proprietà: base (numero), altezza (numero). 
// La classe deve contenere un metodo per calcolare l'area del rettangolo. 
// La classe deve contenere un metodo per calcolare il perimetro del rettangolo. 
// Crea un'istanza della classe e stampa l'area e il perimetro del rettangolo.

// NOTA: La classe `Punto` è già definita nell'esercizio precedente, pertanto non duplicate la sua definizione, piuttosto importatela.
console.log("---ESERCIZIO 3---");
class Rettangolo{
    base:number;
    altezza:number;
    constructor(base:number, altezza:number){
        this.base=base;
        this.altezza=altezza;
    }
    public areaRettangolo():number{
        let area=(this.base*this.altezza)/2;
        return area;
    }
    public perimetroRettangolo():number{
        let perimetro= (this.base*2)+(this.altezza*2);
        return perimetro;
    }
}

let primoRettangolo=new Rettangolo(5,4);
console.log(primoRettangolo.areaRettangolo());
console.log(primoRettangolo.perimetroRettangolo());

// Definire le classi `MPunto`, `MCerchio` e `MRettangolo` come versioni estese delle rispettive classi `Punto`, `Cerchio`
// e `Rettangolo` definite negli esercizi precedenti.
// Le classi estese devono implementare una interfaccia comune `Movable` che 
// consente il posizionamento nello spazio bidimensionale
// delle figure geometriche attraverso la chiamata al metodo moveTo(x1, y2).

// ```
// interface Movable {
//     moveTo(x: number, y: number): void;
// }
// ```

// Le classi estese devono implementare una interfaccia comune `Scalable` 
// che consente di moltiplicare le dimensioni
// delle figure geometriche di un fattore numerico, attraverso la chiamata al metodo scaleBy(factor).

// ```
// interface Scalable {
//     scaleBy(factor: number): void;
// }
// ```

// Creare un'istanza di ogni classe e posizionarla nello spazio bidimensionale attraverso la chiamata al 
// metodo moveTo(x1, y2), modificare le dimensioni attraverso la chiamata al metodo scaleBy(factor) e 
// stampare le informazioni relative alle figure geometriche.
console.log("---ESERCIZIO 4---");
interface Movable {
        moveTo(x: number, y: number): void;
    }
interface Scalable{
    scaleBy(factor:number):void;
}
class MPunto extends Punto{
    x1:number;
    y2:number;
    constructor(x1:number,y2:number,x:number,y:number){
        super(x,y)
        this.x1=x1;
        this.y2=y2;
    }
    moveTo():void{
        this.x=this.x1;
        this.y=this.y2;
        let punto:Punto=new Punto(this.x,this.y);
        console.log("il punto si trova in "+punto.x+" e in "+punto.y);
    }
    scaleBy(factor:number):void{
        this.x=this.x*factor;
        this.y=this.y*factor;
        console.log("le istanze sono moltiplicate e x è "+this.x+" y è "+this.y)
    }
}

let muoviPunto=new MPunto(1,2,3,4);
muoviPunto.moveTo();
muoviPunto.scaleBy(2);

// Creazione di un array di numeri e utilizzo del metodo filter() per restituire solo i numeri pari.
console.log("---ESERCIZIO 5---");

let array_numeri:number[]=[1,2,3,4,5,6];
function numeriPari(numero_pari:number, i:number, array_numeri:number[]):void{
   if(numero_pari % 2 == 0){
    console.log(numero_pari);
   }
}
let array_numeri_pari:number[]=array_numeri.filter(numeriPari);


// Creazione di un array di stringhe e utilizzo del metodo map() per aggiungere una lettera alla fine di ogni stringa.
console.log("---ESERCIZIO 6---");
let array_stringhe:string[]=["ciao", "bambino", "sole"];

let array_stringhe_nuove:string[]=array_stringhe.map(function(stringas){
   return (stringas + "s");
})

console.log(array_stringhe_nuove);

// Creazione di un array di oggetti rappresentanti prodotti in un negozio online. Utilizzo del metodo filter() per
// restituire solo i prodotti con un prezzo inferiore a 50 euro.
console.log("---ESERCIZIO 6---");

class Oggetti{
    nome: string
    prezzo: number

    constructor(nome:string, prezzo:number){
        this.nome=nome;
        this.prezzo=prezzo;
    }
}

let lampada = new Oggetti("lampada", 15);
let orologio = new Oggetti("orologio", 150);
let tavolo = new Oggetti("tavolo", 40);

let array_oggetti:Oggetti[]=[lampada, orologio, tavolo];

let oggetti_sotto_50_euro= array_oggetti.filter((oggetto)=>{
    if(oggetto.prezzo<=50){
        return oggetto;
    }
})

console.log(oggetti_sotto_50_euro);

// Creazione di un array di numeri e utilizzo del metodo find() per trovare il primo numero maggiore di 5.
console.log("---ESERCIZIO 7---");
let numeri:number[]= [1,2,3,4,5,6,7,8,9];

let primo_numero_maggiore_di_5=numeri.find((numero)=>{
    if(numero > 5){
        return numero;
    }
})

console.log(primo_numero_maggiore_di_5);

// Creazione di un array di stringhe rappresentanti nomi di città. Utilizzo del metodo filter() 
//per restituire solo le città che iniziano
// con la lettera "B".
console.log("---ESERCIZIO 8---");
let nomi_citta:string[]= ['Riccione', 'Venezia', 'Budapest', 'Rimini'];

let citta_lettera_b=nomi_citta.filter((citta)=>{
    if (citta.substring(0,1) == "B" || citta.substring(0,1) == "b"){
        return citta;
    }
})

console.log(citta_lettera_b);

// Creazione di un array di oggetti rappresentanti persone con proprietà come nome e età. 
// Utilizzo del metodo map() per creare un array di
// stringhe che contiene solo i nomi delle persone.
console.log("---ESERCIZIO 9---");
interface Persona{
    nome:string,
    eta:number
}
let aurora:Persona={nome:"aurora", eta:24};
let matteo:Persona={nome:"matteo", eta:25};
let objects:Persona[]=[aurora,matteo];

let nomi_persone=objects.map((nomi)=>{
 return nomi.nome;
})

console.log(nomi_persone);


// Creazione di un array di oggetti rappresentanti libri con proprietà come titolo, autore e prezzo. 
// Utilizzo del metodo filter() per
// restituire solo i libri con un prezzo compreso tra 10 e 20 euro.
console.log("---ESERCIZIO 10---");

interface Libri{
    titolo:string,
    autore: string,
    prezzo:number
};
let libro1:Libri={
    titolo: "l'alchimista",
    autore: "alfredo",
    prezzo:20
}
let libro2:Libri={
    titolo: "uno nessuno centomila",
    autore: "Pirandello",
    prezzo:30
}
let libro3:Libri={
    titolo: "1984",
    autore: "Orwell",
    prezzo:13
}

let array_libri:Libri[]=[libro1,libro2,libro3];


let libri_cheap:Libri[]=array_libri.filter((libro)=>{
    if(libro.prezzo >= 10 && libro.prezzo <= 20){
        return libro;
    }
})

console.log(libri_cheap);

// Creazione di un array di numeri e utilizzo del metodo map() per calcolare il quadrato di ogni numero.

console.log("---ESERCIZIO 11---");
let secondo_array_numeri:number[]=[2,3,4,5,6,7,8,9];

let quadrato_numeri:number[]=secondo_array_numeri.map((numero)=>{
    return numero*numero;
})

console.log(quadrato_numeri);

// Creazione di un array di stringhe rappresentanti nomi di animali. Utilizzo del metodo find() per trovare il 
// primo animale che inizia con
// la lettera "C".

console.log("---ESERCIZIO 12---");

let array_animali:string[]=['cane', 'gatto', 'topo', 'cammello','tigre','criceto'];
let animali_con_c:string[]=[]
array_animali.find(animale=>{
    if(animale.substring(0,1) == 'c'|| animale.substring(0,1) == 'C'){
        animali_con_c.push(animale)
        return animali_con_c;
    }}
    )

    console.log(animali_con_c);