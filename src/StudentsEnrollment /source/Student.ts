import { Enrollment } from "./Enrollment";

export class Student {
  constructor(
    public name: string,
    public adress: string,
    public phonenumber: string,
    public emailadress: string,
    public studentnumber: string,
    public averagemark: string,
    public enrollments: Enrollment[] = []
  ) {}
}
