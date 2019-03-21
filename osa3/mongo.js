const mongoose = require('mongoose')
const pwd = require('./passwd');

// Replace with the URL of your own database. Do not store the password on GitHub!
const url = 'mongodb+srv://mwd:'+pwd.givePass()+'@mwdcluster-m37cw.mongodb.net/mwdosa3'

mongoose.connect(url)

const Person = mongoose.model('Person', {
    name: String,
    number: String
  })

if (process.argv.length === 4){
    const person = new Person({
        name: process.argv[2],
        number: process.argv[3]
      })

    person
      .save()
      .then(response => {
        console.log('added person '+process.argv[2]+' '+process.argv[3]+'to the database!')
        mongoose.connection.close()
      })

}
else if (process.argv.length === 2){
    Person
    .find({})
        .then(result => {
            console.log("Puhelinluettelo")
        result.forEach(per => {
            console.log(per.name+" "+per.number)
        })
    mongoose.connection.close()
    })
}
else{
    console.log("incorrect syntax. ensure you have only 2 arguments. name with no space or with quotationmarks and a number")
    mongoose.connection.close()
}