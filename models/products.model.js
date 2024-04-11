const mongoose = require('mongoose');

// Initialize the model for the product
const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required : [true, "Product must have a name"]
    },
    quantity:{
        type: Number,
        required: true,
        default: 0

    },
    price:{
        type: Number,
        required: true,
        default : 0
    },
    image:{
        type: String,
        required: false
    }
},
    {
        timestamps: true,
    },

);

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;