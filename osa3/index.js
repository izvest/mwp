const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require('./models/person')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))

const format = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

app.get('/api/persons', (req, res) => {
  Person
  .find({})
  .then(persons => {
    res.json(persons.map(format))
  })
})

app.get('/api/persons/:id', (request, response) => {
    Person
    .findById(request.params.id)
    .then(per => {
      response.json(format(per))
    }).catch(error => {
      console.log(error)
      response.status(404).end()
    })
  })

app.delete('/api/persons/:id', (request, response) => {
   Person
   .findByIdAndDelete(request.params.id)
   .then(response.status(204).end())
   .catch(error => {
    console.log(error)
    response.status(404).end()
  })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({error: 'content missing. ensure you have both name and number'})
    }
    
    const per = new Person ({
        name: body.name,
        number: body.number
    })
    
    per
    .save()
    .then(savedPer => {
      response.json(format(savedPer))
    })

    response.status(201).end()
  })

const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})