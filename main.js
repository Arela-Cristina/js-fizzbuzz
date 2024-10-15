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
    } else if (num % 3 === 0) {
        console.log("Fizz");
        //Per i multipli di 3 stampi “Fizz” al posto del numero
    } else if (num % 5 === 0) {
        console.log("Buzz");
        //Per i multipli di 5 stampi "Buzz" al posto del numero.
    }

}