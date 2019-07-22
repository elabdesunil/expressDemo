let puppies = [{ id: 1, name: "griffy" }, { id: 2, name: "willow" }];

const router = require("express").Router();
module.exports = router;

router.get("/", sendPuppies);

function sendPuppies(request, response) {
  response.send(puppies);
}

router.post("/", function(req, res) {
  let newId = puppies.length + 1;
  let newPuppy = {
    id: newId,
    name: req.body.name
  };
  puppies.push(newPuppy);
  res.send(puppies);
});
