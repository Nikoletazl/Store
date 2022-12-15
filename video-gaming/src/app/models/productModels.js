const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    title: 'String',
    price: 'Number',
    category: 'String',
    description: 'String',
    image: 'String',
    },
    {timestamps: true}
)

const Post = mongoose.model('Post', schema)
module.exports = Post