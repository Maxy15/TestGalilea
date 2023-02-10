function compute25(digits){
    // Definimos los arreglos necesarios
    const digitsArray = [digits[0], digits[1], digits[2], digits[3]];
    const operatorCombinations = [];
    const digitCombinations = [];
    const answers = [];
    console.log("digitsArray", digitsArray);   

    // Definimos las funciones útiles para generar combinaciones
    function createDigitsCombinations(digitsArray, combinations = []){
        if (digitsArray.length === 0){
            digitCombinations.push(combinations);
        } else {
            for (let i = 0; i < digitsArray.length; i++){
                const current = digitsArray.slice();
                const next = current.splice(i, 1);
                createDigitsCombinations(current.slice(), combinations.concat(next));
            }
        }
    }

    function createOperatorCombinations(combinations = []){
        const operations = ['+', '-', '*', '/'];
        if (combinations.length === 3){
            operatorCombinations.push(combinations);
        } else {
            for (let i = 0; i < operations.length; i++){
                const current = combinations.slice();
                current.push(operations[i]);
                createOperatorCombinations(current);
            }
        }
    }

    function testCombinations(){
        for (let i = 0; i < digitCombinations.length; i++){
            for (let j = 0; j < operatorCombinations.length; j++){
                const d = digitCombinations[i];
                const o = operatorCombinations[j];
                const combinations = [
                    `${d[0]}${o[0]}${d[1]}${o[1]}${d[2]}${o[2]}${d[3]}`,
                    `(${d[0]}${o[0]}${d[1]})${o[1]}${d[2]}${o[2]}${d[3]}`,
                    `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
                    `${d[0]}${o[0]}${d[1]}${o[1]}(${d[2]}${o[2]}${d[3]})`,
                    `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]}${o[2]}${d[3]})`,
                    `(${d[0]}${o[0]}${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
                    `(${d[0]}${o[0]}${d[1]})${o[1]}(${d[2]}${o[2]}${d[3]})`
                ];

                combinations.forEach(combination => {
                    const result = eval(combination);
                    if (result === 25){
                        return answers.push(combination);
                    }
                });
            }
        }
    }

    // Llamadas de las funciones
    createDigitsCombinations(digitsArray);
    createOperatorCombinations();
    testCombinations();
    return answers[0];
}

console.log(compute25('6153'));
console.log(compute25('8251'));