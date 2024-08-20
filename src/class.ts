class User2 {
  protected _courseCount = 1;
  // public email: string
  // private name: string
  public readonly city: string = "lahore";
  // constructor(name: string, email:string){
  //     this.email = email
  //     this.name = name
  // }
  constructor(public name: string, public email: string) {}
  // This the typescript code and it produces same code as before

  private deleteToken() {
    console.log("Token is deleted");
  }

  // Getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // Setter
  set courseCount(count) {
    this.deleteToken();
    this._courseCount = count;
  }
}

class SubUser extends User2 {
  isFamily: boolean = true;
  set changeCount(count: number) {
    this._courseCount = count;
  }
}

const mustafaGM = new User2("Mustafa", "mustafa@gmail.com");
