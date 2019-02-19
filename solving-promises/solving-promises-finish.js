async function compileValues(){
    let firstTenValues = [];
    let cachedAPI1Values = [];

    while (true){
        if (firstTenValues.length === 10) {
            console.info("Calculation Complete:", firstTenValues);
            break;
        }
        if (cachedAPI1Values.length < 2) {
            try {
                cachedAPI1Values.push(await callAPI1());
            } catch (e) {
                console.error("Error getting values");
            }
        } else {
            try {
                firstTenValues.push(await callAPI2());
                cachedAPI1Values = [];
            } catch (e) {
                console.error("Error combining values");
            }
        }
    }
}