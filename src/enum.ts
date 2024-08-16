// ENUMS
// List of related constants

// PascalCase
enum Size {Small, Medium, Large} // membes will have values {0,1,2} respectively
enum Mobile {Camera = 'a', Mic = 'm', Mp = 50} // Al of them constant

// if we use const with enum then compilar will generate optimise code
const enum Length {something} 
let myLength: Length = Length.something 

