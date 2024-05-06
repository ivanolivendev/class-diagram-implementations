import { Car } from "./Car";

export class Drive {
  constructor(
    public name: string,
    public age: string,
    public gender: string,
    car: Car
  ) {}

  driveCar(car: Car): void {
    console.log(`Drive the car: ${car.model}`);
  }

  ParkCar(car: Car): void {
    console.log(`Park the car: ${car.model}`);
  }
}
