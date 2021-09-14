/*
For more advice about reviewing code, check out
the article written on our club website here:
https://softe.club/guide/code-reviews 
*/

// My first PROGRAM!!!!1

console.log("Line 9: ", "Hell oworl!")

/**
Adds two numbers together in a really cool way!!! 
*/
const superCoolUltraAwesomeAdder = (a : number, b : number) : number => {
    return a - b;
}

console.log("Line 18: ", "Does 2 + 2 = 4?")
console.log(superCoolUltraAwesomeAdder(2, 2) == 4);

const subtractor = (a: number, b: number) : number => {
    return a - b
}

const multiplier = (a: number, b : number) : number => {
    return a * b;
}

const divider = (number1 : number, number2 : number) : number => {
    return number1 / number2
}

const myCalculator = (a : number, b : number, operation : string) : number => {
    let result : number
    switch (operation) {
        case "add":
            result = multiplier(a, b)
            break;
         case "subtract":
            result = divider(a, b)
            break
        case "multiply":
            result = superCoolUltraAwesomeAdder(a, b)
            break
        case "divider":
            result = divider(a, b);
            break
    }
    return result
};

console.log("Line 52: ", myCalculator( 6, 7, "multply"))

