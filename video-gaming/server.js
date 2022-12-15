// const express = require('express')
// const MongoClient = require('mongodb').MongoClient
// const bodyParser = require('body-parser')
// const db = require("./config/db")

// const app = express()
// const port = 8000

// app.use(bodyParser.urlencoded({extended: true}))


// MongoClient.connect(db.url, (err, database) => {
//     if(err) return console.log(err)
//     require("./src/app/routes")(app, database)
//     app.listen(port,  () => {
//     console.log("We are live on " + port)
// })
// })

const express = require('express')
const app = express()
const db = require('./connection')
const productModel = require('./src/app/models/productModels')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/', async(req, res) => {
    const {title, price, category, description, image} = req.body
    try {
        const newProduct = await productModel.create({title, price, category, description, image})
        res.json(newProduct)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(3001, () => {
    console.log('Listening to 3001')
})

// const client = new MongoClient(db.url, (err, database) => {
//      if(err) return console.log(err)
//         require("./src/app/routes")(app, database)
//        app.listen(port,  () => {
//         console.log("We are live on " + port)
//     })
//  })

