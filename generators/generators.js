function* squareGenerator(){
    let b = 1;
    while (true){
        b+=1;
        yield b * b;
    }
}

// Continuously cuts a number in half.
function* halfGenerator(e = 64){
    let c = e;
    while (true) {
        c /= 2;
        if (c > 1) {
            yield c;
        } else {
            return c;
        }
    }
}

function generatorCoroutine(Generator,...args) {
    let gen = Generator(...args);
    setInterval(()=>{
        console.log(gen.next());
    }, 250);
}