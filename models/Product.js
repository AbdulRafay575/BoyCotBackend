const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: {
    type: String,
    required: true,
    // unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  type: String, // e.g. "supports-israel"
  website: String,
  logo: {
    type: Map, // This allows flexibility (type and url or any extra fields)
    of: String
  },
  proof: {
    type: String, // URL to the proof
    required: false // optional, can be made required if needed
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
        type: Map,
        of: String
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
