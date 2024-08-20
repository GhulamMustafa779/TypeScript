// INTERFACE

// Difference between Interface and Type
// Interface can be extended or can add new values in it.
// Type cannot be changed after declaration

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: ()=> string
  startTrail(): string;
  getCoupon(name: string): number;
}

interface User {
  token: string;
} // reopening a interface

// Inheritance
interface Admin extends User {
    role: string
}

const mustafa: Admin = {
  dbId: 234,
  email: "mustafayousaf779@gmail.com",
  userId: 123,
  startTrail: () => {
    return "start trail";
  },
  getCoupon: (name) => {
    console.log(name);
    return 10;
  },
  token: "343434",
  role:"Admin"
};

