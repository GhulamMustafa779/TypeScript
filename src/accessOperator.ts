type Customer ={
    birthday?: Date
}

function getCustomer(num: number): Customer | null | undefined{
    return num === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined)
    console.log(customer.birthday)

// We can use Optional property access operator instead of this if statment
// Optional property access operator
console.log(customer?.birthday); // if customer is null, it will return undefined
console.log(customer?.birthday?.getFullYear());

// Optional Element access operator
// before : customer[0]
// after : customer?.[0]

// Optional call
let log: any = null
log?.('a'); // if log is not run then it will be called
