const mongoose = require ('mongoose');

const menuItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    taste : {
        type : String,
        enum : ['Sweet', 'Spicy', 'Sour'],
    },
    is_drink : {
        type : Boolean,
        dafault : false,
    },
    ingredients : {
        type : [String],
        dafault : [],
    },
    num_sales : {
        type : Number,
        dafault : 0,
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;