let client = require('../dbConnection');

let collection = client.db().collection('Buttons');

function postButton(button, callback) {
    collection.insertOne(button,callback);
}

function getAllButtons(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postButton,getAllButtons}