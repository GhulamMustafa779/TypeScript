// UNION TYPE (variable | variable)
// With union type we can give a variable and function params more than one type 
function kgToLbs(weigth: number | string): number {
    console.log(weigth);
    // now weight will give function for both number and string
    // We can use Narrowing for union 
    if (typeof weigth === 'number'){
        return weigth * 1.22; // In this block weight will show number functions only
    } else{
        return parseInt(weigth) * 1.22; // // In this block weight will show string functions only
    }
} // Now we can call this function with more than one type of parameters


kgToLbs(12);
kgToLbs('12');

// NARROWING
// if (typeof weigth === 'number'){
//     return weigth * 1.22; // In this block weight will show number functions only
// } else{
//     return parseInt(weigth) * 1.22; // // In this block weight will show string functions only
// }

