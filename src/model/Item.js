const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const ItemSchema = new mongoose.Schema({
    titulo: {
       type: String 
    },
    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

ItemSchema.plugin(mongoosePaginate);

mongoose.model('Item', ItemSchema);