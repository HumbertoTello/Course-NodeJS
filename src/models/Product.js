const mongoose = require('mongoose'); // mongoose import
const mongoosePaginate = require('mongoose-paginate');

// description of product
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ProductSchema.plugin(mongoosePaginate);

// registration of the model
mongoose.model('Product', ProductSchema)


