// GENERICS

function identity(val : number | string): number | string{
    return val
}

function identity2(val: any):any{

    return val
}

function identity3<Type>(val: Type): Type{
    return val
}

function identity4<T>(val:T): T{
    return val
}

identity3("3");

interface Speaker {
    brand: string,
    size: number
}

let speaker: Speaker ={
    brand:"JBL",
    size:1
}

identity3(speaker);

// Generic array in a function
function identity6<T>(args: T[]): T{
    return args[0]
}

// Generic arrow function
const identity7 = <T>(products: T[]): T => {
    return products[0]
}