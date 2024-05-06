export class Car {
  constructor(public make: string, public model: string, public year: number) {}
  accelerate(): void {
    console.log("accelerate");
  }

  break(): void {
    console.log("break");
  }

  getSpeed(): void {
    console.log("get speed");
  }
}
