export class Customer {
  public name: string;
  public address: string;
  public dob: string;
  public cardNumber: string;
  public pin: string;

  constructor(
    name: string,
    address: string,
    dob: string,
    cardNumber: string,
    pin: string,
    verifyPassword: string
  ) {
    this.name = name;
    this.address = address;
    this.dob = dob;
    this.cardNumber = cardNumber;
    this.pin = pin;
    this.verifyPassword = verifyPassword;
  }
  public verifyPassword: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getDob(): string {
    return this.dob;
  }

  public setDob(dob: string): void {
    this.dob = dob;
  }

  public getCardNumber(): string {
    return this.cardNumber;
  }

  public setCardNumber(cardNumber: string): void {
    this.cardNumber = cardNumber;
  }

  public getPin(): string {
    return this.pin;
  }

  public setPin(pin: string): void {
    this.pin = pin;
  }

  public getVerifyPassword(): string {
    return this.verifyPassword;
  }

  public setVerifyPassword(verifyPassword: string): void {
    this.verifyPassword = verifyPassword;
  }
}
