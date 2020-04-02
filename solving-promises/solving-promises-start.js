let firstTenValues = [];
let cachedAPI1Values = [];

// Compile values continuously gets values from API1. Whenever it has two values from API1, it calls API2 and stores the result of that call in an array. Once it's called API2 with the first 20 values from API1 and gotten 10 final values, it's done.
function compileValues(){
  callAPI1()
    .then(a=>{
       console.log("Got Value:",a);
       cachedAPI1Values.push(a);

       if (cachedAPI1Values.length === 2) {
         function callSecondaryAPI() {
           callAPI2(cachedAPI1Values[0],cachedAPI1Values[1])
            .then(c => {
              console.log("Got Calculated Value:",c);
              firstTenValues.push(c);
              cachedAPI1Values = [];
              if (firstTenValues.length === 10) {
                console.info("Calculation Complete:", firstTenValues);
              } else {
                compileValues();
              }
            })
            .catch(()=>{
              console.error("Error combining values");
              callSecondaryAPI();
            });
         }
    
         callSecondaryAPI();
       } else {
         compileValues();
       }
    })
    .catch(()=>{
      console.error("Error getting values");
      compileValues();
    })
}

compileValues();
