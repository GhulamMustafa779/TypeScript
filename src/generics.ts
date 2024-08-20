// GENERICS

function identity(val: number | string): number | string {
  return val;
}

function identity2(val: any): any {
  return val;
}

function identity3<Type>(val: Type): Type {
  return val;
}

function identity4<T>(val: T): T {
  return val;
}

identity3("3");

interface Speaker {
  brand: string;
  size: number;
}

let speaker: Speaker = {
  brand: "JBL",
  size: 1,
};

identity3(speaker);

// Generic array in a function
function identity6<T>(args: T[]): T {
  return args[0];
}

// Generic arrow function
const identity7 = <T>(products: T[]): T => {
  return products[0];
};

// <T,> "," is to show in JSX that it is for generic type

const identity8 = <T, U>(val1: T, val2: U): object => {
  return {
    val1,
    val2,
  };
};

identity8(4, "4");

const identity9 = <T, U extends number>(val1: T, val2: U): object => {
  return {
    val1,
    val2,
  };
};
// identity9(4,"4"); Error because of extended type

interface Database {
  connection: string;
  cursor: string;
}

function identity10<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

// GENERIC CLASSES

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Tutor<T> {
  public cart: T[] = [];

  public addToCart(product: T) {
    this.cart.push(product);
  }
}
