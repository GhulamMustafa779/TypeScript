// OBJECTS
// In Javascript Objects are dynamic so they can be changed over time.
let employee = { id: 1 };
// employee.name = 'GM'; // It is not allowed to add new property in objects

// let employee2 :{
//     id: number,
//     name: string
// } = {id:2}; // Error of not giving name in object

let employee3:{
    id:number,
    name?:string // have to use optional to add value after declaration
} = {id:1};
employee3.name = 'hello';


let employee4: {
    readonly id: number, // Cannot change it again
    name: string
} = {id:1, name:'hello'};
// employee4.name = 1; // Error
// id = 3 // It will give an error because of readonly property

let employee5: {
    id: number,
    name: string,
    retire: (date: Date) => void // It is important to giver params
    // void is the type of return value
} = {
    id : 1,
    name : 'GM',
    retire : (date: Date)=>{
        console.log(date);
    }
}

// Better way to use object

// There is DRY principle (Don't repeat yourself)
let employee6: {
    id: number,
    name: string,
    retire: (date: Date) => void // It is important to giver params
    // void is the type of return value
} = {
    id : 1,
    name : 'GM',
    retire : (date: Date)=>{
        console.log(date);
    }
}

// If we want to create an employee object again, we have to repeat the structure
// Other employee object can have different shapes so it can result in non-consistent objects
// Structure can make code hard to read as well and make it complex too
// To resolve this issue we can define a type
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

// Now if I create a new object I can simply use this type to annotate the new object

let employee7 :Employee = {
    id:1,
    name: 'GM',
    retire: (date: Date) =>{
        console.log(date);
    }
} // It makes the code clean, easy to understand and consistent


