// Literal
let quantity: 50 = 50;
// Now you can only assign 50 to this variable otherwise it will give error

let quantity1: 10 | 20 | 30 = 10;

// OR we can declair a type and use it here
type Quantity = 10 | 20 | 30;
let quantity3: Quantity = 20;

// 10 | 20 | 30 is calles literal type
// Literals don't have to be numbers only they can be strings
type StringType = '1' | '2';

