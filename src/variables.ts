
// let variable: type = value

let foo: string = 'Ghulam Mustafa';
foo.toLowerCase().includes('m'.toLowerCase())
console.log(foo);

// Number
let userId: number = 334466;

// Boolean
let isLoggedIn: Boolean = true;

// there are few places to avoid mentioning types
let userName = 'Ghulam Mustafa'
// userName = 23; This line will give an error because TS inferred the type at the time to variable declaration

// Any 
let hero; // The TS will infer it as any variable and will not check type check
function getHero(){
    return 'Thor'
}
hero = getHero(); // It can take any value return 

// function addTwo(num){
//     console.log(num);
// } // num need a type to work

// Never
// It represents values which are never observed
function fail(err: string):never{
    throw new Error(err);
} // It use where function terminates or throw exceptions