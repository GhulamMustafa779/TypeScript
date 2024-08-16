// TypeScript is very strict about null and undefined because they produce many errors
function greeting(name: string){
    console.log(name.toUpperCase());
}

// greeting(null); // It will show error because typescript avoids null and undefined
// greeting(null); // if we set "strictNullChecks": false,  in Type checking section then it will stop checking the null type

// We can only use type checking in if condition to avoid errors
function greeting2(name: string){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hello world!");        
}
greeting2('Hello');

// If we want to allow null value then we can give type to params
function greeting3(name: string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hello world!");        
}
greeting3(null); // Now it can take null value
greeting3(undefined); // Now it can take undefined value