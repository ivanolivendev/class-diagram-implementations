import { Enrollment } from "./Enrollment";
import { Professor } from "./Professor";

export class Seminar {
  constructor(
    public name: string,
    public seminarNumber: string,
    public fees: string,
    public enrollment: Enrollment[],
    public professor?: Professor
  ) {}

  addStudent(): void {}
  dropStudent(): void {}
}
