const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
let students = [
  {
    id: 201,
    rollNumber: "CSE2401",
    name: "Varun Kumar Kaushik",
    branch: "CSE",
    semester: 3,
    email: "varun@example.com"
  },
  {
    id: 202,
    rollNumber: "ECE2402",
    name: "Bauldar ",
    branch: "ECE",
    semester: 3,
    email: "bauldar@example.com"
  },
  {
    id: 203,
    rollNumber: "CSE2403",
    name: "Gagandos",
    branch: "CSE",
    semester: 3,
    email: "gagandos@example.com"
  }
];
let nextId = 204;
app.get('/api/students', (req, res) => {
  res.status(200).json(students);
});
app.get('/api/students/filter', (req, res) => {
  const branch = req.query.branch;
  if (!branch) {
    return res.status(200).json([]);
  }
  const result = students.filter(
    s => s.branch.toLowerCase() === branch.toLowerCase()
  );
  res.status(200).json(result);
});
app.get('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
});
app.post('/api/students', (req, res) => {
  const { rollNumber, name, branch, semester, email } = req.body || {};
  if (!rollNumber || !name || !branch || !semester || !email || isNaN(semester)) {
    return res.status(400).json({ message: "Please provide all valid fields" });
  }
  const newStudent = {
    id: nextId,
    rollNumber: String(rollNumber),
    name: name,
    branch: branch,
    semester: Number(semester),
    email: email
  };
  nextId++;
  students.push(newStudent);
  res.status(201).json(newStudent);
});
app.put('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  const { rollNumber, name, branch, semester, email } = req.body || {};
  if (!rollNumber || !name || !branch || !semester || !email || isNaN(semester)) {
    return res.status(400).json({ message: "Please provide all valid fields" });
  }
  student.rollNumber = String(rollNumber);
  student.name = name;
  student.branch = branch;
  student.semester = Number(semester);
  student.email = email;
  res.status(200).json(student);
});
app.delete('/api/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully" });
});
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});