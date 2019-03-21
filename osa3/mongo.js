const Person = require('./models/person')
const mongoose = require('mongoose')

if (process.argv.length === 4){
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
  })

  person
  .save()
  .then(res => {
    console.log('added person '+process.argv[2]+' '+process.argv[3]+' to the database!')
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