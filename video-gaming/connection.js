const mongoose = require('mongoose')

mongoose.set('strictQuery', true); 
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const uri = 'mongodb+srv://nikoleta:NDGe9pZJy9eCwEpj@store.8wqnyl3.mongodb.net/?retryWrites=true&w=majority'
const connection = mongoose.connect(uri, connectionParams).then(
    () => console.log('connected to cloud atlas')
).catch((err) => {console.log(err)})

module.exports = connection