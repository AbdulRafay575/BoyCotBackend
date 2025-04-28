const express = require('express');
const router = express.Router();
const UserProduct = require('../models/userproduct.model');
const Product = require('../models/Product.js'); // main product model

// Get all user-submitted products (admin only)
router.get('/', async (req, res) => {
  try {
    const products = await UserProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit new product (user)
router.post('/', async (req, res) => {
  try {
    const product = new UserProduct(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Approve product and add to main product collection
router.post('/:id/approve', async (req, res) => {
  try {
    const userProduct = await UserProduct.findById(req.params.id);
    if (!userProduct) return res.status(404).json({ error: 'Not found' });

    const approvedProduct = new Product(userProduct.toObject());
    await approvedProduct.save();
    await UserProduct.findByIdAndDelete(req.params.id);

    res.json({ message: 'Product approved and added to main list' });
  } catch (err) {
    res.status(500).json({ error: 'Approval failed' });
  }
});

// Delete a user-submitted product
router.delete('/:id', async (req, res) => {
  try {
    await UserProduct.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
