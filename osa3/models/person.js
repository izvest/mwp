const mongoose = require('mongoose')
//const pwd = require('../passwd');

const url = process.env.MONGODB_URL

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String
  })

  module.exports = Person