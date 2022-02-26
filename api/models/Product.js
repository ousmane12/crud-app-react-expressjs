const mongoose = require('mongoose');
const { default: slugify } = require('slugify');


const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please add a quantity']
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Create product slug from the schema
ProductSchema.pre('save', function(next){
    this.slug = slugify(this.name, {
        lower: true
    });
    next();

});

module.exports = mongoose.model('Product', ProductSchema);