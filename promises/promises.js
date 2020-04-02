function promiseFunction(a,b) {
  const c = a + b;

  return new Promise(
    function(resolve,reject) {
      setTimeout(resolve, 250, c);
    }
  )
}

// Functions like the above promise but with a clause allowing for the "catch" functionality to be used
function promiseFunctionWithFailure(a,b){
  const c = a * b;
  const success = Math.random() > 0.5;

  return new Promise(function(resolve,reject){
    success ? resolve(c) : reject("ERROR!")
  })
}

promiseFunction(2,3)
    .then(console.log);

promiseFunctionWithFailure(2,4)
    .then(c => console.log("Success!",c))
    .catch(console.error);
