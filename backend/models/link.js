const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//The linkSchema, describes the structure of the documents
//that we want to save in the Link collection
const linkSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
});

//the first Parameter of the model is important,
//because it will pluralize it and look for that collection
//In this case it will look for the Links collection in the DB
const Link = mongoose.model('Link', linkSchema);

module.exports = Link;