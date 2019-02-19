function promiseFunction(a,b){
    let c = a + b;
    return new Promise(
        function(resolve,reject){
            setTimeout(resolve,c,250);
        }
    )
}

// Functions like the above promise but with a clause allowing for the "catch" functionality to be used
function promiseFunctionWithFailure(a,b){
    let c = a * b;
    let success = Math.random() > 0.5;
    return new Promise(
        function(resolve,reject){
            success ? resolve(c) : reject("ERROR!")
        }
    )
}

promiseFunction(2,3)
    .then(c=>console.log(c));

promiseFunctionWithFailure(2,4)
    .then(c=>console.log("Success!",c))
    .catch(c=>console.error(c));