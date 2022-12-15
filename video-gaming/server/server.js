const express = require("express")
const cors = require("cors")
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const bodyparser = require("body-parser");
const { response } = require("express");

// const app = express();
// const port = 8000;
// require('../src/app/routes/')(app, {})
// app.listen(port, () => {  console.log('We are live on ' + port);});
//  const app2 = express();

// const uri = "mongodb+srv://nikoleta:nikoleta@store.8wqnyl3.mongodb.net/?retryWrites=true&w=majority"

// mongoose.set('strictQuery', true)

// async function connect() {
//   try {
//     await mongoose.connect(uri)
    
//     console.log("Connected to MongoDB")
//   }catch (error) {
//     console.error(error)
//   }
// }


// connect()

// app2.listen(8000, () => {
//   console.log("Server started on port 8000")
// })



// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// // parse requests of content-type - application/json
// app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Server is working!" });
// });


// require("../src/app/routes/products.routes")(app)
// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

// const db = require("../src/app/models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const apps = express()
apps.use(express.static('public'))
apps.use(bodyparser.urlencoded({ extended: false }))
apps.use(bodyparser.json())
apps.use(cors({ origin: true, credentials: true }))

const stripe = require("stripe")("sk_test_51MEgCwJKuPi8UrtQqSxi8TWhByDeeTENPXWoVxDBVZyVd8tjBKQGFuGMnUxGM8JSW05NgHsoW0d0AD4ZCbqnoo2A00IAuOgfX7")

apps.post("/checkout", async (req, res, next) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_address_collection: { allowed_countries: ['US', 'CA'] },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: { amount: 0, currency: 'usd' },
                        display_name: 'Free shipping',
                        delivery_estimate: {
                            minimum: { unit: 'business_day', value: 5 },
                            maximum: { unit: 'business_day', value: 7 },
                        },
                    },
                },
            ],
            line_items: req.body.items.map((item) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.product],
                    }
                    , unit_amount: item.price * 100,
                }
                , quantity: item.quantity
            })),
            mode: "payment",
            success_url: "http://localhost:4242/success.html",
            cancel_url: "http://localhost:4242/cancel.html",
        })
        res.status(200).json(session)
    } catch (error) {
        next(error)
    }
})

apps.listen(4242, () => console.log('app is running on port 4242'))