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