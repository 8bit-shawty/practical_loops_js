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