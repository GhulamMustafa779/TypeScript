// FUNCTIONS
function calculateTax(income: number){
    console.log(income);
} // return type void

function calculateTax2(income: number){
    console.log(income);
    return 0;
} // Return type is number

// Its always good to write the return type with function
function calculateTax3(income: number): number{
    console.log(income);
    return 0;
} // This function will have to return a number value it can't be void


// function calculateTax4(income: number): number{
//     if(income > 3000)
//         return income * 1.2;
//     // undefined
// } // If return type is not mention then javascript return undefined

function calculateTax5(income: number): number{
    // let x; // This will give error if not used anywhere in code because of "noUnusedLocals": true, 
    if(income > 3000)
        return income * 1.2;
    return income * 1.3;
}

// TypeScript is strict about the number of parameters
function anyFunction(first: number, second?: number): number{
    console.log(first)
    console.log(second); // It will give undefined if value is not passed
    console.log(second || 2); // This is one way to handle undefined condition
    return 0;
}

// anyFunction(1,2,3) // This will give error
anyFunction(1,2);
anyFunction(1);

// We can also give default value to the parameter
function anyFunction2(first: number, second = 2):number{
    console.log(first);
    console.log(second); // Now default value will be used if second parameter is not passed
    return 0;
}

// Enabled properties in tsconfig file
//"noUnusedLocals": true,
//"noUnusedParameters": true,
//"noImplicitReturns": true,   

// How to use type check in arrow function
const getHello = (s: string):string =>{
    return s
}

const hero3: string[] = ['thor','spiderman','superman'];

hero3.map((hero): string =>{
    return `Hero is ${hero}`
})


