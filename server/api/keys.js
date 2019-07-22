
let key = '9B2dfrXBoT2XEatSAoeY7Rw7BTFZMRURpxd9vHQz'


const router = require('express').Router();
module.exports = router;


router.get('/',sendKey)

function sendKey(request, response){
const name = request.params.puppy
  response.send(key)
}


