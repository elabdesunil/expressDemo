
const router = require('express').Router();

let puppies = [{
  id:1, 
  name:'Tommy', 
  image:"https://cdn.pixabay.com/photos/puppy-dog-pet-animal-cute-white-1903313/"
},{
  id:2, 
  name: "Speedy",
  image: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__480.jpg"
},
{
  id:3,
  name: "Roger",
  image: "https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518__480.jpg"
},{
  id: 4,
  name: "Richard",
  image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__480.jpg",
  
},{
  id:5,
  name:"Spot",
  image: "https://cdn.pixabay.com/photo/2015/11/03/12/58/dog-1020790__480.jpg"
}]


router.get('/',sendPuppies)

function sendPuppies(request, response){

const name = request.params.puppy
  response.send(puppies)
}

router.post('/', function(req,res){
  let newId = puppies.length +1
  console.log(req.body)
  let puppy = {
    id: newId,
    name: req.body.name
  }
  puppies.push(puppy)
  res.send(puppies)
})

// Delete Puppy
router.delete('/:id', function(req, res, next) {
  let newPuppies = tests.filter(puppy => puppy.id !==  req.params.id);
  res.json(newPuppies);
});

// Update Puppy
router.put('/:id', function(req, res, next) {
  puppies.map(puppy => {
    if (score.id === req.params.id) {
      puppy.name = req.body.name
    }
  });
  res.json(puppies);
});



module.exports = router;
