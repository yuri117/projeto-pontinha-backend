const mongoose = require('mongoose');

const { Schema } = mongoose;

const { temaSchema } = require('./Tema');

const clubeSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    imagem: String,
    temas: {
        type: [temaSchema]
    }
});

const Clube = mongoose.model("Clube", clubeSchema);

module.exports = { Clube };