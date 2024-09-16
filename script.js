//PART 1

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for(i = 1; i <= 100; i++){
    if(i % 3 ===0 && i % 5 === 0){
        console.log(i, " FIZZ BUZZ")
    }else if(i % 3 === 0){
        console.log(i, " FIZZ")
    } else if(i % 5 === 0){
        console.log(i, " BUZZ")
    }else{
        console.log(i)
    }
}
//PART 2
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

for(let n=1; n < 100; n++ ){
    let isPrime = true;

    for(let m = 2; m < n; m++){
        if(n % m === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime === true){
        console.log(n + ' is a prime number')
    }
}

let cell = "";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cellCounter = 0;

let string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

for (i = 0; i < string.length - 1; i++){
    // console.log(string.concat[i])
    // if(string.charAt(i) === ',')
    if(string[i] === ','){
        if(cellCounter === 0)
    }
}