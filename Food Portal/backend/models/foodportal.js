const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    id : {
        type : String
    },
    name: {
        type : String
    },
    image : {
        type : String
    },
    price: {
        type : Number
    },
    description: {
        type : String
    }
})

const Item = new mongoose.model("Item", itemSchema);

module.exports = Item;