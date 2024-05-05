import { Seminar } from "./Seminar";

export class Professor {
  constructor(
    public name: string,
    public adress: string,
    public phoneNumber: string,
    public emailAdress: string,
    public salary: string,
    public seminar: Seminar[] = []
  ) {}
}
