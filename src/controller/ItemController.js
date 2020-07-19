const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports =  {
    async item(req, res) {
        const itens = await Item.findById(req.params.id);

        return res.json(itens);
    },
    async itens(req, res) {
        const itens = await Item.find();

        return res.json(itens);
    },
    async cadastro(req, res) {
        const itens = await Item.create(req.body);

        return res.json(itens);
    },
    async edita(req, res) {
        const itens = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(itens);
    },
    async exclui(req, res) {
        await Item.findByIdAndDelete(req.params.id);

        return res.json('Item excluido!');
    },
};
