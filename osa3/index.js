const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons =  [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": 2
      },
      {
        "name": "Arto Järvinen",
        "number": "040-123456",
        "id": 3
      },
      {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": 4
      }
    ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const per = persons.find(p => p.id === id )
    if ( note ) {
        response.json(note)
    } else {
        response.status(404).end()
    }
  })

app.delete('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    per = persons.filter(p => p.id !== id)
  
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (body.name === undefined || body.number === undefined) {
        return response.status(400).json({error: 'content missing. ensure you have both name and number'})
    }else if(persons.map(e => e.name).indexOf(body.name) !== -1) {
        return response.status(400).json({error: 'duplicate: name already in directory'})
    }
    
    const per = {
        name: body.name,
        number: body.number,
        id: Math.random()*10000
    }
    
    persons = persons.concat(per)

    response.status(201).end()
  })

const PORT = 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})