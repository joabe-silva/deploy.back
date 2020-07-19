const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    titulo: {
       type: String 
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Item', ItemSchema);