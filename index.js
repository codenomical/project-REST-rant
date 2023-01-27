require('dotenv').config()
const express = require('express')
const app = express()

//add 01.25.23
app.set ('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//add 01.23.23
app.use('/places', require('./controllers/places'))

// change 01.25.23
// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

app.get('/', (req, res) => {
    res.render('home')
})

// change 01.25.23
// app.get('*', (req, res) => {
//     res.status(404).send('<h1>404 page</h1>')
// })

app.get('*', (req, res) => {
    res.render('error404')
})

// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  
app.listen(process.env.PORT)
