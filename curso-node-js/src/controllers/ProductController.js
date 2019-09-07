const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //listAll
    async listAll(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page: page, limit: 10 });
        return res.json(products);
    },

    //Create
    async create(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //listById
    async listById(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //update
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    }, 

    //delete
    async delete(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}