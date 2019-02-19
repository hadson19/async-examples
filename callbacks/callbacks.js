function callbackFunction(cb){
    setTimeout(cb,250);
}

function callbackAdditionFunction(a,b,cb){
    let c = a + b;
    setTimeout(cb,250,c);
}

function multipleCallbackFunction(cb1,cb2){
    setTimeout(()=>{
        (Math.random() > 0.5) ? cb1() : cb2();
    }, 500);

}

callbackFunction(()=>console.log("Called back"));
callbackAdditionFunction(2,3,c=>console.log("Got added value", c));
multipleCallbackFunction(()=>console.log("Callback --1-- called"), ()=>console.log("Callback --2-- called"));