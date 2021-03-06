const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SheetSchema = new Schema({
    content: {
        type: String
    },
    isbn: {
        type: String
    },
    pagenumber: {
        type: Number
    }
});

module.exports = mongoose.model('Sheet', SheetSchema);