const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://rrao3426:W4qlmP6AuJDIZ1gr@productlist.sc5ex65.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=ProductList', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
// mongodb+srv://rrao3426:W4qlmP6AuJDIZ1gr@productlist.sc5ex65.mongodb.net/?retryWrites=true&w=majority&appName=ProductList
// mongodb://localhost:27017/newdatabase
