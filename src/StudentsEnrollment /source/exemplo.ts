import { Enrollment } from "./Enrollment";
import { Seminar } from "./Seminar";
import { Student } from "./Student";
import { Professor } from "./Professor";

// Criando objetos Student
const student1 = new Student(
  "Alice",
  "123 Main St",
  "555-1234",
  "alice@example.com",
  "S12345",
  "A"
);
const student2 = new Student(
  "Bob",
  "456 Elm St",
  "555-5678",
  "bob@example.com",
  "S67890",
  "B"
);

// Criando objeto Seminar
const seminar = new Seminar("History Seminar", "HS123", "$100");

// Criando objeto Professor
const professor = new Professor(
  "Dr. Smith",
  "789 Oak St",
  "555-9012",
  "smith@example.com",
  "$5000"
);

// Criando objetos Enrollment
const enrollment1 = new Enrollment(student1, seminar, "ordered", 90);
const enrollment2 = new Enrollment(student2, seminar, "fifo", 85);

// Associando objetos Student e Seminar
student1.enrollments.push(enrollment1);
student2.enrollments.push(enrollment2);
seminar.enrollments.push(enrollment1, enrollment2);

// Associando objeto Seminar ao Professor
professor.seminars.push(seminar);
seminar.professor = professor;

console.log(student1);
console.log(student2);
console.log(seminar);
console.log(professor);
