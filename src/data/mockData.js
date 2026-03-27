export const users = [
  { id: 1, name: "Giriraj", email: "giriraj@student.com", role: "student" },
  { id: 2, name: "Aman", email: "aman23@student.com", role: "student" },
  { id: 3, name: "Sakshi", email: "sakshi@student.com", role: "student" },
  { id: 4, name: "Prof. Sumit Kumar", email: "sumitkumar@admin.com", role: "admin" },
];

export const assignments = [
  {
    id: 1,
    title: "React Hooks Assignment",
    description: "Build a counter app using useState and useEffect.",
    dueDate: "2026-03-28",
    driveLink: "https://drive.google.com/drive/u/2/home",
    createdBy: 4,
  },
  {
    id: 2,
    title: "Tailwind UI Design",
    description: "Design a responsive navbar using Tailwind CSS.",
    dueDate: "2026-03-29",
    driveLink: "https://drive.google.com/example2",
    createdBy: 4,
  },
  {
    id: 3,
    title: "API Integration",
    description: "Fetch and display data from a public API.",
    dueDate: "2026-03-30",
    driveLink: "https://drive.google.com/example3",
    createdBy: 4,
  },
];

export const initialSubmissions = [
  { studentId: 1, assignmentId: 1, submitted: false },
  { studentId: 1, assignmentId: 2, submitted: false },
  { studentId: 1, assignmentId: 3, submitted: false },
  { studentId: 2, assignmentId: 1, submitted: false },
  { studentId: 2, assignmentId: 2, submitted: false },
  { studentId: 2, assignmentId: 3, submitted: false },
  { studentId: 3, assignmentId: 1, submitted: false },
  { studentId: 3, assignmentId: 2, submitted: false },
  { studentId: 3, assignmentId: 3, submitted: false },
];