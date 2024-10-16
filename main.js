//FIZZ BUZZ

//Consigli:
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//Abbiamo visto qualcosa di particolare che possiamo usare?

//Scrivi un programma che stampi i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
    let num = i + 1;
    // console.log(num);

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
        //Per i multipli sia di 3 che di 5 stampi "FizzBuzz"
        //Questa condizione deve essere prima di tutte perche se la mettiamo alla fine non si complira mai nella vita.
    } else if (num % 3 === 0) {
        console.log("Fizz");
        //Per i multipli di 3 stampi “Fizz” al posto del numero
    } else if (num % 5 === 0) {
        console.log("Buzz");
        //Per i multipli di 5 stampi "Buzz" al posto del numero.
    } else {
        console.log(num);
    }

}

//ALTRI CONSIGLI:
//E importante controllare che i valori da stampare siano solo stringhe oppure solo numeri. Dipendendo il caso dello scopo del essercizio.

//come far diventare un numero in una stringa, concateniamo una stringa. Partendo dal essempio dove num sarebbe un numero (valor numerico):
// let num = '' + num.

//Console.log(), evitare di ripetere la stessa operazione, cercare di fare solo un output alla fine. al posto di console.log() possiamo utilizzare "message = ", e alla fine  fare il console.log(message).

// if (num % 3 === 0 && num % 5 === 0) {
//     messagio = "FizzBuzz";

// } else if (num % 3 === 0) {
//     messagio = "Fizz";

// } else if (num % 5 === 0) {
//     messagio = "Buzz";

// } else {
//     messagio = '' + num;
// }
// console.log(messagio)