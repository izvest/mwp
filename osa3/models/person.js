const mongoose = require('mongoose')
const pwd = require('../passwd');

const url = 'mongodb+srv://mwd:'+pwd.givePass()+'@mwdcluster-m37cw.mongodb.net/mwdosa3'

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String
  })

  module.exports = Person