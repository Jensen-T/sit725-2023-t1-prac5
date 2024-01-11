let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postButton(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllButtons(req,res);
});

module.exports = router;