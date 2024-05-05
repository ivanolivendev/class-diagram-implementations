import { Seminar } from "./Seminar";
import { Student } from "./Student";

export class Enrollment {
  constructor(
    public student: Student,
    public seminar: Seminar,
    public waitingList: string,
    public marksReceived: any
  ) {}

  getAverageToDate(): any {}
  getFinalMark(): any {}
}
