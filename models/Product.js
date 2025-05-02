const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  type: String, 
  website: String,
  logo: {
    type: Object
  },
  proof: {
    type: String, 
    required: false // optional
  },
  categories: [
    {
      id: String,
      name: String,
      slug: String
    }
  ],
  alternatives: [
    {
      id: String,
      name: String,
      description: String,
      website: String,
      logo: {
        type: Object
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
