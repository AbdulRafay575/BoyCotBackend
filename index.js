const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

const app = express();
const port = 5000;

connectToMongo();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/userproducts', require('./routes/userproducts'));
app.use('/api/admin', require('./routes/admin')); 

app.get('/', (req, res) => {
  res.send('Working');
});


app.listen(port, () => {
  console.log(`Altis backend running at http://localhost:${port}`);
});
