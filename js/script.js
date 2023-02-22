/*
1 - chiedere all'utente il numero di chilometri che vuole percorrere. 
2 - chiedere all'utente l'età.

3 - calcolare il prezzo totale del viaggio:
    a - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    b - va applicato uno sconto del 20% per i minorenni
    c - va applicato uno sconto del 40% per gli over 65.

4 - Prezzo finale con 2 decimali + in forma umana.
*/

let userKm;

userKm = parseInt( prompt('How far do you want to travel in km?') );

let userAge;

userAge = parseInt( prompt('How old are you?') );

let fullPrice = userKm * 0.21;

// CHECK
console.log('Full Price: ' + fullPrice + ' €') 
// CHECK

let discountedPrice18 = fullPrice - ( fullPrice * (20/100) )

let discountedPrice65 = fullPrice - ( fullPrice * (40/100) )

// CHECK
console.log('Discounted Price for <18: ' + discountedPrice18 + ' €') 
console.log('Discounted Price for >=65: ' + discountedPrice65 + ' €') 
// CHECK

if(userAge < 18) {

    document.writeln('Your ticket price is ' + discountedPrice18.toFixed(2) + ' €')

} else if(userAge >= 65) {

    document.writeln('Your ticket price is ' + discountedPrice65.toFixed(2) + ' €')

} else {

    document.writeln('Your ticket price is ' + fullPrice.toFixed(2) + ' €')
}

