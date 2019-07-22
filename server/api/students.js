let students = [
  { id: 1, name: "John" },
  { id: 2, name: "Jim" },
  { id: 3, name: "Jane" }
];

const router = require("express").Router();
module.exports = router;

// const getStudents = (req, res) => {
//   res.send(students);
// };

router.get("/", (req, res) => res.send(students));

router.post("/", (req, res) => {
  let newID = students.length + 1;
  if (!req.body.name) return res.status(400).send("the name cannot be empty");
  let newStudent = {
    id: newID,
    name: req.body.name
  };
  students.push(newStudent);
  res.send(students);
});

router.get("/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student)
    return res
      .status(404)
      .send(`the student with id ${req.params.id} not found.`);
  res.send(student);
});

router.put("/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student)
    return res
      .status(404)
      .send(`the student with the id ${req.params.id} not found.`);
  student.id = parseInt(req.params.id) - 1;
  student.name = req.body.name;
  res.send(students);
});

router.delete("/:id", (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student)
    return res
      .status(404)
      .send(`the student with the id ${req.params.id} not found.`);

  students = students.filter(std => std.id !== parseInt(req.params.id));
  res.send(students);
});
