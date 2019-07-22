let tests = [{id : 1, score: 99, subject : 'Physics', studentID : 2},{id:2, score:87,subject:'Physics',studentId:1}, {id:3,score, subject:'Physics'}]

const router = require('express').Router();
module.exports = router

// Get Tests
router.get('/', function(req, res, next) {
  res.json(tests);
});

// Get Test by Id
router.get('/:id', function(req, res, next) {
  let test = tests.filter(test => test.id === +req.params.id);
  res.json(test);
});

// Add Score
router.post('/', function(req, res, next) {
  let newId = tests.length + 1;
  let test = {
    id: newId,
    score: req.body.score,
    studentId: req.body.studentId,
    subject: req.body.subject,
  };
  tests.push(test);
  res.json(tests);
});

// Delete Score
router.delete('/:id', function(req, res, next) {
  let newScores = tests.filter(score => score.id !==  +req.params.id);
  tests = newScores;
  res.json(tests);
});

// Update Score
router.put('/:id', function(req, res, next) {
  tests.map(score => {
    if (score.id === +req.params.id) {
      score.score = req.body.score;
      score.studentId = req.body.studentId;
      score.subject = req.body.subject;
    }
  });
  res.json(tests);
});