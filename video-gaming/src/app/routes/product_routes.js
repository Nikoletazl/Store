module.exports = function(app, db) {
    app.post('/products', (req, res) => {
        const product = {text: req.body.body}
        db.collection('products').insert(product, (err, results) => {
            
        })
        })
}