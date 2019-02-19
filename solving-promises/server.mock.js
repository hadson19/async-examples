let a = 1;
let b = 2;
let c = a + b;

// Objective: Call API2 with the first five sets of two values from API1, giving you a new 5-number set.

function callAPI1(){
    return new Promise((resolve,reject)=>{
        if (Math.random() > 0.5) {
            let d = a + b;
            a = b;
            b = c;
            c = d;
            setTimeout(resolve,250,c);
        } else {
            setTimeout(reject,250);
        }
    });
}

function callAPI2(a,b,cb){
    return new Promise((resolve,reject)=>{
        if (Math.random() > 0.5) {
            let d = a * b;
            setTimeout(resolve,250,d);
        } else {
            setTimeout(reject,250);
        }
    })

}