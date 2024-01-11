let collection = require('../models/button');

const postButton = (req,res) => {
    let button = req.body;
    collection.postButton(button, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllButtons = (req,res) => {
    collection.getAllButtons((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

module.exports = {postButton,getAllButtons}